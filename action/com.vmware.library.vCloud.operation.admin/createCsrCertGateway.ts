/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function createCsrCertGateway(targetEntityArg?: vCloud.Gateway, commonNameArg?: string, orgUnitArg?: string, orgNameArg?: string, localityArg?: string, stateOrProvinceArg?: string, countryCodeArg?: string, privateKeyArg?: string, keySizeArg?: string, descriptionArg?: string): vCloud.Csr {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.createCsrCert(commonNameArg,orgUnitArg,orgNameArg,localityArg,stateOrProvinceArg,countryCodeArg,privateKeyArg,keySizeArg,descriptionArg);
}
}
