/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.truststore.dto {
export function modifyX509Certificate(targetEntityArg?: any, caArg?: boolean, dsaPublicKeyGArg?: string, dsaPublicKeyPArg?: string, dsaPublicKeyQArg?: string, dsaPublicKeyYArg?: string, isCaArg?: boolean, isValidArg?: boolean, issuerArg?: string, issuerCnArg?: string, md5HashArg?: string, notAfterArg?: string, notBeforeArg?: string, publicKeyAlgoArg?: string, publicKeyLengthArg?: string, rsaPublicKeyExponentArg?: string, rsaPublicKeyModulusArg?: string, serialNumberArg?: string, sha1HashArg?: string, signatureArg?: string, signatureAlgoArg?: string, subjectArg?: string, subjectCnArg?: string, validArg?: boolean, versionArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
if (versionArg != null) {
	targetEntityArg["version"] = versionArg;
}
if (validArg != null) {
	targetEntityArg["valid"] = validArg;
}
if (serialNumberArg != null) {
	targetEntityArg["serialNumber"] = serialNumberArg;
}
if (notBeforeArg != null) {
	targetEntityArg["notBefore"] = notBeforeArg;
}
if (notAfterArg != null) {
	targetEntityArg["notAfter"] = notAfterArg;
}
if (signatureArg != null) {
	targetEntityArg["signature"] = signatureArg;
}
if (subjectArg != null) {
	targetEntityArg["subject"] = subjectArg;
}
if (signatureAlgoArg != null) {
	targetEntityArg["signatureAlgo"] = signatureAlgoArg;
}
if (issuerArg != null) {
	targetEntityArg["issuer"] = issuerArg;
}
if (publicKeyAlgoArg != null) {
	targetEntityArg["publicKeyAlgo"] = publicKeyAlgoArg;
}
if (publicKeyLengthArg != null) {
	targetEntityArg["publicKeyLength"] = publicKeyLengthArg;
}
if (rsaPublicKeyModulusArg != null) {
	targetEntityArg["rsaPublicKeyModulus"] = rsaPublicKeyModulusArg;
}
if (rsaPublicKeyExponentArg != null) {
	targetEntityArg["rsaPublicKeyExponent"] = rsaPublicKeyExponentArg;
}
if (dsaPublicKeyGArg != null) {
	targetEntityArg["dsaPublicKeyG"] = dsaPublicKeyGArg;
}
if (dsaPublicKeyPArg != null) {
	targetEntityArg["dsaPublicKeyP"] = dsaPublicKeyPArg;
}
if (dsaPublicKeyQArg != null) {
	targetEntityArg["dsaPublicKeyQ"] = dsaPublicKeyQArg;
}
if (dsaPublicKeyYArg != null) {
	targetEntityArg["dsaPublicKeyY"] = dsaPublicKeyYArg;
}
if (sha1HashArg != null) {
	targetEntityArg["sha1Hash"] = sha1HashArg;
}
if (md5HashArg != null) {
	targetEntityArg["md5Hash"] = md5HashArg;
}
if (isCaArg != null) {
	targetEntityArg["isCa"] = isCaArg;
}
if (isValidArg != null) {
	targetEntityArg["isValid"] = isValidArg;
}
if (issuerCnArg != null) {
	targetEntityArg["issuerCn"] = issuerCnArg;
}
if (subjectCnArg != null) {
	targetEntityArg["subjectCn"] = subjectCnArg;
}
if (caArg != null) {
	targetEntityArg["ca"] = caArg;
}
return targetEntityArg;
}
}
