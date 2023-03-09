let MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"
    }
    else {
        MenuItems.style.maxHeight = "0px"
    }
}
/*

// Code for IE9
  document.getElementById("myDIV").style.msTransform = "rotate(20deg)"; 
  // Standard syntax
  document.getElementById("myDIV").style.transform = "rotate(20deg)"; 
  
    ref: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_transform
  */


function register() {
    document.getElementById("LoginForm").style.transform = "translatex(0px)";
    document.getElementById("RegForm").style.transform = "translatex(0px)";
    document.getElementById("Indicator").style.transformX = "translatex(100px)";

}
function login() {
    document.getElementById("RegForm").style.transform = "translatex(300px)";
    document.getElementById("LoginForm").style.transform = "translatex(300px)";
    document.getElementById("Indicator").style.transformX = "translate(0px)";
    document.getElementById("loader")

}
/* progress bar */
var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                document.getElementById("myBar").style.width = width + "%";
                document.getElementById("myBar").innerHTML = width + "%";
            }
        }
    }
}
