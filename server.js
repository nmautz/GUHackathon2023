
//run "npm install"


const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/text_to_speach', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
