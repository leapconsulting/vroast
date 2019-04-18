/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createGatewayIpsecVpnTunnel(descriptionArg?: string, encryptionProtocolArg?: string, errorDetailsArg?: string, ipsecVpnPeerArg?: any, isEnabledArg?: boolean, isOperationalArg?: boolean, localIdArg?: string, localIpAddressArg?: string, localSubnetArg?: Array<any>, mtuArg?: number, nameArg?: string, peerIdArg?: string, peerIpAddressArg?: string, peerSubnetArg?: Array<any>, sharedSecretArg?: string, sharedSecretEncryptedArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGatewayIpsecVpnTunnel();
var value = new VclAbstractObject();
value.setValue(ipsecVpnPeerArg);
result["ipsecVpnPeer"] = value;
result["mtu"] = mtuArg;
result["isEnabled"] = isEnabledArg;
result["peerId"] = peerIdArg;
result["peerIpAddress"] = peerIpAddressArg;
result["sharedSecret"] = sharedSecretArg;
result["encryptionProtocol"] = encryptionProtocolArg;
result["isOperational"] = isOperationalArg;
result["errorDetails"] = errorDetailsArg;
var items = result["localSubnet"];
for (var obj of localSubnetArg) {
	items.add(obj);
}
result["localIpAddress"] = localIpAddressArg;
var items = result["peerSubnet"];
for (var obj of peerSubnetArg) {
	items.add(obj);
}
result["sharedSecretEncrypted"] = sharedSecretEncryptedArg;
result["localId"] = localIdArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
