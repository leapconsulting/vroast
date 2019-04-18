/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createMksTicket(hostArg?: string, portArg?: number, ticketArg?: string, vmxArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclMksTicket();
result["vmx"] = vmxArg;
result["ticket"] = ticketArg;
result["host"] = hostArg;
result["port"] = portArg;
return result;
}
}
