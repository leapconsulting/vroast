/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getMediaVDC(vDC?: vCloud.Vdc): Array<string> {var medias = vDC.getMedias();
var mediasName = new Array();
for (var media of medias){
	System.log(media.name);
	mediasName.push(media.name);
}
return mediasName;
}
}
