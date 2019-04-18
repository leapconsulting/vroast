/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVmQuestionAnswer(choiceIdArg?: number, questionIdArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVmQuestionAnswer();
result["questionId"] = questionIdArg;
result["choiceId"] = choiceIdArg;
return result;
}
}
