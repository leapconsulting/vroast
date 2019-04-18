/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVAppByName(vcdHost?: vCloud.Host, vAppName?: string): Array<vCloud.VApp> {var isSystem;

if (vcdHost.organization.toLowerCase() == "system") {
	isSystem = true;
} else {
	isSystem = false;
}
			
var queryService = vcdHost.getQueryService()
var expression = new VclExpression(VclQueryVAppField.NAME, vAppName, VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
var fields = new Array();
fields.push(VclQueryVAppField.NAME);
params.addSortFields(fields, VclSortType.SORT_ASC);
params.setFilter(filter);

var resultSet;
if (isSystem) {
	resultSet = queryService.queryRecords(VclQueryRecordType.ADMINVAPP, params);
} else {
	resultSet = queryService.queryRecords(VclQueryRecordType.VAPP, params);
}

var vApps = new Array();
while (resultSet != null)  {
	var records;
    if (isSystem) {
		records = resultSet.getRecords(new VclQueryResultAdminVAppRecord());
	} else {
		records = resultSet.getRecords(new VclQueryResultVAppRecord());
	}
	for (var record of records) {
		var vAppRef = new VclReference();
		vAppRef.href = record.href;
		vAppRef.name = record.name;
		vAppRef.type = record.type;
		vApps.push(vcdHost.getEntityByReference(VclFinderType.VAPP, vAppRef));
	}
	resultSet = resultSet.getNextPage();
}
return vApps;
}
}
