let song;

function preload() {
// input the audio sample
song = loadSound("assets/sample-visualisation.mp3");
}

function setup() {
cnv = createCanvas(1000, 200);
// Create a new FFT object and add the song into it
fft = new p5.FFT();
song.connect(fft);
}

function draw() {
  background(255); 
// hint about click the mouse to play the song
if (getAudioContext().state !== 'running') {

fill(204,123,255);
textStyle(BOLDITALIC);
textSize(24);
text('Tap here to get started!', 150,100);
return;
}

let spectrum = fft.analyze();

//draw the spectrum] to show energy per octave
for (let i = 0; i < spectrum.length; i++) {
  noStroke();
let x = map(log(i), 0, log(spectrum.length), 0, 700);
let h = map(spectrum[i], 0, 300, 0, height);
fill(random(204), random(123), 255,20); 
strokeWeight(0.2);
stroke(255);
circle(x+100,100,h);
 }
 }

// music play on or off with a mouse click
function mousePressed() {
if (song.isPlaying()) {
song.stop();
} else {
song.play();
}
}
