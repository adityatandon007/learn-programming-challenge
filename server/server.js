const express = require("express");
const request = require("request");
const router = require("./router");
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());
app.use(router);
const port = process.env.PORT || 3000;
app.get('/authenticate', (req, res) => {
  const payload = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  };
  request(
    {
      url: "https://api.jdoodle.com/v1/auth-token",
      method: "POST",
      json: payload
    },
    (error, response, body) => {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", body);
      res.json(body);
    }
  );
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});