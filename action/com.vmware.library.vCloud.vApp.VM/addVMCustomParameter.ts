/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function addVMCustomParameter(VM?: vCloud.VM, parameterKey?: string, parameterDescription?: string, parameterType?: string, parameterLabel?: string, userConfigurable?: boolean, defaultValue?: any): vCloud.Task {var productSections = VM.getProductSections();

actionResult = com.vmware.library.vCloud.vApp.addCustomParameter(productSections,parameterKey,parameterDescription,parameterType,parameterLabel,userConfigurable,defaultValue) ;

return VM.updateProductSections(productSections);
}
}
