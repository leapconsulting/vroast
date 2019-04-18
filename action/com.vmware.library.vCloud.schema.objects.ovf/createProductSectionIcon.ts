/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createProductSectionIcon(fileRefArg?: string, heightArg?: number, mimeTypeArg?: string, widthArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclProductSectionIcon();
result["fileRef"] = fileRefArg;
result["width"] = widthArg;
result["mimeType"] = mimeTypeArg;
result["height"] = heightArg;
return result;
}
}
