/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createFile(bytesTransferredArg?: number, checksumArg?: string, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, sizeArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFile();
result["operationKey"] = operationKeyArg;
result["bytesTransferred"] = bytesTransferredArg;
result["checksum"] = checksumArg;
result["name"] = nameArg;
result["size"] = sizeArg;
result["description"] = descriptionArg;
return result;
}
}
