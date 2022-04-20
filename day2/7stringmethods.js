const firstName = "Michael"
firstName.charAt // we can decide how this will look like
const characters = "ABCDEFGHIJKLMNOPRSTUVWYZ"
// string.length
console.log(characters.length) //26
// index starts from 0 ;
console.log(characters[0]) 
console.log(characters[25]) // the last character
console.log(characters[characters.length-1]) // to get the last character if we don't know how long is the aplhabeth

// charAt method
console.log(characters.charAt(0))
console.log(characters.charAt(-1)) // won't give any result
console.log(characters.charAt(characters.length-1)) // will;; print the last letter

// toLowerCase method - will convert all characters in lower case
console.length(characters.toLowerCase()) // will show all of the cahracters won't print any letter by it self if we put a number in the second ()
console.log(characters) // the top ones won't cahnge the original one

// toUpperCase method
confirm.log(characters.toUpperCase()) // it will convert all of the letters in upper case

// indexOf method
console.log(characters.indexOf(B)) // if we put the letter inside we will see the position of it 
console.log(characters.indexOf("")) // when we don't write anything here it will give -1
const characters = "ABCDEFG HIJKLMNOPRSTUVWYZ"
console.log(characters.indexOf(" ")) // when we have space inside we will get the output from where the space in the characters is
console.log(characters.indexOf(" ",10)) // it will start searching for the letter inside in 10 positions after the space in the characters 

// slice method - it will cut/extract surtain letters
console.log(characters.slice()) // is not cutting anything since we didn't give any position from where to cut
console.log(characters.slice(0,5)) // it will start from 0 but it won't get the last letter that we included 
console.log(characters.slice(0,-2)) // you can use negative value ( that will be the last letters )
console.log(characters.slice(-10,-2)) // you can use negative values for both positions

// subString and substr method
console.log(characters.substring(0)) // it will give you the whole string
console.log(characters.substring(0,5)) // you can't use negative value but it's exactly the same like the slice method
console.log(characters.substr()) // better not to use it like this because it's depricaded
console.log(characters.substr(0, 3)) // we will get the letters we need 
console.log(characters.substr(6,5)) // starting position and then the length of cahracters you want

// splice method
console.log(characters.splice(1,1)) // deleting a surtain letter but it's not suported in VS code for the string 

// replace method
console.log(characters.replace("A","a")) // replacing the surain letter in to another letter
console.log(characters.replace("K","2")) // you can change it to a number also
console.log(characters.replace("ABC","abc")) // it will convert only those that we have targeted
console.log(characters.replace("ABD","abc")) // in this result it won't work because we have a mistake in our conversition
console.log(characters.replace(" ",",")) //if we have a space we can replace it with a , if we want to 

// search and match method
console.log(characters.search("ABC")) // it's says 0
console.log(characters.search("D")) // it says 3 . It will seach the whole string and will show the starting point of the string
console.log(characters.match("ABC")) // it will cover the whole string 

//regular expression
//RegEx 
