import express from 'express';
import mongoDbClient from '../db/db.js';

const record = express.Router();

record.route('/record').get(async (req, res) => {
  const dbConnection = await mongoDbClient.connectDb();
  dbConnection
    .db('checkins')
    .collection('checkins')
    .find({})
    .toArray((err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
});

record.route('/record/add').post(async (req, res) => {
  const dbConnection = await mongoDbClient.connectDb();
  const ip = req.header('x-forwarded-for') || req.socket.remoteAddress;
  const newObject = {
    timestamp: Date(),
    ip,
  };
  dbConnection
    .db('checkins')
    .collection('checkins')
    .insertOne(newObject, (err, mongoResult) => {
      if (err) {
        throw err;
      }
      res.json(mongoResult);
    });
});

export default record;
