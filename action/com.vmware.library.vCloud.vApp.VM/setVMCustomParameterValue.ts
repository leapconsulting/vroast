/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function setVMCustomParameterValue(VM?: vCloud.VM, parameterKey?: string, value?: any): vCloud.Task {var productSections = VM.getProductSections();

productSections = com.vmware.library.vCloud.vApp.setCustomParameterValue(productSections,parameterKey,value);

return VM.updateProductSections(productSections);
}
}
