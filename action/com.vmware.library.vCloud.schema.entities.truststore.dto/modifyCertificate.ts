/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.truststore.dto {
export function modifyCertificate(targetEntityArg?: vCloud.Certificate, certificateTypeArg?: string, descriptionArg?: string, extendedAttributesArg?: any, isUniversalArg?: boolean, issuerCnArg?: string, nameArg?: string, nodeIdArg?: string, pemEncodingArg?: string, scopeArg?: any, subjectCnArg?: string, universalRevisionArg?: number, x509CertificatesArg?: any): vCloud.Certificate {// WARNING: Auto generated code. Please, do not edit this code.
if (scopeArg != null) {
	targetEntityArg["scope"] = scopeArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
if (pemEncodingArg != null) {
	targetEntityArg["pemEncoding"] = pemEncodingArg;
}
if (extendedAttributesArg != null) {
	targetEntityArg["extendedAttributes"] = extendedAttributesArg;
}
if (isUniversalArg != null) {
	targetEntityArg["isUniversal"] = isUniversalArg;
}
if (universalRevisionArg != null) {
	targetEntityArg["universalRevision"] = universalRevisionArg;
}
if (issuerCnArg != null) {
	targetEntityArg["issuerCn"] = issuerCnArg;
}
if (subjectCnArg != null) {
	targetEntityArg["subjectCn"] = subjectCnArg;
}
if (x509CertificatesArg != null) {
	targetEntityArg["x509Certificates"] = x509CertificatesArg;
}
if (nodeIdArg != null) {
	targetEntityArg["nodeId"] = nodeIdArg;
}
if (certificateTypeArg != null) {
	targetEntityArg["certificateType"] = certificateTypeArg;
}
return targetEntityArg;
}
}
