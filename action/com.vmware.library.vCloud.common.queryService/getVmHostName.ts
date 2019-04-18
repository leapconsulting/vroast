/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVmHostName(vm?: vCloud.VM): string {var vcdHost = vm.getHost();
var queryService = vcdHost.getQueryService();
var expression = new VclExpression(VclQueryAdminVMField.HREF, vm.getReference().href , VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);

var resultSet = queryService.queryRecords(VclQueryRecordType.ADMINVM, params);
var hostName;

while (resultSet != null)  {
    var records = resultSet.getRecords(new VclQueryResultAdminVMRecord());
    if (records.length > 0) {
		hostName = records[0].hostName;
	}	
}
return hostName;


}
}
