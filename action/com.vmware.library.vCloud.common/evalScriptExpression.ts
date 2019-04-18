/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function evalScriptExpression(expression?: string): any {if (expression == null) {
	throw "Expression is null";
}
return eval(expression);
}
}
