canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


car1_width = 120;
car1_height = 75;
car1_image = "Car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "Car2.png";
car2_x = 10;
car2_y = 80;

background_image = "track.jpg";

function add() 
{
    background_imgTag = new Image() ;
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image() ;
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image() ;
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() 
{
    ctx.drawImage(background_imgTag,0, 0, canvas.width, canvas.height);
}

function uploadCar1() 
{
    ctx.drawImage(car1_imgTag,car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() 
{
    ctx.drawImage(car2_imgTag,car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_key_down); 

function my_key_down(e)
 { keyPressed = e.keyCode; console.log(keyPressed); 
    if (keyPressed=='38') 
    { up(); 
        console.log("up"); }
  if (keyPressed=='40')
   { down(); 
    console.log("down"); }
   if (keyPressed=='37')
    { left(); 
    console.log("left"); } 
   if (keyPressed=='39')
    { right(); 
    console.log("right"); }
 
    if (keyPressed == '85')
    {
        car2_up();
        console.log("Car2: U alphabet key")
    }
    if (keyPressed == '68')
    {
        car2_down();
        console.log("Car2: D alphabet key")
    }

    if (keyPressed == '82')
    {
        car2_right();
        console.log("Car2: R alphabet key")
    }
    if (keyPressed == '76')
    {
        car2_left();
        console.log("Car2: L alphabet key")
    }

    if (car1_x>700) {
        console.log("Car 1 (Green) has won the race! Congrats!");
        document.getElementById("game_status").innerHTML="Car 1 has won the race! Congrats!";
        document.getElementById("game_status").style.color="yellow";
    }
    if (car2_x>700) {
        console.log("Car 2 (Pink) has won the race! Congrats!");
        document.getElementById("game_status").innerHTML="Car 2 has won the race! Congrats!";
        document.getElementById("game_status").style.color="yellow";
    }
}

function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "hidden";
    }
}

function down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "hidden";
    }
}

function left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "visible";
    }
}

function right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "visible";
    }
}

function car2_up()
{
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "hidden";
    }
}

function car2_down()
{
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "hidden";
    }
}

function car2_right() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = " visible";
    }
}

function car2_left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
        document.body.style.overflow = "visible";
    }
}
function reset()
{
    window.location.reload();
}






