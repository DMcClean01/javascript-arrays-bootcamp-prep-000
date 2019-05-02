var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'milkyway'];

var addElementToBeginningOfArray = [...chocolateBars, 'klondike'];

var destructivelyAddElementToBeginningOfArray = chocolateBars.unshift('mars');

var addElementToEndOfArray = ['new bar', ...chocolateBars];

var destructivelyAddElementToEndOfArray = chocolateBars.push('newer bar');

var accessElementInArray = (chcolateBars[2]);