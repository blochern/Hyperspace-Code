// Don't change the function name.
function returnPyramid(height) {
  // define an output array
  var pyramid = [];
  // this 'for' loop will execute a number of times equal to the 'height' argument
  for (var x = 0; x < height; x++) {
    // assign pyramid at x to an empty string
    pyramid[x] = "";
    // a nested 'for' loop will execute a number of times equal to the 'height' argument
    for (var y = 0; y <= x; y++) {
      // add on #'s
      pyramid[x] += "#"
    } // end of the nested 'for' loop
  } // end of the overall 'for' loop
  // return the completed array
  return pyramid;
}

console.log(returnPyramid(15));