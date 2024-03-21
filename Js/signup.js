//function submitted(){
//    var fn = document.getElementById("fname").value
//    var ln =document.getElementById("lname").value
//    var obj ={fn,ln}
//    console.log(obj)   
//}

//constructor
function createUser(name, lastname){
    this.name = name;
    this.lastname = lastname; 
}
function submitForm(){
    firstName = document.getElementById("fname").value
    lastName = document.getElementById("lname").value
    var user1=new createUser(firstName, lastName)
}