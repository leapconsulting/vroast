/// <reference path="./../../includes.d.ts"/>

namespace com.dailyhypervisor.vcac.common {
export function getCatalogResourceForIaasVmEntity(vcacCafeHost?: vCACCAFE.VCACHost, vcacIaasVmEntity?: vCAC.Entity): vCACCAFE.CatalogResource {return vCACCAFEEntitiesFinder.findCatalogResources(vcacCafeHost, vcacIaasVmEntity.getProperty("VirtualMachineName"))[0];

}
}
