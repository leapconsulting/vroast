/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function verifyIP(ipAddress?: string): boolean {var regex = RegExp("^((192\.168\.([0-9]|[0-9][0-9]|[1][0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|[1][0-9][0-9]|2[0-4][0-9]|25[0-5]))|(172\.([1][6-9]|[2][0-9]|[3][0-1])\.([0-9]|[0-9][0-9]|[1][0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|[1][0-9][0-9]|2[0-4][0-9]|25[0-5]))|(10\.([0-9]|[0-9][0-9]|[1][0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|[1][0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|[1][0-9][0-9]|2[0-4][0-9]|25[0-5])))$");
if(!ipAddress){
	return false;
}else{
	return regex.test(ipAddress);
}

}
}
