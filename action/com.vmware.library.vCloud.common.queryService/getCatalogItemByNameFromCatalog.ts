/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getCatalogItemByNameFromCatalog(catalogItemName?: string, catalog?: vCloud.Catalog): vCloud.CatalogItem {var vdcHost = catalog.getHost();
var queryService = vdcHost.getQueryService();

var expression = new VclExpression(VclQueryCatalogItemField.NAME, catalogItemName, VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);

var resultSet = queryService.queryRecords(VclQueryRecordType.CATALOGITEM, params);

while (resultSet != null)  {
	var records = resultSet.getRecords(new VclQueryResultCatalogItemRecord());
	for (var record of records) {
		if (record.catalog == catalog.getReference().href && record.name == catalogItemName) {
			var catalogItemRef = new VclReference();
			catalogItemRef.href = record.href;
			catalogItemRef.name = record.name;
			catalogItemRef.type = record.type;
			return (vdcHost.getEntityByReference(VclFinderType.CATALOG_ITEM, catalogItemRef));
			}
	    }
    resultSet = resultSet.getNextPage();
}

return null;
}
}
