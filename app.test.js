const {translator} = require("./app.js");

it("should translate A to .- ", () => {
    const result = translator("A");

    expect(result).toBe(".-")
})



//test for valid characters
//test for string(s) character
//test for spaces
//test for a number
//testing for case sensitivity
//test for length of dots and dashes (only up to 5 characters from Morse to English)
//test for symbol characters
//test for combination of different characters
//empty input
//test for invalid input