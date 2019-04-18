/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition {
export function getTagIDByName(vAPiEndpoint?: VAPI.VAPIEndpoint, tagName?: string): string {var client = vAPiEndpoint.client();
var tagging = new com_vmware_cis_tagging_tag(client);
var tagIDs = tagging.list();
for (var tagID of tagIDs) {
	tag=tagging.get(tagID);
	if (tagName==tag.name){
		return tag.id;
	}
}
return "";
}
}
