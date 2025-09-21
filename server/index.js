var cors = require('cors');
const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose');

const mongoPassword = process.env.DB_PASS;

const connection = `mongodb+srv://cschutz_db_user:${mongoPassword}@clusterhackathon.tuxpv3d.mongodb.net/?retryWrites=true&w=majority&appName=ClusterHackathon`;

// Allow only the frontend dev server (adjust as needed)
const corsOptions = {
  origin: 'http://localhost:5173', // Vite dev server
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

mongoose.connect("mongodb+srv://cschutz_db_user:5KWchNPBU69VBzkw@clusterhackathon.tuxpv3d.mongodb.net/?retryWrites=true&w=majority&appName=ClusterHackathon")
  .then(() => console.log('Connected!'));

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});
app.get('/', (req, res) =>{
    res.send("Hello from typescript!");
});

