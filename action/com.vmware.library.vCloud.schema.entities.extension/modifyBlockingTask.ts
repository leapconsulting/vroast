/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyBlockingTask(targetEntityArg?: vCloud.BlockingTask, createdTimeArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, organizationArg?: any, taskOwnerArg?: any, timeoutActionArg?: string, timeoutDateArg?: any, userArg?: any): vCloud.BlockingTask {// WARNING: Auto generated code. Please, do not edit this code.
if (createdTimeArg != null) {
	targetEntityArg["createdTime"] = createdTimeArg;
}
if (taskOwnerArg != null) {
	if (taskOwnerArg instanceof VclReference) {
	    targetEntityArg["taskOwner"] = taskOwnerArg;
	} else {
	    targetEntityArg["taskOwner"] = taskOwnerArg.getReference();
	}
}
if (timeoutActionArg != null) {
	targetEntityArg["timeoutAction"] = timeoutActionArg;
}
if (timeoutDateArg != null) {
	targetEntityArg["timeoutDate"] = timeoutDateArg;
}
if (organizationArg != null) {
	if (organizationArg instanceof VclReference) {
	    targetEntityArg["organization"] = organizationArg;
	} else {
	    targetEntityArg["organization"] = organizationArg.getReference();
	}
}
if (userArg != null) {
	if (userArg instanceof VclReference) {
	    targetEntityArg["user"] = userArg;
	} else {
	    targetEntityArg["user"] = userArg.getReference();
	}
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
