/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition.Daniel-Toolbox {
export function getCPUSpeedFromCluster(cluster?: VC.ClusterComputeResource): number {
return cluster.host[0].hardware.cpuInfo.hz/1000/1000; //MHz

}
}
