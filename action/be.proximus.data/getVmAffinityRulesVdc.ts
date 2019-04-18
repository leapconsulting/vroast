/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getVmAffinityRulesVdc(targetEntityArg?: vCloud.Vdc): Array<vCloud.VmAffinity> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getVmAffinityRules();
}
}
