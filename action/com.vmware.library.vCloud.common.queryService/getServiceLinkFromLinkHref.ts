/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getServiceLinkFromLinkHref(vcdHost?: vCloud.Host, linkHref?: string): vCloud.AdminServiceLink {var queryService = vcdHost.getQueryService();
var expression = new VclExpression(VclQueryServiceLinkField.LINKHREF, linkHref , VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);

var resultSet = queryService.queryRecords(VclQueryRecordType.SERVICELINK, params);

while (resultSet != null)  {
    var records = resultSet.getRecords(new VclQueryResultServiceLinkRecord());

    if (records.length > 0) {
		var serviceLinkRef = new VclReference();
		serviceLinkRef.href = records[0].href;
		serviceLinkRef.type = records[0].type;
		serviceLink = vcdHost.getEntityByReference(VclFinderType.ADMIN_SERVICE_LINK, serviceLinkRef);
		return serviceLink;
    }
}
return null;
}
}
