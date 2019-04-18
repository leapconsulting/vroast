/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function createCaCertGateway(targetEntityArg?: vCloud.Gateway, isUploadPemArg?: boolean, pemFileLocationArg?: string, pemContentArg?: string, descArg?: string): Array<vCloud.CA> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.createCaCert(isUploadPemArg,pemFileLocationArg,pemContentArg,descArg);
}
}
