import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

export default class MongoConnection {
  mongoDBConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  dbURI;

  db;

  static async connectDb() {
    if (process.env.NODE_ENV === 'test') {
      this.dbURI = await (await MongoMemoryServer.create()).getUri();
    } else {
      this.dbURI = process.env.ATLAS_URI;
    }
    if (this.db) {
      return this.db;
    } else {
      try {
        const newDbClient = await MongoClient.connect(
          this.dbURI,
          this.mongoDBConnectionOptions
        );
        this.db = newDbClient;
        return newDbClient;
      } catch (error) {
        console.error(`MongoDB connection failed with > ${error}`);
        throw error;
      }
    }
  }
}
