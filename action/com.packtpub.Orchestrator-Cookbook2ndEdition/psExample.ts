/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition {
export function psExample(host?: PowerShell.PowerShellHost, sessionId?: string, DriveName?: string): PowerShell.PowerShellRemotePSObject {var psScript = ''
psScript +='Get-PSDrive -Name ' + DriveName + '\n';
return com.vmware.library.powershell.invokeScript( host,psScript,sessionId) ;
}
}
