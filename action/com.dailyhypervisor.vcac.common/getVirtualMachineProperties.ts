/// <reference path="./../../includes.d.ts"/>

namespace com.dailyhypervisor.vcac.common {
export function getVirtualMachineProperties(virtualMachineEntity?: vCAC.Entity, vCACHost?: vCAC.VCACHost): Properties {var virtualMachinePropertyEntities = virtualMachineEntity.getLink(vCACHost, "VirtualMachineProperties");

var virtualMachineProperties = new Properties();

for (var virtualMach inePropertyEntity of virtualMachinePropertyEntities)
{
	var propertyName = virtualMachinePropertyEntity.getProperty("PropertyName");
	var propertyValue = virtualMachinePropertyEntity.getProperty("PropertyValue");
	virtualMachineProperties.put(propertyName, propertyValue);
}

return virtualMachineProperties;

}
}
