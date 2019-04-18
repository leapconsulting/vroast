/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVmsByName(vcdHost?: vCloud.Host, vmName?: string): Array<vCloud.VM> {var isSystem;
if (vcdHost.organization.toLowerCase() == "system") {
	isSystem = true;
} else { 
	isSystem = false;
}	
							
var queryService = vcdHost.getQueryService()
var expression1 = new VclExpression(VclQueryVMField.NAME, vmName, VclExpressionType.EQUALS);
var expression2 = new VclExpression(VclQueryVMField.ISVAPPTEMPLATE, false, VclExpressionType.EQUALS);
var expressions = new Array(expression1,expression2);
var filter = new VclFilter(expressions,VclFilterType.AND);
var params = new VclQueryParams();

var fields = new Array();
fields.push(VclQueryVMField.NAME);
params.addSortFields(fields, VclSortType.SORT_ASC);

params.setFilter(filter);

var resultSet;
if (isSystem == true) {
	resultSet = queryService.queryRecords(VclQueryRecordType.ADMINVM, params);
} else { 
	resultSet = queryService.queryRecords(VclQueryRecordType.VM, params);
}

var vms = new Array();

while (resultSet != null)  {
    if (isSystem == true) var records = resultSet.getRecords(new VclQueryResultAdminVMRecord());
	else var records = resultSet.getRecords(new VclQueryResultVMRecord());
	for (var record of records) {
		var vmRef = new VclReference();
		vmRef.href = record.href;
		vmRef.name = record.name;
		vmRef.type = record.type;
		
		var vm = vcdHost.getEntityByReference(VclFinderType.VM, vmRef);
		if (vm != null){
			vms.push(vm);
		}
	}
	resultSet = resultSet.getNextPage();
}
return vms;
}
}
