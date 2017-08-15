console.log('Loaded!');
//change the text of main-text div
var element= document.getElementById('main-text');
element.innerHTML='New Value';


//Move the image
window.onload= alert(document.getElementById('madi').style.marginLeft);
var MadiImg = document.getElementById('madi');
var marginLeft = 0;

function moveRight()
{
    marginLeft= marginLeft + 10;
    MadiImg.style.marginLeft = marginLeft +'px';
}
MadiImg.onClick = function() {
   var interval = setInterval(moveRight,100);
};