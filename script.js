// 1900 - 2023 

 /* const alphabet1 = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ]
const alphabet2 =['n','o', 'p', 'q', 'r', 's', 't', 'u', 'v',  'w', 'x', 'y', 'z']

let firstDigit = ['1','2']
let secondDigit = ['9', '0']
let thirdDigit = ['0','1','2',]
let fourthDigit = ['0','1','2','3',]
let customDigit = ['0','1','2','3','4','5','6','7','8','9'] */

 let randomYear = ""
function yearGenerator(title) {
        if (title[0]  === "a" || title[0] === "b" || title[0] === "c" || title[0] === "d" || title[0] === "e" || title[0] === "f" || title[0] === "n" || title[0] === "m"  ) {                                   // 1. digit must be 1 or 2 
            randomYear += "1" 
        } else {
            randomYear += "2"
        }
       if (randomYear[0] === "1" ){   // if 1.digit = 1 second digit must be 9, if starts with 2 mustbe0,  2.digit code
        randomYear += "9"
       } else   {                 
        randomYear += "0"
       }
      if (randomYear[0] + randomYear[1] === "19" && title[1] === "n" || title[1] === "m"  ) {
        randomYear += "4"
      } else if (randomYear[0] + randomYear[1] === "19" && title[1] === "o"|| title[1] === "q"){
        randomYear += "7"                                                                              // 3.digit code if starts with 19
      }else if (randomYear[0] + randomYear[1] === "19" && title[1] === "v" || title[1] === "t") {
        randomYear += "2"
      } else if (randomYear[0] + randomYear[1] === "19" && title[2] === "d" || title[2] === "x" ) {
        randomYear += "5"
      }   else if (randomYear[0] + randomYear[1] === "20" && title[2] === "r" || title[2] === "s" ||title[2] === "t" ){ // 3 digit if strats with 20
        randomYear += "1"
      } else if (randomYear[0] + randomYear[1] === "20" && title[2] === "u" || title[2] === "e" ||  title[2] === "d"){
        randomYear += "2"
      }else {
        randomYear += "0"
      } 
      if (randomYear[2] === "0" ) {
        randomYear += "2"
      } else if (randomYear[2] === "1"){
        randomYear += "6"
      } else if (randomYear[2] === "2") {
        randomYear += "3"
      } else if (randomYear[2] === "8") {           // 4.digit depends on 3.digit number
        randomYear += "5"
      } else if (randomYear[2] === "6") {
        randomYear += "6"
      } else if (randomYear[2] === "5") {
        randomYear += "8"
      }else {
        randomYear += "0"
      }
      // ha az elso ketto szamjegy 19 es title b v sd f =>
      // ha az elso ketto szamjegy 20 es title c d b g =>
       console.log(randomYear)
    }
yearGenerator("asdnagbba asdasd") 
