/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getRightByName(vcdHost?: vCloud.Host, name?: string): vCloud.Right {var queryService = vcdHost.getQueryService();
var expression = new VclExpression(VclQueryRightField.NAME, name , VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);

var resultSet = queryService.queryRecords(VclQueryRecordType.RIGHT, params);

if (resultSet != null)  {
    var records = resultSet.getRecords(new VclQueryResultRightRecord());
	if (records.length > 0) {
        var ref = new VclReference();
        ref.href = records[0].href;
        ref.name = records[0].name;
        ref.type = records[0].type;
		return vcdHost.getEntityByReference(VclFinderType.RIGHT, ref)
    }
}
return null;
}
}
