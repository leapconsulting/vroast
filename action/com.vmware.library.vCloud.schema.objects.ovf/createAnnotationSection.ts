/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createAnnotationSection(annotationArg?: any, infoArg?: any, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAnnotationSection();
result["info"] = infoArg;
result["required"] = requiredArg;
result["annotation"] = annotationArg;
return result;
}
}
