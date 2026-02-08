import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, CI/CD is working!");
});

const add = (a, b) => a + b;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { add, app };
