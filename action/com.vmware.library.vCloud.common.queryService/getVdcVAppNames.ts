/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVdcVAppNames(vdc?: vCloud.Vdc): Array<string> {var vcdHost = vdc.getHost();
var queryService = vcdHost.getQueryService();

var expression = new VclExpression(VclQueryVAppField.VDC, vdc.href, VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);
var resultSet = queryService.queryRecords(VclQueryRecordType.VAPP, params);

var vAppNames = new Array();

while (resultSet != null)  {
	var records = resultSet.getRecords(new VclQueryResultVAppRecord());
	for (var record of records) {
		vAppNames.push(record.name);
    }
    resultSet = resultSet.getNextPage();
}
return vAppNames;
}
}
