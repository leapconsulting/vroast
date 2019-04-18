/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVmPendingQuestion(choicesArg?: Array<any>, questionArg?: string, questionIdArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVmPendingQuestion();
result["questionId"] = questionIdArg;
result["question"] = questionArg;
var items = result["choices"];
for (var obj of choicesArg) {
	items.add(obj);
}
return result;
}
}
