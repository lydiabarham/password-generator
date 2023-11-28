// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Functions to prompt user for password options
  let getPasswordOptions = function() {
    let characterLower = confirm("Would you like your password to contain lowercase letters?");
    let characterUpper = confirm("Would you like your password to contain uppercase letters?");
    let characterNumbers = confirm("Would you like your password to contain numbers?");
    let characterSpecial = confirm("Would you like your password to contain special characters?");
    if (characterLower === false && characterUpper === false && characterNumbers === false && characterSpecial === false) {
        getPasswordOptions()
    } else {
        return {
            characterLower,
            characterUpper,
            characterNumbers,
            characterSpecial
        };
    }
  }

  let getPasswordLength = function() {
    let passwordLength = parseInt(prompt("Enter a value between 8 and 128", "0"), 10);
    if (passwordLength >= 8 && passwordLength <= 128) {
        return passwordLength;
    } else {
        return getPasswordLength();
    }
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    let random = Math.floor(Math.random() * arr.length);
    console.log(random, arr[random]);
  }
  
  // Function to generate password with user input
function generatePassword() {
    let passwordOptions = getPasswordOptions();
    let passwordLength = getPasswordLength();
    let newPassword = [];

    for (let i = 0; i < passwordLength; i++) {
        if (passwordOptions.characterLower) {
            newPassword.push(getRandom(lowerCasedCharacters));
        } else if (passwordOptions.characterUpper) {
            newPassword.push(getRandom(upperCasedCharacters));
        } else if (passwordOptions.characterNumbers) {
            newPassword.push(getRandom(numericCharacters));
        } else if (passwordOptions.characterSpecial) {
            newPassword.push(getRandom(specialCharacters));
        }
    }
    
    return newPassword.join('');
}

  // Generate password
  generatePassword()
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
