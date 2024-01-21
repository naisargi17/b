import express  from "express";
import dotenv from 'dotenv';
import Connection from "./database/db.js";
import Router from './routes/route.js';
import bodyParser from "body-parser";

dotenv.config();

const app = express();


app.use('/',Router);
app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({extended:true}))
const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);
