/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
declare module com.vmware.o11n.plugins.devops.rp.model
{
	export interface WorkflowDetail
	{

	}


}
	interface VCACDevopsRPEngineVCACDevopsRPManager
	{

		populateWorkflowDetail(workflowIds?: String[], parameters?: boolean, presentation?: boolean): com.vmware.o11n.plugins.devops.rp.model.WorkflowDetail[];
		populateWorkflowDetailForWorkflowId(workflowId?: String): com.vmware.o11n.plugins.devops.rp.model.WorkflowDetail;
	}

	declare const VCACDevopsRPEngineVCACDevopsRPManager: VCACDevopsRPEngineVCACDevopsRPManager;

    
            
