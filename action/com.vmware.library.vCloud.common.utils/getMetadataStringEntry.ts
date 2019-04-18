/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.utils {
export function getMetadataStringEntry(object?: any, key?: string): string {var metadata = object.getMetadata(); 

var metadataEntries = metadata.getTypedEntries().enumerate();
var value = null;
for (var metadataEntry of metadataEntries) {
	if (metadataEntry.key == key) {
		value = metadataEntry.typedValue.getValue(new VclMetadataStringValue).value;
		break;
	}	
}

return value;


}
}
