/////////////////Code for Dark Mode and light Mode///////////////////////////

var sun =document.getElementById("sun-icon")
var moon =document.getElementById("moon-icon")
var darkBody=document.getElementsByTagName("body")[0]
var moonColor = document.getElementById("moon-icon")
var dark_a_home=document.querySelector(".a-home")
var dark_whyContainer=document.querySelector(".whyContainer")
var posContainer = document.getElementsByClassName("positionCardContainer")

function darkMode(){
   sun.style.display="none"
   moon.style.display="block"
   darkBody.classList.toggle("dark-body")
   moonColor.style.color = "#a9a9a9"
   dark_whyContainer.style.backgroundColor="#00000069"
   
   for(var i = 0; i<=3 ; i++){
    posContainer[i].style.backgroundColor="#141204"
   }
                           
   dark_a_home.style.color="#a9a9a9"
   dark_a_home.addEventListener("mouseover",aHomered)
   dark_a_home.addEventListener("mouseout",aHomeNotrRed)
   function aHomered(){
    dark_a_home.style.color="#7f0000"
   }
   function aHomeNotrRed(){
    dark_a_home.style.color="#a9a9a9"
   }
}
function lightMode(){
    sun.style.display="block"
    moon.style.display="none"
    darkBody.classList.toggle("dark-body")
    dark_whyContainer.style.backgroundColor="#e5e4e4"
    
    for(var i = 0; i<=3 ; i++){
        posContainer[i].style.backgroundColor="#e5e4e4"
    }

    dark_a_home.style.color="#141204"
    dark_a_home.addEventListener("mouseover",aHomered)
    dark_a_home.addEventListener("mouseout",aHomeNotRed)
    function aHomered(){
     dark_a_home.style.color="#7f0000"
    }
    function aHomeNotRed(){
     dark_a_home.style.color="#141204"
    }
 }


///////////Code for Photo carousel////////////////////////
//slelcting middle slider images
var images = document.getElementsByClassName("whyPic")
var imgCounter =2

//slelcting right-mini slider images
var rightImages = document.getElementsByClassName("RightwhyPic")
var rightCounter =3

//slecting left-mini slider image
var leftImages =document.getElementsByClassName("LeftwhyPic")
var leftCounter = 1

//slecting div for animation
var imgDiv = document.getElementsByClassName[0]

for (var i=0; i<=4; i++){
    if(i!=2){
        //hiding all images other than middle one
        images[i].style.opacity="0"

        //hiding all images other than right of mid index
        if(i==4){
            rightImages[0].style.opacity="0"
        }
        else{
            rightImages[i+1].style.opacity="0"
        }

        //hiding all images other than left of mid index
        if(i==0){
            leftImages[4].style.opacity="0"
        }
        else{
            leftImages[i-1].style.opacity="0"
        }
    }
    else{
        //showing the middle index image
        images[i].style.opacity="1"
        //showing the image right of mid index
        rightImages[i+1].style.opacity="50%"
        //showing the image left of mid index
        leftImages[i-1].style.opacity="50%"
    }
}

function rightClick (){
    images[imgCounter].style.opacity="0"
    rightImages[rightCounter].style.opacity="0"
    leftImages[leftCounter].style.opacity="0"

    imgCounter++
    rightCounter++
    leftCounter++

    if(imgCounter==5){
        imgCounter =0;
    };

    if(rightCounter==5){
        rightCounter=0
    };
    if(leftCounter==5){
        leftCounter=0
    }
    
    images[imgCounter].style.opacity="1"
    images[imgCounter].style.animation="fade 0.5s"
    rightImages[rightCounter].style.opacity="50%"
    leftImages[leftCounter].style.opacity="50%"
    
}

function leftClick(){
    images[imgCounter].style.opacity="0"
    rightImages[rightCounter].style.opacity="0"
    leftImages[leftCounter].style.opacity="0"
    
    imgCounter--;
    rightCounter--;
    leftCounter--;

    if(imgCounter<0){
        imgCounter =4
    };
    if(rightCounter<0){
        rightCounter=4
    };
    if(leftCounter<0){
        leftCounter=4
    }

    images[imgCounter].style.opacity="1"
    images[imgCounter].style.animation="fade 0.5s"
    rightImages[rightCounter].style.opacity="50%"
    leftImages[leftCounter].style.opacity="50%"
}





