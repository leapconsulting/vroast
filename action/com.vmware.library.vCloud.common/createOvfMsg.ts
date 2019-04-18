/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createOvfMsg(msgId?: string, value?: string): any {var msg = new VclMsg();
if (msgId != null) {
	msg.msgid = msgId;
}
msg.value = value;
return msg;
}
}
