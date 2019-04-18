/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function changeVirtualMemoryCapacity(memory?: string, newSize?: number): any {memory.memorySize = VclMiscObjectFactory.createBigInteger(newSize + '');
return memory;
}
}
