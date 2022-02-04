lipsX = 0 ;
lipsY = 0 ;    
function preload(){
    lips = loadImage("https://i.postimg.cc/nL8DppQd/l1.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);

}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function draw(){
    image(video,0,0,300,300);
    image(lips , lipsX , lipsY , 30 , 30);
}

function gotPoses(results){
   if(results.lenght > 0){
       console.log(results);
       lipsX = results[0].pose.lips.x ;
       lipsY = results[0].pose.lips.y ;
       console.log("nose x = " + lipsX);
       console.log("nose y = " + lipsY);
   }
}


function take_snapshot(){
    save("my_picture.png");
}