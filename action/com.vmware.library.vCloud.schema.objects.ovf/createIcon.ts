/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createIcon(fileRefArg?: string, heightArg?: number, mimeTypeArg?: string, widthArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclIcon();
result["fileRef"] = fileRefArg;
result["width"] = widthArg;
result["mimeType"] = mimeTypeArg;
result["height"] = heightArg;
return result;
}
}
