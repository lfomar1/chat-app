import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
const app = express();

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  console.log(`Listening to Port: ${PORT}`);
});
