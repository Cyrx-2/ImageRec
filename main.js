Webcam.set({
    width:350,
    height:300,
    image_format : "jpeg",
    jpeg_quality: 90
});

webcam = document.getElementById("webcam");
Webcam.attach("#Webcam");


function Capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML = '<img id = "CapturedImg" src="' +data_uri+ '"/>';
    });
}

console.log("version:",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CfFsjFeLs/model.json", modelLoaded);

function modelLoaded()
{
    console.log("model loaded");
}


function identify()
{
img = document.getElementById("CapturedImg");
classifier.classify(img, gotResult);
}

function gotResult(error , results)
{
    if(error){
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("resultDisplay").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}


