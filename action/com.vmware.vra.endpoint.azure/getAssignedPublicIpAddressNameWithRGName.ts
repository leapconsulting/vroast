/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getAssignedPublicIpAddressNameWithRGName(azureVm?: Azure.VirtualMachine): string {var nicResGrpName;
var nicName;

for (var nicRef of azureVm.networkProfile.networkInterfaces) {
    if (nicRef.primary) {
        // The referenceUri has a form like:
        // /subscriptions/<subscription_guid>/resourceGroups/<resourceGroup_name>/providers/Microsoft.Network/networkInterfaces/<nic_name>
        // From the following regex, second group gives ResourceGroupName and fourth - NIC name.
        var regex = /(resourceGroups\/)([^\/]*).*(networkInterfaces\/)(.*)/;
        var match = regex.exec(nicRef.referenceUri);
        nicResGrpName = match[2];
        nicName = match[4];
        log("The passed VM has a primary NIC in Resource Group '" + resGrpName + "' with name '" + nicName + "'.");
        break;
    }
}

var nicResGrp = azureVm.connection.getResourceGroupByName(nicResGrpName);
var nic = nicResGrp.getNetworkInterfaceByName(nicName);

var resGrpName;
var pipaName;
var result;

for (var ipConfig of nic.ipConfigurations) {
    if (ipConfig.publicIpAddress) {
        var publicIpAddressId = ipConfig.publicIpAddress.id;
        // The PublicIpAddress ID has a form like:
        // /subscriptions/<subscription_guid>/resourceGroups/<resourceGroup_name/providers/Microsoft.Network/publicIPAddresses/<publicIPAddress_name>
        // From the following regex, second group gives ResourceGroupName and fourth - PublicIpAddress name.
        var regex = /(resourceGroups\/)([^\/]*).*(publicIPAddresses\/)(.*)/;
        var match = regex.exec(publicIpAddressId);
        resGrpName = match[2];
        pipaName = match[4];
        log("Found PublicIpAddress with ID '" + publicIpAddressId + "'. \r\n Parsed PublicIPAddress name is '" + pipaName + "' and ResourceGroupName is '" + resGrpName + "'.");
        result = pipaName + " @ " + resGrpName;
        break;
    }
}

if (!result) {
    result = "None";
}

return result;

function log(message) {
    System.log("[getAssignedPublicIpAddressNameWithRGName] " + message);
}
}
}
