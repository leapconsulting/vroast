/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.dhcp {
export function generateMacAddress(): string {/*var mac = "00:50:56:XX:XX:XX".replace(/X/g, function() {
  return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
});
*/

var macArray = ["00", "50", "56", "00"];

var date  = new Date();
var epoch = date.getTime().toString();
var epochLength = epoch.length;

var partOne = epoch.substring(epochLength-2, epochLength);
var partTwo = epoch.substring(epochLength-4, epochLength-2);

macArray.push(partOne);
macArray.push(partTwo);

return macArray.join(":");
}
}
