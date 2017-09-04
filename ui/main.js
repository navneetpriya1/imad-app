console.log('loaded');
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function()  {
    var request = XMLHttpRequest();
    request.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
        counter = request.responseText;
        var span= document.getElementById('count');
        span.innerHTML = counter.toString();
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