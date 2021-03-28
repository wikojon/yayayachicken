var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() 
{ 
    document.getElementById("textbox").innerHTML = ""; //john.speak() 
    recognition.start(); 
    recognition.onresult = function(event) 
    { console.log(event); 
        var Content = event.results[0][0].transcript; 
        document.getElementById("textbox").innerHTML = Content; console.log(Content);
    if(Content=="take my selfie"){
        console.log("take my selfie");
    speak()
    }

    }

}

function speak()
{

    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function(){
        takeSnap()
        save();
        
    },5000)
}

function takeSnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ="<img id='selfie_img' src="+data_uri+">"
    })
}

Webcam.set({
    width:350,
    height:250,
    image_format : 'png',
    png_quality:90
})

camera = document.getElementById("camera");
function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image
    link.click()
    

}