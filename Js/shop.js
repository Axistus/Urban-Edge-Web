var sun =document.getElementById("sun-icon")
var moon =document.getElementById("moon-icon")
var darkBody=document.getElementsByTagName("body")[0]
var dark_a_home=document.querySelector(".a-home")
var moonColor = document.getElementById("moon-icon")

//selecting pics for shadow on hover effect
var images = document.getElementsByClassName("prod");

function lightMode(){
    sun.style.display="block"
    moon.style.display="none"
    darkBody.classList.toggle("dark-body")
    dark_a_home.style="none"

    // Loop through each image and attach event listeners
    for (var i = 0; i < 8; i++) {
        const image = images[i];
        image.addEventListener("mouseover", function() {
            //Confirming within the event listener which img is targetted
            //console.log("Targeted Image (within event listener):",      this); // 'this' refers to the current image
            image.style.boxShadow="10px 10px 25px rgba(0, 0, 0, 0.  646)";
            
            }
        )

        image.addEventListener("mouseout", function() {
            //Confirming within the event listener which img is targetted
            //console.log("Targeted Image (within event listener):",      this); // 'this' refers to the current image
            image.style.boxShadow="none";
            }
        );
    }
}

function darkMode(){
   sun.style.display="none"
   moon.style.display="block"
   darkBody.classList.toggle("dark-body")
   dark_a_home.style.color="#a9a9a9"
   moonColor.style.color = "#a9a9a9"

   for (var i = 0; i < 8; i++) {
        
        const image = images[i];

        image.addEventListener("mouseover", function() {
            //Confirming within the event listener which img is targetted
            //console.log("Targeted Image (within event listener):",      this); // 'this' refers to the current image
            image.style.boxShadow="10px 10px 25px rgba(90, 89, 89, 0.646)";  
            }
        )

        image.addEventListener("mouseout", function() {
           //Confirming within the event listener which img is targetted
            //console.log("Targeted Image (within event listener):",      this); // 'this' refers to the current image
            image.style.boxShadow="none";
            }
        )
    }
}


