var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, elementN) {
  return [elementN, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, elementN) {
  chocolateBars.unshift(elementN);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, elementN) {
  return [...chocolateBars, elementN];
}

function destructivelyAddElementToEndOfArray(chocolateBars, elementN) {
  chocolateBars.push(elementN);
}

var sentence = " is one of my favorite candy bars";

function accessElementInArray(chocolateBars, elementN) {
  console.log(chocolateBars[2] + sentence);
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, elementN) {
  console.log(chocolateBars.shift('snickers'));
}

function removeElementFromBeginningOfArray(chocolateBars, elementN) {
  console.log(chocolateBars.slice(-2));
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars, elementN) {
  console.log(chocolateBars.pop('skittles'));
}

function removeElementFromEndOfArray(chocolateBars, elementN) {
  console.log(chocolateBars.slice(0, chocolateBars.length - 1));
}