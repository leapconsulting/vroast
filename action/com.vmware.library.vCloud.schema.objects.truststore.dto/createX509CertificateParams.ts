/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
export function createX509CertificateParams(caArg?: boolean, dsaPublicKeyGArg?: string, dsaPublicKeyPArg?: string, dsaPublicKeyQArg?: string, dsaPublicKeyYArg?: string, isCaArg?: boolean, isValidArg?: boolean, issuerArg?: string, issuerCnArg?: string, md5HashArg?: string, notAfterArg?: string, notBeforeArg?: string, publicKeyAlgoArg?: string, publicKeyLengthArg?: string, rsaPublicKeyExponentArg?: string, rsaPublicKeyModulusArg?: string, serialNumberArg?: string, sha1HashArg?: string, signatureArg?: string, signatureAlgoArg?: string, subjectArg?: string, subjectCnArg?: string, validArg?: boolean, versionArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclX509CertificateParams();
result["version"] = versionArg;
result["valid"] = validArg;
result["serialNumber"] = serialNumberArg;
result["notBefore"] = notBeforeArg;
result["notAfter"] = notAfterArg;
result["signature"] = signatureArg;
result["subject"] = subjectArg;
result["signatureAlgo"] = signatureAlgoArg;
result["issuer"] = issuerArg;
result["publicKeyAlgo"] = publicKeyAlgoArg;
result["publicKeyLength"] = publicKeyLengthArg;
result["rsaPublicKeyModulus"] = rsaPublicKeyModulusArg;
result["rsaPublicKeyExponent"] = rsaPublicKeyExponentArg;
result["dsaPublicKeyG"] = dsaPublicKeyGArg;
result["dsaPublicKeyP"] = dsaPublicKeyPArg;
result["dsaPublicKeyQ"] = dsaPublicKeyQArg;
result["dsaPublicKeyY"] = dsaPublicKeyYArg;
result["sha1Hash"] = sha1HashArg;
result["md5Hash"] = md5HashArg;
result["isCa"] = isCaArg;
result["isValid"] = isValidArg;
result["issuerCn"] = issuerCnArg;
result["subjectCn"] = subjectCnArg;
result["ca"] = caArg;
return result;
}
}
