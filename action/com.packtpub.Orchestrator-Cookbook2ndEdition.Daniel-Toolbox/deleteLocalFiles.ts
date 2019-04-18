/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition.Daniel-Toolbox {
export function deleteLocalFiles(extention?: string, directory?: string): number {var dir=new File(directory);
var count=0;
myFiles=dir.list(extention);
for (var myFile of myFiles){
	var temp= new File(directory+myFile);
	temp.deleteFile();
	count=count+1;
}
return count;
}
}
