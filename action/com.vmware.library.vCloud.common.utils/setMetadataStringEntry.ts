/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.utils {
export function setMetadataStringEntry(object?: any, key?: string, value?: string, visibility?: string): vCloud.Task {var metadata = object.getMetadata();

var vclMetadataStringValue = new VclMetadataStringValue() ;
vclMetadataStringValue.value = value;

var vclAbstractValueObject = new VclAbstractValueObject();
vclAbstractValueObject.setValue(vclMetadataStringValue);



var vclMetadataEntry = new VclMetadataEntry();
vclMetadataEntry.key = key;
vclMetadataEntry.typedValue = vclAbstractValueObject;

if (visibility != null) {
	var vclMetadataDomainTag = new VclMetadataDomainTag() ;
	vclMetadataDomainTag.visibility = visibility;
	vclMetadataDomainTag.value = "SYSTEM";
	
	vclMetadataEntry.domain = vclMetadataDomainTag;
}
return metadata.updateTypedEntry(vclMetadataEntry);
}
}
