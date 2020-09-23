let body=document.querySelector("body")

console.log("chrome extension running");

const re=new RegExp('David Dobrik','gi')//gi- case insensitive

//let matches=document.documentElement.innerHTML.match(re)

var myAudio = new Audio(chrome.runtime.getURL("song.mp3"));



body.innerHTML=body.innerHTML.replace(re,"<span class='naughty'>$&</span>")//replace the words 'David Dobrik' with the span tag


var elements=document.getElementsByClassName("naughty");

for(i=0;i<elements.length;i++){
   elements[i].addEventListener("mouseover",function(){
      myAudio.play();
   });
   elements[i].addEventListener("mouseout",function(){
      myAudio.pause();
      myAudio.currentTime=0;
   });
}


