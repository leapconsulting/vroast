/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVdcVApps(vdc?: vCloud.Vdc): Array<vCloud.VApp> {var vcdHost = vdc.getHost();

var isSystem;
if (vcdHost.organization.toLowerCase() == "system") {
	isSystem = true;
} else {
	isSystem = false;
}
				
var queryService = vcdHost.getQueryService()
var expression = new VclExpression(VclQueryVAppField.VDC, vdc.href, VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();

var fields = new Array();
fields.push(VclQueryVAppField.NAME);
params.addSortFields(fields, VclSortType.SORT_ASC);

params.setFilter(filter);

var resultSet;
if (isSystem == true) {
	 resultSet = queryService.queryRecords(VclQueryRecordType.ADMINVAPP, params);
} else { 
	resultSet = queryService.queryRecords(VclQueryRecordType.VAPP, params);
}

var vApps = new Array();

while (resultSet != null)  {
    if (isSystem == true) var records = resultSet.getRecords(new VclQueryResultAdminVAppRecord());
	else var records = resultSet.getRecords(new VclQueryResultVAppRecord());
	for (var record of records) {
		var vAppRef = new VclReference();
		vAppRef.href = record.href;
		vAppRef.name = record.name;
		vAppRef.type = record.type;
		
		var vapp = vcdHost.getEntityByReference(VclFinderType.VAPP, vAppRef);
		if (vapp != null) {
			vApps.push(vapp);
		}
	}
	resultSet = resultSet.getNextPage();
}
return vApps;
}
}
