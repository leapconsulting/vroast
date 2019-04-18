/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.truststore {
export function selfSignCsr(targetEntityArg?: vCloud.Csr, noOfDaysArg?: number): vCloud.SelfSignedCsr {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.selfSign(noOfDaysArg);
}
}
