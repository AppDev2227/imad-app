console.log('Loaded!');
//change the text of main-text div
var element= document.getElementById('main-text');
element.innerHTML='New Value';


//Move the image

//var img1 = document.getElementById('madi');

//img1.onClick = function(){
    
//document.getElementById('madi').style.marginLeft = '200px'


var img = document.getElementById("madi");
    var marginLeft = 0;
    img.onclick = function() {
        setInterval( function() {
            marginLeft += 10;
            img.style.marginLeft = marginLeft.toString() + "px";
        } , 100)
    };
}
