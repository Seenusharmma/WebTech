import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect("mongodb+srv://roshansharma7250_db_user:AHeEzPUF1pqF1XwQ@cluster0.foitgj8.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

app.listen(5000, () => console.log("✅ Server running on port 5000"));
