/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function getFirstPendingTask(entity?: any): vCloud.Task {if (entity.tasks != null) {
	return entity.tasks.getTasks()[0];
}
return null;
}
}
