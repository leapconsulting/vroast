/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition {
export function createTag(vAPiEndpoint?: VAPI.VAPIEndpoint, tagName?: string, tagCatID?: string): string {var client = vAPiEndpoint.client();
var tagging = new com_vmware_cis_tagging_tag(client);
var spec = new com_vmware_cis_tagging_tag_create__spec();
spec.category_id = tagCatID;
spec.name = tagName;
spec.description = "vRA created Tag";
var tagID = tagging.create(spec);
return tagID;
}
}
