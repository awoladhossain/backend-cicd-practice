import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, CI/CD is working!");
});

app.get("/api/status", (req, res) => {
  res.status(200).json({ status: "running" });
});

const add = (a, b) => a + b;


if (process.env.NODE_ENV !== "test" && !process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}


export default app;
export { add, app };
