import express from "express";
import cors from "cors";
import api from "./routes/index.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", api);
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

export default app;
