// fizzBuzz algorithm saved for later use

function fizzBuzzArray(input) {
  // first, define an empty output array (for us to add stuff to)
  var output = [];
  // for loop that will execute 'input' number of times
  for (var x = 1; x <= input; x++) {
    // x is also the value of the current number...
    // if x is divisible by 15 (divisible by 3 and 5),
    if (x % 15 === 0) {
      // add 'fizzBuzz'
      output.push('fizzBuzz')
      // and we're done here, so put a continue;
      continue;
    }
    // if x is divisible only by 5,
    if (x % 5 === 0) {
      // add just a 'buzz'
      output.push('buzz')
      // and continue
      continue;
    }
    // if x is divisible only by 3,
    if (x % 3 === 0) {
      // add just a 'fizz'
      output.push('fizz')
      // and continue
      continue;
    }
    // if the code gets to this part, it means that they've failed all the other if statements
    // so just add the number itself to the array
    output.push(x);
  }
// end of the for loop; return the output array
return output;
}

console.log(fizzBuzzArray(100));
