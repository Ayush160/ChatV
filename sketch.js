let video;
let img;
let mImg;
function setup() {
  createCanvas(400, 400);
  video=createCapture(VIDEO);
  video.hide();
  //img=createImage(100,100);

}

function draw() {
  background(220);
  img=video.get(0,0,400,400);
  mImg=loadImage('img.png');
  image(mImg,0,0,width,height);
 
  img.save('img','png');
  //noLoop();
}