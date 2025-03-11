import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { connection } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
connection();
const PORT = process.env.PORT;
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);
