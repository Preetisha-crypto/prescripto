import dotenv from 'dotenv';
dotenv.config('./config/.env'); // Load .env variables

import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js'; // Ensure correct path

// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API WORKING');
});

app.listen(port, () => console.log('Server started on port', port));
