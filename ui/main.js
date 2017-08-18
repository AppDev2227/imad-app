console.log('Loaded !!');

//Change the text of main-text div

var element = document.getElementById('main-text');

element.innerHTML = ' New Value ONE ';


// Move the image


var img = document.getElementById('madi');
img.onclick = function() {
   
    var interval = setInterval(moveLeft,100);
  img.style.marginLeft = '200px';  
};