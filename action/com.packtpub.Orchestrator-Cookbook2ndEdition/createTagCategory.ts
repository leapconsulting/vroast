/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition {
export function createTagCategory(vAPIEndpoint?: VAPI.VAPIEndpoint, tagCatName?: string, tagCatDesciption?: string, cardinality?: string): string {var client = vAPIEndpoint.client();
var tagging = new com_vmware_cis_tagging_category(client);
var spec = new com_vmware_cis_tagging_category_create__spec();
spec.name = tagCatName;
spec.description = tagCatDesciption;
spec.cardinality = cardinality;
spec.associable_types = ["VirtualMachine"];
return tagging.create(spec);
}
}
