const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const errorHandler = require("../middlewares/errorHandler");

const app = express();

// config
dotenv.config();

// middlewares
app.use([morgan("dev"), cors(), express.json()]);

// routes
app.use("/api/v1/products", require("../routes/products"));

// unmathced routes
app.all("*", (_req, res, _next) => {
  res.status(404).json({ error: "Resource not found" });
});

// error handler
app.use(errorHandler.globalErrorHandler);

module.exports = app;
