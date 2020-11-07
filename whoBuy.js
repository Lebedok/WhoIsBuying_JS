//WHO is buying lunch? 

//You are going to write a function which will select a random name a list of names. The person selected will have to pay for everybody’s food bill. 

//IMPORTANT: The output should be returned from the function and you do not need ALERT, PROMPT, CONSOLE.LOG . The output should match the example output exactly, including capitalization and punctuation. 

//EXAMPLE INPUT 
              //[«Angela», «Ben», «Jenny», «Michael», «Chloe»]

//EXAMPLE OUTPUT
              //Michael is going to buy lunch today! 


function whosPaying(names) {

    var  numberOfPeople = names.length;
    var  randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var  randomPerson = names[randomPersonPosition];

     return  randomPerson + "is going to buy lunch today!"
 
}
