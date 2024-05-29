function showReview(){
    document.querySelector(".review-container").classList.add("hover-review");
    document.querySelector(".img-2").classList.add("hover-image");
}
function hideReview(){
    document.querySelector(".review-container").classList.remove("hover-review");
    document.querySelector(".img-2").classList.remove("hover-image");
}

var productImg = document.querySelector(".img-2")
productImg.addEventListener("mouseover",showReview)
productImg.addEventListener("mouseout",hideReview)


var sun =document.getElementById("sun-icon")
var moon =document.getElementById("moon-icon")
var darkBody=document.getElementsByTagName("body")[0]
var darkTextvid=document.querySelector(".vid-text p")
var darkTextvidH1=document.querySelector(".vid-text h1")
var dark_a_home=document.querySelector(".a-home")
var darkSub = document.getElementsByClassName("sub")
var moonColor = document.getElementById("moon-icon")

function darkMode(){
   sun.style.display="none"
   moon.style.display="block"
   darkBody.classList.toggle("dark-body")
   darkTextvid.style.color="#a9a9a9"
   darkTextvidH1.style.color="#a3a3a3"
   
   dark_a_home.style.color="#a9a9a9"
   dark_a_home.addEventListener("mouseover",aHomered)
   dark_a_home.addEventListener("mouseout",aHomeNotrRed)
   function aHomered(){
    dark_a_home.style.color="#7f0000"
   }
   function aHomeNotrRed(){
    dark_a_home.style.color="#a9a9a9"
   }

   for (var i = 0; i <=3 ; i++){
      darkSub[i].style.color ="#a9a9a9" 
   }
   moonColor.style.color = "#a9a9a9"
}
function lightMode(){
    sun.style.display="block"
    moon.style.display="none"
    darkBody.classList.toggle("dark-body")
    darkTextvid.style="none"
    darkTextvidH1.style="none"
    
    dark_a_home.style.color="#141204"
    dark_a_home.addEventListener("mouseover",aHomered)
    dark_a_home.addEventListener("mouseout",aHomeNotRed)
    function aHomered(){
     dark_a_home.style.color="#7f0000"
    }
    function aHomeNotRed(){
     dark_a_home.style.color="#141204"
    }
    
    for (var i = 0; i <=3 ; i++){
        darkSub[i].style="none" 
     }
    
 }

 //footer buttons 
function promtFun (){
    alert("Coming Soon")
}