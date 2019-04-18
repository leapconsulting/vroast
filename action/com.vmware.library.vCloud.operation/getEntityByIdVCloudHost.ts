/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function getEntityByIdVCloudHost(targetEntityArg?: vCloud.Host, entityTypeArg?: string, idArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getEntityById(entityTypeArg,idArg);
}
}
