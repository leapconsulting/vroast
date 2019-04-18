/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.vra {
export function getMachinePropertiesByVmName(vmName?: string): Properties {var vra = be.itq.package.vra;

var host = vra.getIaasHost();
var vmProperties = new Properties();
var virtualMachineEntity = vra.getVirtualMachineByName(host,vmName)

var virtualMachinePropertiesEntities = virtualMachineEntity.getLink(host, "VirtualMachineProperties");

virtualMachinePropertiesEntities.forEach(function (virtualMachinePropertiesEntity) {
	var propertyName = virtualMachinePropertiesEntity.getProperty("PropertyName");
	var propertyValue = virtualMachinePropertiesEntity.getProperty("PropertyValue");
	vmProperties.put(propertyName, propertyValue);
});

return vmProperties;
}
}
