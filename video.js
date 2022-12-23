// when body is loaded then only js will run, add onload on body .

let playVideo = () =>{   
 
    let {videoId , channelTitle,title} = JSON.parse(localStorage.getItem("utube")) ;
    let container = document.getElementById("container")
    let iframe = document.createElement("iframe") ; // to show video we use iframe tag .
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`  // url taken from utube embed func .
    iframe.setAttribute("allowfullscreen", true)   // to allow full screen
    let name = document.createElement("p")
    name.innerHTML = title ;
    let div = document.createElement("div")
    div.className = "inner"
    let channel = document.createElement("h3") ;
    channel.innerHTML = channelTitle ;
   //  let i = document.createElement("i") ;
   //  i.className= "fas fa-car" ;
    let button = document.createElement("button")
    button.innerText="subscribe"
    let div1 = document.createElement("div") ;
    div1.className = "inner1" ;
  let i1 = document.createElement("i")
  i1.className = "glyphicon glyphicon-thumbs-up";
  let i2 = document.createElement("i")
  i2.className = "fa fa-thumbs-o-down";
  let i3 = document.createElement("i") ;
  i3.className = "fa fa-share";
  // <i class="bi bi-share"></i>
  div1.append(i1,i2,i3)
    div.append(channel,button,div1)
    container.append(iframe,name,div)
   // <i class="fas fa-cloud"></i>
 }
 
 const home = () =>{
    window.location.href = "index.html"
 }