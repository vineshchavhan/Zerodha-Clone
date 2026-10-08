require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");

// Force Node to use Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(express.json());

// Seed holdings
// app.get("/addHoldings", async (req, res) => {
// const tempHoldings = [
//     { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
//     { name: "HDFCBANK",   qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
//     { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
//     { name: "INFY",       qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
//     { name: "ITC",        qty: 5, avg: 202.0,  price: 207.9,   net: "+2.92%",  day: "+0.80%" },
//     { name: "KPITTECH",   qty: 5, avg: 250.3,  price: 266.45,  net: "+6.45%",  day: "+3.54%" },
//     { name: "M&M",        qty: 2, avg: 809.9,  price: 779.8,   net: "-3.72%",  day: "-0.01%", isLoss: true },
//     { name: "RELIANCE",   qty: 1, avg: 2193.7, price: 2112.4,  net: "-3.71%",  day: "+1.44%" },
//     { name: "SBIN",       qty: 4, avg: 324.35, price: 430.2,   net: "+32.63%", day: "-0.34%", isLoss: true },
//     { name: "SGBMAY29",   qty: 2, avg: 4727.0, price: 4719.0,  net: "-0.17%",  day: "+0.15%" },
//     { name: "TATAPOWER",  qty: 5, avg: 104.2,  price: 124.15,  net: "+19.15%", day: "-0.24%", isLoss: true },
//     { name: "TCS",        qty: 1, avg: 3041.7, price: 3194.8,  net: "+5.03%",  day: "-0.25%", isLoss: true },
    // { name: "WIPRO",      qty: 4, avg: 489.3,  price: 577.75,  net: "+18.08%", day: "+0.32%" },
  // ];

  // for (const item of tempHoldings) {
//     const newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     await newHolding.save();
//   }

//   res.send("Holdings seeded!");
// });


//Seed Positions
app.get("/addPositions", async (req, res)=>{
  const tempPositions=[
   
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
  ];
  for (const item of tempPositions) {
   const newPositions = new PositionsModel({
     name: item.name,
     qty: item.qty,
     avg: item.avg,
     price: item.price,
     net: item.net,
     day: item.day,
     isLoss: item.isLoss,
   });
   await newPositions.save();
  }

  res.send("Positons seeded!");
});
  


// All holdings
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// All positions
app.get("/allPositions", async (req, res) => {
  const tempPositions = await PositionsModel.find({});
  res.json(tempPositions);
});


// New order
// app.post("/newOrder", async (req, res) => {
//   const newOrder = new OrdersModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,
//     mode: req.body.mode,
//   });
//   await newOrder.save();
//   res.send("Order saved!");
// });

app.listen(PORT, () => {
  console.log("App started on port", PORT);

  mongoose
    .connect(uri)
    .then(() => console.log("DB Started!"))
    .catch((err) => console.error("DB Error:", err.message));
});