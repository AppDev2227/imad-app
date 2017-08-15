console.log('Loaded!');
//change the text of main-text div
var element= document.getElementById('main-text');
element.innerHTML='New Value';


//Move the image

var img =document.getElementById('madi');
function moveRight()
{
    marginLeft= marginLeft + 10;
    img.style.marginLeft = marginLeft +'px';
}
img.onClick = function() {
   var interval = setInterval(moveRight,100);
};