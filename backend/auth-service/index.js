const express = require("express");
const app = express();

app.get("/status", (req, res) => {
  res.json({
    name: "Auth Service",
    status: "Running",
    version: "1.0.0",
    pod: "auth-pod-1",
    time: new Date().toLocaleString()
  });
});

app.listen(5001, () => {
  console.log("Auth Service running on port 5001");
});
