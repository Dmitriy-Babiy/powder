import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
