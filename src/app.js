import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CROS_ORIGEN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));

app.use((err, _, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: err.success,
    message: err.message || "Internal Server Error",
    error: err.errors || [],
  });
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

export { app };