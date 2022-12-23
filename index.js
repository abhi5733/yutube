const api = `AIzaSyBSOL0jXcHRcAqG2RqeKrP6KnbSVmydgn4` ;

const search = async () =>{  //1
   try{
    let query = document.getElementById("query").value ;    // part=snippet
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}`)
    let {items}  = await res.json()  // let data =  , destructuring used here .

  append(items)
   console.log(items)
}
catch(err){
    console.log(err)
} 

}

const  videotype  = async () =>{
    try{
        let query = document.getElementById("query").value ;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}&type=channel`)
       let {items}  = await res.json()  // let data =  , destructuring used here .
       append(items)
       //console.log(items)
    }
    catch(err){
        console.log(err)
    } 
    
}


const  videos  = async () =>{
    try{
        let query = document.getElementById("query").value ;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}&type=video&videoType=movie`)
       let {items}  = await res.json()  // let data =  , destructuring used here .
       append(items)
       //console.log(items)
    }
    catch(err){
        console.log(err)
    } 
    
}
const  videolength= async () =>{
    try{
        let query = document.getElementById("query").value ;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}&videoDuration=long&type=video`)
       let {items}  = await res.json()  // let data =  , destructuring used here .
       append(items)
       //console.log(items)
    }
    catch(err){
        console.log(err)
    } 
    
}

const  regionCode= async () =>{
    try{
        let query = document.getElementById("query").value ;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}&regionCode=IN&chart=mostPopular`)
       let {items}  = await res.json()  // let data =  , destructuring used here .
       append(items)
      // console.log(items)
    }
    catch(err){
        console.log(err)
    } 
    
}

const  marathi = async () =>{
    try{
        let query = document.getElementById("query").value ;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}&relevanceLanguage=hi`)
       let {items}  = await res.json()  // let data =  , destructuring used here .
       append(items)
       //console.log(items)
    }
    catch(err){
        console.log(err)
    } 
    
}
const append = (items)=>{    //2
    let cont =document.getElementById("container") ;
      cont.innerHTML=null ;
    items.forEach(({snippet:{title , channelTitle, thumbnails}, id:{videoId}}) => { //destructuring of items
        let div = document.createElement("div") ;
        div.className = "thumbnail" ;
        let img = document.createElement("img")
        img.src = thumbnails.medium.url
        let name = document.createElement("p") ;
        name.innerHTML = title
        let channel = document.createElement("h3") ;
        channel.innerHTML = channelTitle
// when value of key and value is same pass only ane value
let obj ={
    title,
    channelTitle,
    thumbnails,
    videoId
}

        div.addEventListener("click" ,() => { //adding event listener to whole div
            storevideo(obj)
          } )
  div.append(img,name,channel)
  cont.append(div)
        
    });
}


function storevideo(data){  //3

// sending clicked data to local storage
localStorage.setItem("utube" , JSON.stringify(data)) ;
let flag = localStorage.getItem("flag") ;
if(flag=="true"){
 window.location.href = "video.html" 
}else{
    alert("sign-up firt")
}
}


//signup functionality 

const signup=()=>{
    window.location.href="signup.html"
}

//info page

const info = ()=>{
    window.location.href="account.html" 
}