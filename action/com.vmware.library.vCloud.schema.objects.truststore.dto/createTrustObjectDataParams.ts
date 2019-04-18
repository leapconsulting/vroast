/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
export function createTrustObjectDataParams(descriptionArg?: string, extendedAttributesArg?: Array<any>, isUniversalArg?: boolean, nameArg?: string, nodeIdArg?: string, passphraseArg?: string, pemEncodingArg?: string, privateKeyArg?: string, scopeArg?: any, universalRevisionArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclTrustObjectDataParams();
result["scope"] = scopeArg;
result["privateKey"] = privateKeyArg;
result["passphrase"] = passphraseArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["pemEncoding"] = pemEncodingArg;
var items = result["extendedAttributes"];
for (var obj of extendedAttributesArg) {
	items.add(obj);
}
result["isUniversal"] = isUniversalArg;
result["universalRevision"] = universalRevisionArg;
result["nodeId"] = nodeIdArg;
return result;
}
}
