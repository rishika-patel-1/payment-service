const express = require("express");
const app = express();

app.use(express.json());

// STATUS ROUTE (Gateway ke liye)
app.get("/status", (req, res) => {
  res.json({
    name: "Order Service",
    status: "Online",
    version: "1.0.0",
    pod: "order-pod-1",
    time: new Date().toLocaleString()
  });
});

// BUSINESS ROUTE
app.get("/orders", (req, res) => {
  res.json({
    service: "Order Service",
    orders: [
      { id: 1, item: "Laptop", price: 50000 },
      { id: 2, item: "Phone", price: 20000 }
    ]
  });
});

app.listen(5002, () => {
  console.log("Order Service running on port 5002");
});
