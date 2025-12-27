function sendForm(event) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexEmail = 

    event.preventDefault();

    let name = document.getElementById("name").Value.trim();
    let email = document.getElementById("email").Value();
    let password =document.getElementById("password").Value();
    let dob = document.getElementById("dob").Value();
    let address = document.getElementById("address").Value();
    let course = document.getElementById("course").Value();

    if (name.length == 0) {
        document.getElementById("nameError").innerHTML = "Name connot be empty";
        document.getElementById("nameError").style.color = "red";
        return
        
    } else if (name.length <= 3 || name.length >= 20) {
        document.getElementById("nameError").innerHTML =
        "name Length must be between 3 to 20 character";
        document.getElementById("nameError").style.color = "red";

        return;
    }
}