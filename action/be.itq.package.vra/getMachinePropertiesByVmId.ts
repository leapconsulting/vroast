/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.vra {
export function getMachinePropertiesByVmId(moRefId?: string): Properties {var vra = be.itq.package.vra;
var vcacLibrary = com.vmware.library.vcac;

var host = vra.getIaasHost();

var virtualMachineEntity = vcacLibrary.getVirtualMachineByUniqueId(host, moRefId);

var virtualMachinePropertiesEntities = virtualMachineEntity.getLink(host, "VirtualMachineProperties");

virtualMachinePropertiesEntities.forEach(function (virtualMachinePropertiesEntity) {
	var propertyName = virtualMachinePropertiesEntity.getProperty("PropertyName");
	var propertyValue = virtualMachinePropertiesEntity.getProperty("PropertyValue");
	vmProperties.put(propertyName, propertyValue);
});

return vmProperties;
}
}
