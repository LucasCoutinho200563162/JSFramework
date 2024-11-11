//import express using es mosdule //or common js const express = require('express')
import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  // slash is route root
  res.send(
    "<h1>We are Group 13!</h1><br> <p>Saipetch Damrongvongsawang </p> <br> <p>Lucas El Fakih Coutinho </p> <br> <p>Kashish Puri</p>"
  );
});

app.listen(port, () => {
  console.log(`The running port is http://localhost:${port}`);
});
