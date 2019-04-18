/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp Template {
export function createVAppTemplate(vdc?: vCloud.Vdc, name?: string, description?: string, format?: string): vCloud.VAppTemplate {var params = new VclUploadVAppTemplateParams();
params.name = name;
params.description = description;
params.transferFormat = format;
return vdc.createVAppTemplate(params);
}
}
