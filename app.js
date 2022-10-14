import {morseCode} from "./morseCode.js"

console.log("this is linked")


export const translator = (input) => {


    if (input == "A")
    input = morseCode.A
    return morseCode.A

}

translator("A")

