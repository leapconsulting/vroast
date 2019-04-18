/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAmqpSettings(amqpExchangeArg?: string, amqpHostArg?: string, amqpPasswordArg?: string, amqpPortArg?: number, amqpPrefixArg?: string, amqpSslAcceptAllArg?: boolean, amqpUseSSLArg?: boolean, amqpUsernameArg?: string, amqpVHostArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAmqpSettings();
result["amqpPrefix"] = amqpPrefixArg;
result["amqpHost"] = amqpHostArg;
result["amqpPort"] = amqpPortArg;
result["amqpUsername"] = amqpUsernameArg;
result["amqpPassword"] = amqpPasswordArg;
result["amqpExchange"] = amqpExchangeArg;
result["amqpVHost"] = amqpVHostArg;
result["amqpUseSSL"] = amqpUseSSLArg;
result["amqpSslAcceptAll"] = amqpSslAcceptAllArg;
return result;
}
}
