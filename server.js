
//run "npm install"


const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/text_to_speech', (req, res) => {
  const { text, voicenum } = req.body; // Extract data from the JSON body

  // Your text-to-speech processing logic goes here
  console.log('Received text:', text);
  console.log('Selected voice:', voicenum);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
