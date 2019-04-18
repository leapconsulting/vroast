/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function createCrlCertGateway(targetEntityArg?: vCloud.Gateway, isUploadPemArg?: boolean, pemFileLocationArg?: string, pemContentArg?: string, descArg?: string): Array<vCloud.Crl> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.createCrlCert(isUploadPemArg,pemFileLocationArg,pemContentArg,descArg);
}
}
