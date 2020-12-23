prediction1name = "";
prediction2name = "";

Webcam.set({

width:350,
height:300 ,
image_format:'jpeg',
jpeg_quality: 90
 

});

camera = document.getElementById("cams");

Webcam.attach(camera);

function takeSnap(){

 Webcam.snap(function(data_uri){

   document.getElementById("result").innerHTML = '<img id="capturedImg" src="'+ data_uri+'">';

 });
 

}

console.log(ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1iKvuFitM/model.json',modelLoaded);

function modelLoaded(){

 console.log("Model Has Been Loaded!");

}

function speak(){

  synth = window.speechSynthesis;
  speakdata1 = "The First prediction is "+ prediction1name;
  speakdata2 = "The Second prediction is" + prediction2name;
  utterThis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);

  synth.speak(utterThis);

}