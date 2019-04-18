/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVAppsByName(vcdHost?: vCloud.Host, name?: string): Array<vCloud.VApp> {var queryService = vcdHost.getQueryService();

var expression = new VclExpression(VclQueryVAppField.NAME, name, VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);
var fields = new Array();
fields.push(VclQueryVAppField.NAME);
params.addSortFields(fields, VclSortType.SORT_ASC); 
var resultSet = queryService.queryRecords(VclQueryRecordType.VAPP, params);

var vApps = new Array();

while (resultSet != null)  {
	var records = resultSet.getRecords(new VclQueryResultVAppRecord());
	for (var record of records) {
		var vAppRef = new VclReference();
		vAppRef.href = record.href;
		vAppRef.name = record.name;
		vAppRef.type = record.type;
		var vApp = vcdHost.getEntityByReference(VclFinderType.VAPP, vAppRef);
		
		if (vApp != null) {
			vApps.push(vApp);
		}
    }
    resultSet = resultSet.getNextPage();
}

return vApps;

}
}
