/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.truststore {
export function addSignedCertCsr(targetEntityArg?: vCloud.Csr, isUploadPemArg?: boolean, pemFileLocationArg?: string, pemContentArg?: string, descArg?: string): Array<vCloud.ServiceCertificate> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.addSignedCert(isUploadPemArg,pemFileLocationArg,pemContentArg,descArg);
}
}
