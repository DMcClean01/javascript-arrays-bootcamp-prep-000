var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'milkyway'];

var addElementToBeginningOfArray = [...chocolateBars, 'klondike'];

destructivelyAddElementToBeginningOfArray(array, elementN) {
  array, unshift(elementN)
}

var addElementToEndOfArray = ['new bar', ...chocolateBars];

var destructivelyAddElementToEndOfArray = chocolateBars.push('newer bar');

var accessElementInArray = (chcolateBars[2]);