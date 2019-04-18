/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function removeVAppCustomParameter(vApp?: vCloud.VApp, parameterKey?: string): vCloud.Task {var productSections = vApp.getProductSections();

actionResult = com.vmware.library.vCloud.vApp.removeCustomParameter(productSections,parameterKey) ;

return vApp.updateProductSections(productSections);
}
}
