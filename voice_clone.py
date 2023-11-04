# pip install Voice-Cloning

# load all the functions
from voice_cloning.generation import *

# provide a reference sound file, speech text and clone the voice
sound_path = r"voice.m4a" # support most of the sound formats
speech_text = "Please use this package carefully"

generated_wav = speech_generator(
    voice_type = "western", # supports "indian" & "western"
    sound_path = sound_path, 
    speech_text=  speech_text
    )

## Play and save the sound with noise-reduction capabilities

# play the generated sound
play_sound(generated_wav)

# save the file
save_sound(generated_wav, filename="voice output", noise_reduction=True)