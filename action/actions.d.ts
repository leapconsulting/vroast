declare namespace com.vmware.library.snmp {
	function logResult(result?: Array<Properties>): void
}

declare namespace com.vmware.library.snmp {
	function createSnmpQuery(device?: SNMP.SnmpDevice, type?: string, oid?: string, name?: string): SNMP.SnmpQuery
}

declare namespace com.vmware.library.snmp {
	function processSnmpResult(snmpResult?: SNMP.SnmpResult): Array<Properties>
}

declare namespace com.vmware.library.powershell {
	function invokeCommand(host?: PowerShell.PowerShellHost, sessionId?: string): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell {
	function getParameterSetsNames(cmdlet?: PowerShell.PowerShellCmdlet): Array<string>
}

declare namespace com.vmware.library.powershell {
	function startPipeline(host?: PowerShell.PowerShellHost, sessionId?: string): void
}

declare namespace com.vmware.library.powershell {
	function endPipeline(host?: PowerShell.PowerShellHost, sessionId?: string): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell {
	function invokeScript(host?: PowerShell.PowerShellHost, script?: string, sessionId?: string): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell {
	function getParameterSetsDefinitions(cmdlet?: PowerShell.PowerShellCmdlet, paramsetName?: string): string
}

declare namespace com.vmware.library.powershell {
	function cmdletNameToActionName(cmdletName?: string): string
}

declare namespace com.vmware.library.powershell {
	function openSession(host?: PowerShell.PowerShellHost): string
}

declare namespace com.vmware.library.powershell {
	function closeSession(host?: PowerShell.PowerShellHost, sessionId?: string): void
}

declare namespace com.vmware.library.powershell.configuration {
	function getCurrentShellCodePage(host?: PowerShell.PowerShellHost): string
}

declare namespace com.vmware.library.powershell.configuration {
	function updatePowerShellHost(host?: PowerShell.PowerShellHost, name?: string, type?: string, hostName?: string, transportProtocol?: string, port?: string, username?: string, password?: SecureString, sessionMode?: string, authentication?: string, shellCodePage?: string): PowerShell.PowerShellHost
}

declare namespace com.vmware.library.powershell.configuration {
	function getSupportedShellCodePages(): Array<string>
}

declare namespace com.vmware.library.powershell.configuration {
	function validatePowerShellHost(host?: PowerShell.PowerShellHost): PowerShell.PowerShellHost
}

declare namespace com.vmware.library.powershell.configuration {
	function addPowerShellHost(name?: string, type?: string, hostName?: string, transportProtocol?: string, port?: string, username?: string, password?: SecureString, sessionMode?: string, authentication?: string, shellCodePage?: string): PowerShell.PowerShellHost
}

declare namespace com.vmware.library.powershell.configuration {
	function removePowerShellHost(host?: PowerShell.PowerShellHost): void
}

declare namespace com.vmware.library.powershell.generated {
	function addPSSnapIn(host?: PowerShell.PowerShellHost, sessionId?: string, psName?: string, psPassThru?: boolean, psVerbose?: boolean, psDebug?: boolean, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): void
}

declare namespace com.vmware.library.powershell.generated {
	function connectVIServer(host?: PowerShell.PowerShellHost, sessionId?: string, psServer?: Array<string>, psPort?: number, psProtocol?: string, psCredential?: PowerShell.PowerShellRemotePSObject, psUser?: string, psPassword?: string, psSession?: string, psNotDefault?: boolean, psSaveCredentials?: boolean, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psWarningAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psWarningVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function getCommand(host?: PowerShell.PowerShellHost, sessionId?: string, psArgumentList?: PowerShell.PowerShellRemotePSObject, psVerb?: Array<string>, psNoun?: Array<string>, psPSSnapin?: Array<string>, psTotalCount?: number, psSyntax?: boolean, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function getVM(host?: PowerShell.PowerShellHost, sessionId?: string, psName?: Array<string>, psDatastore?: PowerShell.PowerShellRemotePSObject, psLocation?: PowerShell.PowerShellRemotePSObject, psId?: Array<string>, psNoRecursion?: boolean, psServer?: PowerShell.PowerShellRemotePSObject, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function stopVM(host?: PowerShell.PowerShellHost, sessionId?: string, psVM?: PowerShell.PowerShellRemotePSObject, psKill?: boolean, psRunAsync?: boolean, psServer?: PowerShell.PowerShellRemotePSObject, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number, psWhatIf?: boolean, psConfirm?: boolean): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function startVM(host?: PowerShell.PowerShellHost, sessionId?: string, psVM?: PowerShell.PowerShellRemotePSObject, psRunAsync?: boolean, psServer?: PowerShell.PowerShellRemotePSObject, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number, psWhatIf?: boolean, psConfirm?: boolean): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function outString(host?: PowerShell.PowerShellHost, sessionId?: string, psStream?: boolean, psWidth?: number, psInputObject?: PowerShell.PowerShellRemotePSObject, psVerbose?: boolean, psDebug?: boolean, psErrorAction?: PowerShell.PowerShellRemotePSObject, psErrorVariable?: string, psOutVariable?: string, psOutBuffer?: number): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.powershell.generated {
	function getComputerOrganization(host?: PowerShell.PowerShellHost, sessionId?: string): PowerShell.PowerShellRemotePSObject
}

declare namespace com.vmware.library.vcac {
	function deleteVcoPropertiesFromBlueprint(cafeHost?: vCACCAFE.VCACHost): void
}

declare namespace com.vmware.library.vcac {
	function getUnmanagedVirtualMachines(host?: vCAC.VCACHost): Array<vCAC.VirtualMachine>
}

declare namespace com.vmware.library.vcac {
	function getSystemBlueprintByVirtualMachine(host?: vCAC.VCACHost, vm?: vCAC.VirtualMachine): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getvCOMachineMenuWorkflowNames(host?: vCAC.VCACHost): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getVirtualMachineEntity(host?: vCAC.VCACHost, virtualMachine?: vCAC.VirtualMachine): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function addUpdatePropertyFromVirtualMachineEntity(host?: vCAC.VCACHost, virtualMachineEntity?: vCAC.Entity, propertyName?: string, propertyValue?: string, propertyIsHidden?: boolean, propertyIsRuntime?: boolean, propertyIsEncrypted?: boolean, doNotUpdate?: boolean): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getVirtualMachineIdsByCompositeBlueprint(cbp?: vCACCAFE.CompositeBlueprint): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getBlueprintsForProperty(host?: vCAC.VCACHost, property?: string): Array<vCAC.Blueprint>
}

declare namespace com.vmware.library.vcac {
	function getSystemBlueprintByComponentId(host?: vCAC.VCACHost, componentType?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getAuthProperty(host?: vCAC.VCACHost, index?: number): string
}

declare namespace com.vmware.library.vcac {
	function addUpdatePropertyFromBlueprint(blueprint?: vCACCAFE.CompositeBlueprint, propertyName?: string, propertyValue?: string, propertyIsHidden?: boolean, propertyIsRuntime?: boolean, propertyIsEncrypted?: boolean, doNotUpdate?: boolean): void
}

declare namespace com.vmware.library.vcac {
	function getMenuIconsFilenames(menuIconFile?: ResourceElement): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getWFvCOMachineMenuArray(nb?: number): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getConnectionCredentialNames(vcacHost?: vCAC.VCACHost): Array<string>
}

declare namespace com.vmware.library.vcac {
	function collectPostProvisioningActions(vm?: vCAC.VirtualMachine): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getSolutionUserCertificate(host?: vCAC.VCACHost): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getVirtualMachineEntityFromId(host?: vCAC.VCACHost, virtualMachineId?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getVirtualMachineByUniqueId(host?: vCAC.VCACHost, uniqueId?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getMachineOperationByName(vcacHost?: vCAC.VCACHost, name?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getStorageDrives(selectedValues?: Array<string>): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getEnterpriseAdminGroupNames(vcacHost?: vCAC.VCACHost): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getVirtualMachinePropertiesByPropertyNameMatchingRegExp(host?: vCAC.VCACHost, propertyNameRegexp?: Regexp): Array<vCAC.Entity>
}

declare namespace com.vmware.library.vcac {
	function getPropertiesFromVirtualMachine(host?: vCAC.VCACHost, virtualMachine?: vCAC.VirtualMachine): Properties
}

declare namespace com.vmware.library.vcac {
	function getHostToStorageReservationNames(host?: vCAC.VCACHost, hostReservationName?: string): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getEnterpriseAdminGroupEntityByName(vcacHost?: vCAC.VCACHost, groupName?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getManagementEndpointNames(vcacHost?: vCAC.VCACHost): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getManagedVirtualMachines(host?: vCAC.VCACHost): Array<vCAC.VirtualMachine>
}

declare namespace com.vmware.library.vcac {
	function deleteVCACEntity(doHostId?: string, modelName?: string, entitySetName?: string, entityKeyString?: string, headers?: Properties): void
}

declare namespace com.vmware.library.vcac {
	function findVcConnectionById(id?: string): VC.SdkConnection
}

declare namespace com.vmware.library.vcac {
	function getMachineOperationDefaultDisplayName(name?: string, host?: vCAC.VCACHost): string
}

declare namespace com.vmware.library.vcac {
	function createWorkflowDefinition(host?: vCAC.VCACHost, name?: string, description?: string, xamlDefinition?: string, isRunOneOnly?: boolean, isProtected?: boolean, links?: Properties): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getWorkflowByName(workflowName?: string): Workflow
}

declare namespace com.vmware.library.vcac {
	function deleteCompositeBlueprintProperty(cbp?: vCACCAFE.CompositeBlueprint, propertyKey?: string): void
}

declare namespace com.vmware.library.vcac {
	function getManagementEndpointEntityByName(vcacHost?: vCAC.VCACHost, endpointName?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getReservationEntityByName(vcacHost?: vCAC.VCACHost, reservationName?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getResourceElements(resource?: ResourceElement): Array<ResourceElement>
}

declare namespace com.vmware.library.vcac {
	function getHostReservationToStorage(host?: vCAC.VCACHost, vm?: VC.VirtualMachine, hostReservation?: vCAC.Reservation): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getHostToStorageByNameAndReservation(host?: vCAC.VCACHost, pathName?: string, reservationName?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function isMultiMachine(host?: vCAC.VCACHost, vm?: vCAC.VirtualMachine): boolean
}

declare namespace com.vmware.library.vcac {
	function createEventDefinition(host?: vCAC.VCACHost, create?: boolean, update?: boolean, del?: boolean, links?: Properties): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getWorkflowOperationRepositoryEntity(host?: vCAC.VCACHost): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function logEntityDetails(entity?: vCAC.Entity, vcacHost?: vCAC.VCACHost): void
}

declare namespace com.vmware.library.vcac {
	function getWorkflowDefinitionsByName(host?: vCAC.VCACHost, name?: string): Array<vCAC.Entity>
}

declare namespace com.vmware.library.vcac {
	function getMachineOperationsByName(host?: vCAC.VCACHost, name?: string): Array<vCAC.Entity>
}

declare namespace com.vmware.library.vcac {
	function deleteEntity(entity?: vCAC.Entity): void
}

declare namespace com.vmware.library.vcac {
	function createRegisterWorkflowOperation(host?: vCAC.VCACHost, user?: string, identityUser?: string, templateId?: string, virtualMachineId?: string, hostReservationId?: string, hostStorageReservationId?: string): void
}

declare namespace com.vmware.library.vcac {
	function getDemConfigurations(demConfigurationResource?: ResourceElement, configurationID?: string): any
}

declare namespace com.vmware.library.vcac {
	function getConnectionCredentialEntityByName(vcacHost?: vCAC.VCACHost, credentialName?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function isVcSupportedVersion(agent?: vCAC.VCACAgent, managementURI?: string, version?: string): boolean
}

declare namespace com.vmware.library.vcac {
	function updateEntity(entity?: vCAC.Entity, inputProperties?: Properties, links?: Properties): void
}

declare namespace com.vmware.library.vcac {
	function getInterfaceTypeIds(vcacHost?: vCAC.VCACHost): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getBlueprintComponentIds(blueprint?: vCACCAFE.CompositeBlueprint): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getPropertyFromVirtualMachine(host?: vCAC.VCACHost, virtualMachine?: vCAC.VirtualMachine, propertyName?: string): any
}

declare namespace com.vmware.library.vcac {
	function getWorkflowLastToken(wf?: Workflow): WorkflowToken
}

declare namespace com.vmware.library.vcac {
	function getVCACHostAuthenticationType(host?: vCAC.VCACHost): string
}

declare namespace com.vmware.library.vcac {
	function updateVCACEntity(hostId?: string, modelName?: string, entitySetName?: string, entityIdString?: string, properties?: Properties, links?: Properties, headers?: Properties): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getEntitiesBySystemFilter(host?: vCAC.VCACHost, modelName?: string, entitySetName?: string, filter?: string, orderBy?: string, select?: string, top?: number, skip?: number, headers?: Properties): Array<vCAC.Entity>
}

declare namespace com.vmware.library.vcac {
	function createEntityEventFilter(host?: vCAC.VCACHost, expression?: string, propertyName?: string, value?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getHostReservationToStorageFromStoragePath(host?: vCAC.VCACHost, hostReservation?: vCAC.Reservation, storagePath?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getHostNamePrefixEntityByName(vcacHost?: vCAC.VCACHost, prefixName?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getReservationNames(vcacHost?: vCAC.VCACHost): Array<string>
}

declare namespace com.vmware.library.vcac {
	function deletePropertyFromVirtualMachineEntity(host?: vCAC.VCACHost, virtualMachineEntity?: vCAC.Entity, propertyName?: string): void
}

declare namespace com.vmware.library.vcac {
	function removeEntityLink(vcacHost?: vCAC.VCACHost, entity?: vCAC.Entity, linkType?: string, linkedEntityToRemove?: vCAC.Entity): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getUserNames(vcacHost?: vCAC.VCACHost): Array<string>
}

declare namespace com.vmware.library.vcac {
	function getVCACHostAuthenticationProperty(host?: vCAC.VCACHost, index?: number, newAuthentication?: string, visible?: boolean): string
}

declare namespace com.vmware.library.vcac {
	function getEnabledHosts(): Array<vCloud.Host>
}

declare namespace com.vmware.library.vcac {
	function getAvailableProvisioningGroups(host?: vCAC.VCACHost): Array<vCAC.ProvisioningGroup>
}

declare namespace com.vmware.library.vcac {
	function getEndpointExternalRefIdByVm(host?: vCAC.VCACHost, vmId?: string): string
}

declare namespace com.vmware.library.vcac {
	function getProvisioningGroupEntityByName(vcacHost?: vCAC.VCACHost, groupName?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getVirtualMachineByExternalRefId(host?: vCAC.VCACHost, uniqueId?: string): vCAC.Entity
}

declare namespace com.vmware.library.vcac {
	function getUserEntityByName(vcacHost?: vCAC.VCACHost, userName?: string): vCAC.Entity
}

declare namespace com.vmware.vra.ad {
	function listPolicies(): Array<string>
}

declare namespace com.vmware.vra.ad {
	function existsObjectByDN(host?: AD.AdHost, objectDN?: string, objectType?: string): boolean
}

declare namespace com.vmware.vra.ad {
	function getPolicyConfig(vcacHost?: vCACCAFE.VCACHost, policyId?: string): any
}

declare namespace com.vmware.vra.ad {
	function getObjectByDN(host?: AD.AdHost, objectDN?: string): any
}

declare namespace com.vmware.library.powershell.converter {
	function getConverterDefinitions(csvDefinitions?: ResourceElement): Array<any>
}

declare namespace com.vmware.library.powershell.converter {
	function convertToVcoObj(converterDefinitionsCSV?: ResourceElement, obj?: any): Array<any>
}

declare namespace com.vmware.library.powershell.converter {
	function convertToPsObj(host?: PowerShell.PowerShellHost, psSession?: string, converterDefinitionsCSV?: ResourceElement, obj?: any): Array<PowerShell.PowerShellRemotePSObject>
}

declare namespace com.vmware.library.powershell.converter {
	function isSame(converterDefinitionsCSV?: ResourceElement, objectX?: any, objectY?: any): boolean
}

declare namespace com.vmware.library.powershell.converter {
	function getConverter(converterDefinitions?: Array<any>, objToConvert?: any, listIndex?: number): any
}

declare namespace com.vmware.vra.gef {
	function updateEndpointWorkflowMappings(endpointName?: string, endpointWorkflowMappings?: Properties): Properties
}

declare namespace com.vmware.vra.gef {
	function updateIaasHost(name?: string, hostAddress?: string, authUserName?: string, authPassword?: SecureString, connectionTimeout?: number, operationTimeout?: number, workstation?: string, domain?: string, autoAccept?: boolean): vCAC.VCACHost
}

declare namespace com.vmware.vra.gef {
	function getResourceElementContent(resourcePath?: string, resourceName?: string): string
}

declare namespace com.vmware.vra.gef {
	function renameWorkflowOperation(workflowOperation?: vCAC.Entity, workflowOperationName?: string): vCAC.Entity
}

declare namespace com.vmware.vra.gef {
	function getEndpointFrameworkConfigElement(): ConfigurationElement
}

declare namespace com.vmware.vra.gef {
	function getOperationWorkflows(endpointName?: string, operationType?: string): Array<Workflow>
}

declare namespace com.vmware.vra.gef {
	function getAllEndpointWorkflowMappings(): Properties
}

declare namespace com.vmware.vra.gef {
	function getProviderWorkflow(workflowMapping?: string, workflowType?: string): Workflow
}

declare namespace com.vmware.vra.gef {
	function getAllEndpointWorkflowMappingsResourceElement(): Properties
}

declare namespace com.vmware.vra.gef {
	function commitWorkflowOperationArgument(host?: vCAC.VCACHost, workflowOperation?: vCAC.Entity, argumentName?: string, argumentValue?: string): vCAC.Entity
}

declare namespace com.vmware.vra.gef {
	function DecodeString(encodedString?: string): string
}

declare namespace com.vmware.vra.gef {
	function createTempWorkflowOperation(host?: vCAC.VCACHost, endpointName?: string, workflowOperationName?: string): vCAC.Entity
}

declare namespace com.vmware.vra.gef {
	function saveEndpointWorkflowMappings(prop?: Properties): void
}

declare namespace com.vmware.vra.gef {
	function getWorkflowId(workflowIn?: Workflow): string
}

declare namespace com.vmware.vra.gef {
	function addIaasHost(name?: string, hostAddress?: string, authUserName?: string, authPassword?: SecureString, connectionTimeout?: number, operationTimeout?: number, workstation?: string, domain?: string, autoAccept?: boolean): vCAC.VCACHost
}

declare namespace com.vmware.vra.gef {
	function removeEndpointMappings(endpointName?: string): void
}

declare namespace com.vmware.vra.gef {
	function commitResults(host?: vCAC.VCACHost, module?: Module, operationContextArgument?: string, executionStatusArgument?: any, additionalArguments?: Properties, endpointName?: string, workflowOperationName?: string): void
}

declare namespace com.vmware.basic {
	function createDirectory(directory?: Path): void
}

declare namespace com.vmware.basic {
	function getFileName(fileName?: Path): Path
}

declare namespace com.vmware.constants {
	function getDefaultCompanyName(): string
}

declare namespace com.vmware.constants {
	function getDefaultSSHKeyPairPath(): Path
}

declare namespace com.vmware.library.vc.folder {
	function getRootVmFolder(): any
}

declare namespace com.vmware.library.vc.folder {
	function renameFolderAndWait(folder?: any, newName?: string): void
}

declare namespace com.vmware.library.vc.folder {
	function getVirtualMachineByFolder(vmFolder?: VC.VmFolder): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.folder {
	function renameFolder(folder?: any, newName?: string): VC.Task
}

declare namespace com.vmware.library.vc.folder {
	function getAllVirtualMachinesByFolderIncludingSubFolders(vmFolder?: VC.VmFolder): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.folder {
	function destroyFolder(folder?: any): VC.Task
}

declare namespace com.vmware.library.vc.folder {
	function destroyFolderAndWait(folder?: any): void
}

declare namespace com.vmware.library.vc.folder {
	function createFolder(parentFolder?: any, name?: string): any
}

declare namespace com.vmware.library.vc.folder {
	function getAllVirtualMachinesByFolder(vmFolder?: VC.VmFolder): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vcac.devops.rp {
	function getPollInterval(plugin?: any): number
}

declare namespace com.vmware.library.soap {
	function showInParameter(operation?: SOAP.Operation, parameterNumber?: number): boolean
}

declare namespace com.vmware.library.soap {
	function defaultInParameterLabel(operation?: SOAP.Operation, parameterNumber?: number): string
}

declare namespace com.vmware.library.soap {
	function processOutParameters(response?: any): Properties
}

declare namespace com.vmware.library.soap {
	function getPreferredEndpointURL(host?: SOAP.Host): string
}

declare namespace com.vmware.library.soap {
	function invokeSOAPOperation(operation?: SOAP.Operation, header?: Properties, parameter?: Properties, attribute?: Properties): Properties
}

declare namespace com.vmware.library.soap {
	function getDefaultWorkflowName(operation?: SOAP.Operation): string
}

declare namespace com.vmware.library.soap {
	function showInHeader(operation?: SOAP.Operation, headerNumber?: number): boolean
}

declare namespace com.vmware.library.soap {
	function defaultInHeaderLabel(operation?: SOAP.Operation, headerNumber?: number): string
}

declare namespace com.vmware.library.soap {
	function processOutHeaders(response?: any): Properties
}

declare namespace com.vmware.library.soap {
	function generateWorkflowFromSOAPOperation(host?: SOAP.Host, operationName?: string, workflowName?: string, category?: WorkflowCategory, options?: Properties): Workflow
}

declare namespace com.vmware.library.soap.configuration {
	function getSOAPAuthentication(authenticationType?: string, sessionMode?: string, username?: string, password?: SecureString, domain?: string, workstation?: string, spn?: string): any
}

declare namespace com.vmware.library.soap.configuration {
	function updateSOAPHostWithWSDLContent(id?: string, newName?: string, wsdlContent?: string, newConnectionTimeout?: number, newRequestTimeout?: number, newAuthenticationType?: string, newSessionMode?: string, newUsername?: string, newPassword?: SecureString, newDomain?: string, newWorkstation?: string, spn?: string, proxyHost?: string, proxyPort?: number): SOAP.Host
}

declare namespace com.vmware.library.soap.configuration {
	function addSOAPHost(name?: string, wsdlUri?: string, connectionTimeout?: number, requestTimeout?: number, authenticationType?: string, sessionMode?: string, username?: string, password?: SecureString, domain?: string, workstation?: string, spn?: string, proxyHost?: string, proxyPort?: number, keyId?: string): SOAP.Host
}

declare namespace com.vmware.library.soap.configuration {
	function addSOAPHostWithWSDLContent(name?: string, wsdlContent?: string, connectionTimeout?: number, requestTimeout?: number, authenticationType?: string, sessionMode?: string, username?: string, password?: SecureString, domain?: string, workstation?: string, spn?: string, proxyHost?: string, proxyPort?: number): SOAP.Host
}

declare namespace com.vmware.library.soap.configuration {
	function removeSOAPHost(id?: string): SOAP.Host
}

declare namespace com.vmware.library.soap.configuration {
	function updateSOAPHost(id?: string, newName?: string, newWsdlUri?: string, newConnectionTimeout?: number, newRequestTimeout?: number, newAuthenticationType?: string, newSessionMode?: string, newUsername?: string, newPassword?: SecureString, newDomain?: string, newWorkstation?: string, spn?: string, proxyHost?: string, proxyPort?: number): SOAP.Host
}

declare namespace com.vmware.library.soap.configuration {
	function getSOAPHostAuthenticationProperty(host?: SOAP.Host, index?: number): string
}

declare namespace com.vmware.library.soap.configuration {
	function getSOAPHostAuthenticationType(host?: SOAP.Host): string
}

declare namespace com.vmware.library.soap.configuration {
	function updateSOAPHostWithEndpointURL(soapHost?: SOAP.Host, endpointURL?: string): SOAP.Host
}

declare namespace com.vmware.library.vcaccafe.catalog.entitlement {
	function assignResourceActionsToEntitlement(entitlement?: vCACCAFE.Entitlement, actions?: Array<vCACCAFE.CatalogResourceAction>, approvalPolicy?: vCACCAFE.ApprovalPolicy): void
}

declare namespace com.vmware.library.vcaccafe.catalog.entitlement {
	function deactivateEntitlement(entitlement?: vCACCAFE.Entitlement): void
}

declare namespace com.vmware.library.vcaccafe.catalog.entitlement {
	function assignCatalogItemsToEntitlement(entitlement?: vCACCAFE.Entitlement, catalogItems?: Array<vCACCAFE.AdminCatalogItem>, approvalPolicy?: vCACCAFE.ApprovalPolicy): void
}

declare namespace com.vmware.library.vcaccafe.catalog.entitlement {
	function unassignUsersAndGroupsFromEntitlement(entitlement?: vCACCAFE.Entitlement, users?: Array<string>, groups?: Array<string>): void
}

declare namespace com.vmware.library.vcaccafe.catalog.entitlement {
	function assignResourceExtensionsToEntitlement(entitlement?: vCACCAFE.Entitlement, extensions?: Array<vCACCAFE.CatalogResourceExtension>, approvalPolicy?: vCACCAFE.ApprovalPolicy): void
}

declare namespace com.vmware.library.vcaccafe.catalog.entitlement {
	function createEntitlementForSubtenant(host?: vCACCAFE.VCACHost, name?: string, description?: string, subtenant?: vCACCAFE.Subtenant, expirationDate?: Date, isActive?: boolean): vCACCAFE.Entitlement
}

declare namespace com.vmware.library.vcaccafe.catalog.entitlement {
	function assignUsersAndGroupsToEntitlement(entitlement?: vCACCAFE.Entitlement, users?: Array<string>, groups?: Array<string>): void
}

declare namespace com.vmware.library.vcaccafe.catalog.entitlement {
	function createEntitlement(host?: vCACCAFE.VCACHost, name?: string, description?: string, businessGroup?: vCACCAFE.BusinessGroup, expirationDate?: Date, isActive?: boolean): vCACCAFE.Entitlement
}

declare namespace com.vmware.library.vcaccafe.catalog.entitlement {
	function activateEntitlement(entitlement?: vCACCAFE.Entitlement): void
}

declare namespace com.vmware.library.vcaccafe.catalog.entitlement {
	function assignServicesToEntitlement(entitlement?: vCACCAFE.Entitlement, services?: Array<vCACCAFE.Service>, approvalPolicy?: vCACCAFE.ApprovalPolicy): void
}

declare namespace com.vmware.library.vcaccafe.businessgroup {
	function deteleCustomProperty(group?: vCACCAFE.BusinessGroup, property?: vCACCAFE.CustomProperty): vCACCAFE.BusinessGroup
}

declare namespace com.vmware.library.vcaccafe.businessgroup {
	function getMachinePrefix(group?: vCACCAFE.BusinessGroup): vCACCAFE.MachinePrefix
}

declare namespace com.vmware.library.vcaccafe.businessgroup {
	function getCustomProperties(group?: vCACCAFE.BusinessGroup, query?: string): Array<vCACCAFE.CustomProperty>
}

declare namespace com.vmware.library.vcaccafe.businessgroup {
	function getAvailableMachinePrefixes(parent?: any, query?: string): Array<vCACCAFE.MachinePrefix>
}

declare namespace com.vmware.library.vcaccafe.businessgroup {
	function updateCustomProperty(group?: vCACCAFE.BusinessGroup, property?: vCACCAFE.CustomProperty, name?: string, value?: string, isEncrypted?: boolean, isRuntime?: boolean): vCACCAFE.BusinessGroup
}

declare namespace com.vmware.library.vcaccafe.businessgroup {
	function updateBusinessGroup(group?: vCACCAFE.BusinessGroup, name?: string, description?: string, defaultMachinePrefix?: vCACCAFE.MachinePrefix, activeDirectoryContainer?: string, administrators?: Array<string>, administratorEmail?: string, support?: Array<string>, users?: Array<string>): vCACCAFE.BusinessGroup
}

declare namespace com.vmware.library.vcaccafe.businessgroup {
	function createBusinessGroup(host?: vCACCAFE.VCACHost, name?: string, description?: string, defaultMachinePrefix?: vCACCAFE.MachinePrefix, activeDirectoryContainer?: string, administrators?: Array<string>, administratorEmail?: string, support?: Array<string>, users?: Array<string>): vCACCAFE.BusinessGroup
}

declare namespace com.vmware.library.vcaccafe.businessgroup {
	function deleteBusinessGroup(group?: vCACCAFE.BusinessGroup): void
}

declare namespace com.vmware.library.vcaccafe.businessgroup {
	function addCustomProperty(group?: vCACCAFE.BusinessGroup, name?: string, value?: string, isEncrypted?: boolean, isRuntime?: boolean): vCACCAFE.BusinessGroup
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function addCustomProperty(group?: vCACCAFE.Subtenant, name?: string, value?: string, isEncrypted?: boolean, isRuntime?: boolean): vCACCAFE.Subtenant
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function getManagerEmail(businessGroup?: vCACCAFE.Subtenant): string
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function getCustomPropertyIsRuntime(group?: vCACCAFE.Subtenant, name?: string): boolean
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function updateBusinessGroup(businessGroup?: vCACCAFE.Subtenant, name?: string, description?: string, defaultMachinePrefix?: vCACCAFE.MachinePrefix, activeDirectoryContainer?: string, administrators?: Array<string>, administratorEmail?: string, support?: Array<string>, users?: Array<string>, sharedAccess?: Array<string>): vCACCAFE.Subtenant
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function getADContainer(businessGroup?: vCACCAFE.Subtenant): string
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function getCustomPropertyNames(group?: vCACCAFE.Subtenant): Array<string>
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function getCustomPropertyIsEncrypted(group?: vCACCAFE.Subtenant, name?: string): boolean
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function deleteCustomProperty(group?: vCACCAFE.Subtenant, property?: string): vCACCAFE.Subtenant
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function getUsers(businessGroup?: vCACCAFE.Subtenant): Array<string>
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function getManagers(businessGroup?: vCACCAFE.Subtenant): Array<string>
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function updateCustomProperty(group?: vCACCAFE.Subtenant, oldPropertyName?: string, newPropertyName?: string, value?: string, isEncrypted?: boolean, isRuntime?: boolean): vCACCAFE.Subtenant
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function getSharedAccessUsers(subtenant?: vCACCAFE.Subtenant): Array<string>
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function deleteBusinessGroup(businessGroup?: vCACCAFE.Subtenant): void
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function getMachinePrefix(businessGroup?: vCACCAFE.Subtenant): vCACCAFE.MachinePrefix
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function getCustomPropertyValue(group?: vCACCAFE.Subtenant, name?: string): string
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function createBusinessGroup(host?: vCACCAFE.VCACHost, name?: string, description?: string, defaultMachinePrefix?: vCACCAFE.MachinePrefix, activeDirectoryContainer?: string, administratorEmail?: string, administrators?: Array<string>, support?: Array<string>, users?: Array<string>, sharedAccess?: Array<string>): vCACCAFE.Subtenant
}

declare namespace com.vmware.library.vcaccafe.subtenant {
	function getSupport(businessGroup?: vCACCAFE.Subtenant): Array<string>
}

declare namespace com.vmware.library.vcaccafe.endpointconfiguration {
	function deleteEndpoint(endpoint?: vCACCAFE.Endpoint, host?: vCACCAFE.VCACHost): void
}

declare namespace com.vmware.library.vcaccafe.endpointconfiguration {
	function createEndpoint(endpointObject?: vCACCAFE.Endpoint, host?: vCACCAFE.VCACHost): vCACCAFE.Endpoint
}

declare namespace com.vmware.library.vcaccafe.endpointconfiguration {
	function addCustomPropertyToEndpointObject(endpoint?: vCACCAFE.Endpoint, propertyName?: string, propertyValue?: string, isRuntime?: boolean, isHidden?: boolean, isEncrypted?: boolean): vCACCAFE.Endpoint
}

declare namespace com.vmware.library.vcaccafe.endpointconfiguration {
	function associateEndpointObjects(host?: vCACCAFE.VCACHost, fromEndpoint?: vCACCAFE.Endpoint, toEndpoint?: vCACCAFE.Endpoint): vCACCAFE.Endpoint
}

declare namespace com.vmware.library.vcaccafe.endpointconfiguration {
	function createEndpointObject(endpointType?: string, name?: string, description?: string, address?: string, username?: string, password?: SecureString): vCACCAFE.Endpoint
}

declare namespace com.vmware.library.vcaccafe.endpointconfiguration {
	function createInfrastructureEndpointObject(endpointType?: string, name?: string, description?: string, address?: string, username?: string, password?: SecureString, integratedAuth?: boolean, vcoPriority?: number, organization?: string, openstackProject?: string, certificateThumbprint?: string, trustAllCertificates?: boolean): vCACCAFE.Endpoint
}

declare namespace com.vmware.library.vcaccafe.endpointconfiguration {
	function createProxyEndpointObject(host?: vCACCAFE.VCACHost, name?: string, description?: string, address?: string, port?: number, username?: string, password?: SecureString): vCACCAFE.Endpoint
}

declare namespace com.vmware.library.vcaccafe.endpointconfiguration {
	function createNSXEndpointObject(host?: vCACCAFE.VCACHost, name?: string, description?: string, address?: string, username?: string, password?: SecureString, vsphereEndpoint?: vCACCAFE.Endpoint, certificateThumbprint?: string, trustAllCertificates?: boolean): vCACCAFE.Endpoint
}

declare namespace com.vmware.library.vcaccafe.catalog.service {
	function copyService(service?: vCACCAFE.Service, name?: string): vCACCAFE.Service
}

declare namespace com.vmware.library.vcaccafe.catalog.service {
	function deactivateService(service?: vCACCAFE.Service): void
}

declare namespace com.vmware.library.vcaccafe.catalog.service {
	function deleteService(service?: vCACCAFE.Service): void
}

declare namespace com.vmware.library.vcaccafe.catalog.service {
	function createService(host?: vCACCAFE.VCACHost, name?: string, description?: string, status?: string, ownerType?: string, owner?: string, supportTeamType?: string, supportTeam?: string, hoursFrom?: Date, hoursTo?: Date, dayOfTheWeek?: string, changeWindowFrom?: Date, changeWindowTo?: Date): vCACCAFE.Service
}

declare namespace com.vmware.library.vcaccafe.catalog.service {
	function activateService(service?: vCACCAFE.Service): void
}

declare namespace com.vmware.library.vcaccafe.catalog.service {
	function assignCatalogItems(service?: vCACCAFE.Service, catalogItems?: Array<vCACCAFE.AdminCatalogItem>): void
}

declare namespace com.vmware.library.vcaccafe.approvalpolicy {
	function addApprovalLevel(approvalPolicy?: vCACCAFE.ApprovalPolicy, approvalType?: string, name?: string, description?: string, users?: Array<string>, groups?: Array<string>, approvalMode?: string): vCACCAFE.ApprovalPolicy
}

declare namespace com.vmware.library.vcaccafe.approvalpolicy {
	function getAvailableApprovalPolicyTypeNames(host?: vCACCAFE.VCACHost): Array<string>
}

declare namespace com.vmware.library.vcaccafe.approvalpolicy {
	function deactivateApprovalPolicy(approvalPolicy?: vCACCAFE.ApprovalPolicy, deleteAssignments?: boolean): void
}

declare namespace com.vmware.library.vcaccafe.approvalpolicy {
	function copyApprovalPolicy(approvalPolicy?: vCACCAFE.ApprovalPolicy, name?: string): vCACCAFE.ApprovalPolicy
}

declare namespace com.vmware.library.vcaccafe.approvalpolicy {
	function getAvailableApprovalPolicyTypes(host?: vCACCAFE.VCACHost): Array<any>
}

declare namespace com.vmware.library.vcaccafe.approvalpolicy {
	function createApprovalPolicy(host?: vCACCAFE.VCACHost, name?: string, description?: string, type?: string): vCACCAFE.ApprovalPolicy
}

declare namespace com.vmware.library.vcaccafe.approvalpolicy {
	function activateApprovalPolicy(approvalPolicy?: vCACCAFE.ApprovalPolicy): void
}

declare namespace com.vmware.library.vcaccafe.approvalpolicy {
	function getApprovalPolicyPhaseTypeIds(approvalPolicy?: vCACCAFE.ApprovalPolicy): Array<string>
}

declare namespace com.vmware.library.vcaccafe.approvalpolicy {
	function replaceApprovalPolicy(approvalPolicy?: vCACCAFE.ApprovalPolicy, replacementApprovalPolicy?: vCACCAFE.ApprovalPolicy): void
}

declare namespace com.vmware.library.vcaccafe.approvalpolicy {
	function deleteApprovalPolicy(approvalPolicy?: vCACCAFE.ApprovalPolicy): void
}

declare namespace com.vmware.library.vcaccafe.composition.blueprint {
	function unpublishCompositeBlueprint(blueprint?: vCACCAFE.CompositeBlueprint): vCACCAFE.CompositeBlueprint
}

declare namespace com.vmware.library.vcaccafe.composition.blueprint {
	function importCompositeBlueprint(host?: vCACCAFE.VCACHost, file?: MimeAttachment): string
}

declare namespace com.vmware.library.vcaccafe.composition.blueprint {
	function publishCompositeBlueprint(blueprint?: vCACCAFE.CompositeBlueprint): vCACCAFE.CompositeBlueprint
}

declare namespace com.vmware.library.vcaccafe.composition.blueprint {
	function deleteCompositeBlueprint(blueprint?: vCACCAFE.CompositeBlueprint): void
}

declare namespace com.vmware.library.vcaccafe.util {
	function checkHosts(vcoObject1?: any, vcoObject2?: any, type1?: string, type2?: string): void
}

declare namespace com.vmware.library.vcaccafe.util {
	function isActionHasParameters(ac?: Action): boolean
}

declare namespace com.vmware.library.vcaccafe.util {
	function invokeMethod(object?: any, method?: string): any
}

declare namespace com.vmware.library.vcaccafe.util {
	function compositeTypeToProperties(types?: Array<CompositeType(name.string,value.string).Entries>): Properties
}

declare namespace com.vmware.library.vcaccafe.util {
	function enumerationToStrings(enumeration?: string): Array<string>
}

declare namespace com.vmware.library.vcaccafe.util {
	function putAllToMap(targetObject?: any, targetMethodName?: string, sourceObject?: any, sourceMethodName?: string): void
}

declare namespace com.vmware.library.vcaccafe.util {
	function validateObject(object?: any, objectName?: string): void
}

declare namespace com.vmware.library.vcaccafe.util {
	function addElementToList(objectContainingList?: any, methodName?: string, elementToAdd?: any): void
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function hasPriority(subscription?: vCACCAFE.WorkflowSubscription): boolean
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function hasTimeout(subscription?: WorkflowToken): boolean
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function registerSystemWorkflowSubscription(host?: vCACCAFE.VCACHost, name?: string, description?: string, eventTopic?: vCACCAFE.EventTopic, wf?: Workflow, status?: string, blocking?: boolean, priority?: number, timeout?: number, criteria?: string, version?: string): vCACCAFE.WorkflowSubscription
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function publishWorkflowSubscription(workflowSubscription?: vCACCAFE.WorkflowSubscription): vCACCAFE.WorkflowSubscription
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function exportTenantWorkflowSubscriptions(vraHost?: vCACCAFE.VCACHost, resourceName?: string, persist?: boolean, resourceCategory?: ResourceElementCategory): MimeAttachment
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function registerTenantWorkflowSubscription(host?: vCACCAFE.VCACHost, name?: string, description?: string, eventTopic?: vCACCAFE.EventTopic, wf?: Workflow, status?: string, blocking?: boolean, priority?: number, timeout?: number, version?: string, criteria?: string): vCACCAFE.WorkflowSubscription
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function updateWorkflowSubscription(workflowSubscription?: vCACCAFE.WorkflowSubscription, name?: string, description?: string, wf?: Workflow, status?: string, criteria?: string, priority?: number, timeout?: number, version?: string): vCACCAFE.WorkflowSubscription
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function getEventTopics(host?: vCACCAFE.VCACHost): Array<vCACCAFE.EventTopic>
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function getCriteriaFromWorkflowSubscription(subscription?: vCACCAFE.WorkflowSubscription): string
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function createWorkflowSubscription(name?: string, description?: string, eventTopicId?: string, workflowId?: string, status?: string, blocking?: boolean, reply?: boolean, priority?: number, timeout?: number, criteria?: string, version?: string): vCACCAFE.WorkflowSubscription
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function exportSystemWorkflowSubscriptions(vraHost?: vCACCAFE.VCACHost, resourceName?: string, persist?: boolean, resourceCategory?: ResourceElementCategory): MimeAttachment
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function importSystemWorkflowSubscriptions(vraHost?: vCACCAFE.VCACHost, configurationFile?: MimeAttachment, overwriteExisting?: boolean): void
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function unpublishWorkflowSubscription(workflowSubscription?: vCACCAFE.WorkflowSubscription): vCACCAFE.WorkflowSubscription
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function deleteWorkflowSubscription(workflowSubscription?: vCACCAFE.WorkflowSubscription): void
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function getVersionAsString(subscription?: vCACCAFE.WorkflowSubscription): string
}

declare namespace com.vmware.library.vcaccafe.workflow.subscription {
	function importTenantWorkflowSubscriptions(vraHost?: vCACCAFE.VCACHost, configurationFile?: MimeAttachment, overwriteExisting?: boolean): void
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function createTenant(host?: vCACCAFE.VCACHost, name?: string, description?: string, urlName?: string, contactEmail?: string): vCACCAFE.Tenant
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function addHostIdentityStore(host?: vCACCAFE.VCACHost, name?: string, type?: string, url?: string, domain?: string, userNameDn?: string, password?: SecureString, subdomains?: Array<string>, groupBaseSearchDns?: Array<string>, userBaseSearchDns?: Array<string>): vCACCAFE.IdentityStore
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function deleteIdentityStoreFromHost(host?: vCACCAFE.VCACHost, store?: vCACCAFE.IdentityStore): void
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function validatePrincipals(host?: vCACCAFE.VCACHost, tenant?: string, principals?: Array<string>): Array<string>
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function updateIdentityStore(tenant?: vCACCAFE.Tenant, store?: vCACCAFE.IdentityStore, name?: string, userNameDn?: string, password?: SecureString, groupBaseSearchDn?: string, userBaseSearchDn?: string): vCACCAFE.IdentityStore
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function addAdministrators(tenant?: vCACCAFE.Tenant, tenantAdministrators?: Array<string>, infrastructureAdministrators?: Array<string>): void
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function getIdentityStoresFromHost(host?: vCACCAFE.VCACHost, query?: string): Array<vCACCAFE.IdentityStore>
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function updateTenantIdentityStore(tenant?: vCACCAFE.Tenant, store?: vCACCAFE.IdentityStore, name?: string, userNameDn?: string, password?: SecureString, subdomains?: Array<string>, groupBaseSearchDns?: Array<string>, userBaseSearchDns?: Array<string>): vCACCAFE.IdentityStore
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function getIdentityStores(tenant?: vCACCAFE.Tenant, query?: string): Array<vCACCAFE.IdentityStore>
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function updateIdentityStoreFromHost(host?: vCACCAFE.VCACHost, store?: vCACCAFE.IdentityStore, name?: string, userNameDn?: string, password?: SecureString, groupBaseSearchDn?: string, userBaseSearchDn?: string): vCACCAFE.IdentityStore
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function updateTenant(tenant?: vCACCAFE.Tenant, name?: string, description?: string, contactEmail?: string): vCACCAFE.Tenant
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function deleteIdentityStore(tenant?: vCACCAFE.Tenant, store?: vCACCAFE.IdentityStore): void
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function addIdentityStoreFromHost(host?: vCACCAFE.VCACHost, name?: string, type?: string, url?: string, domain?: string, alias?: string, userNameDn?: string, password?: SecureString, groupBaseSearchDn?: string, userBaseSearchDn?: string): vCACCAFE.IdentityStore
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function addTenantIdentityStore(tenant?: vCACCAFE.Tenant, name?: string, type?: string, url?: string, domain?: string, userNameDn?: string, password?: SecureString, subdomains?: Array<string>, groupBaseSearchDns?: Array<string>, userBaseSearchDns?: Array<string>): vCACCAFE.IdentityStore
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function updateHostIdentityStore(host?: vCACCAFE.VCACHost, store?: vCACCAFE.IdentityStore, name?: string, userNameDn?: string, password?: SecureString, subdomains?: Array<string>, groupBaseSearchDns?: Array<string>, userBaseSearchDns?: Array<string>): vCACCAFE.IdentityStore
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function addIdentityStore(tenant?: vCACCAFE.Tenant, name?: string, type?: string, url?: string, domain?: string, alias?: string, userNameDn?: string, password?: SecureString, groupBaseSearchDn?: string, userBaseSearchDn?: string): vCACCAFE.IdentityStore
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function deleteTenant(tenant?: vCACCAFE.Tenant): void
}

declare namespace com.vmware.library.vcaccafe.tenant {
	function removeAdministrators(tenant?: vCACCAFE.Tenant, tenantAdministrators?: Array<string>, infrastructureAdministrators?: Array<string>): void
}

declare namespace com.vmware.library.vcaccafe.propertygroup {
	function createPropertyGroup(host?: vCACCAFE.VCACHost, name?: string, id?: string, description?: string, allTenantsVisibility?: boolean): vCACCAFE.PropertyGroup
}

declare namespace com.vmware.library.vcaccafe.propertygroup {
	function removePropertiesFromGroup(group?: vCACCAFE.PropertyGroup, propertiesToDelete?: Array<string>): vCACCAFE.PropertyGroup
}

declare namespace com.vmware.library.vcaccafe.propertygroup {
	function createOrUpdatePropertyInGroup(group?: vCACCAFE.PropertyGroup, value?: string, encrypted?: boolean, visibility?: boolean, mandatory?: boolean, name?: string): vCACCAFE.PropertyGroup
}

declare namespace com.vmware.library.vcaccafe.propertygroup {
	function getPropertiesFormGroup(group?: vCACCAFE.PropertyGroup): Array<string>
}

declare namespace com.vmware.library.vcaccafe.propertygroup {
	function getStringFacetFromPropertyFromGroup(group?: vCACCAFE.PropertyGroup, propertyName?: string, facetName?: string): string
}

declare namespace com.vmware.library.vcaccafe.propertygroup {
	function deletePropertyGroup(group?: vCACCAFE.PropertyGroup): void
}

declare namespace com.vmware.library.vcaccafe.propertygroup {
	function getBooleanFacetFromPropertyFromGroup(group?: vCACCAFE.PropertyGroup, propertyName?: string, facetName?: string): boolean
}

declare namespace com.vmware.library.vcaccafe.propertygroup {
	function updatePropertyGroup(group?: vCACCAFE.PropertyGroup, name?: string, description?: string): vCACCAFE.PropertyGroup
}

declare namespace com.vmware.library.vcaccafe.catalog.catalogitem {
	function deactivateCatalogItem(catalogItem?: vCACCAFE.AdminCatalogItem): void
}

declare namespace com.vmware.library.vcaccafe.catalog.catalogitem {
	function activateCatalogItem(catalogItem?: vCACCAFE.AdminCatalogItem): void
}

declare namespace com.vmware.library.vcaccafe.catalog.catalogitem {
	function assignCatalogItemToService(catalogItem?: vCACCAFE.AdminCatalogItem, service?: vCACCAFE.Service): void
}

declare namespace com.vmware.library.vcaccafe.content {
	function exportContent(sourceHost?: vCACCAFE.VCACHost, resourceElementCategory?: ResourceElementCategory, name?: string): MimeAttachment
}

declare namespace com.vmware.library.vcaccafe.content {
	function validateContent(content?: MimeAttachment, host?: vCACCAFE.VCACHost): string
}

declare namespace com.vmware.library.vcaccafe.content {
	function importContent(host?: vCACCAFE.VCACHost, contentFile?: MimeAttachment): void
}

declare namespace com.vmware.library.vcaccafe.content {
	function transferContent(sourceHost?: vCACCAFE.VCACHost, targetHost?: vCACCAFE.VCACHost): void
}

declare namespace com.vmware.library.vcaccafe.request {
	function getRequestFormInputsForResourceAction(item?: vCACCAFE.CatalogItem): Array<string>
}

declare namespace com.vmware.library.vcaccafe.request {
	function requestCatalogItemOnBehalfOf(item?: vCACCAFE.CatalogItem, inputs?: Properties, user?: string): vCACCAFE.CatalogItemRequest
}

declare namespace com.vmware.library.vcaccafe.request {
	function completeWorkItem(item?: vCACCAFE.WorkItem, itemAction?: vCACCAFE.WorkItemAction, inputs?: Properties): void
}

declare namespace com.vmware.library.vcaccafe.request {
	function requestCatalogItem(item?: vCACCAFE.CatalogItem, inputs?: Properties): vCACCAFE.CatalogItemRequest
}

declare namespace com.vmware.library.vcaccafe.request {
	function getAvailableWorkItemActions(item?: vCACCAFE.WorkItem): Array<vCACCAFE.WorkItemAction>
}

declare namespace com.vmware.library.vcaccafe.request {
	function requestResourceActionOnBehalfOf(operation?: vCACCAFE.ConsumerResourceOperation, inputs?: Properties, user?: string): vCACCAFE.ResourceActionRequest
}

declare namespace com.vmware.library.vcaccafe.request {
	function getRequestFormInputsForCatalogItem(item?: vCACCAFE.CatalogItem): Array<string>
}

declare namespace com.vmware.library.vcaccafe.request {
	function requestResourceActionWithRequestTemplate(operation?: vCACCAFE.ConsumerResourceOperation, request?: any): vCACCAFE.ResourceActionRequest
}

declare namespace com.vmware.library.vcaccafe.request {
	function requestCatalogItemWithProvisioningRequest(catalogItem?: vCACCAFE.CatalogItem, provisioningRequest?: any): vCACCAFE.CatalogItemRequest
}

declare namespace com.vmware.library.vcaccafe.request {
	function cancelWorkItem(item?: vCACCAFE.WorkItem): void
}

declare namespace com.vmware.library.vcaccafe.request {
	function requestResourceAction(operation?: vCACCAFE.ConsumerResourceOperation, inputs?: Properties): vCACCAFE.ResourceActionRequest
}

declare namespace com.vmware.library.vcaccafe.request {
	function getAvailableResourceActions(resource?: vCACCAFE.CatalogResource, query?: string): Array<vCACCAFE.ConsumerResourceOperation>
}

declare namespace com.vmware.library.vcaccafe.asd.resourcemapping {
	function createResourceMapping(host?: vCACCAFE.VCACHost, name?: string, description?: string, catalogResourceType?: string, orchestratorType?: string, mappingWorkflowId?: string, mappingScriptAction?: string): vCACCAFE.CustomResource
}

declare namespace com.vmware.library.vcaccafe.asd.resourcemapping {
	function getCatalogResourceTypeNames(host?: vCACCAFE.VCACHost): Array<string>
}

declare namespace com.vmware.library.vcaccafe.asd.resourcemapping {
	function setTargetCriteria(resourceMapping?: vCACCAFE.CustomResource, targetCriteria?: string): vCACCAFE.CustomResource
}

declare namespace com.vmware.library.vcaccafe.asd.resourcemapping {
	function getCatalogResourceTypes(host?: vCACCAFE.VCACHost): Array<any>
}

declare namespace com.vmware.library.vcaccafe.asd.customresources {
	function deleteCustomResource(customResource?: vCACCAFE.CustomResource): void
}

declare namespace com.vmware.library.vcaccafe.asd.customresources {
	function createCustomResourceFromInventoryType(host?: vCACCAFE.VCACHost, type?: string, name?: string, description?: string): vCACCAFE.CustomResource
}

declare namespace com.vmware.library.vcaccafe.asd.customresources {
	function getAvailableInventoryTypeNames(host?: vCACCAFE.VCACHost): Array<string>
}

declare namespace com.vmware.library.vcaccafe.asd.customresources {
	function getAvailableInventoryTypes(host?: vCACCAFE.VCACHost): Array<any>
}

declare namespace com.vmware.library.vcaccafe.asd.blueprint {
	function cloneServiceBlueprint(serviceBlueprint?: vCACCAFE.ServiceBlueprint): vCACCAFE.ServiceBlueprint
}

declare namespace com.vmware.library.vcaccafe.asd.blueprint {
	function publishServiceBlueprint(blueprint?: vCACCAFE.ServiceBlueprint): void
}

declare namespace com.vmware.library.vcaccafe.asd.blueprint {
	function createServiceBlueprintFromWorkflow(host?: vCACCAFE.VCACHost, name?: string, description?: string, workflowId?: string, resourceType?: vCACCAFE.CustomResource, outputParameterName?: string): vCACCAFE.ServiceBlueprint
}

declare namespace com.vmware.library.vcaccafe.asd.blueprint {
	function deleteServiceBlueprint(blueprint?: vCACCAFE.ServiceBlueprint): void
}

declare namespace com.vmware.library.vcaccafe.asd.blueprint {
	function unpublishServiceBlueprint(blueprint?: vCACCAFE.ServiceBlueprint): void
}

declare namespace com.vmware.library.vcaccafe.propertydefinition {
	function createPropertyDefinition(host?: vCACCAFE.VCACHost, allTenantsVisibility?: boolean, definitionName?: string, description?: string, label?: string, dataTypeId?: string, orderIndex?: number, displayAdviceId?: string, multiValued?: boolean, mandatory?: boolean, encrypted?: boolean, staticValues?: boolean, predefinedValues?: Array<CompositeType(name.string,value.string).Entries>, customAllowed?: boolean, externalAction?: Action, actionInputs?: Array<CompositeType(inputName.string,bind.boolean,value.string).actionInputs>): vCACCAFE.PropertyDefinition
}

declare namespace com.vmware.library.vcaccafe.propertydefinition {
	function deletePropertyDefinition(propertyDefinition?: vCACCAFE.PropertyDefinition): void
}

declare namespace com.vmware.library.workflow {
	function getAllWorkflows(): Array<Workflow>
}

declare namespace com.vmware.library.workflow {
	function waitAllWorkflowComplete(tokens?: Array<WorkflowToken>): Array<Properties>
}

declare namespace com.vmware.library.workflow {
	function getWorkflowById(workflowId?: string): Workflow
}

declare namespace com.vmware.library.workflow {
	function waitForCompletion(wfTokens?: Array<WorkflowToken>): Array<WorkflowToken>
}

declare namespace com.vmware.library.vcaccafe.asd.resourceaction {
	function unpublishResourceAction(resourceAction?: vCACCAFE.ResourceAction): void
}

declare namespace com.vmware.library.vcaccafe.asd.resourceaction {
	function createResourceActionFromWorkflow(host?: vCACCAFE.VCACHost, name?: string, description?: string, workflowId?: string, resourceType?: vCACCAFE.CustomResource, parameterName?: string): vCACCAFE.ResourceAction
}

declare namespace com.vmware.library.vcaccafe.asd.resourceaction {
	function deleteResourceOperation(resourceAction?: vCACCAFE.ResourceAction): void
}

declare namespace com.vmware.library.vcaccafe.asd.resourceaction {
	function publishResourceAction(resourceAction?: vCACCAFE.ResourceAction): void
}

declare namespace com.vmware.library.vcaccafe.asd.resourceaction {
	function cloneResourceAction(resourceAction?: vCACCAFE.ResourceAction): vCACCAFE.ResourceAction
}

declare namespace com.vmware.library.vcaccafe.infrastructure {
	function getInfrastructureUrl(host?: vCACCAFE.VCACHost): string
}

declare namespace com.vmware.library.vcaccafe.asd.configuration {
	function updateOrchestratorServerConfiguration(host?: vCACCAFE.VCACHost, useDefault?: boolean, name?: string, description?: string, orchestratorHost?: string, port?: string, useSSO?: boolean, username?: string, password?: SecureString): void
}

declare namespace com.vmware.library.vcaccafe.asd.configuration {
	function validateOrchestratorServerConfiguration(host?: vCACCAFE.VCACHost, useDefault?: boolean, name?: string, description?: string, orchestratorHost?: string, port?: string, useSSO?: boolean, username?: string, password?: SecureString): boolean
}

declare namespace com.vmware.library.vcaccafe {
	function getAllServicesEndpoints(): Array<string>
}

declare namespace com.vmware.library.vcaccafe {
	function getAllTenantsUrlNames(host?: vCACCAFE.VCACHost): Array<string>
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function getNamespaceByName(name?: string): DynamicTypes.DynamicNamespaceDefinition
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function getAllNamespacesFromConfig(file?: MimeAttachment): Array<string>
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function getPropertiesOfType(type?: DynamicTypes.DynamicTypeDefinition): Array<string>
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function getAllNamespaceDefinitions(): Array<DynamicTypes.DynamicNamespaceDefinition>
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function validateConfigurationPackage(file?: MimeAttachment): boolean
}

declare namespace com.vmware.o11n.plugin.dynamictypes.configuration {
	function getResourceElementByName(name?: string): ResourceElement
}

declare namespace com.vmware.library.ssh {
	function registerVSOonHost(host?: string, username?: string, password?: SecureString, localPath?: Path, remotePath?: string): void
}

declare namespace com.vmware.library.azure {
	function createOrUpdateAvailabilitySet(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, asName?: string): Azure.AvailabilitySet
}

declare namespace com.vmware.library.azure {
	function createOrUpdateNetworkInterface(connection?: Azure.Connection, location?: Azure.Location, virtualNetwork?: Azure.VirtualNetwork, publicIp?: Azure.PublicIpAddress, resourceGroup?: Azure.ResourceGroupExtended, nicName?: string, ipConfigName?: string): Azure.NetworkInterface
}

declare namespace com.vmware.library.azure {
	function getAzureCustomProperties(connection?: Azure.Connection): Array<CompositeType(Name.string,Value.string).endpointcustomproperties>
}

declare namespace com.vmware.library.azure {
	function createOrUpdateRoute(connection?: Azure.Connection, resourceGroup?: Azure.ResourceGroupExtended, routeTable?: Azure.RouteTable, routeName?: string, addressPrefix?: string, nextHopType?: string): Azure.Route
}

declare namespace com.vmware.library.azure {
	function createOrUpdateDatabase(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, server?: Azure.Server, databaseName?: string): Azure.Database
}

declare namespace com.vmware.library.azure {
	function createOrUpdateVirtualNetwork(connection?: Azure.Connection, resourceGroup?: Azure.ResourceGroupExtended, location?: Azure.Location, virtualNetworkName?: string, subnetName?: string, addressPrefix?: string, dnsServer?: string, subnetPrefix?: string): Azure.VirtualNetwork
}

declare namespace com.vmware.library.azure {
	function createOrUpdateResourceGroup(connection?: Azure.Connection, location?: Azure.Location, groupName?: string): Azure.ResourceGroupExtended
}

declare namespace com.vmware.library.azure {
	function createOrUpdateSubnet(connection?: Azure.Connection, resourceGroup?: Azure.ResourceGroupExtended, virtualNetwork?: Azure.VirtualNetwork, subnetName?: string, addressPrefix?: string): Azure.Subnet
}

declare namespace com.vmware.library.azure {
	function createPublicIpAddress(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, publicIpName?: string): Azure.PublicIpAddress
}

declare namespace com.vmware.library.azure {
	function createOrUpdateServer(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, serverName?: string, adminLogin?: string, adminLoginPassword?: string): Azure.Server
}

declare namespace com.vmware.library.azure {
	function createStorageAccount(connection?: Azure.Connection, resourceGroup?: Azure.ResourceGroupExtended, location?: Azure.Location, storageAccountName?: string): Azure.StorageAccount
}

declare namespace com.vmware.library.azure {
	function createOrUpdateRouteTable(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, routeTableName?: string): Azure.RouteTable
}

declare namespace com.vmware.library.azure {
	function createOrUpdateNetworkSecurityGroup(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, networkSecurityGroupName?: string): Azure.NetworkSecurityGroup
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getComputerFromContainer(container?: any, computerName?: string): AD.ComputerAD
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getPluginOptionAsNumber(name?: string): number
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function setComputerEnable(computer?: AD.ComputerAD, enable?: boolean): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getDefaultAdServer(): AD.AdHost
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createUser(accountName?: string, domainName?: string, displayName?: string, container?: any): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function destroyElementRecursive(element?: any, deleteSubtree?: boolean): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function destroyElement(element?: any): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createOrganizationalUnit(ouName?: string, container?: AD.OrganizationalUnit): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createComputer(parent?: any, computerName?: string, domainName?: string): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function setChangePasswordAtNextLogon(user?: AD.User, changePasswordAtNextLogon?: boolean): AD.User
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createUserWithDetails(accountName?: string, password?: SecureString, confirmPassword?: SecureString, domainName?: string, displayName?: string, container?: any, firstName?: string, lastName?: string): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getLdapLoadBalancingModes(): Array<string>
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getUsergroupFromContainer(container?: any, usergroupName?: string): AD.UserGroup
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getAlternativeHosts(adHost?: AD.AdHost): Array<string>
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getOrganizationUnitFromOrganizationUnit(container?: AD.OrganizationalUnit, ouName?: string): AD.OrganizationalUnit
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createUserGroup(groupName?: string, container?: any): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getUserFromContainer(container?: any, accountName?: string): AD.User
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function setUserPassword(user?: AD.User, password?: SecureString): AD.User
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function setUserEnable(user?: AD.User, enable?: boolean): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function createUserWithPassword(accountName?: string, password?: SecureString, confirmPassword?: SecureString, domainName?: string, displayName?: string, container?: any): void
}

declare namespace com.vmware.library.microsoft.activeDirectory {
	function getLoadBalancingMode(adServer?: AD.AdHost): string
}

declare namespace com.vmware.library.mail {
	function validateEmailAddressList(list?: Array<string>): string
}

declare namespace com.vmware.library.mail {
	function getDefaultPort(protocol?: string): number
}

declare namespace com.vmware.library.vc.vm.tools {
	function upgradeToolsAtNextReboot(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm.tools {
	function vim3WaitForPrincipalIP(vm?: VC.VirtualMachine, timeout?: number, interval?: number): string
}

declare namespace com.vmware.library.vc.vm.tools {
	function updateToolsOnWindowsVirtualMachineWithoutRebooting(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm.tools {
	function vim3WaitDnsNameInTools(vm?: VC.VirtualMachine, pollingRate?: number, dnsNameToWait?: string, timeout?: number, addNumberToName?: boolean): void
}

declare namespace com.vmware.library.vc.vm.tools {
	function vim3WaitToolsStarted(vm?: VC.VirtualMachine, pollingRate?: number, timeout?: number): void
}

declare namespace com.vmware.library.vc.basic {
	function vim3WaitTaskEnd(task?: VC.Task, progress?: boolean, pollRate?: number): any
}

declare namespace com.vmware.library.vc.basic {
	function getVimHostForVimObject(object?: any): VC.SdkConnection
}

declare namespace com.vmware.library.vc.basic {
	function WaitTaskEndOrVMQuestion(task?: VC.Task, progress?: boolean, pollRate?: number, vm?: VC.VirtualMachine): any
}

declare namespace com.vmware.library.vc.basic {
	function waitForCompletionForBatchWorkflow(wfTokens?: Array<WorkflowToken>): Array<WorkflowToken>
}

declare namespace com.vmware.library.vc.basic {
	function cloneVM(vm?: VC.VirtualMachine, vmFolder?: VC.VmFolder, name?: string, powerOn?: boolean, template?: boolean, datastore?: VC.Datastore, host?: VC.HostSystem, pool?: VC.ResourcePool, thinProvisioned?: boolean): VC.Task
}

declare namespace com.vmware.library.vc.basic {
	function getDatacenterForVimObject(object?: any): VC.Datacenter
}

declare namespace com.vmware.library.vco.configuration {
	function getRemoteServerUser(server?: VCO.RemoteServer): string
}

declare namespace com.vmware.library.vco.configuration {
	function getRemoteServerPass(server?: VCO.RemoteServer): SecureString
}

declare namespace com.vmware.library.vco.configuration {
	function isSsoEnabled(server?: VCO.RemoteServer): boolean
}

declare namespace com.vmware.library.vco.configuration {
	function isSharedConnection(server?: VCO.RemoteServer): boolean
}

declare namespace com.vmware.library.vco {
	function vcoCancelTask(token?: VCO.RemoteWorkflowToken): void
}

declare namespace com.vmware.library.vco {
	function vcoWaitTaskEnd(token?: VCO.RemoteWorkflowToken, pollRate?: number): string
}

declare namespace com.vmware.library.vco {
	function vcoCancelTaskAndWait(token?: VCO.RemoteWorkflowToken, pollRate?: number): void
}

declare namespace com.vmware.library.policy {
	function startPolicy(thePolicy?: Policy): void
}

declare namespace com.vmware.library.policy {
	function stopPolicy(thePolicy?: Policy, reason?: string): void
}

declare namespace com.vmware.library.policy {
	function setPolicyCredential(thePolicy?: Policy, newCredential?: Credential): void
}

declare namespace com.vmware.library.authorization {
	function getOrCreateAuthorizationForUser(authName?: string, user?: LdapUser, description?: string): AuthorizationElement
}

declare namespace com.vmware.library.authorization {
	function getOrCreateAuthorizationForGroup(authName?: string, group?: LdapGroup, description?: string): AuthorizationElement
}

declare namespace com.vmware.library.authorization {
	function removeAuthorizationRelationToObjectForGroup(authName?: string, ldapGroup?: LdapGroup, object?: any, relation?: string): void
}

declare namespace com.vmware.library.authorization {
	function addObjectToAuthorizationForGroup(authName?: string, description?: string, ldapGroup?: LdapGroup, object?: any, relation?: string): AuthorizationElement
}

declare namespace com.vmware.library.authorization {
	function removeAuthorizationRelationToObjectForUser(authName?: string, ldapUser?: LdapUser, object?: any, relation?: string): void
}

declare namespace com.vmware.library.authorization {
	function changeGroupAuthorization(authorizationElement?: AuthorizationElement, newLdapGroup?: LdapGroup): void
}

declare namespace com.vmware.library.authorization {
	function changeUserAuthorization(authorizationElement?: AuthorizationElement, newLdapUser?: LdapUser): void
}

declare namespace com.vmware.library.authorization {
	function addObjectToAuthorizationForUser(authName?: string, description?: string, ldapUser?: LdapUser, object?: any, relation?: string): AuthorizationElement
}

declare namespace com.vmware.util {
	function exportAllConfigurationElementsToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllPolicyTemplatesToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllTasksToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllAuthorizationElementsToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllPoliciesToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllWorkflowsToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllResourceElementsToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function exportAllActionsToCsv(csvPathAndName?: Path): void
}

declare namespace com.vmware.util {
	function callActions(parameter?: any, actions?: Array<Action>, additionalParams?: Array<any>): any
}

declare namespace com.vmware.util {
	function isActionParameterInstanceOfType(element?: Action, type?: string): boolean
}

declare namespace com.vmware.util {
	function isWorkflowParameterInstanceOfType(element?: Workflow, type?: string): boolean
}

declare namespace com.vmware.library.customProperties {
	function isPluginType(object?: any): boolean
}

declare namespace com.vmware.library.customProperties {
	function setCustomProperty(object?: any, key?: string, value?: any): void
}

declare namespace com.vmware.library.customProperties {
	function getCustomProperty(object?: any, key?: string): any
}

declare namespace com.vmware.library.ldap {
	function getCurrentLdapUser(): LdapUser
}

declare namespace com.vmware.library.tasks {
	function createRecurrentTask(workflowToCall?: Workflow, startDate?: Date, endDate?: Date, recurrencePattern?: string, recurrenceCycle?: string, workflowArguments?: Properties, username?: string, password?: string): Task
}

declare namespace com.vmware.library.tasks {
	function createTask(workflowToCall?: Workflow, date?: Date, workflowArguments?: Properties): Task
}

declare namespace com.vmware.library.date {
	function addHoursToDate(date?: Date, hours?: number): Date
}

declare namespace com.vmware.library.configurations {
	function removeObjectInConfigurationElement(configurationElement?: ConfigurationElement, configurationElementAttributeName?: string, element?: any): boolean
}

declare namespace com.vmware.library.configurations {
	function addResourceElementInConfigurationElement(resourceElement?: ResourceElement, configurationElement?: ConfigurationElement, configurationElementAttributeName?: string): boolean
}

declare namespace com.vmware.library.configurations {
	function removeResourceElementInConfigurationElement(resourceElement?: ResourceElement, configurationElement?: ConfigurationElement, configurationElementAttributeName?: string): boolean
}

declare namespace com.vmware.library.configurations {
	function addObjectInConfigurationElement(configurationElement?: ConfigurationElement, configurationElementAttributeName?: string, element?: any): boolean
}

declare namespace com.vmware.library.configurations {
	function getConfigurationAttributeDescriptionList(confElement?: ConfigurationElement): Array<string>
}

declare namespace com.vmware.library.configurations {
	function getObjectFromConfigurationElementWithKey(key?: string, configEl?: ConfigurationElement): any
}

declare namespace com.vmware.library.vc.storage {
	function listDatastores(host?: VC.HostSystem): Array<string>
}

declare namespace com.vmware.library.vc.storage {
	function listAvailableDisksForVMFS(host?: VC.HostSystem): Array<string>
}

declare namespace com.vmware.library.vc.storage {
	function computeDiskCapacity(host?: VC.HostSystem, diskName?: string): number
}

declare namespace com.vmware.library.vc.storage {
	function isAPICompatible(host?: VC.HostSystem, requiredVersion?: string): boolean
}

declare namespace com.vmware.library.vc.storage {
	function findiSCSIDevice(host?: VC.HostSystem): string
}

declare namespace com.vmware.library.vc.storage {
	function rescanAll(host?: VC.HostSystem): void
}

declare namespace com.vmware.library.vc.storage {
	function listiSCSITargets(host?: VC.HostSystem, type?: string): Array<string>
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.remote {
	function getVirtualCdromRemotePassthroughBackingInfo(deviceName?: string, exclusive?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.remote {
	function getVirtualDeviceRemoteDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.remote {
	function getVirtualFloppyRemoteDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.networking {
	function getDvPortgroupPvlanIds(dvPortgroup?: VC.DistributedVirtualPortgroup): Array<number>
}

declare namespace com.vmware.library.vc.networking {
	function getDvPortgroupUplinkPortNames(dvPortgroup?: VC.DistributedVirtualPortgroup): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getDvSwitchUplinkPortNames(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getAllvSwitches(host?: VC.HostSystem): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getDvSwitchSecondaryPvlanIds(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<number>
}

declare namespace com.vmware.library.vc.networking {
	function getHostSystemVmnics(hostSystem?: VC.HostSystem): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getDvSwitchConfigProperty(dvSwitch?: VC.VmwareDistributedVirtualSwitch, property?: string): any
}

declare namespace com.vmware.library.vc.networking {
	function getPrivateVlanTypeForIds(dvSwitch?: VC.VmwareDistributedVirtualSwitch, primaryVlanId?: number, secondaryVlanId?: number): string
}

declare namespace com.vmware.library.vc.networking {
	function getUplinkPortGroupsForSwitch(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<any>
}

declare namespace com.vmware.library.vc.networking {
	function connectVmNicNumberToVirtualDistributedPortgroup(vm?: VC.VirtualMachine, dvPortgroup?: VC.DistributedVirtualPortgroup, nicNumber?: number): VC.Task
}

declare namespace com.vmware.library.vc.networking {
	function getvSwitchProperty(host?: VC.HostSystem, name?: string, propName?: string): string
}

declare namespace com.vmware.library.vc.networking {
	function getDvPortgroupConfigProperty(dvPortGroup?: VC.DistributedVirtualPortgroup, property?: string): any
}

declare namespace com.vmware.library.vc.networking {
	function getPrivateVlanTypeForId(dvSwitch?: VC.DistributedVirtualPortgroup, vlanId?: number): string
}

declare namespace com.vmware.library.vc.networking {
	function getDvSwitchPvlanIds(dvSwitch?: VC.VmwareDistributedVirtualSwitch): Array<number>
}

declare namespace com.vmware.library.vc.networking {
	function getHostSystemPortGroups(host?: VC.HostSystem): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getVSwitchPortgroups(host?: VC.HostSystem, vSwitchName?: string): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getVirtualEthernetCardDvPortgroupBackingInfo(deviceName?: string, network?: VC.DistributedVirtualPortgroup): any
}

declare namespace com.vmware.library.vc.networking {
	function privateLanTypes(primaryVlanId?: number, secondaryVlanId?: number): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getDvSwitchSecondaryPvlanIdsForPrimaryId(dvSwitch?: VC.VmwareDistributedVirtualSwitch, primaryVlanId?: string): Array<number>
}

declare namespace com.vmware.library.vc.networking {
	function getVSwitchVMkernelPortgroups(host?: VC.HostSystem, vSwitchName?: string): Array<string>
}

declare namespace com.vmware.library.vc.networking {
	function getNicByNumber(vm?: VC.VirtualMachine, nicPosition?: number): any
}

declare namespace com.vmware.library.vc.networking {
	function hasVnicAssociatedTo(host?: VC.HostSystem, portgroupName?: string): boolean
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualSCSIPassthroughDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualFloppyDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualCdromPassthroughBackingInfo(deviceName?: string, exclusive?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualPointingDeviceDeviceBackingInfo(deviceName?: string, hostPointingDevice?: VC.VirtualPointingDeviceHostChoice): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualParallelPortDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualCdromAtapiBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualEthernetCardLegacyNetworkBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualSerialPortDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualDiskRawDiskVer2BackingInfo(deviceName?: string, descriptorFileName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualEthernetCardNetworkBackingInfo(deviceName?: string, network?: VC.Network): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
	function getVirtualSoundCardDeviceBackingInfo(deviceName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualPCNet32(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualVmxnet2(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualEthernetCard(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function createVirtualScsiControllerConfigSpec(type?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualParallelPort(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualKeyboard(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSerialPort(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, yieldOnPoll?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSriovEthernetCard(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualPS2Controller(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualLsiLogicSASController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function createVirtualEthernetCardNetworkConfigSpec(network?: VC.Network, macAddress?: string, nicType?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualPCIController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualFloppy(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualUSBController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, autoConnectDevices?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualUSB(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualVmxnet(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualLsiLogicController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualCdrom(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualIDEController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualE1000e(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualE1000(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSoundBlaster16(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualBusLogicController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualVmxnet3(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, addressType?: string, macAddress?: string, wakeOnLanEnabled?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSCSIPassthrough(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualMachineVideoCard(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, videoRamSizeInKB?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function createVirtualFloppyRemoteConfigSpec(): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualDisk(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, capacityInKB?: number, shares?: any): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualEnsoniq1371(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSCSIController(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getParaVirtualSCSIController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number, hotAddRemove?: boolean, scsiCtlrUnitNumber?: number, sharedBus?: VC.VirtualSCSISharing): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function createVirtualDiskFlatVer2ConfigSpec(sizeInGB?: any, datastore?: VC.Datastore, controllerKey?: number, diskIndex?: number, diskMode?: VC.VirtualDiskMode, thinProvisioned?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualSIOController(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function createVirtualEthernetCardDvNetworkConfigSpec(dvPortgroup?: VC.DistributedVirtualPortgroup, macAddress?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualPointingDevice(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualDevice(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device {
	function getVirtualController(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number, busNumber?: number): any
}

declare namespace com.vmware.library.vc.host {
	function getAllHostSystemsWithFT(): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.host {
	function getAllHostSystemsMatchingRegexp(regexp?: string): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.host {
	function getAllHostSystems(): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.host {
	function rescanHostHBAs(host?: VC.HostSystem): void
}

declare namespace com.vmware.library.vc.host {
	function getAllVMsOfHost(host?: VC.HostSystem): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.resourcePool {
	function renameResourcePool(resourcePool?: VC.ResourcePool, newName?: string): VC.Task
}

declare namespace com.vmware.library.vc.resourcePool {
	function createResourcePoolForCluster(cluster?: any, name?: string): VC.ResourcePool
}

declare namespace com.vmware.library.vc.resourcePool {
	function getValidResourcePoolForNetwork(network?: VC.Network): Array<VC.ResourcePool>
}

declare namespace com.vmware.library.vc.resourcePool {
	function getAllChildResourcePool(resourcePool?: VC.ResourcePool): Array<VC.ResourcePool>
}

declare namespace com.vmware.library.vc.resourcePool {
	function renameResourcePoolAndWait(resourcePool?: VC.ResourcePool, newName?: string): void
}

declare namespace com.vmware.library.vc.resourcePool {
	function getValidResourcePoolForDatastore(datastore?: VC.Datastore): Array<VC.ResourcePool>
}

declare namespace com.vmware.library.vc.resourcePool {
	function destroyResourcePoolAndWait(resourcePool?: VC.ResourcePool): void
}

declare namespace com.vmware.library.vc.resourcePool {
	function destroyResourcePool(resourcePool?: VC.ResourcePool): VC.Task
}

declare namespace com.vmware.library.vc.resourcePool {
	function createResourcePool(resourcePool?: VC.ResourcePool, name?: string): VC.ResourcePool
}

declare namespace com.vmware.library.vc.resourcePool {
	function getAllVMsOfResourcePool(resourcePool?: VC.ResourcePool): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.resourcePool {
	function getAllResourcePool(): Array<VC.ResourcePool>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllVMsOfDatastore(datastore?: VC.Datastore): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.datastore {
	function getDatastoreForHostAndResourcePool(host?: VC.HostSystem, pool?: VC.ResourcePool, vm?: VC.VirtualMachine): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllDatastoresOfVCExceptTheOneInParam(datastore?: VC.Datastore): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getValidDatastoreForConversion(datastore?: VC.Datastore, vms?: Array<VC.VirtualMachine>): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllAvaiblableHostForVM(vm?: VC.VirtualMachine): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.datastore {
	function getDatacenterForDatastore(datastore?: VC.Datastore): VC.Datacenter
}

declare namespace com.vmware.library.vc.datastore {
	function getAllDatastores(): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getValidDatastoreForNetwork(network?: VC.Network): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllAvailableHostForVM(vm?: VC.VirtualMachine): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllDatastoresOfVC(vc?: VC.SdkConnection): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllDatastoresMatchingRegexp(regexp?: string): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getAllDatastoreOnVimHost(vimHost?: VC.SdkConnection): Array<VC.Datastore>
}

declare namespace com.vmware.library.vc.datastore {
	function getDatastoreFreeSize(datastore?: VC.Datastore): number
}

declare namespace com.vmware.library.vc.datastore {
	function getValidNetworkForDatastore(datastore?: VC.Datastore): Array<VC.Network>
}

declare namespace com.vmware.library.vc.vm {
	function getAllVMs(): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm {
	function getAllVMsMatchingRegexp(regexp?: string): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm {
	function setDisksToNonPersistent(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function destroyVm(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function getMigrableVMsForAHost(host?: VC.HostSystem): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm {
	function changeVMvCPU(vm?: VC.VirtualMachine, vcpu?: number): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function setDiskToNonPersitent(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function customizeVM(vm?: VC.VirtualMachine, customizationSpec?: any): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function cloneVM(vm?: VC.VirtualMachine, folder?: VC.VmFolder, name?: string, spec?: any): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function describeVirtualMachine(vm?: VC.VirtualMachine): string
}

declare namespace com.vmware.library.vc.vm {
	function changeVMRAM(vm?: VC.VirtualMachine, memory?: number): VC.Task
}

declare namespace com.vmware.library.vc.vm {
	function linkedCloneVM(vm?: VC.VirtualMachine, folder?: VC.VmFolder, name?: string, spec?: any, snapshot?: VC.VirtualMachineSnapshot): VC.Task
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationLicenseFilePrintData(autoMode?: VC.CustomizationLicenseDataMode, autoUsers?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationIdentification(domainAdmin?: string, domainAdminPassword?: any, joinDomain?: string, joinWorkgroup?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationSysprep(guiRunOnce?: any, guiUnattended?: any, identification?: any, licenseFilePrintData?: any, userData?: any): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationGuiUnattended(autoLogon?: boolean, autoLogonCount?: number, password?: any, timeZone?: number): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationLinuxPrep(domain?: string, hostName?: any): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationFixedName(name?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationPrefixName(base?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationCustomName(argument?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationGuiRunOnce(commandList?: Array<string>): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationUserData(computerName?: any, fullName?: string, orgName?: string, productId?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationPassword(plainText?: boolean, value?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationIdentificationFromCredential(domainAdmin?: Credential, joinDomain?: string, joinWorkgroup?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationUnknownName(): any
}

declare namespace com.vmware.library.vc.vm.spec.identity {
	function getCustomizationVirtualMachineName(): any
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function getAllSnapshotResultInDatastoreBrowser(owner?: boolean, size?: boolean, type?: boolean, modif?: boolean): Array<any>
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function getPropertiesForAllSnapshotTask(): Properties
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function removeAllSnapshot(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function getAllSnapshotsOfVM(vm?: VC.VirtualMachine): Array<VC.VirtualMachineSnapshot>
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function createSnapshot(vm?: VC.VirtualMachine, name?: string, description?: string, memory?: boolean, quiesce?: boolean): VC.Task
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function getPropertiesForSnapshotTask(vm?: VC.VirtualMachine): Properties
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function revertToCurrentSnapshot(vm?: VC.VirtualMachine, host?: VC.HostSystem): VC.Task
}

declare namespace com.vmware.library.vc.vm.snapshot {
	function removeOldestSnapshotOfVM(vm?: VC.VirtualMachine, numberOfSnapshotToDelete?: number): void
}

declare namespace com.vmware.library.vc.spec {
	function getDescription(label?: string, summary?: string): any
}

declare namespace com.vmware.library.vc.spec {
	function getResourceConfigSpec(changeVersion?: string, cpuAllocation?: any, entity?: any, lastModified?: Date, memoryAllocation?: any): any
}

declare namespace com.vmware.library.vc.spec {
	function getResourceAllocationInfo(expandableReservation?: boolean, limit?: number, reservation?: number, shares?: string): any
}

declare namespace com.vmware.library.vc.spec {
	function getSharesInfo(level?: VC.SharesLevel, shares?: number): any
}

declare namespace com.vmware.library.vc.cluster {
	function haEnabledCluster(cluster?: VC.ClusterComputeResource): boolean
}

declare namespace com.vmware.library.vc.cluster {
	function getComputeResourceOfVm(vm?: VC.VirtualMachine): any
}

declare namespace com.vmware.library.vc.cluster {
	function getAllComputeResourceForVimHost(vimHost?: VC.SdkConnection): Array<VC.ComputeResource>
}

declare namespace com.vmware.library.vc.cluster {
	function getAllDRSVmGroupPerCluster(cluster?: VC.ClusterComputeResource): Array<string>
}

declare namespace com.vmware.library.vc.cluster {
	function getAllHostSystemsOfCluster(cluster?: VC.ClusterComputeResource): Array<VC.HostSystem>
}

declare namespace com.vmware.library.vc.cluster {
	function getDrsVmGroup(cluster?: VC.ClusterComputeResource, group_name?: string): any
}

declare namespace com.vmware.library.vc.cluster {
	function getNetworkForCluster(host?: VC.HostSystem, pool?: VC.ResourcePool): Array<VC.Network>
}

declare namespace com.vmware.library.vc.cluster {
	function getAllVMsOfCluster(cluster?: VC.ClusterComputeResource): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.cluster {
	function drsEnabledCluster(cluster?: VC.ClusterComputeResource): boolean
}

declare namespace com.vmware.library.vc.cluster {
	function getAllClusterComputeResourceForVimHost(vimHost?: VC.SdkConnection): Array<VC.ClusterComputeResource>
}

declare namespace com.vmware.library.vc.cluster {
	function getAllVMsOfComputeResource(cluster?: VC.ComputeResource): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.cluster {
	function vsanEnabledCluster(cluster?: VC.ClusterComputeResource): boolean
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualCdromIsoBackingInfo(fileName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualDiskRawDiskMappingVer1BackingInfo(fileName?: string, compatibilityMode?: string, deviceName?: string, diskMode?: string, lunUuid?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualParallelPortFileBackingInfo(fileName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualFloppyImageBackingInfo(fileName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualSerialPortFileBackingInfo(fileName?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.file {
	function getVirtualDiskFlatVer2BackingInfo(fileName?: string, diskMode?: string, split?: boolean, thinProvisioned?: boolean, writeThrough?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCustomizationSpec(globalIPSettings?: any, identity?: any, nicSettingMap?: Array<any>, options?: any): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function checkVMwareInput(vm?: VC.VirtualMachine, folder?: VC.VmFolder, datastore?: VC.Datastore, host?: VC.HostSystem, pool?: VC.ResourcePool): void
}

declare namespace com.vmware.library.vc.vm.spec {
	function getConfigSpecSimple(deviceChange?: Array<any>, files?: any, flags?: any, memoryMB?: number, name?: string, numCPUs?: number): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCustomizationGlobalIPSettings(dnsServerList?: Array<string>, dnsSuffixList?: Array<string>): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCustomizationWinOptions(changeSID?: boolean, deleteAccounts?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCloneSpec(config?: any, customization?: any, location?: any, powerOn?: boolean, template?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCustomizationSpecSysprepText(template?: ResourceElement, fullName?: string, orgName?: string, timeZone?: number, productId?: string, newAdminPassword?: string, joinWorkGroup?: string, joinDomain?: string, domainAdmin?: Credential, clientName?: string, IpAddress?: string, SubnetMask?: string, gateway?: Array<string>, DnsServerList?: Array<string>): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getCustomizationGlobalIPSettingsWithDomainAsString(dnsServerList?: Array<string>, dnsSuffix?: string): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getConfigSpec(annotation?: string, changeVersion?: string, consolePreferences?: any, cpuAffinity?: any, cpuAllocation?: any, cpuFeatureMask?: Array<any>, deviceChange?: Array<any>, extraConfig?: Array<any>, files?: any, flags?: any, guestId?: string, locationId?: string, memoryAffinity?: any, memoryAllocation?: any, memoryMB?: number, name?: string, networkShaper?: any, numCPUs?: number, powerOpInfo?: any, tools?: any, uuid?: string, version?: string): any
}

declare namespace com.vmware.library.vc.vm.spec {
	function getRelocateSpec(datastore?: VC.Datastore, disk?: Array<any>, host?: VC.HostSystem, pool?: VC.ResourcePool, transform?: VC.VirtualMachineRelocateTransformation): any
}

declare namespace com.vmware.library.vc.vm.spec.config {
	function getVirtualDeviceConnectInfo(allowGuestControl?: boolean, connected?: boolean, startConnected?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config {
	function getVirtualDeviceConfigSpec(device?: any, fileOperation?: VC.VirtualDeviceConfigSpecFileOperation, operation?: VC.VirtualDeviceConfigSpecOperation): any
}

declare namespace com.vmware.library.vc.vm.spec.config {
	function getVirtualMachineAffinityInfo(affinitySet?: Array<number>): any
}

declare namespace com.vmware.library.vc.vm.spec.config {
	function getVirtualMachineConsolePreferences(closeOnPowerOffOrSuspend?: boolean, enterFullScreenOnPowerOn?: boolean, powerOnWhenOpened?: boolean): any
}

declare namespace com.vmware.library.vc.vm.spec.config.device.backing.pipe {
	function getVirtualSerialPortPipeBackingInfo(pipeName?: string, endpoint?: string, noRxLoss?: boolean): any
}

declare namespace com.vmware.library.vc.datastore.files {
	function getAllFloppyImageFile(datastore?: VC.Datastore): Array<string>
}

declare namespace com.vmware.library.vc.datastore.files {
	function getAllVmdkFile(datastore?: VC.Datastore): Array<string>
}

declare namespace com.vmware.library.vc.datastore.files {
	function deleteFile(datastore?: VC.Datastore, filePath?: string): void
}

declare namespace com.vmware.library.vc.datastore.files {
	function getAllConfigFile(datastore?: VC.Datastore): Array<string>
}

declare namespace com.vmware.library.vc.datastore.files {
	function uploadFileToDatastore(datacenter?: VC.Datacenter, datastore?: VC.Datastore, srcFilePath?: string, destFilePath?: string): void
}

declare namespace com.vmware.library.vc.datastore.files {
	function getAllTemplateConfigFile(datastore?: VC.Datastore): Array<string>
}

declare namespace com.vmware.library.vc.vm.network {
	function validateIPv6AddressesWithPerfix(ipAddresses?: Array<string>): boolean
}

declare namespace com.vmware.library.vc.vm.network {
	function isSupportedNic(nic?: any): boolean
}

declare namespace com.vmware.library.vc.vm.network {
	function getNumberOfNic(vm?: VC.VirtualMachine): number
}

declare namespace com.vmware.library.vc.vm.network {
	function getNetworkForGivenNic(vm?: VC.VirtualMachine, nicNumber?: number): VC.Network
}

declare namespace com.vmware.library.vc.vm.network {
	function getNicByNumber(vm?: VC.VirtualMachine, nicPosition?: number): any
}

declare namespace com.vmware.library.vc.network {
	function getNetworksForLabel(label?: string): Array<VC.Network>
}

declare namespace com.vmware.library.vc.network {
	function getNetworkForResourcePoolHostVm(pool?: VC.ResourcePool, host?: VC.HostSystem, vm?: VC.VirtualMachine): Array<VC.Network>
}

declare namespace com.vmware.library.vc.network {
	function getAllVSwitchesMatchingRegexp(regexp?: string): Array<any>
}

declare namespace com.vmware.library.vc.network {
	function getNetworksForHostSystem(host?: VC.HostSystem): Array<VC.Network>
}

declare namespace com.vmware.library.vc.network {
	function getNetworksForVimHost(vimHost?: VC.SdkConnection): Array<VC.Network>
}

declare namespace com.vmware.library.vc.network {
	function getDatacenterForNetwork(network?: VC.Network): VC.Datacenter
}

declare namespace com.vmware.library.vc.network {
	function getManagementNetworks(vimObject?: any): Array<string>
}

declare namespace com.vmware.library.vc.vm.power {
	function resetVM(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm.power {
	function startVM(vm?: VC.VirtualMachine, host?: VC.HostSystem): VC.Task
}

declare namespace com.vmware.library.vc.vm.power {
	function standbyGuest(vm?: VC.VirtualMachine): void
}

declare namespace com.vmware.library.vc.vm.power {
	function suspendVM(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm.power {
	function forcePowerOff(vm?: VC.VirtualMachine): VC.Task
}

declare namespace com.vmware.library.vc.vm.power {
	function shutdownVMAndForce(vm?: VC.VirtualMachine, timeout?: number, polling?: number): void
}

declare namespace com.vmware.library.vc.vm.power {
	function shutdownVM(vm?: VC.VirtualMachine, timeout?: number, polling?: number): void
}

declare namespace com.vmware.library.vc.customattribute {
	function setOrCreateCustomField(managedEntity?: any, customFieldName?: string, newCustomFieldValue?: string): void
}

declare namespace com.vmware.library.vc.customattribute {
	function getCustomField(managedEntity?: any, customFieldName?: string): string
}

declare namespace com.vmware.library.vc.vapp {
	function getAllVMsOfVApp(vapp?: VC.VirtualApp): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.configuration {
	function getPbmUrl(host?: string, port?: number): string
}

declare namespace com.vmware.library.vc.configuration {
	function getSmsUrl(host?: string, port?: number): string
}

declare namespace com.vmware.library.vc.configuration {
	function getAllRegisteredInstances(): Array<string>
}

declare namespace com.vmware.library.vc.configuration {
	function getRegisteredInstanceProperties(hostUrl?: string): Properties
}

declare namespace com.vmware.library.vc.storage.sdrs {
	function isRuleNameUnique(name?: string, storagePod?: VC.StoragePod): string
}

declare namespace com.vmware.library.vc.storage.sdrs {
	function getVmAntiAffinityRules(storagePod?: VC.StoragePod): Array<string>
}

declare namespace com.vmware.library.vc.storage.sdrs {
	function getVmsInSdrs(dc?: VC.StoragePod, all?: boolean): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.storage.sdrs {
	function getVmDiskIds(vm?: VC.VirtualMachine): Array<string>
}

declare namespace com.vmware.library.vc.storage.sdrs {
	function getVmdkAntiAffinityRules(storagePod?: VC.StoragePod): Array<string>
}

declare namespace com.vmware.library.vc.vm.spec.nic {
	function getCustomizationFixedIp(ipAddress?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.nic {
	function getCustomizationDhcpIpGenerator(): any
}

declare namespace com.vmware.library.vc.vm.spec.nic {
	function getCustomizationIPSettings(dnsDomain?: string, dnsServerList?: Array<string>, gateway?: Array<string>, ip?: any, netBIOS?: VC.CustomizationNetBIOSMode, primaryWINS?: string, secondaryWINS?: string, subnetMask?: string): any
}

declare namespace com.vmware.library.vc.vm.spec.nic {
	function getCustomizationUnknownIpGenerator(): any
}

declare namespace com.vmware.library.vc.vm.spec.nic {
	function getCustomizationAdapterMapping(adapter?: any, macAddress?: string): any
}

declare namespace com.vmware.library.vc.vm.os {
	function getVirtualMachinesByOs(os?: VC.VirtualMachineGuestOsIdentifier): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm.os {
	function getAllLinuxVMs(): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.vm.os {
	function isWindowsOsInVm(vm?: VC.VirtualMachine): boolean
}

declare namespace com.vmware.library.vc.vm.os {
	function getAllWindowsVMs(): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.datacenter {
	function getAllVMsOfDatacenter(datacenter?: VC.Datacenter): Array<VC.VirtualMachine>
}

declare namespace com.vmware.library.vc.storage.vsan {
	function findVsanDisks(host?: VC.HostSystem, diskNames?: Array<string>): Array<any>
}

declare namespace com.vmware.library.vc.storage.vsan {
	function getVsanDiskNames(host?: VC.HostSystem, state?: string, ssd?: boolean): Array<string>
}

declare namespace com.vmware.library.action {
	function getAllActions(): Array<Action>
}

declare namespace com.vmware.library.httprest.configuration {
	function getProxyAuthenticationProperty(restHost?: REST.RESTHost, index?: number, newAuthentication?: string, visible?: boolean): string
}

declare namespace com.vmware.library.httprest.configuration {
	function getDefaultContentType(operation?: REST.RESTOperation): string
}

declare namespace com.vmware.library.httprest.configuration {
	function getHeaderParametersCount(operation?: REST.RESTOperation): number
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTOperationHeaderParameterName(index?: number, operation?: REST.RESTOperation): string
}

declare namespace com.vmware.library.httprest.configuration {
	function shouldDisplaySchemaSelection(operation?: REST.RESTOperation): boolean
}

declare namespace com.vmware.library.httprest.configuration {
	function isQueryParamMandatory(operation?: REST.RESTOperation): boolean
}

declare namespace com.vmware.library.httprest.configuration {
	function getSupportedAcceptHeaderMediaTypes(operation?: REST.RESTOperation): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthenticationPropertyFromArray(restHost?: REST.RESTHost, index?: number): string
}

declare namespace com.vmware.library.httprest.configuration {
	function hasHttpMethodHasBodyPayload(methodName?: string): boolean
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthenticationsSessionModes(): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function getProxyAuthenticationType(restHost?: REST.RESTHost): string
}

declare namespace com.vmware.library.httprest.configuration {
	function getSupportedContentTypes(restOperation?: REST.RESTOperation): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function removeRESTHost(name?: string): REST.RESTHost
}

declare namespace com.vmware.library.httprest.configuration {
	function updateRESTHost(newName?: string, newUrl?: string, restHost?: REST.RESTHost, newAuthenticationType?: string, newAuthenticationParams?: Array<string>, proxyHost?: string, proxyPort?: number): REST.RESTHost
}

declare namespace com.vmware.library.httprest.configuration {
	function findElementsInNamespace(operation?: REST.RESTOperation, namespace?: string): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function isHeaderParamMandatory(operation?: REST.RESTOperation, headerParamName?: string): boolean
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthenticationProperties(restHost?: REST.RESTHost): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthentications(): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthenticationProperty(restHost?: REST.RESTHost, index?: number, newAuthentication?: string, visible?: boolean): string
}

declare namespace com.vmware.library.httprest.configuration {
	function isInputParameterMandatory(operation?: REST.RESTOperation, index?: number): boolean
}

declare namespace com.vmware.library.httprest.configuration {
	function isPathParamMandatory(operation?: REST.RESTOperation, pathParamName?: string): boolean
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTHostAuthenticationType(restHost?: REST.RESTHost): string
}

declare namespace com.vmware.library.httprest.configuration {
	function getRESTOperationParameterName(index?: number, operation?: REST.RESTOperation): string
}

declare namespace com.vmware.library.httprest.configuration {
	function addRESTHost(name?: string, url?: string, authenticationType?: string, authenticationParams?: Array<string>, proxyHost?: string, proxyPort?: number): REST.RESTHost
}

declare namespace com.vmware.library.httprest.configuration {
	function findNamespacesForHost(operation?: REST.RESTOperation): Array<string>
}

declare namespace com.vmware.library.httprest.configuration {
	function getPrivateKeyEntryById(keyId?: string): Configurator.Key
}

declare namespace com.vmware.library.httprest {
	function xml2json(xml?: string): any
}

declare namespace com.vmware.library.sql.configuration {
	function getMappedTables(database?: SQL.Database): Array<string>
}

declare namespace com.vmware.library.sql.configuration {
	function getAllTableNames(database?: SQL.Database): Array<string>
}

declare namespace com.vmware.library.sql.configuration {
	function getUnmappedTableNames(database?: SQL.Database): Array<string>
}

declare namespace com.vmware.library.sql.configuration {
	function removeDatabase(database?: SQL.Database): SQL.Database
}

declare namespace com.vmware.library.sql.configuration {
	function validateDatabase(database?: SQL.Database): void
}

declare namespace com.vmware.library.sql.configuration {
	function getConnectionUrl(existing?: string, type?: string): string
}

declare namespace com.vmware.library.sql.configuration {
	function getSupportedDatabaseTypes(): Array<string>
}

declare namespace com.vmware.library.sql.configuration {
	function updateDatabase(database?: SQL.Database, name?: string, type?: string, connectionURL?: string, username?: string, password?: SecureString, sessionMode?: string): SQL.Database
}

declare namespace com.vmware.library.sql.configuration {
	function addDatabase(name?: string, type?: string, connectionURL?: string, username?: string, password?: SecureString, sessionMode?: string): SQL.Database
}

declare namespace com.vmware.library.sql.configuration {
	function validateTableSelection(table?: SQL.Table, database?: SQL.Database): boolean
}

declare namespace com.vmware.library.sql {
	function generateDeleteWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean): Workflow
}

declare namespace com.vmware.library.sql {
	function readRecordByColumns(table?: SQL.Table, colName?: string, col0?: string, col1?: string, col2?: string, col3?: string, col4?: string, col5?: string, col6?: string, col7?: string, col8?: string, col9?: string, col10?: string, col11?: string, col12?: string, col13?: string, col14?: string): string
}

declare namespace com.vmware.library.sql {
	function isValidNumberOrEmpty(src?: any): boolean
}

declare namespace com.vmware.library.sql {
	function findUniqueRecord(table?: SQL.Table, example?: Array): Workflow
}

declare namespace com.vmware.library.sql {
	function generateUpdateWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean, readOnlyColumns?: Array<SQL.Column>): Workflow
}

declare namespace com.vmware.library.sql {
	function executeRead(table?: SQL.Table, criteria?: any, validateUnique?: boolean): Array<SQL.ActiveRecord>
}

declare namespace com.vmware.library.sql {
	function executeDelete(table?: SQL.Table, columns?: any, validateRecordUniqueness?: boolean): number
}

declare namespace com.vmware.library.sql {
	function generateCreateWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean, readOnlyColumns?: Array<SQL.Column>): Workflow
}

declare namespace com.vmware.library.sql {
	function getActiveRecordProperty(source?: SQL.ActiveRecord, property?: string): Date
}

declare namespace com.vmware.library.sql {
	function executeUpdate(table?: SQL.Table, record?: SQL.ActiveRecord): number
}

declare namespace com.vmware.library.sql {
	function areTableColumns(table?: SQL.Table, columns?: Array<SQL.Column>): boolean
}

declare namespace com.vmware.library.sql {
	function generateReadWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean): Workflow
}

declare namespace com.vmware.library.sql {
	function convertBoolean(bool?: string): string
}

declare namespace com.vmware.vcac.asd.mappings {
	function mapToVCloudVM(vmProperties?: Properties): vCloud.VM
}

declare namespace com.vmware.vcac.asd.mappings {
	function mapToCatalogResource(deploymentProps?: Properties): vCACCAFE.CatalogResource
}

declare namespace com.vmware.vcac.asd.mappings {
	function mapToVCVM(vmProperties?: Properties): VC.VirtualMachine
}

declare namespace com.vmware.vcac.asd.mappings {
	function mapToVCloudVApp(vAppProperties?: Properties): vCloud.VApp
}

declare namespace com.vmware.vra.sql {
	function executeSqlSelectOnDatabase(databaseName?: string, sqlSelectQuery?: string, keyColumnName?: string, valueColumnName?: string): Properties
}

declare namespace com.vmware.vcac.asd.endpoints.powershell {
	function getPowerShellHostAuthenticationType(powerShellHost?: PowerShell.PowerShellHost): string
}

declare namespace com.vmware.vra.powershell {
	function executePowerShellScriptOnHostByName(hostName?: string, script?: string): any
}

declare namespace com.vmware.vra.powershell {
	function executePowershellScriptFromResourceOnHostByName(hostName?: string, scriptResourcePath?: string, scriptResourceName?: string): Properties
}

declare namespace com.vmware.vra.powershell {
	function executeExternalPowershellScriptOnHostByName(hostName?: string, externalScript?: string, arguments?: string): Properties
}

declare namespace com.vmware.vra.networks {
	function getApplicableNetworks(): Properties
}

declare namespace com.vmware.vra.reservations {
	function getApplicableNetworksForReservation(reservationId?: string): Properties
}

declare namespace com.vmware.vra.reservations {
	function getApplicableReservationPolicies(): Properties
}

declare namespace com.vmware.vra.reservations {
	function getReservationsForUserAndComponent(user?: string, tenant?: string, host?: vCACCAFE.VCACHost, blueprintId?: string, componentId?: string, subtenantId?: string): Array<any>
}

declare namespace com.vmware.vra.reservations {
	function getReservationTypeIdForComponent(host?: vCACCAFE.VCACHost, blueprintId?: string, componentId?: string): void
}

declare namespace com.vmware.vra {
	function getDefaultHostForTenant(tenantId?: string): vCACCAFE.VCACHost
}

declare namespace com.vmware.vcac.asd {
	function findVcVmByVcAndVmUuid(vCenterUuid?: string, vmUuid?: string): VC.VirtualMachine
}

declare namespace com.vmware.vcac.asd {
	function findVcVmByUuid(vmUuid?: string): VC.VirtualMachine
}

declare namespace com.vmware.vcac.asd {
	function findVcdObjectByHref(type?: string, vcdObjectHref?: string): any
}

declare namespace com.vmware.vcac.asd {
	function findVcObjectsByMoRefId(type?: string, moRefId?: string): Array<any>
}

declare namespace com.vmware.vcac.asd.endpoints.ad {
	function getAdHosts(): Array<AD.AdHost>
}

declare namespace com.vmware.vra.endpoint.azure {
	function generateTag(allocationData?: Properties, vmName?: string): string
}

declare namespace com.vmware.vra.endpoint.azure {
	function createOrUpdateVirtualNetwork(connection?: Azure.Connection, resourceGroup?: Azure.ResourceGroupExtended, location?: Azure.Location, virtualNetworkName?: string, subnetName?: string, addressPrefix?: string, dnsServer?: string, subnetPrefix?: string, tags?: Properties): Azure.VirtualNetwork
}

declare namespace com.vmware.vra.endpoint.azure {
	function updateAvailabilitySetReferenceCountTag(connection?: Azure.Connection, resourceGroupName?: string, availabilitySetName?: string, numberToApply?: number): number
}

declare namespace com.vmware.vra.endpoint.azure {
	function AllocateAzureVM(requestData?: Properties, reservations?: Array<Properties>, subtenant?: Properties, lastAllocatedData?: Properties): Properties
}

declare namespace com.vmware.vra.endpoint.azure {
	function getVMSizesBySeries(locationId?: string, series?: string): Array<string>
}

declare namespace com.vmware.vra.endpoint.azure {
	function determineNextNumberToUsePaddedWithZeros(namingFormat?: CompositeType(format.string,numberOfDigits.number,lastNumberUsed.number,lowestNumber.number).azureNamingFormat): string
}

declare namespace com.vmware.vra.endpoint.azure {
	function cleanUpAzureResources(connection?: Azure.Connection, apiVersion?: string, resourceGroupName?: string, availabilitySetName?: string, vmName?: string, nicNames?: Array<string>, location?: string): void
}

declare namespace com.vmware.vra.endpoint.azure {
	function createOrUpdateLoadBalancer(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, lbName?: string, bapsNames?: Array<string>, publicIpAddressName?: string): Azure.LoadBalancer
}

declare namespace com.vmware.vra.endpoint.azure {
	function createPublicIpAddress(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, publicIpName?: string, tags?: Properties): Azure.PublicIpAddress
}

declare namespace com.vmware.vra.endpoint.azure {
	function createOrUpdateNetworkInterface(connection?: Azure.Connection, location?: Azure.Location, virtualNetwork?: Azure.VirtualNetwork, publicIp?: Azure.PublicIpAddress, resourceGroup?: Azure.ResourceGroupExtended, nicName?: string, ipConfigName?: string, tags?: Properties): Azure.NetworkInterface
}

declare namespace com.vmware.vra.endpoint.azure {
	function getInstanceDetails(series?: string, size?: string): string
}

declare namespace com.vmware.vra.endpoint.azure {
	function updateResourceGroupReferenceCountTag(connection?: Azure.Connection, resourceGroupName?: string, numberToApply?: number, apiVersion?: string): number
}

declare namespace com.vmware.vra.endpoint.azure {
	function getVmIpDetails(vm?: Azure.VirtualMachine): string
}

declare namespace com.vmware.vra.endpoint.azure {
	function findStorageAccounts(connection?: Azure.Connection, storageAccountNames?: Array<string>): Array<Azure.StorageAccount>
}

declare namespace com.vmware.vra.endpoint.azure {
	function createAvailabilitySet(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, asName?: string): Azure.AvailabilitySet
}

declare namespace com.vmware.vra.endpoint.azure {
	function findStorageAccount(connection?: Azure.Connection, storageAccountName?: string): Azure.StorageAccount
}

declare namespace com.vmware.vra.endpoint.azure {
	function validatePassword(password?: SecureString): string
}

declare namespace com.vmware.vra.endpoint.azure {
	function updateNicWithBackendAddressPool(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, loadBalancerName?: string, backendAddressPoolName?: string, nic?: Azure.NetworkInterface): void
}

declare namespace com.vmware.vra.endpoint.azure {
	function validateDiskName(diskName?: string): string
}

declare namespace com.vmware.vra.endpoint.azure {
	function getAllAvailablePublicIpAddresses(vm?: Azure.VirtualMachine): Array<string>
}

declare namespace com.vmware.vra.endpoint.azure {
	function DeallocateAzureResources(requestData?: Properties): void
}

declare namespace com.vmware.vra.endpoint.azure {
	function createResourceGroup(connection?: Azure.Connection, location?: Azure.Location, groupName?: string, apiVersion?: string): Azure.ResourceGroupExtended
}

declare namespace com.vmware.vra.endpoint.azure {
	function getFirstConnectionContainingLocationId(locationId?: string): Azure.Connection
}

declare namespace com.vmware.vra.endpoint.azure {
	function getConnectionBySubscriptionId(subscriptionId?: string): Azure.Connection
}

declare namespace com.vmware.vra.endpoint.azure {
	function getVMSeries(locationId?: string): Array<string>
}

declare namespace com.vmware.vra.endpoint.azure {
	function DeleteAzureResources(requestData?: Properties, apiVersion?: string): void
}

declare namespace com.vmware.vra.endpoint.azure {
	function getAssignedPublicIpAddressNameWithRGName(azureVm?: Azure.VirtualMachine): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getVAppTemplatesVdc(targetEntityArg?: vCloud.Vdc): Array<vCloud.VAppTemplate>
}

declare namespace com.vmware.library.vCloud.operation {
	function getNetworkCardsVM(targetEntityArg?: vCloud.VM): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function getIsPartOfCatalogItemVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function updateCpuVM(targetEntityArg?: vCloud.VM, virtualCpuArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function deployVApp(targetEntityArg?: vCloud.VApp, powerOnArg?: boolean, leaseArg?: number, forceCustomizationArg?: boolean): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function updateStorageProfileVirtualDisk(targetEntityArg?: any, arg0?: any): void
}

declare namespace com.vmware.library.vCloud.operation {
	function uploadFileVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, filenameArg?: string, aliasArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getVMDiskChainLengthVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): number
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateVdc(targetEntityArg?: vCloud.Vdc): void
}

declare namespace com.vmware.library.vCloud.operation {
	function copyCatalogItemCatalog(targetEntityArg?: vCloud.Catalog, nameArg?: string, descriptionArg?: string, sourceRefArg?: vCloud.CatalogItem): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function disableNestedHypervisorVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getMetadataVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function installVMwareToolsVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function resetVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function updateVdc(targetEntityArg?: vCloud.Vdc): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function cloneMediaVdc(targetEntityArg?: vCloud.Vdc, paramsArg?: any): vCloud.Media
}

declare namespace com.vmware.library.vCloud.operation {
	function reconfigureVM(targetEntityArg?: vCloud.VM, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getMetadataCatalogItem(targetEntityArg?: vCloud.CatalogItem): any
}

declare namespace com.vmware.library.vCloud.operation {
	function overrideStorageVmProfileVirtualDisk(targetEntityArg?: any, arg0?: boolean): void
}

declare namespace com.vmware.library.vCloud.operation {
	function downloadVApp(targetEntityArg?: vCloud.VApp, arg0?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getUrlVCloudHost(targetEntityArg?: vCloud.Host): string
}

declare namespace com.vmware.library.vCloud.operation {
	function updateNetworkCardsVM(targetEntityArg?: vCloud.VM, virtualNetworkCardsArg?: Array<any>): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getItemResourceHardwareItem(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation {
	function insertMediaVM(targetEntityArg?: vCloud.VM, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function checkComplianceVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getContainedObjectsVM(targetEntityArg?: vCloud.VM): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function getIsVmVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function getNetworkSectionVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateOrgVdcNetwork(targetEntityArg?: vCloud.OrgVdcNetwork): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getContainedObjectsVApp(targetEntityArg?: vCloud.VApp): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function resetVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function deleteDisk(targetEntityArg?: vCloud.Disk): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function updateDisksVM(targetEntityArg?: vCloud.VM, virtualDisksArg?: Array<any>): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function composeVAppVdc(targetEntityArg?: vCloud.Vdc, paramsArg?: any): vCloud.VApp
}

declare namespace com.vmware.library.vCloud.operation {
	function suspendVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function deleteVCloudHost(targetEntityArg?: vCloud.Host, urlArg?: string): string
}

declare namespace com.vmware.library.vCloud.operation {
	function toAdminObjectVCloudHost(targetEntityArg?: vCloud.Host): vCloud.HostAdmin
}

declare namespace com.vmware.library.vCloud.operation {
	function downloadFileVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, aliasArg?: string, filenameArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function enableDownloadVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function rebootVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getContainedObjectsOrg(targetEntityArg?: vCloud.Organization): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function undeployVM(targetEntityArg?: vCloud.VM, undeployPowerActionTypeArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function updateProductSectionsVApp(targetEntityArg?: vCloud.VApp, productSectionsArg?: Array<any>): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateCatalogItem(targetEntityArg?: vCloud.CatalogItem): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getDisksVM(targetEntityArg?: vCloud.VM): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function setUsernameVCloudHost(targetEntityArg?: vCloud.Host, usernameArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getVMDatastoreVimRefVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function moveCatalogItemCatalog(targetEntityArg?: vCloud.Catalog, nameArg?: string, descriptionArg?: string, sourceRefArg?: vCloud.CatalogItem): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getCatalogsOrg(targetEntityArg?: vCloud.Organization): Array<vCloud.Catalog>
}

declare namespace com.vmware.library.vCloud.operation {
	function getNetworkVirtualNetworkCard(targetEntityArg?: any): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getMetadataMedia(targetEntityArg?: vCloud.Media): any
}

declare namespace com.vmware.library.vCloud.operation {
	function createVAppTemplateVdc(targetEntityArg?: vCloud.Vdc, paramsArg?: any): vCloud.VAppTemplate
}

declare namespace com.vmware.library.vCloud.operation {
	function getMetadataVdcStorageProfile(targetEntityArg?: vCloud.VdcStorageProfile): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getCatalogItemVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): vCloud.CatalogItem
}

declare namespace com.vmware.library.vCloud.operation {
	function deployVM(targetEntityArg?: vCloud.VM, powerOnArg?: boolean, leaseArg?: number, forceCustomizationArg?: boolean): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getIsBlockingTaskTask(targetEntityArg?: vCloud.Task): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function getPrimaryNetworkConnectionVirtualNetworkCard(targetEntityArg?: any): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function recomposeVApp(targetEntityArg?: vCloud.VApp, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getHistoricUsageVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function updateSectionVM(targetEntityArg?: vCloud.VM, sectionArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function uploadVappTemplateCatalog(targetEntityArg?: vCloud.Catalog, vAppTemplateNameArg?: string, vAppTemplateDescArg?: string, localOvfFileLocationArg?: string, manifestRequiredArg?: boolean, vdcStorageRefArg?: any): vCloud.VAppTemplate
}

declare namespace com.vmware.library.vCloud.operation {
	function getEntityByIdVCloudHost(targetEntityArg?: vCloud.Host, entityTypeArg?: string, idArg?: string): any
}

declare namespace com.vmware.library.vCloud.operation {
	function hasCloudVCloudHost(targetEntityArg?: vCloud.Host): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function getIsPartOfCatalogItemMedia(targetEntityArg?: vCloud.Media): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function updateDiskDisk(targetEntityArg?: vCloud.Disk, nameArg?: string, descriptionArg?: string, storageProfileArg?: vCloud.VdcStorageProfile): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function uploadOVFFileVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, filenameArg?: string): string
}

declare namespace com.vmware.library.vCloud.operation {
	function disableMaintenanceVApp(targetEntityArg?: vCloud.VApp): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getVirtualCpuVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getSessionModeVCloudHost(targetEntityArg?: vCloud.Host): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getUsernameVCloudHost(targetEntityArg?: vCloud.Host): string
}

declare namespace com.vmware.library.vCloud.operation {
	function uploadOVFEnvelopeVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, envelopeArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getSnapshotSectionVApp(targetEntityArg?: vCloud.VApp): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getUseSamlAuthenticationVCloudHost(targetEntityArg?: vCloud.Host): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function getSamlTokenCallbackNameVCloudHost(targetEntityArg?: vCloud.Host): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getMetadataDisk(targetEntityArg?: vCloud.Disk): any
}

declare namespace com.vmware.library.vCloud.operation {
	function isHardDiskVirtualDisk(targetEntityArg?: any): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function createTaskOrg(targetEntityArg?: vCloud.Organization, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function disableDownloadVApp(targetEntityArg?: vCloud.VApp): void
}

declare namespace com.vmware.library.vCloud.operation {
	function downloadOVFFileVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, filenameArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function enableDownloadVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function uploadVappTemplateVdc(targetEntityArg?: vCloud.Vdc, nameArg?: string, descriptionArg?: string, ovfFilePathArg?: string, manifestRequiredArg?: boolean, storageProfileArg?: any, catalogArg?: any): vCloud.VAppTemplate
}

declare namespace com.vmware.library.vCloud.operation {
	function deleteVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getUploadFilePathsVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, basePathArg?: string): Array<string>
}

declare namespace com.vmware.library.vCloud.operation {
	function discardSuspendedStateVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function updateHardDiskSizeVirtualDisk(targetEntityArg?: any, arg0?: any): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getEdgeGatewaysVdc(targetEntityArg?: vCloud.Vdc): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function uploadVappVdc(targetEntityArg?: vCloud.Vdc, ovfParamsArg?: any, localOvfFileLocationArg?: string): vCloud.VApp
}

declare namespace com.vmware.library.vCloud.operation {
	function getVMDatastoreVimRefVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getVmSizeVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getMediasVM(targetEntityArg?: vCloud.VM): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function getNetworkConnectionSectionVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function uploadFileChunkMedia(targetEntityArg?: vCloud.Media, filenameArg?: string, aliasArg?: string, startByteArg?: number, endByteArg?: number): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getCoresPerSocketVirtualCpu(targetEntityArg?: any): number
}

declare namespace com.vmware.library.vCloud.operation {
	function getApiVersionVCloudHost(targetEntityArg?: vCloud.Host): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getConnectionTimeoutVCloudHost(targetEntityArg?: vCloud.Host): number
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateVCloudHost(targetEntityArg?: vCloud.Host): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getVirtualDisksVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function deleteCatalogItem(targetEntityArg?: vCloud.CatalogItem): void
}

declare namespace com.vmware.library.vCloud.operation {
	function updateVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateMedia(targetEntityArg?: vCloud.Media): void
}

declare namespace com.vmware.library.vCloud.operation {
	function updateIpAddressVirtualNetworkCard(targetEntityArg?: any, arg0?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getMemorySizeVirtualMemory(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getServicesVCloudHost(targetEntityArg?: vCloud.Host): Array<vCloud.Service>
}

declare namespace com.vmware.library.vCloud.operation {
	function getContainedObjectsVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function resetVAppNetwork(targetEntityArg?: vCloud.VAppNetwork): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getGuestCustomizationSectionVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function updateProductSectionsVM(targetEntityArg?: vCloud.VM, productSectionsArg?: Array<any>): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getEntityByReferenceVCloudHost(targetEntityArg?: vCloud.Host, entityTypeArg?: string, referenceArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getLeaseSettingsSectionVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateTask(targetEntityArg?: vCloud.Task): void
}

declare namespace com.vmware.library.vCloud.operation {
	function suspendVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getVappNetworkConfigurationsVApp(targetEntityArg?: vCloud.VApp): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function getScreenVM(targetEntityArg?: vCloud.VM, filenameArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getCurrentUsageUsingSpecVM(targetEntityArg?: vCloud.VM, currentUsageSpecArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getStorageProfilesVdc(targetEntityArg?: vCloud.Vdc): Array<vCloud.VdcStorageProfile>
}

declare namespace com.vmware.library.vCloud.operation {
	function uploadFileMedia(targetEntityArg?: vCloud.Media, filenameArg?: string, aliasArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function syncSyslogServerVApp(targetEntityArg?: vCloud.VApp, networkNameArg?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function reloadFromVCVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getAttachedVmsDisk(targetEntityArg?: vCloud.Disk): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function deleteMedia(targetEntityArg?: vCloud.Media): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function instantiateVdcTemplateOrg(targetEntityArg?: vCloud.Organization, instantiateVdcTemplateParamsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function setConnectionTimeoutVCloudHost(targetEntityArg?: vCloud.Host, valueArg?: number): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getMetadataVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getAllocatedAddressesOrgVdcNetwork(targetEntityArg?: vCloud.OrgVdcNetwork): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function updateNetworkVirtualNetworkCard(targetEntityArg?: any, arg0?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function updateControlAccessVApp(targetEntityArg?: vCloud.VApp, paramsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getSocketTimeoutVCloudHost(targetEntityArg?: vCloud.Host): number
}

declare namespace com.vmware.library.vCloud.operation {
	function setMemorySizeVirtualMemory(targetEntityArg?: any, arg0?: any): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getVappStatusDescriptionVApp(targetEntityArg?: vCloud.VApp): string
}

declare namespace com.vmware.library.vCloud.operation {
	function consolidateVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getNetworkConfigSectionVApp(targetEntityArg?: vCloud.VApp): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getLeaseSettingsSectionVApp(targetEntityArg?: vCloud.VApp): any
}

declare namespace com.vmware.library.vCloud.operation {
	function createDiskVdc(targetEntityArg?: vCloud.Vdc, paramsArg?: any): vCloud.Disk
}

declare namespace com.vmware.library.vCloud.operation {
	function getNetworkVimRefVApp(targetEntityArg?: vCloud.VApp, networkNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.operation {
	function setNoOfCpusVirtualCpu(targetEntityArg?: any, valueArg?: number): void
}

declare namespace com.vmware.library.vCloud.operation {
	function cloneVAppVdc(targetEntityArg?: vCloud.Vdc, paramsArg?: any): vCloud.VApp
}

declare namespace com.vmware.library.vCloud.operation {
	function isSysAdminVCloudHost(targetEntityArg?: vCloud.Host): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function toAdminObjectVdcStorageProfile(targetEntityArg?: vCloud.VdcStorageProfile): vCloud.AdminVdcStorageProfile
}

declare namespace com.vmware.library.vCloud.operation {
	function getCatalogItemsCatalog(targetEntityArg?: vCloud.Catalog): Array<vCloud.CatalogItem>
}

declare namespace com.vmware.library.vCloud.operation {
	function getUploadFileNamesVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): Array<string>
}

declare namespace com.vmware.library.vCloud.operation {
	function getVAppTemplateSizeVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getMacAddressVirtualNetworkCard(targetEntityArg?: any): string
}

declare namespace com.vmware.library.vCloud.operation {
	function reverToCurrentSnapshotVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function addCatalogItemCatalog(targetEntityArg?: vCloud.Catalog, paramsArg?: any): vCloud.CatalogItem
}

declare namespace com.vmware.library.vCloud.operation {
	function getOperatingSystemSectionVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function setSamlTokenCallbackNameVCloudHost(targetEntityArg?: vCloud.Host, nameArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function powerOnVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function deleteVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getDisksVdc(targetEntityArg?: vCloud.Vdc): Array<vCloud.Disk>
}

declare namespace com.vmware.library.vCloud.operation {
	function getHardDiskSizeVirtualDisk(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getVirtualMediasVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateOrg(targetEntityArg?: vCloud.Organization): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getCatalogControlAccessByReferenceOrg(targetEntityArg?: vCloud.Organization, catalogArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getRuntimeInfoSectionVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getVirtualHardwareSectionVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function powerOffVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function setCacheTimeoutVCloudHost(targetEntityArg?: vCloud.Host, valueArg?: number): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getNetworkConnectionSectionVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getMaxConnectionsVCloudHost(targetEntityArg?: vCloud.Host): number
}

declare namespace com.vmware.library.vCloud.operation {
	function instantiateVAppTemplateVdc(targetEntityArg?: vCloud.Vdc, paramsArg?: any): vCloud.VApp
}

declare namespace com.vmware.library.vCloud.operation {
	function disableDownloadVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): void
}

declare namespace com.vmware.library.vCloud.operation {
	function postVCloudHost(targetEntityArg?: vCloud.Host, urlArg?: string, contentArg?: string, contentTypeArg?: string, charsetArg?: string): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getIpAddressingModeVirtualNetworkCard(targetEntityArg?: any): string
}

declare namespace com.vmware.library.vCloud.operation {
	function updateCatalogItem(targetEntityArg?: vCloud.CatalogItem): vCloud.CatalogItem
}

declare namespace com.vmware.library.vCloud.operation {
	function downloadLosslessOVFVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, filenameArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateService(targetEntityArg?: vCloud.Service): void
}

declare namespace com.vmware.library.vCloud.operation {
	function updateHotAddVM(targetEntityArg?: vCloud.VM, memoryHotAddArg?: boolean, cpuHotAddArg?: boolean): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getVMDiskChainLengthVM(targetEntityArg?: vCloud.VM): number
}

declare namespace com.vmware.library.vCloud.operation {
	function getGuestCustomizationSectionVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function updateMedia(targetEntityArg?: vCloud.Media): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getOrganizationsVCloudHost(targetEntityArg?: vCloud.Host): Array<vCloud.Organization>
}

declare namespace com.vmware.library.vCloud.operation {
	function getNoOfCpusVirtualCpu(targetEntityArg?: any): number
}

declare namespace com.vmware.library.vCloud.operation {
	function getCatalogItemMedia(targetEntityArg?: vCloud.Media): vCloud.CatalogItem
}

declare namespace com.vmware.library.vCloud.operation {
	function getVCloudHost(targetEntityArg?: vCloud.Host, urlArg?: string): string
}

declare namespace com.vmware.library.vCloud.operation {
	function toAdminObjectOrgVdcNetwork(targetEntityArg?: vCloud.OrgVdcNetwork): vCloud.AdminOrgVdcNetwork
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateVdcStorageProfile(targetEntityArg?: vCloud.VdcStorageProfile): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getMetadataOrg(targetEntityArg?: vCloud.Organization): any
}

declare namespace com.vmware.library.vCloud.operation {
	function setUseSamlAuthenticationVCloudHost(targetEntityArg?: vCloud.Host, valueArg?: boolean): void
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateVAppNetwork(targetEntityArg?: vCloud.VAppNetwork): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getContainedObjectsTask(targetEntityArg?: vCloud.Task): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function updateGoldMasterVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, valueArg?: boolean): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function shutdownVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function toAdminObjectService(targetEntityArg?: vCloud.Service): vCloud.AdminService
}

declare namespace com.vmware.library.vCloud.operation {
	function getProductSectionsVM(targetEntityArg?: vCloud.VM): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function getPropertySectionVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function acquireTicketVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function deleteVmAffinity(targetEntityArg?: vCloud.VmAffinity): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function consolidateVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function setPasswordVCloudHost(targetEntityArg?: vCloud.Host, passwordArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getVdcsOrg(targetEntityArg?: vCloud.Organization): Array<vCloud.Vdc>
}

declare namespace com.vmware.library.vCloud.operation {
	function getIsVMwareToolsInstalledVM(targetEntityArg?: vCloud.VM): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function getHistoricUsageUsingSpecVM(targetEntityArg?: vCloud.VM, historicUsageSpecArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation {
	function cancelTask(targetEntityArg?: vCloud.Task): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getChildrenVmsVApp(targetEntityArg?: vCloud.VApp): Array<vCloud.VM>
}

declare namespace com.vmware.library.vCloud.operation {
	function powerOffVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getIpAddressVirtualNetworkCard(targetEntityArg?: any): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getOrganizationVCloudHost(targetEntityArg?: vCloud.Host): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getVappTemplateStatusDescriptionVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getMediasVdc(targetEntityArg?: vCloud.Vdc): Array<vCloud.Media>
}

declare namespace com.vmware.library.vCloud.operation {
	function enableNestedHypervisorVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getProductSectionsVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function validateApiVersionVCloudHost(targetEntityArg?: vCloud.Host, selectedApiVersionArg?: string): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getChildrenVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): Array<vCloud.VAppTemplate>
}

declare namespace com.vmware.library.vCloud.operation {
	function getSnapshotSectionVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function setSocketTimeoutVCloudHost(targetEntityArg?: vCloud.Host, valueArg?: number): void
}

declare namespace com.vmware.library.vCloud.operation {
	function captureVAppVdc(targetEntityArg?: vCloud.Vdc, paramsArg?: any): vCloud.VAppTemplate
}

declare namespace com.vmware.library.vCloud.operation {
	function getStartUpSectionVApp(targetEntityArg?: vCloud.VApp): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getContainedObjectsVdc(targetEntityArg?: vCloud.Vdc): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function setMaxConnectionsVCloudHost(targetEntityArg?: vCloud.Host, valueArg?: number): void
}

declare namespace com.vmware.library.vCloud.operation {
	function rebootVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function toAdminObjectOrg(targetEntityArg?: vCloud.Organization): vCloud.AdminOrganization
}

declare namespace com.vmware.library.vCloud.operation {
	function getStorageProfileReferenceVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function ejectMediaVM(targetEntityArg?: vCloud.VM, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getProductSectionsVApp(targetEntityArg?: vCloud.VApp): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function createSnapshotVApp(targetEntityArg?: vCloud.VApp, arg0?: string, arg1?: string, arg2?: boolean, arg3?: boolean): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): void
}

declare namespace com.vmware.library.vCloud.operation {
	function setEnabledVCloudHost(targetEntityArg?: vCloud.Host, valueArg?: boolean): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getOVFDownloadURLVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getBlockingTaskTask(targetEntityArg?: vCloud.Task): vCloud.BlockingTask
}

declare namespace com.vmware.library.vCloud.operation {
	function deleteVdc(targetEntityArg?: vCloud.Vdc): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function isAdminVCloudHost(targetEntityArg?: vCloud.Host): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function deleteVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getCacheTimeoutVCloudHost(targetEntityArg?: vCloud.Host): number
}

declare namespace com.vmware.library.vCloud.operation {
	function getConnectedVirtualNetworkCard(targetEntityArg?: any): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function getCustomizationSectionVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function cloneVAppTemplateVdc(targetEntityArg?: vCloud.Vdc, paramsArg?: any): vCloud.VAppTemplate
}

declare namespace com.vmware.library.vCloud.operation {
	function detachDiskVM(targetEntityArg?: vCloud.VM, diskArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getMetadataVApp(targetEntityArg?: vCloud.VApp): any
}

declare namespace com.vmware.library.vCloud.operation {
	function forceGuestCustomizationVM(targetEntityArg?: vCloud.VM): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getComplianceResultVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function setOrganizationVCloudHost(targetEntityArg?: vCloud.Host, organizationArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getVmAffinityRuleVmAffinity(targetEntityArg?: vCloud.VmAffinity): any
}

declare namespace com.vmware.library.vCloud.operation {
	function setCoresPerSocketVirtualCpu(targetEntityArg?: any, coresPerSocketArg?: number): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getPlatformSectionVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getVirtualMemoryVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function updateCatalogControlAccessByReferenceOrg(targetEntityArg?: vCloud.Organization, catalogArg?: any, paramsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getVAppsVdc(targetEntityArg?: vCloud.Vdc): Array<vCloud.VApp>
}

declare namespace com.vmware.library.vCloud.operation {
	function getChildrenVAppsVApp(targetEntityArg?: vCloud.VApp): Array<vCloud.VApp>
}

declare namespace com.vmware.library.vCloud.operation {
	function getNetworkNamesVApp(targetEntityArg?: vCloud.VApp): Array<string>
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateVmAffinity(targetEntityArg?: vCloud.VmAffinity): void
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateDisk(targetEntityArg?: vCloud.Disk): void
}

declare namespace com.vmware.library.vCloud.operation {
	function removeAllSnapshotsVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function uploadMediaVdc(targetEntityArg?: vCloud.Vdc, nameArg?: string, descriptionArg?: string, imageTypeArg?: any, storageProfileArg?: any, filenameArg?: string): vCloud.Media
}

declare namespace com.vmware.library.vCloud.operation {
	function joinTask(targetEntityArg?: vCloud.Task, timeoutArg?: number, periodArg?: number): void
}

declare namespace com.vmware.library.vCloud.operation {
	function putVCloudHost(targetEntityArg?: vCloud.Host, urlArg?: string, contentArg?: string, contentTypeArg?: string, charsetArg?: string): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getEnabledVCloudHost(targetEntityArg?: vCloud.Host): boolean
}

declare namespace com.vmware.library.vCloud.operation {
	function getVmStatusDescriptionVM(targetEntityArg?: vCloud.VM): string
}

declare namespace com.vmware.library.vCloud.operation {
	function updateSectionVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, sectionArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getNetworkConfigSectionVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getMetadataCatalog(targetEntityArg?: vCloud.Catalog): any
}

declare namespace com.vmware.library.vCloud.operation {
	function answerVmQuestionVM(targetEntityArg?: vCloud.VM, choiceIdArg?: number, questionIdArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function createSnapshotVM(targetEntityArg?: vCloud.VM, arg0?: string, arg1?: string, arg2?: boolean, arg3?: boolean): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function changeOwnerDisk(targetEntityArg?: vCloud.Disk, valueArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation {
	function setSessionModeVCloudHost(targetEntityArg?: vCloud.Host, valueArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getVAppSizeVApp(targetEntityArg?: vCloud.VApp): any
}

declare namespace com.vmware.library.vCloud.operation {
	function updateVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateCatalog(targetEntityArg?: vCloud.Catalog): void
}

declare namespace com.vmware.library.vCloud.operation {
	function relocateVM(targetEntityArg?: vCloud.VM, datastoreArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function upgradeHardwareVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function updateMemoryVM(targetEntityArg?: vCloud.VM, virtualMemoryArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getVmQuestionVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function resetVAppNetworkVApp(targetEntityArg?: vCloud.VApp, networkNameArg?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function createVmAffinityRuleVdc(targetEntityArg?: vCloud.Vdc, vmAffinityRuleArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function logoutVCloudHost(targetEntityArg?: vCloud.Host): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getCurrentUsageVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getErrorTask(targetEntityArg?: vCloud.Task): any
}

declare namespace com.vmware.library.vCloud.operation {
	function discardSuspendedStateVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function updateTask(targetEntityArg?: vCloud.Task, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getQueryServiceVCloudHost(targetEntityArg?: vCloud.Host): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getVMVimRefVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function uploadFileChunkVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, filenameArg?: string, aliasArg?: string, startByteArg?: number, endByteArg?: number): void
}

declare namespace com.vmware.library.vCloud.operation {
	function setSamlTokenCallbackVCloudHost(targetEntityArg?: vCloud.Host, actionArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getMetadataVdc(targetEntityArg?: vCloud.Vdc): any
}

declare namespace com.vmware.library.vCloud.operation {
	function powerOnVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getVMHostVimRefVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function setUrlVCloudHost(targetEntityArg?: vCloud.Host, urlArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation {
	function reverToCurrentSnapshotVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getHardDiskBusTypeVirtualDisk(targetEntityArg?: any): string
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateApiDefinition(targetEntityArg?: vCloud.ApiDefinition): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getParamsTask(targetEntityArg?: vCloud.Task, typeArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getControlAccessVApp(targetEntityArg?: vCloud.VApp): any
}

declare namespace com.vmware.library.vCloud.operation {
	function toAdminObjectCatalog(targetEntityArg?: vCloud.Catalog): vCloud.AdminCatalog
}

declare namespace com.vmware.library.vCloud.operation {
	function getContainedObjectsCatalog(targetEntityArg?: vCloud.Catalog): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function getAttachedDisksVM(targetEntityArg?: vCloud.VM): Array<vCloud.Disk>
}

declare namespace com.vmware.library.vCloud.operation {
	function getContainedObjectsService(targetEntityArg?: vCloud.Service): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function getOVFVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getCpuVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getMetadataOrgVdcNetwork(targetEntityArg?: vCloud.OrgVdcNetwork): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getDownloadFileNamesVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): Array<string>
}

declare namespace com.vmware.library.vCloud.operation {
	function getNetworkSectionVApp(targetEntityArg?: vCloud.VApp): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getVirtualNetworkCardsVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function updateSectionVApp(targetEntityArg?: vCloud.VApp, sectionArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getMemoryVM(targetEntityArg?: vCloud.VM): any
}

declare namespace com.vmware.library.vCloud.operation {
	function createEndOfTaskTriggerTask(targetEntityArg?: vCloud.Task, timeoutArg?: number): any
}

declare namespace com.vmware.library.vCloud.operation {
	function attachDiskVM(targetEntityArg?: vCloud.VM, diskArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function changeOwnerVApp(targetEntityArg?: vCloud.VApp, userRefArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation {
	function undeployVApp(targetEntityArg?: vCloud.VApp, undeployPowerActionTypeArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function shutdownVM(targetEntityArg?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getApiDefinitionsService(targetEntityArg?: vCloud.Service): Array<vCloud.ApiDefinition>
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateVApp(targetEntityArg?: vCloud.VApp): void
}

declare namespace com.vmware.library.vCloud.operation {
	function getVmAffinityRulesVdc(targetEntityArg?: vCloud.Vdc): Array<vCloud.VmAffinity>
}

declare namespace com.vmware.library.vCloud.operation {
	function getOrgVdcNetworksVdc(targetEntityArg?: vCloud.Vdc): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function getVMHostVimRefVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function updateInternalStateVM(targetEntityArg?: vCloud.VM): void
}

declare namespace com.vmware.library.vCloud.operation {
	function wrapReferenceVCloudHost(targetEntityArg?: vCloud.Host, entityTypeArg?: string, referenceArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation {
	function getVirtualHardwareSectionVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function enableMaintenanceVApp(targetEntityArg?: vCloud.VApp): void
}

declare namespace com.vmware.library.vCloud.operation {
	function toAdminObjectVdc(targetEntityArg?: vCloud.Vdc): vCloud.AdminVdc
}

declare namespace com.vmware.library.vCloud.operation {
	function loginVCloudHost(targetEntityArg?: vCloud.Host): void
}

declare namespace com.vmware.library.vCloud.operation {
	function updateVmAffinity(targetEntityArg?: vCloud.VmAffinity, vmAffinityRuleArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getVMVimRefVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): any
}

declare namespace com.vmware.library.vCloud.operation {
	function removeAllSnapshotsVApp(targetEntityArg?: vCloud.VApp): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getShadowVmReferencesVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): Array<any>
}

declare namespace com.vmware.library.vCloud.operation {
	function resetMacAddressVirtualNetworkCard(targetEntityArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation {
	function updateVAppTemplate(targetEntityArg?: vCloud.VAppTemplate): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation {
	function getStatusDescriptionMedia(targetEntityArg?: vCloud.Media): string
}

declare namespace com.vmware.library.vCloud.operation {
	function getVAppNetworksVApp(targetEntityArg?: vCloud.VApp): Array<vCloud.VAppNetwork>
}

declare namespace com.vmware.library.vCloud.operation {
	function relocateVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, datastoreRefArg?: any): vCloud.Task
}

declare namespace com.vmware.vra.endpoint.azure.configuration {
	function createAzureConfigurations(): void
}

declare namespace com.vmware.vra.endpoint.azure.configuration {
	function getAzureConfigurations(attributesMap?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgAssociation(statusArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultDiskRecord(busSubTypeArg?: string, busTypeArg?: string, busTypeDescArg?: string, datastoreArg?: string, datastoreNameArg?: string, isAttachedArg?: boolean, metadataArg?: any, nameArg?: string, ownerNameArg?: string, sizeBArg?: number, statusArg?: string, storageProfileArg?: string, storageProfileNameArg?: string, taskArg?: string, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createMetadataBooleanValue(valueArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminOrgVdcStorageProfileRecord(isDefaultStorageProfileArg?: boolean, isEnabledArg?: boolean, metadataArg?: any, nameArg?: string, numberOfConditionsArg?: number, orgArg?: string, storageLimitMBArg?: number, storageProfileMorefArg?: string, storageUsedMBArg?: number, vcArg?: string, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminAllocatedExternalAddressRecord(ipAddressArg?: string, linkedNetworkArg?: string, metadataArg?: any, networkArg?: string, orgArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createLoadBalancerPool(descriptionArg?: string, errorDetailsArg?: string, memberArg?: Array<any>, nameArg?: string, operationalArg?: boolean, servicePortArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNetworkFeatures(networkServiceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createTrustStoreUploadSocket(taskArg?: any, uploadLocationArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createError(majorErrorCodeArg?: number, messageArg?: string, minorErrorCodeArg?: string, stackTraceArg?: string, vendorSpecificErrorCodeArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminUserRecord(deployedVMQuotaArg?: number, deployedVMQuotaRankArg?: number, fullNameArg?: string, identityProviderTypeArg?: string, isEnabledArg?: boolean, isLdapUserArg?: boolean, metadataArg?: any, nameArg?: string, numberOfDeployedVMsArg?: number, numberOfStoredVMsArg?: number, orgArg?: string, storedVMQuotaArg?: number, storedVMQuotaRankArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createMediaInsertOrEjectParams(mediaArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCatalogItemParams(dateCreatedArg?: any, descriptionArg?: string, entityArg?: any, nameArg?: string, operationKeyArg?: string, propertyArg?: Array<any>, sizeArg?: number, versionNumberArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGatewayInterfaces(gatewayInterfaceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultOrgVdcStorageProfileRecord(isDefaultStorageProfileArg?: boolean, isEnabledArg?: boolean, isVdcBusyArg?: boolean, metadataArg?: any, nameArg?: string, numberOfConditionsArg?: number, storageLimitMBArg?: number, storageUsedMBArg?: number, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultRecords(nameArg?: string, pageArg?: number, pageSizeArg?: number, recordArg?: Array<any>, totalArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVAppCreationParams(deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, nameArg?: string, powerOnArg?: boolean, vAppParentArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createReference(nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createInstantiateOvfProperty(classIdArg?: string, instanceIdArg?: string, keyArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultVirtualCenterRecord(isBusyArg?: boolean, isEnabledArg?: boolean, isSupportedArg?: boolean, metadataArg?: any, nameArg?: string, statusArg?: string, urlArg?: string, userNameArg?: string, uuidArg?: string, vcVersionArg?: string, vsmIPArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgLdapSettings(customOrgLdapSettingsArg?: any, customUsersOuArg?: string, orgLdapModeArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSubnetParticipation(gatewayArg?: string, ipAddressArg?: string, ipRangesArg?: any, netmaskArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminVdcRecord(cpuAllocationMhzArg?: number, cpuLimitMhzArg?: number, cpuUsedMhzArg?: number, isBusyArg?: boolean, isEnabledArg?: boolean, isSystemVdcArg?: boolean, memoryAllocationMBArg?: number, memoryLimitMBArg?: number, memoryUsedMBArg?: number, metadataArg?: any, nameArg?: string, networkPoolArg?: string, numberOfDisksArg?: number, numberOfMediaArg?: number, numberOfStorageProfilesArg?: number, numberOfVAppTemplatesArg?: number, numberOfVAppsArg?: number, orgArg?: string, orgNameArg?: string, providerVdcArg?: string, providerVdcNameArg?: string, statusArg?: string, storageAllocationMBArg?: number, storageLimitMBArg?: number, storageUsedMBArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultHostRecord(isBusyArg?: boolean, isCrossHostEnabledArg?: boolean, isDeletedArg?: boolean, isEnabledArg?: boolean, isHungArg?: boolean, isInMaintenanceModeArg?: boolean, isPendingUpgradeArg?: boolean, isPreparedArg?: boolean, isSupportedArg?: boolean, metadataArg?: any, nameArg?: string, numberOfVMsArg?: number, osVersionArg?: string, stateArg?: number, vcArg?: string, vcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createUpdateVdcStorageProfiles(addStorageProfileArg?: Array<any>, descriptionArg?: string, nameArg?: string, removeStorageProfileArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createAdminVdcStorageProfileParams(defaultArg?: boolean, descriptionArg?: string, enabledArg?: boolean, limitArg?: number, nameArg?: string, operationKeyArg?: string, providerVdcStorageProfileArg?: any, unitsArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOperatingSystemInfo(cimOsIdArg?: number, cimVersionArg?: number, defaultHardDiskAdapterTypeArg?: any, internalNameArg?: string, maximumCpuCountArg?: number, minimumHardDiskSizeGigabytesArg?: number, minimumHardwareVersionArg?: number, minimumMemoryMegabytesArg?: number, nameArg?: string, operatingSystemIdArg?: number, personalizationAutoArg?: boolean, personalizationEnabledArg?: boolean, supportedArg?: boolean, supportedForCreateArg?: boolean, supportsMemHotAddArg?: boolean, sysprepPackagingSupportedArg?: boolean, x64Arg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSession(orgArg?: string, userArg?: string, userIdArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNatVmRule(externalIpAddressArg?: string, externalPortArg?: number, internalPortArg?: number, protocolArg?: string, vAppScopedVmIdArg?: string, vmNicIdArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultNetworkRecord(dns1Arg?: string, dns2Arg?: string, dnsSuffixArg?: string, gatewayArg?: string, ipScopeIdArg?: string, isBusyArg?: boolean, metadataArg?: any, nameArg?: string, netmaskArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVmQuestionAnswerChoice(textArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createPublishExternalCatalogParams(catalogPublishedUrlArg?: string, isCacheEnabledArg?: boolean, isPublishedExternallyArg?: boolean, passwordArg?: string, preserveIdentityInfoFlagArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createFileUploadParams(fileSizeArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createInstantiateVdcTemplateParams(descriptionArg?: string, nameArg?: string, sourceArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultDatastoreProviderVdcRelationRecord(datastoreArg?: string, datastoreTypeArg?: string, isDeletedArg?: boolean, isEnabledArg?: boolean, metadataArg?: any, morefArg?: string, nameArg?: string, providerVdcArg?: string, provisionedStorageMBArg?: number, requestedStorageMBArg?: number, storageMBArg?: number, storageUsedMBArg?: number, vcArg?: string, vcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultServiceResourceRecord(externalObjectIdArg?: string, metadataArg?: any, nameArg?: string, orgArg?: string, resourceClassArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultServiceLinkRecord(linkHrefArg?: string, metadataArg?: any, mimeTypeArg?: string, relArg?: string, resourceIdArg?: string, resourceTypeArg?: string, serviceArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCustomizationSection(customizeOnInstantiateArg?: boolean, goldMasterArg?: boolean, infoArg?: any, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createControlAccessParams(accessSettingsArg?: any, everyoneAccessLevelArg?: string, isSharedToEveryoneArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSourcedCompositionItemParam(instantiationParamsArg?: any, networkAssignmentArg?: Array<any>, sourceArg?: any, sourceDeleteArg?: boolean, storageProfileArg?: any, vAppScopedLocalIdArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createIpsecVpnThirdPartyPeer(peerIdArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultVAppNetworkRecord(dns1Arg?: string, dns2Arg?: string, dnsSuffixArg?: string, gatewayArg?: string, ipScopeIdArg?: string, isBusyArg?: boolean, isIpScopeInheritedArg?: boolean, metadataArg?: any, nameArg?: string, netmaskArg?: string, vAppArg?: string, vAppNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGatewayIpsecVpnTunnel(descriptionArg?: string, encryptionProtocolArg?: string, errorDetailsArg?: string, ipsecVpnPeerArg?: any, isEnabledArg?: boolean, isOperationalArg?: boolean, localIdArg?: string, localIpAddressArg?: string, localSubnetArg?: Array<any>, mtuArg?: number, nameArg?: string, peerIdArg?: string, peerIpAddressArg?: string, peerSubnetArg?: Array<any>, sharedSecretArg?: string, sharedSecretEncryptedArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSyslogServerSettings(syslogServerIp1Arg?: string, syslogServerIp2Arg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGatewayNatRule(icmpSubTypeArg?: string, interfaceArg?: any, originalIpArg?: string, originalPortArg?: string, protocolArg?: string, translatedIpArg?: string, translatedPortArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgAssociations(orgAssociationMemberArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createAccessSetting(accessLevelArg?: string, subjectArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCloneVAppTemplateParams(descriptionArg?: string, isSourceDeleteArg?: boolean, nameArg?: string, sourceArg?: any, vdcStorageProfileArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgOperationLimitsSettings(consolesPerVmLimitArg?: number, operationsPerOrgArg?: number, operationsPerUserArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSnapshot(createdArg?: any, poweredOnArg?: boolean, sizeArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVmAffinityRule(isEnabledArg?: boolean, isMandatoryArg?: boolean, nameArg?: string, operationKeyArg?: string, polarityArg?: string, scopeArg?: string, vmReferencesArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createIpRange(endAddressArg?: string, startAddressArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRightParams(bundleKeyArg?: string, categoryArg?: string, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, serviceNamespaceArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCaptureVAppParams(descriptionArg?: string, nameArg?: string, sectionArg?: Array<any>, sourceArg?: any, targetCatalogItemArg?: any, vdcStorageProfileArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createComputeCapacity(cpuArg?: any, memoryArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createStaticRoute(gatewayInterfaceArg?: any, interfaceArg?: string, nameArg?: string, networkArg?: string, nextHopIpArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGatewayInterface(applyRateLimitArg?: boolean, displayNameArg?: string, inRateLimitArg?: number, interfaceTypeArg?: string, nameArg?: string, networkArg?: any, outRateLimitArg?: number, subnetParticipationArg?: Array<any>, useForDefaultRouteArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNetworkAssignment(containerNetworkArg?: string, innerNetworkArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCreateSnapshotParams(descriptionArg?: string, memoryArg?: boolean, nameArg?: string, quiesceArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultVmDiskRelationRecord(diskArg?: string, metadataArg?: any, vdcArg?: string, vmArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createComplianceResult(complianceCheckTimeArg?: any, complianceStatusArg?: string, complianceStatusMessageArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgSettings(orgEmailSettingsArg?: any, orgFederationSettingsArg?: any, orgGeneralSettingsArg?: any, orgLdapSettingsArg?: any, orgOperationLimitsSettingsArg?: any, orgPasswordPolicySettingsArg?: any, vAppLeaseSettingsArg?: any, vAppTemplateLeaseSettingsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createDefaultStorageProfileSection(infoArg?: any, requiredArg?: boolean, storageProfileArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNetworkPoolReferences(networkPoolReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVmParams(dateCreatedArg?: any, deployedArg?: boolean, descriptionArg?: string, environmentArg?: any, filesArg?: any, nameArg?: string, needsCustomizationArg?: boolean, nestedHypervisorEnabledArg?: boolean, operationKeyArg?: string, sectionArg?: Array<any>, statusArg?: number, storageProfileArg?: any, vAppParentArg?: any, vAppScopedLocalIdArg?: string, vmCapabilitiesArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createDiskCreateParams(diskArg?: any, localityArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createEntityReference(nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultEdgeGatewayRecord(gatewayStatusArg?: string, haStatusArg?: string, isBusyArg?: boolean, metadataArg?: any, nameArg?: string, numberOfExtNetworksArg?: number, numberOfOrgNetworksArg?: number, vdcArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createInstantiateVmParams(computerNameArg?: string, hardwareCustomizationArg?: any, networkConnectionSectionArg?: any, vdcStorageProfileArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createTaskRequestBase(createdTimeArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, organizationArg?: any, taskOwnerArg?: any, timeoutActionArg?: string, timeoutDateArg?: any, userArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminVAppRecord(cpuAllocationMhzArg?: number, creationDateArg?: any, isBusyArg?: boolean, isDeployedArg?: boolean, isEnabledArg?: boolean, isExpiredArg?: boolean, isInMaintenanceModeArg?: boolean, isVdcEnabledArg?: boolean, memoryAllocationMBArg?: number, metadataArg?: any, nameArg?: string, numberOfVMsArg?: number, orgArg?: string, ownerNameArg?: string, statusArg?: string, storageKBArg?: number, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createResourceReference(nameArg?: string, statusArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminDiskRecord(busSubTypeArg?: string, busTypeArg?: string, busTypeDescArg?: string, datastoreArg?: string, datastoreNameArg?: string, isAttachedArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, ownerNameArg?: string, sizeBArg?: number, statusArg?: string, storageProfileArg?: string, storageProfileNameArg?: string, taskArg?: string, vcArg?: string, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createAllocatedIpAddresses(ipAddressArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSample(timestampArg?: any, valueArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOvfToVdcNetworkMap(entryArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultCellRecord(buildDateArg?: any, isActiveArg?: number, isVMwareVcArg?: number, metadataArg?: any, nameArg?: string, primaryIpArg?: string, versionArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgFederationSettings(enabledArg?: boolean, sAMLMetadataArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultServiceRecord(metadataArg?: any, nameArg?: string, namespaceArg?: string, vendorArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createPublishCatalogParams(isPublishedArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminCatalogItemRecord(catalogArg?: string, catalogNameArg?: string, creationDateArg?: any, entityArg?: string, entityNameArg?: string, entityTypeArg?: string, isExpiredArg?: boolean, isPublishedArg?: boolean, isVdcEnabledArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, ownerArg?: string, ownerNameArg?: string, statusArg?: string, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createDefaultHardDiskAdapter(refArg?: string, valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createEvent(ownerArg?: any, serviceNamespaceArg?: string, successArg?: boolean, typeArg?: string, typeFullArg?: string, userArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVms(vmReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createHistoricUsageSpec(absoluteEndTimeArg?: any, absoluteStartTimeArg?: any, metricPatternArg?: Array<string>, relativeEndTimeArg?: any, relativeStartTimeArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNatOneToOneVmRule(externalIpAddressArg?: string, mappingModeArg?: string, vAppScopedVmIdArg?: string, vmNicIdArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRegisterVAppParams(descriptionArg?: string, externalNatIpMapArg?: any, nameArg?: string, nicIpMapArg?: any, ovfArg?: string, ovfToVdcNetworkMapArg?: any, vsToVmxMapArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createHardDiskAdapterReference(refArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNetworkMapping(sourceArg?: string, targetArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createAdminCatalogParams(catalogItemsArg?: any, catalogStorageProfilesArg?: any, dateCreatedArg?: any, descriptionArg?: string, externalCatalogSubscriptionParamsArg?: any, isPublishedArg?: boolean, nameArg?: string, operationKeyArg?: string, ownerArg?: any, publishExternalCatalogParamsArg?: any, versionNumberArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrganizationReferences(organizationReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCapacityWithUsage(allocatedArg?: number, limitArg?: number, overheadArg?: number, reservedArg?: number, unitsArg?: string, usedArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCurrentUsageSpec(metricPatternArg?: Array<string>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createAccessSettings(accessSettingArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNicIpMap(entryArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createMetaDataEntries(metadataEntryArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createExternalCatalogSubscriptionParams(expectedSslThumbprintArg?: string, localCopyArg?: boolean, locationArg?: string, passwordArg?: string, subscribeToExternalFeedsArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createDhcpService(defaultLeaseTimeArg?: number, domainNameArg?: string, ipRangeArg?: any, isEnabledArg?: boolean, maxLeaseTimeArg?: number, primaryNameServerArg?: string, routerIpArg?: string, secondaryNameServerArg?: string, subMaskArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createInstantiationParams(sectionArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createIpsecVpnLocalPeer(nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createIpAddresses(ipAddressArg?: Array<string>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVAppNetworkConfiguration(configurationArg?: any, descriptionArg?: string, isDeployedArg?: boolean, networkNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultVAppTemplateRecord(catalogNameArg?: string, creationDateArg?: any, isBusyArg?: boolean, isDeployedArg?: boolean, isEnabledArg?: boolean, isExpiredArg?: boolean, isGoldMasterArg?: boolean, isPublishedArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, ownerNameArg?: string, statusArg?: string, storageProfileNameArg?: string, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultVAppOrgVdcNetworkRelationRecord(entityTypeArg?: string, metadataArg?: any, nameArg?: string, orgArg?: string, orgVdcNetworkArg?: string, orgVdcNetworkNameArg?: string, ownerNameArg?: string, statusArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultEventRecord(entityArg?: string, entityNameArg?: string, entityTypeArg?: string, eventStatusArg?: number, eventTypeArg?: string, metadataArg?: any, orgNameArg?: string, serviceNamespaceArg?: string, timeStampArg?: any, userNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGroupParams(descriptionArg?: string, nameArg?: string, nameInSourceArg?: string, operationKeyArg?: string, providerTypeArg?: string, roleArg?: any, usersListArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createComposeVAppParams(allEULAsAcceptedArg?: boolean, deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, linkedCloneArg?: boolean, nameArg?: string, powerOnArg?: boolean, sourcedItemArg?: Array<any>, vAppParentArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGatewayFeatures(networkServiceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createAllocatedIpAddress(allocationTypeArg?: string, ipAddressArg?: string, isDeployedArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCapacity(allocatedArg?: number, limitArg?: number, unitsArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRoleReferences(roleReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultResourceClassRecord(metadataArg?: any, mimeTypeArg?: string, nameArg?: string, nidArg?: string, serviceArg?: string, urlTemplateArg?: string, urnPatternArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createLBPoolHealthCheck(healthThresholdArg?: string, intervalArg?: string, modeArg?: string, timeoutArg?: string, unhealthThresholdArg?: string, uriArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultVMRecord(catalogNameArg?: string, containerArg?: string, containerNameArg?: string, guestOsArg?: string, hardwareVersionArg?: number, isBusyArg?: boolean, isDeletedArg?: boolean, isDeployedArg?: boolean, isInMaintenanceModeArg?: boolean, isPublishedArg?: boolean, isVAppTemplateArg?: boolean, memoryMBArg?: number, metadataArg?: any, nameArg?: string, numberOfCpusArg?: number, statusArg?: string, storageProfileNameArg?: string, vdcArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createIpsecVpnService(externalIpAddressArg?: string, ipsecVpnTunnelArg?: Array<any>, isEnabledArg?: boolean, publicIpAddressArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createUsersList(userReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createLBPoolServicePort(algorithmArg?: string, healthCheckArg?: Array<any>, healthCheckPortArg?: string, isEnabledArg?: boolean, portArg?: string, protocolArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRelocateParams(datastoreArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createFirewallService(defaultActionArg?: string, firewallRuleArg?: Array<any>, isEnabledArg?: boolean, logDefaultActionArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNetworkConfiguration(backwardCompatibilityModeArg?: boolean, featuresArg?: any, fenceModeArg?: string, ipScopeArg?: any, ipScopesArg?: any, parentNetworkArg?: any, retainNetInfoAcrossDeploymentsArg?: boolean, routerInfoArg?: any, syslogServerSettingsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultDatastoreRecord(datastoreTypeArg?: string, isDeletedArg?: boolean, isEnabledArg?: boolean, metadataArg?: any, morefArg?: string, nameArg?: string, numberOfProviderVdcsArg?: number, provisionedStorageMBArg?: number, requestedStorageMBArg?: number, storageMBArg?: number, storageUsedMBArg?: number, vcArg?: string, vcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminServiceRecord(enabledArg?: boolean, exchangeArg?: string, isAuthorizationEnabledArg?: boolean, metadataArg?: any, nameArg?: string, namespaceArg?: string, priorityArg?: number, routingKeyArg?: string, vendorArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createReferences(nameArg?: string, pageArg?: number, pageSizeArg?: number, referenceArg?: Array<any>, totalArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrganizationReference(nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGatewayConfiguration(backwardCompatibilityModeArg?: boolean, edgeGatewayServiceConfigurationArg?: any, gatewayBackingConfigArg?: string, gatewayInterfacesArg?: any, haEnabledArg?: boolean, useDefaultRouteForDnsRelayArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgGeneralSettings(canPublishCatalogsArg?: boolean, canPublishExternallyArg?: boolean, canSubscribeArg?: boolean, delayAfterPowerOnSecondsArg?: number, deployedVMQuotaArg?: number, storedVmQuotaArg?: number, useServerBootSequenceArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOwner(userArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createInstantiateOvfParams(allEULAsAcceptedArg?: boolean, deployArg?: boolean, descriptionArg?: string, instantiateOvfPropertyArg?: Array<any>, instantiateVmParamsArg?: Array<any>, instantiationParamsArg?: any, nameArg?: string, networkMappingArg?: Array<any>, powerOnArg?: boolean, transferFormatArg?: string, vAppParentArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCatalogsList(catalogReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createMetadataEntry(domainArg?: any, keyArg?: string, typedValueArg?: any, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createLBPersistence(cookieModeArg?: string, cookieNameArg?: string, methodArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createHistoricUsage(metricSeriesArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgGuestPersonalizationSettings(accountOrganizationalUnitArg?: string, allowDomainSettingsArg?: boolean, domainNameArg?: string, domainPasswordArg?: string, domainUsernameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createContainer(nameArg?: string, pageArg?: number, pageSizeArg?: number, totalArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRuntimeInfoSection(infoArg?: any, requiredArg?: boolean, vMWareToolsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVMWareTools(versionArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createKeystoreUpdateParams(fileSizeArg?: number, passwordArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createEntityLink(nameArg?: string, relArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createMetadataNumberValue(valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createLBVirtualServerServiceProfile(isEnabledArg?: boolean, persistenceArg?: any, portArg?: string, protocolArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createProtocols(anyArg?: boolean, icmpArg?: boolean, otherArg?: string, tcpArg?: boolean, udpArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createKeystoreUploadSocket(taskArg?: any, uploadLocationArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgVAppTemplateLeaseSettings(deleteOnStorageLeaseExpirationArg?: boolean, storageLeaseSecondsArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultProviderVdcResourcePoolRelationRecord(cpuReservationAllocationMhzArg?: number, cpuReservationLimitMhzArg?: number, isEnabledArg?: boolean, isPrimaryArg?: boolean, memoryReservationAllocationMBArg?: number, memoryReservationLimitMBArg?: number, metadataArg?: any, nameArg?: string, numberOfVMsArg?: number, providerVdcArg?: string, resourcePoolMorefArg?: string, vcArg?: string, vcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createLeaseSettingsSection(deploymentLeaseExpirationArg?: any, deploymentLeaseInSecondsArg?: number, infoArg?: any, requiredArg?: boolean, storageLeaseExpirationArg?: any, storageLeaseInSecondsArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createMetadataDateTimeValue(valueArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultVMWProviderVdcRecord(cpuAllocationMhzArg?: number, cpuLimitMhzArg?: number, cpuUsedMhzArg?: number, isBusyArg?: boolean, isDeletedArg?: boolean, isEnabledArg?: boolean, memoryAllocationMBArg?: number, memoryLimitMBArg?: number, memoryUsedMBArg?: number, metadataArg?: any, nameArg?: string, numberOfDatastoresArg?: number, numberOfStorageProfilesArg?: number, numberOfVdcsArg?: number, statusArg?: string, storageAllocationMBArg?: number, storageLimitMBArg?: number, storageUsedMBArg?: number, vcpuRatingMhzArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createIpScopes(ipScopeArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminShadowVMRecord(datastoreNameArg?: string, isBusyArg?: boolean, isDeletedArg?: boolean, isPublishedArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, primaryVAppNameArg?: string, primaryVAppTemplateArg?: string, primaryVMArg?: string, primaryVMCatalogArg?: string, primaryVMOwnerArg?: string, primaryVmNameArg?: string, shadowVAppArg?: string, statusArg?: string, vcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSourcedVmInstantiationParams(hardwareCustomizationArg?: any, localityParamsArg?: any, sourceArg?: any, storageProfileArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVendorTemplateAttributes(keyArg?: string, nameArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVmAffinityRules(vmAffinityRuleArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRootComputeCapacity(cpuArg?: any, isElasticArg?: boolean, isHAArg?: boolean, memoryArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRelativeTime(intervalArg?: number, unitArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultUserRecord(deployedVMQuotaArg?: number, fullNameArg?: string, identityProviderTypeArg?: string, isEnabledArg?: boolean, isLdapUserArg?: boolean, metadataArg?: any, nameArg?: string, numberOfDeployedVMsArg?: number, numberOfStoredVMsArg?: number, storedVMQuotaArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRoleParams(descriptionArg?: string, nameArg?: string, operationKeyArg?: string, rightReferencesArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminGroupRecord(identityProviderTypeArg?: string, isReadOnlyArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, roleNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVCloudExtension(requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCatalogStorageProfiles(vdcStorageProfileArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGatewayIpsecVpnEndpoint(networkArg?: any, publicIpArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createFirewallRuleProtocols(anyArg?: boolean, icmpArg?: boolean, otherArg?: string, tcpArg?: boolean, udpArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgs(orgArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createUploadVAppTemplateParams(descriptionArg?: string, manifestRequiredArg?: boolean, nameArg?: string, sourceHrefArg?: string, transferFormatArg?: string, vdcStorageProfileArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultResourceClassActionRecord(httpMethodArg?: string, metadataArg?: any, nameArg?: string, resourceClassArg?: string, urlPatternArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminVAppNetworkRecord(dns1Arg?: string, dns2Arg?: string, dnsSuffixArg?: string, gatewayArg?: string, isBusyArg?: boolean, isIpScopeInheritedArg?: boolean, metadataArg?: any, nameArg?: string, netmaskArg?: string, orgArg?: string, vAppArg?: string, vappNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVersions(versionArg?: Array<string>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createFilesList(fileArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createServiceData(descriptionArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, vendorArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSnapshotSection(infoArg?: any, requiredArg?: boolean, snapshotArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultConditionRecord(detailsArg?: string, metadataArg?: any, objectArg?: string, objectTypeArg?: string, occurenceDateArg?: any, severityArg?: string, summaryArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNetworkConnectionSection(infoArg?: any, networkConnectionArg?: Array<any>, primaryNetworkConnectionIndexArg?: number, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createFileUploadSocket(taskArg?: any, uploadLocationArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSupportedOperatingSystemsInfo(operatingSystemFamilyInfoArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createScreenTicket(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRecomposeVAppParams(allEULAsAcceptedArg?: boolean, createItemArg?: Array<any>, deleteItemArg?: Array<any>, deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, linkedCloneArg?: boolean, nameArg?: string, powerOnArg?: boolean, sourcedItemArg?: Array<any>, vAppParentArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createDeployVAppParams(deploymentLeaseSecondsArg?: number, forceCustomizationArg?: boolean, powerOnArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createTrustStoreUpdateParams(fileSizeArg?: number, passwordArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createParams(descriptionArg?: string, nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createFirewallRule(descriptionArg?: string, destinationIpArg?: string, destinationPortRangeArg?: string, destinationVmArg?: any, directionArg?: string, enableLoggingArg?: boolean, icmpSubTypeArg?: string, isEnabledArg?: boolean, matchOnTranslateArg?: boolean, policyArg?: string, portArg?: number, protocolsArg?: any, sourceIpArg?: string, sourcePortArg?: number, sourcePortRangeArg?: string, sourceVmArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultRightRecord(categoryArg?: string, metadataArg?: any, nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createProviderVdcStorageProfileParams(capacityTotalArg?: number, capacityUsedArg?: number, descriptionArg?: string, enabledArg?: boolean, nameArg?: string, operationKeyArg?: string, unitsArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminEventRecord(entityArg?: string, entityNameArg?: string, entityTypeArg?: string, eventIdArg?: string, eventStatusArg?: number, eventTypeArg?: string, metadataArg?: any, orgArg?: string, orgNameArg?: string, productVersionArg?: string, serviceNamespaceArg?: string, timeStampArg?: any, userNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVsToVmxMap(entryArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminMediaRecord(catalogArg?: string, catalogItemArg?: string, catalogNameArg?: string, creationDateArg?: any, isBusyArg?: boolean, isPublishedArg?: boolean, isVdcEnabledArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, ownerArg?: string, ownerNameArg?: string, statusArg?: string, storageBArg?: number, storageProfileNameArg?: string, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createProviderVdcStorageProfiles(providerVdcStorageProfileArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNetworkConnection(externalIpAddressArg?: string, ipAddressArg?: string, ipAddressAllocationModeArg?: string, isConnectedArg?: boolean, mACAddressArg?: string, needsCustomizationArg?: boolean, networkArg?: string, networkConnectionIndexArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createLoadBalancerVirtualServer(descriptionArg?: string, interfaceArg?: any, ipAddressArg?: string, isEnabledArg?: boolean, loadBalancerTemplatesArg?: Array<any>, loggingArg?: boolean, nameArg?: string, poolArg?: string, serviceProfileArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createLocalityParams(resourceEntityArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createFile(bytesTransferredArg?: number, checksumArg?: string, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, sizeArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createDisk(instanceIdArg?: string, sizeArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgPasswordPolicySettings(accountLockoutEnabledArg?: boolean, accountLockoutIntervalMinutesArg?: number, invalidLoginsBeforeLockoutArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createExternalNatIpEntry(destinationNatIpArg?: string, sourceNatIpArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultRoleRecord(isReadOnlyArg?: boolean, metadataArg?: any, nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgEmailSettings(alertEmailToArg?: Array<string>, defaultSubjectPrefixArg?: string, fromEmailAddressArg?: string, isAlertEmailToAllAdminsArg?: boolean, isDefaultOrgEmailArg?: boolean, isDefaultSmtpServerArg?: boolean, smtpServerSettingsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultProviderVdcStorageProfileRecord(isEnabledArg?: boolean, metadataArg?: any, nameArg?: string, numberOfConditionsArg?: number, providerVdcArg?: string, storageProfileMorefArg?: string, storageProvisionedMBArg?: number, storageRequestedMBArg?: number, storageTotalMBArg?: number, storageUsedMBArg?: number, vcArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCreateVdcParams(allocationModelArg?: string, computeCapacityArg?: any, descriptionArg?: string, isEnabledArg?: boolean, isThinProvisionArg?: boolean, nameArg?: string, networkPoolReferenceArg?: any, networkQuotaArg?: number, nicQuotaArg?: number, overCommitAllowedArg?: boolean, providerVdcReferenceArg?: any, resourceGuaranteedCpuArg?: number, resourceGuaranteedMemoryArg?: number, usesFastProvisioningArg?: boolean, vCpuInMhzArg?: number, vdcStorageProfileArg?: Array<any>, vmQuotaArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createProviderVdcCapacity(allocationArg?: number, overheadArg?: number, reservedArg?: number, totalArg?: number, unitsArg?: string, usedArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultApiDefinitionRecord(apiVendorArg?: string, entryPointArg?: string, metadataArg?: any, nameArg?: string, namespaceArg?: string, serviceArg?: string, serviceNameArg?: string, serviceNamespaceArg?: string, serviceVendorArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultFileDescriptorRecord(apiDefinitionArg?: string, apiNameArg?: string, apiNamespaceArg?: string, apiVendorArg?: string, fileMimeTypeArg?: string, fileUrlArg?: string, metadataArg?: any, nameArg?: string, serviceArg?: string, serviceNameArg?: string, serviceNamespaceArg?: string, serviceVendorArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createLBPoolMember(ipAddressArg?: string, servicePortArg?: Array<any>, weightArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createAdminVdcParams(allocationModelArg?: string, availableNetworksArg?: any, capabilitiesArg?: any, computeCapacityArg?: any, descriptionArg?: string, isEnabledArg?: boolean, isThinProvisionArg?: boolean, nameArg?: string, networkPoolReferenceArg?: any, networkQuotaArg?: number, nicQuotaArg?: number, operationKeyArg?: string, overCommitAllowedArg?: boolean, providerVdcReferenceArg?: any, resourceEntitiesArg?: any, resourceGuaranteedCpuArg?: number, resourceGuaranteedMemoryArg?: number, statusArg?: number, storageCapacityArg?: any, usedNetworkCountArg?: number, usesFastProvisioningArg?: boolean, vCpuInMhzArg?: number, vdcStorageProfilesArg?: any, vendorServicesArg?: any, vmQuotaArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOperatingSystemFamilyInfo(nameArg?: string, operatingSystemArg?: Array<any>, operatingSystemFamilyIdArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultExternalLocalizationRecord(keyArg?: string, localeArg?: string, metadataArg?: any, serviceNamespaceArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createIpsecVpnTunnel(descriptionArg?: string, encryptionProtocolArg?: string, errorDetailsArg?: string, ipsecVpnPeerArg?: any, isEnabledArg?: boolean, isOperationalArg?: boolean, mtuArg?: number, nameArg?: string, peerIpAddressArg?: string, peerNetworkAddressArg?: string, peerNetworkMaskArg?: string, sharedSecretArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createLoadBalancerService(isEnabledArg?: boolean, poolArg?: Array<any>, virtualServerArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgVdcNetworkParams(configurationArg?: any, descriptionArg?: string, edgeGatewayArg?: any, isSharedArg?: boolean, nameArg?: string, operationKeyArg?: string, serviceConfigArg?: any, statusArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCertificateUploadSocket(taskArg?: any, uploadLocationArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminFileDescriptorRecord(apiDefinitionArg?: string, apiNameArg?: string, apiNamespaceArg?: string, apiVendorArg?: string, fileMimeTypeArg?: string, fileUrlArg?: string, metadataArg?: any, nameArg?: string, serviceArg?: string, serviceNameArg?: string, serviceNamespaceArg?: string, serviceVendorArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createStaticRoutingService(isEnabledArg?: boolean, staticRouteArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCurrentUsage(metricArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCloneMediaParams(descriptionArg?: string, isSourceDeleteArg?: boolean, nameArg?: string, sourceArg?: any, vdcStorageProfileArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultTaskRecord(endDateArg?: any, metadataArg?: any, nameArg?: string, objectArg?: string, objectNameArg?: string, objectTypeArg?: string, orgArg?: string, orgNameArg?: string, ownerNameArg?: string, serviceNamespaceArg?: string, startDateArg?: any, statusArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createMetadataStringValue(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultDvSwitchRecord(isVCEnabledArg?: boolean, metadataArg?: any, morefArg?: string, nameArg?: string, vcArg?: string, vcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCapabilities(supportedHardwareVersionsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGatewayParams(configurationArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, statusArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createDhcpPoolService(defaultLeaseTimeArg?: number, highIpAddressArg?: string, isEnabledArg?: boolean, lowIpAddressArg?: string, maxLeaseTimeArg?: number, networkArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSimpleMetric(nameArg?: string, unitArg?: string, valueArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRightReferences(rightReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createIpsecVpnSubnet(gatewayArg?: string, nameArg?: string, netmaskArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgLdapUserAttributes(emailArg?: string, fullNameArg?: string, givenNameArg?: string, groupBackLinkIdentifierArg?: string, groupMembershipIdentifierArg?: string, objectClassArg?: string, objectIdentifierArg?: string, surnameArg?: string, telephoneArg?: string, userNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createAdminOrgParams(catalogsArg?: any, descriptionArg?: string, fullNameArg?: string, groupsArg?: any, isEnabledArg?: boolean, nameArg?: string, networksArg?: any, operationKeyArg?: string, settingsArg?: any, usersArg?: any, vdcsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVdcs(vdcArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVdcStorageProfileParams(defaultArg?: boolean, enabledArg?: boolean, limitArg?: number, providerVdcStorageProfileArg?: any, unitsArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSspiKeytabUpdateParams(fileSizeArg?: number, sspiServiceProviderNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultNetworkPoolRecord(isBusyArg?: boolean, metadataArg?: any, nameArg?: string, networkPoolTypeArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNatService(externalIpArg?: string, isEnabledArg?: boolean, natRuleArg?: Array<any>, natTypeArg?: string, policyArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVendorServices(edgeGatewayServicesArg?: Array<any>, networkServicesArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgLeaseSettings(deleteOnStorageLeaseExpirationArg?: boolean, deploymentLeaseSecondsArg?: number, storageLeaseSecondsArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createDiskAttachOrDetachParams(busNumberArg?: number, diskArg?: any, unitNumberArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminVAppTemplateRecord(catalogArg?: string, catalogItemArg?: string, catalogNameArg?: string, creationDateArg?: any, isBusyArg?: boolean, isDeployedArg?: boolean, isEnabledArg?: boolean, isExpiredArg?: boolean, isGoldMasterArg?: boolean, isPublishedArg?: boolean, isVdcEnabledArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, ownerArg?: string, ownerNameArg?: string, statusArg?: string, storageProfileNameArg?: string, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVmQuestionAnswer(choiceIdArg?: number, questionIdArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGatewayIpsecVpnService(endpointArg?: Array<any>, isEnabledArg?: boolean, tunnelArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createTimeSeriesMetric(expectedIntervalArg?: number, nameArg?: string, sampleArg?: Array<any>, unitArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCopyOrMoveCatalogItemParams(descriptionArg?: string, nameArg?: string, sourceArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createMetadataDomainTag(valueArg?: string, visibilityArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVCloud(descriptionArg?: string, nameArg?: string, networksArg?: any, operationKeyArg?: string, organizationReferencesArg?: any, providerVdcReferencesArg?: any, rightReferencesArg?: any, roleReferencesArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVsToVmxMapEntry(biosUuidArg?: string, datastorePathArg?: string, storageProfileArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultApiFilterRecord(metadataArg?: any, serviceArg?: string, urlPatternArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNetworkServiceInsertion(categoryArg?: string, categoryTypeArg?: string, nameArg?: string, vendorTemplatesArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGatewayDhcpService(isEnabledArg?: boolean, poolArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createTaskParams(cancelRequestedArg?: boolean, descriptionArg?: string, detailsArg?: string, endTimeArg?: any, errorArg?: any, expiryTimeArg?: any, nameArg?: string, operationArg?: string, operationKeyArg?: string, operationNameArg?: string, organizationArg?: any, ownerArg?: any, paramsArg?: any, progressArg?: number, serviceNamespaceArg?: string, startTimeArg?: any, statusArg?: string, userArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVdcTemplateSpecificationGatewayConfiguration(gatewayArg?: any, networkArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSspiKeytabUploadSocket(taskArg?: any, uploadLocationArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNatRule(descriptionArg?: string, gatewayNatRuleArg?: any, isEnabledArg?: boolean, oneToOneBasicRuleArg?: any, oneToOneVmRuleArg?: any, portForwardingRuleArg?: any, ruleTypeArg?: string, vmRuleArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNetworkPool(descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, statusArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createDiskParams(busSubTypeArg?: string, busTypeArg?: string, descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, ownerArg?: any, sizeArg?: number, statusArg?: number, storageProfileArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNetworkConfigSection(infoArg?: any, networkConfigArg?: Array<any>, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createUserParams(alertEmailArg?: string, alertEmailPrefixArg?: string, deployedVmQuotaArg?: number, descriptionArg?: string, emailAddressArg?: string, fullNameArg?: string, groupReferencesArg?: any, iMArg?: string, isAlertEnabledArg?: boolean, isDefaultCachedArg?: boolean, isEnabledArg?: boolean, isExternalArg?: boolean, isGroupRoleArg?: boolean, isLockedArg?: boolean, nameArg?: string, nameInSourceArg?: string, operationKeyArg?: string, passwordArg?: string, providerTypeArg?: string, roleArg?: any, storedVmQuotaArg?: number, telephoneArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createProviderVdcReferences(providerVdcReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCustomOrgLdapSettings(authenticationMechanismArg?: string, connectorTypeArg?: string, groupAttributesArg?: any, groupSearchBaseArg?: string, hostNameArg?: string, isGroupSearchBaseEnabledArg?: boolean, isSslArg?: boolean, isSslAcceptAllArg?: boolean, passwordArg?: string, portArg?: number, realmArg?: string, searchBaseArg?: string, useExternalKerberosArg?: boolean, userAttributesArg?: any, userNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultMediaRecord(catalogArg?: string, catalogItemArg?: string, catalogNameArg?: string, creationDateArg?: any, isBusyArg?: boolean, isPublishedArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, ownerArg?: string, ownerNameArg?: string, statusArg?: string, storageBArg?: number, storageProfileNameArg?: string, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createAbsoluteTime(timeArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSupportedHardwareVersions(supportedHardwareVersionArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNicIpEntry(destinationNicIpArg?: string, sourceNicIpArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSubAllocation(edgeGatewayArg?: any, ipRangesArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createResourceEntities(resourceEntityArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGroupsList(groupReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createMksTicket(hostArg?: string, portArg?: number, ticketArg?: string, vmxArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminApiDefinitionRecord(apiVendorArg?: string, entryPointArg?: string, metadataArg?: any, nameArg?: string, namespaceArg?: string, serviceArg?: string, serviceNameArg?: string, serviceNamespaceArg?: string, serviceVendorArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOvfToVdcNetworkEntry(ovfNetworkArg?: string, vdcNetworkArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultResourcePoolVMRecord(containerNameArg?: string, guestOsArg?: string, hardwareVersionArg?: number, isBusyArg?: boolean, isDeployedArg?: boolean, metadataArg?: any, nameArg?: string, statusArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultVAppRecord(creationDateArg?: any, isBusyArg?: boolean, isDeployedArg?: boolean, isEnabledArg?: boolean, isExpiredArg?: boolean, isInMaintenanceModeArg?: boolean, isPublicArg?: boolean, metadataArg?: any, nameArg?: string, ownerNameArg?: string, statusArg?: string, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminTaskRecord(cellNameArg?: string, endDateArg?: any, hasOwnerArg?: boolean, metadataArg?: any, nameArg?: string, objectArg?: string, objectNameArg?: string, objectTypeArg?: string, orgArg?: string, orgNameArg?: string, ownerArg?: string, ownerNameArg?: string, serviceNamespaceArg?: string, startDateArg?: any, statusArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultPortgroupRecord(isVCEnabledArg?: boolean, metadataArg?: any, morefArg?: string, nameArg?: string, networkArg?: string, networkNameArg?: string, portgroupTypeArg?: string, scopeTypeArg?: number, vcArg?: string, vcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultOrgVdcRecord(cpuAllocationMhzArg?: number, cpuLimitMhzArg?: number, cpuUsedMhzArg?: number, isBusyArg?: boolean, isEnabledArg?: boolean, isSystemVdcArg?: boolean, memoryAllocationMBArg?: number, memoryLimitMBArg?: number, memoryUsedMBArg?: number, metadataArg?: any, nameArg?: string, numberOfDatastoresArg?: number, numberOfDisksArg?: number, numberOfMediaArg?: number, numberOfStorageProfilesArg?: number, numberOfVAppTemplatesArg?: number, numberOfVAppsArg?: number, orgNameArg?: string, providerVdcArg?: string, providerVdcNameArg?: string, statusArg?: string, storageAllocationMBArg?: number, storageLimitMBArg?: number, storageUsedMBArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVmSelection(ipTypeArg?: string, vAppScopedVmIdArg?: string, vmNicIdArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRequestOperationParams(messageArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createIpRanges(ipRangeArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVdcReferences(vdcReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultCatalogItemRecord(catalogArg?: string, catalogNameArg?: string, creationDateArg?: any, entityArg?: string, entityNameArg?: string, entityTypeArg?: string, isExpiredArg?: boolean, isPublishedArg?: boolean, isVdcEnabledArg?: boolean, metadataArg?: any, nameArg?: string, ownerArg?: string, ownerNameArg?: string, statusArg?: string, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminCatalogRecord(creationDateArg?: any, isPublishedArg?: boolean, isSharedArg?: boolean, metadataArg?: any, nameArg?: string, numberOfMediaArg?: number, numberOfTemplatesArg?: number, orgArg?: string, orgNameArg?: string, ownerArg?: string, ownerNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRouterInfo(externalIpArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminVMRecord(catalogNameArg?: string, containerArg?: string, containerNameArg?: string, datastoreNameArg?: string, guestOsArg?: string, hardwareVersionArg?: number, hostNameArg?: string, isDeletedArg?: boolean, isDeployedArg?: boolean, isPublishedArg?: boolean, isVAppTemplateArg?: boolean, isVdcEnabledArg?: boolean, memoryMBArg?: number, metadataArg?: any, morefArg?: string, nameArg?: string, networkNameArg?: string, numberOfCpusArg?: number, orgArg?: string, statusArg?: string, storageProfileNameArg?: string, vcArg?: string, vdcArg?: string, vmToolsVersionArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultOrgVdcResourcePoolRelationRecord(metadataArg?: any, resourcePoolMorefArg?: string, vcArg?: string, vdcArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgLdapGroupAttributes(backLinkIdentifierArg?: string, groupNameArg?: string, membershipArg?: string, membershipIdentifierArg?: string, objectClassArg?: string, objectIdentifierArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminOrgNetworkRecord(dns1Arg?: string, dns2Arg?: string, gatewayArg?: string, ipScopeIdArg?: string, isBusyArg?: boolean, isIpScopeInheritedArg?: boolean, metadataArg?: any, nameArg?: string, netmaskArg?: string, networkPoolArg?: string, networkPoolNameArg?: string, orgArg?: string, orgNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCertificateUpdateParams(fileSizeArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCatalogItems(catalogItemArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVmCapabilities(cpuHotAddEnabledArg?: boolean, memoryHotAddEnabledArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createInstantiateVAppTemplateParams(allEULAsAcceptedArg?: boolean, deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, isSourceDeleteArg?: boolean, linkedCloneArg?: boolean, nameArg?: string, powerOnArg?: boolean, sourceArg?: any, sourcedVmInstantiationParamsArg?: Array<any>, vAppParentArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultOrgNetworkRecord(dns1Arg?: string, dns2Arg?: string, dnsSuffixArg?: string, gatewayArg?: string, ipScopeIdArg?: string, isBusyArg?: boolean, isIpScopeInheritedArg?: boolean, metadataArg?: any, nameArg?: string, netmaskArg?: string, networkPoolArg?: string, networkPoolNameArg?: string, orgArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAdminVmDiskRelationRecord(diskArg?: string, metadataArg?: any, vdcArg?: string, vmArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAllocatedExternalAddressRecord(ipAddressArg?: string, linkedNetworkArg?: string, metadataArg?: any, networkArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createInstantiateVAppParams(deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, isSourceDeleteArg?: boolean, linkedCloneArg?: boolean, nameArg?: string, powerOnArg?: boolean, sourceArg?: any, sourcedVmInstantiationParamsArg?: Array<any>, vAppParentArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVendorTemplate(nameArg?: string, vendorTemplateAttributesArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultResourcePoolRecord(isDeletedArg?: boolean, metadataArg?: any, morefArg?: string, nameArg?: string, vcArg?: string, vcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createProperty(keyArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createAvailableNetworks(networkArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultVAppOrgNetworkRelationRecord(configurationTypeArg?: string, metadataArg?: any, nameArg?: string, orgArg?: string, orgNetworkArg?: string, orgNetworkNameArg?: string, ownerNameArg?: string, statusArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createTaskOperationList(operationArg?: Array<string>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createUndeployVAppParams(undeployPowerActionArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVmPendingQuestion(choicesArg?: Array<any>, questionArg?: string, questionIdArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSmtpServerSettings(hostArg?: string, isUseAuthenticationArg?: boolean, passwordArg?: string, portArg?: number, usernameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createOrgList(orgArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createProductSectionList(productSectionArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createIpsecVpnRemotePeer(nameArg?: string, vcdOrganizationArg?: string, vcdUrlArg?: string, vcdUsernameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultCatalogRecord(creationDateArg?: any, isPublishedArg?: boolean, isSharedArg?: boolean, metadataArg?: any, nameArg?: string, numberOfMediaArg?: number, numberOfVAppTemplatesArg?: number, orgNameArg?: string, ownerArg?: string, ownerNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createFileDescriptorData(descriptionArg?: string, fileArg?: any, operationKeyArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createSubAllocations(subAllocationArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNatOneToOneBasicRule(externalIpAddressArg?: string, internalIpAddressArg?: string, mappingModeArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultStrandedUserRecord(fullNameArg?: string, isInSyncArg?: boolean, metadataArg?: any, nameArg?: string, numberOfDeployedVMsArg?: number, numberOfStoredVMsArg?: number, orgArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createCloneVAppParams(deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, isSourceDeleteArg?: boolean, linkedCloneArg?: boolean, nameArg?: string, powerOnArg?: boolean, sourceArg?: any, sourcedVmInstantiationParamsArg?: Array<any>, vAppParentArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createLink(nameArg?: string, relArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultGroupRecord(identityProviderTypeArg?: string, isReadOnlyArg?: boolean, metadataArg?: any, nameArg?: string, roleNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNatPortForwardingRule(externalIpAddressArg?: string, externalPortArg?: number, internalIpAddressArg?: string, internalPortArg?: number, protocolArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createGuestCustomizationSection(adminAutoLogonCountArg?: number, adminAutoLogonEnabledArg?: boolean, adminPasswordArg?: string, adminPasswordAutoArg?: boolean, adminPasswordEnabledArg?: boolean, changeSidArg?: boolean, computerNameArg?: string, customizationScriptArg?: string, domainNameArg?: string, domainUserNameArg?: string, domainUserPasswordArg?: string, enabledArg?: boolean, infoArg?: any, joinDomainEnabledArg?: boolean, machineObjectOUArg?: string, requiredArg?: boolean, resetPasswordRequiredArg?: boolean, useOrgSettingsArg?: boolean, virtualMachineIdArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createNetworks(networkArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultBlockingTaskRecord(creationDateArg?: any, expirationTimeArg?: any, hasOwnerArg?: boolean, jobStatusArg?: string, metadataArg?: any, operationNameArg?: string, originatingOrgArg?: string, originatingOrgNameArg?: string, ownerArg?: string, ownerNameArg?: string, statusArg?: string, taskArg?: string, timeoutActionArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createIpScope(allocatedIpAddressesArg?: any, dns1Arg?: string, dns2Arg?: string, dnsSuffixArg?: string, gatewayArg?: string, ipRangesArg?: any, isEnabledArg?: boolean, isInheritedArg?: boolean, netmaskArg?: string, subAllocationsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultOrgRecord(canPublishCatalogsArg?: boolean, deployedVMQuotaArg?: number, displayNameArg?: string, isEnabledArg?: boolean, isReadOnlyArg?: boolean, metadataArg?: any, nameArg?: string, numberOfCatalogsArg?: number, numberOfDisksArg?: number, numberOfGroupsArg?: number, numberOfVAppsArg?: number, numberOfVdcsArg?: number, storedVMQuotaArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createExternalNatIpMap(entryArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultOrgVdcNetworkRecord(connectedToArg?: string, defaultGatewayArg?: string, dns1Arg?: string, dns2Arg?: string, dnsSuffixArg?: string, isBusyArg?: boolean, isIpScopeInheritedArg?: boolean, isSharedArg?: boolean, linkTypeArg?: number, metadataArg?: any, nameArg?: string, netmaskArg?: string, vdcArg?: string, vdcNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createInstantiateVmHardwareCustomizationParams(coresPerSocketArg?: number, diskArg?: Array<any>, memorySizeArg?: number, numberOfCpusArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createRasdItemsList(itemArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultAclRuleRecord(metadataArg?: any, nameArg?: string, orgArg?: string, orgAccessArg?: string, principalArg?: string, principalAccessArg?: string, principalTypeArg?: string, resourceClassActionArg?: string, serviceResourceArg?: string, serviceResourceAccessArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createVdcStorageProfiles(vdcStorageProfileArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects {
	function createQueryResultStrandedItemRecord(deletionDateArg?: any, metadataArg?: any, nameArg?: string, numberOfPurgeAttemptsArg?: number, parentArg?: string, parentNameArg?: string, vimObjectTypeArg?: string): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getAdminApiFiltersAdminService(targetEntityArg?: vCloud.AdminService): Array<vCloud.AdminApiFilter>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getAdminLinksAdminService(targetEntityArg?: vCloud.AdminService): Array<vCloud.AdminServiceLink>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function updateInternalStateAdminAclRule(targetEntityArg?: vCloud.AdminAclRule): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function updateInternalStateAdminApiFilter(targetEntityArg?: vCloud.AdminApiFilter): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getAdminResourceClassesAdminService(targetEntityArg?: vCloud.AdminService): Array<vCloud.AdminResourceClass>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getAdminAclRulesAdminResourceClassAction(targetEntityArg?: vCloud.AdminResourceClassAction): Array<vCloud.AdminAclRule>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function registerResourceClassActionAdminResourceClass(targetEntityArg?: vCloud.AdminResourceClass, actionNameArg?: string, actionHttpMethodArg?: string, actionURLPatternArg?: string, actionOperationKeyArg?: string): vCloud.AdminResourceClassAction
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getContainedObjectsAdminApiDefinition(targetEntityArg?: vCloud.AdminApiDefinition): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function registerResourceClassAdminService(targetEntityArg?: vCloud.AdminService, nameArg?: string, typeArg?: string, nidArg?: string, urlTemplateArg?: string, urnPatternArg?: string, mimeTypeArg?: string): vCloud.AdminResourceClass
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function updateInternalStateAdminResourceClass(targetEntityArg?: vCloud.AdminResourceClass): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function createServiceLinkAdminService(targetEntityArg?: vCloud.AdminService, linkHrefArg?: string, relationArg?: string, resourceTypeArg?: string, mimeTypeArg?: string, resourceIdArg?: string): vCloud.AdminServiceLink
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function registerAdminResourceClassActionAdminResourceClass(targetEntityArg?: vCloud.AdminResourceClass, paramsArg?: any): vCloud.AdminResourceClassAction
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function toUserObjectAdminService(targetEntityArg?: vCloud.AdminService): vCloud.Service
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function updateInternalStateAdminServiceResource(targetEntityArg?: vCloud.AdminServiceResource): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function updateAdminService(targetEntityArg?: vCloud.AdminService, paramsArg?: any): vCloud.AdminService
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function registerAdminServiceResourceAdminResourceClass(targetEntityArg?: vCloud.AdminResourceClass, paramsArg?: any): vCloud.AdminServiceResource
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function deleteAdminApiDefinition(targetEntityArg?: vCloud.AdminApiDefinition): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getAdminApiDefinitionAdminService(targetEntityArg?: vCloud.AdminService): Array<vCloud.AdminApiDefinition>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function createRightAdminService(targetEntityArg?: vCloud.AdminService, paramsArg?: any): vCloud.Right
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getAdminServiceResourcesAdminResourceClass(targetEntityArg?: vCloud.AdminResourceClass): Array<vCloud.AdminServiceResource>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function deleteAdminFileDescriptor(targetEntityArg?: vCloud.AdminFileDescriptor): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function updateInternalStateAdminResourceClassAction(targetEntityArg?: vCloud.AdminResourceClassAction): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function updateInternalStateAdminApiDefinition(targetEntityArg?: vCloud.AdminApiDefinition): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function deleteAdminServiceResource(targetEntityArg?: vCloud.AdminServiceResource): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function deleteAdminResourceClass(targetEntityArg?: vCloud.AdminResourceClass): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function updateInternalStateAdminServiceLink(targetEntityArg?: vCloud.AdminServiceLink): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function disableAdminService(targetEntityArg?: vCloud.AdminService): vCloud.AdminService
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getRightsAdminService(targetEntityArg?: vCloud.AdminService): Array<vCloud.Right>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function checkAuthorizationAdminService(targetEntityArg?: vCloud.AdminService, paramsArg?: any): boolean
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getContainedObjectsAdminService(targetEntityArg?: vCloud.AdminService): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getAdminResourceClassActionsAdminResourceClass(targetEntityArg?: vCloud.AdminResourceClass): Array<vCloud.AdminResourceClassAction>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function updateInternalStateAdminService(targetEntityArg?: vCloud.AdminService): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function createAdminApiDefinitionAdminService(targetEntityArg?: vCloud.AdminService, paramsArg?: any): vCloud.AdminApiDefinition
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function createAdminApiFilterAdminService(targetEntityArg?: vCloud.AdminService, paramsArg?: any): vCloud.AdminApiFilter
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function updateInternalStateAdminFileDescriptor(targetEntityArg?: vCloud.AdminFileDescriptor): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function deleteAdminApiFilter(targetEntityArg?: vCloud.AdminApiFilter): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function deleteAdminServiceLink(targetEntityArg?: vCloud.AdminServiceLink): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function deleteAdminService(targetEntityArg?: vCloud.AdminService): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function createAdminFileDescriptorAdminApiDefinition(targetEntityArg?: vCloud.AdminApiDefinition, paramsArg?: any): vCloud.AdminFileDescriptor
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function createAdminLinkAdminService(targetEntityArg?: vCloud.AdminService, paramsArg?: any): vCloud.AdminServiceLink
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getContainedObjectsAdminResourceClass(targetEntityArg?: vCloud.AdminResourceClass): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function registerAdminAclRuleAdminResourceClassAction(targetEntityArg?: vCloud.AdminResourceClassAction, paramsArg?: any): vCloud.AdminAclRule
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getAdminFileDescriptorsAdminApiDefinition(targetEntityArg?: vCloud.AdminApiDefinition): Array<vCloud.AdminFileDescriptor>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function deleteAdminResourceClassAction(targetEntityArg?: vCloud.AdminResourceClassAction): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function getContainedObjectsAdminResourceClassAction(targetEntityArg?: vCloud.AdminResourceClassAction): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function deleteAdminAclRule(targetEntityArg?: vCloud.AdminAclRule): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions.service {
	function registerAdminResourceClassAdminService(targetEntityArg?: vCloud.AdminService, paramsArg?: any): vCloud.AdminResourceClass
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getMetadataAdminCatalog(targetEntityArg?: vCloud.AdminCatalog): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function addAdminOrgVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin, paramsArg?: any): vCloud.AdminOrganization
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function addUserAdminOrg(targetEntityArg?: vCloud.AdminOrganization, paramsArg?: any): vCloud.User
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getEdgeCliStatusGateway(targetEntityArg?: vCloud.Gateway): boolean
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getNetworkPoolAdminVdc(targetEntityArg?: vCloud.AdminVdc): vCloud.VmwNetworkPool
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getMetadataProviderVdc(targetEntityArg?: vCloud.ProviderVdc): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function modifyFormFactorGateway(targetEntityArg?: vCloud.Gateway, formFactorArg?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function deleteRight(targetEntityArg?: vCloud.Right): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function subscribeToExternalCatalogAdminCatalog(targetEntityArg?: vCloud.AdminCatalog, externalCatalogSubscriptionArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function resetAdminOrgVdcNetwork(targetEntityArg?: vCloud.AdminOrgVdcNetwork): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateAdminVdc(targetEntityArg?: vCloud.AdminVdc): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getDomainNamesGateway(targetEntityArg?: vCloud.Gateway): Array<string>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateAdminOrgVdcNetwork(targetEntityArg?: vCloud.AdminOrgVdcNetwork): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function unlockUser(targetEntityArg?: vCloud.User): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createEventAdminOrg(targetEntityArg?: vCloud.AdminOrganization, eventArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function addOrgAssociationAdminOrg(targetEntityArg?: vCloud.AdminOrganization, orgAssociationArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function resetLdapSspiKeytabAdminOrg(targetEntityArg?: vCloud.AdminOrganization): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getOrgAssociationByNameAdminOrg(targetEntityArg?: vCloud.AdminOrganization, orgAssociationNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function redeployGateway(targetEntityArg?: vCloud.Gateway): vCloud.Gateway
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getDisksAdminVdc(targetEntityArg?: vCloud.AdminVdc): Array<vCloud.Disk>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function toUserObjectAdminCatalog(targetEntityArg?: vCloud.AdminCatalog): vCloud.Catalog
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function findSupportedObjectsGateway(targetEntityArg?: vCloud.Gateway): Array<string>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getRolesVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin): Array<vCloud.Role>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getMetadataAdminVdc(targetEntityArg?: vCloud.AdminVdc): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateAdminVdc(targetEntityArg?: vCloud.AdminVdc): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateLdapKeyStoreAdminOrg(targetEntityArg?: vCloud.AdminOrganization, paramsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createCrlCertGateway(targetEntityArg?: vCloud.Gateway, isUploadPemArg?: boolean, pemFileLocationArg?: string, pemContentArg?: string, descArg?: string): Array<vCloud.Crl>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateLdapSspiKeytabAdminOrg(targetEntityArg?: vCloud.AdminOrganization, paramsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getAdminVdcsProviderVdc(targetEntityArg?: vCloud.ProviderVdc): Array<vCloud.AdminVdc>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function addGroupAdminOrg(targetEntityArg?: vCloud.AdminOrganization, paramsArg?: any): vCloud.Group
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateProviderVdc(targetEntityArg?: vCloud.ProviderVdc): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function toAdminExtensionObjectVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin): vCloud.HostAdminExtension
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateExternalNetwork(targetEntityArg?: vCloud.ExternalNetwork): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateGroup(targetEntityArg?: vCloud.Group): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getIpAddressesGateway(targetEntityArg?: vCloud.Gateway): Array<string>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateProviderVdcStorageProfile(targetEntityArg?: vCloud.ProviderVdcStorageProfile): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getExternalNetworksProviderVdc(targetEntityArg?: vCloud.ProviderVdc): Array<vCloud.ExternalNetwork>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateAdminVdcStorageProfile(targetEntityArg?: vCloud.AdminVdcStorageProfile): vCloud.AdminVdcStorageProfile
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function disableAdminOrg(targetEntityArg?: vCloud.AdminOrganization): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getProviderStorageProfilesProviderVdc(targetEntityArg?: vCloud.ProviderVdc): Array<vCloud.ProviderVdcStorageProfile>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getMetadataAdminOrg(targetEntityArg?: vCloud.AdminOrganization): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function resetExternalNetwork(targetEntityArg?: vCloud.ExternalNetwork): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getContainedObjectsAdminVdc(targetEntityArg?: vCloud.AdminVdc): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createDhcpIpPoolGateway(targetEntityArg?: vCloud.Gateway, paramsArg?: any): vCloud.DHCPIpPool
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getGroupsAdminOrg(targetEntityArg?: vCloud.AdminOrganization): Array<vCloud.Group>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getIpSetNamesGateway(targetEntityArg?: vCloud.Gateway): Array<string>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateStorageProfilesAdminVdc(targetEntityArg?: vCloud.AdminVdc, classesToAddArg?: Array<any>, classesToRemoveArg?: Array<any>): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createFirewallRuleForAdvancedGatewayGateway(targetEntityArg?: vCloud.Gateway, paramsArg?: any): vCloud.FirewallRule
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateAdminOrg(targetEntityArg?: vCloud.AdminOrganization): vCloud.AdminOrganization
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function deleteAdminOrg(targetEntityArg?: vCloud.AdminOrganization): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function publishCatalogAdminCatalog(targetEntityArg?: vCloud.AdminCatalog, valueArg?: boolean): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getMetadataProviderVdcStorageProfile(targetEntityArg?: vCloud.ProviderVdcStorageProfile): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getResourcePoolVimRefAdminVdc(targetEntityArg?: vCloud.AdminVdc): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateGroup(targetEntityArg?: vCloud.Group): vCloud.Group
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function deleteAdminCatalog(targetEntityArg?: vCloud.AdminCatalog): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getEntityRightsUser(targetEntityArg?: vCloud.User, entitiesArg?: Array<any>): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function deleteRole(targetEntityArg?: vCloud.Role): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function enableAdminVdc(targetEntityArg?: vCloud.AdminVdc): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateGateway(targetEntityArg?: vCloud.Gateway): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateUser(targetEntityArg?: vCloud.User): vCloud.User
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function changeOwnerAdminCatalog(targetEntityArg?: vCloud.AdminCatalog, valueArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createServiceCertGateway(targetEntityArg?: vCloud.Gateway, isUploadPemArg?: boolean, pemEncodingTextArg?: string, pemEncodingPathArg?: string, isUploadKeyArg?: boolean, privateKeyTextArg?: string, privateKeyPathArg?: string, passPhraseArg?: string, descriptionArg?: string): Array<vCloud.ServiceCertificate>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateOrgAssociationsAdminOrg(targetEntityArg?: vCloud.AdminOrganization, orgAssociationsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createOrgVdcNetworkAdminVdc(targetEntityArg?: vCloud.AdminVdc, paramsArg?: any): vCloud.AdminOrgVdcNetwork
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getGrantedRightsUser(targetEntityArg?: vCloud.User): Array<vCloud.Right>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function setSyslogServersGateway(targetEntityArg?: vCloud.Gateway, syslogIpArg?: string): vCloud.Gateway
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getContainedObjectsVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createFirewallRuleGateway(targetEntityArg?: vCloud.Gateway, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function toUserObjectAdminOrgVdcNetwork(targetEntityArg?: vCloud.AdminOrgVdcNetwork): vCloud.OrgVdcNetwork
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateAdminVdcStorageProfile(targetEntityArg?: vCloud.AdminVdcStorageProfile): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getVMWNetworkPoolsProviderVdc(targetEntityArg?: vCloud.ProviderVdc): Array<vCloud.VmwNetworkPool>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function enableFastProvisioningAdminVdc(targetEntityArg?: vCloud.AdminVdc): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getExternalNetworksVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin): Array<vCloud.ExternalNetwork>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateAdminCatalog(targetEntityArg?: vCloud.AdminCatalog): vCloud.AdminCatalog
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function addCatalogItemAdminCatalog(targetEntityArg?: vCloud.AdminCatalog, paramsArg?: any): vCloud.CatalogItem
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getAllocatedAddressesAdminOrgVdcNetwork(targetEntityArg?: vCloud.AdminOrgVdcNetwork): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createNatRuleAdvancedGateway(targetEntityArg?: vCloud.Gateway, paramsArg?: any): vCloud.NatRule
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getStorageProfilesAdminVdc(targetEntityArg?: vCloud.AdminVdc): Array<vCloud.AdminVdcStorageProfile>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getMetadataAdminVdcStorageProfile(targetEntityArg?: vCloud.AdminVdcStorageProfile): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getCatalogItemsAdminCatalog(targetEntityArg?: vCloud.AdminCatalog): Array<vCloud.CatalogItem>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateDhcpRelayConfigurationGateway(targetEntityArg?: vCloud.Gateway, ipAddrsArg?: String[], domainNamesArg?: String[], ipSetNamesArg?: String[], gatewayInterfaceArg?: string): vCloud.Gateway
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function addAdminCatalogAdminOrg(targetEntityArg?: vCloud.AdminOrganization, paramsArg?: any): vCloud.AdminCatalog
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getRightsVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin): Array<vCloud.Right>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function resetLdapCertificateAdminOrg(targetEntityArg?: vCloud.AdminOrganization): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getMetadataExternalNetwork(targetEntityArg?: vCloud.ExternalNetwork): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getOrgVdcNetworksAdminVdc(targetEntityArg?: vCloud.AdminVdc): Array<vCloud.AdminOrgVdcNetwork>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getContainedObjectsProviderVdc(targetEntityArg?: vCloud.ProviderVdc): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function deleteOrgAssociationByNameAdminOrg(targetEntityArg?: vCloud.AdminOrganization, orgAssociationNameArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getMediasAdminVdc(targetEntityArg?: vCloud.AdminVdc): Array<vCloud.Media>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getOrgAssociationsAdminOrg(targetEntityArg?: vCloud.AdminOrganization): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function addToRoleRight(targetEntityArg?: vCloud.Right, vCloudRoleIdArg?: string): vCloud.Role
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createGatewayAdminVdc(targetEntityArg?: vCloud.AdminVdc, paramsArg?: any): vCloud.Gateway
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function publishToExternalOrganizationsAdminCatalog(targetEntityArg?: vCloud.AdminCatalog, arg0?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function toAdminExtensionObjectExternalNetwork(targetEntityArg?: vCloud.ExternalNetwork): vCloud.VmwExternalNetwork
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function takeOwnershipUser(targetEntityArg?: vCloud.User): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function deleteGateway(targetEntityArg?: vCloud.Gateway): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getAdminOrganizationsVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin): Array<vCloud.AdminOrganization>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function toUserObjectAdminOrg(targetEntityArg?: vCloud.AdminOrganization): vCloud.Organization
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function enableAdminOrg(targetEntityArg?: vCloud.AdminOrganization): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getVAppsAdminVdc(targetEntityArg?: vCloud.AdminVdc): Array<vCloud.VApp>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getResourcePoolVimRefsAdminVdc(targetEntityArg?: vCloud.AdminVdc): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function deleteGroup(targetEntityArg?: vCloud.Group): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function disableFastProvisioningAdminVdc(targetEntityArg?: vCloud.AdminVdc): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateSettingsAdminOrg(targetEntityArg?: vCloud.AdminOrganization, settingsArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function deleteAdminOrgVdcNetwork(targetEntityArg?: vCloud.AdminOrgVdcNetwork): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getAdminQueryServiceVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getMetadataAuditEvent(targetEntityArg?: vCloud.AuditEvent): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function toAdminExtensionObjectProviderVdcStorageProfile(targetEntityArg?: vCloud.ProviderVdcStorageProfile): vCloud.VmwProviderVdcStorageProfile
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function disableAdminVdc(targetEntityArg?: vCloud.AdminVdc): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getUsersGroup(targetEntityArg?: vCloud.Group): Array<vCloud.User>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateRight(targetEntityArg?: vCloud.Right): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getUsersAdminOrg(targetEntityArg?: vCloud.AdminOrganization): Array<vCloud.User>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getContainedObjectsAdminOrg(targetEntityArg?: vCloud.AdminOrganization): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateGateway(targetEntityArg?: vCloud.Gateway): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function deleteFromRoleRight(targetEntityArg?: vCloud.Right, vCloudRoleIdArg?: string): vCloud.Role
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateRole(targetEntityArg?: vCloud.Role): vCloud.Role
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function toAdminExtensionObjectProviderVdc(targetEntityArg?: vCloud.ProviderVdc): vCloud.VmwProviderVdc
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getVAppTemplatesAdminVdc(targetEntityArg?: vCloud.AdminVdc): Array<vCloud.VAppTemplate>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createNatRuleLegacyGateway(targetEntityArg?: vCloud.Gateway, arg0?: any): vCloud.Gateway
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function upgradeConfigGateway(targetEntityArg?: vCloud.Gateway): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function convertGatewayToAdvancedGateway(targetEntityArg?: vCloud.Gateway): vCloud.Gateway
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function syncSyslogServerGateway(targetEntityArg?: vCloud.Gateway): vCloud.Gateway
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function toUserObjectAdminVdc(targetEntityArg?: vCloud.AdminVdc): vCloud.Vdc
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateAdminOrgVdcNetwork(targetEntityArg?: vCloud.AdminOrgVdcNetwork): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateLdapCertificateAdminOrg(targetEntityArg?: vCloud.AdminOrganization, paramsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function enableSshStatusGateway(targetEntityArg?: vCloud.Gateway, enableArg?: boolean): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function isAdvancedGateway(targetEntityArg?: vCloud.Gateway): boolean
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getGroupsUser(targetEntityArg?: vCloud.User): Array<vCloud.Group>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function regenerateFederationCertificateAdminOrg(targetEntityArg?: vCloud.AdminOrganization): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function setSshSettingsGateway(targetEntityArg?: vCloud.Gateway, userNameArg?: string, passwordArg?: string, passwordExpiryArg?: string, loginBannerArg?: string, enableArg?: boolean): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateAdminOrg(targetEntityArg?: vCloud.AdminOrganization): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function addDhcpBindingGateway(targetEntityArg?: vCloud.Gateway, paramsArg?: any): vCloud.DHCPBinding
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getAdminVdcsAdminOrg(targetEntityArg?: vCloud.AdminOrganization): Array<vCloud.AdminVdc>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getAvailableObjectsForProvidedTypeGateway(targetEntityArg?: vCloud.Gateway, paramsArg?: string): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getGatewaysAdminVdc(targetEntityArg?: vCloud.AdminVdc): Array<vCloud.Gateway>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function addAdminVdc15AdminOrg(targetEntityArg?: vCloud.AdminOrganization, paramsArg?: any): vCloud.AdminVdc
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function enableDhcpServiceGateway(targetEntityArg?: vCloud.Gateway, enableArg?: boolean): vCloud.Gateway
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createCaCertGateway(targetEntityArg?: vCloud.Gateway, isUploadPemArg?: boolean, pemFileLocationArg?: string, pemContentArg?: string, descArg?: string): Array<vCloud.CA>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function configureServicesGateway(targetEntityArg?: vCloud.Gateway, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function toUserObjectAdminVdcStorageProfile(targetEntityArg?: vCloud.AdminVdcStorageProfile): vCloud.VdcStorageProfile
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function toUserObjectVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin): vCloud.Host
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function addRoleVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin, paramsArg?: any): vCloud.Role
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function enableFirewallGateway(targetEntityArg?: vCloud.Gateway, arg0?: boolean, arg1?: string, arg2?: boolean): vCloud.Gateway
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function deleteAdminVdc(targetEntityArg?: vCloud.AdminVdc): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getMetadataAdminOrgVdcNetwork(targetEntityArg?: vCloud.AdminOrgVdcNetwork): any
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function createCsrCertGateway(targetEntityArg?: vCloud.Gateway, commonNameArg?: string, orgUnitArg?: string, orgNameArg?: string, localityArg?: string, stateOrProvinceArg?: string, countryCodeArg?: string, privateKeyArg?: string, keySizeArg?: string, descriptionArg?: string): vCloud.Csr
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateAuditEvent(targetEntityArg?: vCloud.AuditEvent): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getEdgeInterfaceNamesGateway(targetEntityArg?: vCloud.Gateway): Array<string>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function resetLdapKeyStoreAdminOrg(targetEntityArg?: vCloud.AdminOrganization): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function reapplyServicesGateway(targetEntityArg?: vCloud.Gateway): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateAdminCatalog(targetEntityArg?: vCloud.AdminCatalog): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function addAdminVdcAdminOrg(targetEntityArg?: vCloud.AdminOrganization, paramsArg?: any): vCloud.AdminVdc
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateUser(targetEntityArg?: vCloud.User): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function updateInternalStateRole(targetEntityArg?: vCloud.Role): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getUserByNameAdminOrg(targetEntityArg?: vCloud.AdminOrganization, nameArg?: string): vCloud.User
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function deleteUser(targetEntityArg?: vCloud.User): void
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getAdminCatalogsAdminOrg(targetEntityArg?: vCloud.AdminOrganization): Array<vCloud.AdminCatalog>
}

declare namespace com.vmware.library.vCloud.operation.admin {
	function getProviderVdcsVCloudHostAdmin(targetEntityArg?: vCloud.HostAdmin): Array<vCloud.ProviderVdc>
}

declare namespace com.vmware.library.vCloud.Admin.Vdc {
	function getOrganizationFromVdc(vdc?: vCloud.Vdc): vCloud.Organization
}

declare namespace com.vmware.library.vCloud.Admin.Vdc {
	function getVclHostFromVdc(vdc?: vCloud.Vdc): vCloud.Host
}

declare namespace com.vmware.library.vCloud.Admin.Vdc {
	function getAdminExtensionFromVdc(vdc?: vCloud.Vdc): vCloud.HostAdmin
}

declare namespace com.vmware.library.vCloud.Admin.Vdc {
	function getProviderVdc(vdc?: vCloud.Vdc): vCloud.ProviderVdc
}

declare namespace com.vmware.library.vCloud.common {
	function createLeaseSettingsSection(deploymentLeaseType?: string, deploymentLeaseValue?: number, storageLeaseType?: string, storageLeaseValue?: number): any
}

declare namespace com.vmware.library.vCloud.common {
	function createVAppNetworkConfiguration(href?: string, type?: string, configuration?: any, description?: string, isDeployed?: boolean, networkName?: string): any
}

declare namespace com.vmware.library.vCloud.common {
	function updateParent(entity?: any): void
}

declare namespace com.vmware.library.vCloud.common {
	function getEnumValue(enumValue?: any): string
}

declare namespace com.vmware.library.vCloud.common {
	function createVlanIdRanges(vlanIdRanges?: Array<string>): Array<any>
}

declare namespace com.vmware.library.vCloud.common {
	function createOvfMsg(msgId?: string, value?: string): any
}

declare namespace com.vmware.library.vCloud.common {
	function validateArrayNotEmpty(array?: Array<any>): string
}

declare namespace com.vmware.library.vCloud.common {
	function getAdminHostFromHost(host?: vCloud.Host): vCloud.HostAdmin
}

declare namespace com.vmware.library.vCloud.common {
	function createAccessSettingForUser(accessLevel?: vCloud.AccessLevelType, subject?: vCloud.User): any
}

declare namespace com.vmware.library.vCloud.common {
	function evalScriptExpression(expression?: string): any
}

declare namespace com.vmware.library.vCloud.common {
	function validateIp(ip?: string, mandatory?: boolean): string
}

declare namespace com.vmware.library.vCloud.common {
	function createCompositionItemParams(vm?: vCloud.VM, vmFullName?: string, vmComputerName?: string, vmNic1Network?: vCloud.OrgNetwork, vmNic1IPAssignment?: vCloud.IpAddressAllocationModeType, vmNic1IPAddress?: string, vmNic2Network?: vCloud.OrgNetwork, vmNic2IPAssignment?: vCloud.IpAddressAllocationModeType, vmNic2IPAddress?: string, vmNic3Network?: vCloud.OrgNetwork, vmNic3IPAssignment?: vCloud.IpAddressAllocationModeType, vmNic3IPAddress?: string, vmPrimaryNic?: number): Array<any>
}

declare namespace com.vmware.library.vCloud.common {
	function getParent(entity?: any): any
}

declare namespace com.vmware.library.vCloud.common {
	function createVAppNetworkConfigurationNone(): any
}

declare namespace com.vmware.library.vCloud.common {
	function validateIps(ips?: Array<string>, mandatory?: boolean): string
}

declare namespace com.vmware.library.vCloud.common {
	function VclWaitTaskEnd(task?: vCloud.Task, pollRateStart?: number, pollRateThreshold?: number): void
}

declare namespace com.vmware.library.vCloud.common {
	function getAdminExtensionFromHost(host?: vCloud.Host): vCloud.HostAdminExtension
}

declare namespace com.vmware.library.vCloud.common {
	function convertToArray(value?: any): Array<any>
}

declare namespace com.vmware.library.vCloud.common {
	function createSyslogServerSettings(syslogServers?: Array<string>): any
}

declare namespace com.vmware.library.vCloud.common {
	function createAccessSettingForGroup(accessLevel?: vCloud.AccessLevelType, subject?: vCloud.Group): any
}

declare namespace com.vmware.library.vCloud.common {
	function createIpRanges(ipAddressRanges?: Array<string>): any
}

declare namespace com.vmware.library.vCloud.common {
	function validateIpRanges(ipRanges?: Array<string>, mandatory?: boolean): string
}

declare namespace com.vmware.library.vCloud.common {
	function createNetworkConfigSection(vms?: Array<vCloud.VM>, orgNetwork1?: vCloud.OrgNetwork, orgNetwork2?: vCloud.OrgNetwork, orgNetwork3?: vCloud.OrgNetwork, orgNetwork4?: vCloud.OrgNetwork, orgNetwork5?: vCloud.OrgNetwork, orgNetwork6?: vCloud.OrgNetwork, orgNetwork7?: vCloud.OrgNetwork, orgNetwork8?: vCloud.OrgNetwork, orgNetwork9?: vCloud.OrgNetwork): any
}

declare namespace com.vmware.library.vCloud.common {
	function createRightsList(rights?: Array<vCloud.Right>): any
}

declare namespace com.vmware.library.vCloud.common {
	function validateVlanId(vlanId?: string, mandatory?: boolean): string
}

declare namespace com.vmware.library.vCloud.common {
	function getFirstPendingTask(entity?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.common {
	function createEndOfTaskTriggerForTask(task?: vCloud.Task): Trigger
}

declare namespace com.vmware.library.vCloud.common {
	function validateVlanIdRanges(vlanIdRanges?: Array<string>, mandatory?: boolean): string
}

declare namespace com.vmware.library.vCloud.common {
	function createUsersList(users?: Array<vCloud.User>): any
}

declare namespace com.vmware.library.vCloud.common {
	function createControlAccessParams(isSharedToEveryone?: boolean, everyoneAccessLevel?: vCloud.AccessLevelType, fullControlLevelUsers?: Array<vCloud.User>, fullControlLevelGroups?: Array<vCloud.Group>, changeLevelUsers?: Array<vCloud.User>, changeLevelGroups?: Array<vCloud.Group>, readOnlyLevelUsers?: Array<vCloud.User>, readOnlyLevelGroups?: Array<vCloud.Group>): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function resetLdapSspiKeytabVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getAdminServiceByNameVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, serviceNameArg?: string): vCloud.AdminService
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getPasswordPolicySettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function registerVimServerVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, serverParamsArg?: any, shieldParamsArg?: any): vCloud.VimServer
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function resetVMWExternalNetwork(targetEntityArg?: vCloud.VmwExternalNetwork): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function toAdminObjectVMWProviderVdcStorageProfile(targetEntityArg?: vCloud.VmwProviderVdcStorageProfile): vCloud.ProviderVdcStorageProfile
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function createServiceVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): vCloud.AdminService
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVMWHostsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.VmwHost>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVMWExternalNetworksVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): Array<vCloud.VmwExternalNetwork>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function resetAmqpTruststoreVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getKerberosSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getResourcePoolsVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateLdapKeyStoreVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function resetAmqpCertificateVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function toAdminObjectVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): vCloud.HostAdmin
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateVMWDatastore(targetEntityArg?: vCloud.VmwDatastore): vCloud.VmwDatastore
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateControlAccessVMWVdcTemplate(targetEntityArg?: vCloud.VmwVdcTemplate, controlAccessParamsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function uploadLocalizationBundleVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, localFileLocationArg?: string, serviceNamespaceArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function createVMWExternalNetworkVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): vCloud.VmwExternalNetwork
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getContainedObjectsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function migrateVmsVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, sourceRpMoRefArg?: string, vmRefsArg?: Array<any>, targetRpRefArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateVMWDatastore(targetEntityArg?: vCloud.VmwDatastore): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function checkAuthorizationVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): boolean
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVendorServicesVMWNetworkPool(targetEntityArg?: vCloud.VmwNetworkPool): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateBlockingTaskSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, settingsArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function importVmAsVAppVimServer(targetEntityArg?: vCloud.VimServer, paramsArg?: any): vCloud.VApp
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function createVMWProviderVdcVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): vCloud.VmwProviderVdc
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getBrandingSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateLdapCertificateVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVmRefsVimServer(targetEntityArg?: vCloud.VimServer): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateProgressBlockingTask(targetEntityArg?: vCloud.BlockingTask, messageArg?: string, timeoutArg?: number): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function deleteVMWExternalNetwork(targetEntityArg?: vCloud.VmwExternalNetwork): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function abortBlockingTask(targetEntityArg?: vCloud.BlockingTask, messageArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function refreshStorageProfilesVimServer(targetEntityArg?: vCloud.VimServer): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateVMWHost(targetEntityArg?: vCloud.VmwHost): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function deleteVMWDatastore(targetEntityArg?: vCloud.VmwDatastore): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function disableVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateStrandedItem(targetEntityArg?: vCloud.StrandedItem): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function resetVcTrustsoreVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateStorageProfilesVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, classesToAddArg?: String[], classesToRemoveArg?: Array<any>): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getEnabledBlockingTaskOperationsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getLicenseSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateVMWExternalNetwork(targetEntityArg?: vCloud.VmwExternalNetwork): vCloud.VmwExternalNetwork
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getShieldManagerVimServer(targetEntityArg?: vCloud.VimServer): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getBlockingTasksSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function isNotificationsEnabledVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): boolean
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateVimServer(targetEntityArg?: vCloud.VimServer): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getProviderStorageProfilesVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): Array<vCloud.VmwProviderVdcStorageProfile>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateVMWNetworkPool(targetEntityArg?: vCloud.VmwNetworkPool): vCloud.VmwNetworkPool
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function unprepareVMWHost(targetEntityArg?: vCloud.VmwHost): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getGeneralSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): vCloud.VmwProviderVdc
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function deleteVMWNetworkPool(targetEntityArg?: vCloud.VmwNetworkPool): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function unregisterVimServer(targetEntityArg?: vCloud.VimServer): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVimServersVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.VimServer>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateShieldManagerVimServer(targetEntityArg?: vCloud.VimServer, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVMWVdcTemplatesVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.VmwVdcTemplate>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateEmailSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, settingsArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVimServersVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): Array<vCloud.VimServer>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateVcTrustsoreVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateLdapSspiKeytabVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function toAdminObjectVMWExternalNetwork(targetEntityArg?: vCloud.VmwExternalNetwork): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateVimServer(targetEntityArg?: vCloud.VimServer): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateGeneralSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, settingsArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function prepareVMWHost(targetEntityArg?: vCloud.VmwHost, usernameArg?: string, passwordArg?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateVMWVdcTemplate(targetEntityArg?: vCloud.VmwVdcTemplate): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function enableVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function deleteVMWVdcTemplate(targetEntityArg?: vCloud.VmwVdcTemplate): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getDatastoreVimRefVMWDatastore(targetEntityArg?: vCloud.VmwDatastore): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function isServiceAlreadyRegisteredVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, serviceNameArg?: string): boolean
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getServicesVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.AdminService>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateAmqpCertificateVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getLicenseMetricsInfoVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function enableNotificationsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, valueArg?: boolean): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateSystemSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, settingsArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getLookupServiceVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getControlAccessVMWVdcTemplate(targetEntityArg?: vCloud.VmwVdcTemplate): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function enableVMWDatastore(targetEntityArg?: vCloud.VmwDatastore): vCloud.VmwDatastore
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getEmailSmtpSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getNetworkRefsVimServer(targetEntityArg?: vCloud.VimServer): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function enableVMWHost(targetEntityArg?: vCloud.VmwHost): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getEmailSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getStorageProfilesVimServer(targetEntityArg?: vCloud.VimServer): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVMWDatastoresVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.VmwDatastore>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVmsVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, rpMoRefArg?: string): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateResourcePoolsVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, rpsToAddArg?: Array<any>, rpsToRemoveArg?: Array<any>): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateLicenseSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, settingsArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getLdapUserSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function deleteVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getDatastoresVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): Array<vCloud.VmwDatastore>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateVMWNetworkPool(targetEntityArg?: vCloud.VmwNetworkPool): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getAmqpSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function clearUnusedRightsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getExtensionQueryServiceVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function importVmIntoVAppVimServer(targetEntityArg?: vCloud.VimServer, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function deleteStrandedItem(targetEntityArg?: vCloud.StrandedItem): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function refreshVimServer(targetEntityArg?: vCloud.VimServer): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function upgradeVMWHost(targetEntityArg?: vCloud.VmwHost): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateLdapSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, settingsArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function toAdminObjectVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): vCloud.ProviderVdc
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getLdapSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateVMWExternalNetwork(targetEntityArg?: vCloud.VmwExternalNetwork): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVMWExternalNetworksVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.VmwExternalNetwork>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function disableResourcePoolVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, moRefArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function testAmqpConnectionVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): boolean
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getStrandedItemsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.StrandedItem>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function mergeProviderVdcsVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, refsArg?: Array<any>): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function createVMWNetworkPoolVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): vCloud.VmwNetworkPool
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getSystemSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateAmqpSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, settingsArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getBlockingTasksVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.BlockingTask>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function forceDeleteStrandedItem(targetEntityArg?: vCloud.StrandedItem): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getAdminVdcsVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): Array<vCloud.AdminVdc>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function resumeBlockingTask(targetEntityArg?: vCloud.BlockingTask, messageArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVMWProviderVdcsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.VmwProviderVdc>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function importMediaVimServer(targetEntityArg?: vCloud.VimServer, paramsArg?: any): vCloud.Media
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updatePasswordPolicySettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, settingsArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getResourcePoolsVimServer(targetEntityArg?: vCloud.VimServer): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVMWNetworkPoolsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.VmwNetworkPool>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVMWNetworkPoolsVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): Array<vCloud.VmwNetworkPool>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getTaskBlockingTask(targetEntityArg?: vCloud.BlockingTask): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function forceReconnectVimServer(targetEntityArg?: vCloud.VimServer): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateBrandingSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, settingsArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function resetLdapKeyStoreVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getVMWHostsVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): Array<vCloud.VmwHost>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateLicensingReport(targetEntityArg?: vCloud.LicensingReport): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateAmqpTruststoreVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function failBlockingTask(targetEntityArg?: vCloud.BlockingTask, messageArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getContainedObjectsVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function disableVMWHost(targetEntityArg?: vCloud.VmwHost): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function createVMWVdcTemplateVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): vCloud.VmwVdcTemplate
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getLdapGroupSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): any
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function getLicensingReportsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.LicensingReport>
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function disableVMWDatastore(targetEntityArg?: vCloud.VmwDatastore): vCloud.VmwDatastore
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateKerberosSettingsVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, settingsArg?: any): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function enableResourcePoolVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, moRefArg?: string): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateBlockingTask(targetEntityArg?: vCloud.BlockingTask): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateVMWProviderVdcStorageProfile(targetEntityArg?: vCloud.VmwProviderVdcStorageProfile): vCloud.VmwProviderVdcStorageProfile
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateVMWVdcTemplate(targetEntityArg?: vCloud.VmwVdcTemplate): vCloud.VmwVdcTemplate
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function clearUnusedLocalizationBundleVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function repairVMWHost(targetEntityArg?: vCloud.VmwHost): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateInternalStateVMWProviderVdcStorageProfile(targetEntityArg?: vCloud.VmwProviderVdcStorageProfile): void
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function importVmAsVAppTemplateVimServer(targetEntityArg?: vCloud.VimServer, paramsArg?: any): vCloud.VAppTemplate
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function updateLookupServiceVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.admin.extensions {
	function resetLdapCertificateVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): void
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createImportVmAsVAppParams(computerNameArg?: string, deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, nameArg?: string, powerOnArg?: boolean, sourceMoveArg?: boolean, vAppParentArg?: any, vAppScopedLocalIdArg?: string, vdcArg?: any, vdcStorageProfileArg?: any, vmMoRefArg?: string, vmNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createServiceResources(serviceResourceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createLicensingReportList(reportArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVimObjectRefs(vimObjectRefArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createNotificationsSettings(enableNotificationsArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createNotification(entityLinkArg?: Array<any>, eventIdArg?: string, operationSuccessArg?: boolean, timestampArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVcTrustStoreUpdateParams(fileSizeArg?: number, passwordArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createKerberosSettings(allowLowerCaseRealmsArg?: boolean, realmArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createStrandedItemVimObjects(strandedItemVimObjectArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWProviderVdcReferences(providerVdcReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createResourceClassActionParams(aclRulesArg?: any, descriptionArg?: string, httpMethodArg?: string, nameArg?: string, operationKeyArg?: string, urlPatternArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createServiceResourceParams(descriptionArg?: string, externalObjectIdArg?: string, nameArg?: string, operationKeyArg?: string, orgArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createPortGroupPoolParams(descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, portGroupRefsArg?: any, statusArg?: number, usedNetworksCountArg?: number, vimServerArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createPrepareHostParams(passwordArg?: string, usernameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAdminApiDefinitionParams(apiVendorArg?: string, descriptionArg?: string, entryPointArg?: string, filesArg?: any, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, supportedApiVersionsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAmqpSettings(amqpExchangeArg?: string, amqpHostArg?: string, amqpPasswordArg?: string, amqpPortArg?: number, amqpPrefixArg?: string, amqpSslAcceptAllArg?: boolean, amqpUseSSLArg?: boolean, amqpUsernameArg?: string, amqpVHostArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createResourceClassParams(descriptionArg?: string, mimeTypeArg?: string, nameArg?: string, nidArg?: string, operationKeyArg?: string, resourceClassActionsArg?: any, serviceResourcesArg?: any, urlTemplateArg?: string, urnPatternArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createLdapSettings(authenticationMechanismArg?: string, connectorTypeArg?: string, groupAttributesArg?: any, groupSearchBaseArg?: string, hostNameArg?: string, isGroupSearchBaseEnabledArg?: boolean, isSslArg?: boolean, isSslAcceptAllArg?: boolean, maxResultsArg?: number, maxUserGroupsArg?: number, pageSizeArg?: number, pagedSearchDisabledArg?: boolean, passwordArg?: string, portArg?: number, realmArg?: string, searchBaseArg?: string, useExternalKerberosArg?: boolean, userAttributesArg?: any, userNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVimObjectRef(moRefArg?: string, vimObjectTypeArg?: string, vimServerRefArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVimObjectRefList(vimObjectRefsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWProviderVdcResourcePool(enabledArg?: boolean, primaryArg?: boolean, resourcePoolRefArg?: any, resourcePoolVimObjectRefArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createLicensingReportSample(managedServerMetricsArg?: any, observationDateArg?: any, virtualMachineMetricsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWExternalNetworkParams(configurationArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, vimPortGroupRefArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createHostObjectRefs(hostObjectRefArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVmObjectRefsList(numberOfPagesArg?: number, pageArg?: number, vmObjectRefArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createManagedServerMetrics(managedServerArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAdminServiceParams(apiDefinitionsArg?: any, apiFiltersArg?: any, authorizationEnabledArg?: boolean, descriptionArg?: string, enabledArg?: boolean, exchangeArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, priorityArg?: number, resourceClassesArg?: any, routingKeyArg?: string, serviceLinksArg?: any, vendorArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createProviderVdcMergeParams(providerVdcReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAutomaticNetworkPoolReference(): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createImportVmIntoExistingVAppParams(computerNameArg?: string, sourceMoveArg?: boolean, vAppArg?: any, vAppScopedLocalIdArg?: string, vdcStorageProfileArg?: any, vmDescriptionArg?: string, vmMoRefArg?: string, vmNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAuthorizationCheckResponse(isAuthorizedArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVimServerParams(descriptionArg?: string, isConnectedArg?: boolean, isEnabledArg?: boolean, nameArg?: string, operationKeyArg?: string, passwordArg?: string, shieldManagerHostArg?: string, shieldManagerUserNameArg?: string, urlArg?: string, useVsphereServiceArg?: boolean, usernameArg?: string, uuidArg?: string, vcProxyArg?: string, vcVersionArg?: string, vsphereWebClientServerUrlArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAdminFileDescriptors(fileDescriptorArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVSphereWebClientUrl(uRLArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createExtensionVersions(versionArg?: Array<string>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createLdapGroupAttributes(backLinkIdentifierArg?: string, groupNameArg?: string, membershipArg?: string, membershipIdentifierArg?: string, objectClassArg?: string, objectIdentifierArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createHostObjectRef(moRefArg?: string, passwordArg?: string, usernameArg?: string, vimObjectTypeArg?: string, vimServerRefArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWHostReferences(hostReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVxlanPoolParams(descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, promiscuousModeArg?: boolean, statusArg?: number, usedNetworksCountArg?: number, vdsContextsArg?: Array<any>, vimSwitchRefArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWNetworkPoolReferences(networkPoolReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createBundleUploadParams(fileSizeArg?: number, serviceNamespaceArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVlanPoolParams(descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, promiscuousModeArg?: boolean, statusArg?: number, usedNetworksCountArg?: number, vimSwitchRefArg?: any, vlanRangeArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWProviderVdcResourcePoolSet(vMWProviderVdcResourcePoolArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWExternalNetworkReferences(externalNetworkReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVmObjectRef(moRefArg?: string, nameArg?: string, vimObjectTypeArg?: string, vimServerRefArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createStrandedItemVimObject(errorMessageArg?: string, nameArg?: string, vimObjectRefArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createNumericRange(endArg?: number, startArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWStorageProfile(dataStoreRefsArg?: any, freeStorageMbArg?: number, moRefArg?: string, nameArg?: string, totalStorageMbArg?: number, vimObjectTypeArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAclRules(aclRuleArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createImportVmAsVAppTemplateParams(catalogArg?: any, computerNameArg?: string, descriptionArg?: string, goldMasterArg?: boolean, nameArg?: string, sourceMoveArg?: boolean, vAppScopedLocalIdArg?: string, vdcArg?: any, vdcStorageProfileArg?: any, vmMoRefArg?: string, vmNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWVdcTemplateBinding(nameArg?: string, valueArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAdminServiceLinks(serviceLinkArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAuthorizationCheckParams(httpMethodArg?: string, uRLArg?: string, userArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createBrandingSettings(aboutCompanyUrlArg?: string, companyNameArg?: string, finalCustomThemeArg?: byte[], forgotUserNameOrPasswordURLArg?: string, loginPageCustomizationThemeArg?: byte[], previewCustomThemeArg?: byte[], signUpUrlArg?: string, supportUrlArg?: string, themeArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createRightRefs(rightArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWVdcTemplateList(vMWVdcTemplateArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWStorageProfiles(vMWStorageProfileArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createSmtpSettings(passwordArg?: string, smtpServerNameArg?: string, smtpServerPortArg?: number, sslArg?: boolean, useAuthenticationArg?: boolean, userNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createApiFilterParams(operationKeyArg?: string, responseContentTypeArg?: string, urlPatternArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createBlockingTaskOperationParams(messageArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createMigrateParams(resourcePoolRefArg?: any, vmRefArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createLicensingVirtualMachine(cpuArg?: number, memoryArg?: number, vimObjectRefArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createUpdateProviderVdcStorageProfilesParams(addStorageProfileArg?: Array<string>, descriptionArg?: string, nameArg?: string, removeStorageProfileArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVdsContext(vdsContextArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWVdcTemplates(vMWVdcTemplateArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createLicense(expirationDateArg?: any, expiredArg?: boolean, licenseMetricsInfoArg?: any, licensedVMCountArg?: number, persistedArg?: boolean, publishingToRemoteSitesFeatureArg?: boolean, serialNumberArg?: string, subscribingToRemoteSitesFeatureArg?: boolean, validSerialArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createLdapUserAttributes(emailArg?: string, fullNameArg?: string, givenNameArg?: string, groupBackLinkIdentifierArg?: string, groupMembershipIdentifierArg?: string, objectClassArg?: string, objectIdentifierArg?: string, surnameArg?: string, telephoneArg?: string, userNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createImportMediaParams(catalogArg?: any, datastoreMoRefArg?: string, descriptionArg?: string, nameArg?: string, sourceMoveArg?: boolean, sourcePathArg?: string, vdcArg?: any, vdcStorageProfileArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVmVimInfo(datastoreVimObjectRefArg?: any, hostVimObjectRefArg?: any, virtualDisksMaxChainLengthArg?: number, vmVimObjectRefArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createResourcePool(dataStoreRefsArg?: any, descriptionArg?: string, moRefArg?: string, nameArg?: string, operationKeyArg?: string, vimObjectTypeArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createResourceClassActions(resourceClassActionArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createShieldManagerParams(associatedVimServerArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, passwordArg?: string, urlArg?: string, usernameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWVimServerReferences(vimServerReferenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAdminApiDefinitions(apiDefinitionArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWNetworkPoolParams(descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, statusArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createUpdateRightsParams(addRightArg?: Array<any>, removeRightArg?: Array<string>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createEmailSettings(alertEmailToArg?: string, alertEmailToAllAdminsArg?: boolean, emailSubjectPrefixArg?: string, senderEmailAddressArg?: string, smtpSettingsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createLookupServiceParams(lookupServiceUrlArg?: string, passwordArg?: string, userNameArg?: string, vCDUrlArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVirtualMachineMetrics(virtualMachineArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createEntityRights(referenceArg?: any, rightsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createUpdateResourcePoolSetParams(addItemArg?: Array<any>, deleteItemArg?: Array<any>, descriptionArg?: string, nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWVdcTemplateProviderVdcSpecification(bindingArg?: Array<any>, nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createSystemPasswordPolicySettings(accountLockoutEnabledArg?: boolean, accountLockoutIntervalMinutesArg?: number, adminAccountLockoutEnabledArg?: boolean, invalidLoginsBeforeLockoutArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createFencePoolParams(descriptionArg?: string, fenceIdCountArg?: number, filesArg?: any, mtuArg?: number, nameArg?: string, operationKeyArg?: string, promiscuousModeArg?: boolean, statusArg?: number, usedNetworksCountArg?: number, vimSwitchRefArg?: any, vlanIdArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createCatalogSettings(isSyncEnabledArg?: boolean, refreshIntervalArg?: number, syncStartDateArg?: any, syncStopDateArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createSystemSettings(amqpSettingsArg?: any, blockingTaskSettingsArg?: any, brandingSettingsArg?: any, catalogSettingsArg?: any, emailSettingsArg?: any, generalSettingsArg?: any, kerberosSettingsArg?: any, ldapSettingsArg?: any, licenseArg?: any, lookupServiceSettingsArg?: any, notificationsSettingsArg?: any, passwordPolicySettingsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createBlockingTaskUpdateProgressParams(messageArg?: string, timeoutValueInMillisecondsArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createGeneralSettings(absoluteSessionTimeoutMinutesArg?: number, activityLogDisplayDaysArg?: number, activityLogKeepDaysArg?: number, allowOverlappingExtNetsArg?: boolean, chargebackEventsKeepDaysArg?: number, chargebackTablesCleanupJobTimeInSecondsArg?: number, consoleProxyExternalAddressArg?: string, elasticAllocationPoolArg?: boolean, hostCheckDelayInSecondsArg?: number, hostCheckTimeoutSecondsArg?: number, installationIdArg?: number, ipReservationTimeoutSecondsArg?: number, loginNameOnlyArg?: boolean, prePopDefaultNameArg?: boolean, quarantineEnabledArg?: boolean, quarantineResponseTimeoutSecondsArg?: number, restApiBaseUriArg?: string, sessionTimeoutMinutesArg?: number, showStackTracesArg?: boolean, syncIntervalInHoursArg?: number, syncStartDateArg?: any, syslogServerSettingsArg?: any, systemExternalAddressArg?: string, transferSessionTimeoutSecondsArg?: number, vcTruststoreContentsArg?: byte[], vcTruststorePasswordArg?: string, vcTruststoreTypeArg?: string, verifyVcCertificatesArg?: boolean, verifyVsmCertificatesArg?: boolean, vmrcVersionArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAdminServiceLinkParams(linkHrefArg?: string, mimeTypeArg?: string, operationKeyArg?: string, relArg?: string, resourceIdArg?: string, resourceTypeArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createLookupServiceSettings(lookupServiceUrlArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createOrganizationResourcePoolSet(resourcePoolVimObjectRefArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAdminFileDescriptorParams(descriptionArg?: string, fileArg?: any, operationKeyArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createExtensionServices(): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createResourceClasses(resourceClassArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createRealm(domainArg?: Array<string>, kdcArg?: string, nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAclAccess(accessArg?: string, entityArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAmqpSettingsTest(errorArg?: any, validArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createUserEntityRights(entityRightsArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createApiFilters(apiFilterArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createLicenseMetricsInfo(availablePhysicalMemoryArg?: number, lastUpdateArg?: any, physicalMemoryUsedArg?: number, physicalSocketCountArg?: number, publishingToRemoteSitesArg?: boolean, runningVMsArg?: number, subscribingToRemoteSitesArg?: boolean, vCPUArg?: number, vRAMArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createLicensingManagedServer(cpuArg?: number, memoryInstalledArg?: number, vimObjectRefArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createBundleUploadSocket(uploadLocationArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWVdcTemplateSpecification(automaticNetworkPoolReferenceArg?: any, fastProvisioningEnabledArg?: boolean, gatewayConfigurationArg?: any, networkPoolReferenceArg?: any, nicQuotaArg?: number, provisionedNetworkQuotaArg?: number, storageProfileArg?: Array<any>, thinProvisionArg?: boolean, vmQuotaArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWProviderVdcParams(defaultPasswordArg?: string, defaultUsernameArg?: string, descriptionArg?: string, highestSupportedHardwareVersionArg?: string, hostRefsArg?: any, isEnabledArg?: boolean, nameArg?: string, resourcePoolRefsArg?: any, storageProfileArg?: Array<string>, vimServerArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createAclRuleParams(descriptionArg?: string, nameArg?: string, operationKeyArg?: string, organizationAccessArg?: any, principalAccessArg?: any, serviceResourceAccessArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVMWVdcTemplateParams(descriptionArg?: string, nameArg?: string, operationKeyArg?: string, providerVdcReferenceArg?: Array<any>, tenantDescriptionArg?: string, tenantNameArg?: string, vdcTemplateSpecificationArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createRights(rightArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createVcTrustStoreUploadSocket(taskArg?: any, uploadLocationArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createEntityReferences(referenceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.extension {
	function createBlockingTaskSettings(blockingTaskOperationsArg?: any, timeoutActionArg?: string, timeoutInMillisecondsArg?: number): any
}

declare namespace com.vmware.library.vCloud.operation.qs {
	function queryVmReferencesQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs {
	function queryDiskReferencesQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs {
	function queryCatalogReferencesQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs {
	function queryvAppTemplateReferencesQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs {
	function queryvAppReferencesQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs {
	function queryMediaReferencesQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.nat {
	function enableLoggingNatRule(targetEntityArg?: vCloud.NatRule, enableArg?: boolean): void
}

declare namespace com.vmware.library.vCloud.operation.nat {
	function getContainedObjectsNatRule(targetEntityArg?: vCloud.NatRule): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.nat {
	function deleteRuleNatRule(targetEntityArg?: vCloud.NatRule): void
}

declare namespace com.vmware.library.vCloud.operation.nat {
	function updateNatRuleLegacyNatRule(targetEntityArg?: vCloud.NatRule, arg0?: any): vCloud.Gateway
}

declare namespace com.vmware.library.vCloud.operation.nat {
	function enableNatRuleNatRule(targetEntityArg?: vCloud.NatRule, enableArg?: boolean): void
}

declare namespace com.vmware.library.vCloud.operation.nat {
	function getProtocolsNatRule(targetEntityArg?: vCloud.NatRule): Array<string>
}

declare namespace com.vmware.library.vCloud.operation.nat {
	function isAdvancedNatRule(targetEntityArg?: vCloud.NatRule): boolean
}

declare namespace com.vmware.library.vCloud.operation.nat {
	function updateRuleNatRule(targetEntityArg?: vCloud.NatRule, arg0?: any): void
}

declare namespace com.vmware.library.vCloud.operation.nat {
	function getEdgeInterfaceNamesNatRule(targetEntityArg?: vCloud.NatRule): Array<string>
}

declare namespace com.vmware.library.vCloud.vApp Template {
	function listVAppTemplateNetworks(vAppTemplate?: vCloud.VAppTemplate): Array<string>
}

declare namespace com.vmware.library.vCloud.vApp Template {
	function uploadOVFEnvelope(vappTemplate?: vCloud.VAppTemplate, envelope?: any): void
}

declare namespace com.vmware.library.vCloud.vApp Template {
	function createSingleVmVAppOvfDescriptor(virtualSystemId?: string, virtualSystemName?: string, virtualSystemType?: string, numberOfCpu?: number, memorySizeMB?: number, osType?: vCloud.GuestOSType, deploymentLeaseInSeconds?: number, storageLeaseInSeconds?: number): any
}

declare namespace com.vmware.library.vCloud.vApp Template {
	function getNumVAppTemplateNetworks(vAppTemplate?: vCloud.VAppTemplate, max?: number): number
}

declare namespace com.vmware.library.vCloud.vApp Template {
	function getOrganizationFromVAppTemplate(vappTemplate?: vCloud.VAppTemplate): vCloud.Organization
}

declare namespace com.vmware.library.vCloud.vApp Template {
	function createVAppTemplate(vdc?: vCloud.Vdc, name?: string, description?: string, format?: string): vCloud.VAppTemplate
}

declare namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
	function createX509CertificateParams(caArg?: boolean, dsaPublicKeyGArg?: string, dsaPublicKeyPArg?: string, dsaPublicKeyQArg?: string, dsaPublicKeyYArg?: string, isCaArg?: boolean, isValidArg?: boolean, issuerArg?: string, issuerCnArg?: string, md5HashArg?: string, notAfterArg?: string, notBeforeArg?: string, publicKeyAlgoArg?: string, publicKeyLengthArg?: string, rsaPublicKeyExponentArg?: string, rsaPublicKeyModulusArg?: string, serialNumberArg?: string, sha1HashArg?: string, signatureArg?: string, signatureAlgoArg?: string, subjectArg?: string, subjectCnArg?: string, validArg?: boolean, versionArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
	function createCertificateParams(certificateTypeArg?: string, descriptionArg?: string, extendedAttributesArg?: Array<any>, isUniversalArg?: boolean, issuerCnArg?: string, nameArg?: string, nodeIdArg?: string, pemEncodingArg?: string, scopeArg?: any, subjectCnArg?: string, universalRevisionArg?: number, x509CertificatesArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
	function createTrustObjectDataParams(descriptionArg?: string, extendedAttributesArg?: Array<any>, isUniversalArg?: boolean, nameArg?: string, nodeIdArg?: string, passphraseArg?: string, pemEncodingArg?: string, privateKeyArg?: string, scopeArg?: any, universalRevisionArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
	function createPrincipalParams(attributesArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
	function createX509CrlParams(issuerArg?: string, nextUpdateArg?: string, versionArg?: string, x509CrlEntriesArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
	function createCsrParams(algorithmArg?: string, cnArg?: string, descriptionArg?: string, extendedAttributesArg?: Array<any>, isUniversalArg?: boolean, keySizeArg?: string, nameArg?: string, nodeIdArg?: string, pemEncodingArg?: string, scopeArg?: any, subjectArg?: any, universalRevisionArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimUnsignedLong(valueArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimUnsignedByte(valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createItem(orderArg?: number, startActionArg?: string, startDelayArg?: number, stopActionArg?: string, stopDelayArg?: number, waitingForGuestArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createQualifierString(qualifierArg?: boolean, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createVirtualSystemCaption(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimInt(valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createPropertyConfigurationValue(configurationArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createQualifierSInt64(qualifierArg?: boolean, valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimFloat(valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimReference(): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createDeploymentOptionSectionConfiguration(defaultArg?: boolean, descriptionArg?: any, labelArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimDateTime(cIMDateTimeArg?: string, dateArg?: any, datetimeArg?: any, intervalArg?: any, timeArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimShort(valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createOvfReferences(fileArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimDouble(valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimUnsignedInt(valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createConfiguration(defaultArg?: boolean, descriptionArg?: any, labelArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createEulaSection(infoArg?: any, licenseArg?: any, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createNetwork(descriptionArg?: any, nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createMsg(msgidArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createInstallSection(infoArg?: any, initialBootStopDelayArg?: number, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createVirtualHardwareSection(infoArg?: any, itemArg?: Array<any>, requiredArg?: boolean, systemArg?: any, transportArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCIMResourceAllocationSettingData(addressArg?: any, addressOnParentArg?: any, allocationUnitsArg?: any, automaticAllocationArg?: any, automaticDeallocationArg?: any, captionArg?: any, changeableTypeArg?: any, configurationNameArg?: any, connectionArg?: Array<any>, consumerVisibilityArg?: any, descriptionArg?: any, elementNameArg?: any, generationArg?: any, hostResourceArg?: Array<any>, instanceIDArg?: any, limitArg?: any, mappingBehaviorArg?: any, otherResourceTypeArg?: any, parentArg?: any, poolIDArg?: any, reservationArg?: any, resourceSubTypeArg?: any, resourceTypeArg?: any, virtualQuantityArg?: any, virtualQuantityUnitsArg?: any, weightArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createResource(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createStringsMsg(msgidArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimUnsignedShort(valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createEnvelope(contentArg?: any, langArg?: string, referencesArg?: any, sectionArg?: Array<any>, stringsArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createAutomaticShutdownAction(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createVSSD(automaticRecoveryActionArg?: any, automaticShutdownActionArg?: any, automaticStartupActionArg?: any, automaticStartupActionDelayArg?: any, automaticStartupActionSequenceNumberArg?: any, captionArg?: any, changeableTypeArg?: any, configurationDataRootArg?: any, configurationFileArg?: any, configurationIDArg?: any, configurationNameArg?: any, creationTimeArg?: any, descriptionArg?: any, elementNameArg?: any, generationArg?: any, instanceIDArg?: any, logDataRootArg?: any, notesArg?: Array<any>, recoveryFileArg?: any, snapshotDataRootArg?: any, suspendDataRootArg?: any, swapFileDataRootArg?: any, virtualSystemIdentifierArg?: any, virtualSystemTypeArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createVirtualDiskDesc(capacityArg?: string, capacityAllocationUnitsArg?: string, diskIdArg?: string, fileRefArg?: string, formatArg?: string, parentRefArg?: string, populatedSizeArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createMappingBehavior(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimLong(valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createVirtualSystem(infoArg?: any, nameArg?: any, sectionArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createDiskSection(diskArg?: Array<any>, infoArg?: any, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createDeploymentOptionSection(configurationArg?: Array<any>, infoArg?: any, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createRASD(addressArg?: any, addressOnParentArg?: any, allocationUnitsArg?: any, automaticAllocationArg?: any, automaticDeallocationArg?: any, boundArg?: string, captionArg?: any, changeableTypeArg?: any, configurationArg?: string, configurationNameArg?: any, connectionArg?: Array<any>, consumerVisibilityArg?: any, descriptionArg?: any, elementNameArg?: any, generationArg?: any, hostResourceArg?: Array<any>, instanceIDArg?: any, limitArg?: any, mappingBehaviorArg?: any, otherResourceTypeArg?: any, parentArg?: any, poolIDArg?: any, requiredArg?: boolean, reservationArg?: any, resourceSubTypeArg?: any, resourceTypeArg?: any, virtualQuantityArg?: any, virtualQuantityUnitsArg?: any, weightArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimString(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimAnySimple(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createQualifierSArray(qualifierArg?: boolean, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createNetworkSectionNetwork(descriptionArg?: any, nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createVirtualSystemChangeable(valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createConsumerVisibility(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createAnnotationSection(annotationArg?: any, infoArg?: any, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createResourceAllocationCaption(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createQualifierUInt32(qualifierArg?: boolean, valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createAutomaticStartupAction(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createQualifierBoolean(qualifierArg?: boolean, valueArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createVirtualSystemCollection(contentArg?: Array<any>, infoArg?: any, nameArg?: any, sectionArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createNetworkSection(infoArg?: any, networkArg?: Array<any>, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimChar16(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimBase64Binary(valueArg?: byte[]): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createResourceAllocationSection(infoArg?: any, itemArg?: Array<any>, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createProductSectionProperty(descriptionArg?: any, keyArg?: string, labelArg?: any, passwordArg?: boolean, qualifiersArg?: string, userConfigurableArg?: boolean, valueAttribArg?: string, valueElementArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createStartupSectionItem(orderArg?: number, startActionArg?: string, startDelayArg?: number, stopActionArg?: string, stopDelayArg?: number, waitingForGuestArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createStartupSection(infoArg?: any, itemArg?: Array<any>, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimHexBinary(valueArg?: byte[]): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createOvfProperty(descriptionArg?: any, keyArg?: string, labelArg?: any, passwordArg?: boolean, qualifiersArg?: string, userConfigurableArg?: boolean, valueAttribArg?: string, valueElementArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCIMVirtualSystemSettingData(automaticRecoveryActionArg?: any, automaticShutdownActionArg?: any, automaticStartupActionArg?: any, automaticStartupActionDelayArg?: any, automaticStartupActionSequenceNumberArg?: any, captionArg?: any, changeableTypeArg?: any, configurationDataRootArg?: any, configurationFileArg?: any, configurationIDArg?: any, configurationNameArg?: any, creationTimeArg?: any, descriptionArg?: any, elementNameArg?: any, generationArg?: any, instanceIDArg?: any, logDataRootArg?: any, notesArg?: Array<any>, recoveryFileArg?: any, snapshotDataRootArg?: any, suspendDataRootArg?: any, swapFileDataRootArg?: any, virtualSystemIdentifierArg?: any, virtualSystemTypeArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createAutomaticRecoveryAction(valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createOperatingSystemSection(descriptionArg?: any, infoArg?: any, requiredArg?: boolean, versionArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createStrings(fileRefArg?: string, langArg?: string, msgArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createProductSection(appUrlArg?: any, categoryOrPropertyArg?: Array<any>, clazzArg?: string, fullVersionArg?: any, iconArg?: Array<any>, infoArg?: any, instanceArg?: string, productArg?: any, productUrlArg?: any, requiredArg?: boolean, vendorArg?: any, vendorUrlArg?: any, versionArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createIcon(fileRefArg?: string, heightArg?: number, mimeTypeArg?: string, widthArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createOvfFile(chunkSizeArg?: number, compressionArg?: string, sizeArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createProductSectionIcon(fileRefArg?: string, heightArg?: number, mimeTypeArg?: string, widthArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimBoolean(valueArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createCimByte(valueArg?: byte): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf {
	function createResourceAllocationChangeable(valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function isUdpConfiguredFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): boolean
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getFirewallRuleTypeFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): any
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function isIcmpConfiguredFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): boolean
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getUdpSourcePortFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, arg0?: boolean): string
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function deleteFirewallRuleFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): Array<vCloud.FirewallRule>
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getUdpDestinationPortFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, arg0?: boolean): string
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function findSupportedObjectsFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): any
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getTcpDestinationPortFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, arg0?: boolean): string
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function isTcpConfiguredFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): boolean
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function updateFirewallRuleForLegacyGatewayFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, paramsArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getDestinationSelectedObjectsFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, selectedDestinationObjectHiddenArg?: String[]): any
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function isLogginEnabledFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): boolean
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getRuleSourceIpFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): string
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function isEnabledFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): boolean
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getDescriptionFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): string
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getSourceSelectedObjectsFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, selectedSourceObjectHiddenArg?: String[]): any
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getTcpSourcePortFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, arg0?: boolean): string
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getAvailableObjectsForProvidedTypeFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, paramsArg?: string): any
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getSourcePortFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): number
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getRuleDestinationIpFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): string
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getContainedObjectsFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function isAllConfiguredFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): boolean
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function enableFirewallRuleFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, ruleEnableStateArg?: boolean): vCloud.FirewallRule
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function getDestinationPortFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): number
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function updateFirewallRuleFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, paramsArg?: any): vCloud.FirewallRule
}

declare namespace com.vmware.library.vCloud.operation.firewallRule {
	function isAdvancedFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule): boolean
}

declare namespace com.vmware.library.vCloud.Media {
	function uploadFiles(media?: vCloud.Media, paths?: Array<path>): vCloud.Media
}

declare namespace com.vmware.library.vCloud.Media {
	function uploadMedia(vdc?: vCloud.Vdc, name?: string, description?: string, imageType?: vCloud.ImageType, storageProfile?: vCloud.VdcStorageProfile, filename?: string): vCloud.Media
}

declare namespace com.vmware.library.vCloud.Media {
	function updateMedia(media?: vCloud.Media, name?: string, description?: string, strorageProfile?: vCloud.VdcStorageProfile): vCloud.Task
}

declare namespace com.vmware.library.vCloud.Media {
	function getOrganizationFromMedia(media?: vCloud.Media): vCloud.Organization
}

declare namespace com.vmware.library.vCloud.common.utils {
	function getExchange(vcdHost?: vCloud.Host): string
}

declare namespace com.vmware.library.vCloud.common.utils {
	function resetVmMacAddress(vm?: vCloud.VM): vCloud.Task
}

declare namespace com.vmware.library.vCloud.common.utils {
	function getEnabledHosts(): Array<vCloud.Host>
}

declare namespace com.vmware.library.vCloud.common.utils {
	function setVmIpAllocationMode(vm?: vCloud.VM, ipAddressAllocationMode?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.common.utils {
	function renameVappVm(vAppVm?: vCloud.VM, newName?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.common.utils {
	function setMetadataStringEntry(object?: any, key?: string, value?: string, visibility?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.common.utils {
	function getVmMacAddress(vm?: vCloud.VM): string
}

declare namespace com.vmware.library.vCloud.common.utils {
	function getMetadataStringEntry(object?: any, key?: string): string
}

declare namespace com.vmware.library.vCloud.common.utils {
	function getVmIpAllocationMode(vm?: vCloud.VM): string
}

declare namespace com.vmware.library.vCloud.common.utils {
	function getHostsWithSystemOrganization(): Array<vCloud.Host>
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function changeVirtualHardDiskCapacity(virtualDisk?: any, newSize?: number): any
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function calculateNextVirtualHardDiskAddress(vm?: vCloud.VM, controllerId?: string, isIdeController?: boolean): string
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function getOrganizationFromVM(vm?: vCloud.VM): vCloud.Organization
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function listVirtualNetworkCardNames(vm?: vCloud.VM): Array<string>
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function getNumberOfNic(vm?: vCloud.VM, max?: number): number
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function createVirtualSCSIHardDisk(id?: string, name?: string, description?: string, size?: number, busSubType?: string, controllerId?: string, addressOnController?: string): any
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function removeVMCustomParameter(VM?: vCloud.VM, parameterKey?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function setVMCustomParameterValue(VM?: vCloud.VM, parameterKey?: string, value?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function createVirtualNetworkCard(id?: string, name?: string, description?: string, addressOnParent?: string, ipAddress?: string, ipAddressingMode?: vCloud.IpAddressAllocationModeType, vappNetworkName?: string, primaryNic?: boolean): void
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function listVirtualHardDiskControllerNames(vm?: vCloud.VM): Array<string>
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function addVMCustomParameter(VM?: vCloud.VM, parameterKey?: string, parameterDescription?: string, parameterType?: string, parameterLabel?: string, userConfigurable?: boolean, defaultValue?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function changeVirtualMemoryCapacity(memory?: string, newSize?: number): any
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function getVirtualHardDiskControllerByName(vm?: vCloud.VM, controller?: string): any
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function createVirtualHardDisk(id?: string, name?: string, description?: string, size?: number): void
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function calculateNextNetworkCardAddress(vm?: vCloud.VM): string
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function calculateRasdInstanceId(vm?: vCloud.VM): string
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function validateVMNICNumber(vm?: vCloud.VM, nicNum?: number): string
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function wireVM(vm?: vCloud.VM, nicNumber?: number, vAppNetworkName?: string, ipAddressAllocationMode?: vCloud.IpAddressAllocationModeType, ipAddress?: string, isConnected?: boolean, macAddress?: string, needsCustomization?: boolean): vCloud.Task
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function getVMCustomParameterList(VM?: vCloud.VM): Array<string>
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function getVMCustomParameterType(VM?: vCloud.VM, parameterKey?: string): Array<string>
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function listVmVAppNetworks(vm?: vCloud.VM): Array<string>
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function createVirtualIDEHardDisk(id?: string, name?: string, description?: string, size?: number, controllerId?: string, addressOnController?: string): any
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function listVirtualHardDiskNames(vm?: vCloud.VM): Array<string>
}

declare namespace com.vmware.library.vCloud.vApp.VM {
	function changeCpuNumber(cpu?: any, cpuNumber?: number, cpuShares?: number): any
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function isEnabledIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool): boolean
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function getMaxLeaseTimeIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool): number
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function getLowIpAddressIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool): string
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function getContainedObjectsIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function getDefaultLeaseTimeIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool): number
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function deleteIpPoolIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool): void
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function updateIpPoolIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool, paramsArg?: any): vCloud.DHCPIpPool
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function isAdvancedIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool): boolean
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function updateBindingStaticBindingTrinity(targetEntityArg?: vCloud.DHCPBinding, paramsArg?: any): vCloud.DHCPBinding
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function getHighIpAddressIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool): string
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function getSelectedEdgeInterfaceNameIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool): string
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function getEdgeInterfaceNamesIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool): Array<string>
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function getContainedObjectsStaticBindingTrinity(targetEntityArg?: vCloud.DHCPBinding): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function deleteBindingStaticBindingTrinity(targetEntityArg?: vCloud.DHCPBinding): void
}

declare namespace com.vmware.library.vCloud.operation.edge.dhcp {
	function updateIpPoolForLegacyGatewayIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool, paramsArg?: any, networkNameArg?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyCatalog(targetEntityArg?: vCloud.Catalog, dateCreatedArg?: any, descriptionArg?: string, isPublishedArg?: boolean, nameArg?: string, operationKeyArg?: string, ownerArg?: any, versionNumberArg?: number): vCloud.Catalog
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyRole(targetEntityArg?: vCloud.Role, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, rightReferencesArg?: any): vCloud.Role
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyVmAffinityRule(targetEntityArg?: vCloud.VmAffinity, isEnabledArg?: boolean, isMandatoryArg?: boolean, nameArg?: string, operationKeyArg?: string, polarityArg?: string, scopeArg?: string, vmReferencesArg?: any): vCloud.VmAffinity
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyVAppNetwork(targetEntityArg?: vCloud.VAppNetwork, configurationArg?: any, deployedArg?: boolean, descriptionArg?: string, nameArg?: string, operationKeyArg?: string): vCloud.VAppNetwork
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyOrg(targetEntityArg?: vCloud.Organization, descriptionArg?: string, fullNameArg?: string, isEnabledArg?: boolean, nameArg?: string, operationKeyArg?: string): vCloud.Organization
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyAdminOrg(targetEntityArg?: vCloud.AdminOrganization, catalogsArg?: any, descriptionArg?: string, fullNameArg?: string, isEnabledArg?: boolean, nameArg?: string, networksArg?: any, operationKeyArg?: string, settingsArg?: any, vdcsArg?: any): vCloud.AdminOrganization
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyUser(targetEntityArg?: vCloud.User, alertEmailArg?: string, alertEmailPrefixArg?: string, deployedVmQuotaArg?: number, descriptionArg?: string, emailAddressArg?: string, fullNameArg?: string, groupReferencesArg?: any, iMArg?: string, isAlertEnabledArg?: boolean, isDefaultCachedArg?: boolean, isEnabledArg?: boolean, isExternalArg?: boolean, isGroupRoleArg?: boolean, isLockedArg?: boolean, nameArg?: string, nameInSourceArg?: string, operationKeyArg?: string, passwordArg?: string, providerTypeArg?: string, roleArg?: any, storedVmQuotaArg?: number, telephoneArg?: string): vCloud.User
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyAdminVdc(targetEntityArg?: vCloud.AdminVdc, allocationModelArg?: string, availableNetworksArg?: any, capabilitiesArg?: any, computeCapacityArg?: any, descriptionArg?: string, isEnabledArg?: boolean, isThinProvisionArg?: boolean, nameArg?: string, networkPoolReferenceArg?: any, networkQuotaArg?: number, nicQuotaArg?: number, operationKeyArg?: string, overCommitAllowedArg?: boolean, providerVdcReferenceArg?: any, resourceEntitiesArg?: any, resourceGuaranteedCpuArg?: number, resourceGuaranteedMemoryArg?: number, storageCapacityArg?: any, usedNetworkCountArg?: number, usesFastProvisioningArg?: boolean, vCpuInMhzArg?: number, vdcStorageProfilesArg?: any, vendorServicesArg?: any, vmQuotaArg?: number): vCloud.AdminVdc
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyProviderVdcStorageProfile(targetEntityArg?: vCloud.ProviderVdcStorageProfile, capacityTotalArg?: number, capacityUsedArg?: number, descriptionArg?: string, enabledArg?: boolean, nameArg?: string, operationKeyArg?: string, unitsArg?: string): vCloud.ProviderVdcStorageProfile
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyDisk(targetEntityArg?: vCloud.Disk, busSubTypeArg?: string, busTypeArg?: string, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, ownerArg?: any, sizeArg?: number, storageProfileArg?: any): vCloud.Disk
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyMedia(targetEntityArg?: vCloud.Media, descriptionArg?: string, imageTypeArg?: string, nameArg?: string, operationKeyArg?: string, ownerArg?: any, sizeArg?: number, vdcStorageProfileArg?: any): vCloud.Media
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyAdminVdcStorageProfile(targetEntityArg?: vCloud.AdminVdcStorageProfile, defaultArg?: boolean, descriptionArg?: string, enabledArg?: boolean, limitArg?: number, nameArg?: string, operationKeyArg?: string, providerVdcStorageProfileArg?: any, unitsArg?: string): vCloud.AdminVdcStorageProfile
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyAdminCatalog(targetEntityArg?: vCloud.AdminCatalog, catalogStorageProfilesArg?: any, dateCreatedArg?: any, descriptionArg?: string, externalCatalogSubscriptionParamsArg?: any, isPublishedArg?: boolean, nameArg?: string, operationKeyArg?: string, ownerArg?: any, publishExternalCatalogParamsArg?: any, versionNumberArg?: number): vCloud.AdminCatalog
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyOrgVdcNetwork(targetEntityArg?: vCloud.AdminOrgVdcNetwork, configurationArg?: any, descriptionArg?: string, edgeGatewayArg?: any, isSharedArg?: boolean, nameArg?: string, operationKeyArg?: string, serviceConfigArg?: any): vCloud.AdminOrgVdcNetwork
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyVdc(targetEntityArg?: vCloud.Vdc, allocationModelArg?: string, availableNetworksArg?: any, capabilitiesArg?: any, computeCapacityArg?: any, descriptionArg?: string, isEnabledArg?: boolean, nameArg?: string, networkQuotaArg?: number, nicQuotaArg?: number, operationKeyArg?: string, resourceEntitiesArg?: any, storageCapacityArg?: any, usedNetworkCountArg?: number, vdcStorageProfilesArg?: any, vmQuotaArg?: number): vCloud.Vdc
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyVm(targetEntityArg?: vCloud.VM, dateCreatedArg?: any, deployedArg?: boolean, descriptionArg?: string, environmentArg?: any, nameArg?: string, needsCustomizationArg?: boolean, nestedHypervisorEnabledArg?: boolean, operationKeyArg?: string, storageProfileArg?: any, vAppParentArg?: any, vAppScopedLocalIdArg?: string, vmCapabilitiesArg?: any): vCloud.VM
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyNetworkPool(targetEntityArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyVAppTemplate(targetEntityArg?: vCloud.VAppTemplate, dateCreatedArg?: any, defaultStorageProfileArg?: string, descriptionArg?: string, goldMasterArg?: boolean, nameArg?: string, operationKeyArg?: string, ovfDescriptorUploadedArg?: boolean, ownerArg?: any, vAppScopedLocalIdArg?: string): vCloud.VAppTemplate
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyVApp(targetEntityArg?: vCloud.VApp, dateCreatedArg?: any, deployedArg?: boolean, descriptionArg?: string, inMaintenanceModeArg?: boolean, nameArg?: string, operationKeyArg?: string, ovfDescriptorUploadedArg?: boolean, ownerArg?: any, vAppParentArg?: any): vCloud.VApp
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyApiDefinition(targetEntityArg?: vCloud.ApiDefinition, apiVendorArg?: string, descriptionArg?: string, entryPointArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, supportedApiVersionsArg?: any): vCloud.ApiDefinition
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyCatalogItem(targetEntityArg?: vCloud.CatalogItem, dateCreatedArg?: any, descriptionArg?: string, entityArg?: any, nameArg?: string, operationKeyArg?: string, sizeArg?: number, versionNumberArg?: number): vCloud.CatalogItem
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyTasksList(targetEntityArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyRight(targetEntityArg?: vCloud.Right, bundleKeyArg?: string, categoryArg?: string, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, serviceNamespaceArg?: string): vCloud.Right
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyAuditEvent(targetEntityArg?: vCloud.AuditEvent, descriptionArg?: string, detailsArg?: string, eventTypeArg?: string, nameArg?: string, operationKeyArg?: string, orgArg?: any, ownerArg?: any, serviceNamespaceArg?: string, successArg?: boolean, timeStampArg?: any, userArg?: any): vCloud.AuditEvent
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyGroup(targetEntityArg?: vCloud.Group, descriptionArg?: string, nameArg?: string, nameInSourceArg?: string, operationKeyArg?: string, providerTypeArg?: string, roleArg?: any, usersListArg?: any): vCloud.Group
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyGateway(targetEntityArg?: vCloud.Gateway, configurationArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string): vCloud.Gateway
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyProviderVdc(targetEntityArg?: vCloud.ProviderVdc, availableNetworksArg?: any, capabilitiesArg?: any, computeCapacityArg?: any, descriptionArg?: string, isEnabledArg?: boolean, nameArg?: string, networkPoolReferencesArg?: any, operationKeyArg?: string, storageCapacityArg?: any, storageProfilesArg?: any, vdcsArg?: any): vCloud.ProviderVdc
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyFileDescriptor(targetEntityArg?: any, descriptionArg?: string, fileArg?: any, operationKeyArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyVmAffinityRules(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyExternalNetwork(targetEntityArg?: vCloud.ExternalNetwork, configurationArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, providerInfoArg?: string): vCloud.ExternalNetwork
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyVdcStorageProfile(targetEntityArg?: vCloud.VdcStorageProfile, defaultArg?: boolean, descriptionArg?: string, enabledArg?: boolean, limitArg?: number, nameArg?: string, operationKeyArg?: string, unitsArg?: string): vCloud.VdcStorageProfile
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyService(targetEntityArg?: vCloud.Service, descriptionArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, vendorArg?: string): vCloud.Service
}

declare namespace com.vmware.library.vCloud.schema.entities {
	function modifyTask(targetEntityArg?: vCloud.Task, cancelRequestedArg?: boolean, descriptionArg?: string, detailsArg?: string, endTimeArg?: any, errorArg?: any, expiryTimeArg?: any, nameArg?: string, operationArg?: string, operationKeyArg?: string, operationNameArg?: string, organizationArg?: any, ownerArg?: any, paramsArg?: any, progressArg?: number, serviceNamespaceArg?: string, startTimeArg?: any, userArg?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function deleteCsrCertCsr(targetEntityArg?: vCloud.Csr): void
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function deleteServiceCertServiceCertificate(targetEntityArg?: vCloud.ServiceCertificate): void
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function deleteCertSelfSignedCsr(targetEntityArg?: vCloud.SelfSignedCsr): void
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function getContainedObjectsCrl(targetEntityArg?: vCloud.Crl): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function deleteCaCertCA(targetEntityArg?: vCloud.CA): void
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function getContainedObjectsCA(targetEntityArg?: vCloud.CA): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function getContainedObjectsSelfSignedCsr(targetEntityArg?: vCloud.SelfSignedCsr): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function selfSignCsr(targetEntityArg?: vCloud.Csr, noOfDaysArg?: number): vCloud.SelfSignedCsr
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function addSignedCertCsr(targetEntityArg?: vCloud.Csr, isUploadPemArg?: boolean, pemFileLocationArg?: string, pemContentArg?: string, descArg?: string): Array<vCloud.ServiceCertificate>
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function getContainedObjectsCsr(targetEntityArg?: vCloud.Csr): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function deleteCrlCertCrl(targetEntityArg?: vCloud.Crl): void
}

declare namespace com.vmware.library.vCloud.operation.truststore {
	function getContainedObjectsServiceCertificate(targetEntityArg?: vCloud.ServiceCertificate): Array<any>
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
	function createDhcpOption150Params(tftpServersArg?: Array<string>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
	function createDhcpOptionsParams(option121Arg?: any, option150Arg?: any, option26Arg?: string, option66Arg?: string, option67Arg?: string, othersArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
	function createIPPoolTrinityParams(allowHugeRangeArg?: boolean, autoConfigureDNSArg?: boolean, defaultGatewayArg?: string, dhcpOptionsArg?: any, dnsTypeArg?: string, domainNameArg?: string, ipRangeArg?: string, leaseTimeArg?: string, nextServerArg?: string, primaryNameServerArg?: string, secondaryNameServerArg?: string, subnetMaskArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
	function createDhcpOption121Params(staticRoutesArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
	function createDhcpOption121StaticRouteParams(destinationSubnetArg?: string, routerArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
	function createStaticBindingTrinityParams(autoConfigureDNSArg?: boolean, defaultGatewayArg?: string, dhcpOptionsArg?: any, dnsTypeArg?: string, domainNameArg?: string, hostnameArg?: string, ipAddressArg?: string, leaseTimeArg?: string, macAddressArg?: string, nextServerArg?: string, primaryNameServerArg?: string, secondaryNameServerArg?: string, subnetMaskArg?: string, vmIdArg?: string, vmNameArg?: string, vnicIdArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
	function createDhcpOptionOtherParams(codeArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.Query {
	function getAdminQueryService(vcdHost?: vCloud.Host): any
}

declare namespace com.vmware.library.vCloud.Query {
	function getExtensionQueryService(vcdHost?: vCloud.Host): any
}

declare namespace com.vmware.library.vCloud.Query {
	function getQueryService(vcdHost?: vCloud.Host): any
}

declare namespace com.vmware.library.vCloud.Admin.Organization {
	function getAdminOrganizationFromCatalog(catalog?: vCloud.Catalog): vCloud.AdminOrganization
}

declare namespace com.vmware.library.vCloud.Admin.Organization {
	function getAdminExtensionFromOrganization(organization?: vCloud.Organization): vCloud.HostAdminExtension
}

declare namespace com.vmware.library.vCloud.Admin.Organization {
	function getAdminOrganizationFromOrganization(organization?: vCloud.Organization): vCloud.AdminOrganization
}

declare namespace com.vmware.library.vCloud.Admin.Organization {
	function getAdminHostFromOrganization(organization?: vCloud.Organization): vCloud.HostAdmin
}

declare namespace com.vmware.library.vCloud.Admin.Organization {
	function getAdminOrganizationFromVApp(vApp?: vCloud.VApp): vCloud.AdminOrganization
}

declare namespace com.vmware.library.vCloud.operation.qs.admin.extensions {
	function queryExternalNetworkReferencesExtensionQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs.admin.extensions {
	function queryVimServerReferencesExtensionQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs.admin.extensions {
	function queryDatastoreReferencesExtensionQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs.admin.extensions {
	function queryAllOrgNetworkReferencesExtensionQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs.admin.extensions {
	function queryHostReferencesExtensionQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs.admin.extensions {
	function queryAllOrgVdcReferencesExtensionQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs.admin.extensions {
	function queryProviderVdcReferencesExtensionQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs.admin.extensions {
	function queryAllVappReferencesExtensionQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.operation.qs.admin.extensions {
	function queryNetworkPoolReferencesExtensionQueryService(host?: vCloud.Host, expressionParams?: Array<any>, filterType?: vCloud.FilterType): Array<any>
}

declare namespace com.vmware.library.vCloud.Host {
	function login(url?: string, organization?: string, useSamlAuthentication?: boolean, samlTokenCallbackAction?: Action, username?: string, password?: string, maxConnections?: number, connectionTimeout?: number, cacheTimeout?: number): vCloud.Host
}

declare namespace com.vmware.library.vCloud.Host {
	function getHostByUrl(url?: string, username?: string, organization?: string): vCloud.Host
}

declare namespace com.vmware.library.vCloud.Host {
	function updateHost(organization?: string, sessionMode?: vCloud.HostSessionMode, useSamlAuthentication?: boolean, username?: string, password?: SecureString, cacheTimeout?: number, maxConnections?: number, connectionTimeout?: number, samlTokenCallbackAction?: Action, vCloudHost?: vCloud.Host, enabled?: boolean): vCloud.Host
}

declare namespace com.vmware.library.vCloud.Host {
	function addHost(host?: string, port?: number, organization?: string, sessionMode?: vCloud.HostSessionMode, useSamlAuthentication?: boolean, samlTokenCallbackAction?: Action, username?: string, password?: SecureString, enabled?: boolean, maxConnections?: number, connectionTimeout?: number, cacheTimeout?: number): vCloud.Host
}

declare namespace com.vmware.library.vCloud.Host {
	function getHosts(): Array<vCloud.Host>
}

declare namespace com.vmware.library.vCloud.Host {
	function removeHost(host?: vCloud.Host): void
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
	function createIpAssignmentSection(infoArg?: any, protocolsArg?: string, requiredArg?: boolean, schemesArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
	function createBootOrderSection(infoArg?: any, instanceIdArg?: number, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
	function createLevel(eaxArg?: string, ebxArg?: string, ecxArg?: string, edxArg?: string, levelArg?: string, vendorArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
	function createCpuCompatibilitySection(infoArg?: any, levelArg?: Array<any>, requiredArg?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
	function createCoresPerSocket(requiredArg?: boolean, valueArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
	function createExtraConfig(keyArg?: string, requiredArg?: boolean, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
	function createConfig(keyArg?: string, requiredArg?: boolean, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.environment {
	function createPropertySection(propertyArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.environment {
	function createEntity(sectionArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.environment {
	function createPlatformSection(kindArg?: any, localeArg?: any, timezoneArg?: number, vendorArg?: any, versionArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.environment {
	function createOvfEnvironmentProperty(keyArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.ovf.environment {
	function createEnvironment(entityArg?: Array<any>, sectionArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.vApp {
	function getOrganizationFromVApp(vApp?: vCloud.VApp): vCloud.Organization
}

declare namespace com.vmware.library.vCloud.vApp {
	function getVAppCustomParameterType(vApp?: vCloud.VApp, parameterKey?: string): Array<string>
}

declare namespace com.vmware.library.vCloud.vApp {
	function getVAppCustomParameterList(vApp?: vCloud.VApp): Array<string>
}

declare namespace com.vmware.library.vCloud.vApp {
	function addVAppVM(vApp?: vCloud.VApp, vm?: vCloud.VM, vmName?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.vApp {
	function getVdcFromVApp(vApp?: vCloud.VApp): vCloud.Vdc
}

declare namespace com.vmware.library.vCloud.vApp {
	function addCustomParameter(productSections?: Array<any>, parameterKey?: string, parameterDescription?: string, parameterType?: string, parameterLabel?: string, userConfigurable?: boolean, defaultValue?: any): Array<any>
}

declare namespace com.vmware.library.vCloud.vApp {
	function removeVAppCustomParameter(vApp?: vCloud.VApp, parameterKey?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.vApp {
	function setVAppCustomParameterValue(vApp?: vCloud.VApp, parameterKey?: string, value?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.vApp {
	function composeVApp(vdc?: vCloud.Vdc, vAppName?: string, vAppDescription?: string, runtimeLeaseDays?: number, storageLeaseDays?: number, vms?: Array<vCloud.VM>, vmNames?: Array<string>, vmTemplates?: Array<vCloud.VAppTemplate>, vmTemplateNames?: Array<string>): vCloud.VApp
}

declare namespace com.vmware.library.vCloud.vApp {
	function updateVAppLeaseSettings(vApp?: vCloud.VApp, deploymentLeaseValue?: number, deploymentLeaseType?: string, storageLeaseValue?: number, storageLeaseType?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.vApp {
	function addVAppCustomParameter(vApp?: vCloud.VApp, parameterKey?: string, parameterDescription?: string, parameterType?: string, parameterLabel?: string, userConfigurable?: boolean, defaultValue?: any): vCloud.Task
}

declare namespace com.vmware.library.vCloud.vApp {
	function getVmsFromVApp(vApp?: vCloud.VApp): Array<vCloud.VM>
}

declare namespace com.vmware.library.vCloud.vApp {
	function getVclHostFromVApp(vApp?: vCloud.VApp): vCloud.Host
}

declare namespace com.vmware.library.vCloud.vApp {
	function deleteVAppNetwork(vappNetwork?: vCloud.VAppNetwork): vCloud.Task
}

declare namespace com.vmware.library.vCloud.vApp {
	function removeCustomParameter(productSections?: Array<any>, parameterKey?: string): Array<any>
}

declare namespace com.vmware.library.vCloud.vApp {
	function setCustomParameterValue(productSections?: Array<any>, parameterKey?: string, value?: any): Array<any>
}

declare namespace com.vmware.library.vCloud.vApp {
	function addVAppTemplateVM(vApp?: vCloud.VApp, vmTemplate?: vCloud.VAppTemplate, vmName?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.vApp {
	function listVAppNetworks(vApp?: vCloud.VApp): Array<string>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getAdminVMsByName(vcdHost?: vCloud.Host, name?: string): Array<vCloud.VM>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getAdminVMCatalogName(vm?: vCloud.VM): string
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVAppTemplatesByNameFromAllVcloudHosts(name?: string): Array<vCloud.VAppTemplate>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getServiceLinksLinkHref(vcdHost?: vCloud.Host): Array<string>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVAppByName(vcdHost?: vCloud.Host, vAppName?: string): Array<vCloud.VApp>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVmHostName(vm?: vCloud.VM): string
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVAppTemplatesByName(vcdHost?: vCloud.Host, name?: string): Array<vCloud.VAppTemplate>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getOrgVappNames(organization?: vCloud.Organization): Array<string>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getCatalogItemByEntity(entity?: any): vCloud.CatalogItem
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVAppsByName(vcdHost?: vCloud.Host, name?: string): Array<vCloud.VApp>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getScaffoldVAppProperties(vApp?: vCloud.VApp): Properties
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVAppVms(vApp?: vCloud.VApp): Array<vCloud.VM>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVAppByNameFromVdc(vAppName?: string, vdc?: vCloud.Vdc): vCloud.VApp
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVdcVAppNames(vdc?: vCloud.Vdc): Array<string>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getOrgVdcsAdmin(organization?: vCloud.Organization): Array<vCloud.Vdc>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getRightByName(vcdHost?: vCloud.Host, name?: string): vCloud.Right
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVAppsByNameFromVdc(vAppName?: string, vdc?: vCloud.Vdc): Array<vCloud.VApp>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getServiceLinkFromLinkHref(vcdHost?: vCloud.Host, linkHref?: string): vCloud.AdminServiceLink
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVAppTemplateVmByName(vAppTemplate?: vCloud.VAppTemplate, vmName?: string): vCloud.VAppTemplate
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVmsByName(vcdHost?: vCloud.Host, vmName?: string): Array<vCloud.VM>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVdcVApps(vdc?: vCloud.Vdc): Array<vCloud.VApp>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVAppVmByName(vApp?: vCloud.VApp, vmName?: string): vCloud.VM
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getVAppTemplatesByNameFromVdc(vAppTemplateName?: string, vdc?: vCloud.Vdc): Array<vCloud.VAppTemplate>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getOrgVdcs(organization?: vCloud.Organization): Array<vCloud.Vdc>
}

declare namespace com.vmware.library.vCloud.common.queryService {
	function getCatalogItemByNameFromCatalog(catalogItemName?: string, catalog?: vCloud.Catalog): vCloud.CatalogItem
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto.trinity {
	function createApplicationTrinityParams(applicationIdArg?: Array<string>, serviceArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto.trinity {
	function createFirewallRuleTrinityParams(actionArg?: string, applicationArg?: any, descriptionArg?: string, destinationArg?: any, directionArg?: string, enabledArg?: boolean, invalidApplicationArg?: boolean, invalidDestinationArg?: boolean, invalidSourceArg?: boolean, loggingEnabledArg?: boolean, matchTranslatedArg?: boolean, nameArg?: string, ruleTagArg?: number, ruleTypeArg?: string, sourceArg?: any, statisticsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto.trinity {
	function createServiceTrinityParams(icmpTypeArg?: string, portArg?: Array<string>, protocolArg?: string, sourcePortArg?: Array<string>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto.trinity {
	function createAddressTrinityParams(excludeArg?: boolean, groupingObjectIdArg?: Array<string>, ipAddressArg?: Array<string>, vnicGroupIdArg?: Array<string>): any
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function getEntityLinkNotificationHelper(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function getTaskOwnerLinkNotificationHelper(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function getUserLinkNotificationHelper(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function getNotificationNotificationHelper(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function isBlockingTaskNotificationHelper(targetEntityArg?: any): boolean
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function getOrgLinkNotificationHelper(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function getEntityLinkTypeNotificationHelper(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function setMessageNotificationHelper(targetEntityArg?: any, arg0?: string): void
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function getTaskOwnerLinkTypeNotificationHelper(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function setMessageHeaderNotificationHelper(targetEntityArg?: any, arg0?: string, arg1?: any): void
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function getMessageNotificationHelper(targetEntityArg?: any): string
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function getMessageHeaderNotificationHelper(targetEntityArg?: any, arg0?: string): any
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function getBlockingTaskLinkNotificationHelper(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.operation.maas {
	function getNotificationEventTypeNotificationHelper(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.Admin.Role {
	function getAdminHostFromRole(role?: vCloud.Role): vCloud.HostAdmin
}

declare namespace com.vmware.library.vCloud.Admin.Role {
	function getPossibleRolesFromOrganization(organization?: vCloud.Organization): Array<vCloud.Role>
}

declare namespace com.vmware.library.vCloud.Admin.Role {
	function getPossibleRolesFromUser(user?: vCloud.User): Array<vCloud.Role>
}

declare namespace com.vmware.library.vCloud.schema.entities.edge.dhcp.dto.trinity {
	function modifyStaticBindingTrinity(targetEntityArg?: vCloud.DHCPBinding, autoConfigureDNSArg?: boolean, defaultGatewayArg?: string, dhcpOptionsArg?: any, dnsTypeArg?: string, domainNameArg?: string, hostnameArg?: string, ipAddressArg?: string, leaseTimeArg?: string, macAddressArg?: string, nextServerArg?: string, primaryNameServerArg?: string, secondaryNameServerArg?: string, subnetMaskArg?: string, vmIdArg?: string, vmNameArg?: string, vnicIdArg?: number): vCloud.DHCPBinding
}

declare namespace com.vmware.library.vCloud.schema.entities.edge.dhcp.dto.trinity {
	function modifyIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool, allowHugeRangeArg?: boolean, autoConfigureDNSArg?: boolean, defaultGatewayArg?: string, dhcpOptionsArg?: any, dnsTypeArg?: string, domainNameArg?: string, ipRangeArg?: string, leaseTimeArg?: string, nextServerArg?: string, poolIdArg?: string, primaryNameServerArg?: string, secondaryNameServerArg?: string, subnetMaskArg?: string): vCloud.DHCPIpPool
}

declare namespace com.vmware.library.vCloud.CatalogItem {
	function getOrganizationFromCatalog(catalog?: vCloud.Catalog): vCloud.Organization
}

declare namespace com.vmware.library.vCloud.CatalogItem {
	function getOrganizationFromCatalogItem(catalogItem?: vCloud.CatalogItem): vCloud.Organization
}

declare namespace com.vmware.library.vCloud.vApp.Network.Config.Firewall {
	function createFirewallRuleProtocols(udp?: boolean, tcp?: boolean, icmp?: boolean, any?: boolean): any
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyVMWVdcTemplateList(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyCatalogSettings(targetEntityArg?: any, isSyncEnabledArg?: boolean, refreshIntervalArg?: number, syncStartDateArg?: any, syncStopDateArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyVMWVdcTemplate(targetEntityArg?: vCloud.VmwVdcTemplate, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, tenantDescriptionArg?: string, tenantNameArg?: string, vdcTemplateSpecificationArg?: any): vCloud.VmwVdcTemplate
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyAdminServiceLink(targetEntityArg?: vCloud.AdminServiceLink, linkHrefArg?: string, mimeTypeArg?: string, operationKeyArg?: string, relArg?: string, resourceIdArg?: string, resourceTypeArg?: string): vCloud.AdminServiceLink
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyDatastore(targetEntityArg?: vCloud.VmwDatastore, busyArg?: boolean, datastoreFsTypeArg?: string, descriptionArg?: string, enabledArg?: boolean, membersArg?: any, mountDirectoryArg?: string, mountHostArg?: string, nameArg?: string, operationKeyArg?: string, provisionedSpaceGbArg?: number, provisionedSpaceMbArg?: number, requestedStorageGbArg?: number, requestedStorageMbArg?: number, systemMessagesArg?: string, thresholdRedGbArg?: number, thresholdYellowGbArg?: number, totalCapacityGbArg?: number, totalCapacityMbArg?: number, usedCapacityGbArg?: number, usedCapacityMbArg?: number, usedCapacityPercentArg?: number, vAAIForFpEnabledArg?: boolean, vcDisplayNameArg?: string, vimObjectRefArg?: any, vimPropertyPageUrlArg?: string): vCloud.VmwDatastore
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyVMWExternalNetwork(targetEntityArg?: vCloud.VmwExternalNetwork, configurationArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, vimPortGroupRefArg?: any): vCloud.VmwExternalNetwork
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyResourceClassAction(targetEntityArg?: vCloud.AdminResourceClassAction, aclRulesArg?: any, descriptionArg?: string, httpMethodArg?: string, nameArg?: string, operationKeyArg?: string, urlPatternArg?: string): vCloud.AdminResourceClassAction
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyVMWNetworkPool(targetEntityArg?: vCloud.VmwNetworkPool, descriptionArg?: string, nameArg?: string, operationKeyArg?: string): vCloud.VmwNetworkPool
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyServiceResource(targetEntityArg?: vCloud.AdminServiceResource, descriptionArg?: string, externalObjectIdArg?: string, nameArg?: string, operationKeyArg?: string, orgArg?: any): vCloud.AdminServiceResource
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyVimServer(targetEntityArg?: vCloud.VimServer, descriptionArg?: string, isConnectedArg?: boolean, isEnabledArg?: boolean, nameArg?: string, operationKeyArg?: string, passwordArg?: string, shieldManagerHostArg?: string, shieldManagerUserNameArg?: string, urlArg?: string, useVsphereServiceArg?: boolean, usernameArg?: string, uuidArg?: string, vcProxyArg?: string, vcVersionArg?: string, vsphereWebClientServerUrlArg?: string): vCloud.VimServer
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyAdminApiDefinition(targetEntityArg?: vCloud.AdminApiDefinition, apiVendorArg?: string, descriptionArg?: string, entryPointArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, supportedApiVersionsArg?: any): vCloud.AdminApiDefinition
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, availableNetworksArg?: any, capabilitiesArg?: any, computeCapacityArg?: any, dataStoreRefsArg?: any, descriptionArg?: string, highestSupportedHardwareVersionArg?: string, hostReferencesArg?: any, isEnabledArg?: boolean, nameArg?: string, networkPoolReferencesArg?: any, operationKeyArg?: string, resourcePoolRefsArg?: any, storageCapacityArg?: any, storageProfilesArg?: any, vdcsArg?: any): vCloud.VmwProviderVdc
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyStrandedItem(targetEntityArg?: vCloud.StrandedItem, deletionDateArg?: any, descriptionArg?: string, entityTypeArg?: string, errorMessageArg?: string, nameArg?: string, operationKeyArg?: string, strandedItemVimObjectsArg?: any): vCloud.StrandedItem
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyAclRule(targetEntityArg?: vCloud.AdminAclRule, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, organizationAccessArg?: any, principalAccessArg?: any, serviceResourceAccessArg?: any): vCloud.AdminAclRule
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyBlockingTask(targetEntityArg?: vCloud.BlockingTask, createdTimeArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, organizationArg?: any, taskOwnerArg?: any, timeoutActionArg?: string, timeoutDateArg?: any, userArg?: any): vCloud.BlockingTask
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyAdminFileDescriptor(targetEntityArg?: vCloud.AdminFileDescriptor, descriptionArg?: string, fileArg?: any, operationKeyArg?: string): vCloud.AdminFileDescriptor
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyResourceClass(targetEntityArg?: vCloud.AdminResourceClass, descriptionArg?: string, mimeTypeArg?: string, nameArg?: string, nidArg?: string, operationKeyArg?: string, resourceClassActionsArg?: any, serviceResourcesArg?: any, urlTemplateArg?: string, urnPatternArg?: string): vCloud.AdminResourceClass
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyAdminService(targetEntityArg?: vCloud.AdminService, apiDefinitionsArg?: any, apiFiltersArg?: any, authorizationEnabledArg?: boolean, descriptionArg?: string, enabledArg?: boolean, exchangeArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, priorityArg?: number, resourceClassesArg?: any, routingKeyArg?: string, serviceLinksArg?: any, vendorArg?: string): vCloud.AdminService
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyVMWVdcTemplates(targetEntityArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyApiFilter(targetEntityArg?: vCloud.AdminApiFilter, operationKeyArg?: string, responseContentTypeArg?: string, urlPatternArg?: string): vCloud.AdminApiFilter
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyHost(targetEntityArg?: vCloud.VmwHost, availableArg?: boolean, busyArg?: boolean, cpuTotalArg?: number, cpuTypeArg?: string, descriptionArg?: string, enableHostForHostSpanningArg?: boolean, enabledArg?: boolean, hostOsNameArg?: string, hostOsVersionArg?: string, memTotalArg?: number, memUsedArg?: number, nameArg?: string, numOfCpusLogicalArg?: number, numOfCpusPackagesArg?: number, operationKeyArg?: string, readyArg?: boolean, systemMessagesArg?: string, vimPropertyPageUrlArg?: string, vmMoRefArg?: string): vCloud.VmwHost
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyLicensingReport(targetEntityArg?: vCloud.LicensingReport, productSerialNumberArg?: string, reportDateArg?: any, signatureArg?: string): vCloud.LicensingReport
}

declare namespace com.vmware.library.vCloud.schema.entities.extension {
	function modifyVMWProviderVdcStorageProfile(targetEntityArg?: vCloud.VmwProviderVdcStorageProfile, capacityTotalArg?: number, capacityUsedArg?: number, descriptionArg?: string, enabledArg?: boolean, nameArg?: string, operationKeyArg?: string, unitsArg?: string, vimStorageProfileArg?: any): vCloud.VmwProviderVdcStorageProfile
}

declare namespace com.vmware.library.vCloud.schema.entities.truststore.dto {
	function modifyCertificate(targetEntityArg?: vCloud.Certificate, certificateTypeArg?: string, descriptionArg?: string, extendedAttributesArg?: any, isUniversalArg?: boolean, issuerCnArg?: string, nameArg?: string, nodeIdArg?: string, pemEncodingArg?: string, scopeArg?: any, subjectCnArg?: string, universalRevisionArg?: number, x509CertificatesArg?: any): vCloud.Certificate
}

declare namespace com.vmware.library.vCloud.schema.entities.truststore.dto {
	function modifyCrl(targetEntityArg?: vCloud.Crl, descriptionArg?: string, extendedAttributesArg?: any, isUniversalArg?: boolean, issuerCnArg?: string, nameArg?: string, nodeIdArg?: string, pemEncodingArg?: string, scopeArg?: any, universalRevisionArg?: number, x509CrlArg?: any): vCloud.Crl
}

declare namespace com.vmware.library.vCloud.schema.entities.truststore.dto {
	function modifyCsr(targetEntityArg?: vCloud.Csr, algorithmArg?: string, cnArg?: string, descriptionArg?: string, extendedAttributesArg?: any, isUniversalArg?: boolean, keySizeArg?: string, nameArg?: string, nodeIdArg?: string, pemEncodingArg?: string, scopeArg?: any, subjectArg?: any, universalRevisionArg?: number): vCloud.Csr
}

declare namespace com.vmware.library.vCloud.schema.entities.truststore.dto {
	function modifyX509Certificate(targetEntityArg?: any, caArg?: boolean, dsaPublicKeyGArg?: string, dsaPublicKeyPArg?: string, dsaPublicKeyQArg?: string, dsaPublicKeyYArg?: string, isCaArg?: boolean, isValidArg?: boolean, issuerArg?: string, issuerCnArg?: string, md5HashArg?: string, notAfterArg?: string, notBeforeArg?: string, publicKeyAlgoArg?: string, publicKeyLengthArg?: string, rsaPublicKeyExponentArg?: string, rsaPublicKeyModulusArg?: string, serialNumberArg?: string, sha1HashArg?: string, signatureArg?: string, signatureAlgoArg?: string, subjectArg?: string, subjectCnArg?: string, validArg?: boolean, versionArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.dto {
	function createFeatureConfigParams(enabledArg?: boolean, templateArg?: string, versionArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.entities.edge.nat.dto {
	function modifyNatRule(targetEntityArg?: vCloud.NatRule, actionArg?: string, descriptionArg?: string, enabledArg?: boolean, icmpTypeArg?: string, loggingEnabledArg?: boolean, originalAddressArg?: string, originalPortArg?: string, protocolArg?: string, ruleIdArg?: number, ruleTagArg?: number, ruleTypeArg?: string, translatedAddressArg?: string, translatedPortArg?: string, vnicArg?: string): vCloud.NatRule
}

declare namespace com.vmware.library.vCloud.schema.entities.edge.nat.dto {
	function modifyNatRules(targetEntityArg?: any, natRulesDtosArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.entities.edge.nat.dto {
	function modifyNatConfig(targetEntityArg?: any, enabledArg?: boolean, rulesArg?: any, templateArg?: string, versionArg?: number): any
}

declare namespace com.vmware.library.vCloud.Admin.Group {
	function getAdminHostFromGroup(group?: vCloud.Group): vCloud.HostAdmin
}

declare namespace com.vmware.library.vCloud.Admin.Group {
	function getAdminOrganizationFromGroup(group?: vCloud.Group): vCloud.HostAdmin
}

declare namespace com.vmware.library.vCloud.Admin.Group {
	function getPossibleGroupsFromUser(user?: vCloud.User): Array<vCloud.Group>
}

declare namespace com.vmware.library.vCloud.Admin.Group {
	function getPossibleGroupsFromOrganization(organization?: vCloud.Organization): Array<vCloud.Group>
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto {
	function createFirewallRuleBaseParams(descriptionArg?: string, directionArg?: string, enabledArg?: boolean, invalidApplicationArg?: boolean, invalidDestinationArg?: boolean, invalidSourceArg?: boolean, loggingEnabledArg?: boolean, matchTranslatedArg?: boolean, nameArg?: string, ruleIdArg?: number, ruleTagArg?: number, ruleTypeArg?: string, statisticsArg?: any): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto {
	function createFirewallRuleStatsParams(byteCountArg?: number, connectionCountArg?: number, packetCountArg?: number, timestampArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.dto {
	function createKeyValueParams(keyArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.dto {
	function createScopeInfoParams(nameArg?: string, objectTypeNameArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.dto {
	function createExtendedAttributeParams(nameArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.dto {
	function createObjectTypeParams(nameArg?: string): any
}

declare namespace com.vmware.library.vCloud.vApp.VM.Guest {
	function changeComputerName(vm?: vCloud.VM, computerName?: string): vCloud.Task
}

declare namespace com.vmware.library.vCloud.Admin.Extension.Notifications {
	function composeRoutingKey(operationSuccess?: string, entityId?: string, organizationId?: string, userId?: string, eventTypes?: Array<string>, taskName?: string): string
}

declare namespace com.vmware.library.vCloud.schema.objects.versioning {
	function createMediaMapping(complexTypeNameArg?: string, mediaTypeArg?: string, schemaLocationArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.objects.versioning {
	function createSupportedVersions(versionInfoArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.versioning {
	function createVersionInfo(loginUrlArg?: string, mediaTypeMappingArg?: Array<any>, versionArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.entities.edge.dto {
	function modifyFeatureConfig(targetEntityArg?: any, enabledArg?: boolean, templateArg?: string, versionArg?: number): any
}

declare namespace com.vmware.library.vCloud.Admin.User {
	function isExternalUser(user?: vCloud.User): boolean
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.nat.dto {
	function createNatRulesParams(natRulesDtosArg?: Array<any>): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.nat.dto {
	function createNatConfigParams(enabledArg?: boolean, rulesArg?: any, templateArg?: string, versionArg?: number): any
}

declare namespace com.vmware.library.vCloud.schema.objects.edge.nat.dto {
	function createNatRuleParams(actionArg?: string, descriptionArg?: string, enabledArg?: boolean, icmpTypeArg?: string, loggingEnabledArg?: boolean, originalAddressArg?: string, originalPortArg?: string, protocolArg?: string, ruleTagArg?: number, ruleTypeArg?: string, translatedAddressArg?: string, translatedPortArg?: string, vnicArg?: string): any
}

declare namespace com.vmware.library.vCloud.Admin.Extension.VIM Server {
	function getHostFromVimServer(vimServer?: vCloud.VimServer): vCloud.Host
}

declare namespace com.vmware.library.vCloud.schema.entities.dto {
	function modifyExtendedAttribute(targetEntityArg?: any, nameArg?: string, valueArg?: string): any
}

declare namespace com.vmware.library.vCloud.schema.entities.edge.Firewall.dto.trinity {
	function modifyFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, actionArg?: string, applicationArg?: any, descriptionArg?: string, destinationArg?: any, directionArg?: string, enabledArg?: boolean, invalidApplicationArg?: boolean, invalidDestinationArg?: boolean, invalidSourceArg?: boolean, loggingEnabledArg?: boolean, matchTranslatedArg?: boolean, nameArg?: string, ruleIdArg?: number, ruleTagArg?: number, ruleTypeArg?: string, sourceArg?: any, statisticsArg?: any): vCloud.FirewallRule
}

declare namespace com.vmware.vrops.remediation {
	function checkvcacconfig(): boolean
}

