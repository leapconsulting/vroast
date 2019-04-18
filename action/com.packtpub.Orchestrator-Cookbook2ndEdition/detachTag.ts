/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition {
export function detachTag(vAPiEndpoint?: VAPI.VAPIEndpoint, VM?: VC.VirtualMachine, detachTag?: string): void {var client = vAPiEndpoint.client();
var tagging = new com_vmware_cis_tagging_tag__association(client);
var objectId = new com_vmware_vapi_std_dynamic__ID() ;
objectId.id = VM.id;
objectId.type = VM.vimType;
tagging.detach(detachTag, objectId);
}
}
