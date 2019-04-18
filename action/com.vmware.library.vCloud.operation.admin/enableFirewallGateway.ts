/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function enableFirewallGateway(targetEntityArg?: vCloud.Gateway, arg0?: boolean, arg1?: string, arg2?: boolean): vCloud.Gateway {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.enableFirewall(arg0,arg1,arg2);
}
}
