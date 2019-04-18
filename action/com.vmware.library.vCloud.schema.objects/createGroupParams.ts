/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createGroupParams(descriptionArg?: string, nameArg?: string, nameInSourceArg?: string, operationKeyArg?: string, providerTypeArg?: string, roleArg?: any, usersListArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGroupParams();
result["nameInSource"] = nameInSourceArg;
result["providerType"] = providerTypeArg;
result["operationKey"] = operationKeyArg;
result["usersList"] = usersListArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
if ((roleArg == null) || (roleArg instanceof VclReference)) {
	result["role"] = roleArg;
} else {
	result["role"] = roleArg.getReference();
}
return result;
}
}
