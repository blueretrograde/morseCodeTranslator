import {morseCode, validCharacters} from "./morseCode.js"



// export const translator = (input) => {


//     if (input == "A")
//     input = morseCode.A
//     return morseCode.A

// }


//SELECTORS

const engDisplay = document.querySelector(".english__display")
const engInput = document.querySelector(".english__input")
const translateBtn = document.querySelector(".translate__button")
const morseDisplay = document.querySelector("morse__display")


//function to split the word into an array of letters

// const splitWord = (word) => { 

//     const wordArray = word.split("")
//     return(wordArray)
// }


const translate = (word) => {

    const wordArray = word.split("")


        wordArray.forEach((letter) => {
        
        const newWordArray = morseCode[letter]
        console.log(newWordArray)
        
    }); 
    
}

translate("123")









//EVENT LISTENERS

translateBtn.addEventListener("click", translate )