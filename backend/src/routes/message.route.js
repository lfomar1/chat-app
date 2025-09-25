import express from "express";

const route = express.Router();

route.get("/send", (req, res) => {
  res.send("Send message");
});

export default route;
