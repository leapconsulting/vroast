/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getVmIpDetails(vm?: Azure.VirtualMachine): string {var ipsString = "";

if (vm == null) {
    return ipsString;
}

var columnLength = 28;

var networkInterfaces = vm.networkProfile.networkInterfaces;

if (networkInterfaces == null || networkInterfaces.length == 0) {
    return ipsString;
}

for (var nicRef of networkInterfaces) {
    var nicName =  nicRef.referenceUri.substring(nicRef.referenceUri.lastIndexOf("/") + 1);
    var nic = vm.resourceGroup.getNetworkInterfaceByName(nicName);

    var config = nic.ipConfigurations;
    for (var ipConfig of config) {
        var publicIpString = "-";
        var privateIpString = "-";

        if (ipConfig.publicIpAddress != null) {
            var publicIpId = ipConfig.publicIpAddress.id;
            var publicIpName = publicIpId.substring(publicIpId.lastIndexOf("/") + 1);
            // Example of PublicIpAddress id
            // var publicIpId = "/subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Network/publicIPAddresses/<publicIpAddressName>";
            var regex = /(resourceGroups\/)([^\/]*).*/;
            var match = regex.exec(publicIpId);
            resGrpName = match[2];
            var extendedResourceGroup = vm.connection.getResourceGroupByName(resGrpName);
            var publicIp = extendedResourceGroup.getPublicIpAddressByName(publicIpName);
            if (publicIp != null) {
                publicIpString = publicIp.ipAddress;
            }
        }

        if (ipConfig.privateIpAddress != null) {
            privateIpString = ipConfig.privateIpAddress;
        }

        ipsString += "Network Interface: " + nic.name + "\n";
        ipsString += "Public IP Address: " + publicIpString + "\n";
        ipsString += "Private IP Address: " + privateIpString + "\n";

        ipsString += "\n===============================================\n";
    }
}

return ipsString;


}
}
