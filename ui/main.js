console.log('Loaded !!');

//Change the text of main-text div

var element = document.getElementById('main-text');

element.innerHTML = ' New Value ONE ';


// Move the image

alert('im outside function');
var img = document.getElementById('madi');
img.onClick = function() {
    alert ('im inside function now');
    alert (img);
    
  img.style.marginLeft = '200px';  
};