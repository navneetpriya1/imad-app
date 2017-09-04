console.log('loaded');
var button = document.getElementById('counter');
var counter = 0;

/*button.onclick = function()  {
   counter= counter + 1;
   var span= document.getElementById('count');
   span.innerHTML = counter.toString();
};*/

var imge = document.getElementById('madi');

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 10;
    imge.style.marginLeft = marginLeft + 'px';
}

imge.onclick = function(){
    var interval = setInterval(moveRight + 100);
};