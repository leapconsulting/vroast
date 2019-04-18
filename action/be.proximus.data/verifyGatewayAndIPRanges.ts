/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function verifyGatewayAndIPRanges(gateway?: string, ipRanges?: Array): boolean {var array = new Array(ipRanges);
var beginGateway = gateway.split(".",3);
var j = 0;
var strTemp;
var strTemp2;
var strTEmp3;
var strIpRange;
for (var i = 0; i < array.length; i++){
	strIpRange = new String(array[i]);
	strTemp = strIpRange.split("-",2);
	strTemp2 = new String(strTemp[1]).split(".",3);
	strTemp3 = new String(strTemp[2]).split(".",3);
	for (var j = 0; j < beginGateway.length; j++){
		if(strTemp2[j] != beginGateway[j] || strTemp3[j] != beginGateway[j]){
			return false;
		} 
	}
}
return true;
}
}
