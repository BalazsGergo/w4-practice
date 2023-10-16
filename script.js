// 1900 - 2023 

// const alphabet = ['A' 'a' 'B' 'b' 'C' 'c' 'D' 'd' 'E' 'e' 'F' 'f' 'G' 'g' 'H' 'h' 'I' 'i' 'J' 'j' 'K' 'k' 'L' 'l' 'M' 'm' 'N' 'n' 'O' 'o' 'P' 'p' 'Q' 'q' 'R' 'r' 'S' 's' 'T' 't' 'U' 'u' 'V' 'v' 'W' 'w' 'X' 'x' 'Y' 'y' 'Z' 'z']

let firstDigit = [1 , 2]
let secondDigit = [9, 0]
let thirdDigit = [0,1,2,3,4,5,6,7,8,9]
let fourthDigit = [0,1,2,3,4,5,6,7,8,9]


 let randomYear = ""
function yearGenerator(title) {
        if (title[0]  === "a" || title[0] === "b" || title[0] === "e" || title[0] === "c"   ) {  // 1. ore 2. digit must be 1 or 2 
            randomYear += "1" 
        } else {
            randomYear += "2"
        }


       if (randomYear[0] === "1" ){   // if 1.digit = 1 second digit must be 9, if starts with 2 must be 0
        randomYear += "9"
       } else  {
        randomYear += "0"
       }
       
       console.log(randomYear)
    }

    

 
yearGenerator("edasd") 
 
