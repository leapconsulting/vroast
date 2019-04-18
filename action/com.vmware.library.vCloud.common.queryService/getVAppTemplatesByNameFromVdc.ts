/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVAppTemplatesByNameFromVdc(vAppTemplateName?: string, vdc?: vCloud.Vdc): Array<vCloud.VAppTemplate> {var vdcHost = vdc.getHost();
var queryService = vdcHost.getQueryService();
var expression = new VclExpression(VclQueryVAppTemplateField.NAME, vAppTemplateName, VclExpressionType.EQUALS);
var filter = new VclFilter(expression);
var params = new VclQueryParams();
params.setFilter(filter);

var resultSet = queryService.queryRecords(VclQueryRecordType.VAPPTEMPLATE, params);
var vAppTemplates = new Array();

while (resultSet != null)  {
	var records = resultSet.getRecords(new VclQueryResultVAppTemplateRecord());
	for (var record of records) {
		if (record.vdc == vdc.getReference().href) {
			var vAppTemplateRef = new VclReference();
			vAppTemplateRef.href = record.href;
			vAppTemplateRef.name = record.name;
			vAppTemplateRef.type = record.type;
			var vAppTemplate = vdcHost.getEntityByReference(VclFinderType.VAPP_TEMPLATE, vAppTemplateRef);
			if (vAppTemplate != null) {
				vAppTemplates.push(vAppTemplate);
			}
		}
	}
    resultSet = resultSet.getNextPage();
}

return vAppTemplates;

}
}
