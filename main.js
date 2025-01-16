
//MVP 1 function plan
//Displays instructions and words✅
//Takes in user input
// Compares with connection word
// Returns a correct/false answer

console.log("Welcome to Connections!");
console.log("Your list of words today is: MOON, BOW, SMILE, CROISSANT");
console.log("Please enter the connection between these words");
let tries = 0;

export function compareUserInputWithAnswer (userInput) {
    const connectionAnswer= "Crescents";
    const connectionAnswerCaseInsensitive= connectionAnswer.toLowerCase();
    const userInputCaseInsensitive = userInput.toLowerCase().trim();
    

    if (connectionAnswerCaseInsensitive === userInputCaseInsensitive) {
        return `Correct, the answer is ${connectionAnswer}`
    } 
    
    if (connectionAnswerCaseInsensitive !== userInputCaseInsensitive) {
        return `Sorry, your guess was not correct`;
        
    // If invalid symbol entered, tells user that it can't accept this symbol
    }
}




