/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function uploadFileChunkMedia(targetEntityArg?: vCloud.Media, filenameArg?: string, aliasArg?: string, startByteArg?: number, endByteArg?: number): void {// WARNING: Auto generated code. Please, do not edit this code.
targetEntityArg.uploadFileChunk(filenameArg,aliasArg,startByteArg,endByteArg);
}
}
