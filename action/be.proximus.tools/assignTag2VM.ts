/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.tools {
export function assignTag2VM(vApiEndpoint?: VAPI.VAPIEndpoint, VM?: VC.VirtualMachine, tagID?: string): void {var client = vApiEndpoint.client();
var tagging = new com_vmware_cis_tagging_tag__association(client);
var objectId = new com_vmware_vapi_std_dynamic__ID() ;
objectId.id = VM.id;
objectId.type = VM.vimType;
tagging.attach(tagID, objectId);
}
}
