console.log('loaded');
var button = document.getElementById('counter');
var counter = 0;

/*button.onclick = function()  {
   counter= counter + 1;
   var span= document.getElementById('count');
   span.innerHTML = counter.toString();
};*/

var img = document.getElementById('img-medium');

function moveRight(){
    marginLeft= marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight + 100);
};