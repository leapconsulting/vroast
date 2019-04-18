/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getCatalogItemByEntity(entity?: any): vCloud.CatalogItem {var vdcHost = entity.getHost();
var queryService = vdcHost.getQueryService();

var expression = new VclExpression(VclQueryCatalogItemField.ENTITY, entity.getReference().href, VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);

var resultSet = queryService.queryRecords(VclQueryRecordType.CATALOGITEM, params);

var catalogItems = new Array();

while (resultSet != null)  {
	var records = resultSet.getRecords(new VclQueryResultCatalogItemRecord());
	for (var record of records) {
		var catalogItemRef = new VclReference();
		catalogItemRef.href = record.href;
		catalogItemRef.name = record.name;
		catalogItemRef.type = record.type;
		
		var catalogItem = vdcHost.getEntityByReference(VclFinderType.CATALOG_ITEM, catalogItemRef);
		if (catalogItem != null) {
			catalogItems.push(catalogItem);
		}
	}	
    resultSet = resultSet.getNextPage();
}
return catalogItems[0];
}
}
