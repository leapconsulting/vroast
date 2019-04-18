/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition.Daniel-Toolbox {
export function getAvailableCPUFromCluster(cluster?: VC.ClusterComputeResource): number {//get stuff
myClusterSummary = cluster.summary;
myClusterTotalCPU=myClusterSummary.totalCpu; //Mhz
myClusterUsedCPU=myClusterTotalCPU - (myClusterSummary.effectiveCpu); //Mhz
//get Cluster HA settings
//check if admission controll is on, if not ignore
clusterHA=cluster.configuration.dasConfig;
if (clusterHA.admissionControlEnabled) {
temp=cluster.configuration.dasConfig.admissionControlPolicy;
// adminssion control configured for %
	if (clusterHA.admissionControlPolicy instanceof VcClusterFailoverResourcesAdmissionControlPolicy){
		// availible = Total * Failover %
		return myClusterTotalCPU*temp.cpuFailoverResourcesPercent/100;
	}
// admission conrtoll configured for n+1
	if (clusterHA.admissionControlPolicy instanceof VcClusterFailoverLevelAdmissionControlPolicy) {
		// availible = Total - Failoverhosts * (Total/ count Hots)
		return myClusterTotalCPU- (temp.failoverLevel*(myClusterTotalCPU/cluster.host.length));		
	}
} else {
	// no cluster. you have everything
	return myClusterTotalCPU;	
}

}
}
