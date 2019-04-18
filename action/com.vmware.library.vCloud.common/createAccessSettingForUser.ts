/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createAccessSettingForUser(accessLevel?: vCloud.AccessLevelType, subject?: vCloud.User): any {var accessSetting = new VclAccessSetting();
accessSetting.accessLevel = accessLevel;
accessSetting.subject = subject.getReference();
return accessSetting;
}
}
