/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getVMSizesBySeries(locationId?: string, series?: string): Array<string> {var connection = com.vmware.vra.endpoint.azure.getFirstConnectionContainingLocationId(locationId);

if (connection == null) {
    System.log("[getVMSizesBySeries] No Azure connection found in vRO system that contains location with id '" + locationId + "'.");
    return null;
}

var location = connection.getLocationByName(locationId);

var sizes = new Array();
for (var size of location.virtualMachineSizes) {
    var seriesName = extractSeries(size.name);

    if (seriesName == series) {
        sizes.push(size.name);
    }
}

System.debug("[getVMSizesBySeries] In the passed location '" + locationId + "' and series '" + series + "' were found the following sizes: " + sizes.join(", "));

return sizes;

function extractSeries(sizeName) {
    // The passed sizeName has a form like "Standard_A0" or "Standard_DS1_v2". For the first case the series name is A, while in the second - DSv2.
    var splitted = sizeName.split("_");
    var serieName = splitted[1].match("^[a-zA-Z]+")[0];
    if (splitted[2]) {
        serieName = serieName + splitted[2];
    }
    return serieName;
}

}
}
