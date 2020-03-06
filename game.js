var im, im0, im1, im2;
var ix=0, iy=150;
var mx=0, my=0; //mouse xy 
var ct = document.getElementById("myCanvas").getContext("2d"); //2D Graphics
 
function mouse_mv(e) {
  mx = e.clientX-20, my = Math.round(0.75*e.clientY-15);
  var coor = "Coordinates: (" + mx + "," + my + ")";
  document.getElementById("demo").innerHTML = coor;
}
function clearCoor() {
  document.getElementById("demo").innerHTML = "";
}
function mouse_click() {
  document.getElementById("demo").innerHTML = "CLICK";
}
function ct_drawImage(color,x,y,sx,sy){
  ct.fillStyle = color;
  ct.fillRect(x, y, sx, sy);
}
  
function loop(){
  //draw background screen
  iy--; if (iy<1) iy=149; //rolling background
  ct_drawImage(im,0,iy,300,150-iy,0,0,300,150-iy); //rolling 1/2
  ct_drawImage(im0,0,0,300,iy,0,150-iy,300,iy);//rolling 2/2

  //draw ship
  ct_drawImage("#ff0000", mx, 140, 20, 10);
  
  //draw alien
  ix++; if (ix>300) ix=0;
  ct_drawImage(im1, ix, 100,30,20);
  ct_drawImage(im2, ix, 130,30,20);
  
  setTimeout(loop,20);
}
  
//start
window.onload = function() {
  im="#255555"; im0="#455555";//im = document.createElement("img");
  //im.setAttribute("src", "star10.png");//background
  im1="blue"; //im1 = document.createElement("img");
  //im1.setAttribute("src", "alien-99B.png");
  im2="cyan";//im2 = document.createElement("img");
  //im2.setAttribute("src", "alien-99E.png");

  loop();
}