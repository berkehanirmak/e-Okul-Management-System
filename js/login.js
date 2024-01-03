function generateRandomNumbers() {
    var randomNumbers = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('randomNumbers').textContent = "Rakamlar: " + randomNumbers;
}

function checkLogin() {
    var enteredRandom = document.getElementById('randomInput').value;
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;

    // Örnek doğru bilgiler
    var correctUsername = "2024";
    var correctPassword = "1234";

    if (enteredRandom === "" || enteredUsername === "" || enteredPassword === "") {
        alert('Lütfen tüm alanları doldurun.');
        return false; 
    }

    if (enteredRandom === document.getElementById('randomNumbers').textContent.split(" ")[1].toString() && enteredUsername === correctUsername && enteredPassword === correctPassword) {
        window.location.href = "../index.html"; 
        return false; 
    } else {
        alert('Giriş Başarısız! Lütfen doğru bilgileri girin.');
        return false; 
    }
}

window.onload = generateRandomNumbers;
