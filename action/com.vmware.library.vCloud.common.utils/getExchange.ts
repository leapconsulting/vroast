/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.utils {
export function getExchange(vcdHost?: vCloud.Host): string {if (vcdHost != null) {
	var hostAdmin = vcdHost.toAdminObject();
	System.log("hostAdmin : " + hostAdmin);
	var hostAdminExtension = hostAdmin.toAdminExtensionObject();
	System.log("hostAdminExtension : " + hostAdminExtension);
	var amqpSettings = hostAdminExtension.getAmqpSettings();
	return amqpSettings.amqpExchange;
} else {
	return null;
}
}
}
