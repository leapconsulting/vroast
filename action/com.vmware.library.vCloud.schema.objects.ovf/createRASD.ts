/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createRASD(addressArg?: any, addressOnParentArg?: any, allocationUnitsArg?: any, automaticAllocationArg?: any, automaticDeallocationArg?: any, boundArg?: string, captionArg?: any, changeableTypeArg?: any, configurationArg?: string, configurationNameArg?: any, connectionArg?: Array<any>, consumerVisibilityArg?: any, descriptionArg?: any, elementNameArg?: any, generationArg?: any, hostResourceArg?: Array<any>, instanceIDArg?: any, limitArg?: any, mappingBehaviorArg?: any, otherResourceTypeArg?: any, parentArg?: any, poolIDArg?: any, requiredArg?: boolean, reservationArg?: any, resourceSubTypeArg?: any, resourceTypeArg?: any, virtualQuantityArg?: any, virtualQuantityUnitsArg?: any, weightArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRASD();
var items = result["connection"];
for (var obj of connectionArg) {
	items.add(obj);
}
result["limit"] = limitArg;
result["resourceType"] = resourceTypeArg;
result["reservation"] = reservationArg;
result["caption"] = captionArg;
var items = result["hostResource"];
for (var obj of hostResourceArg) {
	items.add(obj);
}
result["bound"] = boundArg;
result["required"] = requiredArg;
result["addressOnParent"] = addressOnParentArg;
result["allocationUnits"] = allocationUnitsArg;
result["automaticAllocation"] = automaticAllocationArg;
result["automaticDeallocation"] = automaticDeallocationArg;
result["consumerVisibility"] = consumerVisibilityArg;
result["mappingBehavior"] = mappingBehaviorArg;
result["otherResourceType"] = otherResourceTypeArg;
result["poolID"] = poolIDArg;
result["resourceSubType"] = resourceSubTypeArg;
result["virtualQuantityUnits"] = virtualQuantityUnitsArg;
result["virtualQuantity"] = virtualQuantityArg;
result["changeableType"] = changeableTypeArg;
result["configurationName"] = configurationNameArg;
result["elementName"] = elementNameArg;
result["instanceID"] = instanceIDArg;
result["address"] = addressArg;
result["parent"] = parentArg;
result["description"] = descriptionArg;
result["configuration"] = configurationArg;
result["weight"] = weightArg;
result["generation"] = generationArg;
return result;
}
}
