import { test, expect, describe } from "vitest"; 

import { compareUserInputWithAnswer } from "./main.js";

//mvp 1 test plan
//Displays instructions and words
//Takes in user input
// Compares with connection word
// Returns a correct/false answer

test("incorrect user input compared with connection word", () => {
    //assign
   // const connectionAnswer= "Crescents";
    const userInput = "Circular"
    const expected = `Sorry, your guess was not correct`;
    //act
    const actual = compareUserInputWithAnswer(userInput);
    //assert
    expect(actual).toBe(expected);
})

test("Correct User input compared with connections answer", () => {
    //assign
    const connectionAnswer = "Crescents";
    const userInput = "Crescents";
    const expected = `Correct, the answer is ${connectionAnswer}`;
    //act
    const actual = compareUserInputWithAnswer(userInput);
    //assert
    expect(actual).toBe(expected);
})

//mvp 2 test plan
// Displays instructions and words
// Takes in user input that can be lower or upper case
// Compares with connection word that can be lower or upper case
// Returns a correct/false answer 

test("Correct User input compared with connections answer- case insensitive", () => {
    //assign
    const connectionAnswer = "Crescents";
    const userInput = "crescents";
    const userInput2= "CRESCENTS";
    const expected = `Correct, the answer is ${connectionAnswer}`;
    //act
    const actual = compareUserInputWithAnswer(userInput);
    const actual2 = compareUserInputWithAnswer(userInput2);
    //assert
    expect(actual).toBe(expected);
    expect(actual2).toBe(expected)
})

test("incorrect user input compared with connection word- case insesnitive", () => {
    //assign
   // const connectionAnswer= "Crescents";
    const userInput = "circular"
    const userInput2= "CIRCULAR"
    const expected = `Sorry, your guess was not correct`;
    //act
    const actual = compareUserInputWithAnswer(userInput);
    const actual2 = compareUserInputWithAnswer(userInput2)
    //assert
    expect(actual).toBe(expected)
    expect(actual2).toBe(expected);
})

//mvp 3 invalid input 

test("invalid input", () => {
    //assign
    const invalidInput = "!@#$%";
    const invalidInput2 = "££££££"
    const expected = `Sorry, your guess was not correct`;
    const expected2 = `Sorry, your guess was not correct`
    //act
    const actual = compareUserInputWithAnswer(invalidInput);
    const actual2 = compareUserInputWithAnswer(invalidInput2);
    //assert
    expect(actual).toBe(expected);
    expect(actual2).toBe(expected2);
})

//mvp 4 white space

test("correct user input can have white space either side and answer is still correct", () => {
    //assign
    const connectionAnswer= "Crescents"
    const correctInput = " Crescents "
    const expected = `Correct, the answer is ${connectionAnswer}`
    //act
    const actual = compareUserInputWithAnswer(correctInput);
    //assert
    expect(actual).toBe(expected);
})
