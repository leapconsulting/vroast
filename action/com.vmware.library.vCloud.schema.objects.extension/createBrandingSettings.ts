/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createBrandingSettings(aboutCompanyUrlArg?: string, companyNameArg?: string, finalCustomThemeArg?: byte[], forgotUserNameOrPasswordURLArg?: string, loginPageCustomizationThemeArg?: byte[], previewCustomThemeArg?: byte[], signUpUrlArg?: string, supportUrlArg?: string, themeArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclBrandingSettings();
result["loginPageCustomizationTheme"] = loginPageCustomizationThemeArg;
result["companyName"] = companyNameArg;
result["theme"] = themeArg;
result["previewCustomTheme"] = previewCustomThemeArg;
result["finalCustomTheme"] = finalCustomThemeArg;
result["aboutCompanyUrl"] = aboutCompanyUrlArg;
result["supportUrl"] = supportUrlArg;
result["signUpUrl"] = signUpUrlArg;
result["forgotUserNameOrPasswordURL"] = forgotUserNameOrPasswordURLArg;
return result;
}
}
