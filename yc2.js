$(document).ready(function () {

    function checkUserId() {
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let userID = $('#userID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if (userIDRegex.test(userID)) {
            return true
        }
        return false
    }
    $("#btnRegister").click(function (e) {
        e.preventDefault();
        if (checkUserId()) {
            $(".statusOfUserID").text('UserID hợp lệ')
            $(".statusOfUserID").css('color', 'blue')
        } else {
            $(".statusOfUserID").text('UserID không hợp lệ')
            $(".statusOfUserID").css('color', 'red')
        }
    })
})
$(document).ready(function () {

    function checkPassword() {
        // Cách 02: dùng BTCQ: [1, +duongvocung]
        let password = $('#password').val();
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if (passwordRegex.test(password)) {
            return true
        }
        return false
    }

    $("#btnRegister").click(function (e) {
        e.preventDefault();
        if (checkPassword()) {
            $(".statusOfPassWord").text('PassWord hợp lệ')
            $(".statusOfPassWord").css('color', 'blue')
        } else {
            $(".statusOfPassWord").text('PassWord không hợp lệ')
            $(".statusOfPassWord").css('color', 'red')
        }
    })
})
$(document).ready(function () {

    function checkname() {
        let name = $('#nameID').val();
        let nameRegex = /^[a-zA-Z]{7,12}$/;
        if (nameRegex.test(name)) {
            return true
        }
        return false
    }

    $("#btnRegister").click(function (e) {
        e.preventDefault();
        if (checkname()) {
            $(".statusOfNameID").text('Tên hợp lệ')
            $(".statusOfNameID").css('color', 'blue')
        } else {
            $(".statusOfNameID").text('Tên không hợp lệ')
            $(".statusOfNameID").css('color', 'red')
        }
    })
})

$("#btnRegister").click(function (e) {
    e.preventDefault();
    if (document.getElementById("city-province").value == "") {
        $(".statusOfCountry").text('Mời chọn đất nước')
        $(".statusOfCountry").css('color', 'red')
    }
})

function checkZipcode() {
    let Zipcode = $('#zipCodeID').val()
    let ZipcodeRegex = /^[0-9]+$/
    if (ZipcodeRegex.test(Zipcode)) {
        return true
    }
    return false
}
function checkEmail() {
    let email = $('#email').val()
    let EmailRegex = /\S+@\S+.\S+/
    if (EmailRegex.test(email)) {
        return true
    }
    return false
}
$("#btnRegister").click(function (e) {
    e.preventDefault();
    if (checkZipcode()) {
        $(".statusOfZipCode").text('Zipcode hợp lệ')
        $(".statusOfZipCode").css('color', 'blue')
    } else {
        $(".statusOfZipCode").text('Zipcode không hợp lệ')
        $(".statusOfZipCode").css('color', 'red')
    }
    if (checkEmail()) {
        $(".statusOfEmail").text('Email hợp lệ')
        $(".statusOfEmail").css('color', 'blue')
    } else {
        $(".statusOfEmail").text('Email không hợp lệ')
        $(".statusOfEmail").css('color', 'red')
    }
})
 
$("#btnRegister").click(function (e) {
    e.preventDefault();
    if ($('div.radio.required :radio:checked').length == 0) {
        $("#statusOfSex").text('Mời chọn giới tính')
        $("#statusOfSex").css('color', 'red')
    }
})
 
$("#btnRegister").click(function (e) {
    e.preventDefault();
    if ($('div.checkbox.required :checkbox:checked').length == 0) {
        $("#statusOfLanguage").text('Mời chọn ngôn ngữ')
        $("#statusOfLanguage").css('color', 'red')
    }
})

