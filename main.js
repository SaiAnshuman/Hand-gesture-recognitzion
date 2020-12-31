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

function check(){

  img = document.getElementById("capturedImg");
  Classifier.classify(img,gotResult);

}

function gotResult(error,result){

   if(error){

   console.log(error);

   }

   else{

    console.log(result);
    document.getElementById("result_gesture_name").innerHTML = result[0].label;
    document.getElementById("result_gesture_name2").innerHTML = result[1].label;
    prediction1name = result[0].label;
    prediction2name = result[1].label;
    speak();


    if(result[0].label == "Peace/victory"){

       document.getElementById("update_gesture").innerHTML = "&#9996;";

    }

    if(result[0].label == "Thumbs up / Best"){

      document.getElementById("update_gesture").innerHTML = "&#128077;";

   }

    if(result[0].label == "Amazing/Noice"){

    document.getElementById("update_gesture").innerHTML = "&#128076;";

    }

    if(result[1].label == "Peace/victory"){

      document.getElementById("update_gesture2").innerHTML = "&#9996;";

   }

   if(result[1].label == "Thumbs up / Best"){

    document.getElementById("update_gesture2").innerHTML = "&#128077;";

 }

 if(result[1].label == "Amazing/Noice"){

  document.getElementById("update_gesture2").innerHTML = "&#128076;";

  }


   }

}