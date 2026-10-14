require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");
const cors = require("cors"); //  moved to top

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");

// Force Node to use Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

//  CORS MUST come before routes
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// ---------- Routes ----------
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const tempPositions = await PositionsModel.find({});
  res.json(tempPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order saved!");
});

//  listen LAST
app.listen(PORT, () => {
  console.log("App started on port", PORT);
  mongoose
    .connect(uri)
    .then(() => console.log("DB Started!"))
    .catch((err) => console.error("DB Error:", err.message));
});