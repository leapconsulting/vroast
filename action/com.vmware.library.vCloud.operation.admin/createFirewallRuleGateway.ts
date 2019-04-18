/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function createFirewallRuleGateway(targetEntityArg?: vCloud.Gateway, paramsArg?: any): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.createFirewallRule(paramsArg);
}
}
