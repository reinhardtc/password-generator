// Assignment code here
var upperLetters = ["A","B","C","D","E","F","G","I","J","k","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters = ["!","@","?","(",")","=","&","%","#"];
var password = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


//function to take choices and create password
function generatePassword(){
  var password = "";
  characterChoice = [];
  passwordLength = parseInt(window.prompt("How many characters? (8-128)"));
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    window.alert("Must be a number between 8 and 128");
    return false;
  }
  var includeUpper = window.confirm("Should it include uppercase letters?");
    if(includeUpper){
      characterChoice = characterChoice.concat(upperLetters);
    }
  var includeLower = window.confirm("Should it include lowercase letters?");
    if(includeLower){
      characterChoice = characterChoice.concat(lowerLetters);
    }
  var includeNumbers = window.confirm("Should it include numbers?");
    if(includeNumbers){
      characterChoice = characterChoice.concat(numbers);
    }
  var includeSpecial = window.confirm("Should it include special characters?");
    if(includeSpecial){
      characterChoice = characterChoice.concat(specialCharacters);
    }
  for(var i = 0; i < passwordLength.lenght; i++){
    var randomCharacter = Math.floor(Math.random() * passwordLength.length);
    password = characterChoice[randomCharacter];
  }
  return password;
}