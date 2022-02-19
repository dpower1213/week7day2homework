// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"//

let dogNames = ["Max","HAS","PuRple","dog"];
let dogString = "Hello Max, my name is Dog, and I have purple eyes!";
let dogString2 = "";
let dogNames2 = [];

function MatchedDogName(){
    dogString2 = dogString.toLowerCase();
    
    for (i=0, len = dogNames.length, text = ""; i<len; i++)
    {
        dogNames2[i] = dogNames[i].toLowerCase();
        if (dogString2.search(dogNames2[i])==-1) { 
            console.log('No Match'); 
            }
        else {
            console.log(dogNames2[i]);
        } 
    }
    }
MatchedDogName(dogNames)        