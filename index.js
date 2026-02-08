import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, CI/CD is working!");
});

const add = (a, b) => a + b;

// পরিবর্তন এখানে:
// যদি এনভায়রনমেন্ট 'test' না হয়, তবেই কেবল সার্ভার চালু হবে।
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export { add, app };
