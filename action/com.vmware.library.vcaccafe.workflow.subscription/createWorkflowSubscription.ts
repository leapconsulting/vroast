/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function createWorkflowSubscription(name?: string, description?: string, eventTopicId?: string, workflowId?: string, status?: string, blocking?: boolean, reply?: boolean, priority?: number, timeout?: number, criteria?: string, version?: string): vCACCAFE.WorkflowSubscription {var workflowSubscription = new vCACCAFEWorkflowSubscription();
workflowSubscription.setName(name);
workflowSubscription.setDescription(description);
workflowSubscription.setEventTopicId(eventTopicId);
workflowSubscription.setWorkflowId(workflowId);
workflowSubscription.setStatus(vCACCAFEDesignerPublishStatus.fromValue(status));
workflowSubscription.setBlocking(blocking);
workflowSubscription.setReply(reply);
workflowSubscription.setPriority(priority);
workflowSubscription.setTimeout(timeout);
var cafeVersion = new vCACCAFEVersion();
cafeVersion.setVersion(version);
workflowSubscription.setVersion(cafeVersion);
if(criteria){
   vCACCAFEEBSHelper.setCriteriaToWorkflowSubscription(workflowSubscription, criteria);
}
return workflowSubscription;
}
}
