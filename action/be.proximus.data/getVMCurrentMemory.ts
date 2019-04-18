/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getVMCurrentMemory(vm?: vCloud.VM): any {var ram = com.vmware.library.vCloud.operation.getMemoryVM(vm);
System.log("VM current memory is : " + ram.memorySize);

return ram.memorySize/1024;

}
}
