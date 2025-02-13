//back up for function for demo 

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