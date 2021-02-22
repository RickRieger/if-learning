/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/


function isItLong(input){
  let n = input.length;
  if (n > 20){
    return "That's a long string!"; 
  }
}

function isItMedium(input){
  let n = input.length;
  if(n >= 10 && n <= 20){
    return "That's a regular sized string!";
  }
}

function isItShort(input){
    let n = input.length;
    if(n < 10){
      return "That's a small string!";
    }
    else{
      return "That's not a small string!";
    }
}

function howLongIsMyString(input){
  let n = input.length;
  if (n > 20){
    return "That's a long string!"; 
  }
  else if(n >= 10 && n <= 20){
    return "That's a regular sized string!";
  }
  else  if(n < 10){
    return "That's a small string!";
  }
}

function instructorHeight(input){

  if (input === 'Colin'){
    return 62; 
  }
  else if (input === 'Mesuara'){
    return 69;
  }
  else
    return "I don't know that instructor!";
  
}



/**********************************
 *   
 *  * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}