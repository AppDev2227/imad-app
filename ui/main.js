console.log('Loaded !!');

//Change the text of main-text div

var element = document.getElementById('main-text');

element.innerHTML = ' New Value ONE ';


// Move the image


var img = document.getElementById('madi');
img.onclick = function() {
   
   // var interval = setInterval(moveRight,100);
    
  img.style.marginRight = '200px';  
};