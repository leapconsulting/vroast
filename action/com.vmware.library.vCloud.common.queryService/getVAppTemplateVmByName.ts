/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVAppTemplateVmByName(vAppTemplate?: vCloud.VAppTemplate, vmName?: string): vCloud.VAppTemplate {var vcdHost = vAppTemplate.getHost();

var queryService = vcdHost.getQueryService();
expression = new VclExpression(VclQueryVMField.CONTAINER, vAppTemplate.getReference().href, VclExpressionType.EQUALS);
filter = new VclFilter(expression);
params = new VclQueryParams();
params.setFilter(filter);

var resultSet = queryService.queryRecords(VclQueryRecordType.VM, params);
var vms = new Array();
while (resultSet != null) {
    var records = resultSet.getRecords(new VclQueryResultVMRecord());
    for (var record of records) {
		if (record.name == vmName) {
			var vmRef = new VclReference();
			vmRef.href = record.href;
			vmRef.name = record.name;
			vmRef.type = record.type;
			return vcdHost.getEntityByReference(VclFinderType.VAPP_TEMPLATE, vmRef);
		}
    }
    resultSet = resultSet.getNextPage();
}
return null;


}
}
