/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.truststore.dto {
export function modifyCsr(targetEntityArg?: vCloud.Csr, algorithmArg?: string, cnArg?: string, descriptionArg?: string, extendedAttributesArg?: any, isUniversalArg?: boolean, keySizeArg?: string, nameArg?: string, nodeIdArg?: string, pemEncodingArg?: string, scopeArg?: any, subjectArg?: any, universalRevisionArg?: number): vCloud.Csr {// WARNING: Auto generated code. Please, do not edit this code.
if (algorithmArg != null) {
	targetEntityArg["algorithm"] = algorithmArg;
}
if (scopeArg != null) {
	targetEntityArg["scope"] = scopeArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (keySizeArg != null) {
	targetEntityArg["keySize"] = keySizeArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
if (subjectArg != null) {
	targetEntityArg["subject"] = subjectArg;
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
if (cnArg != null) {
	targetEntityArg["cn"] = cnArg;
}
if (nodeIdArg != null) {
	targetEntityArg["nodeId"] = nodeIdArg;
}
return targetEntityArg;
}
}
