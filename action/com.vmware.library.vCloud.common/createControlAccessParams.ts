/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createControlAccessParams(isSharedToEveryone?: boolean, everyoneAccessLevel?: vCloud.AccessLevelType, fullControlLevelUsers?: Array<vCloud.User>, fullControlLevelGroups?: Array<vCloud.Group>, changeLevelUsers?: Array<vCloud.User>, changeLevelGroups?: Array<vCloud.Group>, readOnlyLevelUsers?: Array<vCloud.User>, readOnlyLevelGroups?: Array<vCloud.Group>): any {var params = new VclControlAccessParams();

params.isSharedToEveryone = isSharedToEveryone;
params.everyoneAccessLevel = everyoneAccessLevel;
 
if ((fullControlLevelUsers != null) || (fullControlLevelGroups != null) ||
    (changeLevelUsers != null)      || (changeLevelGroups != null) ||
    (readOnlyLevelUsers != null)    || (readOnlyLevelGroups != null)) {

	var accessSettings = new VclAccessSettings();

	if (fullControlLevelUsers != null) {
		for (var i = 0; i < fullControlLevelUsers.length; i++) {
			var accessSetting = com.vmware.library.vCloud.common.createAccessSettingForUser(VclAccessLevelType.FULLCONTROL, fullControlLevelUsers[i]);
			accessSettings.accessSetting.add(accessSetting);
		}
	}

	if (fullControlLevelGroups != null) {
		for (var i = 0; i < fullControlLevelGroups.length; i++) {
			var accessSetting = com.vmware.library.vCloud.common.createAccessSettingForGroup(VclAccessLevelType.FULLCONTROL, fullControlLevelGroups[i]);
			accessSettings.accessSetting.add(accessSetting);
		}
	}

	if (changeLevelUsers != null) {
		for (var i = 0; i < changeLevelUsers.length; i++) {
			var accessSetting = com.vmware.library.vCloud.common.createAccessSettingForUser(VclAccessLevelType.CHANGE, changeLevelUsers[i]);
			accessSettings.accessSetting.add(accessSetting);
		}
	}

	if (changeLevelGroups != null) {
		for (var i = 0; i < changeLevelGroups.length; i++) {
			var accessSetting = com.vmware.library.vCloud.common.createAccessSettingForGroup(VclAccessLevelType.CHANGE, changeLevelGroups[i]);
			accessSettings.accessSetting.add(accessSetting);
		}
	}

	if (readOnlyLevelUsers != null) {
		for (var i = 0; i < readOnlyLevelUsers.length; i++) {
			var accessSetting = com.vmware.library.vCloud.common.createAccessSettingForUser(VclAccessLevelType.READONLY, readOnlyLevelUsers[i]);
			accessSettings.accessSetting.add(accessSetting);
		}
	}

	if (readOnlyLevelGroups != null) {
		for (var i = 0; i < readOnlyLevelGroups.length; i++) {
			var accessSetting = com.vmware.library.vCloud.common.createAccessSettingForGroup(VclAccessLevelType.READONLY, readOnlyLevelGroups[i]);
			accessSettings.accessSetting.add(accessSetting);
		}
	}

	params.accessSettings = accessSettings;
}

return params;
}
}
