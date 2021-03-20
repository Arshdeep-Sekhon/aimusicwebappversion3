song1 = "";
song2 = "";
leftWristX ="";
leftWristY ="";
rightWristX ="";
rightWristY ="";

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
	
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function preload() {
	song2 = loadSound("music2.mp3");
    song1 = loadSound("music.mp3");
}

function modelLoaded() {
    console.log("POSENET IS INITIALISED! BOOP BEEP!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("left wrist x = " + leftWristX + " left wrist y = " + leftWristY + " right wrist x = " + rightWristX + " right wrist y = " + rightWristY);
    }
}