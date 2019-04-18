/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vrops.remediation {
export function checkvcacconfig(): boolean {var vcacConfigOk = false;
try{
	pluginTypes = Server.getAllPluginInfo();

	var foundvCAC = false;
	var foundvCACCAFE = false;


	for (var plug in of pluginTypes){ 
		System.log("Found " + plugin.name); 
		if(plugin.name == "vCAC"){
			foundvCAC = true; }
		if(plugin.name == "vCACCAFE"){
			foundvCACCAFE = true;
		}
	}
	vcacConfigOk  = (foundvCAC && foundvCACCAFE);
	if (vcacConfigOk){

		var vCACHosts = Server.findAllForType("VCAC:VCACHost",null);

		if( vCACHosts == null || vCACHosts.length == 0){
			throw "No IAAS Hosts Found";
		}
		for (var host of vCACHosts){
			host.validate();
		}

		var vCACCAFEHosts = Server.findAllForType("vCACCAFE:VCACHost",null);
		if(vCACCAFEHosts == null || vCACCAFEHosts.length == 0){
			throw "No vCACCAFE Hosts Found";
		}
		for (var host of vCACCAFEHosts){
			host.validate();
		}
		vcacConfigOk = true;
	}
	else {
		System.log("vCO does NOT have vCAVC plugin installed");
	}	
}
catch (exception) {
	System.log("Error validating vCAC Config: " + exception);
	vcacConfigOk = false;
}
finally {
	return vcacConfigOk;	
}
}
}
