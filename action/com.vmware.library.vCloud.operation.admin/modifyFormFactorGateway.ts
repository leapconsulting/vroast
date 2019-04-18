/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function modifyFormFactorGateway(targetEntityArg?: vCloud.Gateway, formFactorArg?: string): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.modifyFormFactor(formFactorArg);
}
}
