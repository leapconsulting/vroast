/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
export function createDhcpOption150Params(tftpServersArg?: Array<string>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDhcpOption150Params();
var items = result["tftpServers"];
for (var obj of tftpServersArg) {
	items.add(obj);
}
return result;
}
}
