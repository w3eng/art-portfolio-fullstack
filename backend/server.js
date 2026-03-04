import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Message from "./models/Message.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/* -------- POŁĄCZENIE Z MONGODB -------- */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB połączone ✅"))
  .catch((err) => console.error("Błąd MongoDB:", err));

/* -------- ROUTA KONTAKT -------- */

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Wszystkie pola są wymagane.",
    });
  }

  try {
    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.json({
      success: true,
      message: "Wiadomość zapisana w bazie danych!",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Błąd zapisu do bazy.",
    });
  }
});

/* -------- START -------- */

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});