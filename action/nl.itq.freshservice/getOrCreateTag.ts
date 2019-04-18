/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function getOrCreateTag(tagName?: string): any {var freshService = nl.itq.freshservice;

var tag = freshService.getAssetByName(tagName);

if (!tag) {
	var ciType = freshService.getCiTypeByName("Tag");
	var data = { 
	    "cmdb_config_item":{
	        "impact":"1",
	        "asset_tag":tagName,
	        "name":tagName,
	        "ci_type_id":ciType.id.toString()
	    }
	}
			
	var createdTag = freshService.createAsset(data);
	tag = createdTag.item.config_item;
};

return tag;
}
}
