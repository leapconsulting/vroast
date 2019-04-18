/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function createServiceCertGateway(targetEntityArg?: vCloud.Gateway, isUploadPemArg?: boolean, pemEncodingTextArg?: string, pemEncodingPathArg?: string, isUploadKeyArg?: boolean, privateKeyTextArg?: string, privateKeyPathArg?: string, passPhraseArg?: string, descriptionArg?: string): Array<vCloud.ServiceCertificate> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.createServiceCert(isUploadPemArg,pemEncodingTextArg,pemEncodingPathArg,isUploadKeyArg,privateKeyTextArg,privateKeyPathArg,passPhraseArg,descriptionArg);
}
}
