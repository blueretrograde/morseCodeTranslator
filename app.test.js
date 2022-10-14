const {translator} = require("./app.js");
const { morseCode } = require("./morseCode.js");
const {validCharacters} = require("./morseCode.js")

it("should translate A to .- ", () => {
    const result = translator("A");

    expect(result).toBe(".-")
})

it ("should translate all valid letters to the corresponding Morse text", () => {
    const result = translator(validCharacters.forEach(character))


    expect(result).toBe(morseCode.character)
        
})
    

it ("should test for lowercase", () => {

    const result = translator(validCharacters.forEach(character).toLowerCase)

    expect(result).toBe(morseCode.character)
}

)

it ("should test for lowercase", () => {

    const result = translator(validCharacters.forEach(character).toUpperCase)

    expect(result).toBe(morseCode.character)
}

)

it ("should test for symbols", () => {

    const result = checkForSymbols(input)

    expect(result).toBe("symbols are not supported")
})

it ("should check for empty input", () => {

    const result = checkForEmptyInput(input)

    expect(result).toBe("please enter something to translate")
})

it ("should check for invalid input", () => {

    const result = checkForValidInput(input)

    expect(result).toBe("please enter a valid input")
})


//test for valid characters ✓

//test for string(s) character ✓? (spaces and numbers are valid characters)
//test for spaces ✓
//test for a number ✓


//testing for case sensitivity ✓
//test for length of dots and dashes (only up to 5 characters from Morse to English) --extension

//test for symbol characters ✓
//test for combination of different characters 
//empty input ✓
//test for invalid input ✓