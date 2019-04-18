/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function getAzureCustomProperties(connection?: Azure.Connection): Array<CompositeType(Name.string,Value.string).endpointcustomproperties> {
return JSON.parse(connection.customProperties);


}
}
