import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fetch from "node-fetch"; // 👈 required to call OpenAI API
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(
  "mongodb+srv://roshansharma7250_db_user:AHeEzPUF1pqF1XwQ@cluster0.foitgj8.mongodb.net/webtech",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// ✅ Schema + Model
const reviewSchema = new mongoose.Schema({
  name: String,
  role: String,
  feedback: String,
  avatar: { type: String, default: "/images/default-avatar.jpg" },
});

const Review = mongoose.model("Review", reviewSchema);

// ✅ Routes
// Get all reviews
app.get("/api/reviews", async (req, res) => {
  const reviews = await Review.find().sort({ _id: -1 });
  res.json(reviews);
});

// Post a new review
app.post("/api/reviews", async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a review
app.delete("/api/reviews/:id", async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Chatbot API Route
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // 👈 store your API key in .env
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // or "gpt-4"
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    res.json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({ error: "Something went wrong with chatbot" });
  }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
