/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.vra {
export function completeRequestTemplate(requestTemplate?: any, serverCpu?: number, serverMemory?: number, serverAdditionalDisks?: Array<any>, serverNetworkConfig?: Array<any>, serverCustomProperties?: Properties, instances?: number, storagePolicy?: vCloud.VdcStorageProfile, leaseDays?: number): any {if (!requestTemplate) {
	throw "'requestTemplate' cannot be empty";
}

var request = JSON.parse(JSON.stringify(requestTemplate));

if (request) {
	var templateKeys = Object.keys(request);
	request._leaseDays = leaseDays;
	var machineKeys = templateKeys.filter(function(key) {
		System.log(key);
		return request[key] && request[key].classId == "Blueprint.Component.Declaration";
	});	
	System.log(machineKeys);			
	machineKeys.forEach(function(machineKey) {
		var machine = request[machineKey];

//		machine.data["os_type"] = osType;
		machine.data.cpu = serverCpu;
		machine.data.memory = serverMemory * 1024;
		machine.data._cluster = parseInt(instances);
		//machine.data._leaseDays = parseInt(leaseDays);

			
		if (serverNetworkConfig) {
			serverNetworkConfig.forEach(function(config, index) {
				machine.data["VirtualMachine.Network" + index + ".Name"] = config.networkName;
				/*machine.data["VirtualMachine.Network0.Address"] = serverNetworkConfig.ipAddress;
				machine.data["VirtualMachine.Network0.SubnetMask"] = serverNetworkConfig.subnetMask;
				if (serverNetworkConfig.dnsAddress.length >= 1) {
					machine.data["VirtualMachine.Network0.PrimaryDns"] = serverNetworkConfig.dnsAddress[0];
				}
				if (serverNetworkConfig.dnsAddress.length >= 2) {
					machine.data["VirtualMachine.Network0.SecondaryDns"] = serverNetworkConfig.dnsAddress[1];
				}
				machine.data["VirtualMachine.Network0.Gateway"] = serverNetworkConfig.defaultGateway;
				machine.data["VirtualMachine.Network0.MacAddressType"] = "static";
				machine.data["VirtualMachine.Network0.MacAddress"] = serverNetworkConfig.macAddress;
*/
			});
		}
		
		if (serverCustomProperties) {
			serverCustomProperties.keys.forEach(function(key) {
				machine.data[key] = serverCustomProperties.get(key);
			});
		}
		
		if (serverAdditionalDisks) {
			if (!machine.data.disks) {
				machine.data.disks = [];
			}
			
			serverAdditionalDisks.forEach(function(disk) {
				machine.data.disks.push({
					"componentTypeId": "com.vmware.csp.iaas.blueprint.service",
					"componentId": null,
					"classId": "Infrastructure.Compute.Machine.MachineDisk",
					"typeFilter": null,
					"data": {
						"capacity": disk.size,
						"label" : null,
						"custom_properties": null,
						"initial_location": "",
						"userCreated": false,
						"storagePolicy":storagePolicy,
						"storage_reservation_policy" : storagePolicy.name 
					}
				});
			});
		};
		System.log("storagePolicy into loop : " + storagePolicy);
		machine.data.disks[0].data.storagePolicy = storagePolicy.name;
		machine.data.disks[0].data.storage_reservation_policy = storagePolicy.name;
		System.log("MACHINE DETAILS!! \n" + JSON.stringify(machine,null,2))
		request[machineKey] = machine;
	});
		
		
		
}
System.log(JSON.stringify(request,null,2));

return request;
}
}
