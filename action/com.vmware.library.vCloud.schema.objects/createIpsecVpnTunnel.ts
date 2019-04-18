/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createIpsecVpnTunnel(descriptionArg?: string, encryptionProtocolArg?: string, errorDetailsArg?: string, ipsecVpnPeerArg?: any, isEnabledArg?: boolean, isOperationalArg?: boolean, mtuArg?: number, nameArg?: string, peerIpAddressArg?: string, peerNetworkAddressArg?: string, peerNetworkMaskArg?: string, sharedSecretArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclIpsecVpnTunnel();
var value = new VclAbstractObject();
value.setValue(ipsecVpnPeerArg);
result["ipsecVpnPeer"] = value;
result["mtu"] = mtuArg;
result["isEnabled"] = isEnabledArg;
result["peerIpAddress"] = peerIpAddressArg;
result["peerNetworkAddress"] = peerNetworkAddressArg;
result["peerNetworkMask"] = peerNetworkMaskArg;
result["sharedSecret"] = sharedSecretArg;
result["encryptionProtocol"] = encryptionProtocolArg;
result["isOperational"] = isOperationalArg;
result["errorDetails"] = errorDetailsArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
