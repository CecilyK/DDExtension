let body=document.querySelector("body")

console.log("chrome extension running");

const re=new RegExp('David Dobrik','gi')//gi- case insensitive

//let matches=document.documentElement.innerHTML.match(re)

var myAudio = new Audio(chrome.runtime.getURL("song.mp3"));
body.innerHTML=body.innerHTML.replace(re,"<span class='naughty' >$&</span>")//replace the words 'David Dobrik' with the span tag


document.addEventListener("click",function(){
   myAudio.play();
});

