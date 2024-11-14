let str="sassassfgdfg"

// 1. length() : this return the length of the string

// console.log(str.length) //4

//******************

// 2. charAt() : it takes index as an  argument and give element of that index

// console.log(str.charAt(2)) //f

//*****************

// 3. toUpperCase() : this will capitalice all characters of string 

// console.log(str.toUpperCase()) //SAFI

// ******************

// 4. toLowerCase() : this will toLowerCase all the characters of string

// console.log(str.toLowerCase()) //safi

// *******************

// 5. concat() : this will take another string as an argument and concatinate it with the target 

// console.log(str.concat(" asad")) //safi asad

// *********************

// 6. trim() : this will remove all the white space from starting and ending of the string. this will give out put as "safi" of input "   safi    " 

// console.log(str.trim()) // this will 

// **********************

// 7. trimStart() :

// console.log(str.trimStart()) // this will remove all spacing from eng

//********************

// 8. slice() : syntax-> slice(startingInd, length) 
// console.log(str.slice(0, 3)) // SAf (here 3 is length and 0 is starting index)


//********************** 

// 9. substring() : syntax-> substring(startingIndex, endingIndex-1)

// console.log(str.substring(2, 4)) // fi (this will print from start index to end-1 index)

// ******************

// 10. split() : this take one argument and based on that argument it split the string and return an array

// console.log(str.split("-")) // ['sa', 'fi'] for input sa-fi

// **********************

// 11. replace() : this takes two argument first existing character of the orignal string and second as what new character you want to replace from it ant returns a new string

// console.log(str.replace('S', 's')) // this will give out as safi from an input Safi

// ************************

// 12. replaceAll() : syntax-> replaceAll('targetString', 'newString') = this will replace all the target string from the new string and returns a new string

console.log(str.replaceAll('s', 'f')) // this will give output-> faffafffgdfg of an input-> sassassfgdfg


