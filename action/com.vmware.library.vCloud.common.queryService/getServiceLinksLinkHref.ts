/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getServiceLinksLinkHref(vcdHost?: vCloud.Host): Array<string> {var queryService = vcdHost.getQueryService();
var expression = new VclExpression(VclQueryServiceLinkField.REL, "*" , VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);

var resultSet = queryService.queryRecords(VclQueryRecordType.SERVICELINK, params);

var serviceLinksLinkHref = new Array();

while (resultSet != null)  {
    var records = resultSet.getRecords(new VclQueryResultServiceLinkRecord());
    for (var record of records) {
		serviceLinksLinkHref.push(record.linkHref);
    }
    resultSet = resultSet.getNextPage();
}
return serviceLinksLinkHref;
}
}
