/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function removeVMCustomParameter(VM?: vCloud.VM, parameterKey?: string): vCloud.Task {var productSections = VM.getProductSections();

actionResult = com.vmware.library.vCloud.vApp.removeCustomParameter(productSections,parameterKey) ;

return VM.updateProductSections(productSections);
}
}
