/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createOvfFile(chunkSizeArg?: number, compressionArg?: string, sizeArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOvfFile();
result["chunkSize"] = chunkSizeArg;
result["compression"] = compressionArg;
result["size"] = sizeArg;
return result;
}
}
