const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dns = require('dns');                     // 👈 add this

// ---- Force Node to use Google DNS ----
dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');         // prefer IPv4

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

// ... your middleware and routes ...

// Correct connection logic – wait for the promise
app.listen(PORT, async () => {
  console.log(`App started on port ${PORT}`);

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      // Force IPv4 in the driver as well
      family: 4,
    });
    console.log('DB Connected!');
  } catch (error) {
    console.error('DB Connection Error:', error.message);
  }
});