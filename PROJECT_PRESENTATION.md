Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

# Project Name 

Knock-off Connections

## Overview
The aim of this project is to create a Connections-style (New York Times game) console game which displays 4 letters in the console and requires the user to guess the link. The user will input their guess and the app will return whether their answer was correct or not. The project is in the budding stages, so the set of 4 words and answer have been hardcoded while things are getting set up. 

## Planning Phase

### Project Requirements
- Primary objectives and must-have features
MVP 1- user input accepted and compared with hard-coded connection answer.

- Secondary objectives and nice-to-have features
MVP 2- function which compares user input and answer is case insensitive. 

MVP 3- function which compares user input and answer is insensitive to white space before and after word. 

BONUS

MVP 4- If non-letters are entered, a message returns to the user saying 'Invalid input.'

- Technical constraints and limitations
Due to it being text, errors may be made in spelling
There are so many ways of phrasing things, I would not be able to tell the user if their guess was close or not

### Timeline
- Phase 1: Initial Research (1 hr)
- Phase 2: Development (Thursday afternoon)
- Phase 3: Testing (Friday morning)
- Phase 4: Launch (Friday afternoon)

### Resources
- Required tools and technologies
-Vitest for unit testing

## Brainstorming

### Ideas & Concepts
MVP 1- user input and answer compared

MVP 2- case insensitivity

MVP 3- white space ignored

MVP 4- invalid input(non-letters) returns an error message to the user 'Invalid input


### Research Notes
- toLowerCase() for MVP 2
- trim() or RegEx for MVP 3 (I later decided RegEx was not suitable as some answers may be made up of multiple words)
- RegEx for finding non-letters in MVP 4

## Implementation

### Progress Tracking
Kanban board

### Technical Documentation
-Javascript
-Vitesst
# Example code block


### Challenges & Solutions
| Challenge | Solution | Status |
|-----------|----------|---------|
| Issue 1 | Approach taken | Resolved |
| Issue 2 | Proposed solution | Pending |

## Results & Analysis

## User Feedback

### Testing Results
-All unit tests passed by Vitest according to the criteria given

## Next Steps
- 

---

## Appendix

### Reference Links
- Github repo (https://github.com/SchoolOfCode/week-6-hackathon-chargrace)

### Change Log
- v1.0.0 - Initial release
- v1.1.0 - Feature updates
