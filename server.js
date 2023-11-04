
//run "npm install"


const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
