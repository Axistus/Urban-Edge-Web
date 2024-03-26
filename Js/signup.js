
//slelcting middle slider images
var images = document.getElementsByClassName("whyPic")
var imgCounter =2

//slelcting right-mini slider images
var rightImages = document.getElementsByClassName("RightwhyPic")
var rightCounter =3

//slecting left-mini slider image
var leftImages =document.getElementsByClassName("LeftwhyPic")
var leftCounter = 1


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
        rightImages[i+1].style.opacity="1"
        //showing the image left of mid index
        leftImages[i-1].style.opacity="1"
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
    rightImages[rightCounter].style.opacity="1"
    leftImages[leftCounter].style.opacity="1"
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
    rightImages[rightCounter].style.opacity="1"
    leftImages[leftCounter].style.opacity="1"
}





