
/** Task 2: Connections Conundrum.
 * 
 * The Oracle reveals 4 mysterious words and challenges you to guess the link between them all. The connections between the words might be subtle, 
 * so you’ll need sharp reasoning and a keen eye for patterns. Inspired by the oracle’s love of Connections, this trial tests your ability to categorize 
 * and connect concepts.

Your task is to write a function that identifies the correct grouping and ensures your solution handles edge cases.  
 *
 * REQUIREMENTS: 
 * - function that compares userInput and connections answer.
 * -If it matches, return `Correct, the answer is ${connectionAnswer}`.
 * -If not, return `Sorry, your guess was not correct`.
 * - The function MUST be case insensitive and ignore white space before and after the word.
 * - The function MUST give the user the error "Please enter a string" if userInput is not a string. 
 *
 * Example:
 * compareUserInputWithAnswer(" cResCenTs ") should return `Correct, the answer is ${connectionAnswer}`. 
 *    
 * 
 * Reminder: don't forget to 'npm install' before starting and using 'npm run test' to check your solution.
 */
   

console.log("Welcome to Connections!");
console.log("Your list of words today is: MOON, BOW, SMILE, CROISSANT");
console.log("Please enter the connection between these words");

export function compareUserInputWithAnswer (userInput) {
    const connectionAnswer= "Crescents";
    if ((typeof userInput) !== "string") {
        return new Error ("Please enter a string");
    }
    const connectionAnswerCaseInsensitive= connectionAnswer.toLowerCase();
    const userInputCaseInsensitive = userInput.toLowerCase().trim();
    

    if (connectionAnswerCaseInsensitive === userInputCaseInsensitive) {
        return `Correct, the answer is ${connectionAnswer}`
    } 
    
    if (connectionAnswerCaseInsensitive !== userInputCaseInsensitive) {
        return `Sorry, your guess was not correct`;
        
    }
}