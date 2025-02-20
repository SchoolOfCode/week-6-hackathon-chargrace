import { test, expect } from "vitest";

import { compareUserInputWithAnswer } from "./main.js";

test("incorrect user input compared with connection word", () => {
  //assign
  const userInput = "Circular";
  const expected = `Sorry, your guess was not correct`;
  //act
  const actual = compareUserInputWithAnswer(userInput);
  //assert
  expect(actual).toBe(expected);
});

test("Correct User input compared with connections answer", () => {
  //assign
  const connectionAnswer = "Crescents";
  const userInput = "Crescents";
  const expected = `Correct, the answer is ${connectionAnswer}`;
  //act
  const actual = compareUserInputWithAnswer(userInput);
  //assert
  expect(actual).toBe(expected);
});

//mvp 2 test

test("Correct User input compared with connections answer- case insensitive", () => {
  //assign
  const connectionAnswer = "Crescents";
  const userInput = "crescents";
  const userInput2 = "CRESCENTS";
  const expected = `Correct, the answer is ${connectionAnswer}`;
  //act
  const actual = compareUserInputWithAnswer(userInput);
  const actual2 = compareUserInputWithAnswer(userInput2);
  //assert
  expect(actual).toBe(expected);
  expect(actual2).toBe(expected);
});

test("incorrect user input compared with connection word- case insesnitive", () => {
  //assign
  // const connectionAnswer= "Crescents";
  const userInput = "circular";
  const userInput2 = "CIRCULAR";
  const expected = `Sorry, your guess was not correct`;
  //act
  const actual = compareUserInputWithAnswer(userInput);
  const actual2 = compareUserInputWithAnswer(userInput2);
  //assert
  expect(actual).toBe(expected);
  expect(actual2).toBe(expected);
});

//mvp 3 invalid input

test("invalid input", () => {
  //assign
  const invalidInput = "!@#$%";
  const invalidInput2 = "££££££";
  const expected = `Sorry, your guess was not correct`;
  const expected2 = `Sorry, your guess was not correct`;
  //act
  const actual = compareUserInputWithAnswer(invalidInput);
  const actual2 = compareUserInputWithAnswer(invalidInput2);
  //assert
  expect(actual).toBe(expected);
  expect(actual2).toBe(expected2);
});

//mvp 4 white space

test("correct user input can have white space either side and answer is still correct", () => {
  //assign
  const connectionAnswer = "Crescents";
  const correctInput = " Crescents ";
  const expected = `Correct, the answer is ${connectionAnswer}`;
  //act
  const actual = compareUserInputWithAnswer(correctInput);
  //assert
  expect(actual).toBe(expected);
});

//mvp 5- input type

test("test for user input type to be a string, if not give an error message", () => {
  //assign
  const nonStringInput = 123;
  const expected = new Error("Please enter a string");
  //act
  const actual = compareUserInputWithAnswer(nonStringInput);
  //assert
  expect(actual).toStrictEqual(expected);
});

//stretch goal- test hint logic
//test that tests if a hint is given after hint threshold- 3 times.
//1. write hint logic in function ✅
//2. test for hint logic on third try
//test- yes or no?
