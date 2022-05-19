/**
 * This is the main entry point for the server application.
 * This application uses EcmaScript Modules, rather than CommonJS.
 * The point of this application is not to teach others how to write
 * MERN stack applications, but to provide the bare-minimum application
 * that illustrates a three-layer "cake" application stack deployable by Harness.io
 * In this case those layers are:
 *  * Backend (Express & Node)
 *  * Frontend (React)
 *  * Data Persistence (Mongo)
 */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './db/db.js';
import routes from './routes/index.js';
// Note: The config.env file is *specifically ignored by git. You'll need to create your own.
dotenv.config({ path: './config.env' });

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes.customRoutes());

db.connectDb();
// Most modern example apps use port 5000, but as of MacOS Monterey, port 5000 is in use by the airplay receiver.
const PORT = process.env.PORT || 5001;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
// While not strictly necessary, exporting the application as a ES module, facilitates testing.
export default app;
