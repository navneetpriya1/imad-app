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


var submit = document.getElementById('submit_btn');
submit.onclick = function(){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE ){
        if(request.status === 200){
            var names = request.responseText;
            //this is a string.convert to an array.
            names = JSON.parse(names);
            var list = '';
            for(var i=0 ; i < names.length ; i++){
            list += '<li>'+names[i]+'</li>';
    }
    var ul = document.getElementById('nameList');
    ul.innerHTML = list;
        }
        }
};
var nameInput = document.getElementById('name');
var name = nameInput.value;
request.open('GET','http://sroy7766.imad.hasura-app.io/submit-name?name=' + name,true);
request.send(null);
};

var ciityid = document.getElementById('weather'); 
var submit = document.getElementById('submitcity');
submit.onclick = function(){
     var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE ){
        if(request.status === 200){
            var names = request.responseText;
}
  var ul = document.getElementById('citynames');
    ul.innerHTML = names;
        }
};
request.open('GET','http://sroy7766.imad.hasura-app.io//api.openweathermap.org/data/2.5/forecast?id=524901&APPID=052ff811408b1b970bf2d427e9331527' ,true);
request.send(null);
};


