// 1900 - 2023 

 const alphabet1 = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ]
const alphabet2 =['n','o', 'p', 'q', 'r', 's', 't', 'u', 'v',  'w', 'x', 'y', 'z']

let firstDigit = ['1','2']
let secondDigit = ['9', '0']
let thirdDigit = ['0','1','2',]
let fourthDigit = ['0','1','2','3',]
let customDigit = ['0','1','2','3','4','5','6','7','8','9']


 let randomYear = ""
function yearGenerator(title) {
        if (title[0]  === "a" || title[0] === "b" || title[0] === "c" || title[0] === "d" || title[0] === "e" || title[0] === "f"  ) {                                   // 1. digit must be 1 or 2 
            randomYear += "1" 
        } else {
            randomYear += "2"
        }

       if (randomYear[0] === "1" ){   // if 1.digit = 1 second digit must be 9, if starts with 2 must be 0
        randomYear += "9"
       } else   {
        randomYear += "0"
       }
       
       if (title[0] === "a") {
        randomYear += "6"
       } else if (title[0] === "b") {
        randomYear += "7"
       }else if (title[0] === "c") {
        randomYear += "4"

       }else   {
        randomYear += "1"
      }
      

      
    


       console.log(randomYear)
}
yearGenerator("pbsba") 
