/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createTaskRequestBase(createdTimeArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, organizationArg?: any, taskOwnerArg?: any, timeoutActionArg?: string, timeoutDateArg?: any, userArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclTaskRequestBase();
result["createdTime"] = createdTimeArg;
if ((taskOwnerArg == null) || (taskOwnerArg instanceof VclReference)) {
	result["taskOwner"] = taskOwnerArg;
} else {
	result["taskOwner"] = taskOwnerArg.getReference();
}
result["timeoutAction"] = timeoutActionArg;
result["timeoutDate"] = timeoutDateArg;
if ((organizationArg == null) || (organizationArg instanceof VclReference)) {
	result["organization"] = organizationArg;
} else {
	result["organization"] = organizationArg.getReference();
}
if ((userArg == null) || (userArg instanceof VclReference)) {
	result["user"] = userArg;
} else {
	result["user"] = userArg.getReference();
}
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
