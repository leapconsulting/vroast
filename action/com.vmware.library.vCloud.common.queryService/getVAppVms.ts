/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVAppVms(vApp?: vCloud.VApp): Array<vCloud.VM> {var vcdHost = vApp.getHost();

var queryService = vcdHost.getQueryService();
expression = new VclExpression(VclQueryVMField.CONTAINER, vApp.getReference().href, VclExpressionType.EQUALS);
filter = new VclFilter(expression);
params = new VclQueryParams();
params.setFilter(filter);
var fields = new Array();
fields.push(VclQueryVMField.NAME);
params.addSortFields(fields, VclSortType.SORT_ASC); 

var resultSet = queryService.queryRecords(VclQueryRecordType.VM, params);

var vms = new Array();

while (resultSet != null) {
    var records = resultSet.getRecords(new VclQueryResultVMRecord());    
    for (var record of records) {
		var vmRef = new VclReference();
		vmRef.href = record.href;
		vmRef.name = record.name;
		vmRef.type = record.type;
		
		var vm = vcdHost.getEntityByReference(VclFinderType.VM, vmRef);
		if (vm != null) {
			vms.push(vm);
		}
    }
    resultSet = resultSet.getNextPage();
}

return vms;


}
}
