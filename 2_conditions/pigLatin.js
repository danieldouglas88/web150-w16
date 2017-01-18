/* Program is made by Daniel Douglas on the 16th of January 2017. 
the intention of the program is to output the pig latin translations for inputed english words */

var wordz = prompt("Enter English text and we will convert it to Pig Latin: ");
var res = wordz.toLowerCase();
var words = res.split(" ");


for (var i in words) {
  var word = words[i];

if (word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o"|| word[0] == "u") {
        var varX = word + "way";
    console.log("English Word: " + word + " & its Pig Latin Translation: " + varX);} 
    
else if (word.length ==0) {
    console.log("Oi Mate, it appears that you did not provide us with any input!") } 
   
else if (word[0] != "a" && word[0] != "e" && word[0] != "i" && word[0] != "o" && word[0] != "u" && word.length >=2 && (word[1] == "a" || word[1] == "e" || word[1] == "i" || word[1] == "o"|| word[1] == "u"))  { 
     varX = word.slice(1,15) + word[0] + "ay";
    console.log("English Word: " + word + " & its Pig Latin Translation: " + varX);     } 
    
else if (word[0] != "a" && word[0] != "e"  && word[0] != "i" && word[0] != "o" && word[0] != "u" && word.length ==1 && word.length ==1){         
    varX = word + "ay";
    console.log("English Word: " + word + " & its Pig Latin Translation: " + varX);     } 
    
else if (word[0] != "a" && word[0] != "e" && word[0] != "i" && word[0] != "o" && word[0] != "u" && word[1] != "a" && word[1] != "e" && word[1] != "i" && word[1] != "o" && word[1] != "u" && word.length >= 3){         
           varX = word.slice(2,12) + word[0] + word[1] + "ay";
    console.log("English Word: " + word + " & its Pig Latin Translation: " + varX); } 
    
else if (word[0] != "a" && word[0] != "e" && word[0] != "i" && word[0] != "o" && word[0] != "u" && word[1] != "a" && word[1] != "e" && word[1] != "i" && word[1] != "o" && word[1] != "u" && word.length == 2){         
           varX = word.slice(2,12) + word[0] + "ay";
    console.log("English Word: " + word + " & its Pig Latin Translation: " + varX); }

}