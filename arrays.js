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