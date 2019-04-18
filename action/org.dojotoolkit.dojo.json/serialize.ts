/// <reference path="./../../includes.d.ts"/>

namespace org.dojotoolkit.dojo.json {
export function serialize(o?: any): string {/*
	Copyright (c) 2004-2006, The Dojo Foundation
	All Rights Reserved.

	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/

// summary:
//		Create a JSON serialization of an object, note that this
//		doesn't check for infinite recursion, so don't do that!
// o:
//		an object to be serialized. Objects may define their own
//		serialization via a special "__json__" or "json" function
//		property. If a specialized serializer has been defined, it will
//		be used as a fallback.
// return:
//		a String representing the serialized version of the passed
//		object

var escapeString = System.getModule('org.dojotoolkit.dojo.string').escapeString;
var objtype = typeof(o);
if(objtype == "undefined"){
	return "undefined";
}else if((objtype == "number")||(objtype == "boolean")){
	return o + "";
}else if(o === null){
	return "null";
}
if (objtype == "string") { return escapeString(o); }
// recurse
var me = arguments.callee;
// short-circuit for objects that support "json" serialization
// if they return "self" then just pass-through...
var newObj;
if(typeof(o.__json__) == "function"){
	newObj = o.__json__();
	if(o !== newObj){
		return me(newObj);
	}
}
if(typeof(o.json) == "function"){
	newObj = o.json();
	if (o !== newObj) {
		return me(newObj);
	}
}
// array
if(objtype != "function" && typeof(o.length) == "number"){
	var res = [];
	for (var i = 0; i < o.length; i++){
		var val = me(o[i]);
		if(typeof(val) != "string"){
			val = "undefined";
		}
		res.push(val);
	}
	return "[" + res.join(",") + "]";
}
// look in the registry

/* NOT USED IN FRAMEWORK try {
	window.o = o;
	newObj = dojo.json.jsonRegistry.match(o);
	return me(newObj);
}catch(e){
	// dojo.debug(e);
} */

// it's a function with no adapter, bad
if(objtype == "function"){
	return null;
}
// generic object code path
res = [];
for (var k in o){
	var useKey;
	if (typeof(k) == "number"){
		useKey = '"' + k + '"';
	}else if (typeof(k) == "string"){
		useKey = escapeString(k);
	}else{
		// skip non-string or number keys
		continue;
	}
	val = me(o[k]);
	if(typeof(val) != "string"){
		// skip non-serializable values
		continue;
	}
	res.push(useKey + ":" + val);
}
return "{" + res.join(",") + "}";
}
}
