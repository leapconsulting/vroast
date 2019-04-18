/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function addVAppCustomParameter(vApp?: vCloud.VApp, parameterKey?: string, parameterDescription?: string, parameterType?: string, parameterLabel?: string, userConfigurable?: boolean, defaultValue?: any): vCloud.Task {var productSections = vApp.getProductSections();

actionResult = com.vmware.library.vCloud.vApp.addCustomParameter(productSections,parameterKey,parameterDescription,parameterType,parameterLabel,userConfigurable,defaultValue) ;

return vApp.updateProductSections(productSections);
}
}
