var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;

var addElementToEndOfArray = ['new bar', ...chocolateBars];

var destructivelyAddElementToEndOfArray = chocolateBars.push('newer bar');

var accessElementInArray = (chcolateBars[2]);