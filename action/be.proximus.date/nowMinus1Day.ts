/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.date {
export function nowMinus1Day(): Date {/*var current = new Date();
System.log('Today is: ' + current.toLocaleString());
current.setDate(current.getDate() - 1);
System.log('Yesterday was: ' + current.toLocaleString());
return current;
*/

var d = new Date(); // today!
var x = 1; // go back 1 days!
d.setDate(d.getDate() - x);

return d;
}
}
