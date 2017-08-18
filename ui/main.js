console.log('Loaded !!');

//Change the text of main-text div

var element = document.getElementById('main-text');

element.innerHTML = ' New Value ONE ';


// Move the image

function moveRight(){
    marginLeft = margingLeft + 10;
    img.style.marginLeft = marginLeft +'px';
}
var img = document.getElementById('madi');
img.onclick = function() {
   
    var interval = setInterval(moveRight,100);
    

};