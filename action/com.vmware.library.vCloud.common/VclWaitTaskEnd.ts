/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function VclWaitTaskEnd(task?: vCloud.Task, pollRateStart?: number, pollRateThreshold?: number): void {if (task == null) {
	throw "Task is null";
}
var pollRate = pollRateStart;
while (true) {
	try {
		task.updateInternalState();
	} catch (err) {
		System.log(err.description);
	}
	
	// check the task state
	if (task.status == VclTaskStatusType.SUCCESS.value) {
		break;
	} else
	if (task.status == VclTaskStatusType.CANCELED.value) {
		throw "Task '" + task.name + "' has been canceled";
	} else
	if (task.status == VclTaskStatusType.ABORTED.value) {
		throw "Task '" + task.name + "' has been aborted";
	} else 
	if (task.status == VclTaskStatusType.ERROR.value) {
		var error = "unknown error";
		if (task.error != null) {
			error = task.error;
		}
		throw "Task '" + task.name + "' error: " + error;
	}
	
	// update the poll rate
	System.sleep(pollRate * 1000);
	if (pollRate < pollRateThreshold) {
	    pollRate = pollRate * 2;
	}
}

}
}
