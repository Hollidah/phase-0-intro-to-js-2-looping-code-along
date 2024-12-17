
// for loop

function writeCards(names, event) {  // empty array to hold the messages
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {  // Loop through the names array
      
     let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;   // Build the message for each name using string interpolation
      
      thankYouMessages.push(message);   //  Add the message to the array
    }
    return thankYouMessages; // Return the array of messages
  }

  const result = writeCards(["Charlie", "Samip", "Ali"], "birthday");

  console.log(result);


  // while loop

  function countDown(start) {    // While the start number is greater than or equal to 0
    while (start >= 0) {
      console.log(start); // Log the current number
      start--; // Decrease the number by 1
    }
  }
  
  countDown(10); //example
  