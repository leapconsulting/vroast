/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createNetworkConfigSection(vms?: Array<vCloud.VM>, orgNetwork1?: vCloud.OrgNetwork, orgNetwork2?: vCloud.OrgNetwork, orgNetwork3?: vCloud.OrgNetwork, orgNetwork4?: vCloud.OrgNetwork, orgNetwork5?: vCloud.OrgNetwork, orgNetwork6?: vCloud.OrgNetwork, orgNetwork7?: vCloud.OrgNetwork, orgNetwork8?: vCloud.OrgNetwork, orgNetwork9?: vCloud.OrgNetwork): any {var section = new VclNetworkConfigSection();

section.info = com.vmware.library.vCloud.common.createOvfMsg(null,"NetworkConfigSection");

if ((vms == null) || (vms.length == 0)) {
	// No Virtual Machines
	return section;
}

var nics = 0;
for (var i = 0; i < 3; i++) {
	if (vms[i] != null) {
		nics = nics + vms[i].getNetworkConnectionSection().networkConnection.size();
	}
}

if (nics == 0) {
	// No NICs inside the Virtual Machines
	return section;
}

var addNone = false; // fake network

if (vms[0] != null) {
	nics = vms[0].getNetworkConnectionSection().networkConnection.size();

	if (nics > 0) {
		addNone = addNone || (orgNetwork1 == null);
	}
	if (nics > 1) {
		addNone = addNone || (orgNetwork2 == null);
	} 
	if (nics > 2) {
		addNone = addNone || (orgNetwork3 == null);
	}
}

if (vms[1] != null) {
	nics = vms[1].getNetworkConnectionSection().networkConnection.size();
	
	if (nics > 0) {
		addNone = addNone || (orgNetwork4 == null);
	} 
	if (nics > 1) {
		addNone = addNone || (orgNetwork5 == null);
	} 
	if (nics > 2) {
		addNone = addNone || (orgNetwork6 == null);
	}
}

if (vms[2] != null) {		
	nics = vms[2].getNetworkConnectionSection().networkConnection.size();

	if (nics > 0) {
		addNone = addNone || (orgNetwork7 == null);
	} 
	if (nics > 1) {
		addNone = addNone || (orgNetwork8 == null);
	} 
	if (nics > 2) {
		addNone = addNone || (orgNetwork9 == null);
	}
}

if (addNone) {
	section.networkConfig.add(com.vmware.library.vCloud.common.createVAppNetworkConfigurationNone());
}

// real networks

var orgNetworks = new Array();
if (orgNetwork1 != null) orgNetworks.push(orgNetwork1);
if (orgNetwork2 != null) orgNetworks.push(orgNetwork2);
if (orgNetwork3 != null) orgNetworks.push(orgNetwork3);
if (orgNetwork4 != null) orgNetworks.push(orgNetwork4);
if (orgNetwork5 != null) orgNetworks.push(orgNetwork5);
if (orgNetwork6 != null) orgNetworks.push(orgNetwork6);
if (orgNetwork7 != null) orgNetworks.push(orgNetwork7);
if (orgNetwork8 != null) orgNetworks.push(orgNetwork8);
if (orgNetwork9 != null) orgNetworks.push(orgNetwork9);

// deduplicate networks
i = 0;
while (i < orgNetworks.length-1) {
	j = i+1;
	while (j < orgNetworks.length) {
		if (orgNetworks[i].id == orgNetworks[j].id) {
			orgNetworks.splice(j,1);
		} else {
			j++;
		}
	}
	i++;
}

for (var i = 0; i < orgNetworks.length-1; i++) {
	section.networkConfig.add(
		com.vmware.library.vCloud.common.createVAppNetworkConfiguration(orgNetworks[i].href,orgNetworks[i].type,orgNetworks[i].configuration,orgNetworks[i].name,false,orgNetworks[i].name)
		);
}

return section;

}
}
