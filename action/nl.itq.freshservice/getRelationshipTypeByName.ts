/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getRelationshipTypeByName(relationshipTypeName?: string, forwardRelationship?: boolean): any {var freshService = nl.itq.freshservice.rest;

var path = "/cmdb/relationship_types/list.json";
var queryParameters = new Properties();

var response = freshService.doGetRequest(path,queryParameters,null,null);

if (!response || response.length <= 1) {
	throw "No Relationship Types found in FreshService";
}

var foundType = response.filter(function(relationshipType) {
	if (forwardRelationship) {
		return relationshipType.forward_relationship == relationshipTypeName;
	} else {
		return relationshipType.backward_relationship == relationshipTypeName;
	}
})[0];

if (!foundType) {
	throw "No Relationship Type found in FreshService for TypeName: " + relationshipTypeName;
}

return foundType;
}
}
