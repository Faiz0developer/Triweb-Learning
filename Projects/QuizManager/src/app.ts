import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Workig ");
});

app.listen(3000);
