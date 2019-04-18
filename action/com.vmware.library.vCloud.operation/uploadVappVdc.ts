/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function uploadVappVdc(targetEntityArg?: vCloud.Vdc, ovfParamsArg?: any, localOvfFileLocationArg?: string): vCloud.VApp {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.uploadVapp(ovfParamsArg,localOvfFileLocationArg);
}
}
