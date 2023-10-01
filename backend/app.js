const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors()); 
app.use(bodyParser.json()); 

mongoose.connect("mongodb://localhost/bodhidharma_health", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
}); 

app.post("/api/patients/register", (req, res) => {
  // Add logic to register a new patient
});

// Register a new doctor
app.post("/api/doctors/register", (req, res) => {
  // Add logic to register a new doctor
});

// Create a new appointment
app.post("/api/appointments/create", (req, res) => {
  // Add logic to create a new appointment
});

// Fetch doctor's appointments
app.get("/api/doctors/:doctorId/appointments", (req, res) => {
  // Add logic to retrieve doctor's appointments
});

// Fetch patient's appointments
app.get("/api/patients/:patientId/appointments", (req, res) => {
  // Add logic to retrieve patient's appointments
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
