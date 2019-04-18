/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore.files {
export function getAllFloppyImageFile(datastore?: VC.Datastore): Array<string> {var result = new Array();
var fileQuery = new Array(new VcFloppyImageFileQuery());
var querySpec = new VcHostDatastoreBrowserSearchSpec();
querySpec.query = fileQuery;

var task = datastore.browser.searchDatastoreSubFolders_Task("[" + datastore.name + "]", querySpec);
var searchResults = com.vmware.library.vc.basic.vim3WaitTaskEnd(task,false,5);

for (var i in searchResults) {
	for (var j in searchResults[i].file) {
		result.push(searchResults[i].folderPath + searchResults[i].file[j].path);
	}
}

return result;
}
}
