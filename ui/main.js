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
   request.open('GET','http://sroy7766.imad.hasura-app.io/counter',true);
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

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit-btn');
submit.onclick = function(){
    var name = [name1,name2,name3,name4];
    var list = "";
    for(var i=0 ; i < name.length ; i++){
        list+= '<li>'+name[i]+'</li>';
    }
    
};