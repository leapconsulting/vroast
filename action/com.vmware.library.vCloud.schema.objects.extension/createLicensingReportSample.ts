/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createLicensingReportSample(managedServerMetricsArg?: any, observationDateArg?: any, virtualMachineMetricsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLicensingReportSample();
result["managedServerMetrics"] = managedServerMetricsArg;
result["virtualMachineMetrics"] = virtualMachineMetricsArg;
result["observationDate"] = observationDateArg;
return result;
}
}
