/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function deleteRelationship(relationshipId?: string, assetId?: string): any {var freshService = nl.itq.freshservice.rest;

var path = "/cmdb/items/" + assetId + "/detach_relationship.json";

var  data = {
	"relationship_id": relationshipId
};

var response = freshService.doDeleteRequest(path,null,data,null);

return response;
}
}
