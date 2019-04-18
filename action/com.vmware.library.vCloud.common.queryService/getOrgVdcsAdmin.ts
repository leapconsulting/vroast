/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getOrgVdcsAdmin(organization?: vCloud.Organization): Array<vCloud.Vdc> {var vcdHost = organization.getHost();

var queryService = vcdHost.getQueryService();	
var expression = new VclExpression(VclQueryOrgVdcField.ORGNAME, organization.name, VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);
var resultSet = queryService.queryRecords(VclQueryRecordType.ADMINORGVDC,params);

var vdcs = new Array();

while (resultSet != null) {
    var records = resultSet.getRecords(new VclQueryResultAdminVdcRecord);
    for (var record of records) {
		var vdcRef = new VclReference();
		vdcRef.href = record.href;
		vdcRef.name = record.name;
		vdcRef.type = record.type;
		
		var vdc = vcdHost.getEntityByReference(VclFinderType.ADMIN_VDC, vdcRef);
		
		if (vdc != null) {
			vdcs.push(vdc);
		}
    }
    resultSet = resultSet.getNextPage();
}
return vdcs;
}
}
