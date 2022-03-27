//Required User ID
var userIdRex = /^[a-zA-Z0-9]{5,12}$/
const userID = document.getElementById('userID');
const statusOfUserID = document.querySelector('.statusOfUserID');

userID.addEventListener('focus', function(){
    this.style.border = "1px solid red";
})

userID.addEventListener('blur', function(){
    this.style.border = "1px solid #ccc";
    if(userIdRex.test(userID.value)){
        statusOfUserID.textContent = "Valid User ID";
        statusOfUserID.style.color = "green";
    }else{
        statusOfUserID.textContent = "Invalid User ID";
        statusOfUserID.style.color = "red";
    }
})
//Required Password
var passWordRex = /^[a-zA-Z0-9]{7,12}$/
const password = document.getElementById('password');
const statusOfPassWord = document.querySelector('.statusOfPassWord');

password.addEventListener('focus', function(){
    this.style.border = "1px solid red";
})

password.addEventListener('blur', function(){
    this.style.border = "1px solid #ccc";
    if(userIdRex.test(userID.value)){
        statusOfPassWord.textContent = "Valid Password";
        statusOfPassWord.style.color = "green";
    }else{
        statusOfPassWord.textContent = "Invalid Password";
        statusOfPassWord.style.color = "red";
    }
})

//Required Name
var nameRex = /^[a-zA-Z\s]+$/
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
//Required Contry
const cityProvince =  document.getElementById('city-province');
const statusOfCountry = document.querySelector('.statusOfCountry');

cityProvince.addEventListener('focusout', function(){
    if(cityProvince.value == ""){
        statusOfCountry.textContent = "Please Select Country";
        statusOfCountry.style.color = "red";
    }else{
        statusOfCountry.textContent = "Valid Country";
        statusOfCountry.style.color = "green";
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
//Required Sex
const sexID = document.getElementsByName('sexID');
const statusOfSex = document.getElementById('statusOfSex');
sexID.forEach(e =>{
    e.addEventListener('focusout', () =>{
        if (!sexID[0].checked && !sexID[1].checked){
            statusOfSex.textContent = 'Invalild Sex'
            statusOfSex.style.color = 'red'
        }else{
            statusOfSex.textContent = ''
        }
    })
})