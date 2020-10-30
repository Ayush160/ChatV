let video;
let img;
let mImg;
function setup() {
  createCanvas(400, 400);
  video=createCapture(VIDEO);
  video.hide();
   mImg=loadImage('Screenshot_2020-10-30-06-25-48-646_com.google.android.apps.docs.jpg');

}

function draw() {
  background(220);
  image(img,0,0);
  

 

  //noLoop();
}
