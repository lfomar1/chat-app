import express from "express";

const route = express.Router();

route.get("/signup", (req, res) => {
  res.send("This is signup");
});

export default route;
