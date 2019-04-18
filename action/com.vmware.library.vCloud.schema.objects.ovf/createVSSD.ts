/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createVSSD(automaticRecoveryActionArg?: any, automaticShutdownActionArg?: any, automaticStartupActionArg?: any, automaticStartupActionDelayArg?: any, automaticStartupActionSequenceNumberArg?: any, captionArg?: any, changeableTypeArg?: any, configurationDataRootArg?: any, configurationFileArg?: any, configurationIDArg?: any, configurationNameArg?: any, creationTimeArg?: any, descriptionArg?: any, elementNameArg?: any, generationArg?: any, instanceIDArg?: any, logDataRootArg?: any, notesArg?: Array<any>, recoveryFileArg?: any, snapshotDataRootArg?: any, suspendDataRootArg?: any, swapFileDataRootArg?: any, virtualSystemIdentifierArg?: any, virtualSystemTypeArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVSSD();
result["creationTime"] = creationTimeArg;
result["automaticStartupActionSequenceNumber"] = automaticStartupActionSequenceNumberArg;
result["caption"] = captionArg;
result["automaticShutdownAction"] = automaticShutdownActionArg;
result["automaticStartupAction"] = automaticStartupActionArg;
result["automaticStartupActionDelay"] = automaticStartupActionDelayArg;
result["virtualSystemType"] = virtualSystemTypeArg;
result["automaticRecoveryAction"] = automaticRecoveryActionArg;
result["changeableType"] = changeableTypeArg;
result["configurationDataRoot"] = configurationDataRootArg;
result["configurationID"] = configurationIDArg;
result["configurationName"] = configurationNameArg;
result["elementName"] = elementNameArg;
result["instanceID"] = instanceIDArg;
result["logDataRoot"] = logDataRootArg;
var items = result["notes"];
for (var obj of notesArg) {
	items.add(obj);
}
result["recoveryFile"] = recoveryFileArg;
result["snapshotDataRoot"] = snapshotDataRootArg;
result["suspendDataRoot"] = suspendDataRootArg;
result["swapFileDataRoot"] = swapFileDataRootArg;
result["virtualSystemIdentifier"] = virtualSystemIdentifierArg;
result["description"] = descriptionArg;
result["configurationFile"] = configurationFileArg;
result["generation"] = generationArg;
return result;
}
}
