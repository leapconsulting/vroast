/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getChildrenVmsVApp(targetEntityArg?: vCloud.VApp): Array<string> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getChildrenVms();
}
}
