let body=document.querySelector("body")
console.log("chrome extension running");
const re=new RegExp('David Dobrik','gi')
//let matches=document.documentElement.innerHTML.match(re)
//let paragraphs=matches.getElementsByTagName('span');
var myAudio = new Audio(chrome.runtime.getURL("song.mp3"));


body.innerHTML=body.innerHTML.replace(re,"<span class='naughty'>$&</span>")



document.getElementsByClassName("naughty").addEventListener("click",function(){
   myAudio.play(); 
});
/*
 var myAudio = new Audio(chrome.runtime.getURL("song.mp3"));
 console.log(matches);

/*matches.addEventListener("onmouseover",function(){
   myAudio.play();
 });
 for (let i = 0; i < matches.length; i++) {
   matches[i].addEventListener("onmouseover",function(){
      myAudio.play();
    });
}
for (var i = 0; i < matches.length; i++) {
   (function(index) {
        matches[index].addEventListener("click", function() {
           console.log("you clicked region number " + index);
         })
   })(i);
}*/
