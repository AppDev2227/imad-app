console.log('Loaded!');
//change the text of main-text div
var element= document.getElementById('main-text');
element.innerHTML='New Value';


//Move the image
window.onload = function () {
    var e = document.getElementById("madi");
    e.innerHTML='Found you';
};
alert(document.getElementById('madi').style.marginLeft);
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight()
{
    marginLeft= marginLeft + 10;
    img.style.marginLeft = marginLeft +'px';
}
img.onClick = function() {
   var interval = setInterval(moveRight,100);
};