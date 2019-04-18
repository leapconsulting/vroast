/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getAdminVMsByName(vcdHost?: vCloud.Host, name?: string): Array<vCloud.VM> {var queryService = vcdHost.getQueryService();

var expression = new VclExpression(VclQueryAdminVMField.NAME, name , VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);
var fields = new Array();
fields.push(VclQueryVAppField.NAME);
params.addSortFields(fields, VclSortType.SORT_ASC);
var resultSet = queryService.queryRecords(VclQueryRecordType.ADMINVM, params);

var vms = new Array();

while (resultSet != null)  {
    var records = resultSet.getRecords(new VclQueryResultAdminVMRecord());
    for (var record of records) {
        var vmRef = new VclReference();
        vmRef.href = record.href;
        vmRef.name = record.name;
        vmRef.type = record.type;

		var vm = vcdHost.getEntityByReference(VclFinderType.VM, vmRef)
		if (vm != null) {
			vms.push(vm);
    	}
	}
    resultSet = resultSet.getNextPage();
}
return vms;
}
}
