let font;//載入字型文字
let points=[];//轉乘點狀文字，矩陣

function preload () {
   font=loadFont("fonts/Itim-Regular.ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#caf0f8");
}

function draw() {
  background("#caf0f8");
  noFill() //不填滿顏色
  stroke("#ffcad4") //線條顏色
  strokeWeight(3) //線條粗細

  if(mouseIsPressed){   //如果滑鼠被按下時，要???
    //滑鼠被按下
    background("#eaf4f4");   //只要在draw函數，加入background()，就不會留下軌跡
 
   }else{
   //滑鼠沒被按下
 
   }
  
  for(var i=0; i<40; i++){
   for(var j=0; j<40; j++){
    ellipse((50*i)+25,50+50*j,50+mouseX/100)  // 計數變數 i 只要小於 40 時都會做這件事，直到不滿足條件則停下並跳出該程式區塊
    rect(i*50,25+50*j,50+mouseY/100) //方
    ellipse((50*i)+25,50+50*j,25+mouseX/100) //圓
    }
  }
textFont(font); // 設定字型
textSize(200); // 設定字型大小
fill("#fefae0"); // 設定字型顏色為白色
textAlign(CENTER, CENTER); // 設定對齊方式
text("AIR", mouseX, mouseY); // 在滑鼠位置顯示 "YUN"
}