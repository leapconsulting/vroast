/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function setSshSettingsGateway(targetEntityArg?: vCloud.Gateway, userNameArg?: string, passwordArg?: string, passwordExpiryArg?: string, loginBannerArg?: string, enableArg?: boolean): void {// WARNING: Auto generated code. Please, do not edit this code.
targetEntityArg.setSshSettings(userNameArg,passwordArg,passwordExpiryArg,loginBannerArg,enableArg);
}
}
