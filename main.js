//https://teachablemachine.withgoogle.com/models/O7twguDAo/

function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5 .soundclassifier('https://teachablemachine.withgoogle.com/models/O7twguDAo/modelReady');

}

function modelReady(){
    classifier.classify(gotResults);
    
}