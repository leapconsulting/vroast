/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createAccessSettingForGroup(accessLevel?: vCloud.AccessLevelType, subject?: vCloud.Group): any {var accessSetting = new VclAccessSetting();
accessSetting.accessLevel = accessLevel;
accessSetting.subject = subject.getReference();
return accessSetting;
}
}
