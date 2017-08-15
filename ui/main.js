console.log('Loaded!');
//change the text of main-text div
var element= document.getElementById('main-text');
element.innerHTML='New Value';


//Move the image

var img1 =document.getElementById('madi');
img1.onClick = function() {
    img1.style.marginLeft = '200px';
};