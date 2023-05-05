// takes in the number of times to roll and returns an array of random numbers between 1 and 6
function d6(timesToRoll) {
    let output = []
    for (i = 0; i < timesToRoll; i++) {
      output.push(Math.ceil(Math.random() * 6))
    }
    return output
  }
  
  // takes in an array of numbers and returns the lowest number
  function lowestNumber(array) {
    if (array.length === 0) {
      return 0
    } // if it's an empty array, it will return 0
    var output = array[0]
    for (i = 1; i < array.length; i++) {
      var currentNum = array[i]
      if (currentNum < output) {
        output = currentNum // if it's lower, overwrite our output to the lower number
      } // check the current number and compare it to our output
    } // iterate over the array
    return output
  }
  
  // takes in an array of numbers and returns their sum
  function add(input) {
      let output = 0
      if (input.length === 0) {
          output = 0
      } // if you gave me an empty array, I return 0
      for (var i = 0; i < input.length; i++) {
          output += input[i]
      } // otherwise I'll add them numbers together
      return output
  }
  
  // takes in a stat number and returns a positive or negative modifier as a string
  function getMod(statScore) {
    var symbol = ""
    var modifier = 0
    if (statScore >= 10) {
      symbol = "+"
    }
    modifier = Math.floor((statScore - 10)/2)
    return symbol + modifier
  }
  
  // cumulative function
  function rollAStat() {
      var currentRoll = d6(4)
      var FourD6DropLowest = add(currentRoll) - lowestNumber(currentRoll)
      console.log("Roll Result:       " + FourD6DropLowest + " (" + getMod(FourD6DropLowest) + ")") 
      console.log(currentRoll)
      console.log(lowestNumber(currentRoll) + " was the lowest roll")
      console.log("--------------")
  }
  
  // Test
  
  
  for (let i = 0; i < 6; i++) {
    rollAStat()
  }