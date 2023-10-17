const alphabet1 = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ]
const alphabet2 =['n','o', 'p', 'q', 'r', 's', 't', 'u', 'v',  'w', 'x', 'y', 'z']

let randomYear = ""
function yearGenerator(title){

for (let i=0; i<4 ; i++) {
   if (title[0] === alphabet1[i] ) {
    randomYear += '1'
   } else {
    randomYear += '2'
   }
   if (randomYear[0] === '1' ) {
    randomYear += '9'
   }
}
console.log(randomYear)
}

yearGenerator("asdasd")