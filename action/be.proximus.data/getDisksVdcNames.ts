/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getDisksVdcNames(targetEntityArg?: vCloud.Vdc): Array<string> {// WARNING: Auto generated code. Please, do not edit this code.
var allDisks =  targetEntityArg.getDisks();

return allDisks.map(function(disk) {
	return disk.name;
});
}
}
