//Required Name
var nameRex = /^[a-zA-Z ]+$/;
const nameID = document.getElementById('nameID');
const statusOfNameID = document.querySelector('.statusOfNameID');

nameID.addEventListener('focus', function(){
    this.style.border = "1px solid red";
})

nameID.addEventListener('blur',function(){
    this.style.border = "1px solid #ccc";
    if(nameRex.test(nameID.value)){
        statusOfNameID.textContent = "Valid Name";
        statusOfNameID.style.color = "green";
    }else{
        statusOfNameID.textContent = "Invalid Name";
        statusOfNameID.style.color = "red";
    }
})

//Requied Zip Code
var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
const zipCodeID = document.getElementById("zipCodeID");
const statusOfZipCode = document.querySelector(".statusOfZipCode");

zipCodeID.addEventListener("focus", function() {
  this.style.border = "1px solid red";
});

zipCodeID.addEventListener("blur", function() {
    this.style.border = "1px solid #ccc";
    if (isValidZip.test(zipCodeID.value)) {
        statusOfZipCode.textContent = "Valid Zip Code";
        statusOfZipCode.style.color = "green";
    } else {
        statusOfZipCode.textContent = "Invalid Zip Code";
        statusOfZipCode.style.color = "red";
    }
});

// Required Email
var emailRex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const email = document.getElementById("email");
const statusOfEmail = document.querySelector(".statusOfEmail");

email.addEventListener("focus", function() {
    this.style.border = "1px solid red";
    }
);

email.addEventListener("blur", function() {
    this.style.border = "1px solid #ccc";
    if (emailRex.test(email.value)) {
        statusOfEmail.textContent = "Valid Email";
        statusOfEmail.style.color = "green";
    } else {
        statusOfEmail.textContent = "Invalid Email";
        statusOfEmail.style.color = "red";
    }
});