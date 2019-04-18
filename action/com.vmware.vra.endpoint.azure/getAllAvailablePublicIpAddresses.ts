/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getAllAvailablePublicIpAddresses(vm?: Azure.VirtualMachine): Array<string> {if (!vm) {
    return null;
}

var connection = vm.connection;

var result = [];
for (var rg of connection.resourceGroups) {
    for (var publicIp of rg.publicIpAddresses) {
        if (publicIp.ipConfiguration == null) {
            result.push(publicIp.name + " @ " + rg.name);
            System.log("[getAllAvailablePublicIpAddresses] Found available PublicIpAddress with name '" + publicIp.name + "' in resource group '" + rg.name + "'.");
        }
    }
}

return result;

}
}
