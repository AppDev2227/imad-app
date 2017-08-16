/*console.log('Loaded!');
//change the text of main-text div
var element= document.getElementById('main-text');
element.innerHTML='New Value';


//Move the image

var img = document.getElementById('madi');
var marginLeft =0;
function moveRight(){
    marginLeft=marginLeft + 10;
    img.style.marginLeft =marginLeft +'px';
    
}
img.onClick = function() {
    var interval =setInterval(moveRight,100);
};
//document.getElementById('madi').style.marginLeft = '200px'
*/


/*var img = document.getElementById("madi");
    var marginLeft = 0;
    img.onclick = function() {
        setInterval( function() {
            marginLeft += 10;
        img.style.marginLeft = marginLeft.toString() + "px";
        } , 100);
    };*/


//=======================================================================
//Counter code
var button = document.getElementById('button');
var counter =0;

button.onClick = function(){
   //Make a request to the counter endpoint
   
   
   //capture the response and store it in a variable
   
   //Render the variable in the correct span
   counter = counter + 1;
   var span = document.getElementById('count');
   span.innerHTML = counter.toString();
    
};  






























