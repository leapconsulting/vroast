/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function updateNetworkCardsVM(targetEntityArg?: vCloud.VM, virtualNetworkCardsArg?: Array<any>): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.updateNetworkCards(virtualNetworkCardsArg);
}
}
