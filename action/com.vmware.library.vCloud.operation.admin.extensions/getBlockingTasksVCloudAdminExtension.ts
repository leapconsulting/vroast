/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function getBlockingTasksVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.BlockingTask> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getBlockingTasks();
}
}
