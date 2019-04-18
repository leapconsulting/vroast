/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
export function createCertificateParams(certificateTypeArg?: string, descriptionArg?: string, extendedAttributesArg?: Array<any>, isUniversalArg?: boolean, issuerCnArg?: string, nameArg?: string, nodeIdArg?: string, pemEncodingArg?: string, scopeArg?: any, subjectCnArg?: string, universalRevisionArg?: number, x509CertificatesArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCertificateParams();
result["scope"] = scopeArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["pemEncoding"] = pemEncodingArg;
var items = result["extendedAttributes"];
for (var obj of extendedAttributesArg) {
	items.add(obj);
}
result["isUniversal"] = isUniversalArg;
result["universalRevision"] = universalRevisionArg;
result["issuerCn"] = issuerCnArg;
result["subjectCn"] = subjectCnArg;
var items = result["x509Certificates"];
for (var obj of x509CertificatesArg) {
	items.add(obj);
}
result["nodeId"] = nodeIdArg;
result["certificateType"] = certificateTypeArg;
return result;
}
}
