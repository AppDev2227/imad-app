console.log('Loaded !!');

//Change the text of main-text div

var element = document.getElementById('main-text');

element.innerHTML = ' New Value ONE ';


// Move the image


var img = document.getElementById('madi');
var marginRight = 0;

function moveRight(){
    marginLeft = margingLeft + 10;
    img.style.marginLeft = marginLeft +'px';
}
img.onclick = function() {
   
    var interval = setInterval(moveRight,100);
    

};