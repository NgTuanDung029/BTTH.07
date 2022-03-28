
//Required User ID

var userIdRex = /^[a-zA-Z0-9]{5,12}$/
const userID = document.getElementById('userID');
const statusOfUserID = document.querySelector('.statusOfUserID');
const checkUserID = false;

userID.addEventListener('focus', function(){
    this.style.border = "1px solid red";
})

userID.addEventListener('blur', function(){
    this.style.border = "1px solid #ccc";
    if(userIdRex.test(userID.value)){
        statusOfUserID.textContent = "Valid User ID";
        statusOfUserID.style.color = "green";
        checkUserID = true;
    }else{
        statusOfUserID.textContent = "Invalid User ID";
        statusOfUserID.style.color = "red";
        checkUserID = false;
    }
})
//Required Password
const checkPassword = false;
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
        checkPassword = true;
    }else{
        statusOfPassWord.textContent = "Invalid Password";
        statusOfPassWord.style.color = "red";
        checkPassword = false;
    }
})

//Required Name
const checkName = false;
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
        checkName = true;
    }else{
        statusOfNameID.textContent = "Invalid Name";
        statusOfNameID.style.color = "red";
        checkName = false;
    }
})
//Required Contry
const checkCountry = false;
const cityProvince =  document.getElementById('city-province');
const statusOfCountry = document.querySelector('.statusOfCountry');

cityProvince.addEventListener('focusout', function(){
    if(cityProvince.value == ""){
        statusOfCountry.textContent = "Please Select Country";
        statusOfCountry.style.color = "red";
        checkCountry = false;
    }else{
        statusOfCountry.textContent = "Valid Country";
        statusOfCountry.style.color = "green";
        checkCountry = true;
    }
})
//Requied Zip Code
const checkZipCode = false;
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
        checkZipCode = true;
    } else {
        statusOfZipCode.textContent = "Invalid Zip Code";
        statusOfZipCode.style.color = "red";
        checkZipCode = false;
    }
});

// Required Email
const checkEmail = false;
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
        checkEmail = true;
    } else {
        statusOfEmail.textContent = "Invalid Email";
        statusOfEmail.style.color = "red";
        checkEmail = false;
    }
});
//Required Sex
const checkSex = true;
const sexID = document.getElementsByName('sexID');
const statusOfSex = document.getElementById('statusOfSex');
sexID.forEach(e =>{
    e.addEventListener('focusout', () =>{
        if (!sexID[0].checked && !sexID[1].checked){
            statusOfSex.textContent = "Invalild Sex";
            statusOfSex.style.color = "red";
            checkSex = false;
        }else{
            statusOfSex.textContent = "";
            checkSex = true;
        }
    })
})
//Requỉed Language 
const checkLanguage = false;
const languageID = document.getElementsByName('languageID')
const statusOfLanguage = document.getElementById('statusOfLanguage')
languageID.forEach(e =>{
    e.addEventListener('focusout', () =>{
        if (!languageID[0].checked && !languageID[1].checked){
            statusOfLanguage.textContent = 'Invalild Language'
            statusOfLanguage.style.color = 'red'
            checkLanguage = false;
        }else{
            statusOfLanguage.textContent = "";
            checkLanguage = true;
        }
    })
})
const btnSubmit = document.getElementById('btnSubmit');

setInterval(() =>{
    if(checkUserID && checkPassword && checkName && checkCountry && checkZipCode && checkEmail && checkSex && checkLanguage){
        btnSubmit.disabled = false;
        btnSubmit.style.backgroundColor = "green";
    }else{
        btnSubmit.disabled = true;
        btnSubmit.style.backgroundColor = "red";
    }
},1)