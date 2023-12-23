const inputBox = document.querySelector('#pass');
const length = 12;
const upperCase = "QWERTYUIOPASDFGHJKLMNBVCXZ";
const lowerCase = "mnbvcxzaqwsderfgtyhujikolp";
const numbers = "0123456789"
const symbols = "!@#$%^&*()_-+=";
const allCharacters = upperCase + lowerCase + numbers + symbols;

function randomPassword() {
    var password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }   

    inputBox.value = password;
    // once the password length is 12, it'll display the password in the inputBox


};

function copyPassword() {
    inputBox.select();
    document.execCommand("copy");
};
