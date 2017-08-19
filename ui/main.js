//counter code

var button = document.getElementById('counter');
var counter= 0;
button.onclick = function() {
    
  // Make a request to counter endpoint
  var request = new XMLHttpRequest();
  
  
  //capture the response and store it in a variable
  
  request.onreadystatechange = funtion (){
      if(request.readyState === XMLHttpRequest.DONE){
          // Take some action
          if(request.status ==200){
              
          }
      }
      
  };
  //Render the variable in the correct span
  
  
  counter= counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
    
};