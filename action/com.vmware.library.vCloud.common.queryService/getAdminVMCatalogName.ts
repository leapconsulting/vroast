/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getAdminVMCatalogName(vm?: vCloud.VM): string {var vcdHost = vm.getHost();

var queryService = vcdHost.getQueryService();
var expression = new VclExpression(VclQueryAdminVMField.HREF, vm.getReference().href , VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);
var fields = new Array();
fields.push(VclQueryVAppField.NAME);
params.addSortFields(fields, VclSortType.SORT_ASC);
var resultSet = queryService.queryRecords(VclQueryRecordType.ADMINVM, params);

if (resultSet != null){
    var records = resultSet.getRecords(new VclQueryResultAdminVMRecord());
    if (records.length > 0){
		System.log("Catalog name : " + records[0].catalogName);
		return records[0].catalogName;
    }
}

}
}
