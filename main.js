Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function TS() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log("mla5version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RBcR6Amp7/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoded");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if (error==true){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_Object").innerHTML=results[0].label;
        document.getElementById("result_Accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}