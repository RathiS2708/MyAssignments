//Given a string s consisting of words and spaces, return the length of the last word in the string.
let Input = "Hello World"
let char =Input.split(" ")
let noOfStrings = char.length
for (let i = 0; i<=noOfStrings-1;i++)
    {
     if(char[i] == "World")
        {
        strOutput = char[i].length
        console.log("length of the word " +char[i] +" is:", strOutput)
        }
        
    }

//example 2

let input = "   fly me   to   the moon  "
let input1= input.trim()
let stringlenght = input1.split(" ")
for(let j = 0;j<=stringlenght.length-1;j++)
    {     
            if (stringlenght[j] == "moon")
            {
              strOutput = stringlenght[j].length
              console.log("length of the word " +stringlenght[j] +" is:", strOutput)
            }
             
    }




