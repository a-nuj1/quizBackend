import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import router from './router/route.js';
import connectDB from './database/db.js';

const app = express();
dotenv.config(); 

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

app.get('/', (req, res) => {   
    res.send('res is send');
});

// Connect to the database
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
