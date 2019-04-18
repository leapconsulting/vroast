/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getMinValue(machineSize?: string, key?: string): number {var data = be.itq.package.data;
if(machineSize == "Custom"){	
	return 1;
}else{
	var size = data.getMachineSizingByName(machineSize)[0];
	System.log("Found sizing: " + JSON.stringify(size));
	return size[key];
}


}
}
