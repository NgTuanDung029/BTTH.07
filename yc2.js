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


