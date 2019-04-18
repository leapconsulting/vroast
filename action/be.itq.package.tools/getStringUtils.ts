/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.tools {
export function getStringUtils(): void {var stringUtils = function() {

	/**
	 * 
	 */
	var simpleHeader = function(content, filler, length) {
		return stringOfChar(filler, 2) + content + stringOfChar(filler, length - 2 - content.length);
	}	

	/**
	 * 
	 */
	var stringOfChar = function(character, count) {
	    var result = "";
	
	    for (var i = 0; i < count; i++) {
	        result += character;
	    }
	
	    return result;
	}
	
	/**
	 * Implentation of a C# style format function
	 */
	var format = function(formatString) {
		var args = Array.prototype.splice.call(arguments, 1);
		return formatString.replace(/{(\d+)}/g, function(match, number) { 
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	}

	/**
	 * Replaces all occurrences in a string of a string with a string ;)
	 */
	var merge = function(body, properties, keyStart, keyEnd) {
		if (!keyStart) { keyStart = "{"; }
		if (!keyEnd) { keyEnd = "}"; }
		
		// Loop all the keys in the properties object
		for (var key of properties.keys) {
			var actualKey = format("{0}{1}{2}", keyStart, key, keyEnd);
			var actualValue = properties.get(key);
			
			body = replaceAll(body, actualKey, actualValue);
		}
		
		return body;
	}

	/**
	 * Replaces all occurrences in a string of a string with a string ;)
	 */
	var replaceAll = function(stringToModify, partToLookup, replacement) {
		partToLookup = new RegExp(getEscapedRegEx(partToLookup), "g");
		return stringToModify.replace(partToLookup, replacement);
	}
	
	/**
	 * Make sure a regular expression is properly escaped
	 */
	var getEscapedRegEx = function(regEx) {
	  return regEx.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}
	
	/**
	 * Returns the given string with the first characater in upper case
	 */	
	var capitalize = function(string) {
		return string.substring(0, 1).toUpperCase() + string.substring(1);
	}

	/**
	 * Returns a randomized string of the requested length containing characters from the given catagories
	 */
	var getRandomString = function(length, categories) {
		if (!categories) {
			categories = "aA#!";
		}
	
    	var mask = '';
	
	    if (categories.indexOf('a') > -1) { 
			mask += 'abcdefghijklmnopqrstuvwxyz'; 
		}

	    if (categories.indexOf('A') > -1) {
			mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		}
		
	    if (categories.indexOf('#') > -1) { 
			mask += '0123456789';
		}

	    if (categories.indexOf('!') > -1) {
			mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
		}
		
	    var result = '';
	
	    for (var i = length; i > 0; --i) {
			result += mask[Math.floor(Math.random() * mask.length)];
		}
	
    	return result;
	}

	/**
	 * Returns true if the given string ends with the given end
	 */	
	var endsWith = function(stringWeAreLookingIn, endWeAreLookingFor, caseSensitive) {
		// Default to true
		if (!caseSensitive) {
			caseSensitive = true;
		}
		
		// ...
		var start = stringWeAreLookingIn.length - endWeAreLookingFor.length;
		var length = endWeAreLookingFor.length;

		// The first check is to see if the string we are looking for isn't larger than the string we are looking in.
		var result = start >= 0;
		
		if (result) {
			theEnd = stringWeAreLookingIn.substring(start, start + endWeAreLookingFor.length)
			if (caseSensitive) {
				result = theEnd === endWeAreLookingFor;
			} else {
				result = theEnd.toUpperCase() === endWeAreLookingFor.toUpperCase();
			}
		}
			
		return result;
	}
	
	/**
	 * Returns true if the given string ends with the given end
	 */	
	var startsWith = function(stringWeAreLookingIn, startWeAreLookingFor, caseSensitive) {
		// Default to true
		if (!caseSensitive) {
			caseSensitive = true;
		}
		
		// The first check is to see if the string we are looking for isn't larger than the string we are looking in.
		var result = (stringWeAreLookingIn.length - startWeAreLookingFor.length) >= 0;
		
		if (result) {
			theStart = stringWeAreLookingIn.substring(0, startWeAreLookingFor.length)
			
			if (caseSensitive) {
				result = theStart === startWeAreLookingFor;
			} else {
				result = theStart.toUpperCase() === startWeAreLookingFor.toUpperCase();
			}
		}
			
		return result;
	}
	
	var contains = function(stringWeAreLookingIn, stringWeAreLookingFor) {
		return stringWeAreLookingIn.indexOf(stringWeAreLookingFor) > -1;
	}

	return {
		format : format,
		capitalize : capitalize,
		stringOfChar : stringOfChar,
		getRandomString : getRandomString,
		simpleHeader : simpleHeader,
		endsWith : endsWith,
		startsWith : startsWith,
		contains : contains,
		merge : merge,
		replaceAll : replaceAll,
		getEscapedRegEx : getEscapedRegEx		
	};
}

return new stringUtils();
}
}
