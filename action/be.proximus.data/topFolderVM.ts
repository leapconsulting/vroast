/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function topFolderVM(vm?: VC.VirtualMachine): void {                //get the parent object for vm
                var parent = vm.parent;
                //create array to hold data
                var parentNames = new Array();
                var vmPathName = "";
                //create an array of VcFolder
                while (parent instanceof VcFolder){
                                //push folder names on top of array
                                parentNames.push(parent.name);
                                parent = parent.parent;
                }
                //get length of array
                j = parentNames.length;
                //Identify top level folder
                vmPathName = parentNames[j-2];
                //Identify vm's at root of vCenter
                if (vmPathName == null)
                {
                                vmPathName = "root no folder";
                }
                //Return folder name or root no folder
                return vmPathName;

}
}
