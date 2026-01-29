const express = require("express");
const app = express();

app.use(express.json());

// STATUS ROUTE (Gateway ke liye)
app.get("/status", (req, res) => {
  res.json({
    name: "Payment Service",
    status: "Online",
    version: "1.0.0",
    pod: "payment-pod-1",
    time: new Date().toLocaleString()
  });
});

// BUSINESS ROUTE
app.get("/payments", (req, res) => {
  res.json({
    service: "Payment Service",
    payments: [
      { id: 1, status: "SUCCESS", amount: 50000 },
      { id: 2, status: "PENDING", amount: 20000 }
    ]
  });
});

app.listen(5003, () => {
  console.log("Payment Service running on port 5003");
});
