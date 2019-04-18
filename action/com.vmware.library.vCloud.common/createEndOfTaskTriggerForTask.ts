/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createEndOfTaskTriggerForTask(task?: vCloud.Task): Trigger {return task.createEndOfTaskTrigger(-1);
}
}
