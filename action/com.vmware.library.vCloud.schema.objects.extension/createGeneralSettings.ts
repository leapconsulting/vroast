/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createGeneralSettings(absoluteSessionTimeoutMinutesArg?: number, activityLogDisplayDaysArg?: number, activityLogKeepDaysArg?: number, allowOverlappingExtNetsArg?: boolean, chargebackEventsKeepDaysArg?: number, chargebackTablesCleanupJobTimeInSecondsArg?: number, consoleProxyExternalAddressArg?: string, elasticAllocationPoolArg?: boolean, hostCheckDelayInSecondsArg?: number, hostCheckTimeoutSecondsArg?: number, installationIdArg?: number, ipReservationTimeoutSecondsArg?: number, loginNameOnlyArg?: boolean, prePopDefaultNameArg?: boolean, quarantineEnabledArg?: boolean, quarantineResponseTimeoutSecondsArg?: number, restApiBaseUriArg?: string, sessionTimeoutMinutesArg?: number, showStackTracesArg?: boolean, syncIntervalInHoursArg?: number, syncStartDateArg?: any, syslogServerSettingsArg?: any, systemExternalAddressArg?: string, transferSessionTimeoutSecondsArg?: number, vcTruststoreContentsArg?: byte[], vcTruststorePasswordArg?: string, vcTruststoreTypeArg?: string, verifyVcCertificatesArg?: boolean, verifyVsmCertificatesArg?: boolean, vmrcVersionArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGeneralSettings();
result["syncStartDate"] = syncStartDateArg;
result["quarantineResponseTimeoutSeconds"] = quarantineResponseTimeoutSecondsArg;
result["loginNameOnly"] = loginNameOnlyArg;
result["absoluteSessionTimeoutMinutes"] = absoluteSessionTimeoutMinutesArg;
result["activityLogDisplayDays"] = activityLogDisplayDaysArg;
result["activityLogKeepDays"] = activityLogKeepDaysArg;
result["allowOverlappingExtNets"] = allowOverlappingExtNetsArg;
result["chargebackEventsKeepDays"] = chargebackEventsKeepDaysArg;
result["consoleProxyExternalAddress"] = consoleProxyExternalAddressArg;
result["hostCheckDelayInSeconds"] = hostCheckDelayInSecondsArg;
result["hostCheckTimeoutSeconds"] = hostCheckTimeoutSecondsArg;
result["installationId"] = installationIdArg;
result["ipReservationTimeoutSeconds"] = ipReservationTimeoutSecondsArg;
result["syslogServerSettings"] = syslogServerSettingsArg;
result["prePopDefaultName"] = prePopDefaultNameArg;
result["quarantineEnabled"] = quarantineEnabledArg;
result["restApiBaseUri"] = restApiBaseUriArg;
result["sessionTimeoutMinutes"] = sessionTimeoutMinutesArg;
result["showStackTraces"] = showStackTracesArg;
result["syncIntervalInHours"] = syncIntervalInHoursArg;
result["systemExternalAddress"] = systemExternalAddressArg;
result["transferSessionTimeoutSeconds"] = transferSessionTimeoutSecondsArg;
result["verifyVcCertificates"] = verifyVcCertificatesArg;
result["vcTruststorePassword"] = vcTruststorePasswordArg;
result["vcTruststoreContents"] = vcTruststoreContentsArg;
result["vcTruststoreType"] = vcTruststoreTypeArg;
result["vmrcVersion"] = vmrcVersionArg;
result["verifyVsmCertificates"] = verifyVsmCertificatesArg;
result["elasticAllocationPool"] = elasticAllocationPoolArg;
result["chargebackTablesCleanupJobTimeInSeconds"] = chargebackTablesCleanupJobTimeInSecondsArg;
return result;
}
}
