import functions from "firebase-functions"
import express from 'express'
import cors from 'cors'
import { getAllPhotos,addNewPhotos } from "./src/photos.js";

const app = express();
app.use(cors());
app.use(express.json());

// routes here 
app.get('/photos', getAllPhotos) // get all photos 
app.post('/photos', addNewPhotos) // add new photos




export const api = functions.https.onRequest(app);

