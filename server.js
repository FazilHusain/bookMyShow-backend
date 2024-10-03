const express = require("express");
const app = express();
const connectDB = require('./dbConnection')
const Ticket = require('./schema');
const cors = require("cors");

app.use(cors());
//Middleware for parsing Json
app.use(express.json());
//Connecting to Database
connectDB();
app.use(express.urlencoded({ extended: false }))
// creating an api and seperating it.
app.use("/api", require("./route"));

const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000'; // Temporary

app.use(cors({
  origin: frontendUrl,
  credentials: true
}));

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log("App listening to port 8080")
});