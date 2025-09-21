var cors = require('cors');
const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose');

// Allow only the frontend dev server using CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Vite dev server
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

let connection;
//use mongoose to connect to DB
try{
  const mongoPassword = process.env.DB_PASS;
  connection = `mongodb+srv://cschutz_db_user:${mongoPassword}@clusterhackathon.tuxpv3d.mongodb.net/?retryWrites=true&w=majority&appName=ClusterHackathon`;
}catch (error) {
  console.log(".env not set properly");
}

mongoose.connect(connection) //make sure to add new ip address every time you want to run
  .then(() => console.log('Connected!'))
  .catch(() => console.log("Not Connected"));

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});
app.get('/', (req, res) =>{
    res.send("Hello from typescript!");
});

