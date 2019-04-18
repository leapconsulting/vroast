/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Extension.VIM Server {
export function getHostFromVimServer(vimServer?: vCloud.VimServer): vCloud.Host {return vimServer.parent.toAdminObject().toUserObject();
}
}
