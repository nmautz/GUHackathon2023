
//run "npm install"

const spawn = require('child_process').spawn;

const crypto = require('crypto')
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());


function generate_speech(text, voice, filename){
  const pythonProcess = spawn('python3', ['speech.py', text, voice, filename]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

}

app.post('/text_to_speech', (req, res) => {
  const { text, voicenum } = req.body; // Extract data from the JSON body

  // Your text-to-speech processing logic goes here
  console.log('Received text:', text);
  console.log('Selected voice:', voicenum);




  const filename = "voice.mp3" //const filename = crypto.randomUUID({disableEntropyCache : true});

  generate_speech(text, voicenum, filename)

  res.send({"url":"/"+filename}); // Send a success response
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
