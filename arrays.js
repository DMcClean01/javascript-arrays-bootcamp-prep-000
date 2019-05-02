var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'milyway'];

var addElementToBeginningOfArray = ['klondike', ...chocolateBars];

var destructivelyAddElementToBeginningOfArray = chocolateBars.unshift('mars');

var addElementToEndOfArray = [...chocolateBars, 'new bar'];

var destructivelyAddElementToEndOfArray = chocolateBars.push('newer bar');

var accessElementInArray = (chcolateBars[2]);