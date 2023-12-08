let email = document.getElementById("floatingInput");
let password = document.getElementById("floatingPassword");
let contact = document.getElementById("PhoneNo");
let yourMessage = document.getElementById("message");
const btnValidateForm = document.getElementById("btnSub");


btnValidateForm.addEventListener("click", function() {
    if(email.value == 0 || password.value == 0 || yourMessage.value == 0 || contact.value == 0){
        alert("Form is empty please fill in your information ✍️")
    }
})
