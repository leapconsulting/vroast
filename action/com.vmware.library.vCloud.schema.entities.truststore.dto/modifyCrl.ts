/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.truststore.dto {
export function modifyCrl(targetEntityArg?: vCloud.Crl, descriptionArg?: string, extendedAttributesArg?: any, isUniversalArg?: boolean, issuerCnArg?: string, nameArg?: string, nodeIdArg?: string, pemEncodingArg?: string, scopeArg?: any, universalRevisionArg?: number, x509CrlArg?: any): vCloud.Crl {// WARNING: Auto generated code. Please, do not edit this code.
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
if (x509CrlArg != null) {
	targetEntityArg["x509Crl"] = x509CrlArg;
}
if (issuerCnArg != null) {
	targetEntityArg["issuerCn"] = issuerCnArg;
}
if (nodeIdArg != null) {
	targetEntityArg["nodeId"] = nodeIdArg;
}
return targetEntityArg;
}
}
