/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyHost(targetEntityArg?: vCloud.VmwHost, availableArg?: boolean, busyArg?: boolean, cpuTotalArg?: number, cpuTypeArg?: string, descriptionArg?: string, enableHostForHostSpanningArg?: boolean, enabledArg?: boolean, hostOsNameArg?: string, hostOsVersionArg?: string, memTotalArg?: number, memUsedArg?: number, nameArg?: string, numOfCpusLogicalArg?: number, numOfCpusPackagesArg?: number, operationKeyArg?: string, readyArg?: boolean, systemMessagesArg?: string, vimPropertyPageUrlArg?: string, vmMoRefArg?: string): vCloud.VmwHost {// WARNING: Auto generated code. Please, do not edit this code.
if (systemMessagesArg != null) {
	targetEntityArg["systemMessages"] = systemMessagesArg;
}
if (vimPropertyPageUrlArg != null) {
	targetEntityArg["vimPropertyPageUrl"] = vimPropertyPageUrlArg;
}
if (busyArg != null) {
	targetEntityArg["busy"] = busyArg;
}
if (enableHostForHostSpanningArg != null) {
	targetEntityArg["enableHostForHostSpanning"] = enableHostForHostSpanningArg;
}
if (cpuTypeArg != null) {
	targetEntityArg["cpuType"] = cpuTypeArg;
}
if (numOfCpusPackagesArg != null) {
	targetEntityArg["numOfCpusPackages"] = numOfCpusPackagesArg;
}
if (numOfCpusLogicalArg != null) {
	targetEntityArg["numOfCpusLogical"] = numOfCpusLogicalArg;
}
if (cpuTotalArg != null) {
	targetEntityArg["cpuTotal"] = cpuTotalArg;
}
if (memUsedArg != null) {
	targetEntityArg["memUsed"] = memUsedArg;
}
if (memTotalArg != null) {
	targetEntityArg["memTotal"] = memTotalArg;
}
if (hostOsNameArg != null) {
	targetEntityArg["hostOsName"] = hostOsNameArg;
}
if (hostOsVersionArg != null) {
	targetEntityArg["hostOsVersion"] = hostOsVersionArg;
}
if (vmMoRefArg != null) {
	targetEntityArg["vmMoRef"] = vmMoRefArg;
}
if (availableArg != null) {
	targetEntityArg["available"] = availableArg;
}
if (readyArg != null) {
	targetEntityArg["ready"] = readyArg;
}
if (enabledArg != null) {
	targetEntityArg["enabled"] = enabledArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
return targetEntityArg;
}
}
