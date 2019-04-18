/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Vdc {
export function getProviderVdc(vdc?: vCloud.Vdc): vCloud.ProviderVdc {var host = vdc.getHost();
var pvDCRef = vdc.toAdminObject().providerVdcReference;
return host.getEntityByReference(VclFinderType.PROVIDER_VDC, pvDCRef);
}
}
