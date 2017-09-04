console.log('loaded');
var button = document.getElementById('counter');

button.onclick = function()  {
    var request =new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE ){
          if(request.status === 200){
        var counter = request.responseText;
        var span= document.getElementById('count');
        span.innerHTML = counter.toString();
          }
      }
    };
   request.open('GET','http://sroy7766.imad.hasura-app.io/',true);
   request.send(null);
  
};

var imge = document.getElementById('madi');

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 10;
    imge.style.marginLeft = marginLeft + 'px';
}

imge.onclick = function(){
    var interval = setInterval(moveRight + 100);
};