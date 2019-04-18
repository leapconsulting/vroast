/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getVmAffinityRulesVdcName(targetEntityArg?: vCloud.Vdc): Array<string> {// WARNING: Auto generated code. Please, do not edit this code.
var affinityRuleName = targetEntityArg.getVmAffinityRules();

var mapName = new Array();

for (var aff inityRule of affinityRuleName){
	mapName.push(affinityRule.name);
}

return mapName;
}
}
