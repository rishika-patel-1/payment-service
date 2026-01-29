const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Define microservices
const services = [
  { name: "Auth Service", url: "http://localhost:5001" },
  { name: "Order Service", url: "http://localhost:5002" },
  { name: "Payment Service", url: "http://localhost:5003" }
];

// API to get status of all microservices
app.get("/services", async (req, res) => {
  const results = await Promise.all(
    services.map(async (s) => {
      try {
        const response = await axios.get(`${s.url}/status`);
        return { ...response.data };
      } catch {
        return { name: s.name, status: "Offline", version: "-", pod: "-", time: "-" };
      }
    })
  );
  res.json(results);
});

app.listen(5000, () => console.log("API Gateway running on port 5000"));
