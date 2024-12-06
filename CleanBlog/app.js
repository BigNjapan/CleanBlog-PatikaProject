const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const blog = { id: 1, title: "Blog title", description: "Blog description" };
  res.json(blog);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});