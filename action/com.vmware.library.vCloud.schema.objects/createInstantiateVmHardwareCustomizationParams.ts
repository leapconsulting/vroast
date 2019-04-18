/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createInstantiateVmHardwareCustomizationParams(coresPerSocketArg?: number, diskArg?: Array<any>, memorySizeArg?: number, numberOfCpusArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclInstantiateVmHardwareCustomizationParams();
result["numberOfCpus"] = numberOfCpusArg;
var items = result["disk"];
for (var obj of diskArg) {
	items.add(obj);
}
result["coresPerSocket"] = coresPerSocketArg;
result["memorySize"] = memorySizeArg;
return result;
}
}
