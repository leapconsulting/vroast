/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition.Daniel-Toolbox {
export function getAvailibleMemFromCluster(cluster?: VC.ClusterComputeResource): number {//get stuff
myClusterSummary = cluster.summary;
myClusterTotalMem=myClusterSummary.totalMemory/1024/1024/1024; //GB
myClusterUsedMem=myClusterTotalMem - (myClusterSummary.effectiveMemory/1024); //GB

//get Cluster HA settings
//check if admission controll is on, if not ignore
clusterHA=cluster.configuration.dasConfig;
if (clusterHA.admissionControlEnabled) {
temp=cluster.configuration.dasConfig.admissionControlPolicy;
// adminssion control configured for %
	if (clusterHA.admissionControlPolicy instanceof VcClusterFailoverResourcesAdmissionControlPolicy){
		// availible = Total * Failover %
		return myClusterTotalMem*temp.memoryFailoverResourcesPercent/100;
	}
// admission conrtoll configured for n+1
	if (clusterHA.admissionControlPolicy instanceof VcClusterFailoverLevelAdmissionControlPolicy) {
		// availible = Total - Failoverhosts * (Total/ count Hots)
		return myClusterTotalMem-(temp.failoverLevel*(myClusterTotalMem/cluster.host.length));			
	}
} else {
	// no cluster. you have everything
	return myClusterTotalMem;			
}

}
}
