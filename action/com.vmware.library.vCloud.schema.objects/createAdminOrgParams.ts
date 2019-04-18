/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createAdminOrgParams(catalogsArg?: any, descriptionArg?: string, fullNameArg?: string, groupsArg?: any, isEnabledArg?: boolean, nameArg?: string, networksArg?: any, operationKeyArg?: string, settingsArg?: any, usersArg?: any, vdcsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAdminOrgParams();
result["groups"] = groupsArg;
result["fullName"] = fullNameArg;
result["settings"] = settingsArg;
result["users"] = usersArg;
result["catalogs"] = catalogsArg;
result["networks"] = networksArg;
result["vdcs"] = vdcsArg;
result["isEnabled"] = isEnabledArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
