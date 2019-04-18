/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getScaffoldVAppProperties(vApp?: vCloud.VApp): Properties {//Using query service to get further information on the to be deployed vApp
var queryService = vApp.getHost().toAdminObject().toAdminExtensionObject().getExtensionQueryService();
 
var expression = new VclExpression(VclQueryVAppField.HREF, vApp.getReference().href, VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);

var vAppProperties = new Properties();
var resultSet = queryService.queryAllVappRecords(params);
while (resultSet != null) {
    var records = resultSet.getRecords();
    for (var record of records) {
		vAppProperties.put("Name", record.name);
		vAppProperties.put("VDC", record.vdcName);
		vAppProperties.put("Creation date", VclMiscObjectFactory.convertToGregorianCalendar(record.creationDate).toString());
		vAppProperties.put("Number of VMs", record.numberOfVMs);
		vAppProperties.put("Storage (GB)", Math.round(record.storageKB *100 / 1024 / 1024)/100); // returns 0;
		vAppProperties.put("Memory (GB)", Math.round(record.memoryAllocationMB *100 / 1024)/100);
		
		var map = record.otherAttributes;
		var vAppAutoDeleteDate = "Unlimited";
		for (var k of map.keys) {
			if (k.getLocalPart() == "autoDeleteDate") {
				var vAppAutoDeleteDateString = map.get(k);
				if  (vAppAutoDeleteDateString != null && vAppAutoDeleteDateString != undefined) {
					var vAppAutoDeleteDateXmlGregorianCalendar = VclMiscObjectFactory.xmlGregorianCalendarFromString(vAppAutoDeleteDateString);
					var vAppAutoDeleteDate = VclMiscObjectFactory.convertToGregorianCalendar(vAppAutoDeleteDateXmlGregorianCalendar).toString();
				}
				System.log(k.getLocalPart() + " : " + map.get(k));
			}
		}
	vAppProperties.put("Auto delete date", vAppAutoDeleteDate);	
	}
    resultSet = resultSet.getNextPage();
}
System.log("Got scaffold vApp Properties");
return vAppProperties;
}
}
