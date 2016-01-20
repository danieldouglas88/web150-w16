    document.writeln("<p>I can tell your future.</p>");
    var name = prompt("What's your name?");
    var age = prompt("How old are you?");
    var love = prompt(name + ", are you in love? (Yes or No");
    
     age = parseInt(age);

    if (age < 18) {
        document.write("It's not going to last.");

    } else if (age >= 18 && age <= 65) {
 
          switch(love.toLowerCase()) {

          case ("yes"):
            var proceed = confirm(name + ", would you like to know if your lover is true?");         
               if (proceed == true) {
                 document.write("I think you know the answer.");
                 } else {
                    document.write("A wise choice.");
                        }
                break;
          case ("no"): 
            var proceed = confirm(name +", are you looking for love?");
                if (proceed == true) {
                  document.write("Get a pet.");
                } else {
                   document.write("You're a cold one.");
    
                }
                      }            
                     
        
    } else {
                       document.write ("Shouldn't you have figured this out by now, " + name +"?")
    }
               
  
            