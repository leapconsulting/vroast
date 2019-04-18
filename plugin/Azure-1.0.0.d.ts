/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	declare class AzureAaaaRecord
	{
		ipv6Address: String;

		constructor(ipv6Address?: String);
		constructor();
	}

	interface AzureAccountStatus
	{
		readonly Available: AzureAccountStatus;
		readonly Unavailable: AzureAccountStatus;

	}

	declare const AzureAccountStatus: AzureAccountStatus;

	interface AzureAccountType
	{
		readonly PremiumLRS: AzureAccountType;
		readonly StandardGRS: AzureAccountType;
		readonly StandardLRS: AzureAccountType;
		readonly StandardRAGRS: AzureAccountType;
		readonly StandardZRS: AzureAccountType;

	}

	declare const AzureAccountType: AzureAccountType;

	declare class AzureAdditionalUnattendContent
	{
		componentName: String;
		content: String;
		passName: String;
		settingName: String;

		constructor();
	}

	declare class AzureAddressSpace
	{
		addressPrefixes: Object[];

		constructor();
	}

	declare class AzureApiEntityReference
	{
		referenceUri: String;

		constructor();
	}

	declare class AzureApiError
	{
		code: String;
		details: Object[];
		innerError: AzureInnerError;
		message: String;
		target: String;

		constructor();
	}

	declare class AzureApiErrorBase
	{
		code: String;
		message: String;
		target: String;

		constructor();
	}

	declare class AzureApplicationGateway
	{
		backendAddressPools: Object[];
		backendHttpSettingsCollection: Object[];
		etag: String;
		frontendIPConfigurations: Object[];
		frontendPorts: Object[];
		gatewayIPConfigurations: Object[];
		httpListeners: Object[];
		id: String;
		location: String;
		name: String;
		operationalState: String;
		provisioningState: String;
		requestRoutingRules: Object[];
		resourceGuid: String;
		sku: AzureApplicationGatewaySku;
		sslCertificates: Object[];
		tags: Properties;
		type: String;

		constructor();
		constructor(location?: String);
	}

	declare class AzureApplicationGatewayBackendAddress
	{
		fqdn: String;
		ipAddress: String;

		constructor();
	}

	declare class AzureApplicationGatewayBackendAddressPool
	{
		backendAddresses: Object[];
		backendIPConfigurations: Object[];
		etag: String;
		id: String;
		name: String;
		provisioningState: String;

		constructor();
	}

	declare class AzureApplicationGatewayBackendHttpSettings
	{
		cookieBasedAffinity: String;
		etag: String;
		id: String;
		name: String;
		port: Number;
		protocol: String;
		provisioningState: String;

		constructor();
	}

	declare class AzureApplicationGatewayFrontendIPConfiguration
	{
		etag: String;
		id: String;
		name: String;
		privateIPAddress: String;
		privateIPAllocationMethod: String;
		provisioningState: String;
		publicIPAddress: AzureResourceId;
		subnet: AzureResourceId;

		constructor();
	}

	declare class AzureApplicationGatewayFrontendPort
	{
		etag: String;
		id: String;
		name: String;
		port: Number;
		provisioningState: String;

		constructor();
	}

	declare class AzureApplicationGatewayGetResponse
	{
		applicationGateway: AzureApplicationGateway;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureApplicationGatewayHttpListener
	{
		etag: String;
		frontendIPConfiguration: AzureResourceId;
		frontendPort: AzureResourceId;
		id: String;
		name: String;
		protocol: String;
		provisioningState: String;
		sslCertificate: AzureResourceId;

		constructor();
	}

	declare class AzureApplicationGatewayIPConfiguration
	{
		etag: String;
		id: String;
		name: String;
		provisioningState: String;
		subnet: AzureResourceId;

		constructor();
	}

	declare class AzureApplicationGatewayListResponse
	{
		applicationGateways: Object[];
		nextLink: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureApplicationGatewayOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: AzureApplicationGateway): AzureApplicationGatewayPutResponse;
		beginDeleting(arg0?: String, arg1?: String): AzureUpdateOperationResponse;
		beginStart(arg0?: String, arg1?: String): AzureVirtualNetworkGatewayPutResponse;
		beginStop(arg0?: String, arg1?: String): AzureVirtualNetworkGatewayPutResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureApplicationGateway): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureApplicationGatewayGetResponse;
		list(arg0?: String): AzureApplicationGatewayListResponse;
		listAll(): AzureApplicationGatewayListResponse;
		start(arg0?: String, arg1?: String): AzureAzureAsyncOperationResponse;
		stop(arg0?: String, arg1?: String): AzureAzureAsyncOperationResponse;
	}

	declare const AzureApplicationGatewayOperations: AzureApplicationGatewayOperations;

	declare class AzureApplicationGatewayPutResponse
	{
		applicationGateway: AzureApplicationGateway;
		azureAsyncOperation: String;
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureApplicationGatewayRequestRoutingRule
	{
		backendAddressPool: AzureResourceId;
		backendHttpSettings: AzureResourceId;
		etag: String;
		httpListener: AzureResourceId;
		id: String;
		name: String;
		provisioningState: String;
		ruleType: String;

		constructor();
	}

	declare class AzureApplicationGatewaySku
	{
		capacity: Number;
		name: String;
		tier: String;

		constructor();
	}

	declare class AzureApplicationGatewaySslCertificate
	{
		data: String;
		etag: String;
		id: String;
		name: String;
		password: String;
		provisioningState: String;
		publicCertData: String;

		constructor();
	}

	declare class AzureARecord
	{
		ipv4Address: String;

		constructor(ipv4Address?: String);
		constructor();
	}

	declare class AzureAvailabilitySet
	{
		connection: AzureConnection;
		displayName: String;
		id: String;
		internalIdString: String;
		location: String;
		name: String;
		platformFaultDomainCount: Number;
		platformUpdateDomainCount: Number;
		resourceGroup: AzureResourceGroupExtended;
		statuses: Object[];
		tags: Properties;
		type: String;
		virtualMachinesReferences: Object[];

		constructor(location?: String);
		constructor();
		delete(): void;
	}

	declare class AzureAvailabilitySetCreateOrUpdateResponse
	{
		availabilitySet: AzureAvailabilitySet;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureAvailabilitySetGetResponse
	{
		availabilitySet: AzureAvailabilitySet;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureAvailabilitySetListResponse
	{
		availabilitySets: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureAvailabilitySetOperations
	{

		createOrUpdate(arg0?: String, arg1?: AzureAvailabilitySet): AzureAvailabilitySetCreateOrUpdateResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureAvailabilitySetGetResponse;
		list(arg0?: String): AzureAvailabilitySetListResponse;
		listAvailableSizes(arg0?: String, arg1?: String): AzureVirtualMachineSizeListResponse;
	}

	declare const AzureAvailabilitySetOperations: AzureAvailabilitySetOperations;

	declare class AzureAvailabilitySetReference
	{
		referenceUri: String;

		constructor();
	}

	declare class AzureAzureAsyncOperationResponse
	{
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		status: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureAzureResponse
	{
		payload: Object;
		protocolVersion: String;
		reasonPhrase: String;
		statusCode: Number;

		constructor(statusCode?: Number, reasonPhrase?: String, protocolVersion?: String, payload?: Object);
		payloadAsString(): String;
	}

	declare class AzureBackendAddressPool
	{
		backendIpConfigurations: Object[];
		etag: String;
		id: String;
		loadBalancingRules: Object[];
		name: String;
		outboundNatRule: AzureResourceId;
		provisioningState: String;

		constructor();
	}

	declare class AzureBackupItem
	{
		blobName: String;
		correlationId: String;
		created: Date;
		databases: Object[];
		finishedTimeStamp: Date;
		lastRestoreTimeStamp: Date;
		log: String;
		name: String;
		scheduled: boolean;
		sizeInBytes: Number;
		status: AzureBackupItemStatus;
		storageAccountUrl: String;

		constructor();
	}

	declare class AzureBackupItemEnvelope
	{
		id: String;
		location: String;
		name: String;
		properties: AzureBackupItem;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureBackupItemsEnvelope
	{
		id: String;
		location: String;
		name: String;
		properties: Object[];
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	interface AzureBackupItemStatus
	{
		readonly Created: AzureBackupItemStatus;
		readonly Failed: AzureBackupItemStatus;
		readonly InProgress: AzureBackupItemStatus;
		readonly PartiallySucceeded: AzureBackupItemStatus;
		readonly Skipped: AzureBackupItemStatus;
		readonly Succeeded: AzureBackupItemStatus;
		readonly TimedOut: AzureBackupItemStatus;

	}

	declare const AzureBackupItemStatus: AzureBackupItemStatus;

	declare class AzureBackupRequest
	{
		backupSchedule: AzureBackupSchedule;
		databases: Object[];
		enabled: boolean;
		name: String;
		storageAccountUrl: String;

		constructor();
	}

	declare class AzureBackupRequestEnvelope
	{
		id: String;
		location: String;
		name: String;
		request: AzureBackupRequest;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureBackupSchedule
	{
		frequencyInterval: Number;
		frequencyUnit: AzureFrequencyUnit;
		keepAtLeastOneBackup: boolean;
		lastExecutionTime: Date;
		retentionPeriodInDays: Number;
		startTime: Date;

		constructor();
	}

	declare class AzureBackupScheduleRequestEnvelope
	{
		id: String;
		location: String;
		name: String;
		properties: AzureBackupScheduleRequestResponse;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureBackupScheduleRequestResponse
	{
		backupSchedule: AzureBackupSchedule;
		databases: Object[];
		enabled: boolean;
		name: String;
		storageAccountUrl: String;

		constructor();
	}

	declare class AzureBaseAuditingPolicyProperties
	{
		auditingState: String;
		auditLogsTableName: String;
		eventTypesToAudit: String;
		fullAuditLogsTableName: String;
		retentionDays: String;
		storageAccountKey: String;
		storageAccountName: String;
		storageAccountResourceGroupName: String;
		storageAccountSecondaryKey: String;
		storageAccountSubscriptionId: String;
		storageTableEndpoint: String;

		constructor();
	}

	declare class AzureBasicDependency
	{
		id: String;
		resourceName: String;
		resourceType: String;

		constructor();
	}

	declare class AzureBootDiagnostics
	{
		enabled: boolean;
		storageUri: String;

		constructor();
	}

	declare class AzureBootDiagnosticsInstanceView
	{
		consoleScreenshotBlobUri: String;
		serialConsoleLogBlobUri: String;

		constructor();
	}

	declare class AzureCheckNameAvailabilityResponse
	{
		message: String;
		nameAvailable: boolean;
		reason: AzureReason;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureChildResource
	{
		etag: String;
		id: String;
		name: String;

		constructor();
	}

	declare class AzureCloningInfo
	{
		cloneCustomHostNames: boolean;
		correlationId: String;
		hostingEnvironment: String;
		overwrite: boolean;
		source: AzureSourceWebSite;

		constructor();
	}

	declare class AzureCnameRecord
	{
		cname: String;

		constructor(cname?: String);
		constructor();
	}

	declare class AzureColumn
	{
		id: String;
		location: String;
		name: String;
		properties: AzureColumnProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureColumnProperties
	{
		columnType: String;

		constructor();
	}

	declare class AzureComputeLongRunningOperationResponse
	{
		endTime: Date;
		error: AzureApiError;
		output: String;
		requestId: String;
		startTime: Date;
		status: AzureComputeOperationStatus;
		statusCode: Number;
		trackingOperationId: String;

		constructor();
	}

	interface AzureComputeManagementClient
	{
		apiVersion: String;
		availabilitySetsOperations: AzureAvailabilitySetOperations;
		baseUri: String;
		longRunningOperationInitialTimeout: Number;
		longRunningOperationRetryTimeout: Number;
		usageOperations: AzureComputeUsageOperations;
		virtualMachineExtensionImagesOperations: AzureVirtualMachineExtensionImageOperations;
		virtualMachineExtensionsOperations: AzureVirtualMachineExtensionOperations;
		virtualMachineImagesOperations: AzureVirtualMachineImageOperations;
		virtualMachineSizesOperations: AzureVirtualMachineSizeOperations;
		virtualMachinesOperations: AzureVirtualMachineOperations;

		close(): void;
		getDeleteOperationStatus(arg0?: String): AzureDeleteOperationResponse;
		getLongRunningOperationStatus(arg0?: String): AzureComputeLongRunningOperationResponse;
	}

	declare const AzureComputeManagementClient: AzureComputeManagementClient;

	declare class AzureComputeOperationResponse
	{
		azureAsyncOperation: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureComputeOperationStatus
	{
		readonly Failed: AzureComputeOperationStatus;
		readonly InProgress: AzureComputeOperationStatus;
		readonly Preempted: AzureComputeOperationStatus;
		readonly Succeeded: AzureComputeOperationStatus;

	}

	declare const AzureComputeOperationStatus: AzureComputeOperationStatus;

	interface AzureComputeUsageOperations
	{

		list(arg0?: String): AzureListUsagesResponse;
	}

	declare const AzureComputeUsageOperations: AzureComputeUsageOperations;

	interface AzureConnection
	{
		clientId: String;
		computeClient: AzureComputeManagementClient;
		databaseClient: AzureSqlManagementClient;
		displayName: String;
		dnsManagementClient: AzureDnsManagementClient;
		genericClient: AzureGenericClient;
		locations: Object[];
		loginUrl: String;
		managementUri: String;
		name: String;
		networkClient: AzureNetworkResourceProviderClient;
		ownerId: String;
		proxyHost: String;
		proxyPort: Number;
		resourceClient: AzureResourceManagementClient;
		resourceGroups: AzureResourceGroupExtended[];
		storageAccounts: AzureStorageAccount[];
		storageClient: AzureStorageManagementClient;
		subscriptionId: String;
		tenantId: String;
		virtualNetworks: AzureVirtualNetwork[];
		websiteClient: AzureWebSiteManagementClient;

		acquireNewToken(): void;
		afterPropertiesSet(): void;
		destroy(): void;
		getLocationByName(locationName?: String): AzureLocation;
		getResourceGroupByName(resourceGroupName?: String): AzureResourceGroupExtended;
		update(props?: Object): void;
		validate(): void;
	}

	interface AzureConnectionConstructor {
		new(value?:any): AzureConnection;
		readonly prototype: AzureConnection;
	}

	declare const AzureConnection: AzureConnectionConstructor;

	interface AzureConnectionManager
	{

		delete(connection?: AzureConnection): void;
		getConnections(id?: String): AzureConnection;
		save(props?: Object, keystoreLocation?: String): String;
		saveFromPem(props?: Object, privateKey?: String, certificate?: String): String;
		saveFromResource(props?: Object, resource?: ResourceElement): String;
	}

	declare const AzureConnectionManager: AzureConnectionManager;

	declare class AzureConnectionResetSharedKey
	{
		keyLength: Number;

		constructor();
	}

	declare class AzureConnectionResetSharedKeyPutResponse
	{
		azureAsyncOperation: String;
		connectionResetSharedKey: AzureConnectionResetSharedKey;
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureConnectionSharedKey
	{
		value: String;

		constructor();
	}

	declare class AzureConnectionSharedKeyPutResponse
	{
		azureAsyncOperation: String;
		connectionSharedKey: AzureConnectionSharedKey;
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureConnectionSharedKeyResponse
	{
		requestId: String;
		statusCode: Number;
		value: String;

		constructor();
	}

	declare class AzureConnectionStringInfo
	{
		connectionString: String;
		name: String;
		type: AzureDatabaseServerType;

		constructor();
	}

	declare class AzureCreateUpdateBase
	{
		location: String;
		tags: Properties;

		constructor(location?: String, tags?: Properties);
		constructor();
	}

	declare class AzureCustomDomain
	{
		name: String;
		useSubDomain: boolean;

		constructor(name?: String);
		constructor();
	}

	declare class AzureDatabase
	{
		connection: AzureConnection;
		displayName: String;
		id: String;
		internalIdString: String;
		location: String;
		name: String;
		properties: AzureDatabaseProperties;
		resourceGroup: AzureResourceGroupExtended;
		status: String;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
		delete(): void;
	}

	interface AzureDatabaseActivationOperations
	{

		beginPause(arg0?: String, arg1?: String, arg2?: String): AzureDatabaseCreateOrUpdateResponse;
		beginResume(arg0?: String, arg1?: String, arg2?: String): AzureDatabaseCreateOrUpdateResponse;
		getDatabaseActivationOperationStatus(arg0?: String): AzureDatabaseCreateOrUpdateResponse;
		pause(arg0?: String, arg1?: String, arg2?: String): AzureDatabaseCreateOrUpdateResponse;
		resume(arg0?: String, arg1?: String, arg2?: String): AzureDatabaseCreateOrUpdateResponse;
	}

	declare const AzureDatabaseActivationOperations: AzureDatabaseActivationOperations;

	declare class AzureDatabaseAuditingPolicy
	{
		id: String;
		location: String;
		name: String;
		properties: AzureDatabaseAuditingPolicyProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureDatabaseAuditingPolicyCreateOrUpdateParameters
	{
		properties: AzureDatabaseAuditingPolicyProperties;

		constructor(properties?: AzureDatabaseAuditingPolicyProperties);
		constructor();
	}

	declare class AzureDatabaseAuditingPolicyGetResponse
	{
		auditingPolicy: AzureDatabaseAuditingPolicy;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDatabaseAuditingPolicyProperties
	{
		auditingState: String;
		auditLogsTableName: String;
		eventTypesToAudit: String;
		fullAuditLogsTableName: String;
		retentionDays: String;
		storageAccountKey: String;
		storageAccountName: String;
		storageAccountResourceGroupName: String;
		storageAccountSecondaryKey: String;
		storageAccountSubscriptionId: String;
		storageTableEndpoint: String;
		useServerDefault: String;

		constructor();
	}

	interface AzureDatabaseBackupOperations
	{

		listRestorePoints(arg0?: String, arg1?: String, arg2?: String): AzureRestorePointListResponse;
	}

	declare const AzureDatabaseBackupOperations: AzureDatabaseBackupOperations;

	declare class AzureDatabaseBackupSetting
	{
		connectionString: String;
		connectionStringName: String;
		databaseType: String;
		name: String;

		constructor();
	}

	declare class AzureDatabaseCreateOrUpdateParameters
	{
		location: String;
		properties: AzureDatabaseCreateOrUpdateProperties;
		tags: Properties;

		constructor(properties?: AzureDatabaseCreateOrUpdateProperties, location?: String);
		constructor();
	}

	declare class AzureDatabaseCreateOrUpdateProperties
	{
		collation: String;
		createMode: String;
		edition: String;
		elasticPoolName: String;
		maxSizeBytes: Number;
		requestedServiceObjectiveId: String;
		requestedServiceObjectiveName: String;
		sourceDatabaseId: String;

		constructor();
	}

	declare class AzureDatabaseCreateOrUpdateResponse
	{
		database: AzureDatabase;
		error: AzureErrorResponse;
		operationStatusLink: String;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureDatabaseGetResponse
	{
		database: AzureDatabase;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDatabaseListResponse
	{
		databases: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDatabaseMetric
	{
		currentValue: Number;
		displayName: String;
		limit: Number;
		nextResetTime: Date;
		resourceName: String;
		unit: String;

		constructor();
	}

	declare class AzureDatabaseMetricListResponse
	{
		metrics: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureDatabaseOperations
	{

		beginCreateOrUpdate(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureDatabaseCreateOrUpdateParameters): AzureDatabaseCreateOrUpdateResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureDatabaseCreateOrUpdateParameters): AzureDatabaseCreateOrUpdateResponse;
		delete(arg0?: String, arg1?: String, arg2?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String, arg2?: String): AzureDatabaseGetResponse;
		getById(arg0?: String, arg1?: String, arg2?: String): AzureDatabaseListResponse;
		getDatabaseOperationStatus(arg0?: String): AzureDatabaseCreateOrUpdateResponse;
		getExpanded(arg0?: String, arg1?: String, arg2?: String, arg3?: String): AzureDatabaseGetResponse;
		list(arg0?: String, arg1?: String): AzureDatabaseListResponse;
		listExpanded(arg0?: String, arg1?: String, arg2?: String): AzureDatabaseListResponse;
		listUsages(arg0?: String, arg1?: String, arg2?: String): AzureDatabaseMetricListResponse;
	}

	declare const AzureDatabaseOperations: AzureDatabaseOperations;

	declare class AzureDatabaseProperties
	{
		collation: String;
		creationDate: Date;
		currentServiceObjectiveId: String;
		databaseId: String;
		defaultSecondaryLocation: String;
		earliestRestoreDate: Date;
		edition: String;
		elasticPoolName: String;
		maxSizeBytes: Number;
		requestedServiceObjectiveId: String;
		requestedServiceObjectiveName: String;
		schemas: Object[];
		serviceObjective: String;
		serviceTierAdvisors: Object[];
		status: String;
		upgradeHint: AzureUpgradeHint;

		constructor();
	}

	declare class AzureDatabaseSecureConnectionPolicy
	{
		id: String;
		location: String;
		name: String;
		properties: AzureDatabaseSecureConnectionPolicyProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureDatabaseSecureConnectionPolicyCreateOrUpdateParameters
	{
		properties: AzureDatabaseSecureConnectionPolicyCreateOrUpdateProperties;

		constructor(properties?: AzureDatabaseSecureConnectionPolicyCreateOrUpdateProperties);
		constructor();
	}

	declare class AzureDatabaseSecureConnectionPolicyCreateOrUpdateProperties
	{
		securityEnabledAccess: String;

		constructor();
	}

	declare class AzureDatabaseSecureConnectionPolicyGetResponse
	{
		requestId: String;
		secureConnectionPolicy: AzureDatabaseSecureConnectionPolicy;
		statusCode: Number;

		constructor();
	}

	declare class AzureDatabaseSecureConnectionPolicyProperties
	{
		proxyDnsName: String;
		proxyPort: String;
		securityEnabledAccess: String;

		constructor();
	}

	declare class AzureDatabaseSecurityPolicy
	{
		id: String;
		location: String;
		name: String;
		properties: AzureDatabaseSecurityPolicyProperties;
		tags: Properties;
		type: String;

		constructor();
	}

	declare class AzureDatabaseSecurityPolicyGetResponse
	{
		databaseSecurityPolicy: AzureDatabaseSecurityPolicy;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDatabaseSecurityPolicyProperties
	{
		adoNetConnectionString: String;
		auditingEnabled: boolean;
		blockDirectAccessEnabled: boolean;
		eventTypeDataAccessEnabled: boolean;
		eventTypeDataChangesEnabled: boolean;
		eventTypeGrantRevokePermissionsEnabled: boolean;
		eventTypeSchemaChangeEnabled: boolean;
		eventTypeSecurityExceptionsEnabled: boolean;
		jdbcConnectionString: String;
		odbcConnectionString: String;
		phpConnectionString: String;
		proxyDnsName: String;
		retentionDays: Number;
		secondaryStorageAccountKey: String;
		storageAccountKey: String;
		storageAccountName: String;
		storageAccountResourceGroupName: String;
		storageAccountSubscriptionId: String;
		storageTableEndpoint: String;
		useServerDefault: boolean;

		constructor();
	}

	declare class AzureDatabaseSecurityPolicyUpdateParameters
	{
		properties: AzureDatabaseSecurityPolicyProperties;

		constructor(properties?: AzureDatabaseSecurityPolicyProperties);
		constructor();
	}

	interface AzureDatabaseServerType
	{
		readonly Custom: AzureDatabaseServerType;
		readonly MySql: AzureDatabaseServerType;
		readonly SQLAzure: AzureDatabaseServerType;
		readonly SQLServer: AzureDatabaseServerType;

	}

	declare const AzureDatabaseServerType: AzureDatabaseServerType;

	declare class AzureDataDisk
	{
		caching: String;
		createOption: String;
		diskSizeGB: Number;
		lun: Number;
		name: String;
		sourceImage: AzureVirtualHardDisk;
		virtualHardDisk: AzureVirtualHardDisk;

		constructor();
	}

	declare class AzureDataDiskImage
	{
		lun: Number;

		constructor(lun?: Number);
		constructor();
	}

	declare class AzureDataMaskingPolicy
	{
		id: String;
		location: String;
		name: String;
		properties: AzureDataMaskingPolicyProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureDataMaskingPolicyCreateOrUpdateParameters
	{
		properties: AzureDataMaskingPolicyProperties;

		constructor(properties?: AzureDataMaskingPolicyProperties);
		constructor();
	}

	declare class AzureDataMaskingPolicyGetResponse
	{
		dataMaskingPolicy: AzureDataMaskingPolicy;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDataMaskingPolicyProperties
	{
		dataMaskingState: String;
		exemptPrincipals: String;

		constructor(dataMaskingState?: String, exemptPrincipals?: String);
		constructor();
	}

	declare class AzureDataMaskingRule
	{
		id: String;
		location: String;
		name: String;
		properties: AzureDataMaskingRuleProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureDataMaskingRuleCreateOrUpdateParameters
	{
		properties: AzureDataMaskingRuleProperties;

		constructor(properties?: AzureDataMaskingRuleProperties);
		constructor();
	}

	declare class AzureDataMaskingRuleGetResponse
	{
		dataMaskingRule: AzureDataMaskingRule;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDataMaskingRuleListResponse
	{
		dataMaskingRules: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDataMaskingRuleProperties
	{
		columnName: String;
		id: String;
		maskingFunction: String;
		numberFrom: String;
		numberTo: String;
		prefixSize: String;
		replacementString: String;
		schemaName: String;
		suffixSize: String;
		tableName: String;

		constructor(id?: String, maskingFunction?: String);
		constructor();
	}

	declare class AzureDeleteOperationResponse
	{
		azureAsyncOperation: String;
		endTime: Date;
		error: AzureApiError;
		requestId: String;
		startTime: Date;
		statusCode: Number;
		trackingOperationId: String;

		constructor();
	}

	declare class AzureDependency
	{
		dependsOn: Object[];
		id: String;
		resourceName: String;
		resourceType: String;

		constructor();
	}

	declare class AzureDeployment
	{
		properties: AzureDeploymentProperties;

		constructor();
	}

	declare class AzureDeploymentExistsResult
	{
		exists: boolean;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDeploymentExtended
	{
		connection: AzureConnection;
		id: String;
		internalIdString: String;
		name: String;
		properties: AzureDeploymentPropertiesExtended;
		relatedObjects: String;
		resourceGroup: AzureResourceGroupExtended;

		constructor(name?: String);
		constructor();
	}

	declare class AzureDeploymentGetResult
	{
		deployment: AzureDeploymentExtended;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDeploymentListParameters
	{
		provisioningState: String;
		top: Number;

		constructor();
	}

	declare class AzureDeploymentListResult
	{
		deployments: Object[];
		nextLink: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureDeploymentMode
	{
		readonly Complete: AzureDeploymentMode;
		readonly Incremental: AzureDeploymentMode;

	}

	declare const AzureDeploymentMode: AzureDeploymentMode;

	declare class AzureDeploymentOperation
	{
		id: String;
		operationId: String;
		properties: AzureDeploymentOperationProperties;

		constructor();
	}

	interface AzureDeploymentOperationOperations
	{

		get(arg0?: String, arg1?: String, arg2?: String): AzureDeploymentOperationsGetResult;
		list(arg0?: String, arg1?: String, arg2?: AzureDeploymentOperationsListParameters): AzureDeploymentOperationsListResult;
		listNext(arg0?: String): AzureDeploymentOperationsListResult;
	}

	declare const AzureDeploymentOperationOperations: AzureDeploymentOperationOperations;

	declare class AzureDeploymentOperationProperties
	{
		provisioningState: String;
		statusCode: String;
		statusMessage: String;
		targetResource: AzureTargetResource;
		timestamp: Date;

		constructor();
	}

	interface AzureDeploymentOperations
	{

		beginDeleting(arg0?: String, arg1?: String): AzureLongRunningOperationResponse;
		cancel(arg0?: String, arg1?: String): AzureOperationResponse;
		checkExistence(arg0?: String, arg1?: String): AzureDeploymentExistsResult;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureDeployment): AzureDeploymentOperationsCreateResult;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureDeploymentGetResult;
		list(arg0?: String, arg1?: AzureDeploymentListParameters): AzureDeploymentListResult;
		listNext(arg0?: String): AzureDeploymentListResult;
		validate(arg0?: String, arg1?: String, arg2?: AzureDeployment): AzureDeploymentValidateResponse;
	}

	declare const AzureDeploymentOperations: AzureDeploymentOperations;

	declare class AzureDeploymentOperationsCreateResult
	{
		deployment: AzureDeploymentExtended;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDeploymentOperationsGetResult
	{
		operation: AzureDeploymentOperation;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDeploymentOperationsListParameters
	{
		top: Number;

		constructor();
	}

	declare class AzureDeploymentOperationsListResult
	{
		nextLink: String;
		operations: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDeploymentProperties
	{
		mode: AzureDeploymentMode;
		parameters: String;
		parametersLink: AzureParametersLink;
		template: String;
		templateLink: AzureTemplateLink;

		constructor();
	}

	declare class AzureDeploymentPropertiesExtended
	{
		correlationId: String;
		dependencies: Object[];
		mode: AzureDeploymentMode;
		outputs: String;
		parameters: String;
		parametersLink: AzureParametersLink;
		providers: Object[];
		provisioningState: String;
		template: String;
		templateLink: AzureTemplateLink;
		timestamp: Date;

		constructor();
	}

	declare class AzureDeploymentValidateResponse
	{
		error: AzureResourceManagementErrorWithDetails;
		properties: AzureDeploymentPropertiesExtended;
		requestId: String;
		statusCode: Number;
		valid: boolean;

		constructor();
	}

	declare class AzureDhcpOptions
	{
		dnsServers: Object[];

		constructor();
	}

	declare class AzureDiagnosticsProfile
	{
		bootDiagnostics: AzureBootDiagnostics;

		constructor();
	}

	declare class AzureDisk
	{
		caching: String;
		createOption: String;
		diskSizeGB: Number;
		name: String;
		sourceImage: AzureVirtualHardDisk;
		virtualHardDisk: AzureVirtualHardDisk;

		constructor(name?: String, virtualHardDisk?: AzureVirtualHardDisk, createOption?: String);
		constructor();
	}

	declare class AzureDiskInstanceView
	{
		name: String;
		statuses: Object[];

		constructor();
	}

	interface AzureDnsManagementClient
	{
		apiVersion: String;
		baseUri: String;
		longRunningOperationInitialTimeout: Number;
		longRunningOperationRetryTimeout: Number;
		recordSetsOperations: AzureRecordSetOperations;
		zonesOperations: AzureZoneOperations;

		close(): void;
	}

	declare const AzureDnsManagementClient: AzureDnsManagementClient;

	declare class AzureDnsNameAvailabilityResponse
	{
		dnsNameAvailability: boolean;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureDnsResourceDeleteParametersBase
	{
		ifMatch: String;

		constructor();
	}

	declare class AzureDnsSettings
	{
		appliedDnsServers: Object[];
		dnsServers: Object[];

		constructor();
	}

	declare class AzureEditionCapability
	{
		name: String;
		status: String;
		supportedServiceObjectives: Object[];

		constructor();
	}

	declare class AzureElasticPool
	{
		id: String;
		location: String;
		name: String;
		properties: AzureElasticPoolProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureElasticPoolActivity
	{
		id: String;
		location: String;
		name: String;
		properties: AzureElasticPoolActivityProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureElasticPoolActivityListResponse
	{
		elasticPoolActivities: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureElasticPoolActivityProperties
	{
		elasticPoolName: String;
		endTime: Date;
		errorCode: Number;
		errorMessage: String;
		errorSeverity: Number;
		operation: String;
		operationId: String;
		percentComplete: Number;
		requestedDatabaseDtuMax: Number;
		requestedDatabaseDtuMin: Number;
		requestedDtu: Number;
		requestedElasticPoolName: String;
		requestedStorageLimitInGB: Number;
		serverName: String;
		startTime: Date;
		state: String;

		constructor();
	}

	declare class AzureElasticPoolCreateOrUpdateParameters
	{
		location: String;
		properties: AzureElasticPoolCreateOrUpdateProperties;
		tags: Properties;

		constructor(properties?: AzureElasticPoolCreateOrUpdateProperties, location?: String);
		constructor();
	}

	declare class AzureElasticPoolCreateOrUpdateProperties
	{
		databaseDtuMax: Number;
		databaseDtuMin: Number;
		dtu: Number;
		edition: String;
		storageMB: Number;

		constructor();
	}

	declare class AzureElasticPoolCreateOrUpdateResponse
	{
		elasticPool: AzureElasticPool;
		error: AzureErrorResponse;
		operationStatusLink: String;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureElasticPoolDatabaseActivity
	{
		id: String;
		location: String;
		name: String;
		properties: AzureElasticPoolDatabaseActivityProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureElasticPoolDatabaseActivityListResponse
	{
		elasticPoolDatabaseActivities: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureElasticPoolDatabaseActivityProperties
	{
		currentElasticPoolName: String;
		currentServiceObjectiveName: String;
		databaseName: String;
		endTime: Date;
		errorCode: Number;
		errorMessage: String;
		errorSeverity: Number;
		operation: String;
		operationId: String;
		percentComplete: Number;
		requestedElasticPoolName: String;
		requestedServiceObjectiveName: String;
		serverName: String;
		startTime: Date;
		state: String;

		constructor();
	}

	declare class AzureElasticPoolGetResponse
	{
		elasticPool: AzureElasticPool;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureElasticPoolListResponse
	{
		elasticPools: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureElasticPoolMetricDefinitions
	{
		metricDefinitions: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureElasticPoolMetrics
	{
		metrics: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureElasticPoolProperties
	{
		creationDate: Date;
		databaseDtuMax: Number;
		databaseDtuMin: Number;
		dtu: Number;
		edition: String;
		state: String;
		storageMB: Number;

		constructor();
	}

	declare class AzureEndpoints
	{
		blob: String;
		file: String;
		queue: String;
		table: String;

		constructor();
	}

	declare class AzureError
	{
		code: String;
		details: Object[];
		innerError: String;
		message: String;
		target: String;

		constructor();
	}

	declare class AzureErrorDetails
	{
		code: String;
		message: String;
		target: String;

		constructor();
	}

	declare class AzureErrorResponse
	{
		code: String;
		message: String;
		target: String;

		constructor(code?: String, message?: String);
		constructor();
	}

	declare class AzureFeatureOperationsListResult
	{
		features: Object[];
		nextLink: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureFeatureProperties
	{
		state: String;

		constructor();
	}

	declare class AzureFeatureResponse
	{
		id: String;
		name: String;
		properties: AzureFeatureProperties;
		requestId: String;
		statusCode: Number;
		type: String;

		constructor();
	}

	declare class AzureFirewallRule
	{
		id: String;
		location: String;
		name: String;
		properties: AzureFirewallRuleProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureFirewallRuleCreateOrUpdateParameters
	{
		properties: AzureFirewallRuleCreateOrUpdateProperties;

		constructor(properties?: AzureFirewallRuleCreateOrUpdateProperties);
		constructor();
	}

	declare class AzureFirewallRuleCreateOrUpdateProperties
	{
		endIpAddress: String;
		startIpAddress: String;

		constructor();
	}

	declare class AzureFirewallRuleGetResponse
	{
		firewallRule: AzureFirewallRule;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureFirewallRuleListResponse
	{
		firewallRules: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureFirewallRuleProperties
	{
		endIpAddress: String;
		startIpAddress: String;

		constructor();
	}

	interface AzureFrequencyUnit
	{
		readonly Day: AzureFrequencyUnit;
		readonly Hour: AzureFrequencyUnit;

	}

	declare const AzureFrequencyUnit: AzureFrequencyUnit;

	declare class AzureFrontendIpConfiguration
	{
		etag: String;
		id: String;
		inboundNatPools: Object[];
		inboundNatRules: Object[];
		loadBalancingRules: Object[];
		name: String;
		outboundNatRules: Object[];
		privateIpAddress: String;
		privateIpAllocationMethod: String;
		provisioningState: String;
		publicIpAddress: AzureResourceId;
		subnet: AzureResourceId;

		constructor();
	}

	interface AzureGenericClient
	{

		delete(url?: String): AzureAzureResponse;
		get(url?: String): AzureAzureResponse;
		patch(url?: String): AzureAzureResponse;
		post(url?: String, payload?: Object): AzureAzureResponse;
		put(url?: String, payload?: Object): AzureAzureResponse;
	}

	interface AzureGenericClientConstructor {
		new(value?:any): AzureGenericClient;
		readonly prototype: AzureGenericClient;
	}

	declare const AzureGenericClient: AzureGenericClientConstructor;

	declare class AzureGenericResource
	{
		location: String;
		properties: String;
		provisioningState: String;
		tags: Properties;

		constructor(location?: String);
		constructor();
	}

	declare class AzureGenericResourceExtended
	{
		id: String;
		location: String;
		name: String;
		properties: String;
		provisioningState: String;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureHandlerMapping
	{
		arguments: String;
		extension: String;
		scriptProcessor: String;

		constructor();
	}

	declare class AzureHardwareProfile
	{
		virtualMachineSize: String;

		constructor();
	}

	declare class AzureHistoricalUsageMetric
	{
		code: String;
		data: AzureHistoricalUsageMetricData;
		message: String;

		constructor();
	}

	declare class AzureHistoricalUsageMetricData
	{
		displayName: String;
		endTime: Date;
		name: String;
		primaryAggregationType: String;
		startTime: Date;
		timeGrain: String;
		unit: String;
		values: Object[];

		constructor();
	}

	declare class AzureHistoricalUsageMetricSample
	{
		count: Number;
		instanceName: String;
		maximum: String;
		minimum: String;
		timeCreated: Date;
		total: String;

		constructor();
	}

	interface AzureHostType
	{
		readonly Repository: AzureHostType;
		readonly Standard: AzureHostType;

	}

	declare const AzureHostType: AzureHostType;

	declare class AzureImageReference
	{
		offer: String;
		publisher: String;
		sku: String;
		version: String;

		constructor();
	}

	declare class AzureInboundNatPool
	{
		backendPort: Number;
		etag: String;
		frontendIPConfiguration: AzureResourceId;
		frontendPortRangeEnd: Number;
		frontendPortRangeStart: Number;
		id: String;
		name: String;
		protocol: String;
		provisioningState: String;

		constructor(protocol?: String, frontendPortRangeStart?: Number, frontendPortRangeEnd?: Number);
		constructor();
	}

	declare class AzureInboundNatRule
	{
		backendIPConfiguration: AzureResourceId;
		backendPort: Number;
		enableFloatingIP: boolean;
		etag: String;
		frontendIPConfiguration: AzureResourceId;
		frontendPort: Number;
		id: String;
		idleTimeoutInMinutes: Number;
		name: String;
		protocol: String;
		provisioningState: String;

		constructor(protocol?: String, frontendPort?: Number, enableFloatingIP?: boolean);
		constructor();
	}

	declare class AzureInnerError
	{
		errorDetail: String;
		exceptionType: String;

		constructor();
	}

	declare class AzureInstanceViewStatus
	{
		code: String;
		displayStatus: String;
		level: String;
		message: String;
		time: Date;

		constructor();
	}

	interface AzureKeyName
	{
		readonly Key1: AzureKeyName;
		readonly Key2: AzureKeyName;

	}

	declare const AzureKeyName: AzureKeyName;

	declare class AzureLinuxConfiguration
	{
		disablePasswordAuthentication: boolean;
		sshConfiguration: AzureSshConfiguration;

		constructor();
	}

	declare class AzureListParameters
	{

		constructor();
	}

	declare class AzureListUsagesResponse
	{
		requestId: String;
		statusCode: Number;
		usages: Object[];

		constructor();
	}

	declare class AzureLoadBalancer
	{
		backendAddressPools: Object[];
		etag: String;
		frontendIpConfigurations: Object[];
		id: String;
		inboundNatPools: Object[];
		inboundNatRules: Object[];
		loadBalancingRules: Object[];
		location: String;
		name: String;
		outboundNatRules: Object[];
		probes: Object[];
		provisioningState: String;
		resourceGuid: String;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureLoadBalancerGetResponse
	{
		loadBalancer: AzureLoadBalancer;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureLoadBalancerListResponse
	{
		loadBalancers: Object[];
		nextLink: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureLoadBalancerOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: AzureLoadBalancer): AzureLoadBalancerPutResponse;
		beginDeleting(arg0?: String, arg1?: String): AzureUpdateOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureLoadBalancer): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureLoadBalancerGetResponse;
		list(arg0?: String): AzureLoadBalancerListResponse;
		listAll(): AzureLoadBalancerListResponse;
	}

	declare const AzureLoadBalancerOperations: AzureLoadBalancerOperations;

	declare class AzureLoadBalancerPutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		loadBalancer: AzureLoadBalancer;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureLoadBalancingRule
	{
		backendAddressPool: AzureResourceId;
		backendPort: Number;
		enableFloatingIP: boolean;
		etag: String;
		frontendIPConfiguration: AzureResourceId;
		frontendPort: Number;
		id: String;
		idleTimeoutInMinutes: Number;
		loadDistribution: String;
		name: String;
		probe: AzureResourceId;
		protocol: String;
		provisioningState: String;

		constructor();
	}

	declare class AzureLocalNetworkGateway
	{
		etag: String;
		gatewayIpAddress: String;
		id: String;
		localNetworkAddressSpace: AzureAddressSpace;
		location: String;
		name: String;
		provisioningState: String;
		resourceGuid: String;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureLocalNetworkGatewayGetResponse
	{
		localNetworkGateway: AzureLocalNetworkGateway;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureLocalNetworkGatewayListResponse
	{
		localNetworkGateways: Object[];
		nextLink: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureLocalNetworkGatewayOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: AzureLocalNetworkGateway): AzureLocalNetworkGatewayPutResponse;
		beginDeleting(arg0?: String, arg1?: String): AzureUpdateOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureLocalNetworkGateway): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureLocalNetworkGatewayGetResponse;
		list(arg0?: String): AzureLocalNetworkGatewayListResponse;
	}

	declare const AzureLocalNetworkGatewayOperations: AzureLocalNetworkGatewayOperations;

	declare class AzureLocalNetworkGatewayPutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		localNetworkGateway: AzureLocalNetworkGateway;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureLocation
	{
		displayName: String;
		name: String;
		virtualMachineImagePublishers: AzureVirtualMachineImagePublisher[];
		virtualMachineSizes: AzureVirtualMachineSize[];

		constructor(name?: String, displayName?: String);
		getVirtualMachineImagePublisherByName(publisherName?: String): AzureVirtualMachineImagePublisher;
		getVirtualMachineSizeByName(sizeName?: String): AzureVirtualMachineSize;
	}

	declare class AzureLocationCapability
	{
		name: String;
		status: String;
		supportedServerVersions: Object[];

		constructor();
	}

	declare class AzureLongRunningOperationResponse
	{
		error: AzureResourceManagementError;
		operationStatusLink: String;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	interface AzureManagedPipelineMode
	{
		readonly Classic: AzureManagedPipelineMode;
		readonly Integrated: AzureManagedPipelineMode;

	}

	declare const AzureManagedPipelineMode: AzureManagedPipelineMode;

	declare class AzureManagementLockGetQueryParameter
	{
		atScope: String;

		constructor();
	}

	declare class AzureManagementLockListResult
	{
		lock: Object[];
		nextLink: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureManagementLockObject
	{
		id: String;
		name: String;
		properties: AzureManagementLockProperties;
		type: String;

		constructor();
	}

	interface AzureManagementLockOperations
	{

		createOrUpdateAtResourceGroupLevel(arg0?: String, arg1?: String, arg2?: AzureManagementLockProperties): AzureManagementLockReturnResult;
		createOrUpdateAtResourceLevel(arg0?: String, arg1?: AzureResourceIdentity, arg2?: String, arg3?: AzureManagementLockProperties): AzureManagementLockReturnResult;
		createOrUpdateAtSubscriptionLevel(arg0?: String, arg1?: AzureManagementLockProperties): AzureManagementLockReturnResult;
		deleteAtResourceGroupLevel(arg0?: String, arg1?: String): AzureOperationResponse;
		deleteAtResourceLevel(arg0?: String, arg1?: AzureResourceIdentity, arg2?: String): AzureOperationResponse;
		deleteAtSubscriptionLevel(arg0?: String): AzureOperationResponse;
		get(arg0?: String): AzureManagementLockReturnResult;
		listAtResourceGroupLevel(arg0?: String, arg1?: AzureManagementLockGetQueryParameter): AzureManagementLockListResult;
		listAtResourceLevel(arg0?: String, arg1?: AzureResourceIdentity, arg2?: AzureManagementLockGetQueryParameter): AzureManagementLockListResult;
		listAtSubscriptionLevel(arg0?: AzureManagementLockGetQueryParameter): AzureManagementLockListResult;
		listNext(arg0?: String): AzureManagementLockListResult;
	}

	declare const AzureManagementLockOperations: AzureManagementLockOperations;

	declare class AzureManagementLockProperties
	{
		level: String;
		notes: String;

		constructor();
	}

	declare class AzureManagementLockReturnResult
	{
		managementLock: AzureManagementLockObject;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureMaxSizeCapability
	{
		limit: Number;
		status: String;
		unit: String;

		constructor();
	}

	declare class AzureMetric
	{
		endTime: Date;
		name: AzureName;
		startTime: Date;
		timeGrain: String;
		unit: String;
		values: Object[];

		constructor();
	}

	declare class AzureMetricAvailability
	{
		retention: String;
		timeGrain: String;

		constructor();
	}

	declare class AzureMetricDefinition
	{
		metricAvailabilities: Object[];
		name: AzureMetricName;
		primaryAggregationType: String;
		unit: String;

		constructor();
	}

	declare class AzureMetricName
	{
		localizedValue: String;
		value: String;

		constructor();
	}

	declare class AzureMxRecord
	{
		exchange: String;
		preference: Number;

		constructor(preference?: Number, exchange?: String);
		constructor();
	}

	declare class AzureName
	{
		localizedValue: String;
		value: String;

		constructor();
	}

	declare class AzureNameValuePair
	{
		name: String;
		value: String;

		constructor();
	}

	declare class AzureNetworkInterface
	{
		connection: AzureConnection;
		displayName: String;
		dnsSettings: AzureNetworkInterfaceDnsSettings;
		enableIPForwarding: boolean;
		etag: String;
		id: String;
		internalIdString: String;
		ipConfigurations: Object[];
		location: String;
		macAddress: String;
		name: String;
		networkSecurityGroup: AzureResourceId;
		primary: boolean;
		provisioningState: String;
		resourceGroup: AzureResourceGroupExtended;
		resourceGuid: String;
		tags: Properties;
		type: String;
		virtualMachine: AzureResourceId;

		constructor(location?: String);
		constructor();
		delete(): void;
	}

	declare class AzureNetworkInterfaceDnsSettings
	{
		appliedDnsServers: Object[];
		dnsServers: Object[];
		internalDnsNameLabel: String;
		internalFqdn: String;

		constructor();
	}

	declare class AzureNetworkInterfaceGetResponse
	{
		networkInterface: AzureNetworkInterface;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureNetworkInterfaceIpConfiguration
	{
		etag: String;
		id: String;
		loadBalancerBackendAddressPools: Object[];
		loadBalancerInboundNatRules: Object[];
		name: String;
		privateIpAddress: String;
		privateIpAllocationMethod: String;
		provisioningState: String;
		publicIpAddress: AzureResourceId;
		subnet: AzureResourceId;

		constructor();
	}

	declare class AzureNetworkInterfaceListResponse
	{
		networkInterfaces: Object[];
		nextLink: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureNetworkInterfaceOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: AzureNetworkInterface): AzureNetworkInterfacePutResponse;
		beginDeleting(arg0?: String, arg1?: String): AzureUpdateOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureNetworkInterface): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureNetworkInterfaceGetResponse;
		getVirtualMachineScaleSetNetworkInterface(arg0?: String, arg1?: String, arg2?: String, arg3?: String): AzureNetworkInterfaceGetResponse;
		list(arg0?: String): AzureNetworkInterfaceListResponse;
		listAll(): AzureNetworkInterfaceListResponse;
		listVirtualMachineScaleSetNetworkInterfaces(arg0?: String, arg1?: String): AzureNetworkInterfaceListResponse;
	}

	declare const AzureNetworkInterfaceOperations: AzureNetworkInterfaceOperations;

	declare class AzureNetworkInterfacePutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		networkInterface: AzureNetworkInterface;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureNetworkInterfaceReference
	{
		primary: boolean;
		referenceUri: String;

		constructor();
	}

	declare class AzureNetworkProfile
	{
		networkInterfaces: Object[];

		constructor();
	}

	interface AzureNetworkResourceProviderClient
	{
		apiVersion: String;
		applicationGatewaysOperations: AzureApplicationGatewayOperations;
		baseUri: String;
		loadBalancersOperations: AzureLoadBalancerOperations;
		localNetworkGatewaysOperations: AzureLocalNetworkGatewayOperations;
		longRunningOperationInitialTimeout: Number;
		longRunningOperationRetryTimeout: Number;
		networkInterfacesOperations: AzureNetworkInterfaceOperations;
		networkSecurityGroupsOperations: AzureNetworkSecurityGroupOperations;
		publicIpAddressesOperations: AzurePublicIpAddressOperations;
		routesOperations: AzureRouteOperations;
		routeTablesOperations: AzureRouteTableOperations;
		securityRulesOperations: AzureSecurityRuleOperations;
		subnetsOperations: AzureSubnetOperations;
		usagesOperations: AzureNetworkUsageOperations;
		virtualNetworkGatewayConnectionsOperations: AzureVirtualNetworkGatewayConnectionOperations;
		virtualNetworkGatewaysOperations: AzureVirtualNetworkGatewayOperations;
		virtualNetworksOperations: AzureVirtualNetworkOperations;

		checkDnsNameAvailability(arg0?: String, arg1?: String): AzureDnsNameAvailabilityResponse;
		close(): void;
		getLongRunningOperationStatus(arg0?: String): AzureAzureAsyncOperationResponse;
	}

	declare const AzureNetworkResourceProviderClient: AzureNetworkResourceProviderClient;

	declare class AzureNetworkSecurityGroup
	{
		connection: AzureConnection;
		defaultSecurityRules: Object[];
		etag: String;
		id: String;
		internalIdString: String;
		location: String;
		name: String;
		networkInterfaces: Object[];
		networkSecurityGroupSecurityRules: AzureSecurityRule[];
		provisioningState: String;
		resourceGroup: AzureResourceGroupExtended;
		resourceGuid: String;
		securityRules: Object[];
		subnets: Object[];
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
		delete(): void;
		getSecurityRule(securityRuleName?: String): AzureSecurityRule;
	}

	declare class AzureNetworkSecurityGroupGetResponse
	{
		networkSecurityGroup: AzureNetworkSecurityGroup;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureNetworkSecurityGroupListResponse
	{
		networkSecurityGroups: Object[];
		nextLink: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureNetworkSecurityGroupOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: AzureNetworkSecurityGroup): AzureNetworkSecurityGroupPutResponse;
		beginDeleting(arg0?: String, arg1?: String): AzureUpdateOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureNetworkSecurityGroup): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureNetworkSecurityGroupGetResponse;
		list(arg0?: String): AzureNetworkSecurityGroupListResponse;
		listAll(): AzureNetworkSecurityGroupListResponse;
	}

	declare const AzureNetworkSecurityGroupOperations: AzureNetworkSecurityGroupOperations;

	declare class AzureNetworkSecurityGroupPutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		networkSecurityGroup: AzureNetworkSecurityGroup;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	interface AzureNetworkUsageOperations
	{

		list(arg0?: String): AzureUsagesListResponse;
	}

	declare const AzureNetworkUsageOperations: AzureNetworkUsageOperations;

	declare class AzureNsRecord
	{
		nsdname: String;

		constructor(nsdname?: String);
		constructor();
	}

	declare class AzureOperation
	{
		description: String;
		displayName: String;
		name: String;
		origin: String;
		properties: Object;

		constructor();
	}

	declare class AzureOperationImpact
	{
		changeValueAbsolute: Number;
		changeValueRelative: Number;
		name: String;
		unit: String;

		constructor();
	}

	declare class AzureOperationResponse
	{
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureOperationStatusResponse
	{
		httpStatusCode: Number;
		id: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureOSDisk
	{
		caching: String;
		createOption: String;
		diskSizeGB: Number;
		name: String;
		operatingSystemType: String;
		sourceImage: AzureVirtualHardDisk;
		virtualHardDisk: AzureVirtualHardDisk;

		constructor(name?: String, virtualHardDisk?: AzureVirtualHardDisk, createOption?: String);
		constructor();
	}

	declare class AzureOSDiskImage
	{
		operatingSystem: String;

		constructor(operatingSystem?: String);
		constructor();
	}

	declare class AzureOSProfile
	{
		adminPassword: String;
		adminUsername: String;
		computerName: String;
		customData: String;
		linuxConfiguration: AzureLinuxConfiguration;
		secrets: Object[];
		windowsConfiguration: AzureWindowsConfiguration;

		constructor();
	}

	declare class AzureOSProfileBase
	{
		adminPassword: String;
		adminUsername: String;
		customData: String;
		linuxConfiguration: AzureLinuxConfiguration;
		secrets: Object[];
		windowsConfiguration: AzureWindowsConfiguration;

		constructor();
	}

	declare class AzureOutboundNatRule
	{
		allocatedOutboundPorts: Number;
		backendAddressPool: AzureResourceId;
		etag: String;
		frontendIpConfigurations: Object[];
		id: String;
		name: String;
		provisioningState: String;

		constructor(allocatedOutboundPorts?: Number, backendAddressPool?: AzureResourceId);
		constructor();
	}

	declare class AzureParametersLink
	{
		contentVersion: String;
		uri: String;

		constructor(uri?: String);
		constructor();
	}

	declare class AzurePlan
	{
		name: String;
		product: String;
		promotionCode: String;
		publisher: String;

		constructor();
	}

	declare class AzureProbe
	{
		etag: String;
		id: String;
		intervalInSeconds: Number;
		loadBalancingRules: Object[];
		name: String;
		numberOfProbes: Number;
		port: Number;
		protocol: String;
		provisioningState: String;
		requestPath: String;

		constructor(protocol?: String, port?: Number);
		constructor();
	}

	declare class AzureProvider
	{
		id: String;
		namespace: String;
		registrationState: String;
		requestId: String;
		resourceTypes: Object[];
		statusCode: Number;

		constructor();
	}

	declare class AzureProviderGetResult
	{
		provider: AzureProvider;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureProviderListParameters
	{
		top: Number;

		constructor();
	}

	declare class AzureProviderListResult
	{
		nextLink: String;
		providers: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureProviderOperations
	{

		get(arg0?: String): AzureProviderGetResult;
		list(arg0?: AzureProviderListParameters): AzureProviderListResult;
		listNext(arg0?: String): AzureProviderListResult;
		register(arg0?: String): AzureProviderRegistionResult;
		unregister(arg0?: String): AzureProviderUnregistionResult;
	}

	declare const AzureProviderOperations: AzureProviderOperations;

	declare class AzureProviderOperationsMetadata
	{
		displayName: String;
		id: String;
		name: String;
		operations: Object[];
		resourceTypes: Object[];
		type: String;

		constructor();
	}

	declare class AzureProviderOperationsMetadataGetResult
	{
		provider: AzureProviderOperationsMetadata;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureProviderOperationsMetadataListResult
	{
		providers: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureProviderOperationsMetadataOperations
	{

		get(arg0?: String): AzureProviderOperationsMetadataGetResult;
		list(): AzureProviderOperationsMetadataListResult;
	}

	declare const AzureProviderOperationsMetadataOperations: AzureProviderOperationsMetadataOperations;

	declare class AzureProviderRegistionResult
	{
		provider: AzureProvider;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureProviderResourceType
	{
		apiVersions: Object[];
		locations: Object[];
		name: String;
		properties: Properties;

		constructor();
	}

	declare class AzureProviderUnregistionResult
	{
		provider: AzureProvider;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureProvisioningState
	{
		readonly Creating: AzureProvisioningState;
		readonly ResolvingDNS: AzureProvisioningState;
		readonly Succeeded: AzureProvisioningState;

	}

	declare const AzureProvisioningState: AzureProvisioningState;

	declare class AzurePtrRecord
	{
		ptrdname: String;

		constructor(ptrdname?: String);
		constructor();
	}

	declare class AzurePublicIpAddress
	{
		connection: AzureConnection;
		displayName: String;
		dnsSettings: AzurePublicIpAddressDnsSettings;
		etag: String;
		id: String;
		idleTimeoutInMinutes: Number;
		internalIdString: String;
		ipAddress: String;
		ipConfiguration: AzureResourceId;
		location: String;
		name: String;
		provisioningState: String;
		publicIpAllocationMethod: String;
		resourceGroup: AzureResourceGroupExtended;
		resourceGuid: String;
		tags: Properties;
		type: String;

		constructor(publicIpAllocationMethod?: String, location?: String);
		constructor();
		delete(): void;
	}

	declare class AzurePublicIpAddressDnsSettings
	{
		domainNameLabel: String;
		fqdn: String;
		reverseFqdn: String;

		constructor();
	}

	declare class AzurePublicIpAddressGetResponse
	{
		publicIpAddress: AzurePublicIpAddress;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzurePublicIpAddressListResponse
	{
		nextLink: String;
		publicIpAddresses: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzurePublicIpAddressOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: AzurePublicIpAddress): AzurePublicIpAddressPutResponse;
		beginDeleting(arg0?: String, arg1?: String): AzureUpdateOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzurePublicIpAddress): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzurePublicIpAddressGetResponse;
		list(arg0?: String): AzurePublicIpAddressListResponse;
		listAll(): AzurePublicIpAddressListResponse;
	}

	declare const AzurePublicIpAddressOperations: AzurePublicIpAddressOperations;

	declare class AzurePublicIpAddressPutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		publicIpAddress: AzurePublicIpAddress;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzurePublishingCredentials
	{
		publishingPassword: String;
		publishingUserName: String;

		constructor(publishingPassword?: String, publishingUserName?: String);
		constructor();
	}

	declare class AzurePublishProfile
	{
		controlPanelUri: String;
		destinationAppUri: String;
		ftpPassiveMode: boolean;
		hostingProviderForumUri: String;
		mSDeploySite: String;
		mySqlConnectionString: String;
		profileName: String;
		publishMethod: String;
		publishUrl: String;
		sqlServerConnectionString: String;
		userName: String;
		userPassword: String;

		constructor();
	}

	declare class AzurePurchasePlan
	{
		name: String;
		product: String;
		publisher: String;

		constructor(publisher?: String, name?: String, product?: String);
		constructor();
	}

	interface AzureReason
	{
		readonly AccountNameInvalid: AzureReason;
		readonly AlreadyExists: AzureReason;

	}

	declare const AzureReason: AzureReason;

	declare class AzureRecommendedDatabaseProperties
	{
		name: String;
		targetEdition: String;
		targetServiceLevelObjective: String;

		constructor();
	}

	declare class AzureRecommendedElasticPool
	{
		id: String;
		location: String;
		name: String;
		properties: AzureRecommendedElasticPoolProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureRecommendedElasticPoolGetResponse
	{
		recommendedElasticPool: AzureRecommendedElasticPool;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureRecommendedElasticPoolListMetricsResponse
	{
		recommendedElasticPoolsMetrics: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureRecommendedElasticPoolListResponse
	{
		recommendedElasticPools: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureRecommendedElasticPoolMetric
	{
		dateTime: Date;
		dtu: Number;
		sizeGB: Number;

		constructor();
	}

	declare class AzureRecommendedElasticPoolProperties
	{
		databaseDtuMax: Number;
		databaseDtuMin: Number;
		databaseEdition: String;
		databases: Object[];
		dtu: Number;
		maxObservedDtu: Number;
		maxObservedStorageMB: Number;
		metrics: Object[];
		observationPeriodEnd: Date;
		observationPeriodStart: Date;
		storageMB: Number;

		constructor();
	}

	declare class AzureRecommendedIndex
	{
		id: String;
		location: String;
		name: String;
		properties: AzureRecommendedIndexProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureRecommendedIndexGetResponse
	{
		recommendedIndex: AzureRecommendedIndex;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureRecommendedIndexProperties
	{
		action: String;
		columns: Object[];
		created: Date;
		estimatedImpact: Object[];
		includedColumns: Object[];
		indexScript: String;
		indexType: String;
		lastModified: Date;
		reportedImpact: Object[];
		schema: String;
		state: String;
		table: String;

		constructor();
	}

	declare class AzureRecommendedIndexUpdateParameters
	{
		properties: AzureRecommendedIndexUpdateProperties;

		constructor(properties?: AzureRecommendedIndexUpdateProperties);
		constructor();
	}

	declare class AzureRecommendedIndexUpdateProperties
	{
		state: String;

		constructor();
	}

	declare class AzureRecommendedIndexUpdateResponse
	{
		error: AzureErrorResponse;
		operationStatusLink: String;
		recommendedIndex: AzureRecommendedIndex;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureRecordSet
	{
		eTag: String;
		id: String;
		location: String;
		name: String;
		properties: AzureRecordSetProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureRecordSetCreateOrUpdateParameters
	{
		ifNoneMatch: String;
		recordSet: AzureRecordSet;

		constructor(recordSet?: AzureRecordSet);
		constructor();
	}

	declare class AzureRecordSetCreateOrUpdateResponse
	{
		recordSet: AzureRecordSet;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureRecordSetDeleteParameters
	{
		ifMatch: String;

		constructor();
	}

	declare class AzureRecordSetGetResponse
	{
		recordSet: AzureRecordSet;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureRecordSetListParameters
	{
		filter: String;
		top: String;

		constructor();
	}

	declare class AzureRecordSetListResponse
	{
		nextLink: String;
		recordSets: Object[];
		requestId: String;
		statusCode: Number;

		constructor(recordSets?: AzureRecordSet[]);
		constructor();
	}

	interface AzureRecordSetOperations
	{

		createOrUpdate(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureRecordType, arg4?: AzureRecordSetCreateOrUpdateParameters): AzureRecordSetCreateOrUpdateResponse;
		delete(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureRecordType, arg4?: AzureRecordSetDeleteParameters): AzureOperationResponse;
		get(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureRecordType): AzureRecordSetGetResponse;
		list(arg0?: String, arg1?: String, arg2?: AzureRecordType, arg3?: AzureRecordSetListParameters): AzureRecordSetListResponse;
		listAll(arg0?: String, arg1?: String, arg2?: AzureRecordSetListParameters): AzureRecordSetListResponse;
		listNext(arg0?: String): AzureRecordSetListResponse;
	}

	declare const AzureRecordSetOperations: AzureRecordSetOperations;

	declare class AzureRecordSetProperties
	{
		aaaaRecords: Object[];
		aRecords: Object[];
		cnameRecord: AzureCnameRecord;
		mxRecords: Object[];
		nsRecords: Object[];
		ptrRecords: Object[];
		soaRecord: AzureSoaRecord;
		srvRecords: Object[];
		ttl: Number;
		txtRecords: Object[];

		constructor(ttl?: Number);
		constructor();
	}

	interface AzureRecordType
	{
		readonly A: AzureRecordType;
		readonly AAAA: AzureRecordType;
		readonly CNAME: AzureRecordType;
		readonly MX: AzureRecordType;
		readonly NS: AzureRecordType;
		readonly PTR: AzureRecordType;
		readonly SOA: AzureRecordType;
		readonly SRV: AzureRecordType;
		readonly TXT: AzureRecordType;

	}

	declare const AzureRecordType: AzureRecordType;

	interface AzureRemoteDebuggingVersion
	{
		readonly VS2012: AzureRemoteDebuggingVersion;
		readonly VS2013: AzureRemoteDebuggingVersion;

	}

	declare const AzureRemoteDebuggingVersion: AzureRemoteDebuggingVersion;

	declare class AzureReplicationLink
	{
		id: String;
		location: String;
		name: String;
		properties: AzureReplicationLinkProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureReplicationLinkFailoverResponse
	{
		error: AzureErrorResponse;
		operationStatusLink: String;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureReplicationLinkGetResponse
	{
		replicationLink: AzureReplicationLink;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureReplicationLinkListResponse
	{
		replicationLinks: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureReplicationLinkProperties
	{
		partnerDatabase: String;
		partnerLocation: String;
		partnerRole: String;
		partnerServer: String;
		percentComplete: String;
		replicationState: String;
		role: String;
		startTime: Date;

		constructor();
	}

	declare class AzureResourceBase
	{
		id: String;
		location: String;
		tags: Properties;
		type: String;

		constructor();
	}

	declare class AzureResourceCreateOrUpdateResult
	{
		requestId: String;
		resource: AzureGenericResourceExtended;
		statusCode: Number;

		constructor();
	}

	declare class AzureResourceExistsResult
	{
		exists: boolean;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureResourceGetResult
	{
		requestId: String;
		resource: AzureGenericResourceExtended;
		statusCode: Number;

		constructor();
	}

	declare class AzureResourceGroup
	{
		location: String;
		properties: String;
		provisioningState: String;
		tags: Properties;

		constructor(location?: String);
		constructor();
	}

	declare class AzureResourceGroupCreateOrUpdateParameters
	{
		location: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureResourceGroupCreateOrUpdateResponse
	{
		name: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureResourceGroupCreateOrUpdateResult
	{
		requestId: String;
		resourceGroup: AzureResourceGroupExtended;
		statusCode: Number;

		constructor();
	}

	declare class AzureResourceGroupExistsResult
	{
		exists: boolean;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureResourceGroupExtended
	{
		applicationGateways: AzureApplicationGateway[];
		availabilitySets: AzureAvailabilitySet[];
		connection: AzureConnection;
		databaseServers: AzureServer[];
		displayName: String;
		dnsZones: AzureZone[];
		id: String;
		internalIdString: String;
		loadBalancers: AzureLoadBalancer[];
		location: String;
		locationObject: AzureLocation;
		name: String;
		networkInterfaces: AzureNetworkInterface[];
		networkSecurityGroups: AzureNetworkSecurityGroup[];
		properties: String;
		provisioningState: String;
		publicIpAddresses: AzurePublicIpAddress[];
		resourceGroup: AzureResourceGroupExtended;
		routeTables: AzureRouteTable[];
		storageAccounts: AzureStorageAccount[];
		tags: Properties;
		virtualMachines: AzureVirtualMachine[];
		virtualNetworkGateways: AzureVirtualNetworkGateway[];
		virtualNetworks: AzureVirtualNetwork[];
		webSites: AzureWebSite[];

		constructor(location?: String);
		constructor();
		beginDeleting(): void;
		delete(): void;
		getApplicationGateway(appGateway?: String): AzureApplicationGateway;
		getAvailabilitySetByName(availabilitySetName?: String): AzureAvailabilitySet;
		getDatabaseServer(serverName?: String): AzureServer;
		getDnsZone(dnsZone?: String): AzureZone;
		getLoadBalancer(loadBalancerName?: String): AzureLoadBalancer;
		getNetworkInterfaceByName(networkInterfaceName?: String): AzureNetworkInterface;
		getNetworkSecurityGroupByGroupName(networkSecurityGroupName?: String): AzureNetworkSecurityGroup;
		getPublicIpAddressByName(ipAddressName?: String): AzurePublicIpAddress;
		getRouteTable(routeTableName?: String): AzureRouteTable;
		getStorageAccountByName(storageAccountName?: String): AzureStorageAccount;
		getVirtualMachineByName(virtualMachineName?: String): AzureVirtualMachine;
		getVirtualNetworkByName(virtualNetworkName?: String): AzureVirtualNetwork;
		getVirtualNetworkGateway(virtualNetworkGatewayName?: String): AzureVirtualNetworkGateway;
		getWebSite(webSiteName?: String): AzureWebSite;
	}

	declare class AzureResourceGroupGetResult
	{
		requestId: String;
		resourceGroup: AzureResourceGroupExtended;
		statusCode: Number;

		constructor();
	}

	declare class AzureResourceGroupListParameters
	{
		tagName: String;
		tagValue: String;
		top: Number;

		constructor();
	}

	declare class AzureResourceGroupListResult
	{
		nextLink: String;
		requestId: String;
		resourceGroups: Object[];
		statusCode: Number;

		constructor(nextLink?: String);
		constructor();
	}

	interface AzureResourceGroupOperations
	{

		beginDeleting(arg0?: String): AzureLongRunningOperationResponse;
		checkExistence(arg0?: String): AzureResourceGroupExistsResult;
		createOrUpdate(arg0?: String, arg1?: AzureResourceGroup): AzureResourceGroupCreateOrUpdateResult;
		delete(arg0?: String): AzureOperationResponse;
		get(arg0?: String): AzureResourceGroupGetResult;
		list(arg0?: AzureResourceGroupListParameters): AzureResourceGroupListResult;
		listNext(arg0?: String): AzureResourceGroupListResult;
		patch(arg0?: String, arg1?: AzureResourceGroup): AzureResourceGroupPatchResult;
	}

	declare const AzureResourceGroupOperations: AzureResourceGroupOperations;

	declare class AzureResourceGroupPatchResult
	{
		requestId: String;
		resourceGroup: AzureResourceGroupExtended;
		statusCode: Number;

		constructor();
	}

	declare class AzureResourceId
	{
		id: String;

		constructor();
	}

	declare class AzureResourceIdentity
	{
		parentResourcePath: String;
		resourceName: String;
		resourceProviderApiVersion: String;
		resourceProviderNamespace: String;
		resourceType: String;

		constructor();
	}

	declare class AzureResourceListParameters
	{
		resourceGroupName: String;
		resourceType: String;
		tagName: String;
		tagValue: String;
		top: Number;

		constructor();
	}

	declare class AzureResourceListResult
	{
		nextLink: String;
		requestId: String;
		resources: Object[];
		statusCode: Number;

		constructor(nextLink?: String);
		constructor();
	}

	interface AzureResourceManagementClient
	{
		apiVersion: String;
		baseUri: String;
		deploymentOperationsOperations: AzureDeploymentOperationOperations;
		deploymentsOperations: AzureDeploymentOperations;
		longRunningOperationInitialTimeout: Number;
		longRunningOperationRetryTimeout: Number;
		providerOperationsMetadataOperations: AzureProviderOperationsMetadataOperations;
		providersOperations: AzureProviderOperations;
		resourceGroupsOperations: AzureResourceGroupOperations;
		resourceProviderOperationDetailsOperations: AzureResourceProviderOperationDetailsOperations;
		resourcesOperations: AzureResourceOperations;
		tagsOperations: AzureTagOperations;

		close(): void;
		getLongRunningOperationStatus(arg0?: String): AzureLongRunningOperationResponse;
	}

	declare const AzureResourceManagementClient: AzureResourceManagementClient;

	declare class AzureResourceManagementError
	{
		code: String;
		message: String;
		target: String;

		constructor(code?: String, message?: String);
		constructor();
	}

	declare class AzureResourceManagementErrorWithDetails
	{
		code: String;
		details: Object[];
		message: String;
		target: String;

		constructor(code?: String, message?: String);
		constructor();
	}

	interface AzureResourceOperations
	{

		beginMoving(arg0?: String, arg1?: AzureResourcesMoveInfo): AzureLongRunningOperationResponse;
		checkExistence(arg0?: String, arg1?: AzureResourceIdentity): AzureResourceExistsResult;
		createOrUpdate(arg0?: String, arg1?: AzureResourceIdentity, arg2?: AzureGenericResource): AzureResourceCreateOrUpdateResult;
		delete(arg0?: String, arg1?: AzureResourceIdentity): AzureOperationResponse;
		get(arg0?: String, arg1?: AzureResourceIdentity): AzureResourceGetResult;
		list(arg0?: AzureResourceListParameters): AzureResourceListResult;
		listNext(arg0?: String): AzureResourceListResult;
		moveResources(arg0?: String, arg1?: AzureResourcesMoveInfo): AzureOperationResponse;
	}

	declare const AzureResourceOperations: AzureResourceOperations;

	declare class AzureResourceProperties
	{
		provisioningState: String;

		constructor();
	}

	declare class AzureResourceProviderErrorResponse
	{
		error: AzureError;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureResourceProviderOperationDefinition
	{
		name: String;
		resourceProviderOperationDisplayProperties: AzureResourceProviderOperationDisplayProperties;

		constructor();
	}

	declare class AzureResourceProviderOperationDetailListResult
	{
		requestId: String;
		resourceProviderOperationDetails: Object[];
		statusCode: Number;

		constructor();
	}

	interface AzureResourceProviderOperationDetailsOperations
	{

		list(arg0?: AzureResourceIdentity): AzureResourceProviderOperationDetailListResult;
	}

	declare const AzureResourceProviderOperationDetailsOperations: AzureResourceProviderOperationDetailsOperations;

	declare class AzureResourceProviderOperationDisplayProperties
	{
		description: String;
		operation: String;
		provider: String;
		publisher: String;
		resource: String;

		constructor();
	}

	declare class AzureResourcesMoveInfo
	{
		resources: Object[];
		targetResourceGroup: String;

		constructor();
	}

	declare class AzureResourceType
	{
		displayName: String;
		name: String;
		operations: Object[];

		constructor();
	}

	declare class AzureRestorePoint
	{
		id: String;
		location: String;
		name: String;
		properties: AzureRestorePointProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureRestorePointListResponse
	{
		requestId: String;
		restorePoints: Object[];
		statusCode: Number;

		constructor();
	}

	declare class AzureRestorePointProperties
	{
		earliestRestoreDate: Date;
		restorePointCreationDate: Date;
		restorePointType: String;

		constructor();
	}

	declare class AzureRestoreRequest
	{
		adjustConnectionStrings: boolean;
		blobName: String;
		databases: Object[];
		ignoreConflictingHostNames: boolean;
		overwrite: boolean;
		storageAccountUrl: String;

		constructor();
	}

	declare class AzureRestoreRequestEnvelope
	{
		id: String;
		location: String;
		name: String;
		request: AzureRestoreRequest;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureRetriableOperationResponse
	{
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureRoute
	{
		addressPrefix: String;
		connection: AzureConnection;
		displayName: String;
		etag: String;
		id: String;
		internalIdString: String;
		name: String;
		nextHopIpAddress: String;
		nextHopType: String;
		provisioningState: String;
		resourceGroup: AzureResourceGroupExtended;

		constructor(nextHopType?: String);
		constructor();
		delete(): void;
	}

	declare class AzureRouteGetResponse
	{
		requestId: String;
		route: AzureRoute;
		statusCode: Number;

		constructor();
	}

	declare class AzureRouteListResponse
	{
		nextLink: String;
		requestId: String;
		routes: Object[];
		statusCode: Number;

		constructor();
	}

	interface AzureRouteOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureRoute): AzureRoutePutResponse;
		beginDeleting(arg0?: String, arg1?: String, arg2?: String): AzureUpdateOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureRoute): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String, arg2?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String, arg2?: String): AzureRouteGetResponse;
		list(arg0?: String, arg1?: String): AzureRouteListResponse;
	}

	declare const AzureRouteOperations: AzureRouteOperations;

	declare class AzureRoutePutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		route: AzureRoute;
		statusCode: Number;

		constructor();
	}

	declare class AzureRouteTable
	{
		connection: AzureConnection;
		displayName: String;
		etag: String;
		id: String;
		internalIdString: String;
		location: String;
		name: String;
		provisioningState: String;
		resourceGroup: AzureResourceGroupExtended;
		routes: Object[];
		subnets: Object[];
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
		delete(): void;
		getRoute(routeName?: String): AzureRoute;
	}

	declare class AzureRouteTableGetResponse
	{
		requestId: String;
		routeTable: AzureRouteTable;
		statusCode: Number;

		constructor();
	}

	declare class AzureRouteTableListResponse
	{
		nextLink: String;
		requestId: String;
		routeTables: Object[];
		statusCode: Number;

		constructor();
	}

	interface AzureRouteTableOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: AzureRouteTable): AzureRouteTablePutResponse;
		beginDeleting(arg0?: String, arg1?: String): AzureUpdateOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureRouteTable): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureRouteTableGetResponse;
		list(arg0?: String): AzureRouteTableListResponse;
		listAll(): AzureRouteTableListResponse;
	}

	declare const AzureRouteTableOperations: AzureRouteTableOperations;

	declare class AzureRouteTablePutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		routeTable: AzureRouteTable;
		statusCode: Number;

		constructor();
	}

	declare class AzureSchema
	{
		id: String;
		location: String;
		name: String;
		properties: AzureSchemaProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureSchemaProperties
	{
		tables: Object[];

		constructor();
	}

	declare class AzureSecurityRule
	{
		access: String;
		description: String;
		destinationAddressPrefix: String;
		destinationPortRange: String;
		direction: String;
		etag: String;
		id: String;
		name: String;
		priority: Number;
		protocol: String;
		provisioningState: String;
		sourceAddressPrefix: String;
		sourcePortRange: String;

		constructor();
	}

	declare class AzureSecurityRuleGetResponse
	{
		requestId: String;
		securityRule: AzureSecurityRule;
		statusCode: Number;

		constructor();
	}

	declare class AzureSecurityRuleListResponse
	{
		nextLink: String;
		requestId: String;
		securityRules: Object[];
		statusCode: Number;

		constructor();
	}

	interface AzureSecurityRuleOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureSecurityRule): AzureSecurityRulePutResponse;
		beginDeleting(arg0?: String, arg1?: String, arg2?: String): AzureUpdateOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureSecurityRule): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String, arg2?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String, arg2?: String): AzureSecurityRuleGetResponse;
		list(arg0?: String, arg1?: String): AzureSecurityRuleListResponse;
	}

	declare const AzureSecurityRuleOperations: AzureSecurityRuleOperations;

	declare class AzureSecurityRulePutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		securityRule: AzureSecurityRule;
		statusCode: Number;

		constructor();
	}

	declare class AzureServer
	{
		connection: AzureConnection;
		databases: AzureDatabase[];
		displayName: String;
		id: String;
		internalIdString: String;
		location: String;
		name: String;
		properties: AzureServerProperties;
		resourceGroup: AzureResourceGroupExtended;
		tags: Properties;
		type: String;
		version: String;

		constructor(location?: String);
		constructor();
		delete(): void;
		getDatabase(databaseName?: String): AzureDatabase;
	}

	declare class AzureServerAdministrator
	{
		id: String;
		location: String;
		name: String;
		properties: AzureServerAdministratorProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureServerAdministratorCreateOrUpdateParameters
	{
		properties: AzureServerAdministratorCreateOrUpdateProperties;

		constructor(properties?: AzureServerAdministratorCreateOrUpdateProperties);
		constructor();
	}

	declare class AzureServerAdministratorCreateOrUpdateProperties
	{
		administratorType: String;
		login: String;
		sid: String;
		tenantId: String;

		constructor();
	}

	declare class AzureServerAdministratorCreateOrUpdateResponse
	{
		error: AzureErrorResponse;
		operationStatusLink: String;
		requestId: String;
		retryAfter: Number;
		serverAdministrator: AzureServerAdministrator;
		statusCode: Number;

		constructor();
	}

	declare class AzureServerAdministratorDeleteResponse
	{
		error: AzureErrorResponse;
		operationStatusLink: String;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureServerAdministratorGetResponse
	{
		administrator: AzureServerAdministrator;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureServerAdministratorListResponse
	{
		administrators: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureServerAdministratorProperties
	{
		administratorType: String;
		login: String;
		sid: String;
		tenantId: String;

		constructor(tenantId?: String);
		constructor();
	}

	declare class AzureServerAuditingPolicy
	{
		id: String;
		location: String;
		name: String;
		properties: AzureServerAuditingPolicyProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureServerAuditingPolicyCreateOrUpdateParameters
	{
		properties: AzureServerAuditingPolicyProperties;

		constructor(properties?: AzureServerAuditingPolicyProperties);
		constructor();
	}

	declare class AzureServerAuditingPolicyGetResponse
	{
		auditingPolicy: AzureServerAuditingPolicy;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureServerAuditingPolicyProperties
	{
		auditingState: String;
		auditLogsTableName: String;
		eventTypesToAudit: String;
		fullAuditLogsTableName: String;
		retentionDays: String;
		storageAccountKey: String;
		storageAccountName: String;
		storageAccountResourceGroupName: String;
		storageAccountSecondaryKey: String;
		storageAccountSubscriptionId: String;
		storageTableEndpoint: String;

		constructor();
	}

	declare class AzureServerCreateOrUpdateParameters
	{
		location: String;
		properties: AzureServerCreateOrUpdateProperties;
		tags: Properties;

		constructor(properties?: AzureServerCreateOrUpdateProperties, location?: String);
		constructor();
	}

	declare class AzureServerCreateOrUpdateProperties
	{
		administratorLogin: String;
		administratorLoginPassword: String;
		version: String;

		constructor();
	}

	declare class AzureServerGetResponse
	{
		requestId: String;
		server: AzureServer;
		statusCode: Number;

		constructor();
	}

	declare class AzureServerListResponse
	{
		requestId: String;
		servers: Object[];
		statusCode: Number;

		constructor();
	}

	declare class AzureServerMetric
	{
		currentValue: Number;
		displayName: String;
		limit: Number;
		nextResetTime: Date;
		resourceName: String;
		unit: String;

		constructor();
	}

	declare class AzureServerMetricListResponse
	{
		metrics: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureServerOperations
	{

		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureServerCreateOrUpdateParameters): AzureServerGetResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureServerGetResponse;
		list(arg0?: String): AzureServerListResponse;
		listUsages(arg0?: String, arg1?: String): AzureServerMetricListResponse;
	}

	declare const AzureServerOperations: AzureServerOperations;

	declare class AzureServerProperties
	{
		administratorLogin: String;
		administratorLoginPassword: String;
		fullyQualifiedDomainName: String;
		version: String;

		constructor();
	}

	declare class AzureServerUpgradeGetResponse
	{
		requestId: String;
		scheduleUpgradeAfterTime: Date;
		status: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureServerUpgradeProperties
	{
		databaseCollection: Object[];
		elasticPoolCollection: Object[];
		scheduleUpgradeAfterUtcDateTime: Date;
		version: String;

		constructor(version?: String);
		constructor();
	}

	declare class AzureServerUpgradeStartParameters
	{
		properties: AzureServerUpgradeProperties;

		constructor(properties?: AzureServerUpgradeProperties);
		constructor();
	}

	declare class AzureServerVersionCapability
	{
		name: String;
		status: String;
		supportedEditions: Object[];

		constructor();
	}

	declare class AzureServiceObjective
	{
		id: String;
		location: String;
		name: String;
		properties: AzureServiceObjectiveProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureServiceObjectiveCapability
	{
		id: String;
		name: String;
		status: String;
		supportedMaxSizes: Object[];

		constructor();
	}

	declare class AzureServiceObjectiveGetResponse
	{
		requestId: String;
		serviceObjective: AzureServiceObjective;
		statusCode: Number;

		constructor();
	}

	declare class AzureServiceObjectiveListResponse
	{
		requestId: String;
		serviceObjectives: Object[];
		statusCode: Number;

		constructor();
	}

	declare class AzureServiceObjectiveProperties
	{
		default: boolean;
		description: String;
		enabled: boolean;
		serviceObjectiveName: String;
		system: boolean;

		constructor();
	}

	declare class AzureServiceTierAdvisor
	{
		id: String;
		location: String;
		name: String;
		properties: AzureServiceTierAdvisorProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureServiceTierAdvisorGetResponse
	{
		requestId: String;
		serviceTierAdvisor: AzureServiceTierAdvisor;
		statusCode: Number;

		constructor();
	}

	declare class AzureServiceTierAdvisorListResponse
	{
		requestId: String;
		serviceTierAdvisors: Object[];
		statusCode: Number;

		constructor();
	}

	declare class AzureServiceTierAdvisorProperties
	{
		activeTimeRatio: Number;
		avgDtu: Number;
		confidence: Number;
		currentServiceLevelObjective: String;
		currentServiceLevelObjectiveId: String;
		databaseSizeBasedRecommendationServiceLevelObjective: String;
		databaseSizeBasedRecommendationServiceLevelObjectiveId: String;
		disasterPlanBasedRecommendationServiceLevelObjective: String;
		disasterPlanBasedRecommendationServiceLevelObjectiveId: String;
		maxDtu: Number;
		maxSizeInGB: Number;
		minDtu: Number;
		observationPeriodEnd: Date;
		observationPeriodStart: Date;
		overallRecommendationServiceLevelObjective: String;
		overallRecommendationServiceLevelObjectiveId: String;
		serviceLevelObjectiveUsageMetrics: Object[];
		usageBasedRecommendationServiceLevelObjective: String;
		usageBasedRecommendationServiceLevelObjectiveId: String;

		constructor();
	}

	declare class AzureSiteLimits
	{
		maxDiskSizeInMb: Number;
		maxMemoryInMb: Number;
		maxPercentageCpu: Number;

		constructor();
	}

	declare class AzureSiteProperties
	{
		appSettings: Properties;
		metadata: Properties;
		properties: Properties;

		constructor();
	}

	declare class AzureSiteSourceControl
	{
		id: String;
		location: String;
		name: String;
		properties: AzureSiteSourceControlProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureSiteSourceControlProperties
	{
		branch: String;
		deploymentRollbackEnabled: boolean;
		manualIntegration: boolean;
		mercurial: boolean;
		repoUrl: String;

		constructor(repoUrl?: String);
		constructor();
	}

	declare class AzureSiteSourceControlUpdateParameters
	{
		properties: AzureSiteSourceControlProperties;

		constructor(properties?: AzureSiteSourceControlProperties);
		constructor();
	}

	declare class AzureSiteSourceControlUpdateResponse
	{
		requestId: String;
		siteSourceControl: AzureSiteSourceControl;
		statusCode: Number;

		constructor();
	}

	interface AzureSkuOptions
	{
		readonly Basic: AzureSkuOptions;
		readonly Free: AzureSkuOptions;
		readonly Premium: AzureSkuOptions;
		readonly Shared: AzureSkuOptions;
		readonly Standard: AzureSkuOptions;

	}

	declare const AzureSkuOptions: AzureSkuOptions;

	declare class AzureSlotConfigNames
	{
		appSettingNames: Object[];
		connectionStringNames: Object[];

		constructor();
	}

	declare class AzureSlotConfigNamesEnvelope
	{
		id: String;
		location: String;
		name: String;
		properties: AzureSlotConfigNames;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureSlotConfigNamesResult
	{
		requestId: String;
		resource: AzureSlotConfigNamesEnvelope;
		statusCode: Number;

		constructor();
	}

	declare class AzureSlotConfigNamesUpdateParameters
	{
		id: String;
		location: String;
		name: String;
		properties: AzureSlotConfigNames;
		tags: Properties;
		type: String;

		constructor(properties?: AzureSlotConfigNames, location?: String);
		constructor();
	}

	declare class AzureSloUsageMetric
	{
		id: String;
		inRangeTimeRatio: Number;
		location: String;
		name: String;
		serviceLevelObjective: String;
		serviceLevelObjectiveId: String;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureSoaRecord
	{
		email: String;
		expireTime: Number;
		host: String;
		minimumTtl: Number;
		refreshTime: Number;
		retryTime: Number;
		serialNumber: Number;

		constructor();
	}

	declare class AzureSourceControl
	{
		id: String;
		location: String;
		name: String;
		properties: AzureSourceControlProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureSourceControlGetResponse
	{
		requestId: String;
		sourceControl: AzureSourceControl;
		statusCode: Number;

		constructor();
	}

	declare class AzureSourceControlListResponse
	{
		requestId: String;
		sourceControls: Object[];
		statusCode: Number;

		constructor();
	}

	interface AzureSourceControlOperations
	{

		get(arg0?: String): AzureSourceControlGetResponse;
		list(): AzureSourceControlListResponse;
		update(arg0?: String, arg1?: AzureSourceControlUpdateParameters): AzureSourceControlUpdateResponse;
	}

	declare const AzureSourceControlOperations: AzureSourceControlOperations;

	declare class AzureSourceControlProperties
	{
		token: String;
		tokenSecret: String;

		constructor();
	}

	declare class AzureSourceControlUpdateParameters
	{
		properties: AzureSourceControlProperties;

		constructor(properties?: AzureSourceControlProperties);
		constructor();
	}

	declare class AzureSourceControlUpdateResponse
	{
		requestId: String;
		sourceControl: AzureSourceControl;
		statusCode: Number;

		constructor();
	}

	declare class AzureSourceImageReference
	{
		referenceUri: String;

		constructor();
	}

	declare class AzureSourceVaultReference
	{
		referenceUri: String;

		constructor();
	}

	declare class AzureSourceWebSite
	{
		location: String;
		name: String;
		resourceGroupName: String;
		slot: String;
		subscriptionId: String;

		constructor();
	}

	interface AzureSqlManagementClient
	{
		apiVersion: String;
		baseUri: String;
		databaseActivationOperations: AzureDatabaseActivationOperations;
		databaseBackupOperations: AzureDatabaseBackupOperations;
		databasesOperations: AzureDatabaseOperations;
		longRunningOperationInitialTimeout: Number;
		longRunningOperationRetryTimeout: Number;
		serversOperations: AzureServerOperations;

		close(): void;
	}

	declare const AzureSqlManagementClient: AzureSqlManagementClient;

	declare class AzureSrvRecord
	{
		port: Number;
		priority: Number;
		target: String;
		weight: Number;

		constructor();
	}

	declare class AzureSshConfiguration
	{
		publicKeys: Object[];

		constructor();
	}

	declare class AzureSshPublicKey
	{
		keyData: String;
		path: String;

		constructor();
	}

	declare class AzureStorageAccount
	{
		accountType: AzureAccountType;
		connection: AzureConnection;
		creationTime: Date;
		customDomain: AzureCustomDomain;
		displayName: String;
		id: String;
		internalIdString: String;
		lastGeoFailoverTime: Date;
		location: String;
		name: String;
		primaryEndpoints: AzureEndpoints;
		primaryLocation: String;
		provisioningState: AzureProvisioningState;
		resourceGroup: AzureResourceGroupExtended;
		secondaryEndpoints: AzureEndpoints;
		secondaryLocation: String;
		statusOfPrimary: AzureAccountStatus;
		statusOfSecondary: AzureAccountStatus;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
		delete(): void;
		deleteBlob(containerName?: String, vhdName?: String): void;
	}

	declare class AzureStorageAccountCreateParameters
	{
		accountType: AzureAccountType;
		location: String;
		tags: Properties;

		constructor(accountType?: AzureAccountType, location?: String);
		constructor();
	}

	declare class AzureStorageAccountCreateResponse
	{
		operationStatusLink: String;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;
		storageAccount: AzureStorageAccount;

		constructor();
	}

	declare class AzureStorageAccountGetPropertiesResponse
	{
		requestId: String;
		statusCode: Number;
		storageAccount: AzureStorageAccount;

		constructor();
	}

	declare class AzureStorageAccountKeys
	{
		key1: String;
		key2: String;

		constructor();
	}

	declare class AzureStorageAccountListKeysResponse
	{
		requestId: String;
		statusCode: Number;
		storageAccountKeys: AzureStorageAccountKeys;

		constructor();
	}

	declare class AzureStorageAccountListResponse
	{
		requestId: String;
		statusCode: Number;
		storageAccounts: Object[];

		constructor();
	}

	interface AzureStorageAccountOperations
	{

		beginCreate(arg0?: String, arg1?: String, arg2?: AzureStorageAccountCreateParameters): AzureStorageAccountCreateResponse;
		checkNameAvailability(arg0?: String): AzureCheckNameAvailabilityResponse;
		create(arg0?: String, arg1?: String, arg2?: AzureStorageAccountCreateParameters): AzureStorageAccountCreateResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		getProperties(arg0?: String, arg1?: String): AzureStorageAccountGetPropertiesResponse;
		list(): AzureStorageAccountListResponse;
		listByResourceGroup(arg0?: String): AzureStorageAccountListResponse;
		listKeys(arg0?: String, arg1?: String): AzureStorageAccountListKeysResponse;
		regenerateKey(arg0?: String, arg1?: String, arg2?: String): AzureStorageAccountRegenerateKeyResponse;
		update(arg0?: String, arg1?: String, arg2?: AzureStorageAccountUpdateParameters): AzureStorageAccountUpdateResponse;
	}

	declare const AzureStorageAccountOperations: AzureStorageAccountOperations;

	declare class AzureStorageAccountRegenerateKeyResponse
	{
		requestId: String;
		statusCode: Number;
		storageAccountKeys: AzureStorageAccountKeys;

		constructor();
	}

	declare class AzureStorageAccountUpdateParameters
	{
		accountType: AzureAccountType;
		customDomain: AzureCustomDomain;
		tags: Properties;

		constructor();
	}

	declare class AzureStorageAccountUpdateResponse
	{
		requestId: String;
		statusCode: Number;
		storageAccount: AzureStorageAccount;

		constructor();
	}

	interface AzureStorageManagementClient
	{
		apiVersion: String;
		baseUri: String;
		longRunningOperationInitialTimeout: Number;
		longRunningOperationRetryTimeout: Number;
		storageAccountsOperations: AzureStorageAccountOperations;
		usageOperations: AzureStorageUsageOperations;

		close(): void;
		getCreateOperationStatus(arg0?: String): AzureStorageAccountCreateResponse;
	}

	declare const AzureStorageManagementClient: AzureStorageManagementClient;

	declare class AzureStorageProfile
	{
		dataDisks: Object[];
		imageReference: AzureImageReference;
		oSDisk: AzureOSDisk;

		constructor();
	}

	interface AzureStorageUsageOperations
	{

		list(): AzureUsageListResponse;
	}

	declare const AzureStorageUsageOperations: AzureStorageUsageOperations;

	declare class AzureSubnet
	{
		addressPrefix: String;
		connection: AzureConnection;
		displayName: String;
		etag: String;
		id: String;
		internalIdString: String;
		ipConfigurations: Object[];
		name: String;
		networkSecurityGroup: AzureResourceId;
		provisioningState: String;
		resourceGroup: AzureResourceGroupExtended;
		routeTable: AzureResourceId;

		constructor(addressPrefix?: String);
		constructor();
		delete(): void;
	}

	declare class AzureSubnetGetResponse
	{
		requestId: String;
		statusCode: Number;
		subnet: AzureSubnet;

		constructor();
	}

	declare class AzureSubnetListResponse
	{
		nextLink: String;
		requestId: String;
		statusCode: Number;
		subnets: Object[];

		constructor();
	}

	interface AzureSubnetOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureSubnet): AzureSubnetPutResponse;
		beginDeleting(arg0?: String, arg1?: String, arg2?: String): AzureUpdateOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureSubnet): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String, arg2?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String, arg2?: String): AzureSubnetGetResponse;
		list(arg0?: String, arg1?: String): AzureSubnetListResponse;
	}

	declare const AzureSubnetOperations: AzureSubnetOperations;

	declare class AzureSubnetPutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;
		subnet: AzureSubnet;

		constructor();
	}

	declare class AzureTable
	{
		id: String;
		location: String;
		name: String;
		properties: AzureTableProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureTableProperties
	{
		columns: Object[];
		recommendedIndexes: Object[];
		tableType: String;

		constructor();
	}

	declare class AzureTagCount
	{
		type: String;
		value: String;

		constructor();
	}

	declare class AzureTagCreateResult
	{
		requestId: String;
		statusCode: Number;
		tag: AzureTagDetails;

		constructor();
	}

	declare class AzureTagCreateValueResult
	{
		requestId: String;
		statusCode: Number;
		value: AzureTagValue;

		constructor();
	}

	declare class AzureTagDetails
	{
		count: AzureTagCount;
		id: String;
		name: String;
		values: Object[];

		constructor();
	}

	interface AzureTagOperations
	{

		createOrUpdate(arg0?: String): AzureTagCreateResult;
		createOrUpdateValue(arg0?: String, arg1?: String): AzureTagCreateValueResult;
		delete(arg0?: String): AzureOperationResponse;
		deleteValue(arg0?: String, arg1?: String): AzureOperationResponse;
		list(): AzureTagsListResult;
		listNext(arg0?: String): AzureTagsListResult;
	}

	declare const AzureTagOperations: AzureTagOperations;

	declare class AzureTagsListResult
	{
		nextLink: String;
		requestId: String;
		statusCode: Number;
		tags: Object[];

		constructor(nextLink?: String);
		constructor();
	}

	declare class AzureTagValue
	{
		count: AzureTagCount;
		id: String;
		value: String;

		constructor();
	}

	declare class AzureTargetResource
	{
		id: String;
		resourceName: String;
		resourceType: String;

		constructor();
	}

	declare class AzureTemplateLink
	{
		contentVersion: String;
		uri: String;

		constructor(uri?: String);
		constructor();
	}

	declare class AzureTopLevelResource
	{
		etag: String;
		id: String;
		location: String;
		name: String;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureTransparentDataEncryption
	{
		id: String;
		location: String;
		name: String;
		properties: AzureTransparentDataEncryptionProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureTransparentDataEncryptionActivity
	{
		id: String;
		location: String;
		name: String;
		properties: AzureTransparentDataEncryptionActivityProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureTransparentDataEncryptionActivityListResponse
	{
		requestId: String;
		statusCode: Number;
		transparentDataEncryptionActivities: Object[];

		constructor();
	}

	declare class AzureTransparentDataEncryptionActivityProperties
	{
		percentComplete: Number;
		status: String;

		constructor();
	}

	declare class AzureTransparentDataEncryptionCreateOrUpdateParameters
	{
		properties: AzureTransparentDataEncryptionCreateOrUpdateProperties;

		constructor(properties?: AzureTransparentDataEncryptionCreateOrUpdateProperties);
		constructor();
	}

	declare class AzureTransparentDataEncryptionCreateOrUpdateProperties
	{
		state: String;

		constructor();
	}

	declare class AzureTransparentDataEncryptionGetResponse
	{
		requestId: String;
		statusCode: Number;
		transparentDataEncryption: AzureTransparentDataEncryption;

		constructor();
	}

	declare class AzureTransparentDataEncryptionProperties
	{
		state: String;

		constructor();
	}

	declare class AzureTxtRecord
	{
		value: String;

		constructor(value?: String);
		constructor();
	}

	declare class AzureUpdateOperationResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;

		constructor();
	}

	declare class AzureUpgradeHint
	{
		id: String;
		location: String;
		name: String;
		tags: Properties;
		targetServiceLevelObjective: String;
		targetServiceLevelObjectiveId: String;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureUpgradeRecommendedElasticPoolProperties
	{
		databaseCollection: Object[];
		databaseDtuMax: Number;
		databaseDtuMin: Number;
		dtu: Number;
		edition: String;
		includeAllDatabases: boolean;
		name: String;
		storageMb: Number;

		constructor();
	}

	declare class AzureUsage
	{
		currentValue: Number;
		limit: Number;
		name: AzureUsageName;
		unit: AzureUsageUnit;

		constructor();
	}

	declare class AzureUsageListResponse
	{
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureUsageName
	{
		localizedValue: String;
		value: String;

		constructor();
	}

	declare class AzureUsagesListResponse
	{
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureUsageUnit
	{
		readonly Count: AzureUsageUnit;

	}

	declare const AzureUsageUnit: AzureUsageUnit;

	declare class AzureValue
	{
		average: Number;
		count: Number;
		maximum: Number;
		minimum: Number;
		timestamp: Date;
		total: Number;

		constructor();
	}

	declare class AzureVaultCertificate
	{
		certificateStore: String;
		certificateUrl: String;

		constructor();
	}

	declare class AzureVaultSecretGroup
	{
		sourceVault: AzureSourceVaultReference;
		vaultCertificates: Object[];

		constructor();
	}

	declare class AzureVirtualHardDisk
	{
		uri: String;

		constructor();
	}

	declare class AzureVirtualMachine
	{
		availabilitySetReference: AzureAvailabilitySetReference;
		connection: AzureConnection;
		diagnosticsProfile: AzureDiagnosticsProfile;
		displayName: String;
		extensions: Object[];
		hardwareProfile: AzureHardwareProfile;
		id: String;
		imageOffer: String;
		imagePublisher: String;
		imageSku: String;
		imageVersion: String;
		instanceView: AzureVirtualMachineInstanceView;
		internalIdString: String;
		location: String;
		name: String;
		networkProfile: AzureNetworkProfile;
		operatingSystemType: String;
		osDiskUri: String;
		oSProfile: AzureOSProfile;
		plan: AzurePlan;
		powerState: String;
		provisioningState: String;
		resourceGroup: AzureResourceGroupExtended;
		resourceGroupName: String;
		storageProfile: AzureStorageProfile;
		subscriptionId: String;
		tags: Properties;
		type: String;
		virtualMachineMaxDiskCount: String;
		virtualMachineMemoryMb: String;
		virtualMachineNumberCores: String;
		virtualMachineResourceDiskSizeMb: String;
		virtualMachineSize: String;

		constructor(location?: String);
		constructor();
		beginCapture(destinationContainerName?: String, overwrite?: boolean, virtualHardDiskNamePrefix?: String): void;
		beginDeallocating(): void;
		beginDeleting(): void;
		beginPoweringOff(): void;
		beginRestarting(): void;
		beginStarting(): void;
		capture(destinationContainerName?: String, overwrite?: boolean, virtualHardDiskNamePrefix?: String): void;
		deallocate(): void;
		delete(): void;
		powerOff(): void;
		restart(): void;
		start(): void;
	}

	declare class AzureVirtualMachineAgentInstanceView
	{
		extensionHandlers: Object[];
		statuses: Object[];
		vMAgentVersion: String;

		constructor();
	}

	declare class AzureVirtualMachineCaptureParameters
	{
		destinationContainerName: String;
		overwrite: boolean;
		virtualHardDiskNamePrefix: String;

		constructor();
		constructor(virtualHardDiskNamePrefix?: String, destinationContainerName?: String, overwrite?: boolean);
	}

	declare class AzureVirtualMachineCreateOrUpdateResponse
	{
		azureAsyncOperation: String;
		requestId: String;
		statusCode: Number;
		virtualMachine: AzureVirtualMachine;

		constructor();
	}

	declare class AzureVirtualMachineExtension
	{
		autoUpgradeMinorVersion: boolean;
		extensionType: String;
		id: String;
		instanceView: AzureVirtualMachineExtensionInstanceView;
		location: String;
		name: String;
		protectedSettings: String;
		provisioningState: String;
		publisher: String;
		settings: String;
		tags: Properties;
		type: String;
		typeHandlerVersion: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureVirtualMachineExtensionCreateOrUpdateResponse
	{
		azureAsyncOperation: String;
		requestId: String;
		statusCode: Number;
		virtualMachineExtension: AzureVirtualMachineExtension;

		constructor();
	}

	declare class AzureVirtualMachineExtensionGetResponse
	{
		requestId: String;
		statusCode: Number;
		virtualMachineExtension: AzureVirtualMachineExtension;

		constructor();
	}

	declare class AzureVirtualMachineExtensionHandlerInstanceView
	{
		status: AzureInstanceViewStatus;
		type: String;
		typeHandlerVersion: String;

		constructor();
	}

	declare class AzureVirtualMachineExtensionImage
	{
		computeRole: String;
		handlerSchema: String;
		id: String;
		location: String;
		name: String;
		operatingSystem: String;
		supportsMultipleExtensions: boolean;
		vMScaleSetEnabled: boolean;

		constructor();
	}

	declare class AzureVirtualMachineExtensionImageGetParameters
	{
		filterExpression: String;
		location: String;
		publisherName: String;
		type: String;
		version: String;

		constructor();
	}

	declare class AzureVirtualMachineExtensionImageGetResponse
	{
		requestId: String;
		statusCode: Number;
		virtualMachineExtensionImage: AzureVirtualMachineExtensionImage;

		constructor();
	}

	declare class AzureVirtualMachineExtensionImageListTypesParameters
	{
		location: String;
		publisherName: String;

		constructor(location?: String, publisherName?: String);
		constructor();
	}

	declare class AzureVirtualMachineExtensionImageListVersionsParameters
	{
		filterExpression: String;
		location: String;
		publisherName: String;
		type: String;

		constructor(type?: String, location?: String, publisherName?: String);
		constructor();
	}

	interface AzureVirtualMachineExtensionImageOperations
	{

		get(arg0?: AzureVirtualMachineExtensionImageGetParameters): AzureVirtualMachineExtensionImageGetResponse;
		listTypes(arg0?: AzureVirtualMachineExtensionImageListTypesParameters): AzureVirtualMachineImageResourceList;
		listVersions(arg0?: AzureVirtualMachineExtensionImageListVersionsParameters): AzureVirtualMachineImageResourceList;
	}

	declare const AzureVirtualMachineExtensionImageOperations: AzureVirtualMachineExtensionImageOperations;

	declare class AzureVirtualMachineExtensionInstanceView
	{
		extensionType: String;
		name: String;
		statuses: Object[];
		subStatuses: Object[];
		typeHandlerVersion: String;

		constructor();
	}

	interface AzureVirtualMachineExtensionOperations
	{

		beginCreatingOrUpdating(arg0?: String, arg1?: String, arg2?: AzureVirtualMachineExtension): AzureVirtualMachineExtensionCreateOrUpdateResponse;
		beginDeleting(arg0?: String, arg1?: String, arg2?: String): AzureDeleteOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureVirtualMachineExtension): AzureComputeLongRunningOperationResponse;
		delete(arg0?: String, arg1?: String, arg2?: String): AzureDeleteOperationResponse;
		get(arg0?: String, arg1?: String, arg2?: String): AzureVirtualMachineExtensionGetResponse;
		getWithInstanceView(arg0?: String, arg1?: String, arg2?: String): AzureVirtualMachineExtensionGetResponse;
	}

	declare const AzureVirtualMachineExtensionOperations: AzureVirtualMachineExtensionOperations;

	declare class AzureVirtualMachineGetResponse
	{
		requestId: String;
		statusCode: Number;
		virtualMachine: AzureVirtualMachine;

		constructor();
	}

	declare class AzureVirtualMachineImage
	{
		connection: AzureConnection;
		dataDiskImages: Object[];
		displayName: String;
		id: String;
		internalIdString: String;
		location: String;
		name: String;
		offer: String;
		operatingSystem: String;
		oSDiskImage: AzureOSDiskImage;
		product: String;
		publisher: String;
		purchasePlan: AzurePurchasePlan;
		resourceGroup: AzureResourceGroupExtended;
		sku: String;
		version: String;

		constructor(id?: String, name?: String, location?: String);
		constructor();
	}

	declare class AzureVirtualMachineImageGetParameters
	{
		location: String;
		offer: String;
		publisherName: String;
		skus: String;
		version: String;

		constructor();
	}

	declare class AzureVirtualMachineImageGetResponse
	{
		requestId: String;
		statusCode: Number;
		virtualMachineImage: AzureVirtualMachineImage;

		constructor();
	}

	declare class AzureVirtualMachineImageListDetailsParameters
	{
		location: String;
		offer: String;
		publisherName: String;
		skus: String;

		constructor();
	}

	declare class AzureVirtualMachineImageListOffersParameters
	{
		location: String;
		publisherName: String;

		constructor(publisherName?: String, location?: String);
		constructor();
	}

	declare class AzureVirtualMachineImageListParameters
	{
		filterExpression: String;
		location: String;
		offer: String;
		publisherName: String;
		skus: String;

		constructor();
	}

	declare class AzureVirtualMachineImageListPublishersParameters
	{
		location: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureVirtualMachineImageListSkusParameters
	{
		location: String;
		offer: String;
		publisherName: String;

		constructor(offer?: String, publisherName?: String, location?: String);
		constructor();
	}

	declare class AzureVirtualMachineImageOffer
	{
		id: String;
		location: String;
		name: String;

		constructor(virtualMachineImageResource?: AzureVirtualMachineImageResource);
	}

	interface AzureVirtualMachineImageOperations
	{

		get(arg0?: AzureVirtualMachineImageGetParameters): AzureVirtualMachineImageGetResponse;
		list(arg0?: AzureVirtualMachineImageListParameters): AzureVirtualMachineImageResourceList;
		listOffers(arg0?: AzureVirtualMachineImageListOffersParameters): AzureVirtualMachineImageResourceList;
		listPublishers(arg0?: AzureVirtualMachineImageListPublishersParameters): AzureVirtualMachineImageResourceList;
		listSkus(arg0?: AzureVirtualMachineImageListSkusParameters): AzureVirtualMachineImageResourceList;
	}

	declare const AzureVirtualMachineImageOperations: AzureVirtualMachineImageOperations;

	declare class AzureVirtualMachineImagePublisher
	{
		id: String;
		location: String;
		name: String;

		constructor(virtualMachineImageResource?: AzureVirtualMachineImageResource);
	}

	declare class AzureVirtualMachineImageResource
	{
		id: String;
		location: String;
		name: String;

		constructor(id?: String, name?: String, location?: String);
		constructor();
	}

	declare class AzureVirtualMachineImageResourceList
	{
		requestId: String;
		resources: Object[];
		statusCode: Number;

		constructor();
	}

	declare class AzureVirtualMachineImageSku
	{
		id: String;
		location: String;
		name: String;

		constructor(virtualMachineImageResource?: AzureVirtualMachineImageResource);
	}

	declare class AzureVirtualMachineInstanceView
	{
		bootDiagnostics: AzureBootDiagnosticsInstanceView;
		disks: Object[];
		extensions: Object[];
		platformFaultDomain: Number;
		platformUpdateDomain: Number;
		remoteDesktopThumbprint: String;
		statuses: Object[];
		vMAgent: AzureVirtualMachineAgentInstanceView;

		constructor();
	}

	declare class AzureVirtualMachineListResponse
	{
		nextLink: String;
		requestId: String;
		statusCode: Number;
		virtualMachines: Object[];

		constructor();
	}

	interface AzureVirtualMachineOperations
	{

		beginCapturing(arg0?: String, arg1?: String, arg2?: AzureVirtualMachineCaptureParameters): AzureComputeOperationResponse;
		beginCreatingOrUpdating(arg0?: String, arg1?: AzureVirtualMachine): AzureVirtualMachineCreateOrUpdateResponse;
		beginDeallocating(arg0?: String, arg1?: String): AzureComputeOperationResponse;
		beginDeleting(arg0?: String, arg1?: String): AzureDeleteOperationResponse;
		beginPoweringOff(arg0?: String, arg1?: String): AzureComputeOperationResponse;
		beginRestarting(arg0?: String, arg1?: String): AzureComputeOperationResponse;
		beginStarting(arg0?: String, arg1?: String): AzureComputeOperationResponse;
		capture(arg0?: String, arg1?: String, arg2?: AzureVirtualMachineCaptureParameters): AzureComputeLongRunningOperationResponse;
		createOrUpdate(arg0?: String, arg1?: AzureVirtualMachine): AzureComputeLongRunningOperationResponse;
		deallocate(arg0?: String, arg1?: String): AzureComputeLongRunningOperationResponse;
		delete(arg0?: String, arg1?: String): AzureDeleteOperationResponse;
		generalize(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureVirtualMachineGetResponse;
		getWithInstanceView(arg0?: String, arg1?: String): AzureVirtualMachineGetResponse;
		list(arg0?: String): AzureVirtualMachineListResponse;
		listAll(arg0?: AzureListParameters): AzureVirtualMachineListResponse;
		listAvailableSizes(arg0?: String, arg1?: String): AzureVirtualMachineSizeListResponse;
		listNext(arg0?: String): AzureVirtualMachineListResponse;
		powerOff(arg0?: String, arg1?: String): AzureComputeLongRunningOperationResponse;
		restart(arg0?: String, arg1?: String): AzureComputeLongRunningOperationResponse;
		start(arg0?: String, arg1?: String): AzureComputeLongRunningOperationResponse;
	}

	declare const AzureVirtualMachineOperations: AzureVirtualMachineOperations;

	declare class AzureVirtualMachineReference
	{
		referenceUri: String;

		constructor();
	}

	declare class AzureVirtualMachineSize
	{
		maxDataDiskCount: Number;
		memoryInMB: Number;
		name: String;
		numberOfCores: Number;
		oSDiskSizeInMB: Number;
		resourceDiskSizeInMB: Number;

		constructor();
	}

	declare class AzureVirtualMachineSizeListResponse
	{
		requestId: String;
		statusCode: Number;
		virtualMachineSizes: Object[];

		constructor();
	}

	interface AzureVirtualMachineSizeOperations
	{

		list(arg0?: String): AzureVirtualMachineSizeListResponse;
	}

	declare const AzureVirtualMachineSizeOperations: AzureVirtualMachineSizeOperations;

	declare class AzureVirtualNetwork
	{
		addressSpace: AzureAddressSpace;
		connection: AzureConnection;
		dhcpOptions: AzureDhcpOptions;
		displayName: String;
		etag: String;
		id: String;
		internalIdString: String;
		location: String;
		name: String;
		provisioningState: String;
		resourceGroup: AzureResourceGroupExtended;
		resourceGuid: String;
		subnets: Object[];
		tags: Properties;
		type: String;
		virtualNetworkSubnets: AzureSubnet[];

		constructor();
		constructor(location?: String);
		delete(): void;
		getSubnet(subnetName?: String): AzureSubnet;
	}

	declare class AzureVirtualNetworkGateway
	{
		enableBgp: boolean;
		etag: String;
		gatewayType: String;
		id: String;
		ipConfigurations: Object[];
		location: String;
		name: String;
		provisioningState: String;
		resourceGuid: String;
		tags: Properties;
		type: String;
		vpnType: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureVirtualNetworkGatewayConnection
	{
		connectionType: String;
		etag: String;
		id: String;
		localNetworkGateway2: AzureLocalNetworkGateway;
		location: String;
		name: String;
		provisioningState: String;
		resourceGuid: String;
		routingWeight: Number;
		sharedKey: String;
		tags: Properties;
		type: String;
		virtualNetworkGateway1: AzureVirtualNetworkGateway;
		virtualNetworkGateway2: AzureVirtualNetworkGateway;

		constructor(location?: String);
		constructor();
	}

	declare class AzureVirtualNetworkGatewayConnectionGetResponse
	{
		requestId: String;
		statusCode: Number;
		virtualNetworkGatewayConnection: AzureVirtualNetworkGatewayConnection;

		constructor();
	}

	declare class AzureVirtualNetworkGatewayConnectionListResponse
	{
		nextLink: String;
		requestId: String;
		statusCode: Number;
		virtualNetworkGatewayConnections: Object[];

		constructor();
	}

	interface AzureVirtualNetworkGatewayConnectionOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: AzureVirtualNetworkGatewayConnection): AzureVirtualNetworkGatewayConnectionPutResponse;
		beginDeleting(arg0?: String, arg1?: String): AzureUpdateOperationResponse;
		beginResetSharedKey(arg0?: String, arg1?: String, arg2?: AzureConnectionResetSharedKey): AzureConnectionResetSharedKeyPutResponse;
		beginSetSharedKey(arg0?: String, arg1?: String, arg2?: AzureConnectionSharedKey): AzureConnectionSharedKeyPutResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureVirtualNetworkGatewayConnection): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureVirtualNetworkGatewayConnectionGetResponse;
		getSharedKey(arg0?: String, arg1?: String): AzureConnectionSharedKeyResponse;
		list(arg0?: String): AzureVirtualNetworkGatewayConnectionListResponse;
		resetSharedKey(arg0?: String, arg1?: String, arg2?: AzureConnectionResetSharedKey): AzureAzureAsyncOperationResponse;
		setSharedKey(arg0?: String, arg1?: String, arg2?: AzureConnectionSharedKey): AzureAzureAsyncOperationResponse;
	}

	declare const AzureVirtualNetworkGatewayConnectionOperations: AzureVirtualNetworkGatewayConnectionOperations;

	declare class AzureVirtualNetworkGatewayConnectionPutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;
		virtualNetworkGatewayConnection: AzureVirtualNetworkGatewayConnection;

		constructor();
	}

	declare class AzureVirtualNetworkGatewayGetResponse
	{
		requestId: String;
		statusCode: Number;
		virtualNetworkGateway: AzureVirtualNetworkGateway;

		constructor();
	}

	declare class AzureVirtualNetworkGatewayIpConfiguration
	{
		etag: String;
		id: String;
		name: String;
		privateIpAddress: String;
		privateIpAllocationMethod: String;
		provisioningState: String;
		publicIpAddress: AzureResourceId;
		subnet: AzureResourceId;

		constructor();
	}

	declare class AzureVirtualNetworkGatewayListResponse
	{
		nextLink: String;
		requestId: String;
		statusCode: Number;
		virtualNetworkGateways: Object[];

		constructor();
	}

	interface AzureVirtualNetworkGatewayOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: AzureVirtualNetworkGateway): AzureVirtualNetworkGatewayPutResponse;
		beginDeleting(arg0?: String, arg1?: String): AzureUpdateOperationResponse;
		beginReset(arg0?: String, arg1?: String, arg2?: AzureVirtualNetworkGateway): AzureVirtualNetworkGatewayPutResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureVirtualNetworkGateway): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureVirtualNetworkGatewayGetResponse;
		list(arg0?: String): AzureVirtualNetworkGatewayListResponse;
		reset(arg0?: String, arg1?: String, arg2?: AzureVirtualNetworkGateway): AzureAzureAsyncOperationResponse;
	}

	declare const AzureVirtualNetworkGatewayOperations: AzureVirtualNetworkGatewayOperations;

	declare class AzureVirtualNetworkGatewayPutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;
		virtualNetworkGateway: AzureVirtualNetworkGateway;

		constructor();
	}

	declare class AzureVirtualNetworkGetResponse
	{
		requestId: String;
		statusCode: Number;
		virtualNetwork: AzureVirtualNetwork;

		constructor();
	}

	declare class AzureVirtualNetworkListResponse
	{
		nextLink: String;
		requestId: String;
		statusCode: Number;
		virtualNetworks: Object[];

		constructor();
	}

	interface AzureVirtualNetworkOperations
	{

		beginCreateOrUpdating(arg0?: String, arg1?: String, arg2?: AzureVirtualNetwork): AzureVirtualNetworkPutResponse;
		beginDeleting(arg0?: String, arg1?: String): AzureUpdateOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureVirtualNetwork): AzureAzureAsyncOperationResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureVirtualNetworkGetResponse;
		list(arg0?: String): AzureVirtualNetworkListResponse;
		listAll(): AzureVirtualNetworkListResponse;
	}

	declare const AzureVirtualNetworkOperations: AzureVirtualNetworkOperations;

	declare class AzureVirtualNetworkPutResponse
	{
		azureAsyncOperation: String;
		error: AzureError;
		requestId: String;
		retryAfter: Number;
		statusCode: Number;
		virtualNetwork: AzureVirtualNetwork;

		constructor();
	}

	interface AzureWebHostingOperations
	{

		createOrUpdate(arg0?: String, arg1?: AzureWebHostingPlanCreateOrUpdateParameters): AzureWebHostingPlanCreateOrUpdateResponse;
		delete(arg0?: String, arg1?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureWebHostingPlanGetResponse;
		getHistoricalUsageMetrics(arg0?: String, arg1?: String, arg2?: AzureWebHostingPlanGetHistoricalUsageMetricsParameters): AzureWebHostingPlanGetHistoricalUsageMetricsResponse;
		list(arg0?: String): AzureWebHostingPlanListResponse;
	}

	declare const AzureWebHostingOperations: AzureWebHostingOperations;

	declare class AzureWebHostingPlan
	{
		id: String;
		location: String;
		name: String;
		properties: AzureWebHostingPlanProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureWebHostingPlanCreateOrUpdateParameters
	{
		webHostingPlan: AzureWebHostingPlan;

		constructor(webHostingPlan?: AzureWebHostingPlan);
		constructor();
	}

	declare class AzureWebHostingPlanCreateOrUpdateResponse
	{
		requestId: String;
		statusCode: Number;
		webHostingPlan: AzureWebHostingPlan;

		constructor();
	}

	declare class AzureWebHostingPlanGetHistoricalUsageMetricsParameters
	{
		endTime: Date;
		includeInstanceBreakdown: boolean;
		metricNames: Object[];
		startTime: Date;
		timeGrain: String;

		constructor();
	}

	declare class AzureWebHostingPlanGetHistoricalUsageMetricsResponse
	{
		requestId: String;
		statusCode: Number;
		usageMetrics: Object[];

		constructor();
	}

	declare class AzureWebHostingPlanGetResponse
	{
		requestId: String;
		statusCode: Number;
		webHostingPlan: AzureWebHostingPlan;

		constructor();
	}

	declare class AzureWebHostingPlanListResponse
	{
		requestId: String;
		statusCode: Number;
		webHostingPlans: Object[];

		constructor();
	}

	declare class AzureWebHostingPlanProperties
	{
		adminSiteName: String;
		numberOfWorkers: Number;
		sku: AzureSkuOptions;
		workerSize: AzureWorkerSizeOptions;

		constructor();
	}

	declare class AzureWebSite
	{
		connection: AzureConnection;
		displayName: String;
		id: String;
		internalIdString: String;
		location: String;
		name: String;
		properties: AzureWebSiteProperties;
		resourceGroup: AzureResourceGroupExtended;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
		delete(): void;
	}

	declare class AzureWebSiteAppSettingsEnvelope
	{
		id: String;
		location: String;
		name: String;
		properties: Object[];
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureWebSiteAppSettingsResult
	{
		requestId: String;
		resource: AzureWebSiteAppSettingsEnvelope;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteAsyncOperationResponse
	{
		location: String;
		requestId: String;
		retryAfter: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteBackupResponse
	{
		backupItem: AzureBackupItemEnvelope;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteBase
	{
		id: String;
		location: String;
		name: String;
		properties: AzureWebSiteBaseProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureWebSiteBaseProperties
	{
		serverFarm: String;

		constructor(serverFarm?: String);
		constructor();
	}

	declare class AzureWebSiteCloneBase
	{
		id: String;
		location: String;
		name: String;
		properties: AzureWebSiteCloneBaseProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureWebSiteCloneBaseProperties
	{
		cloningInfo: AzureCloningInfo;
		serverFarm: String;

		constructor();
	}

	declare class AzureWebSiteCloneParameters
	{
		webSiteClone: AzureWebSiteCloneBase;

		constructor(webSiteClone?: AzureWebSiteCloneBase);
		constructor();
	}

	declare class AzureWebSiteConfiguration
	{
		appSettings: Properties;
		autoSwapSlotName: String;
		connectionStrings: Object[];
		defaultDocuments: Object[];
		detailedErrorLoggingEnabled: boolean;
		documentRoot: String;
		handlerMappings: Object[];
		httpLoggingEnabled: boolean;
		limits: AzureSiteLimits;
		logsDirectorySizeLimit: Number;
		managedPipelineMode: AzureManagedPipelineMode;
		metadata: Properties;
		netFrameworkVersion: String;
		numberOfWorkers: Number;
		phpVersion: String;
		publishingPassword: String;
		publishingUserName: String;
		pythonVersion: String;
		remoteDebuggingEnabled: boolean;
		remoteDebuggingVersion: AzureRemoteDebuggingVersion;
		requestTracingEnabled: boolean;
		requestTracingExpirationTime: Date;
		scmType: String;
		use32BitWorkerProcess: boolean;
		webSocketsEnabled: boolean;

		constructor();
	}

	declare class AzureWebSiteConfigurationEnvelope
	{
		id: String;
		location: String;
		name: String;
		properties: AzureWebSiteConfiguration;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureWebSiteConnectionStringsEnvelope
	{
		id: String;
		location: String;
		name: String;
		properties: Object[];
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureWebSiteConnectionStringsResult
	{
		requestId: String;
		resource: AzureWebSiteConnectionStringsEnvelope;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteCreateOrUpdateParameters
	{
		webSite: AzureWebSiteBase;

		constructor(webSite?: AzureWebSiteBase);
		constructor();
	}

	declare class AzureWebSiteCreateResponse
	{
		requestId: String;
		statusCode: Number;
		webSite: AzureWebSite;

		constructor();
	}

	declare class AzureWebSiteDeleteParameters
	{
		deleteAllSlots: boolean;
		deleteEmptyServerFarm: boolean;
		deleteMetrics: boolean;

		constructor(deleteEmptyServerFarm?: boolean, deleteMetrics?: boolean, deleteAllSlots?: boolean);
		constructor();
	}

	declare class AzureWebSiteDeleteRepositoryResponse
	{
		requestId: String;
		statusCode: Number;
		uri: String;

		constructor();
	}

	declare class AzureWebSiteGetBackupConfigurationResponse
	{
		backupSchedule: AzureBackupScheduleRequestEnvelope;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteGetBackupsResponse
	{
		backupList: AzureBackupItemsEnvelope;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteGetConfigurationParameters
	{
		propertiesToInclude: Object[];

		constructor();
	}

	declare class AzureWebSiteGetConfigurationResponse
	{
		appSettings: Properties;
		autoSwapSlotName: String;
		connectionStrings: Object[];
		defaultDocuments: Object[];
		detailedErrorLoggingEnabled: boolean;
		documentRoot: String;
		httpLoggingEnabled: boolean;
		logsDirectorySizeLimit: Number;
		managedPipelineMode: AzureManagedPipelineMode;
		metadata: Properties;
		netFrameworkVersion: String;
		numberOfWorkers: Number;
		phpVersion: String;
		publishingPassword: String;
		publishingUserName: String;
		pythonVersion: String;
		remoteDebuggingEnabled: boolean;
		remoteDebuggingVersion: AzureRemoteDebuggingVersion;
		requestTracingEnabled: boolean;
		requestTracingExpirationTime: Date;
		scmType: String;
		use32BitWorkerProcess: boolean;
		webSocketsEnabled: boolean;

		constructor();
	}

	declare class AzureWebSiteGetConfigurationResult
	{
		requestId: String;
		resource: AzureWebSiteConfigurationEnvelope;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteGetHistoricalUsageMetricsParameters
	{
		endTime: Date;
		includeInstanceBreakdown: boolean;
		metricNames: Object[];
		slotView: boolean;
		startTime: Date;
		timeGrain: String;

		constructor();
	}

	declare class AzureWebSiteGetHistoricalUsageMetricsResponse
	{
		requestId: String;
		statusCode: Number;
		usageMetrics: Object[];

		constructor();
	}

	declare class AzureWebSiteGetParameters
	{
		propertiesToInclude: Object[];

		constructor();
	}

	declare class AzureWebSiteGetPublishProfileResponse
	{
		publishProfiles: Object[];
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteGetRepositoryResponse
	{
		requestId: String;
		statusCode: Number;
		uri: String;

		constructor();
	}

	declare class AzureWebSiteGetResponse
	{
		requestId: String;
		statusCode: Number;
		webSite: AzureWebSite;

		constructor();
	}

	declare class AzureWebSiteGetUsageMetricsResponse
	{
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteHostNameSslState
	{
		hostType: AzureHostType;
		ipBasedSslResult: String;
		name: String;
		sslState: AzureWebSiteSslState;
		thumbprint: String;
		toUpdate: boolean;
		toUpdateIpBasedSsl: boolean;
		virtualIP: String;

		constructor();
	}

	declare class AzureWebSiteListParameters
	{
		propertiesToInclude: Object[];

		constructor();
	}

	declare class AzureWebSiteListResponse
	{
		requestId: String;
		statusCode: Number;
		webSites: Object[];

		constructor();
	}

	interface AzureWebSiteManagementClient
	{
		apiVersion: String;
		baseUri: String;
		longRunningOperationInitialTimeout: Number;
		longRunningOperationRetryTimeout: Number;
		sourceControlsOperations: AzureSourceControlOperations;
		webHostingPlansOperations: AzureWebHostingOperations;
		webSitesOperations: AzureWebsiteOperations;

		close(): void;
	}

	declare const AzureWebSiteManagementClient: AzureWebSiteManagementClient;

	declare class AzureWebSiteMetadataEnvelope
	{
		id: String;
		location: String;
		name: String;
		properties: Object[];
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureWebSiteMetadataResult
	{
		requestId: String;
		resource: AzureWebSiteMetadataEnvelope;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteNameValueParameters
	{
		id: String;
		location: String;
		name: String;
		properties: Object[];
		tags: Properties;
		type: String;

		constructor(properties?: AzureNameValuePair[], location?: String);
		constructor();
	}

	interface AzureWebsiteOperations
	{

		backup(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureBackupRequestEnvelope): AzureWebSiteBackupResponse;
		cloneMethod(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureWebSiteCloneParameters): AzureWebSiteAsyncOperationResponse;
		createOrUpdate(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureWebSiteCreateOrUpdateParameters): AzureWebSiteCreateResponse;
		createRepository(arg0?: String, arg1?: String, arg2?: String): AzureOperationResponse;
		delete(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureWebSiteDeleteParameters): AzureOperationResponse;
		deleteRepository(arg0?: String, arg1?: String, arg2?: String): AzureWebSiteDeleteRepositoryResponse;
		deleteSiteSourceControl(arg0?: String, arg1?: String, arg2?: String, arg3?: String): AzureOperationResponse;
		discover(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureRestoreRequestEnvelope): AzureWebSiteRestoreDiscoverResponse;
		generatePassword(arg0?: String, arg1?: String, arg2?: String): AzureOperationResponse;
		get(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureWebSiteGetParameters): AzureWebSiteGetResponse;
		getAppSettings(arg0?: String, arg1?: String, arg2?: String): AzureWebSiteAppSettingsResult;
		getBackupConfiguration(arg0?: String, arg1?: String, arg2?: String): AzureWebSiteGetBackupConfigurationResponse;
		getConfiguration(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureWebSiteGetConfigurationParameters): AzureWebSiteGetConfigurationResult;
		getConnectionStrings(arg0?: String, arg1?: String, arg2?: String): AzureWebSiteConnectionStringsResult;
		getHistoricalUsageMetrics(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureWebSiteGetHistoricalUsageMetricsParameters): AzureWebSiteGetHistoricalUsageMetricsResponse;
		getMetadata(arg0?: String, arg1?: String, arg2?: String): AzureWebSiteMetadataResult;
		getOperation(arg0?: String, arg1?: String, arg2?: String, arg3?: String): AzureWebSiteAsyncOperationResponse;
		getPublishingCredentials(arg0?: String, arg1?: String, arg2?: String): AzureWebSitePublishingCredentialsResult;
		getPublishProfile(arg0?: String, arg1?: String, arg2?: String): AzureWebSiteGetPublishProfileResponse;
		getRepository(arg0?: String, arg1?: String, arg2?: String): AzureWebSiteGetRepositoryResponse;
		getSlotConfigNames(arg0?: String, arg1?: String): AzureSlotConfigNamesResult;
		getUsageMetrics(arg0?: String, arg1?: String, arg2?: String): AzureWebSiteGetUsageMetricsResponse;
		list(arg0?: String, arg1?: String, arg2?: AzureWebSiteListParameters): AzureWebSiteListResponse;
		listBackups(arg0?: String, arg1?: String, arg2?: String): AzureWebSiteGetBackupsResponse;
		restart(arg0?: String, arg1?: String, arg2?: String): AzureOperationResponse;
		restore(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureRestoreRequestEnvelope): AzureWebSiteRestoreResponse;
		start(arg0?: String, arg1?: String, arg2?: String): AzureOperationResponse;
		stop(arg0?: String, arg1?: String, arg2?: String): AzureOperationResponse;
		updateAppSettings(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureWebSiteNameValueParameters): AzureWebSiteAppSettingsResult;
		updateBackupConfiguration(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureBackupRequestEnvelope): AzureOperationResponse;
		updateConfiguration(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureWebSiteUpdateConfigurationParameters): AzureOperationResponse;
		updateConnectionStrings(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureWebSiteUpdateConnectionStringsParameters): AzureWebSiteConnectionStringsResult;
		updateMetadata(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureWebSiteNameValueParameters): AzureWebSiteMetadataResult;
		updateSiteSourceControl(arg0?: String, arg1?: String, arg2?: String, arg3?: AzureSiteSourceControlUpdateParameters): AzureSiteSourceControlUpdateResponse;
		updateSlotConfigNames(arg0?: String, arg1?: String, arg2?: AzureSlotConfigNamesUpdateParameters): AzureOperationResponse;
	}

	declare const AzureWebsiteOperations: AzureWebsiteOperations;

	declare class AzureWebSiteProperties
	{
		adminEnabled: boolean;
		availabilityState: AzureWebSpaceAvailabilityState;
		enabled: boolean;
		enabledHostNames: Object[];
		hostNames: Object[];
		hostNameSslStates: Object[];
		lastModifiedTimeUtc: Date;
		properties: AzureSiteProperties;
		provisioningState: String;
		repositorySiteName: String;
		runtimeAvailabilityState: AzureWebSiteRuntimeAvailabilityState;
		serverFarm: String;
		serverFarmId: String;
		siteConfig: AzureWebSiteConfiguration;
		sku: AzureSkuOptions;
		state: AzureWebSiteState;
		trafficManagerHostNames: Object[];
		uri: String;
		usageState: AzureWebSiteUsageState;
		webSpace: String;

		constructor();
	}

	declare class AzureWebSitePublishingCredentialsEnvelope
	{
		id: String;
		location: String;
		name: String;
		properties: AzurePublishingCredentials;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureWebSitePublishingCredentialsResult
	{
		requestId: String;
		resource: AzureWebSitePublishingCredentialsEnvelope;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteRestoreDiscover
	{
		id: String;
		location: String;
		name: String;
		properties: AzureWebSiteRestoreDiscoverProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureWebSiteRestoreDiscoverProperties
	{
		adjustConnectionStrings: boolean;
		blobName: String;
		databases: Object[];
		ignoreConflictingHostNames: boolean;
		overwrite: boolean;
		storageAccountUrl: String;

		constructor();
	}

	declare class AzureWebSiteRestoreDiscoverResponse
	{
		envelope: AzureWebSiteRestoreDiscover;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	declare class AzureWebSiteRestoreResponse
	{
		operationId: String;
		requestId: String;
		statusCode: Number;

		constructor();
	}

	interface AzureWebSiteRuntimeAvailabilityState
	{
		readonly Degraded: AzureWebSiteRuntimeAvailabilityState;
		readonly Normal: AzureWebSiteRuntimeAvailabilityState;
		readonly NotAvailable: AzureWebSiteRuntimeAvailabilityState;

	}

	declare const AzureWebSiteRuntimeAvailabilityState: AzureWebSiteRuntimeAvailabilityState;

	interface AzureWebSiteSslState
	{
		readonly Disabled: AzureWebSiteSslState;
		readonly IpBasedEnabled: AzureWebSiteSslState;
		readonly SniEnabled: AzureWebSiteSslState;

	}

	declare const AzureWebSiteSslState: AzureWebSiteSslState;

	interface AzureWebSiteState
	{
		readonly Running: AzureWebSiteState;
		readonly Stopped: AzureWebSiteState;

	}

	declare const AzureWebSiteState: AzureWebSiteState;

	declare class AzureWebSiteUpdateConfigurationDetails
	{
		alwaysOn: boolean;
		appSettings: Properties;
		autoSwapSlotName: String;
		connectionStrings: Object[];
		defaultDocuments: Object[];
		detailedErrorLoggingEnabled: boolean;
		documentRoot: String;
		httpLoggingEnabled: boolean;
		limits: AzureSiteLimits;
		logsDirectorySizeLimit: Number;
		managedPipelineMode: AzureManagedPipelineMode;
		metadata: Properties;
		netFrameworkVersion: String;
		numberOfWorkers: Number;
		phpVersion: String;
		pythonVersion: String;
		remoteDebuggingEnabled: boolean;
		remoteDebuggingVersion: AzureRemoteDebuggingVersion;
		requestTracingEnabled: boolean;
		requestTracingExpirationTime: Date;
		scmType: String;
		use32BitWorkerProcess: boolean;
		webSocketsEnabled: boolean;

		constructor();
	}

	declare class AzureWebSiteUpdateConfigurationParameters
	{
		id: String;
		location: String;
		name: String;
		properties: AzureWebSiteUpdateConfigurationDetails;
		tags: Properties;
		type: String;

		constructor(properties?: AzureWebSiteUpdateConfigurationDetails, location?: String);
		constructor();
	}

	declare class AzureWebSiteUpdateConnectionStringsParameters
	{
		id: String;
		location: String;
		name: String;
		properties: Object[];
		tags: Properties;
		type: String;

		constructor(properties?: AzureConnectionStringInfo[], location?: String);
		constructor();
	}

	interface AzureWebSiteUsageState
	{
		readonly Exceeded: AzureWebSiteUsageState;
		readonly Normal: AzureWebSiteUsageState;

	}

	declare const AzureWebSiteUsageState: AzureWebSiteUsageState;

	interface AzureWebSpaceAvailabilityState
	{
		readonly Limited: AzureWebSpaceAvailabilityState;
		readonly Normal: AzureWebSpaceAvailabilityState;

	}

	declare const AzureWebSpaceAvailabilityState: AzureWebSpaceAvailabilityState;

	declare class AzureWindowsConfiguration
	{
		additionalUnattendContents: Object[];
		enableAutomaticUpdates: boolean;
		provisionVMAgent: boolean;
		timeZone: String;
		winRMConfiguration: AzureWinRMConfiguration;

		constructor();
	}

	declare class AzureWinRMConfiguration
	{
		listeners: Object[];

		constructor();
	}

	declare class AzureWinRMListener
	{
		certificateUrl: String;
		protocol: String;

		constructor();
	}

	interface AzureWorkerSizeOptions
	{
		readonly Large: AzureWorkerSizeOptions;
		readonly Medium: AzureWorkerSizeOptions;
		readonly Small: AzureWorkerSizeOptions;

	}

	declare const AzureWorkerSizeOptions: AzureWorkerSizeOptions;

	declare class AzureZone
	{
		id: String;
		location: String;
		name: String;
		properties: AzureZoneProperties;
		tags: Properties;
		type: String;

		constructor(location?: String);
		constructor();
	}

	declare class AzureZoneCreateOrUpdateParameters
	{
		ifNoneMatch: String;
		zone: AzureZone;

		constructor(zone?: AzureZone);
		constructor();
	}

	declare class AzureZoneCreateOrUpdateResponse
	{
		requestId: String;
		statusCode: Number;
		zone: AzureZone;

		constructor();
	}

	declare class AzureZoneDeleteParameters
	{
		ifMatch: String;

		constructor();
	}

	declare class AzureZoneGetResponse
	{
		requestId: String;
		statusCode: Number;
		zone: AzureZone;

		constructor();
	}

	declare class AzureZoneListParameters
	{
		filter: String;
		top: String;

		constructor();
	}

	declare class AzureZoneListResponse
	{
		nextLink: String;
		requestId: String;
		statusCode: Number;
		zones: Object[];

		constructor(zones?: AzureZone[]);
		constructor();
	}

	interface AzureZoneOperations
	{

		createOrUpdate(arg0?: String, arg1?: String, arg2?: AzureZoneCreateOrUpdateParameters): AzureZoneCreateOrUpdateResponse;
		delete(arg0?: String, arg1?: String, arg2?: AzureZoneDeleteParameters): AzureOperationResponse;
		get(arg0?: String, arg1?: String): AzureZoneGetResponse;
		list(arg0?: String, arg1?: AzureZoneListParameters): AzureZoneListResponse;
		listNext(arg0?: String): AzureZoneListResponse;
	}

	declare const AzureZoneOperations: AzureZoneOperations;

	declare class AzureZoneProperties
	{
		maxNumberOfRecordSets: Number;
		numberOfRecordSets: Number;

		constructor();
	}

    
    // Finder objects.
declare namespace Azure {
	interface _folder_ApplicationGateways
	{
		name: any;

		applicationgateways(): ApplicationGateway;
	}

	interface _folder_ApplicationGatewaysConstructor {
		new(value?:any): _folder_ApplicationGateways;
		readonly prototype: _folder_ApplicationGateways;
	}

	const _folder_ApplicationGateways: _folder_ApplicationGatewaysConstructor;

	interface _folder_AvailabilitySets
	{
		name: any;

		availabilitysets(): AvailabilitySet;
	}

	interface _folder_AvailabilitySetsConstructor {
		new(value?:any): _folder_AvailabilitySets;
		readonly prototype: _folder_AvailabilitySets;
	}

	const _folder_AvailabilitySets: _folder_AvailabilitySetsConstructor;

	interface _folder_DatabaseServers
	{
		name: any;

		servers(): Server;
	}

	interface _folder_DatabaseServersConstructor {
		new(value?:any): _folder_DatabaseServers;
		readonly prototype: _folder_DatabaseServers;
	}

	const _folder_DatabaseServers: _folder_DatabaseServersConstructor;

	interface _folder_Deployments
	{
		name: any;

		deployments(): DeploymentExtended;
	}

	interface _folder_DeploymentsConstructor {
		new(value?:any): _folder_Deployments;
		readonly prototype: _folder_Deployments;
	}

	const _folder_Deployments: _folder_DeploymentsConstructor;

	interface _folder_DnsZones
	{
		name: any;

		dnszones(): Zone;
	}

	interface _folder_DnsZonesConstructor {
		new(value?:any): _folder_DnsZones;
		readonly prototype: _folder_DnsZones;
	}

	const _folder_DnsZones: _folder_DnsZonesConstructor;

	interface _folder_LoadBalancers
	{
		name: any;

		loadbalancers(): LoadBalancer;
	}

	interface _folder_LoadBalancersConstructor {
		new(value?:any): _folder_LoadBalancers;
		readonly prototype: _folder_LoadBalancers;
	}

	const _folder_LoadBalancers: _folder_LoadBalancersConstructor;

	interface _folder_NetworkInterfaces
	{
		name: any;

		networkinterfaces(): NetworkInterface;
	}

	interface _folder_NetworkInterfacesConstructor {
		new(value?:any): _folder_NetworkInterfaces;
		readonly prototype: _folder_NetworkInterfaces;
	}

	const _folder_NetworkInterfaces: _folder_NetworkInterfacesConstructor;

	interface _folder_NetworkSecurityGroups
	{
		name: any;

		networksecuritygroups(): NetworkSecurityGroup;
	}

	interface _folder_NetworkSecurityGroupsConstructor {
		new(value?:any): _folder_NetworkSecurityGroups;
		readonly prototype: _folder_NetworkSecurityGroups;
	}

	const _folder_NetworkSecurityGroups: _folder_NetworkSecurityGroupsConstructor;

	interface _folder_PublicIpAddresses
	{
		name: any;

		publicipaddresses(): PublicIpAddress;
	}

	interface _folder_PublicIpAddressesConstructor {
		new(value?:any): _folder_PublicIpAddresses;
		readonly prototype: _folder_PublicIpAddresses;
	}

	const _folder_PublicIpAddresses: _folder_PublicIpAddressesConstructor;

	interface _folder_RouteTables
	{
		name: any;

		routetabels(): RouteTable;
	}

	interface _folder_RouteTablesConstructor {
		new(value?:any): _folder_RouteTables;
		readonly prototype: _folder_RouteTables;
	}

	const _folder_RouteTables: _folder_RouteTablesConstructor;

	interface _folder_StorageAccounts
	{
		name: any;

		storageaccounts(): StorageAccount;
	}

	interface _folder_StorageAccountsConstructor {
		new(value?:any): _folder_StorageAccounts;
		readonly prototype: _folder_StorageAccounts;
	}

	const _folder_StorageAccounts: _folder_StorageAccountsConstructor;

	interface _folder_VirtualMachineImages
	{
		name: any;

		virtualmachineimagepublishers(): VirtualMachineImagePublisher;
	}

	interface _folder_VirtualMachineImagesConstructor {
		new(value?:any): _folder_VirtualMachineImages;
		readonly prototype: _folder_VirtualMachineImages;
	}

	const _folder_VirtualMachineImages: _folder_VirtualMachineImagesConstructor;

	interface _folder_VirtualMachines
	{
		name: any;

		virtualmachinesres(): VirtualMachine;
	}

	interface _folder_VirtualMachinesConstructor {
		new(value?:any): _folder_VirtualMachines;
		readonly prototype: _folder_VirtualMachines;
	}

	const _folder_VirtualMachines: _folder_VirtualMachinesConstructor;

	interface _folder_VirtualMachineSizes
	{
		name: any;

		virtualmachinesizes(): VirtualMachineSize;
	}

	interface _folder_VirtualMachineSizesConstructor {
		new(value?:any): _folder_VirtualMachineSizes;
		readonly prototype: _folder_VirtualMachineSizes;
	}

	const _folder_VirtualMachineSizes: _folder_VirtualMachineSizesConstructor;

	interface _folder_VirtualNetworkGateways
	{
		name: any;

		virtualnetworkgateways(): VirtualNetworkGateway;
	}

	interface _folder_VirtualNetworkGatewaysConstructor {
		new(value?:any): _folder_VirtualNetworkGateways;
		readonly prototype: _folder_VirtualNetworkGateways;
	}

	const _folder_VirtualNetworkGateways: _folder_VirtualNetworkGatewaysConstructor;

	interface _folder_VirtualNetworks
	{
		name: any;

		virtualnetworks(): VirtualNetwork;
	}

	interface _folder_VirtualNetworksConstructor {
		new(value?:any): _folder_VirtualNetworks;
		readonly prototype: _folder_VirtualNetworks;
	}

	const _folder_VirtualNetworks: _folder_VirtualNetworksConstructor;

	interface _folder_WebSites
	{
		name: any;

		websites(): WebSite;
	}

	interface _folder_WebSitesConstructor {
		new(value?:any): _folder_WebSites;
		readonly prototype: _folder_WebSites;
	}

	const _folder_WebSites: _folder_WebSitesConstructor;

	interface _ROOT
	{

		connections(): Connection;
	}

	interface _ROOTConstructor {
		new(value?:any): _ROOT;
		readonly prototype: _ROOT;
	}

	const _ROOT: _ROOTConstructor;

	interface AccountStatus extends AzureAccountStatus
	{
		name: any;

	}

	interface AccountStatusConstructor {
		new(value?:any): AccountStatus;
		readonly prototype: AccountStatus;
	}

	const AccountStatus: AccountStatusConstructor;

	interface AccountType extends AzureAccountType
	{
		name: any;

	}

	interface AccountTypeConstructor {
		new(value?:any): AccountType;
		readonly prototype: AccountType;
	}

	const AccountType: AccountTypeConstructor;

	interface ApplicationGateway extends AzureApplicationGateway
	{
		etag: any;
		id: any;
		location: any;
		name: any;
		operationalState: any;
		provisioningState: any;
		resourceGuid: any;
		type: any;

	}

	interface ApplicationGatewayConstructor {
		new(value?:any): ApplicationGateway;
		readonly prototype: ApplicationGateway;
	}

	const ApplicationGateway: ApplicationGatewayConstructor;

	interface AvailabilitySet extends AzureAvailabilitySet
	{
		displayName: any;
		id: any;
		internalIdString: any;
		location: any;
		name: any;
		platformFaultDomainCount: any;
		platformUpdateDomainCount: any;
		type: any;

	}

	interface AvailabilitySetConstructor {
		new(value?:any): AvailabilitySet;
		readonly prototype: AvailabilitySet;
	}

	const AvailabilitySet: AvailabilitySetConstructor;

	interface BackupItemStatus extends AzureBackupItemStatus
	{
		name: any;

	}

	interface BackupItemStatusConstructor {
		new(value?:any): BackupItemStatus;
		readonly prototype: BackupItemStatus;
	}

	const BackupItemStatus: BackupItemStatusConstructor;

	interface ComputeOperationStatus extends AzureComputeOperationStatus
	{
		name: any;

	}

	interface ComputeOperationStatusConstructor {
		new(value?:any): ComputeOperationStatus;
		readonly prototype: ComputeOperationStatus;
	}

	const ComputeOperationStatus: ComputeOperationStatusConstructor;

	interface Connection extends AzureConnection
	{
		clientId: any;
		displayName: any;
		loginUrl: any;
		managementUri: any;
		name: any;
		ownerId: any;
		proxyHost: any;
		proxyPort: any;
		subscriptionId: any;
		tenantId: any;

		locations(): Location;
		resourcegroups(): ResourceGroupExtended;
	}

	interface ConnectionConstructor {
		new(value?:any): Connection;
		readonly prototype: Connection;
	}

	const Connection: ConnectionConstructor;

	interface Database extends AzureDatabase
	{
		displayName: any;
		id: any;
		internalIdString: any;
		location: any;
		name: any;
		status: any;
		type: any;

	}

	interface DatabaseConstructor {
		new(value?:any): Database;
		readonly prototype: Database;
	}

	const Database: DatabaseConstructor;

	interface DatabaseServerType extends AzureDatabaseServerType
	{
		name: any;

	}

	interface DatabaseServerTypeConstructor {
		new(value?:any): DatabaseServerType;
		readonly prototype: DatabaseServerType;
	}

	const DatabaseServerType: DatabaseServerTypeConstructor;

	interface DeploymentExtended extends AzureDeploymentExtended
	{
		id: any;
		internalIdString: any;
		name: any;
		relatedObjects: any;

	}

	interface DeploymentExtendedConstructor {
		new(value?:any): DeploymentExtended;
		readonly prototype: DeploymentExtended;
	}

	const DeploymentExtended: DeploymentExtendedConstructor;

	interface DeploymentMode extends AzureDeploymentMode
	{
		name: any;

	}

	interface DeploymentModeConstructor {
		new(value?:any): DeploymentMode;
		readonly prototype: DeploymentMode;
	}

	const DeploymentMode: DeploymentModeConstructor;

	interface FrequencyUnit extends AzureFrequencyUnit
	{
		name: any;

	}

	interface FrequencyUnitConstructor {
		new(value?:any): FrequencyUnit;
		readonly prototype: FrequencyUnit;
	}

	const FrequencyUnit: FrequencyUnitConstructor;

	interface HostType extends AzureHostType
	{
		name: any;

	}

	interface HostTypeConstructor {
		new(value?:any): HostType;
		readonly prototype: HostType;
	}

	const HostType: HostTypeConstructor;

	interface KeyName extends AzureKeyName
	{
		name: any;

	}

	interface KeyNameConstructor {
		new(value?:any): KeyName;
		readonly prototype: KeyName;
	}

	const KeyName: KeyNameConstructor;

	interface LoadBalancer extends AzureLoadBalancer
	{
		etag: any;
		id: any;
		location: any;
		name: any;
		provisioningState: any;
		resourceGuid: any;
		type: any;

	}

	interface LoadBalancerConstructor {
		new(value?:any): LoadBalancer;
		readonly prototype: LoadBalancer;
	}

	const LoadBalancer: LoadBalancerConstructor;

	interface Location extends AzureLocation
	{
		displayName: any;
		name: any;

		_folder_rel_virtualmachineimagepublishers(): _folder_VirtualMachineImages;
		_folder_rel_virtualmachinesizes(): _folder_VirtualMachineSizes;
	}

	interface LocationConstructor {
		new(value?:any): Location;
		readonly prototype: Location;
	}

	const Location: LocationConstructor;

	interface ManagedPipelineMode extends AzureManagedPipelineMode
	{
		name: any;

	}

	interface ManagedPipelineModeConstructor {
		new(value?:any): ManagedPipelineMode;
		readonly prototype: ManagedPipelineMode;
	}

	const ManagedPipelineMode: ManagedPipelineModeConstructor;

	interface NetworkInterface extends AzureNetworkInterface
	{
		displayName: any;
		enableIPForwarding: any;
		etag: any;
		id: any;
		internalIdString: any;
		location: any;
		macAddress: any;
		name: any;
		primary: any;
		provisioningState: any;
		resourceGuid: any;
		type: any;

	}

	interface NetworkInterfaceConstructor {
		new(value?:any): NetworkInterface;
		readonly prototype: NetworkInterface;
	}

	const NetworkInterface: NetworkInterfaceConstructor;

	interface NetworkSecurityGroup extends AzureNetworkSecurityGroup
	{
		etag: any;
		id: any;
		internalIdString: any;
		location: any;
		name: any;
		provisioningState: any;
		resourceGuid: any;
		type: any;

		networksecuritygroups(): SecurityRule;
	}

	interface NetworkSecurityGroupConstructor {
		new(value?:any): NetworkSecurityGroup;
		readonly prototype: NetworkSecurityGroup;
	}

	const NetworkSecurityGroup: NetworkSecurityGroupConstructor;

	interface ProvisioningState extends AzureProvisioningState
	{
		name: any;

	}

	interface ProvisioningStateConstructor {
		new(value?:any): ProvisioningState;
		readonly prototype: ProvisioningState;
	}

	const ProvisioningState: ProvisioningStateConstructor;

	interface PublicIpAddress extends AzurePublicIpAddress
	{
		displayName: any;
		etag: any;
		id: any;
		idleTimeoutInMinutes: any;
		internalIdString: any;
		ipAddress: any;
		location: any;
		name: any;
		provisioningState: any;
		publicIpAllocationMethod: any;
		resourceGuid: any;
		type: any;

	}

	interface PublicIpAddressConstructor {
		new(value?:any): PublicIpAddress;
		readonly prototype: PublicIpAddress;
	}

	const PublicIpAddress: PublicIpAddressConstructor;

	interface Reason extends AzureReason
	{
		name: any;

	}

	interface ReasonConstructor {
		new(value?:any): Reason;
		readonly prototype: Reason;
	}

	const Reason: ReasonConstructor;

	interface RecordType extends AzureRecordType
	{
		name: any;

	}

	interface RecordTypeConstructor {
		new(value?:any): RecordType;
		readonly prototype: RecordType;
	}

	const RecordType: RecordTypeConstructor;

	interface RemoteDebuggingVersion extends AzureRemoteDebuggingVersion
	{
		name: any;

	}

	interface RemoteDebuggingVersionConstructor {
		new(value?:any): RemoteDebuggingVersion;
		readonly prototype: RemoteDebuggingVersion;
	}

	const RemoteDebuggingVersion: RemoteDebuggingVersionConstructor;

	interface ResourceGroupExtended extends AzureResourceGroupExtended
	{
		displayName: any;
		id: any;
		internalIdString: any;
		location: any;
		name: any;
		properties: any;
		provisioningState: any;

		_folder_rel_applicationgateways(): _folder_ApplicationGateways;
		_folder_rel_availabilitysets(): _folder_AvailabilitySets;
		_folder_rel_deployments(): _folder_Deployments;
		_folder_rel_dnszones(): _folder_DnsZones;
		_folder_rel_loadbalancers(): _folder_LoadBalancers;
		_folder_rel_networkinterfaces(): _folder_NetworkInterfaces;
		_folder_rel_networksecuritygroups(): _folder_NetworkSecurityGroups;
		_folder_rel_publicipaddresses(): _folder_PublicIpAddresses;
		_folder_rel_routetabels(): _folder_RouteTables;
		_folder_rel_servers(): _folder_DatabaseServers;
		_folder_rel_storageaccounts(): _folder_StorageAccounts;
		_folder_rel_virtualmachinesres(): _folder_VirtualMachines;
		_folder_rel_virtualnetworkgateways(): _folder_VirtualNetworkGateways;
		_folder_rel_virtualnetworks(): _folder_VirtualNetworks;
		_folder_rel_websites(): _folder_WebSites;
	}

	interface ResourceGroupExtendedConstructor {
		new(value?:any): ResourceGroupExtended;
		readonly prototype: ResourceGroupExtended;
	}

	const ResourceGroupExtended: ResourceGroupExtendedConstructor;

	interface Route extends AzureRoute
	{
		addressPrefix: any;
		displayName: any;
		etag: any;
		id: any;
		internalIdString: any;
		name: any;
		nextHopIpAddress: any;
		nextHopType: any;
		provisioningState: any;

	}

	interface RouteConstructor {
		new(value?:any): Route;
		readonly prototype: Route;
	}

	const Route: RouteConstructor;

	interface RouteTable extends AzureRouteTable
	{
		displayName: any;
		etag: any;
		id: any;
		internalIdString: any;
		location: any;
		name: any;
		provisioningState: any;
		type: any;

		routes(): Route;
	}

	interface RouteTableConstructor {
		new(value?:any): RouteTable;
		readonly prototype: RouteTable;
	}

	const RouteTable: RouteTableConstructor;

	interface SecurityRule extends AzureSecurityRule
	{
		access: any;
		description: any;
		destinationAddressPrefix: any;
		destinationPortRange: any;
		direction: any;
		etag: any;
		id: any;
		name: any;
		priority: any;
		protocol: any;
		provisioningState: any;
		sourceAddressPrefix: any;
		sourcePortRange: any;

	}

	interface SecurityRuleConstructor {
		new(value?:any): SecurityRule;
		readonly prototype: SecurityRule;
	}

	const SecurityRule: SecurityRuleConstructor;

	interface Server extends AzureServer
	{
		displayName: any;
		id: any;
		internalIdString: any;
		location: any;
		name: any;
		type: any;
		version: any;

		databases(): Database;
	}

	interface ServerConstructor {
		new(value?:any): Server;
		readonly prototype: Server;
	}

	const Server: ServerConstructor;

	interface SkuOptions extends AzureSkuOptions
	{
		name: any;

	}

	interface SkuOptionsConstructor {
		new(value?:any): SkuOptions;
		readonly prototype: SkuOptions;
	}

	const SkuOptions: SkuOptionsConstructor;

	interface StorageAccount extends AzureStorageAccount
	{
		accountType: any;
		creationTime: any;
		displayName: any;
		id: any;
		internalIdString: any;
		lastGeoFailoverTime: any;
		location: any;
		name: any;
		primaryLocation: any;
		provisioningState: any;
		secondaryLocation: any;
		statusOfPrimary: any;
		statusOfSecondary: any;
		type: any;

	}

	interface StorageAccountConstructor {
		new(value?:any): StorageAccount;
		readonly prototype: StorageAccount;
	}

	const StorageAccount: StorageAccountConstructor;

	interface Subnet extends AzureSubnet
	{
		addressPrefix: any;
		displayName: any;
		etag: any;
		id: any;
		internalIdString: any;
		name: any;
		provisioningState: any;

	}

	interface SubnetConstructor {
		new(value?:any): Subnet;
		readonly prototype: Subnet;
	}

	const Subnet: SubnetConstructor;

	interface UsageUnit extends AzureUsageUnit
	{
		name: any;

	}

	interface UsageUnitConstructor {
		new(value?:any): UsageUnit;
		readonly prototype: UsageUnit;
	}

	const UsageUnit: UsageUnitConstructor;

	interface VirtualMachine extends AzureVirtualMachine
	{
		displayName: any;
		id: any;
		imageOffer: any;
		imagePublisher: any;
		imageSku: any;
		imageVersion: any;
		internalIdString: any;
		location: any;
		name: any;
		operatingSystemType: any;
		osDiskUri: any;
		powerState: any;
		provisioningState: any;
		resourceGroupName: any;
		subscriptionId: any;
		type: any;
		virtualMachineMaxDiskCount: any;
		virtualMachineMemoryMb: any;
		virtualMachineNumberCores: any;
		virtualMachineResourceDiskSizeMb: any;
		virtualMachineSize: any;

	}

	interface VirtualMachineConstructor {
		new(value?:any): VirtualMachine;
		readonly prototype: VirtualMachine;
	}

	const VirtualMachine: VirtualMachineConstructor;

	interface VirtualMachineImage extends AzureVirtualMachineImage
	{
		displayName: any;
		id: any;
		internalIdString: any;
		location: any;
		name: any;
		offer: any;
		operatingSystem: any;
		product: any;
		publisher: any;
		sku: any;
		version: any;

	}

	interface VirtualMachineImageConstructor {
		new(value?:any): VirtualMachineImage;
		readonly prototype: VirtualMachineImage;
	}

	const VirtualMachineImage: VirtualMachineImageConstructor;

	interface VirtualMachineImageOffer extends AzureVirtualMachineImageOffer
	{
		id: any;
		location: any;
		name: any;

		virtualmachineimageskus(): VirtualMachineImageSku;
	}

	interface VirtualMachineImageOfferConstructor {
		new(value?:any): VirtualMachineImageOffer;
		readonly prototype: VirtualMachineImageOffer;
	}

	const VirtualMachineImageOffer: VirtualMachineImageOfferConstructor;

	interface VirtualMachineImagePublisher extends AzureVirtualMachineImagePublisher
	{
		id: any;
		location: any;
		name: any;

		virtualmachineimageoffers(): VirtualMachineImageOffer;
	}

	interface VirtualMachineImagePublisherConstructor {
		new(value?:any): VirtualMachineImagePublisher;
		readonly prototype: VirtualMachineImagePublisher;
	}

	const VirtualMachineImagePublisher: VirtualMachineImagePublisherConstructor;

	interface VirtualMachineImageSku extends AzureVirtualMachineImageSku
	{
		id: any;
		location: any;
		name: any;

		virtualmachineimages(): VirtualMachineImage;
	}

	interface VirtualMachineImageSkuConstructor {
		new(value?:any): VirtualMachineImageSku;
		readonly prototype: VirtualMachineImageSku;
	}

	const VirtualMachineImageSku: VirtualMachineImageSkuConstructor;

	interface VirtualMachineSize extends AzureVirtualMachineSize
	{
		maxDataDiskCount: any;
		memoryInMB: any;
		name: any;
		numberOfCores: any;
		resourceDiskSizeInMB: any;

	}

	interface VirtualMachineSizeConstructor {
		new(value?:any): VirtualMachineSize;
		readonly prototype: VirtualMachineSize;
	}

	const VirtualMachineSize: VirtualMachineSizeConstructor;

	interface VirtualNetwork extends AzureVirtualNetwork
	{
		displayName: any;
		etag: any;
		id: any;
		internalIdString: any;
		location: any;
		name: any;
		provisioningState: any;
		resourceGuid: any;
		type: any;

		subnets(): Subnet;
	}

	interface VirtualNetworkConstructor {
		new(value?:any): VirtualNetwork;
		readonly prototype: VirtualNetwork;
	}

	const VirtualNetwork: VirtualNetworkConstructor;

	interface VirtualNetworkGateway extends AzureVirtualNetworkGateway
	{
		enableBgp: any;
		etag: any;
		gatewayType: any;
		id: any;
		location: any;
		name: any;
		provisioningState: any;
		resourceGuid: any;
		type: any;
		vpnType: any;

		networksecuritygroups(): VirtualNetworkGatewayConnection;
	}

	interface VirtualNetworkGatewayConstructor {
		new(value?:any): VirtualNetworkGateway;
		readonly prototype: VirtualNetworkGateway;
	}

	const VirtualNetworkGateway: VirtualNetworkGatewayConstructor;

	interface VirtualNetworkGatewayConnection extends AzureVirtualNetworkGatewayConnection
	{
		connectionType: any;
		etag: any;
		id: any;
		location: any;
		name: any;
		provisioningState: any;
		resourceGuid: any;
		routingWeight: any;
		sharedKey: any;
		type: any;

	}

	interface VirtualNetworkGatewayConnectionConstructor {
		new(value?:any): VirtualNetworkGatewayConnection;
		readonly prototype: VirtualNetworkGatewayConnection;
	}

	const VirtualNetworkGatewayConnection: VirtualNetworkGatewayConnectionConstructor;

	interface WebSite extends AzureWebSite
	{
		displayName: any;
		id: any;
		internalIdString: any;
		location: any;
		name: any;
		type: any;

	}

	interface WebSiteConstructor {
		new(value?:any): WebSite;
		readonly prototype: WebSite;
	}

	const WebSite: WebSiteConstructor;

	interface WebSiteRuntimeAvailabilityState extends AzureWebSiteRuntimeAvailabilityState
	{
		name: any;

	}

	interface WebSiteRuntimeAvailabilityStateConstructor {
		new(value?:any): WebSiteRuntimeAvailabilityState;
		readonly prototype: WebSiteRuntimeAvailabilityState;
	}

	const WebSiteRuntimeAvailabilityState: WebSiteRuntimeAvailabilityStateConstructor;

	interface WebSiteSslState extends AzureWebSiteSslState
	{
		name: any;

	}

	interface WebSiteSslStateConstructor {
		new(value?:any): WebSiteSslState;
		readonly prototype: WebSiteSslState;
	}

	const WebSiteSslState: WebSiteSslStateConstructor;

	interface WebSiteState extends AzureWebSiteState
	{
		name: any;

	}

	interface WebSiteStateConstructor {
		new(value?:any): WebSiteState;
		readonly prototype: WebSiteState;
	}

	const WebSiteState: WebSiteStateConstructor;

	interface WebSiteUsageState extends AzureWebSiteUsageState
	{
		name: any;

	}

	interface WebSiteUsageStateConstructor {
		new(value?:any): WebSiteUsageState;
		readonly prototype: WebSiteUsageState;
	}

	const WebSiteUsageState: WebSiteUsageStateConstructor;

	interface WebSpaceAvailabilityState extends AzureWebSpaceAvailabilityState
	{
		name: any;

	}

	interface WebSpaceAvailabilityStateConstructor {
		new(value?:any): WebSpaceAvailabilityState;
		readonly prototype: WebSpaceAvailabilityState;
	}

	const WebSpaceAvailabilityState: WebSpaceAvailabilityStateConstructor;

	interface WorkerSizeOptions extends AzureWorkerSizeOptions
	{
		name: any;

	}

	interface WorkerSizeOptionsConstructor {
		new(value?:any): WorkerSizeOptions;
		readonly prototype: WorkerSizeOptions;
	}

	const WorkerSizeOptions: WorkerSizeOptionsConstructor;

	interface Zone extends AzureZone
	{
		id: any;
		location: any;
		name: any;
		type: any;

	}

	interface ZoneConstructor {
		new(value?:any): Zone;
		readonly prototype: Zone;
	}

	const Zone: ZoneConstructor;

    }    
