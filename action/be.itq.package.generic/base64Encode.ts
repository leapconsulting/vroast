/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.generic {
export function base64Encode(input?: string): void {var base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split("");

// the result/encoded string, the padding string, and the pad count

var r = "";

var p = "";

var c = input.length % 3;

 

// add a right zero pad to make this string a multiple of 3 characters

if (c > 0) {

             for (; c < 3; c++) {

                           p += '=';

                           input += "\0";

             }

}

 

// increment over the length of the string, three characters at a time

for (var c = 0; c < input.length; c += 3) {

 

             // these three 8-bit (ASCII) characters become one 24-bit number

             var n = (input.charCodeAt(c) << 16) + (input.charCodeAt(c + 1) << 8) + input.charCodeAt(c + 2);

 

             // this 24-bit number gets separated into four 6-bit numbers

             n = [(n >>> 18) & 63, (n >>> 12) & 63, (n >>> 6) & 63, n & 63];

 

             // those four 6-bit numbers are used as indices into the base64 character list

             r += base64chars[n[0]] + base64chars[n[1]] + base64chars[n[2]] + base64chars[n[3]];

}

 

// add the actual padding string, after removing the zero pad

return r.substring(0, r.length - p.length) + p;
}
}
