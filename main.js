//https://teachablemachine.withgoogle.com/models/LPspztxW4/

//Code for setting webcam properties start
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);
//Code for setting webcam properties end



//Code for taking picture start
function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src=" '+data_uri+'">';
    });
}
//Code for taking picture end



//Code for using and checking ml5 library start
//Code for checking if ml5 library is working properly without errors
console.log('ml5 version:', ml5.version);
//Code for integrating the data from teachablemachine into the web app
classifier = ml5.imageClassifier('https:teachablemachine.withgoogle.com/models/LPspztxW4/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!')
}
//Code for using and checking ml5 library end

function check(){
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2)*100+"%";
    }
}