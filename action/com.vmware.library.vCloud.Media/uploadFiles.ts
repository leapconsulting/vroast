/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Media {
export function uploadFiles(media?: vCloud.Media, paths?: Array<path>): vCloud.Media {var files = media.files.file.enumerate();
if (files.length == paths.length) {
	for (var i = 0; i < files.length; i++) {
		media.uploadFile(paths[i], files[i].name);	
	}
} else {
	throw new Error("The number of files should match the number of paths!");
}
media.updateInternalState();
return media;
}
}
