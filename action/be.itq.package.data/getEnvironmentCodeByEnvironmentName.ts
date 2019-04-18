/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getEnvironmentCodeByEnvironmentName(environment?: string): string {if (environment.toLowerCase() == "productie") {
	return "P";
}

return "OTA"
}
}
