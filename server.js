
//run "npm install"

const spawn = require('child_process').spawn;

const crypto = require('crypto')
const express = require('express');
const app = express();
const port = 3000;

var filter = require('leo-profanity');
filter.loadDictionary('en')

app.use(express.static('public'));
app.use(express.json());


function generate_speech(text, filename, callback){
  const pythonProcess = spawn('python3', ['speech.py', text, filename]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
    callback(filename)
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
    callback(filename)
  });

}

app.post('/text_to_speech', (req, res) => {
  const { text } = req.body; // Extract data from the JSON body

  // Your text-to-speech processing logic goes here
  console.log('Received text:', text);


  clean_text = filter.clean(text)

  if (clean_text.includes('*')){
    res.send({"url":"/profanity.wav"}); // Send a success response
    console.log("profanity: " + text)
    return

  }




  //let filename = "voice"  //Replace with line below
  let filename = crypto.randomUUID({disableEntropyCache : true});
  filename+=".wav"

  generate_speech(text, filename, (file_name)=>{

    res.send({"url":"/"+file_name}); // Send a success response

  })

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
