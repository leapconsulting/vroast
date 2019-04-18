/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
export function createCsrParams(algorithmArg?: string, cnArg?: string, descriptionArg?: string, extendedAttributesArg?: Array<any>, isUniversalArg?: boolean, keySizeArg?: string, nameArg?: string, nodeIdArg?: string, pemEncodingArg?: string, scopeArg?: any, subjectArg?: any, universalRevisionArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCsrParams();
result["algorithm"] = algorithmArg;
result["scope"] = scopeArg;
result["name"] = nameArg;
result["keySize"] = keySizeArg;
result["description"] = descriptionArg;
result["subject"] = subjectArg;
result["pemEncoding"] = pemEncodingArg;
var items = result["extendedAttributes"];
for (var obj of extendedAttributesArg) {
	items.add(obj);
}
result["isUniversal"] = isUniversalArg;
result["universalRevision"] = universalRevisionArg;
result["cn"] = cnArg;
result["nodeId"] = nodeIdArg;
return result;
}
}
