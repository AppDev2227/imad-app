//counter code
/*
var button = document.getElementById('counter');

button.onclick = function() {
    
  // Create the request object
  var request = new XMLHttpRequest();
  
  
  //capture the response and store it in a variable
  
  request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE){
          // Take some action
          if(request.status ===200){
                //Capture the list of names and render it as a list
                var names = request.responseText;
                names= JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length;i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
          }
      }
      
  };
  //Make a request to counter endpoint
  request.open('GET','http://deepaliwarade.imad.hasura-app.io/submit-name?name=' + name,true);
  request.send(null);
  
};
*/
// Submit Username / password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Make a request to the server and send the name
    
   // Create the request object
  var request = new XMLHttpRequest();
  
  
  //capture the response and store it in a variable
  
  request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE){
          // Take some action
          if(request.status ===200){
                //Capture the list of names and render it as a list
               console.log('user logged in');
               alert('Logged in successfully');
          } else if (request.status ===403) {
              alert('Username / password is incorrect');
          } else if (request.status ===500){
            alert('something went wrong on the server');  
          }   
        }
  };  
  //Make a request to counter endpoint
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log(username);
  console.log(password);
  request.open('POST','http://deepaliwarade.imad.hasura-app.io/login' ,true);
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username: username, password: password}));
};







