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
  return chocolateBars;
}

function accessElementInArray(chocolateBars, elementN) {
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, elementN) {
  chocolateBars.shift('snickers');
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.slice(1);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars, elementN) {
  chocolateBars.pop('skittles');
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars.slice(0, chocolateBars.length - 1);
  return chocolateBars;
}