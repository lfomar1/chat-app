import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoute);

// make production ready
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Listening to Port: ${PORT}`);
});
