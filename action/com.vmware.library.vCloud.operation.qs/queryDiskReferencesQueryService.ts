/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.qs {
export function queryDiskReferencesQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any> {// WARNING: Auto generated code. Please, do not edit this code.
var result = new Array();
if (host==null) {
	throw "host is null"
}
if (expressionParams==null) {
	throw "expressionParams is null"
}
var srv = host.getQueryService();
var params = new VclQueryParams();
var expressionArray = new Array();
for (var i = 0; i<expressionParams.length;i++) {
	if (expressionParams[i].getKey()!=null && expressionParams[i].getValue()!=null && expressionParams[i].getType()!=null) {
		var expression = new VclExpression(expressionParams[i].getKey(), expressionParams[i].getValue(), expressionParams[i].getType());
		expressionArray.push(expression);
	}
}
if (expressionArray!=null) {
	var filter;
	if (expressionArray.length == 1) {
		filter = new VclFilter(expressionArray[0]);
	} else if (filterType!=null) {
		filter = new VclFilter(expressionArray, filterType);
	} else {
		throw "filterType is null";
	}
	params.setFilter(filter);
}
var referenceRSet = srv.queryDiskReferences(params);
while (referenceRSet!=null) {
	var references = referenceRSet.getReferences();
	result = result.concat(references);
	if (referenceRSet.hasNextPage()) {
		referenceRSet = referenceRSet.getNextPage();
	} else {
		break;
	}
}
return result;

}
}
