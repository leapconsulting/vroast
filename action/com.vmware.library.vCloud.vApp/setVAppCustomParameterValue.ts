/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function setVAppCustomParameterValue(vApp?: vCloud.VApp, parameterKey?: string, value?: any): vCloud.Task {var productSections = vApp.getProductSections();
//System.log("\t@@@ vApp\n" + vApp.toXml());

productSections = com.vmware.library.vCloud.vApp.setCustomParameterValue(productSections,parameterKey,value);

return vApp.updateProductSections(productSections);
}
}
