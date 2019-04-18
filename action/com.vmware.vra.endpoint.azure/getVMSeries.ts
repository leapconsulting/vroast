/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getVMSeries(locationId?: string): Array<string> {var connection = com.vmware.vra.endpoint.azure.getFirstConnectionContainingLocationId(locationId);

if (connection == null) {
    System.error("[getVMSeries] No Azure connections found in vRO system that contain location with id '" + locationId + "'.");
    return null;
}

var location = connection.getLocationByName(locationId);
var seriesMap = new Properties();
for (var size of location.virtualMachineSizes) {
    var seriesName = extractSeries(size.name);

    if (seriesMap.get(seriesName) == null) {
        seriesMap.put(seriesName, seriesName);
    }
}

var sortedSeriesNames = seriesMap.keys.sort();

System.log("[getVMSeries] In the passed location '" + locationId + "' were found the following series: " + sortedSeriesNames.join(", "));

return sortedSeriesNames;

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
