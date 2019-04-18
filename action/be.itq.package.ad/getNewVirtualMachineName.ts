/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ad {
export function getNewVirtualMachineName(machinePrefix?: string, prefixNumbers?: number, environment?: string): string {var ad = nl.umcg.ad;
var data = nl.umcg.data;

if (!environment) {
	environment = "OTA";
}
var adDetails = data.getActiveDirectoryByEnvironment(environment.toUpperCase())
var host = ad.getHost();
var lastComputer = ad.getLastComputer(machinePrefix, host);
//computers.sort(function(a,b) {
//    var numberA = a.name.replace(machinePrefix, "");
//    var numberB = b.name.replace(machinePrefix, "");
//  return numberA - numberB})
//  computers.forEach(function(c) { System.log(c.name) });
System.log (lastComputer)
//computers.sort(function(a,b){
//	return a - b })
//computers.forEach(function(c) { System.log(c.name)})
//;

//var lastComputer = computers.pop();
//var lastComputerName = lastComputer.name

var lastComputerName = lastComputer;
var nextNumber;

if (lastComputerName != null){
	System.log("This is the last computer name which already exists: " + lastComputerName)
	
	var fullNameLength = lastComputerName.length;
	var prefixLength = machinePrefix.length;
	
	var newComputerNameSuffix = lastComputerName.substring(prefixLength, fullNameLength)
	
	var SuffixNumber = Number(newComputerNameSuffix)
	
	//var nextNumber = SuffixNumber + 1
	//We are adding 1000+ for the test in Linux deployment
	nextNumber = SuffixNumber + 1
}else{
	nextNumber = 0001;
}


var suffix = "" + nextNumber;
while (suffix.length < prefixNumbers) {
	suffix = "0" + suffix;
}

var newMachineName = machinePrefix.concat(suffix).toUpperCase();
System.log("NewMachineName will become: " + newMachineName );
return newMachineName;


}
}
