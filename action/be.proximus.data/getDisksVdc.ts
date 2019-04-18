/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getDisksVdc(targetEntityArg?: vCloud.Vdc): Array<vCloud.Disk> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getDisks();
}
}
