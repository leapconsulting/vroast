/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface Admin
	{

	}

	declare const Admin: Admin;

	interface byte[]
	{

	}

	declare const byte[]: byte[];

	interface Double
	{

	}

	declare const Double: Double;

	interface Locale
	{

	}

	declare const Locale: Locale;

	interface long
	{

	}

	declare const long: long;

	interface short
	{

	}

	declare const short: short;

	interface TimeZone
	{

	}

	declare const TimeZone: TimeZone;

	declare class VclAbsoluteTime
	{
		time: VclXMLGregorianCalendar;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAbstractObject
	{

		constructor();
		getValue(type?: Object): Object[];
		setValue(value?: Object): void;
		toXml(): String;
	}

	interface VclAbstractObjectSet
	{

		add(object?: Object): void;
		clear(): void;
		find(type?: Object): Object[];
		remove(object?: Object): void;
		size(): int;
	}

	declare const VclAbstractObjectSet: VclAbstractObjectSet;

	interface VclAbstractRecordResultSet
	{

		getFirstPage(): VclRecordResultSet;
		getLastPage(): VclRecordResultSet;
		getNextPage(): VclRecordResultSet;
		getPage(): Integer;
		getPageSize(): Integer;
		getPreviousPage(): VclRecordResultSet;
		getRecords(type?: Object): Object[];
		getReferenceResult(): VclReferenceResultSet;
		getTotal(): long;
		hasFirstPage(): boolean;
		hasLastPage(): boolean;
		hasNextPage(): boolean;
		hasPreviousPage(): boolean;
	}

	declare const VclAbstractRecordResultSet: VclAbstractRecordResultSet;

	declare class VclAbstractValueObject
	{

		constructor();
		getValue(type?: Object): Object[];
		setValue(value?: Object): void;
		toXml(): String;
	}

	interface VclAccessLevelType
	{
		CHANGE: VclAccessLevelType;
		FULLCONTROL: VclAccessLevelType;
		READONLY: VclAccessLevelType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclAccessLevelType;
	}

	declare const VclAccessLevelType: VclAccessLevelType;

	declare class VclAccessSetting
	{
		accessLevel: String;
		otherAttributes: VclMap;
		subject: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAccessSettings
	{
		accessSetting: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAclAccess
	{
		access: String;
		entity: VclReference;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAclRuleParams
	{
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		organizationAccess: VclAclAccess;
		otherAttributes: VclMap;
		principalAccess: VclAclAccess;
		serviceResourceAccess: VclAclAccess;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAclRules
	{
		aclRule: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAddressTrinityParams
	{
		exclude: boolean;
		groupingObjectId: VclList;
		ipAddress: VclList;
		obtainEquivalenceKey: String;
		vnicGroupId: VclList;

		constructor();
	}

	interface VclAdminAclRule
	{
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		organizationAccess: VclAclAccess;
		readonly otherAttributes: VclMap;
		parent: VclAdminResourceClassAction;
		principalAccess: VclAclAccess;
		serviceResourceAccess: VclAclAccess;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		erase(): void;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
	}

	declare const VclAdminAclRule: VclAdminAclRule;

	interface VclAdminApiDefinition
	{
		apiVendor: String;
		description: String;
		entryPoint: String;
		files: VclAdminFileDescriptors;
		href: String;
		id: String;
		name: String;
		namespace: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminService;
		supportedApiVersions: VclExtensionVersions;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		createAdminFileDescriptor(params?: VclFileDescriptorParams): VclAdminFileDescriptor;
		erase(): void;
		getAdminFileDescriptors(): VclAdminFileDescriptor[];
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
	}

	declare const VclAdminApiDefinition: VclAdminApiDefinition;

	declare class VclAdminApiDefinitionParams
	{
		apiVendor: String;
		description: String;
		entryPoint: String;
		files: VclAdminFileDescriptors;
		href: String;
		id: String;
		name: String;
		namespace: String;
		operationKey: String;
		otherAttributes: VclMap;
		supportedApiVersions: VclExtensionVersions;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAdminApiDefinitions
	{
		apiDefinition: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclAdminApiFilter
	{
		href: String;
		id: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminService;
		responseContentType: String;
		tasks: VclTasksInProgress;
		type: String;
		urlPattern: String;
		readonly vCloudExtension: VclObjectList;

		erase(): void;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
	}

	declare const VclAdminApiFilter: VclAdminApiFilter;

	interface VclAdminCatalog
	{
		catalogStorageProfiles: VclCatalogStorageProfiles;
		dateCreated: VclXMLGregorianCalendar;
		description: String;
		externalCatalogSubscriptionParams: VclExternalCatalogSubscriptionParams;
		href: String;
		id: String;
		isPublished: boolean;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		owner: VclOwner;
		parent: VclAdminOrganization;
		publishExternalCatalogParams: VclPublishExternalCatalogParams;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;
		versionNumber: long;

		addCatalogItem(params?: VclCatalogItemParams): VclCatalogItem;
		changeOwner(user?: VclReference): void;
		erase(): void;
		getCatalogItems(): VclCatalogItem[];
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		publishCatalog(publish?: boolean): void;
		publishToExternalOrganizations(publishExternalCatalogParams?: VclPublishExternalCatalogParams): void;
		subscribeToExternalCatalog(externalCatalogSubscription?: VclExternalCatalogSubscriptionParams): void;
		toUserObject(): VclCatalog;
		toXml(): String;
		update(): VclAdminCatalog;
		updateInternalState(): void;
	}

	declare const VclAdminCatalog: VclAdminCatalog;

	declare class VclAdminCatalogParams
	{
		catalogItems: VclCatalogItems;
		catalogStorageProfiles: VclCatalogStorageProfiles;
		dateCreated: VclXMLGregorianCalendar;
		description: String;
		externalCatalogSubscriptionParams: VclExternalCatalogSubscriptionParams;
		href: String;
		id: String;
		isPublished: boolean;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		owner: VclOwner;
		publishExternalCatalogParams: VclPublishExternalCatalogParams;
		type: String;
		vCloudExtension: VclObjectList;
		versionNumber: long;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclAdminExtension
	{
		href: String;

		checkAuthorization(params?: VclAuthorizationCheckParams): boolean;
		clearUnusedLocalizationBundle(): void;
		clearUnusedRights(): void;
		createService(params?: VclAdminServiceParams): VclAdminService;
		createVMWExternalNetwork(externalNetworkParams?: VclVMWExternalNetworkParams): VclVMWExternalNetwork;
		createVMWNetworkPool(networkPoolParams?: Object): VclVMWNetworkPool;
		createVMWProviderVdc(providerVdcParams?: VclVMWProviderVdcParams): VclVMWProviderVdc;
		createVMWVdcTemplate(vdcTemplateParams?: Object): VclVMWVdcTemplate;
		enableNotifications(enable?: boolean): void;
		getAdminServiceByName(serviceName?: String): VclAdminService;
		getAmqpSettings(): VclAmqpSettings;
		getBlockingTasks(): VclBlockingTask[];
		getBlockingTasksSettings(): VclBlockingTaskSettings;
		getBrandingSettings(): VclBrandingSettings;
		getContainedObjects(): Object[];
		getEmailSettings(): VclEmailSettings;
		getEmailSmtpSettings(): VclSmtpSettings;
		getEnabledBlockingTaskOperations(): VclBlockingTaskOperationType[];
		getExtensionQueryService(): VclExtensionQueryService;
		getGeneralSettings(): VclGeneralSettings;
		getKerberosSettings(): VclKerberosSettings;
		getLdapGroupSettings(): VclLdapGroupAttributes;
		getLdapSettings(): VclLdapSettings;
		getLdapUserSettings(): VclLdapUserAttributes;
		getLicenseMetricsInfo(): VclLicenseMetricsInfo;
		getLicenseSettings(): VclLicense;
		getLicensingReports(): VclLicensingReport[];
		getLookupService(): VclLookupServiceSettings;
		getPasswordPolicySettings(): VclSystemPasswordPolicySettings;
		getServices(): VclAdminService[];
		getStrandedItems(): VclStrandedItem[];
		getSystemSettings(): VclSystemSettings;
		getVimServers(): VclVimServer[];
		getVMWDatastores(): VclVMWDatastore[];
		getVMWExternalNetworks(): VclVMWExternalNetwork[];
		getVMWHosts(): VclVMWHost[];
		getVMWNetworkPools(): VclVMWNetworkPool[];
		getVMWProviderVdcs(): VclVMWProviderVdc[];
		getVMWVdcTemplates(): VclVMWVdcTemplate[];
		isNotificationsEnabled(): boolean;
		isServiceAlreadyRegistered(serviceName?: String): boolean;
		registerVimServer(vimServer?: VclVimServerParams, shieldManager?: VclShieldManagerParams): VclVimServer;
		resetAmqpCertificate(): void;
		resetAmqpTruststore(): void;
		resetLdapCertificate(): void;
		resetLdapKeyStore(): void;
		resetLdapSspiKeytab(): void;
		resetVcTrustsore(): void;
		testAmqpConnection(): boolean;
		toAdminObject(): VclHostAdmin;
		updateAmqpCertificate(params?: VclCertificateUpdateParams): VclCertificateUploadSocket;
		updateAmqpSettings(settings?: VclAmqpSettings): void;
		updateAmqpTruststore(params?: VclTrustStoreUpdateParams): VclTrustStoreUploadSocket;
		updateBlockingTaskSettings(settings?: VclBlockingTaskSettings): void;
		updateBrandingSettings(settings?: VclBrandingSettings): void;
		updateEmailSettings(settings?: VclEmailSettings): void;
		updateGeneralSettings(settings?: VclGeneralSettings): void;
		updateInternalState(): void;
		updateKerberosSettings(settings?: VclKerberosSettings): void;
		updateLdapCertificate(params?: VclCertificateUpdateParams): VclCertificateUploadSocket;
		updateLdapKeyStore(params?: VclKeystoreUpdateParams): VclKeystoreUploadSocket;
		updateLdapSettings(settings?: VclLdapSettings): void;
		updateLdapSspiKeytab(params?: VclSspiKeytabUpdateParams): VclSspiKeytabUploadSocket;
		updateLicenseSettings(license?: VclLicense): void;
		updateLookupService(params?: VclLookupServiceParams): VclTask;
		updatePasswordPolicySettings(settings?: VclSystemPasswordPolicySettings): void;
		updateSystemSettings(settings?: VclSystemSettings): void;
		updateVcTrustsore(params?: VclVcTrustStoreUpdateParams): VclVcTrustStoreUploadSocket;
		uploadLocalizationBundle(localFileLocation?: String, serviceNamespace?: String): void;
	}

	declare const VclAdminExtension: VclAdminExtension;

	interface VclAdminFileDescriptor
	{
		description: String;
		file: VclReference;
		href: String;
		id: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminApiDefinition;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		erase(): void;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
	}

	declare const VclAdminFileDescriptor: VclAdminFileDescriptor;

	declare class VclAdminFileDescriptorParams
	{
		description: String;
		file: VclReference;
		href: String;
		id: String;
		operationKey: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAdminFileDescriptors
	{
		fileDescriptor: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclAdminOrganization
	{
		catalogs: VclCatalogsList;
		description: String;
		fullName: String;
		href: String;
		id: String;
		isEnabled: boolean;
		name: String;
		networks: VclNetworks;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclHost;
		settings: VclOrgSettings;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;
		vdcs: VclVdcs;

		addAdminCatalog(params?: VclAdminCatalogParams): VclAdminCatalog;
		addAdminVdc(params?: VclCreateVdcParams): VclAdminVdc;
		addAdminVdc15(params?: VclAdminVdcParams): VclAdminVdc;
		addGroup(params?: VclGroupParams): VclGroup;
		addOrgAssociation(orgAssociation?: VclOrgAssociation): VclTask;
		addUser(params?: VclUserParams): VclUser;
		createEvent(event?: VclEvent): void;
		deleteOrgAssociationByName(orgAssociationName?: String): void;
		disable(): void;
		enable(): void;
		erase(): void;
		getAdminCatalogs(): VclAdminCatalog[];
		getAdminVdcs(): VclAdminVdc[];
		getContainedObjects(): Object[];
		getGroups(): VclGroup[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getOrgAssociationByName(orgAssociationName?: String): VclOrgAssociation;
		getOrgAssociations(): VclOrgAssociations;
		getReference(): VclReference;
		getUserByName(name?: String): VclUser;
		getUsers(): VclUser[];
		regenerateFederationCertificate(): void;
		resetLdapCertificate(): void;
		resetLdapKeyStore(): void;
		resetLdapSspiKeytab(): void;
		toUserObject(): VclOrganization;
		toXml(): String;
		update(): VclAdminOrganization;
		updateInternalState(): void;
		updateLdapCertificate(params?: VclCertificateUpdateParams): VclCertificateUploadSocket;
		updateLdapKeyStore(params?: VclKeystoreUpdateParams): VclKeystoreUploadSocket;
		updateLdapSspiKeytab(params?: VclSspiKeytabUpdateParams): VclSspiKeytabUploadSocket;
		updateOrgAssociations(orgAssociations?: VclOrgAssociations): VclTask;
		updateSettings(settings?: VclOrgSettings): void;
	}

	declare const VclAdminOrganization: VclAdminOrganization;

	declare class VclAdminOrgParams
	{
		catalogs: VclCatalogsList;
		description: String;
		fullName: String;
		groups: VclGroupsList;
		href: String;
		id: String;
		isEnabled: boolean;
		name: String;
		networks: VclNetworks;
		operationKey: String;
		otherAttributes: VclMap;
		settings: VclOrgSettings;
		type: String;
		users: VclUsersList;
		vCloudExtension: VclObjectList;
		vdcs: VclVdcs;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclAdminOrgVdcNetwork
	{
		configuration: VclNetworkConfiguration;
		description: String;
		edgeGateway: VclReference;
		href: String;
		id: String;
		isShared: boolean;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminVdc;
		serviceConfig: VclGatewayFeatures;
		status: Integer;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		erase(): VclTask;
		getAllocatedAddresses(): VclAllocatedIpAddress[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		reset(): VclTask;
		toUserObject(): VclOrgVdcNetwork;
		toXml(): String;
		update(): VclTask;
		updateInternalState(): void;
	}

	declare const VclAdminOrgVdcNetwork: VclAdminOrgVdcNetwork;

	interface VclAdminQueryService
	{

	}

	declare const VclAdminQueryService: VclAdminQueryService;

	interface VclAdminResourceClass
	{
		description: String;
		href: String;
		id: String;
		mimeType: String;
		name: String;
		nid: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminService;
		resourceClassActions: VclResourceClassActions;
		serviceResources: VclServiceResources;
		tasks: VclTasksInProgress;
		type: String;
		urlTemplate: String;
		urnPattern: String;
		readonly vCloudExtension: VclObjectList;

		erase(): void;
		getAdminResourceClassActions(): VclAdminResourceClassAction[];
		getAdminServiceResources(): VclAdminServiceResource[];
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		registerAdminResourceClassAction(params?: VclResourceClassActionParams): VclAdminResourceClassAction;
		registerAdminServiceResource(params?: VclServiceResourceParams): VclAdminServiceResource;
		registerResourceClassAction(actionName?: String, actionHttpMethod?: String, actionURLPattern?: String, actionOperationKey?: String): VclAdminResourceClassAction;
		toXml(): String;
	}

	declare const VclAdminResourceClass: VclAdminResourceClass;

	interface VclAdminResourceClassAction
	{
		aclRules: VclAclRules;
		description: String;
		href: String;
		httpMethod: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminResourceClass;
		tasks: VclTasksInProgress;
		type: String;
		urlPattern: String;
		readonly vCloudExtension: VclObjectList;

		erase(): void;
		getAdminAclRules(): VclAdminAclRule[];
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		registerAdminAclRule(params?: VclAclRuleParams): VclAdminAclRule;
		toXml(): String;
	}

	declare const VclAdminResourceClassAction: VclAdminResourceClassAction;

	interface VclAdminService
	{
		apiDefinitions: VclAdminApiDefinitions;
		apiFilters: VclApiFilters;
		authorizationEnabled: boolean;
		description: String;
		enabled: boolean;
		exchange: String;
		href: String;
		id: String;
		name: String;
		namespace: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminExtension;
		priority: Integer;
		resourceClasses: VclResourceClasses;
		routingKey: String;
		serviceLinks: VclAdminServiceLinks;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;
		vendor: String;

		checkAuthorization(params?: VclAuthorizationCheckParams): boolean;
		createAdminApiDefinition(params?: VclAdminApiDefinitionParams): VclAdminApiDefinition;
		createAdminApiFilter(params?: VclApiFilterParams): VclAdminApiFilter;
		createAdminLink(params?: VclAdminServiceLinkParams): VclAdminServiceLink;
		createRight(params?: VclRightParams): VclRight;
		createServiceLink(linkHref?: String, relation?: String, resourceType?: String, mimeType?: String, resourceId?: String): VclAdminServiceLink;
		disable(): VclAdminService;
		erase(): void;
		getAdminApiDefinition(): VclAdminApiDefinition[];
		getAdminApiFilters(): VclAdminApiFilter[];
		getAdminLinks(): VclAdminServiceLink[];
		getAdminResourceClasses(): VclAdminResourceClass[];
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		getRights(): VclRight[];
		registerAdminResourceClass(params?: VclResourceClassParams): VclAdminResourceClass;
		registerResourceClass(name?: String, type?: String, nid?: String, urlTemplate?: String, urnPattern?: String, mimeType?: String): VclAdminResourceClass;
		toUserObject(): VclService;
		toXml(): String;
		update(serviceParams?: VclServiceParams): VclAdminService;
	}

	declare const VclAdminService: VclAdminService;

	interface VclAdminServiceLink
	{
		href: String;
		id: String;
		linkHref: String;
		mimeType: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminService;
		rel: String;
		resourceId: String;
		resourceType: String;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		erase(): void;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
	}

	declare const VclAdminServiceLink: VclAdminServiceLink;

	declare class VclAdminServiceLinkParams
	{
		href: String;
		id: String;
		linkHref: String;
		mimeType: String;
		operationKey: String;
		otherAttributes: VclMap;
		rel: String;
		resourceId: String;
		resourceType: String;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAdminServiceLinks
	{
		otherAttributes: VclMap;
		serviceLink: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAdminServiceParams
	{
		apiDefinitions: VclAdminApiDefinitions;
		apiFilters: VclApiFilters;
		authorizationEnabled: boolean;
		description: String;
		enabled: boolean;
		exchange: String;
		href: String;
		id: String;
		name: String;
		namespace: String;
		operationKey: String;
		otherAttributes: VclMap;
		priority: Integer;
		resourceClasses: VclResourceClasses;
		routingKey: String;
		serviceLinks: VclAdminServiceLinks;
		type: String;
		vCloudExtension: VclObjectList;
		vendor: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclAdminServiceResource
	{
		description: String;
		externalObjectId: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		org: VclReference;
		readonly otherAttributes: VclMap;
		parent: VclAdminResourceClass;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		erase(): void;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
	}

	declare const VclAdminServiceResource: VclAdminServiceResource;

	interface VclAdminVdc
	{
		allocationModel: String;
		availableNetworks: VclAvailableNetworks;
		capabilities: VclCapabilities;
		computeCapacity: VclComputeCapacity;
		description: String;
		href: String;
		id: String;
		isEnabled: boolean;
		isThinProvision: boolean;
		name: String;
		networkPoolReference: VclReference;
		networkQuota: Integer;
		nicQuota: Integer;
		operationKey: String;
		readonly otherAttributes: VclMap;
		overCommitAllowed: boolean;
		parent: VclAdminOrganization;
		providerVdcReference: VclReference;
		resourceEntities: VclResourceEntities;
		resourceGuaranteedCpu: Double;
		resourceGuaranteedMemory: Double;
		status: Integer;
		storageCapacity: VclCapacityWithUsage;
		tasks: VclTasksInProgress;
		type: String;
		usedNetworkCount: Integer;
		usesFastProvisioning: boolean;
		readonly vCloudExtension: VclObjectList;
		vCpuInMhz: long;
		vdcStorageProfiles: VclVdcStorageProfiles;
		vendorServices: VclVendorServices;
		vmQuota: Integer;

		createGateway(params?: VclGatewayParams): VclGateway;
		createOrgVdcNetwork(params?: VclOrgVdcNetworkParams): VclAdminOrgVdcNetwork;
		disable(): void;
		disableFastProvisioning(): VclTask;
		enable(): void;
		enableFastProvisioning(): VclTask;
		erase(): VclTask;
		getContainedObjects(): Object[];
		getDisks(): VclDisk[];
		getGateways(): VclGateway[];
		getHost(): VclHost;
		getMedias(): VclMedia[];
		getMetadata(): VclMetadata;
		getNetworkPool(): VclVMWNetworkPool;
		getOrgVdcNetworks(): VclAdminOrgVdcNetwork[];
		getReference(): VclReference;
		getResourcePoolVimRef(): VclVimObjectRef;
		getResourcePoolVimRefs(): VclVimObjectRef[];
		getStorageProfiles(): VclAdminVdcStorageProfile[];
		getVApps(): VclVApp[];
		getVAppTemplates(): VclVAppTemplate[];
		toUserObject(): VclVdc;
		toXml(): String;
		update(): VclTask;
		updateInternalState(): void;
		updateStorageProfiles(classesToAdd?: VclVdcStorageProfileParams[], classesToRemove?: VclReference[]): VclTask;
	}

	declare const VclAdminVdc: VclAdminVdc;

	declare class VclAdminVdcParams
	{
		allocationModel: String;
		availableNetworks: VclAvailableNetworks;
		capabilities: VclCapabilities;
		computeCapacity: VclComputeCapacity;
		description: String;
		href: String;
		id: String;
		isEnabled: boolean;
		isThinProvision: boolean;
		name: String;
		networkPoolReference: VclReference;
		networkQuota: Integer;
		nicQuota: Integer;
		operationKey: String;
		otherAttributes: VclMap;
		overCommitAllowed: boolean;
		providerVdcReference: VclReference;
		resourceEntities: VclResourceEntities;
		resourceGuaranteedCpu: Double;
		resourceGuaranteedMemory: Double;
		status: Integer;
		storageCapacity: VclCapacityWithUsage;
		type: String;
		usedNetworkCount: Integer;
		usesFastProvisioning: boolean;
		vCloudExtension: VclObjectList;
		vCpuInMhz: long;
		vdcStorageProfiles: VclVdcStorageProfiles;
		vendorServices: VclVendorServices;
		vmQuota: Integer;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclAdminVdcStorageProfile
	{
		default: boolean;
		description: String;
		enabled: boolean;
		href: String;
		id: String;
		limit: long;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminVdc;
		providerVdcStorageProfile: VclReference;
		tasks: VclTasksInProgress;
		type: String;
		units: String;
		readonly vCloudExtension: VclObjectList;

		getContainedObjects(): Object[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		toUserObject(): VclVdcStorageProfile;
		toXml(): String;
		update(): VclAdminVdcStorageProfile;
		updateInternalState(): void;
	}

	declare const VclAdminVdcStorageProfile: VclAdminVdcStorageProfile;

	declare class VclAdminVdcStorageProfileParams
	{
		default: boolean;
		description: String;
		enabled: boolean;
		href: String;
		id: String;
		limit: long;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		providerVdcStorageProfile: VclReference;
		type: String;
		units: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAllocatedIpAddress
	{
		allocationType: String;
		href: String;
		ipAddress: String;
		isDeployed: boolean;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclAllocatedIpAddressAllocationType
	{
		NATROUTED: VclAllocatedIpAddressAllocationType;
		readonly value: String;
		values: String[];
		VMALLOCATED: VclAllocatedIpAddressAllocationType;
		VSMALLOCATED: VclAllocatedIpAddressAllocationType;

		getObject(value?: String): VclAllocatedIpAddressAllocationType;
	}

	declare const VclAllocatedIpAddressAllocationType: VclAllocatedIpAddressAllocationType;

	declare class VclAllocatedIpAddresses
	{
		href: String;
		ipAddress: VclObjectList;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclAllocationModelType
	{
		ALLOCATIONPOOL: VclAllocationModelType;
		ALLOCATIONVAPP: VclAllocationModelType;
		RESERVATIONPOOL: VclAllocationModelType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclAllocationModelType;
	}

	declare const VclAllocationModelType: VclAllocationModelType;

	declare class VclAmqpSettings
	{
		amqpExchange: String;
		amqpHost: String;
		amqpPassword: String;
		amqpPort: int;
		amqpPrefix: String;
		amqpSslAcceptAll: boolean;
		amqpUsername: String;
		amqpUseSSL: boolean;
		amqpVHost: String;
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAmqpSettingsTest
	{
		error: VclError;
		href: String;
		otherAttributes: VclMap;
		type: String;
		valid: boolean;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAnnotationSection
	{
		annotation: VclMsg;
		info: VclMsg;
		otherAttributes: VclMap;
		required: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclApiDefinition
	{
		apiVendor: String;
		description: String;
		entryPoint: String;
		href: String;
		id: String;
		name: String;
		namespace: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclService;
		supportedApiVersions: VclVersions;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		getContainedObjects(): Object[];
		getFileDescriptorRecords(): VclRecordResultSet;
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
	}

	declare const VclApiDefinition: VclApiDefinition;

	declare class VclApiFilterParams
	{
		href: String;
		id: String;
		operationKey: String;
		otherAttributes: VclMap;
		responseContentType: String;
		type: String;
		urlPattern: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclApiFilters
	{
		apiFilter: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclApplicationTrinityParams
	{
		applicationId: VclList;
		obtainEquivalenceKey: String;
		service: VclObjectList;

		constructor();
	}

	interface VclAuditEvent
	{
		description: String;
		details: String;
		eventType: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		org: VclReference;
		readonly otherAttributes: VclMap;
		owner: VclReference;
		serviceNamespace: String;
		success: boolean;
		timeStamp: VclXMLGregorianCalendar;
		type: String;
		user: VclReference;
		readonly vCloudExtension: VclObjectList;

		getContainedObjects(): Object[];
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		toXml(): String;
		updateInternalState(): void;
	}

	declare const VclAuditEvent: VclAuditEvent;

	declare class VclAuthorizationCheckParams
	{
		httpMethod: String;
		otherAttributes: VclMap;
		uRL: String;
		user: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAuthorizationCheckResponse
	{
		isAuthorized: boolean;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAutomaticNetworkPoolReference
	{

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAutomaticRecoveryAction
	{
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAutomaticShutdownAction
	{
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAutomaticStartupAction
	{
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclAvailableNetworks
	{
		network: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclBigDecimal
	{

	}

	declare const VclBigDecimal: VclBigDecimal;

	declare class VclBigInteger
	{

		constructor(val?: String);
	}

	interface VclBlockingTask
	{
		createdTime: VclXMLGregorianCalendar;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		organization: VclReference;
		readonly otherAttributes: VclMap;
		status: String;
		taskOwner: VclReference;
		timeoutAction: String;
		timeoutDate: VclXMLGregorianCalendar;
		type: String;
		user: VclReference;
		readonly vCloudExtension: VclObjectList;

		abort(message?: String): void;
		fail(message?: String): void;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getTask(): VclReference;
		resume(message?: String): void;
		toXml(): String;
		updateProgress(message?: String, timeout?: int): void;
	}

	declare const VclBlockingTask: VclBlockingTask;

	declare class VclBlockingTaskOperationParams
	{
		href: String;
		message: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclBlockingTaskOperationType
	{
		CATALOG_CACHE_PUBLISHED_ITEM: VclBlockingTaskOperationType;
		CATALOG_CACHE_PUBLISHED_ITEMS: VclBlockingTaskOperationType;
		CATALOG_DELETE: VclBlockingTaskOperationType;
		CATALOG_DELETE_BACKING: VclBlockingTaskOperationType;
		CATALOG_ITEM_DELETE: VclBlockingTaskOperationType;
		CATALOG_ITEM_ENABLE_DOWNLOAD: VclBlockingTaskOperationType;
		CATALOG_ITEM_SYNC: VclBlockingTaskOperationType;
		CATALOG_SYNC: VclBlockingTaskOperationType;
		CATALOG_SYNC_ALL: VclBlockingTaskOperationType;
		IMPORT_INTO_EXISTING_VAPP: VclBlockingTaskOperationType;
		IMPORT_MEDIA: VclBlockingTaskOperationType;
		IMPORT_SINGLETON_TEMPLATE: VclBlockingTaskOperationType;
		IMPORT_SINGLETON_VAPP: VclBlockingTaskOperationType;
		IMPORT_VC_VMS_INTO_EXISTING_VAPP: VclBlockingTaskOperationType;
		LEGACY_VDC_UPDATE_MEDIA: VclBlockingTaskOperationType;
		LEGACY_VDC_UPDATE_TEMPLATE: VclBlockingTaskOperationType;
		NETWORK_CREATE_NETWORK_POOL: VclBlockingTaskOperationType;
		NETWORK_CREATE_PROVIDER_NETWORK: VclBlockingTaskOperationType;
		NETWORK_DELETE: VclBlockingTaskOperationType;
		NETWORK_DELETE_NETWORK_POOL: VclBlockingTaskOperationType;
		NETWORK_ENABLE_CROSSHOST_SERVICE: VclBlockingTaskOperationType;
		NETWORK_MERGE_NETWORK_POOLS: VclBlockingTaskOperationType;
		NETWORK_REPAIR_NETWORK_POOL: VclBlockingTaskOperationType;
		NETWORK_UPDATE_NETWORK: VclBlockingTaskOperationType;
		NETWORK_UPDATE_NETWORK_POOL: VclBlockingTaskOperationType;
		NETWORK_UPDATE_VLAN_POOL: VclBlockingTaskOperationType;
		RCL_CREATE_PROVIDER_VDC: VclBlockingTaskOperationType;
		RCL_DELETE_PROVIDER_VDC: VclBlockingTaskOperationType;
		RCL_ENABLE_VXLAN_FOR_PROVIDER_VDC: VclBlockingTaskOperationType;
		RCL_MERGE_PROVIDER_VDC: VclBlockingTaskOperationType;
		TEMPLATE_UPDATE_VM: VclBlockingTaskOperationType;
		readonly value: String;
		values: String[];
		VAPP_ATTACH_DISK: VclBlockingTaskOperationType;
		VAPP_CHECK_VM_COMPLIANCE: VclBlockingTaskOperationType;
		VAPP_CREATE_SNAPSHOT: VclBlockingTaskOperationType;
		VAPP_DEPLOY: VclBlockingTaskOperationType;
		VAPP_DETACH_DISK: VclBlockingTaskOperationType;
		VAPP_MIGRATE_VMS: VclBlockingTaskOperationType;
		VAPP_POWER_OFF: VclBlockingTaskOperationType;
		VAPP_REBOOT_GUEST: VclBlockingTaskOperationType;
		VAPP_REMOVE_ALL_SNAPSHOTS: VclBlockingTaskOperationType;
		VAPP_RESET: VclBlockingTaskOperationType;
		VAPP_REVERT_TO_CURRENT_SNAPSHOT: VclBlockingTaskOperationType;
		VAPP_SHUTDOWN_GUEST: VclBlockingTaskOperationType;
		VAPP_SUSPEND: VclBlockingTaskOperationType;
		VAPP_UNDEPLOY_POWER_OFF: VclBlockingTaskOperationType;
		VAPP_UNDEPLOY_SUSPEND: VclBlockingTaskOperationType;
		VAPP_UPDATE_VM: VclBlockingTaskOperationType;
		VAPP_UPGRADE_HW_VERSION: VclBlockingTaskOperationType;
		VDC_CAPTURE_TEMPLATE: VclBlockingTaskOperationType;
		VDC_COMPOSE_VAPP: VclBlockingTaskOperationType;
		VDC_COPY_MEDIA: VclBlockingTaskOperationType;
		VDC_COPY_TEMPLATE: VclBlockingTaskOperationType;
		VDC_COPY_VAPP: VclBlockingTaskOperationType;
		VDC_CREATE_DISK: VclBlockingTaskOperationType;
		VDC_CREATE_VDC: VclBlockingTaskOperationType;
		VDC_DELETE_DISK: VclBlockingTaskOperationType;
		VDC_DELETE_MEDIA: VclBlockingTaskOperationType;
		VDC_DELETE_TEMPLATE: VclBlockingTaskOperationType;
		VDC_DELETE_VAPP: VclBlockingTaskOperationType;
		VDC_DELETE_VDC: VclBlockingTaskOperationType;
		VDC_ENABLE_DOWNLOAD: VclBlockingTaskOperationType;
		VDC_INSTANTIATE_VAPP: VclBlockingTaskOperationType;
		VDC_RECOMPOSE_VAPP: VclBlockingTaskOperationType;
		VDC_UPDATE_DISK: VclBlockingTaskOperationType;
		VDC_UPDATE_MEDIA: VclBlockingTaskOperationType;
		VDC_UPDATE_STORAGE_PROFILES: VclBlockingTaskOperationType;
		VDC_UPDATE_TEMPLATE: VclBlockingTaskOperationType;
		VDC_UPDATE_VAPP: VclBlockingTaskOperationType;
		VDC_UPDATE_VDC: VclBlockingTaskOperationType;
		VDC_UPLOAD_MEDIA: VclBlockingTaskOperationType;
		VDC_UPLOAD_OVF_CONTENTS: VclBlockingTaskOperationType;

		getObject(value?: String): VclBlockingTaskOperationType;
	}

	declare const VclBlockingTaskOperationType: VclBlockingTaskOperationType;

	declare class VclBlockingTaskSettings
	{
		blockingTaskOperations: VclTaskOperationList;
		href: String;
		otherAttributes: VclMap;
		timeoutAction: String;
		timeoutInMilliseconds: long;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclBlockingTaskTimeoutActionType
	{
		ABORT: VclBlockingTaskTimeoutActionType;
		FAIL: VclBlockingTaskTimeoutActionType;
		RESUME: VclBlockingTaskTimeoutActionType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclBlockingTaskTimeoutActionType;
	}

	declare const VclBlockingTaskTimeoutActionType: VclBlockingTaskTimeoutActionType;

	declare class VclBlockingTaskUpdateProgressParams
	{
		href: String;
		message: String;
		otherAttributes: VclMap;
		timeoutValueInMilliseconds: long;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclBootOrderSection
	{
		info: VclMsg;
		instanceId: Integer;
		otherAttributes: VclMap;
		required: boolean;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclBrandingSettings
	{
		aboutCompanyUrl: String;
		companyName: String;
		finalCustomTheme: byte[];
		forgotUserNameOrPasswordURL: String;
		href: String;
		loginPageCustomizationTheme: byte[];
		otherAttributes: VclMap;
		previewCustomTheme: byte[];
		signUpUrl: String;
		supportUrl: String;
		theme: String;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclBundleUploadParams
	{
		fileSize: long;
		otherAttributes: VclMap;
		serviceNamespace: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclBundleUploadSocket
	{
		otherAttributes: VclMap;
		uploadLocation: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclBusSubType
	{
		BUS_LOGIC: VclBusSubType;
		LSI_LOGIC: VclBusSubType;
		LSI_LOGIC_SAS: VclBusSubType;
		PARA_VIRTUAL: VclBusSubType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclBusSubType;
	}

	declare const VclBusSubType: VclBusSubType;

	interface VclBusType
	{
		IDE: VclBusType;
		SCSI: VclBusType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclBusType;
	}

	declare const VclBusType: VclBusType;

	interface VclCa
	{

		deleteCaCert(): void;
	}

	declare const VclCa: VclCa;

	declare class VclCapabilities
	{
		otherAttributes: VclMap;
		supportedHardwareVersions: VclSupportedHardwareVersions;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCapacity
	{
		allocated: long;
		limit: long;
		otherAttributes: VclMap;
		units: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCapacityWithUsage
	{
		allocated: long;
		limit: long;
		otherAttributes: VclMap;
		overhead: long;
		reserved: long;
		units: String;
		used: long;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCaptureVAppParams
	{
		description: String;
		name: String;
		otherAttributes: VclMap;
		section: VclAbstractObjectSet;
		source: VclReference;
		targetCatalogItem: VclReference;
		vCloudExtension: VclObjectList;
		vdcStorageProfile: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclCatalog
	{
		dateCreated: VclXMLGregorianCalendar;
		description: String;
		href: String;
		id: String;
		isPublished: boolean;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		owner: VclOwner;
		parent: VclOrganization;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;
		versionNumber: long;

		addCatalogItem(params?: VclCatalogItemParfams): VclCatalogItem;
		copyCatalogItem(name?: String, description?: String, sourceRef?: VclCatalogItem): VclTask;
		getCatalogItems(): VclCatalogItem[];
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		moveCatalogItem(name?: String, description?: String, sourceRef?: VclCatalogItem): VclTask;
		toAdminObject(): VclAdminCatalog;
		toXml(): String;
		updateInternalState(): void;
		uploadVappTemplate(vAppTemplateName?: String, vAppTemplateDesc?: String, localOvfFileLocation?: String, manifestRequired?: boolean, vdcStorageRef?: VclReference): VclVAppTemplate;
	}

	declare const VclCatalog: VclCatalog;

	interface VclCatalogItem
	{
		dateCreated: VclXMLGregorianCalendar;
		description: String;
		entity: VclReference;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclCatalog;
		readonly property: VclObjectList;
		size: long;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;
		versionNumber: long;

		erase(): void;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		toXml(): String;
		update(): VclCatalogItem;
	}

	declare const VclCatalogItem: VclCatalogItem;

	declare class VclCatalogItemParams
	{
		dateCreated: VclXMLGregorianCalendar;
		description: String;
		entity: VclReference;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		property: VclObjectList;
		size: long;
		type: String;
		vCloudExtension: VclObjectList;
		versionNumber: long;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclCatalogItemParfams
	{

	}

	declare const VclCatalogItemParfams: VclCatalogItemParfams;

	declare class VclCatalogItems
	{
		catalogItem: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCatalogSettings
	{
		href: String;
		isSyncEnabled: boolean;
		otherAttributes: VclMap;
		refreshInterval: long;
		syncStartDate: VclXMLGregorianCalendar;
		syncStopDate: VclXMLGregorianCalendar;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCatalogsList
	{
		catalogReference: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCatalogStorageProfiles
	{
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;
		vdcStorageProfile: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCertificateParams
	{
		certificateType: String;
		description: String;
		extendedAttributes: VclObjectList;
		issuerCn: String;
		isUniversal: boolean;
		name: String;
		nodeId: String;
		pemEncoding: String;
		scope: VclScopeInfoParams;
		subjectCn: String;
		type: VclObjectTypeParams;
		universalRevision: long;
		x509Certificates: VclObjectList;

		constructor();
	}

	declare class VclCertificateUpdateParams
	{
		fileSize: long;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCertificateUploadSocket
	{
		otherAttributes: VclMap;
		task: VclTaskParams;
		uploadLocation: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimAnySimple
	{
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimBase64Binary
	{
		otherAttributes: VclMap;
		value: byte[];

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimBoolean
	{
		otherAttributes: VclMap;
		value: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimByte
	{
		otherAttributes: VclMap;
		value: byte;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimChar16
	{
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimDateTime
	{
		cIMDateTime: VclObject;
		date: VclXMLGregorianCalendar;
		datetime: VclXMLGregorianCalendar;
		interval: VclDuration;
		otherAttributes: VclMap;
		time: VclXMLGregorianCalendar;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimDouble
	{
		otherAttributes: VclMap;
		value: Double;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimFloat
	{
		otherAttributes: VclMap;
		value: float;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimHexBinary
	{
		otherAttributes: VclMap;
		value: byte[];

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimInt
	{
		otherAttributes: VclMap;
		value: int;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimLong
	{
		otherAttributes: VclMap;
		value: long;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimReference
	{
		otherAttributes: VclMap;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCIMResourceAllocationSettingData
	{
		address: VclCimString;
		addressOnParent: VclCimString;
		allocationUnits: VclCimString;
		automaticAllocation: VclCimBoolean;
		automaticDeallocation: VclCimBoolean;
		caption: VclResourceAllocationCaption;
		changeableType: VclResourceAllocationChangeable;
		configurationName: VclCimString;
		connection: VclObjectList;
		consumerVisibility: VclConsumerVisibility;
		description: VclCimString;
		elementName: VclCimString;
		generation: VclCimUnsignedLong;
		hostResource: VclObjectList;
		instanceID: VclCimString;
		limit: VclCimUnsignedLong;
		mappingBehavior: VclMappingBehavior;
		otherAttributes: VclMap;
		otherResourceType: VclCimString;
		parent: VclCimString;
		poolID: VclCimString;
		reservation: VclCimUnsignedLong;
		resourceSubType: VclCimString;
		resourceType: VclResource;
		virtualQuantity: VclCimUnsignedLong;
		virtualQuantityUnits: VclCimString;
		weight: VclCimUnsignedInt;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimShort
	{
		otherAttributes: VclMap;
		value: short;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimString
	{
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimUnsignedByte
	{
		otherAttributes: VclMap;
		value: short;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimUnsignedInt
	{
		otherAttributes: VclMap;
		value: long;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimUnsignedLong
	{
		otherAttributes: VclMap;
		value: VclBigInteger;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCimUnsignedShort
	{
		otherAttributes: VclMap;
		value: int;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCIMVirtualSystemSettingData
	{
		automaticRecoveryAction: VclAutomaticRecoveryAction;
		automaticShutdownAction: VclAutomaticShutdownAction;
		automaticStartupAction: VclAutomaticStartupAction;
		automaticStartupActionDelay: VclCimDateTime;
		automaticStartupActionSequenceNumber: VclCimUnsignedShort;
		caption: VclVirtualSystemCaption;
		changeableType: VclVirtualSystemChangeable;
		configurationDataRoot: VclCimString;
		configurationFile: VclCimString;
		configurationID: VclCimString;
		configurationName: VclCimString;
		creationTime: VclCimDateTime;
		description: VclCimString;
		elementName: VclCimString;
		generation: VclCimUnsignedLong;
		instanceID: VclCimString;
		logDataRoot: VclCimString;
		notes: VclObjectList;
		otherAttributes: VclMap;
		recoveryFile: VclCimString;
		snapshotDataRoot: VclCimString;
		suspendDataRoot: VclCimString;
		swapFileDataRoot: VclCimString;
		virtualSystemIdentifier: VclCimString;
		virtualSystemType: VclCimString;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCloneMediaParams
	{
		description: String;
		isSourceDelete: boolean;
		name: String;
		otherAttributes: VclMap;
		source: VclReference;
		vCloudExtension: VclObjectList;
		vdcStorageProfile: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCloneVAppParams
	{
		deploy: boolean;
		description: String;
		instantiationParams: VclInstantiationParams;
		isSourceDelete: boolean;
		linkedClone: boolean;
		name: String;
		otherAttributes: VclMap;
		powerOn: boolean;
		source: VclReference;
		sourcedVmInstantiationParams: VclObjectList;
		vAppParent: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCloneVAppTemplateParams
	{
		description: String;
		isSourceDelete: boolean;
		name: String;
		otherAttributes: VclMap;
		source: VclReference;
		vCloudExtension: VclObjectList;
		vdcStorageProfile: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclComplianceResult
	{
		complianceCheckTime: VclXMLGregorianCalendar;
		complianceStatus: String;
		complianceStatusMessage: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclComposeVAppParams
	{
		allEULAsAccepted: boolean;
		deploy: boolean;
		description: String;
		instantiationParams: VclInstantiationParams;
		linkedClone: boolean;
		name: String;
		otherAttributes: VclMap;
		powerOn: boolean;
		sourcedItem: VclObjectList;
		vAppParent: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclComputeCapacity
	{
		cpu: VclCapacityWithUsage;
		memory: VclCapacityWithUsage;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclConfig
	{
		key: String;
		required: boolean;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclConfiguration
	{
		default: boolean;
		description: VclMsg;
		id: String;
		label: VclMsg;
		otherAttributes: VclMap;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclConsumerVisibility
	{
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclContainer
	{
		href: String;
		name: String;
		otherAttributes: VclMap;
		page: Integer;
		pageSize: Integer;
		total: long;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclControlAccessParams
	{
		accessSettings: VclAccessSettings;
		everyoneAccessLevel: String;
		isSharedToEveryone: boolean;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCopyOrMoveCatalogItemParams
	{
		description: String;
		name: String;
		otherAttributes: VclMap;
		source: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCoresPerSocket
	{
		otherAttributes: VclMap;
		required: boolean;
		value: long;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCpuCompatibilitySection
	{
		info: VclMsg;
		level: VclObjectList;
		otherAttributes: VclMap;
		required: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCreateSnapshotParams
	{
		description: String;
		memory: boolean;
		name: String;
		otherAttributes: VclMap;
		quiesce: boolean;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCreateVdcParams
	{
		allocationModel: String;
		computeCapacity: VclComputeCapacity;
		description: String;
		isEnabled: boolean;
		isThinProvision: boolean;
		name: String;
		networkPoolReference: VclReference;
		networkQuota: Integer;
		nicQuota: Integer;
		otherAttributes: VclMap;
		overCommitAllowed: boolean;
		providerVdcReference: VclReference;
		resourceGuaranteedCpu: Double;
		resourceGuaranteedMemory: Double;
		usesFastProvisioning: boolean;
		vCloudExtension: VclObjectList;
		vCpuInMhz: long;
		vdcStorageProfile: VclObjectList;
		vmQuota: Integer;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclCrl
	{

		deleteCrlCert(): void;
	}

	declare const VclCrl: VclCrl;

	interface VclCsr
	{

		addSignedCert(isUploadPem?: boolean, pemFileLocation?: String, pemContent?: String, desc?: String, isUploadPem?: boolean, pemFileLocation?: String, pemContent?: String, desc?: String): VclServiceCertificate[];
		deleteCsrCert(): void;
		deleteCsrCert(): void;
		selfSign(noOfDays?: int): VclSelfSignedCsr;
	}

	declare const VclCsr: VclCsr;

	declare class VclCsrParams
	{
		algorithm: String;
		cn: String;
		description: String;
		extendedAttributes: VclObjectList;
		isUniversal: boolean;
		keySize: String;
		name: String;
		nodeId: String;
		pemEncoding: String;
		scope: VclScopeInfoParams;
		subject: VclPrincipalParams;
		type: VclObjectTypeParams;
		universalRevision: long;

		constructor();
	}

	declare class VclCurrentUsage
	{
		href: String;
		metric: VclObjectList;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCurrentUsageSpec
	{
		metricPattern: VclList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCustomizationSection
	{
		customizeOnInstantiate: boolean;
		goldMaster: boolean;
		href: String;
		info: VclMsg;
		otherAttributes: VclMap;
		required: boolean;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclCustomOrgLdapSettings
	{
		authenticationMechanism: String;
		connectorType: String;
		groupAttributes: VclOrgLdapGroupAttributes;
		groupSearchBase: String;
		hostName: String;
		isGroupSearchBaseEnabled: boolean;
		isSsl: boolean;
		isSslAcceptAll: boolean;
		otherAttributes: VclMap;
		password: String;
		port: int;
		realm: String;
		searchBase: String;
		useExternalKerberos: boolean;
		userAttributes: VclOrgLdapUserAttributes;
		userName: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclDefaultHardDiskAdapter
	{
		ref: String;
		value: int;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclDefaultStorageProfileSection
	{
		info: VclMsg;
		otherAttributes: VclMap;
		required: boolean;
		storageProfile: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclDeploymentOptionSection
	{
		configuration: VclObjectList;
		info: VclMsg;
		otherAttributes: VclMap;
		required: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclDeploymentOptionSectionConfiguration
	{
		default: boolean;
		description: VclMsg;
		id: String;
		label: VclMsg;
		otherAttributes: VclMap;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclDeployVAppParams
	{
		deploymentLeaseSeconds: Integer;
		forceCustomization: boolean;
		otherAttributes: VclMap;
		powerOn: boolean;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclDhcpOption121Params
	{
		obtainEquivalenceKey: String;
		staticRoutes: VclObjectList;

		constructor();
	}

	declare class VclDhcpOption121StaticRouteParams
	{
		destinationSubnet: String;
		obtainEquivalenceKey: String;
		router: String;

		constructor();
	}

	declare class VclDhcpOption150Params
	{
		obtainEquivalenceKey: String;
		tftpServers: VclList;

		constructor();
	}

	declare class VclDhcpOptionOtherParams
	{
		code: String;
		obtainEquivalenceKey: String;
		value: String;

		constructor();
	}

	declare class VclDhcpOptionsParams
	{
		obtainEquivalenceKey: String;
		option121: VclDhcpOption121Params;
		option150: VclDhcpOption150Params;
		option26: String;
		option66: String;
		option67: String;
		others: VclObjectList;

		constructor();
	}

	declare class VclDhcpPoolService
	{
		defaultLeaseTime: Integer;
		highIpAddress: String;
		isEnabled: boolean;
		lowIpAddress: String;
		maxLeaseTime: Integer;
		network: VclReference;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclDhcpService
	{
		defaultLeaseTime: Integer;
		domainName: String;
		ipRange: VclIpRange;
		isEnabled: boolean;
		maxLeaseTime: Integer;
		otherAttributes: VclMap;
		primaryNameServer: String;
		routerIp: String;
		secondaryNameServer: String;
		subMask: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclDisk
	{
		busSubType: String;
		busType: String;
		description: String;
		files: VclFilesList;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		owner: VclOwner;
		parent: VclVdc;
		size: long;
		status: Integer;
		storageProfile: VclReference;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		changeOwner(value?: VclReference): void;
		erase(): VclTask;
		getAttachedVms(): VclReference[];
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		toXml(): String;
		updateDisk(name?: String, description?: String, storageProfile?: VclVdcStorageProfile): VclTask;
		updateInternalState(): void;
	}

	interface VclDiskConstructor {
		new(value?:any): VclDisk;
		readonly prototype: VclDisk;
	}

	declare const VclDisk: VclDiskConstructor;

	declare class VclDiskAttachOrDetachParams
	{
		busNumber: Integer;
		disk: VclReference;
		otherAttributes: VclMap;
		unitNumber: Integer;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclDiskCreateParams
	{
		disk: VclDiskParams;
		locality: VclReference;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclDiskParams
	{
		busSubType: String;
		busType: String;
		description: String;
		files: VclFilesList;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		owner: VclOwner;
		size: long;
		status: Integer;
		storageProfile: VclReference;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclDiskSection
	{
		disk: VclObjectList;
		info: VclMsg;
		otherAttributes: VclMap;
		required: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclDuration
	{

		getDays(): int;
		getHours(): int;
		getMinutes(): int;
		getMonths(): int;
		getSeconds(): int;
		getSign(): int;
		getYears(): int;
	}

	declare const VclDuration: VclDuration;

	declare class VclEmailSettings
	{
		alertEmailTo: String;
		alertEmailToAllAdmins: boolean;
		emailSubjectPrefix: String;
		href: String;
		otherAttributes: VclMap;
		senderEmailAddress: String;
		smtpSettings: VclSmtpSettings;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclEntity
	{
		id: String;
		otherAttributes: VclMap;
		section: VclAbstractObjectSet;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclEntityLink
	{
		id: String;
		name: String;
		otherAttributes: VclMap;
		rel: String;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclEntityReference
	{
		id: String;
		name: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclEntityReferences
	{
		reference: VclObjectSet;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclEntityRights
	{
		reference: VclObject;
		rights: VclRightRefs;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclEntityType
	{
		BLOCKING_TASK: VclEntityType;
		CATALOG: VclEntityType;
		CATALOG_ITEM: VclEntityType;
		DATASTORE: VclEntityType;
		DISK: VclEntityType;
		GATEWAY: VclEntityType;
		GROUP: VclEntityType;
		HOST: VclEntityType;
		LICENSE_REPORT: VclEntityType;
		MEDIA: VclEntityType;
		NETWORK: VclEntityType;
		NETWORK_POOL: VclEntityType;
		ORGANIZATION: VclEntityType;
		PROVIDER_VDC: VclEntityType;
		PROVIDER_VDC_STORAGE_PROFILE: VclEntityType;
		RIGHT: VclEntityType;
		ROLE: VclEntityType;
		STRANDED_ITEM: VclEntityType;
		TASK: VclEntityType;
		USER: VclEntityType;
		readonly value: String;
		values: String[];
		VAPP: VclEntityType;
		VAPP_TEMPLATE: VclEntityType;
		VDC: VclEntityType;
		VDC_STORAGE_PROFILE: VclEntityType;
		VIM_SERVER: VclEntityType;
		VM: VclEntityType;

		getObject(value?: String): VclEntityType;
	}

	declare const VclEntityType: VclEntityType;

	declare class VclEnvelope
	{
		content: VclAbstractObject;
		lang: String;
		otherAttributes: VclMap;
		references: VclOvfReferences;
		section: VclAbstractObjectSet;
		strings: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclEnvironment
	{
		entity: VclObjectList;
		id: String;
		otherAttributes: VclMap;
		section: VclAbstractObjectSet;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclError
	{
		majorErrorCode: int;
		message: String;
		minorErrorCode: String;
		otherAttributes: VclMap;
		stackTrace: String;
		vCloudExtension: VclObjectList;
		vendorSpecificErrorCode: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclEulaSection
	{
		info: VclMsg;
		license: VclMsg;
		otherAttributes: VclMap;
		required: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclEvent
	{
		otherAttributes: VclMap;
		owner: VclReference;
		serviceNamespace: String;
		success: boolean;
		type: String;
		typeFull: String;
		user: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclEventType
	{
		BLOCKINGTASK_ABORT: VclEventType;
		BLOCKINGTASK_CREATE: VclEventType;
		BLOCKINGTASK_FAIL: VclEventType;
		BLOCKINGTASK_RESUME: VclEventType;
		CATALOG_CREATE: VclEventType;
		CATALOG_DELETE: VclEventType;
		CATALOG_MODIFY: VclEventType;
		CATALOG_PUBLISH: VclEventType;
		CATALOGITEM_CREATE: VclEventType;
		CATALOGITEM_DELETE: VclEventType;
		CATALOGITEM_MODIFY: VclEventType;
		DATASTORE_DELETE: VclEventType;
		DATASTORE_MODIFY: VclEventType;
		DISK_ATTACH: VclEventType;
		DISK_CREATE: VclEventType;
		DISK_CREATE_REQUEST: VclEventType;
		DISK_DELETE: VclEventType;
		DISK_DELETE_REQUEST: VclEventType;
		DISK_DETACH: VclEventType;
		DISK_MODIFY: VclEventType;
		GATEWAY_CREATE: VclEventType;
		GATEWAY_DELETE: VclEventType;
		GATEWAY_MODIFY: VclEventType;
		GATEWAY_UPGRADE: VclEventType;
		GROUP_IMPORT: VclEventType;
		GROUP_PRIVILEGE_MODIFY: VclEventType;
		GROUP_REMOVE: VclEventType;
		LICENSING_REQUESTUSAGE: VclEventType;
		MEDIA_CREATE: VclEventType;
		MEDIA_CREATE_REQUEST: VclEventType;
		MEDIA_DELETE: VclEventType;
		MEDIA_DELETE_REQUEST: VclEventType;
		MEDIA_IMPORT: VclEventType;
		MEDIA_IMPORT_REQUEST: VclEventType;
		MEDIA_MODIFY: VclEventType;
		MEDIA_MODIFY_REQUEST: VclEventType;
		MEDIA_QUARANTINE_REJECT: VclEventType;
		MEDIA_UPLOAD_TIMEOUT: VclEventType;
		NETWORK_CREATE: VclEventType;
		NETWORK_DELETE: VclEventType;
		NETWORK_DEPLOY: VclEventType;
		NETWORK_MODIFY: VclEventType;
		NETWORK_UNDEPLOY: VclEventType;
		NETWORK_UPGRADE: VclEventType;
		ORG_CREATE: VclEventType;
		ORG_DELETE: VclEventType;
		ORG_MODIFY: VclEventType;
		PROVIDERVDC_CREATE: VclEventType;
		PROVIDERVDC_CREATE_REQUEST: VclEventType;
		PROVIDERVDC_DELETE: VclEventType;
		PROVIDERVDC_DELETE_REQUEST: VclEventType;
		PROVIDERVDC_MERGE: VclEventType;
		PROVIDERVDC_MERGE_REQUEST: VclEventType;
		PROVIDERVDC_MERGE_WITH: VclEventType;
		PROVIDERVDC_MODIFY: VclEventType;
		PROVIDERVDCSTORAGEPROFILE_ADD: VclEventType;
		PROVIDERVDCSTORAGEPROFILE_MODIFY: VclEventType;
		PROVIDERVDCSTORAGEPROFILE_REMOVE: VclEventType;
		ROLE_CREATE: VclEventType;
		ROLE_DELETE: VclEventType;
		ROLE_MODIFY: VclEventType;
		SESSION_LOGIN: VclEventType;
		TASK_ABORT: VclEventType;
		TASK_COMPLETE: VclEventType;
		TASK_CREATE: VclEventType;
		TASK_FAIL: VclEventType;
		TASK_START: VclEventType;
		USER_CREATE: VclEventType;
		USER_DELETE: VclEventType;
		USER_DISABLE: VclEventType;
		USER_ENABLE: VclEventType;
		USER_IMPORT: VclEventType;
		USER_LOCK_EXPIRED: VclEventType;
		USER_LOCKOUT: VclEventType;
		USER_MODIFY: VclEventType;
		USER_REMOVE: VclEventType;
		USER_UNLOCK: VclEventType;
		readonly value: String;
		values: String[];
		VAPP_CREATE: VclEventType;
		VAPP_CREATE_REQUEST: VclEventType;
		VAPP_DELETE: VclEventType;
		VAPP_DELETE_REQUEST: VclEventType;
		VAPP_DEPLOY: VclEventType;
		VAPP_DEPLOY_REQUEST: VclEventType;
		VAPP_IMPORT: VclEventType;
		VAPP_IMPORT_REQUEST: VclEventType;
		VAPP_LEASE_EXPIRATION_CHANGED: VclEventType;
		VAPP_MODIFY: VclEventType;
		VAPP_MODIFY_REQUEST: VclEventType;
		VAPP_QUARANTINE_REJECT: VclEventType;
		VAPP_RUNTIME_LEASE_EXPIRY: VclEventType;
		VAPP_UNDEPLOY: VclEventType;
		VAPP_UNDEPLOY_REQUEST: VclEventType;
		VAPP_UPLOAD_TIMEOUT: VclEventType;
		VAPPTEMPLATE_CREATE: VclEventType;
		VAPPTEMPLATE_CREATE_REQUEST: VclEventType;
		VAPPTEMPLATE_DELETE: VclEventType;
		VAPPTEMPLATE_DELETE_REQUEST: VclEventType;
		VAPPTEMPLATE_IMPORT: VclEventType;
		VAPPTEMPLATE_IMPORT_REQUEST: VclEventType;
		VAPPTEMPLATE_MODIFY: VclEventType;
		VAPPTEMPLATE_MODIFY_REQUEST: VclEventType;
		VC_CREATE: VclEventType;
		VC_DELETE: VclEventType;
		VC_MODIFY: VclEventType;
		VC_REFRESH: VclEventType;
		VDC_CREATE: VclEventType;
		VDC_CREATE_REQUEST: VclEventType;
		VDC_DELETE: VclEventType;
		VDC_DELETE_REQUEST: VclEventType;
		VDC_FAST_PROVISIONING_MODIFY: VclEventType;
		VDC_MODIFY: VclEventType;
		VDC_THIN_PROVISIONING_MODIFY: VclEventType;
		VDCSTORAGEPROFILE_ADD: VclEventType;
		VDCSTORAGEPROFILE_MODIFY: VclEventType;
		VDCSTORAGEPROFILE_REMOVE: VclEventType;
		VM_CHANGE_STATE: VclEventType;
		VM_CONSOLIDATE: VclEventType;
		VM_CONSOLIDATE_REQUEST: VclEventType;
		VM_CREATE: VclEventType;
		VM_CREATE_REQUEST: VclEventType;
		VM_DELETE: VclEventType;
		VM_DEPLOY: VclEventType;
		VM_DEPLOY_REQUEST: VclEventType;
		VM_IP_ADDRESS_CHANGED: VclEventType;
		VM_MIGRATE: VclEventType;
		VM_MIGRATE_REQUEST: VclEventType;
		VM_MODIFY: VclEventType;
		VM_MODIFY_REQUEST: VclEventType;
		VM_RELOCATE: VclEventType;
		VM_RELOCATE_REQUEST: VclEventType;
		VM_UNDEPLOY: VclEventType;
		VM_UNDEPLOY_REQUEST: VclEventType;

		getObject(value?: String): VclEventType;
	}

	declare const VclEventType: VclEventType;

	declare class VclExpression
	{

		constructor(key?: Object, value?: String, type?: VclExpressionType);
	}

	declare class VclExpressionParams
	{

		constructor(key?: Object, value?: String, type?: VclExpressionType);
		getKey(): Object;
		getType(): VclExpressionType;
		getValue(): String;
		setKey(key?: Object): void;
		setType(type?: VclExpressionType): void;
		setValue(value?: String): void;
	}

	interface VclExpressionType
	{
		EQUALS: VclExpressionType;
		GREATER_THAN: VclExpressionType;
		GREATER_THAN_OR_EQUAL: VclExpressionType;
		LESSER_THAN: VclExpressionType;
		LESSER_THAN_OR_EQUAL: VclExpressionType;
		NOT_EQUALS: VclExpressionType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclExpressionType;
	}

	declare const VclExpressionType: VclExpressionType;

	declare class VclExtendedAttributeParams
	{
		name: String;
		value: String;

		constructor();
	}

	interface VclExtensionQueryService
	{

	}

	declare const VclExtensionQueryService: VclExtensionQueryService;

	declare class VclExtensionServices
	{
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclExtensionVersions
	{
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;
		version: VclList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclExternalCatalogSubscriptionParams
	{
		expectedSslThumbprint: String;
		localCopy: boolean;
		location: String;
		otherAttributes: VclMap;
		password: String;
		subscribeToExternalFeeds: boolean;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclExternalNatIpEntry
	{
		destinationNatIp: String;
		sourceNatIp: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclExternalNatIpMap
	{
		entry: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclExternalNetwork
	{
		configuration: VclNetworkConfiguration;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclHostAdmin;
		providerInfo: String;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		getContainedObjects(): Object[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		reset(): VclTask;
		toAdminExtensionObject(): VclVMWExternalNetwork;
		toXml(): String;
		updateInternalState(): void;
	}

	declare const VclExternalNetwork: VclExternalNetwork;

	declare class VclExtraConfig
	{
		key: String;
		required: boolean;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclFeatureConfigParams
	{
		enabled: boolean;
		obtainEquivalenceKey: String;
		template: String;
		version: long;

		constructor();
	}

	interface VclFenceModeValuesType
	{
		BRIDGED: VclFenceModeValuesType;
		ISOLATED: VclFenceModeValuesType;
		NATROUTED: VclFenceModeValuesType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclFenceModeValuesType;
	}

	declare const VclFenceModeValuesType: VclFenceModeValuesType;

	declare class VclFencePoolParams
	{
		description: String;
		fenceIdCount: int;
		files: VclFilesList;
		href: String;
		id: String;
		mtu: Integer;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		promiscuousMode: boolean;
		status: Integer;
		type: String;
		usedNetworksCount: Integer;
		vCloudExtension: VclObjectList;
		vimSwitchRef: VclVimObjectRef;
		vlanId: int;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclFile
	{
		bytesTransferred: long;
		checksum: String;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		size: long;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclFileDescriptorData
	{
		description: String;
		file: VclReference;
		href: String;
		id: String;
		operationKey: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclFileDescriptorParams
	{

	}

	declare const VclFileDescriptorParams: VclFileDescriptorParams;

	declare class VclFilesList
	{
		file: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclFileUploadParams
	{
		fileSize: long;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclFileUploadSocket
	{
		otherAttributes: VclMap;
		task: VclTaskParams;
		uploadLocation: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclFilter
	{

		constructor(expression?: VclExpression);
		constructor(expressions?: VclExpression[], type?: VclFilterType);
		constructor(filters?: VclFilters[], type?: VclFilterType);
	}

	interface VclFilters
	{

	}

	declare const VclFilters: VclFilters;

	interface VclFilterType
	{
		AND: VclFilterType;
		OR: VclFilterType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclFilterType;
	}

	declare const VclFilterType: VclFilterType;

	interface VclFinderType
	{
		ADMIN_ACL_RULE: VclFinderType;
		ADMIN_API_DEFINITION: VclFinderType;
		ADMIN_API_FILTER: VclFinderType;
		ADMIN_CATALOG: VclFinderType;
		ADMIN_EXTENSION_HOST: VclFinderType;
		ADMIN_FILE_DESCRIPTOR: VclFinderType;
		ADMIN_HOST: VclFinderType;
		ADMIN_ORG_VDC_NETWORK: VclFinderType;
		ADMIN_ORGANIZATION: VclFinderType;
		ADMIN_RESOURCE_CLASS: VclFinderType;
		ADMIN_RESOURCE_CLASS_ACTION: VclFinderType;
		ADMIN_SERVICE: VclFinderType;
		ADMIN_SERVICE_LINK: VclFinderType;
		ADMIN_SERVICE_RESOURCE: VclFinderType;
		ADMIN_VDC: VclFinderType;
		API_DEFINITION: VclFinderType;
		BLOCKING_TASK: VclFinderType;
		CATALOG: VclFinderType;
		CATALOG_ITEM: VclFinderType;
		DISK: VclFinderType;
		EXTERNAL_NETWORK: VclFinderType;
		GATEWAY: VclFinderType;
		GROUP: VclFinderType;
		HOST: VclFinderType;
		LICENSING_REPORT: VclFinderType;
		MEDIA: VclFinderType;
		ORG_VDC_NETWORK: VclFinderType;
		ORGANIZATION: VclFinderType;
		PROVIDER_VDC: VclFinderType;
		PVDC_STORAGE_PROFILE: VclFinderType;
		RIGHT: VclFinderType;
		ROLE: VclFinderType;
		SERVICE: VclFinderType;
		STRANDED_ITEM: VclFinderType;
		TASK: VclFinderType;
		USER: VclFinderType;
		readonly value: String;
		values: String[];
		VAPP: VclFinderType;
		VAPP_NETWORK: VclFinderType;
		VAPP_TEMPLATE: VclFinderType;
		VDC: VclFinderType;
		VDC_STORAGE_PROFILE: VclFinderType;
		VIM_SERVER: VclFinderType;
		VM: VclFinderType;
		VMW_DATASTORE: VclFinderType;
		VMW_EXTERNAL_NETWORK: VclFinderType;
		VMW_HOST: VclFinderType;
		VMW_NETWORK_POOL: VclFinderType;
		VMW_PROVIDER_VDC: VclFinderType;

		getObject(value?: String): VclFinderType;
	}

	declare const VclFinderType: VclFinderType;

	interface VclFirewallDirectionType
	{
		IN: VclFirewallDirectionType;
		OUT: VclFirewallDirectionType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclFirewallDirectionType;
	}

	declare const VclFirewallDirectionType: VclFirewallDirectionType;

	interface VclFirewallPolicyType
	{
		ALLOW: VclFirewallPolicyType;
		DROP: VclFirewallPolicyType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclFirewallPolicyType;
	}

	declare const VclFirewallPolicyType: VclFirewallPolicyType;

	declare class VclFirewallRule
	{
		description: String;
		destinationIp: String;
		destinationPortRange: String;
		destinationVm: VclVmSelection;
		direction: String;
		enableLogging: boolean;
		icmpSubType: String;
		id: String;
		isEnabled: boolean;
		matchOnTranslate: boolean;
		otherAttributes: VclMap;
		policy: String;
		port: Integer;
		protocols: VclFirewallRuleProtocols;
		sourceIp: String;
		sourcePort: Integer;
		sourcePortRange: String;
		sourceVm: VclVmSelection;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclFirewallRuleBaseParams
	{
		description: String;
		direction: String;
		enabled: boolean;
		invalidApplication: boolean;
		invalidDestination: boolean;
		invalidSource: boolean;
		loggingEnabled: boolean;
		matchTranslated: boolean;
		name: String;
		obtainEquivalenceKey: String;
		ruleId: long;
		ruleTag: long;
		ruleType: String;
		statistics: VclFirewallRuleStatsParams;

		constructor();
	}

	declare class VclFirewallRuleProtocols
	{
		any: boolean;
		icmp: boolean;
		other: String;
		tcp: boolean;
		udp: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclFirewallRuleStatsParams
	{
		byteCount: long;
		connectionCount: long;
		obtainEquivalenceKey: String;
		packetCount: long;
		timestamp: long;

		constructor();
	}

	interface VclFirewallRuleTrinity
	{
		action: String;
		application: VclApplicationTrinityParams;
		description: String;
		destination: VclAddressTrinityParams;
		direction: String;
		enabled: boolean;
		invalidApplication: boolean;
		invalidDestination: boolean;
		invalidSource: boolean;
		loggingEnabled: boolean;
		matchTranslated: boolean;
		name: String;
		readonly obtainEquivalenceKey: String;
		ruleId: long;
		ruleTag: long;
		ruleType: String;
		source: VclAddressTrinityParams;
		statistics: VclFirewallRuleStatsParams;

		deleteFirewallRule(): VclFirewallRuleTrinity[];
		enableFirewallRule(ruleEnableState?: boolean): VclFirewallRuleTrinity;
		findSupportedObjects(): String[];
		getAvailableObjectsForProvidedType(params?: String): String[];
		getDescription(): String;
		getDestinationPort(): Integer;
		getDestinationSelectedObjects(selectedDestinationObjectHidden?: String[]): String[];
		getFirewallRuleType(): FirewallPolicyType;
		getRuleDestinationIp(): String;
		getRuleSourceIp(): String;
		getSourcePort(): Integer;
		getSourceSelectedObjects(selectedSourceObjectHidden?: String[]): String[];
		getTcpDestinationPort(isTcpConfigured?: boolean): String;
		getTcpSourcePort(isTcpConfigured?: boolean): String;
		getUdpDestinationPort(isUdpConfigured?: boolean): String;
		getUdpSourcePort(isUdpConfigured?: boolean): String;
		isAdvanced(): boolean;
		isAllConfigured(): boolean;
		isEnabled(): boolean;
		isIcmpConfigured(): boolean;
		isLogginEnabled(): boolean;
		isTcpConfigured(): boolean;
		isUdpConfigured(): boolean;
		updateFirewallRule(availableSelectedObj?: VclFirewallRuleTrinityParams): VclFirewallRuleTrinity;
		updateFirewallRuleForLegacyGateway(params?: FirewallRule): VclTask;
	}

	declare const VclFirewallRuleTrinity: VclFirewallRuleTrinity;

	declare class VclFirewallRuleTrinityParams
	{
		action: String;
		application: VclApplicationTrinityParams;
		description: String;
		destination: VclAddressTrinityParams;
		direction: String;
		enabled: boolean;
		invalidApplication: boolean;
		invalidDestination: boolean;
		invalidSource: boolean;
		loggingEnabled: boolean;
		matchTranslated: boolean;
		name: String;
		obtainEquivalenceKey: String;
		ruleId: long;
		ruleTag: long;
		ruleType: String;
		source: VclAddressTrinityParams;
		statistics: VclFirewallRuleStatsParams;

		constructor();
	}

	declare class VclFirewallService
	{
		defaultAction: String;
		firewallRule: VclObjectList;
		isEnabled: boolean;
		logDefaultAction: boolean;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclFormatType
	{
		ID_RECORD_VIEW: VclFormatType;
		RECORD_VIEW: VclFormatType;
		REFERENCE_VIEW: VclFormatType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclFormatType;
	}

	declare const VclFormatType: VclFormatType;

	interface VclGateway
	{
		configuration: VclGatewayConfiguration;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminVdc;
		status: Integer;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		addDhcpBinding(params?: VclStaticBindingTrinityParams): VclStaticBindingTrinity;
		configureServices(): VclTask;
		convertGatewayToAdvanced(): Object[];
		createCaCert(isUploadPem?: boolean, pemFileLocation?: String, pemContent?: String, desc?: String): VclCa[];
		createCrlCert(isUploadPem?: boolean, pemFileLocation?: String, pemContent?: String, desc?: String): VclCrl[];
		createCsrCert(commonName?: String, orgUnit?: String, orgName?: String, locality?: String, stateOrProvince?: String, countryCode?: String, privateKey?: String, keySize?: String, description?: String): Csr;
		createDhcpIpPool(params?: VclIPPoolTrinityParams): VclIPPoolTrinity;
		createFirewallRule(params?: FirewallRule): VclTask;
		createFirewallRuleForAdvancedGateway(params?: VclFirewallRuleTrinityParams): VclFirewallRuleTrinity;
		createNatRuleAdvanced(params?: VclNatRuleParams): NatRule;
		createNatRuleLegacy(params?: VclNatRuleParams): VclGateway;
		createServiceCert(isUploadPem?: boolean, pemEncodingText?: String, pemEncodingPath?: String, isUploadKey?: boolean, privateKeyText?: String, privateKeyPath?: String, passPhrase?: String, description?: String): VclServiceCertificate[];
		enableDhcpService(enable?: boolean): VclGateway;
		enableFirewall(enabled?: boolean, action?: String, loggingEnabled?: boolean): VclGateway;
		enableSshStatus(enable?: boolean): void;
		erase(): VclTask;
		findSupportedObjects(): String[];
		getAvailableObjectsForProvidedType(params?: String): String[];
		getContainedObjects(): Object[];
		getDomainNames(): String[];
		getEdgeCliStatus(): boolean;
		getEdgeInterfaceNames(): String[];
		getHost(): VclHost;
		getIpAddresses(): String[];
		getIpSetNames(): String[];
		getReference(): VclReference;
		isAdvanced(): boolean;
		modifyFormFactor(formFactor?: String): VclTask;
		reapplyServices(): VclTask;
		redeploy(): VclGateway;
		setSshSettings(userName?: String, password?: String, passwordExpiry?: String, loginBanner?: String, enable?: boolean): void;
		setSyslogServers(syslogIp?: String): VclGateway;
		syncSyslogServer(): VclGateway;
		toXml(): String;
		update(): VclTask;
		updateDhcpRelayConfiguration(ipAddrs?: String[], domainNames?: String[], ipSetNames?: String[], gatewayInterface?: String): VclGateway;
		updateInternalState(): void;
		upgradeConfig(): VclTask;
	}

	declare const VclGateway: VclGateway;

	interface VclGatewayBackingConfigValuesType
	{
		COMPACT: VclGatewayBackingConfigValuesType;
		FULL: VclGatewayBackingConfigValuesType;
		FULL4: VclGatewayBackingConfigValuesType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclGatewayBackingConfigValuesType;
	}

	declare const VclGatewayBackingConfigValuesType: VclGatewayBackingConfigValuesType;

	declare class VclGatewayConfiguration
	{
		backwardCompatibilityMode: boolean;
		edgeGatewayServiceConfiguration: VclGatewayFeatures;
		gatewayBackingConfig: String;
		gatewayInterfaces: VclGatewayInterfaces;
		haEnabled: boolean;
		otherAttributes: VclMap;
		useDefaultRouteForDnsRelay: boolean;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclGatewayDhcpService
	{
		isEnabled: boolean;
		otherAttributes: VclMap;
		pool: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclGatewayEnums
	{
		INTERNAL: VclGatewayEnums;
		UPLINK: VclGatewayEnums;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclGatewayEnums;
	}

	declare const VclGatewayEnums: VclGatewayEnums;

	declare class VclGatewayFeatures
	{
		networkService: VclAbstractObjectSet;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclGatewayInterface
	{
		applyRateLimit: boolean;
		displayName: String;
		inRateLimit: Double;
		interfaceType: String;
		name: String;
		network: VclReference;
		otherAttributes: VclMap;
		outRateLimit: Double;
		subnetParticipation: VclObjectList;
		useForDefaultRoute: boolean;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclGatewayInterfaces
	{
		gatewayInterface: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclGatewayIpsecVpnEndpoint
	{
		network: VclReference;
		otherAttributes: VclMap;
		publicIp: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclGatewayIpsecVpnService
	{
		endpoint: VclObjectList;
		isEnabled: boolean;
		otherAttributes: VclMap;
		tunnel: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclGatewayIpsecVpnTunnel
	{
		description: String;
		encryptionProtocol: String;
		errorDetails: String;
		ipsecVpnPeer: VclAbstractObject;
		isEnabled: boolean;
		isOperational: boolean;
		localId: String;
		localIpAddress: String;
		localSubnet: VclObjectList;
		mtu: Integer;
		name: String;
		otherAttributes: VclMap;
		peerId: String;
		peerIpAddress: String;
		peerSubnet: VclObjectList;
		sharedSecret: String;
		sharedSecretEncrypted: boolean;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclGatewayNatRule
	{
		icmpSubType: String;
		interface: VclReference;
		originalIp: String;
		originalPort: String;
		otherAttributes: VclMap;
		protocol: String;
		translatedIp: String;
		translatedPort: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclGatewayParams
	{
		configuration: VclGatewayConfiguration;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		status: Integer;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclGeneralSettings
	{
		absoluteSessionTimeoutMinutes: int;
		activityLogDisplayDays: int;
		activityLogKeepDays: int;
		allowOverlappingExtNets: boolean;
		chargebackEventsKeepDays: int;
		chargebackTablesCleanupJobTimeInSeconds: int;
		consoleProxyExternalAddress: String;
		elasticAllocationPool: boolean;
		hostCheckDelayInSeconds: int;
		hostCheckTimeoutSeconds: int;
		href: String;
		installationId: Integer;
		ipReservationTimeoutSeconds: int;
		loginNameOnly: boolean;
		otherAttributes: VclMap;
		prePopDefaultName: boolean;
		quarantineEnabled: boolean;
		quarantineResponseTimeoutSeconds: int;
		restApiBaseUri: String;
		sessionTimeoutMinutes: int;
		showStackTraces: boolean;
		syncIntervalInHours: long;
		syncStartDate: VclXMLGregorianCalendar;
		syslogServerSettings: VclSyslogServerSettings;
		systemExternalAddress: String;
		transferSessionTimeoutSeconds: int;
		type: String;
		vCloudExtension: VclObjectList;
		vcTruststoreContents: byte[];
		vcTruststorePassword: String;
		vcTruststoreType: String;
		verifyVcCertificates: boolean;
		verifyVsmCertificates: boolean;
		vmrcVersion: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclGregorianCalendar
	{

		add(field?: int, amount?: int): String;
		after(when?: Object): boolean;
		before(when?: Object): boolean;
		clear(): void;
		clearField(field?: int): void;
		clone(): VclGregorianCalendar;
		compareTo(anotherCalendar?: VclGregorianCalendar): int;
		equals(obj?: Object): boolean;
		get(field?: int): int;
		getActualMaximum(field?: int): int;
		getActualMinimum(field?: int): int;
		getAvailableLocales(): Locale[];
		getDisplayName(field?: int, style?: int, locale?: Locale): String;
		getFirstDayOfWeek(): int;
		getGreatestMinimum(field?: int): int;
		getGregorianChange(): Date;
		getLeastMaximum(field?: int): int;
		getMaximum(field?: int): int;
		getMinimalDaysInFirstWeek(): int;
		getMinimum(field?: int): int;
		getTime(): Date;
		getTimeInMillis(): long;
		getTimeZone(field?: int): TimeZone;
		isLeapYear(year?: int): boolean;
		isLenient(): boolean;
		isSet(field?: int): boolean;
		roll(field?: int, up?: boolean): void;
		rollAmount(field?: int, amount?: int): void;
		setFirstDayOfWeek(value?: int): void;
		setGregorianChange(date?: Date): void;
		setLenient(lenient?: boolean): void;
		setMinimalDaysInFirstWeek(value?: int): void;
		setTime(date?: Date): void;
		setTimeInMillis(millis?: long): void;
		setTimeZone(zone?: TimeZone): void;
		toString(): String;
	}

	declare const VclGregorianCalendar: VclGregorianCalendar;

	interface VclGroup
	{
		description: String;
		href: String;
		id: String;
		name: String;
		nameInSource: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminOrganization;
		providerType: String;
		role: VclReference;
		tasks: VclTasksInProgress;
		type: String;
		usersList: VclUsersList;
		readonly vCloudExtension: VclObjectList;

		erase(): void;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		getUsers(): VclUser[];
		toXml(): String;
		update(): VclGroup;
	}

	interface VclGroupConstructor {
		new(value?:any): VclGroup;
		readonly prototype: VclGroup;
	}

	declare const VclGroup: VclGroupConstructor;

	declare class VclGroupParams
	{
		description: String;
		href: String;
		id: String;
		name: String;
		nameInSource: String;
		operationKey: String;
		otherAttributes: VclMap;
		providerType: String;
		role: VclReference;
		type: String;
		usersList: VclUsersList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclGroupsList
	{
		groupReference: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclGuestCustomizationSection
	{
		adminAutoLogonCount: Integer;
		adminAutoLogonEnabled: boolean;
		adminPassword: String;
		adminPasswordAuto: boolean;
		adminPasswordEnabled: boolean;
		changeSid: boolean;
		computerName: String;
		customizationScript: String;
		domainName: String;
		domainUserName: String;
		domainUserPassword: String;
		enabled: boolean;
		href: String;
		info: VclMsg;
		joinDomainEnabled: boolean;
		machineObjectOU: String;
		otherAttributes: VclMap;
		required: boolean;
		resetPasswordRequired: boolean;
		type: String;
		useOrgSettings: boolean;
		virtualMachineId: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclGuestOSType
	{
		ASIANUX3_64GUEST: VclGuestOSType;
		ASIANUX3GUEST: VclGuestOSType;
		ASIANUX4_64GUEST: VclGuestOSType;
		ASIANUX4GUEST: VclGuestOSType;
		CENTOS64GUEST: VclGuestOSType;
		CENTOSGUEST: VclGuestOSType;
		DEBIAN4_64GUEST: VclGuestOSType;
		DEBIAN4GUEST: VclGuestOSType;
		DEBIAN5_64GUEST: VclGuestOSType;
		DEBIAN5GUEST: VclGuestOSType;
		DEBIAN6_64GUEST: VclGuestOSType;
		DEBIAN6GUEST: VclGuestOSType;
		readonly description: String;
		DOSGUEST: VclGuestOSType;
		ECOMSTATION2GUEST: VclGuestOSType;
		ECOMSTATIONGUEST: VclGuestOSType;
		FREEBSD64GUEST: VclGuestOSType;
		FREEBSDGUEST: VclGuestOSType;
		NETWARE5GUEST: VclGuestOSType;
		NETWARE6GUEST: VclGuestOSType;
		OESGUEST: VclGuestOSType;
		OPENSERVER5GUEST: VclGuestOSType;
		OPENSERVER6GUEST: VclGuestOSType;
		ORACLELINUX64GUEST: VclGuestOSType;
		ORACLELINUXGUEST: VclGuestOSType;
		OS2GUEST: VclGuestOSType;
		OTHER24XLINUX64GUEST: VclGuestOSType;
		OTHER24XLINUXGUEST: VclGuestOSType;
		OTHER26XLINUX64GUEST: VclGuestOSType;
		OTHER26XLINUXGUEST: VclGuestOSType;
		OTHERGUEST: VclGuestOSType;
		OTHERGUEST64: VclGuestOSType;
		OTHERLINUX64GUEST: VclGuestOSType;
		OTHERLINUXGUEST: VclGuestOSType;
		RHEL2GUEST: VclGuestOSType;
		RHEL3_64GUEST: VclGuestOSType;
		RHEL3GUEST: VclGuestOSType;
		RHEL4_64GUEST: VclGuestOSType;
		RHEL4GUEST: VclGuestOSType;
		RHEL5_64GUEST: VclGuestOSType;
		RHEL5GUEST: VclGuestOSType;
		RHEL6_64GUEST: VclGuestOSType;
		RHEL6GUEST: VclGuestOSType;
		SLES10_64GUEST: VclGuestOSType;
		SLES10GUEST: VclGuestOSType;
		SLES11_64GUEST: VclGuestOSType;
		SLES11GUEST: VclGuestOSType;
		SLES64GUEST: VclGuestOSType;
		SLESGUEST: VclGuestOSType;
		SOLARIS10_64GUEST: VclGuestOSType;
		SOLARIS10GUEST: VclGuestOSType;
		SOLARIS11_64GUEST: VclGuestOSType;
		SOLARIS8GUEST: VclGuestOSType;
		SOLARIS9GUEST: VclGuestOSType;
		UBUNTU64GUEST: VclGuestOSType;
		UBUNTUGUEST: VclGuestOSType;
		UNIXWARE7GUEST: VclGuestOSType;
		readonly value: String;
		values: String[];
		WIN2000ADVSERVGUEST: VclGuestOSType;
		WIN2000PROGUEST: VclGuestOSType;
		WIN2000SERVGUEST: VclGuestOSType;
		WIN31GUEST: VclGuestOSType;
		WIN95GUEST: VclGuestOSType;
		WIN98GUEST: VclGuestOSType;
		WINDOWS7_64GUEST: VclGuestOSType;
		WINDOWS7GUEST: VclGuestOSType;
		WINDOWS7SERVER64GUEST: VclGuestOSType;
		WINLONGHORN64GUEST: VclGuestOSType;
		WINLONGHORNGUEST: VclGuestOSType;
		WINNETBUSINESSGUEST: VclGuestOSType;
		WINNETDATACENTER64GUEST: VclGuestOSType;
		WINNETDATACENTERGUEST: VclGuestOSType;
		WINNETENTERPRISE64GUEST: VclGuestOSType;
		WINNETENTERPRISEGUEST: VclGuestOSType;
		WINNETSTANDARD64GUEST: VclGuestOSType;
		WINNETSTANDARDGUEST: VclGuestOSType;
		WINNETWEBGUEST: VclGuestOSType;
		WINNTGUEST: VclGuestOSType;
		WINVISTA64GUEST: VclGuestOSType;
		WINVISTAGUEST: VclGuestOSType;
		WINXPPRO64GUEST: VclGuestOSType;
		WINXPPROGUEST: VclGuestOSType;

		getObject(value?: String): VclGuestOSType;
	}

	declare const VclGuestOSType: VclGuestOSType;

	declare class VclHardDiskAdapterReference
	{
		ref: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclHistoricUsage
	{
		href: String;
		metricSeries: VclObjectList;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclHistoricUsageSpec
	{
		absoluteEndTime: VclAbsoluteTime;
		absoluteStartTime: VclAbsoluteTime;
		metricPattern: VclList;
		relativeEndTime: VclRelativeTime;
		relativeStartTime: VclRelativeTime;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclHost
	{
		connectionTimeout: int;
		enabled: boolean;
		id: String;
		internalId: String;
		maxConnections: int;
		organization: String;
		samlTokenCallbackName: String;
		sessionMode: VclHostSessionMode;
		url: String;
		useSamlAuthentication: boolean;

		delete(url?: String): String;
		get(url?: String): String;
		getApiVersion(): String;
		getEntityById(finderType?: String, id?: String): Object;
		getEntityByReference(finderType?: String, reference?: VclReference): Object;
		getOrganizations(): VclOrganization[];
		getQueryService(): VclQueryService;
		getServices(): VclService[];
		getSocketTimeout(): int;
		getUsername(): String;
		login(): void;
		logout(): void;
		post(url?: String, content?: String, contentType?: String, charset?: String): String;
		put(url?: String, content?: String, contentType?: String, charset?: String): String;
		setPassword(password?: String): void;
		setSamlTokenCallback(callback?: Action): void;
		setSocketTimeout(socketTimeout?: int): void;
		setUsername(username?: String): void;
		toAdminObject(): Admin;
		updateInternalState(): void;
		validateApiVersion(selectedApiVersion?: String): String;
		wrapReference(finderType?: String, reference?: VclReference): Object;
	}

	declare const VclHost: VclHost;

	interface VclHostAdmin
	{

		addAdminOrg(params?: VclAdminOrgParams): VclAdminOrganization;
		addRole(params?: VclRoleParams): VclRole;
		getAdminOrganizations(): VclAdminOrganization[];
		getAdminQueryService(): VclAdminQueryService;
		getContainedObjects(): Object[];
		getExternalNetworks(): VclExternalNetwork[];
		getProviderVdcs(): VclProviderVdc[];
		getRights(): VclRight[];
		getRoles(): VclRole[];
		toAdminExtensionObject(): VclAdminExtension;
		toUserObject(): VclHost;
		updateInternalState(): void;
	}

	interface VclHostAdminConstructor {
		new(value?:any): VclHostAdmin;
		readonly prototype: VclHostAdmin;
	}

	declare const VclHostAdmin: VclHostAdminConstructor;

	interface VclHostManager
	{

		addOrUpdateHosts(hosts?: VclHost[], failOnAddDuplicated?: boolean): void;
		createHost(): VclHost;
		getHostByInternalId(id?: String): VclHost;
		getHostByUrl(url?: String, username?: String, organization?: String): VclHost;
		getHostList(): VclHost[];
		getVersion(): String;
		removeHosts(hosts?: VclHost[]): void;
	}

	declare const VclHostManager: VclHostManager;

	declare class VclHostObjectRef
	{
		moRef: String;
		password: String;
		username: String;
		vimObjectType: String;
		vimServerRef: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclHostObjectRefs
	{
		hostObjectRef: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclHostSessionMode
	{
		PER_USER_SESSION: VclHostSessionMode;
		SHARED_SESSION: VclHostSessionMode;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclHostSessionMode;
	}

	declare const VclHostSessionMode: VclHostSessionMode;

	declare class VclIcon
	{
		fileRef: String;
		height: Integer;
		mimeType: String;
		otherAttributes: VclMap;
		width: Integer;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclIdentityProviderSourceType
	{
		INTEGRATED: VclIdentityProviderSourceType;
		SAML: VclIdentityProviderSourceType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclIdentityProviderSourceType;
	}

	declare const VclIdentityProviderSourceType: VclIdentityProviderSourceType;

	interface VclImageType
	{
		FLOPPY: VclImageType;
		ISO: VclImageType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclImageType;
	}

	declare const VclImageType: VclImageType;

	declare class VclImportMediaParams
	{
		catalog: VclReference;
		datastoreMoRef: String;
		description: String;
		name: String;
		otherAttributes: VclMap;
		sourceMove: boolean;
		sourcePath: String;
		vCloudExtension: VclObjectList;
		vdc: VclReference;
		vdcStorageProfile: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclImportVmAsVAppParams
	{
		computerName: String;
		deploy: boolean;
		description: String;
		instantiationParams: VclInstantiationParams;
		name: String;
		otherAttributes: VclMap;
		powerOn: boolean;
		sourceMove: boolean;
		vAppParent: VclReference;
		vAppScopedLocalId: String;
		vCloudExtension: VclObjectList;
		vdc: VclReference;
		vdcStorageProfile: VclReference;
		vmMoRef: String;
		vmName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclImportVmAsVAppTemplateParams
	{
		catalog: VclReference;
		computerName: String;
		description: String;
		goldMaster: boolean;
		name: String;
		otherAttributes: VclMap;
		sourceMove: boolean;
		vAppScopedLocalId: String;
		vCloudExtension: VclObjectList;
		vdc: VclReference;
		vdcStorageProfile: VclReference;
		vmMoRef: String;
		vmName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclImportVmIntoExistingVAppParams
	{
		computerName: String;
		otherAttributes: VclMap;
		sourceMove: boolean;
		vApp: VclReference;
		vAppScopedLocalId: String;
		vCloudExtension: VclObjectList;
		vdcStorageProfile: VclReference;
		vmDescription: String;
		vmMoRef: String;
		vmName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclInstallSection
	{
		info: VclMsg;
		initialBootStopDelay: int;
		otherAttributes: VclMap;
		required: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclInstantiateOvfParams
	{
		allEULAsAccepted: boolean;
		deploy: boolean;
		description: String;
		instantiateOvfProperty: VclObjectList;
		instantiateVmParams: VclObjectList;
		instantiationParams: VclInstantiationParams;
		name: String;
		networkMapping: VclObjectList;
		otherAttributes: VclMap;
		powerOn: boolean;
		transferFormat: String;
		vAppParent: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclInstantiateOvfProperty
	{
		classId: String;
		instanceId: String;
		key: String;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclInstantiateVAppParams
	{
		deploy: boolean;
		description: String;
		instantiationParams: VclInstantiationParams;
		isSourceDelete: boolean;
		linkedClone: boolean;
		name: String;
		otherAttributes: VclMap;
		powerOn: boolean;
		source: VclReference;
		sourcedVmInstantiationParams: VclObjectList;
		vAppParent: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclInstantiateVAppTemplateParams
	{
		allEULAsAccepted: boolean;
		deploy: boolean;
		description: String;
		instantiationParams: VclInstantiationParams;
		isSourceDelete: boolean;
		linkedClone: boolean;
		name: String;
		otherAttributes: VclMap;
		powerOn: boolean;
		source: VclReference;
		sourcedVmInstantiationParams: VclObjectList;
		vAppParent: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclInstantiateVdcTemplateParams
	{
		description: String;
		name: String;
		otherAttributes: VclMap;
		source: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclInstantiateVmHardwareCustomizationParams
	{
		coresPerSocket: Integer;
		disk: VclObjectList;
		memorySize: long;
		numberOfCpus: Integer;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclInstantiateVmParams
	{
		computerName: String;
		hardwareCustomization: VclInstantiateVmHardwareCustomizationParams;
		id: String;
		networkConnectionSection: VclNetworkConnectionSection;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;
		vdcStorageProfile: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclInstantiationParams
	{
		otherAttributes: VclMap;
		section: VclAbstractObjectSet;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclIpAddressAllocationModeType
	{
		DHCP: VclIpAddressAllocationModeType;
		MANUAL: VclIpAddressAllocationModeType;
		NONE: VclIpAddressAllocationModeType;
		POOL: VclIpAddressAllocationModeType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclIpAddressAllocationModeType;
	}

	declare const VclIpAddressAllocationModeType: VclIpAddressAllocationModeType;

	declare class VclIpAddresses
	{
		ipAddress: VclList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclIpAssignmentSection
	{
		info: VclMsg;
		otherAttributes: VclMap;
		protocols: String;
		required: boolean;
		schemes: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclIPPoolTrinity
	{
		allowHugeRange: boolean;
		autoConfigureDNS: boolean;
		defaultGateway: String;
		dhcpOptions: VclDhcpOptionsParams;
		dnsType: String;
		domainName: String;
		ipRange: String;
		leaseTime: String;
		nextServer: String;
		readonly obtainEquivalenceKey: String;
		poolId: String;
		primaryNameServer: String;
		secondaryNameServer: String;
		subnetMask: String;

		deleteIpPool(): void;
		getDefaultLeaseTime(): Integer;
		getEdgeInterfaceNames(): String[];
		getHighIpAddress(): String;
		getLowIpAddress(): String;
		getMaxLeaseTime(): Integer;
		getSelectedEdgeInterfaceName(): String;
		isAdvanced(): boolean;
		isEnabled(): boolean;
		updateIpPool(params?: VclIPPoolTrinityParams): VclIPPoolTrinity;
		updateIpPoolForLegacyGateway(params?: VclDhcpPoolService, networkName?: String): VclTask;
	}

	declare const VclIPPoolTrinity: VclIPPoolTrinity;

	declare class VclIPPoolTrinityParams
	{
		allowHugeRange: boolean;
		autoConfigureDNS: boolean;
		defaultGateway: String;
		dhcpOptions: VclDhcpOptionsParams;
		dnsType: String;
		domainName: String;
		ipRange: String;
		leaseTime: String;
		nextServer: String;
		obtainEquivalenceKey: String;
		primaryNameServer: String;
		secondaryNameServer: String;
		subnetMask: String;

		constructor();
	}

	declare class VclIpRange
	{
		endAddress: String;
		otherAttributes: VclMap;
		startAddress: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclIpRanges
	{
		ipRange: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclIpScope
	{
		allocatedIpAddresses: VclIpAddresses;
		dns1: String;
		dns2: String;
		dnsSuffix: String;
		gateway: String;
		ipRanges: VclIpRanges;
		isEnabled: boolean;
		isInherited: boolean;
		netmask: String;
		otherAttributes: VclMap;
		subAllocations: VclSubAllocations;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclIpScopes
	{
		ipScope: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclIpsecVpnEncryptionProtocolType
	{
		AES: VclIpsecVpnEncryptionProtocolType;
		AES256: VclIpsecVpnEncryptionProtocolType;
		TRIPLEDES: VclIpsecVpnEncryptionProtocolType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclIpsecVpnEncryptionProtocolType;
	}

	declare const VclIpsecVpnEncryptionProtocolType: VclIpsecVpnEncryptionProtocolType;

	declare class VclIpsecVpnLocalPeer
	{
		id: String;
		name: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclIpsecVpnRemotePeer
	{
		id: String;
		name: String;
		otherAttributes: VclMap;
		vcdOrganization: String;
		vcdUrl: String;
		vcdUsername: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclIpsecVpnService
	{
		externalIpAddress: String;
		ipsecVpnTunnel: VclObjectList;
		isEnabled: boolean;
		otherAttributes: VclMap;
		publicIpAddress: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclIpsecVpnSubnet
	{
		gateway: String;
		name: String;
		netmask: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclIpsecVpnThirdPartyPeer
	{
		otherAttributes: VclMap;
		peerId: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclIpsecVpnTunnel
	{
		description: String;
		encryptionProtocol: String;
		errorDetails: String;
		ipsecVpnPeer: VclAbstractObject;
		isEnabled: boolean;
		isOperational: boolean;
		mtu: int;
		name: String;
		otherAttributes: VclMap;
		peerIpAddress: String;
		peerNetworkAddress: String;
		peerNetworkMask: String;
		sharedSecret: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclItem
	{
		id: String;
		order: int;
		otherAttributes: VclMap;
		startAction: String;
		startDelay: int;
		stopAction: String;
		stopDelay: int;
		waitingForGuest: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclKerberosSettings
	{
		allowLowerCaseRealms: boolean;
		href: String;
		otherAttributes: VclMap;
		realm: VclObjectList;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclKeystoreUpdateParams
	{
		fileSize: long;
		otherAttributes: VclMap;
		password: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclKeystoreUploadSocket
	{
		otherAttributes: VclMap;
		task: VclTaskParams;
		uploadLocation: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclKeyValueParams
	{
		key: String;
		value: String;

		constructor();
	}

	interface VclLayer4ProtocolType
	{
		TCP: VclLayer4ProtocolType;
		TCP_UDP: VclLayer4ProtocolType;
		UDP: VclLayer4ProtocolType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclLayer4ProtocolType;
	}

	declare const VclLayer4ProtocolType: VclLayer4ProtocolType;

	declare class VclLBPersistence
	{
		cookieMode: String;
		cookieName: String;
		method: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLBPoolHealthCheck
	{
		healthThreshold: String;
		interval: String;
		mode: String;
		otherAttributes: VclMap;
		timeout: String;
		unhealthThreshold: String;
		uri: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLBPoolMember
	{
		ipAddress: String;
		otherAttributes: VclMap;
		servicePort: VclObjectList;
		vCloudExtension: VclObjectList;
		weight: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLBPoolServicePort
	{
		algorithm: String;
		healthCheck: VclObjectList;
		healthCheckPort: String;
		isEnabled: boolean;
		otherAttributes: VclMap;
		port: String;
		protocol: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLBVirtualServerServiceProfile
	{
		isEnabled: boolean;
		otherAttributes: VclMap;
		persistence: VclLBPersistence;
		port: String;
		protocol: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclLdapAuthenticationMechanismType
	{
		KERBEROS: VclLdapAuthenticationMechanismType;
		MD5DIGEST: VclLdapAuthenticationMechanismType;
		NTLM: VclLdapAuthenticationMechanismType;
		SIMPLE: VclLdapAuthenticationMechanismType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclLdapAuthenticationMechanismType;
	}

	declare const VclLdapAuthenticationMechanismType: VclLdapAuthenticationMechanismType;

	interface VclLdapConnectorType
	{
		ACTIVE_DIRECTORY: VclLdapConnectorType;
		OPEN_LDAP: VclLdapConnectorType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclLdapConnectorType;
	}

	declare const VclLdapConnectorType: VclLdapConnectorType;

	declare class VclLdapGroupAttributes
	{
		backLinkIdentifier: String;
		groupName: String;
		href: String;
		membership: String;
		membershipIdentifier: String;
		objectClass: String;
		objectIdentifier: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclLdapModeType
	{
		CUSTOM: VclLdapModeType;
		NONE: VclLdapModeType;
		SYSTEM: VclLdapModeType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclLdapModeType;
	}

	declare const VclLdapModeType: VclLdapModeType;

	declare class VclLdapSettings
	{
		authenticationMechanism: String;
		connectorType: String;
		groupAttributes: VclLdapGroupAttributes;
		groupSearchBase: String;
		hostName: String;
		href: String;
		isGroupSearchBaseEnabled: boolean;
		isSsl: boolean;
		isSslAcceptAll: boolean;
		maxResults: Integer;
		maxUserGroups: Integer;
		otherAttributes: VclMap;
		pagedSearchDisabled: boolean;
		pageSize: Integer;
		password: String;
		port: int;
		realm: String;
		searchBase: String;
		type: String;
		useExternalKerberos: boolean;
		userAttributes: VclLdapUserAttributes;
		userName: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLdapUserAttributes
	{
		email: String;
		fullName: String;
		givenName: String;
		groupBackLinkIdentifier: String;
		groupMembershipIdentifier: String;
		href: String;
		objectClass: String;
		objectIdentifier: String;
		otherAttributes: VclMap;
		surname: String;
		telephone: String;
		type: String;
		userName: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLeaseSettingsSection
	{
		deploymentLeaseExpiration: VclXMLGregorianCalendar;
		deploymentLeaseInSeconds: Integer;
		href: String;
		info: VclMsg;
		otherAttributes: VclMap;
		required: boolean;
		storageLeaseExpiration: VclXMLGregorianCalendar;
		storageLeaseInSeconds: Integer;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLevel
	{
		eax: String;
		ebx: String;
		ecx: String;
		edx: String;
		level: String;
		otherAttributes: VclMap;
		vendor: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLicense
	{
		expirationDate: VclXMLGregorianCalendar;
		expired: boolean;
		href: String;
		licensedVMCount: Integer;
		licenseMetricsInfo: VclLicenseMetricsInfo;
		otherAttributes: VclMap;
		persisted: boolean;
		publishingToRemoteSitesFeature: boolean;
		serialNumber: String;
		subscribingToRemoteSitesFeature: boolean;
		type: String;
		validSerial: boolean;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLicenseMetricsInfo
	{
		availablePhysicalMemory: long;
		href: String;
		lastUpdate: VclXMLGregorianCalendar;
		otherAttributes: VclMap;
		physicalMemoryUsed: long;
		physicalSocketCount: Integer;
		publishingToRemoteSites: boolean;
		runningVMs: long;
		subscribingToRemoteSites: boolean;
		type: String;
		vCloudExtension: VclObjectList;
		vCPU: long;
		vRAM: long;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLicensingManagedServer
	{
		cpu: int;
		memoryInstalled: int;
		vimObjectRef: VclVimObjectRef;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclLicensingReport
	{
		href: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminExtension;
		productSerialNumber: String;
		reportDate: VclXMLGregorianCalendar;
		readonly sample: VclObjectList;
		signature: String;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
	}

	declare const VclLicensingReport: VclLicensingReport;

	declare class VclLicensingReportList
	{
		report: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLicensingReportSample
	{
		managedServerMetrics: VclManagedServerMetrics;
		observationDate: VclXMLGregorianCalendar;
		virtualMachineMetrics: VclVirtualMachineMetrics;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLicensingVirtualMachine
	{
		cpu: int;
		memory: int;
		vimObjectRef: VclVimObjectRef;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLink
	{
		href: String;
		id: String;
		name: String;
		otherAttributes: VclMap;
		rel: String;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclList
	{

		add(object?: Object): void;
		clear(): void;
		enumerate(): Object[];
		find(type?: Object): Object[];
		indexOf(element?: Object): int;
		remove(index?: int): void;
		size(): int;
	}

	declare const VclList: VclList;

	declare class VclLoadBalancerPool
	{
		description: String;
		errorDetails: String;
		id: String;
		member: VclObjectList;
		name: String;
		operational: boolean;
		otherAttributes: VclMap;
		servicePort: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLoadBalancerService
	{
		isEnabled: boolean;
		otherAttributes: VclMap;
		pool: VclObjectList;
		vCloudExtension: VclObjectList;
		virtualServer: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLoadBalancerVirtualServer
	{
		description: String;
		interface: VclReference;
		ipAddress: String;
		isEnabled: boolean;
		loadBalancerTemplates: VclObjectList;
		logging: boolean;
		name: String;
		otherAttributes: VclMap;
		pool: String;
		serviceProfile: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLocalityParams
	{
		otherAttributes: VclMap;
		resourceEntity: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLookupServiceParams
	{
		href: String;
		lookupServiceUrl: String;
		otherAttributes: VclMap;
		password: String;
		type: String;
		userName: String;
		vCDUrl: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclLookupServiceSettings
	{
		href: String;
		lookupServiceUrl: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclManagedServerMetrics
	{
		managedServer: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclMap
	{
		keys: Object[];

		clear(): void;
		get(key?: Object): Object;
		put(key?: Object, value?: Object): void;
		remove(key?: Object): Object;
	}

	declare const VclMap: VclMap;

	declare class VclMappingBehavior
	{
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclMedia
	{
		description: String;
		files: VclFilesList;
		href: String;
		id: String;
		imageType: String;
		isPartOfCatalogItem: boolean;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		owner: VclOwner;
		parent: VclVdc;
		size: long;
		status: Integer;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;
		vdcStorageProfile: VclReference;

		erase(): VclTask;
		getCatalogItem(): VclCatalogItem;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		toXml(): String;
		update(): VclTask;
		updateInternalState(): void;
		uploadFile(filename?: String, alias?: String): void;
		uploadFileChunk(filename?: String, alias?: String, startByte?: long, endByte?: long): void;
	}

	declare const VclMedia: VclMedia;

	declare class VclMediaInsertOrEjectParams
	{
		media: VclReference;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclMediaMapping
	{
		complexTypeName: String;
		mediaType: String;
		otherAttributes: VclMap;
		schemaLocation: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclMetadata
	{

		deleteTypedEntry(key?: String): VclTask;
		getTypedEntries(): VclObjectList;
		updateMetadataTypedEntries(metadataEntries?: VclObjectList): VclTask;
		updateTypedEntry(value?: VclMetadataEntry): VclTask;
	}

	declare const VclMetadata: VclMetadata;

	declare class VclMetadataBooleanValue
	{
		value: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclMetadataDateTimeValue
	{
		value: VclXMLGregorianCalendar;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclMetadataDomain
	{
		SYSTEM: VclMetadataDomain;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclMetadataDomain;
	}

	declare const VclMetadataDomain: VclMetadataDomain;

	declare class VclMetadataDomainTag
	{
		value: String;
		visibility: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclMetadataDomainVisibility
	{
		PRIVATE: VclMetadataDomainVisibility;
		READONLY: VclMetadataDomainVisibility;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclMetadataDomainVisibility;
	}

	declare const VclMetadataDomainVisibility: VclMetadataDomainVisibility;

	declare class VclMetaDataEntries
	{
		href: String;
		metadataEntry: VclObjectList;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclMetadataEntry
	{
		domain: VclMetadataDomainTag;
		href: String;
		key: String;
		otherAttributes: VclMap;
		type: String;
		typedValue: VclAbstractValueObject;
		value: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclMetadataExpressionType
	{
		EQUALS: VclMetadataExpressionType;
		GREATER_THAN: VclMetadataExpressionType;
		GREATER_THAN_OR_EQUAL: VclMetadataExpressionType;
		LESSER_THAN: VclMetadataExpressionType;
		LESSER_THAN_OR_EQUAL: VclMetadataExpressionType;
		NOT_EQUALS: VclMetadataExpressionType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclMetadataExpressionType;
	}

	declare const VclMetadataExpressionType: VclMetadataExpressionType;

	declare class VclMetadataNumberValue
	{
		value: long;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclMetadataStringValue
	{
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclMigrateParams
	{
		resourcePoolRef: VclVimObjectRef;
		vmRef: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclMiscObjectFactory
	{

		convertToGregorianCalendar(gregorianXmlCalendar?: VclXMLGregorianCalendar): VclGregorianCalendar;
		convertToXmlGregorianCalendar(gregorianCalendar?: VclGregorianCalendar): VclXMLGregorianCalendar;
		createBigInteger(val?: String): VclBigInteger;
		createDuration(durationInMilliSeconds?: long): VclDuration;
		createGregorianCalendar(): VclGregorianCalendar;
		createQName(localPart?: String, namespaceURI?: String, prefix?: String): VclQName;
		createXmlGregorianCalendar(year?: int, month?: int, day?: int, hour?: int, minute?: int, second?: int, millisecond?: int, timezone?: int): VclXMLGregorianCalendar;
		generateUuid(): String;
		xmlGregorianCalendarFromString(lexicalRepresentation?: String): VclXMLGregorianCalendar;
	}

	declare const VclMiscObjectFactory: VclMiscObjectFactory;

	declare class VclMksTicket
	{
		host: String;
		otherAttributes: VclMap;
		port: int;
		ticket: String;
		vCloudExtension: VclObjectList;
		vmx: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclMsg
	{
		msgid: String;
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNatConfigParams
	{
		enabled: boolean;
		obtainEquivalenceKey: String;
		rules: VclNatRulesParams;
		template: String;
		version: long;

		constructor();
	}

	interface VclNatMappingModeType
	{
		AUTOMATIC: VclNatMappingModeType;
		MANUAL: VclNatMappingModeType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclNatMappingModeType;
	}

	declare const VclNatMappingModeType: VclNatMappingModeType;

	declare class VclNatOneToOneBasicRule
	{
		externalIpAddress: String;
		internalIpAddress: String;
		mappingMode: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNatOneToOneVmRule
	{
		externalIpAddress: String;
		mappingMode: String;
		otherAttributes: VclMap;
		vAppScopedVmId: String;
		vCloudExtension: VclObjectList;
		vmNicId: int;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclNatPolicyType
	{
		ALLOWTRAFFIC: VclNatPolicyType;
		ALLOWTRAFFICIN: VclNatPolicyType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclNatPolicyType;
	}

	declare const VclNatPolicyType: VclNatPolicyType;

	declare class VclNatPortForwardingRule
	{
		externalIpAddress: String;
		externalPort: int;
		internalIpAddress: String;
		internalPort: int;
		otherAttributes: VclMap;
		protocol: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNatRule
	{
		description: String;
		gatewayNatRule: VclGatewayNatRule;
		id: Integer;
		isEnabled: boolean;
		oneToOneBasicRule: VclNatOneToOneBasicRule;
		oneToOneVmRule: VclNatOneToOneVmRule;
		otherAttributes: VclMap;
		portForwardingRule: VclNatPortForwardingRule;
		ruleType: String;
		vCloudExtension: VclObjectList;
		vmRule: VclNatVmRule;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNatRuleParams
	{
		action: String;
		description: String;
		enabled: boolean;
		icmpType: String;
		loggingEnabled: boolean;
		obtainEquivalenceKey: String;
		originalAddress: String;
		originalPort: String;
		protocol: String;
		ruleTag: long;
		ruleType: String;
		translatedAddress: String;
		translatedPort: String;
		vnic: String;

		constructor();
	}

	declare class VclNatRulesParams
	{
		natRulesDtos: VclObjectList;
		obtainEquivalenceKey: String;

		constructor();
	}

	declare class VclNatService
	{
		externalIp: String;
		isEnabled: boolean;
		natRule: VclObjectList;
		natType: String;
		otherAttributes: VclMap;
		policy: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclNatTypeType
	{
		IPTRANSLATION: VclNatTypeType;
		PORTFORWARDING: VclNatTypeType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclNatTypeType;
	}

	declare const VclNatTypeType: VclNatTypeType;

	declare class VclNatVmRule
	{
		externalIpAddress: String;
		externalPort: int;
		internalPort: int;
		otherAttributes: VclMap;
		protocol: String;
		vAppScopedVmId: String;
		vCloudExtension: VclObjectList;
		vmNicId: int;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetwork
	{
		description: VclMsg;
		name: String;
		otherAttributes: VclMap;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclNetworkAdapterType
	{
		E1000: VclNetworkAdapterType;
		FLEXIBLE: VclNetworkAdapterType;
		readonly value: String;
		values: String[];
		VLANCE: VclNetworkAdapterType;
		VMXNET: VclNetworkAdapterType;
		VMXNET2: VclNetworkAdapterType;
		VMXNET3: VclNetworkAdapterType;

		getObject(value?: String): VclNetworkAdapterType;
	}

	declare const VclNetworkAdapterType: VclNetworkAdapterType;

	declare class VclNetworkAssignment
	{
		containerNetwork: String;
		innerNetwork: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworkConfigSection
	{
		href: String;
		info: VclMsg;
		networkConfig: VclObjectList;
		otherAttributes: VclMap;
		required: boolean;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworkConfiguration
	{
		backwardCompatibilityMode: boolean;
		features: VclNetworkFeatures;
		fenceMode: String;
		ipScope: VclIpScope;
		ipScopes: VclIpScopes;
		otherAttributes: VclMap;
		parentNetwork: VclReference;
		retainNetInfoAcrossDeployments: boolean;
		routerInfo: VclRouterInfo;
		syslogServerSettings: VclSyslogServerSettings;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworkConnection
	{
		externalIpAddress: String;
		ipAddress: String;
		ipAddressAllocationMode: String;
		isConnected: boolean;
		mACAddress: String;
		needsCustomization: boolean;
		network: String;
		networkConnectionIndex: int;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworkConnectionSection
	{
		href: String;
		info: VclMsg;
		networkConnection: VclObjectList;
		otherAttributes: VclMap;
		primaryNetworkConnectionIndex: Integer;
		required: boolean;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworkFeatures
	{
		networkService: VclAbstractObjectSet;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworkMapping
	{
		source: String;
		target: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworkPool
	{
		description: String;
		files: VclFilesList;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		status: Integer;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworkPoolReferences
	{
		networkPoolReference: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworks
	{
		network: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworkSection
	{
		info: VclMsg;
		network: VclObjectList;
		otherAttributes: VclMap;
		required: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworkSectionNetwork
	{
		description: VclMsg;
		name: String;
		otherAttributes: VclMap;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNetworkServiceInsertion
	{
		category: String;
		categoryType: String;
		id: String;
		name: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;
		vendorTemplates: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNicIpEntry
	{
		destinationNicIp: String;
		sourceNicIp: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNicIpMap
	{
		entry: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNotification
	{
		entityLink: VclObjectList;
		eventId: String;
		operationSuccess: boolean;
		otherAttributes: VclMap;
		timestamp: VclXMLGregorianCalendar;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclNotificationHelper
	{

		constructor();
		getBlockingTaskLink(): VclEntityLink;
		getEntityLink(): VclEntityLink;
		getEntityLinkType(): VclEntityType;
		getMessage(): String;
		getMessageHeader(name?: String): Object;
		getNotification(): VclNotification;
		getNotificationEventType(): VclEventType;
		getOrgLink(): VclEntityLink;
		getTaskOwnerLink(): VclEntityLink;
		getTaskOwnerLinkType(): VclEntityType;
		getUserLink(): VclEntityLink;
		isBlockingTask(): boolean;
		setMessage(message?: String): void;
		setMessageHeader(name?: String, value?: Object): void;
	}

	declare class VclNotificationsSettings
	{
		enableNotifications: boolean;
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclNsxNatRule
	{
		action: String;
		description: String;
		enabled: boolean;
		icmpType: String;
		loggingEnabled: boolean;
		readonly obtainEquivalenceKey: String;
		originalAddress: String;
		originalPort: String;
		protocol: String;
		ruleId: long;
		ruleTag: long;
		ruleType: String;
		translatedAddress: String;
		translatedPort: String;
		vnic: String;

		deleteRule(): void;
		enableLogging(enable?: boolean): void;
		enableNatRule(enable?: boolean): void;
		getEdgeInterfaceNames(): String[];
		getProtocols(): String[];
		isAdvanced(): boolean;
		updateNatRuleLegacy(params?: VclNatRuleParams): VclGateway;
		updateRule(params?: VclNatRuleParams): void;
	}

	declare const VclNsxNatRule: VclNsxNatRule;

	declare class VclNumericRange
	{
		end: int;
		start: int;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclObject
	{

		constructor();
		getValue(type?: Object): Object[];
		setStringValue(qname?: VclQName, value?: String): void;
		setValue(value?: Object): void;
	}

	interface VclObjectList
	{

		add(object?: Object): void;
		clear(): void;
		enumerate(): Object[];
		indexOf(element?: Object): int;
		remove(index?: int): void;
		size(): int;
	}

	declare const VclObjectList: VclObjectList;

	interface VclObjectSet
	{

		add(object?: Object): void;
		clear(): void;
		enumerate(): Object[];
		indexOf(element?: Object): int;
		remove(index?: int): void;
		size(): int;
	}

	declare const VclObjectSet: VclObjectSet;

	declare class VclObjectTypeParams
	{
		name: String;

		constructor();
	}

	declare class VclOperatingSystemFamilyInfo
	{
		name: String;
		operatingSystem: VclObjectList;
		operatingSystemFamilyId: Integer;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclOperatingSystemFamilyType
	{
		LINUX: VclOperatingSystemFamilyType;
		MICROSOFT_WINDOWS: VclOperatingSystemFamilyType;
		OTHER: VclOperatingSystemFamilyType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclOperatingSystemFamilyType;
	}

	declare const VclOperatingSystemFamilyType: VclOperatingSystemFamilyType;

	declare class VclOperatingSystemInfo
	{
		cimOsId: Integer;
		cimVersion: Integer;
		defaultHardDiskAdapterType: VclDefaultHardDiskAdapter;
		internalName: String;
		maximumCpuCount: Integer;
		minimumHardDiskSizeGigabytes: Integer;
		minimumHardwareVersion: Integer;
		minimumMemoryMegabytes: Integer;
		name: String;
		operatingSystemId: Integer;
		otherAttributes: VclMap;
		personalizationAuto: boolean;
		personalizationEnabled: boolean;
		supported: boolean;
		supportedForCreate: boolean;
		supportsMemHotAdd: boolean;
		sysprepPackagingSupported: boolean;
		vCloudExtension: VclObjectList;
		x64: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOperatingSystemSection
	{
		description: VclMsg;
		id: int;
		info: VclMsg;
		otherAttributes: VclMap;
		required: boolean;
		version: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclOperatingSystemType
	{
		APPLE_MAC_OS_X_10_5_32_BIT: VclOperatingSystemType;
		APPLE_MAC_OS_X_10_5_64_BIT: VclOperatingSystemType;
		APPLE_MAC_OS_X_10_6_32_BIT: VclOperatingSystemType;
		APPLE_MAC_OS_X_10_6_64_BIT: VclOperatingSystemType;
		APPLE_MAC_OS_X_10_7_32_BIT: VclOperatingSystemType;
		APPLE_MAC_OS_X_10_7_64_BIT: VclOperatingSystemType;
		ASIANUX_3_32_BIT: VclOperatingSystemType;
		ASIANUX_3_64_BIT: VclOperatingSystemType;
		ASIANUX_4_32_BIT: VclOperatingSystemType;
		ASIANUX_4_64_BIT: VclOperatingSystemType;
		CENTOS_4_5_6_32_BIT: VclOperatingSystemType;
		CENTOS_4_5_6_64_BIT: VclOperatingSystemType;
		DEBIAN_4_32_BIT: VclOperatingSystemType;
		DEBIAN_4_64_BIT: VclOperatingSystemType;
		DEBIAN_5_32_BIT: VclOperatingSystemType;
		DEBIAN_5_64_BIT: VclOperatingSystemType;
		DEBIAN_6_32_BIT: VclOperatingSystemType;
		DEBIAN_6_64_BIT: VclOperatingSystemType;
		FREEBSD_32_BIT: VclOperatingSystemType;
		FREEBSD_64_BIT: VclOperatingSystemType;
		IBM_OS_2: VclOperatingSystemType;
		MICROSOFT_MS_DOS: VclOperatingSystemType;
		NETWARE_5_1: VclOperatingSystemType;
		NETWARE_6_X: VclOperatingSystemType;
		NOVELL_OPEN_ENTERPRISE_SERVER: VclOperatingSystemType;
		ORACLE_LINUX_4_5_6_32_BIT: VclOperatingSystemType;
		ORACLE_LINUX_4_5_6_64_BIT: VclOperatingSystemType;
		ORACLE_SOLARIS_10_32_BIT: VclOperatingSystemType;
		ORACLE_SOLARIS_10_64_BIT: VclOperatingSystemType;
		ORACLE_SOLARIS_11_64_BIT: VclOperatingSystemType;
		OTHER_2_4_X_LINUX_32_BIT: VclOperatingSystemType;
		OTHER_2_4_X_LINUX_64_BIT: VclOperatingSystemType;
		OTHER_2_6_X_LINUX_32_BIT: VclOperatingSystemType;
		OTHER_2_6_X_LINUX_64_BIT: VclOperatingSystemType;
		OTHER_32_BIT: VclOperatingSystemType;
		OTHER_64_BIT: VclOperatingSystemType;
		OTHER_LINUX_32_BIT: VclOperatingSystemType;
		OTHER_LINUX_64_BIT: VclOperatingSystemType;
		RHEL_2_1: VclOperatingSystemType;
		RHEL_3_32_BIT: VclOperatingSystemType;
		RHEL_3_64_BIT: VclOperatingSystemType;
		RHEL_4_32_BIT: VclOperatingSystemType;
		RHEL_4_64_BIT: VclOperatingSystemType;
		RHEL_5_32_BIT: VclOperatingSystemType;
		RHEL_5_64_BIT: VclOperatingSystemType;
		RHEL_6_32_BIT: VclOperatingSystemType;
		RHEL_6_64_BIT: VclOperatingSystemType;
		SCO_OPENSERVER_5: VclOperatingSystemType;
		SCO_OPENSERVER_6: VclOperatingSystemType;
		SCO_UNIXWARE_7: VclOperatingSystemType;
		SERENITY_SYSTEMS_ECOMSTATION_1: VclOperatingSystemType;
		SERENITY_SYSTEMS_ECOMSTATION_2: VclOperatingSystemType;
		SUN_MICROSYSTEMS_SOLARIS_8: VclOperatingSystemType;
		SUN_MICROSYSTEMS_SOLARIS_9: VclOperatingSystemType;
		SUSE_10_32_BIT: VclOperatingSystemType;
		SUSE_10_64_BIT: VclOperatingSystemType;
		SUSE_11_32_BIT: VclOperatingSystemType;
		SUSE_11_64_BIT: VclOperatingSystemType;
		SUSE_8_9_32_BIT: VclOperatingSystemType;
		SUSE_8_9_64_BIT: VclOperatingSystemType;
		UBUNTU_32_BIT: VclOperatingSystemType;
		UBUNTU_64_BIT: VclOperatingSystemType;
		readonly value: String;
		values: String[];
		WINDOWS_2000: VclOperatingSystemType;
		WINDOWS_2000_PROFESSIONAL: VclOperatingSystemType;
		WINDOWS_2000_SERVER: VclOperatingSystemType;
		WINDOWS_3_1: VclOperatingSystemType;
		WINDOWS_7_32_BIT: VclOperatingSystemType;
		WINDOWS_7_64_BIT: VclOperatingSystemType;
		WINDOWS_8_32_BIT: VclOperatingSystemType;
		WINDOWS_8_64_BIT: VclOperatingSystemType;
		WINDOWS_95: VclOperatingSystemType;
		WINDOWS_98: VclOperatingSystemType;
		WINDOWS_NT: VclOperatingSystemType;
		WINDOWS_SERVER_2003_32_BIT: VclOperatingSystemType;
		WINDOWS_SERVER_2003_64_BIT: VclOperatingSystemType;
		WINDOWS_SERVER_2003_DATACENTER_32_BIT: VclOperatingSystemType;
		WINDOWS_SERVER_2003_DATACENTER_64_BIT: VclOperatingSystemType;
		WINDOWS_SERVER_2003_STANDARD_32_BIT: VclOperatingSystemType;
		WINDOWS_SERVER_2003_STANDARD_64_BIT: VclOperatingSystemType;
		WINDOWS_SERVER_2003_WEB_32_BIT: VclOperatingSystemType;
		WINDOWS_SERVER_2008_32_BIT: VclOperatingSystemType;
		WINDOWS_SERVER_2008_64_BIT: VclOperatingSystemType;
		WINDOWS_SERVER_2008_R2_64_BIT: VclOperatingSystemType;
		WINDOWS_SERVER_8_64_BIT: VclOperatingSystemType;
		WINDOWS_SMALL_BUSINESS_SERVER_2003: VclOperatingSystemType;
		WINDOWS_VISTA_32_BIT: VclOperatingSystemType;
		WINDOWS_VISTA_64_BIT: VclOperatingSystemType;
		WINDOWS_XP_PROFESSIONAL_32_BIT: VclOperatingSystemType;
		WINDOWS_XP_PROFESSIONAL_64_BIT: VclOperatingSystemType;

		getObject(value?: String): VclOperatingSystemType;
	}

	declare const VclOperatingSystemType: VclOperatingSystemType;

	interface VclOrganization
	{
		description: String;
		fullName: String;
		href: String;
		id: String;
		isEnabled: boolean;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclHost;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		createTask(params?: VclTaskParams): VclTask;
		getCatalogControlAccessByReference(ref?: VclReference): VclControlAccessParams;
		getCatalogs(): VclCatalog[];
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		getVdcs(): VclVdc[];
		instantiateVdcTemplate(instantiateVdcTemplateParams?: VclInstantiateVdcTemplateParams): VclTask;
		toAdminObject(): VclAdminOrganization;
		toXml(): String;
		updateCatalogControlAccessByReference(ref?: VclReference, params?: VclControlAccessParams): VclControlAccessParams;
		updateInternalState(): void;
	}

	declare const VclOrganization: VclOrganization;

	declare class VclOrganizationReference
	{
		href: String;
		id: String;
		name: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrganizationReferences
	{
		organizationReference: VclObjectList;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrganizationResourcePoolSet
	{
		href: String;
		otherAttributes: VclMap;
		resourcePoolVimObjectRef: VclObjectList;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgAssociation
	{
		href: String;
		otherAttributes: VclMap;
		status: String;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgAssociations
	{
		href: String;
		orgAssociationMember: VclObjectList;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgEmailSettings
	{
		alertEmailTo: VclList;
		defaultSubjectPrefix: String;
		fromEmailAddress: String;
		href: String;
		isAlertEmailToAllAdmins: boolean;
		isDefaultOrgEmail: boolean;
		isDefaultSmtpServer: boolean;
		otherAttributes: VclMap;
		smtpServerSettings: VclSmtpServerSettings;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgFederationSettings
	{
		enabled: boolean;
		href: String;
		otherAttributes: VclMap;
		sAMLMetadata: String;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgGeneralSettings
	{
		canPublishCatalogs: boolean;
		canPublishExternally: boolean;
		canSubscribe: boolean;
		delayAfterPowerOnSeconds: Integer;
		deployedVMQuota: Integer;
		href: String;
		otherAttributes: VclMap;
		storedVmQuota: Integer;
		type: String;
		useServerBootSequence: boolean;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgGuestPersonalizationSettings
	{
		accountOrganizationalUnit: String;
		allowDomainSettings: boolean;
		domainName: String;
		domainPassword: String;
		domainUsername: String;
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgLdapGroupAttributes
	{
		backLinkIdentifier: String;
		groupName: String;
		membership: String;
		membershipIdentifier: String;
		objectClass: String;
		objectIdentifier: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgLdapSettings
	{
		customOrgLdapSettings: VclCustomOrgLdapSettings;
		customUsersOu: String;
		href: String;
		orgLdapMode: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgLdapUserAttributes
	{
		email: String;
		fullName: String;
		givenName: String;
		groupBackLinkIdentifier: String;
		groupMembershipIdentifier: String;
		objectClass: String;
		objectIdentifier: String;
		otherAttributes: VclMap;
		surname: String;
		telephone: String;
		userName: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgLeaseSettings
	{
		deleteOnStorageLeaseExpiration: boolean;
		deploymentLeaseSeconds: Integer;
		href: String;
		otherAttributes: VclMap;
		storageLeaseSeconds: Integer;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgList
	{
		href: String;
		org: VclObjectList;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgOperationLimitsSettings
	{
		consolesPerVmLimit: Integer;
		href: String;
		operationsPerOrg: Integer;
		operationsPerUser: Integer;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgPasswordPolicySettings
	{
		accountLockoutEnabled: boolean;
		accountLockoutIntervalMinutes: int;
		href: String;
		invalidLoginsBeforeLockout: int;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgs
	{
		href: String;
		org: VclObjectList;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgSettings
	{
		href: String;
		orgEmailSettings: VclOrgEmailSettings;
		orgFederationSettings: VclOrgFederationSettings;
		orgGeneralSettings: VclOrgGeneralSettings;
		orgLdapSettings: VclOrgLdapSettings;
		orgOperationLimitsSettings: VclOrgOperationLimitsSettings;
		orgPasswordPolicySettings: VclOrgPasswordPolicySettings;
		otherAttributes: VclMap;
		type: String;
		vAppLeaseSettings: VclOrgLeaseSettings;
		vAppTemplateLeaseSettings: VclOrgVAppTemplateLeaseSettings;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOrgVAppTemplateLeaseSettings
	{
		deleteOnStorageLeaseExpiration: boolean;
		href: String;
		otherAttributes: VclMap;
		storageLeaseSeconds: Integer;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclOrgVdcNetwork
	{
		configuration: VclNetworkConfiguration;
		description: String;
		edgeGateway: VclReference;
		href: String;
		id: String;
		isShared: boolean;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclVdc;
		serviceConfig: VclGatewayFeatures;
		status: Integer;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		getAllocatedAddresses(): VclAllocatedIpAddress[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		toAdminObject(): VclAdminOrgVdcNetwork;
		toXml(): String;
		updateInternalState(): void;
	}

	declare const VclOrgVdcNetwork: VclOrgVdcNetwork;

	declare class VclOrgVdcNetworkParams
	{
		configuration: VclNetworkConfiguration;
		description: String;
		edgeGateway: VclReference;
		href: String;
		id: String;
		isShared: boolean;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		serviceConfig: VclGatewayFeatures;
		status: Integer;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOvfEnvironmentProperty
	{
		key: String;
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOvfFile
	{
		chunkSize: long;
		compression: String;
		href: String;
		id: String;
		otherAttributes: VclMap;
		size: VclBigInteger;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOvfProperty
	{
		description: VclMsg;
		key: String;
		label: VclMsg;
		otherAttributes: VclMap;
		password: boolean;
		qualifiers: String;
		type: String;
		userConfigurable: boolean;
		valueAttrib: String;
		valueElement: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOvfReferences
	{
		file: VclObjectList;
		otherAttributes: VclMap;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOvfToVdcNetworkEntry
	{
		ovfNetwork: String;
		vdcNetwork: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOvfToVdcNetworkMap
	{
		entry: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclOwner
	{
		href: String;
		otherAttributes: VclMap;
		type: String;
		user: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclParams
	{
		description: String;
		name: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclPlatformSection
	{
		kind: VclCimString;
		locale: VclCimString;
		otherAttributes: VclMap;
		timezone: Integer;
		vendor: VclCimString;
		version: VclCimString;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclPortGroupPoolParams
	{
		description: String;
		files: VclFilesList;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		portGroupRefs: VclVimObjectRefs;
		status: Integer;
		type: String;
		usedNetworksCount: Integer;
		vCloudExtension: VclObjectList;
		vimServer: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclPrepareHostParams
	{
		password: String;
		username: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclPrincipalParams
	{
		attributes: VclObjectList;

		constructor();
	}

	declare class VclProductSection
	{
		appUrl: VclCimString;
		categoryOrProperty: VclList;
		clazz: String;
		fullVersion: VclCimString;
		icon: VclObjectList;
		info: VclMsg;
		instance: String;
		otherAttributes: VclMap;
		product: VclMsg;
		productUrl: VclCimString;
		required: boolean;
		vendor: VclMsg;
		vendorUrl: VclCimString;
		version: VclCimString;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclProductSectionIcon
	{
		fileRef: String;
		height: Integer;
		mimeType: String;
		otherAttributes: VclMap;
		width: Integer;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclProductSectionList
	{
		href: String;
		otherAttributes: VclMap;
		productSection: VclObjectList;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclProductSectionProperty
	{
		description: VclMsg;
		key: String;
		label: VclMsg;
		otherAttributes: VclMap;
		password: boolean;
		qualifiers: String;
		type: String;
		userConfigurable: boolean;
		valueAttrib: String;
		valueElement: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclProfiler
	{

		enableInstanceCounters(enable?: boolean): void;
		enableInventoryNotifications(enable?: boolean): void;
		forceGC(): void;
		getAverageCacheGetTime(host?: VclHost): float;
		getCacheHitCount(host?: VclHost): long;
		getCacheMissCount(host?: VclHost): long;
		getCacheObjectCount(host?: VclHost): long;
		getClassNameByFinderType(finderType?: String): String;
		getInstanceCount(className?: String): int;
		getPendingNotificationsCount(): int;
		getPendingTriggersCount(): int;
	}

	declare const VclProfiler: VclProfiler;

	declare class VclProperty
	{
		key: String;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclPropertyConfigurationValue
	{
		configuration: String;
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclPropertySection
	{
		otherAttributes: VclMap;
		property: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclProtocols
	{
		any: boolean;
		icmp: boolean;
		other: String;
		tcp: boolean;
		udp: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclProviderVdc
	{
		availableNetworks: VclAvailableNetworks;
		capabilities: VclCapabilities;
		computeCapacity: VclRootComputeCapacity;
		description: String;
		href: String;
		id: String;
		isEnabled: boolean;
		name: String;
		networkPoolReferences: VclNetworkPoolReferences;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclHostAdmin;
		status: Integer;
		storageCapacity: VclProviderVdcCapacity;
		storageProfiles: VclProviderVdcStorageProfiles;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;
		vdcs: VclVdcs;

		getAdminVdcs(): VclAdminVdc[];
		getContainedObjects(): Object[];
		getExternalNetworks(): VclExternalNetwork[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getProviderStorageProfiles(): VclProviderVdcStorageProfile[];
		getReference(): VclReference;
		getVMWNetworkPools(): VclVMWNetworkPool[];
		toAdminExtensionObject(): VclVMWProviderVdc;
		toXml(): String;
		updateInternalState(): void;
	}

	declare const VclProviderVdc: VclProviderVdc;

	declare class VclProviderVdcCapacity
	{
		allocation: long;
		otherAttributes: VclMap;
		overhead: long;
		reserved: long;
		total: long;
		units: String;
		used: long;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclProviderVdcMergeParams
	{
		href: String;
		otherAttributes: VclMap;
		providerVdcReference: VclObjectList;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclProviderVdcReferences
	{
		otherAttributes: VclMap;
		providerVdcReference: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclProviderVdcStorageProfile
	{
		capacityTotal: Double;
		capacityUsed: Double;
		description: String;
		enabled: boolean;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminVdc;
		tasks: VclTasksInProgress;
		type: String;
		units: String;
		readonly vCloudExtension: VclObjectList;

		getContainedObjects(): Object[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		toAdminExtensionObject(): VclVMWProviderVdcStorageProfile;
		toXml(): String;
		updateInternalState(): void;
	}

	declare const VclProviderVdcStorageProfile: VclProviderVdcStorageProfile;

	declare class VclProviderVdcStorageProfileParams
	{
		capacityTotal: Double;
		capacityUsed: Double;
		description: String;
		enabled: boolean;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		type: String;
		units: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclProviderVdcStorageProfiles
	{
		otherAttributes: VclMap;
		providerVdcStorageProfile: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclPublishCatalogParams
	{
		isPublished: boolean;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclPublishExternalCatalogParams
	{
		catalogPublishedUrl: String;
		isCacheEnabled: boolean;
		isPublishedExternally: boolean;
		otherAttributes: VclMap;
		password: String;
		preserveIdentityInfoFlag: boolean;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclQName
	{

		equals(): boolean;
		getLocalPart(): String;
		getNamespaceURI(): String;
		getPrefix(): String;
		valueOf(qNameAsString?: String): VclQName;
	}

	declare const VclQName: VclQName;

	declare class VclQualifierBoolean
	{
		otherAttributes: VclMap;
		qualifier: boolean;
		value: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQualifierSArray
	{
		otherAttributes: VclMap;
		qualifier: boolean;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQualifierSInt64
	{
		otherAttributes: VclMap;
		qualifier: boolean;
		value: long;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQualifierString
	{
		otherAttributes: VclMap;
		qualifier: boolean;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQualifierUInt32
	{
		otherAttributes: VclMap;
		qualifier: boolean;
		value: long;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclQueryAclRuleField
	{
		HREF: VclQueryAclRuleField;
		ID: VclQueryAclRuleField;
		NAME: VclQueryAclRuleField;
		ORG: VclQueryAclRuleField;
		ORGACCESS: VclQueryAclRuleField;
		PRINCIPAL: VclQueryAclRuleField;
		PRINCIPALACCESS: VclQueryAclRuleField;
		PRINCIPALTYPE: VclQueryAclRuleField;
		RESOURCECLASSACTION: VclQueryAclRuleField;
		SERVICERESOURCE: VclQueryAclRuleField;
		SERVICERESOURCEACCESS: VclQueryAclRuleField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAclRuleField;
	}

	declare const VclQueryAclRuleField: VclQueryAclRuleField;

	interface VclQueryAdminAllocatedExternalAddressField
	{
		HREF: VclQueryAdminAllocatedExternalAddressField;
		ID: VclQueryAdminAllocatedExternalAddressField;
		IPADDRESS: VclQueryAdminAllocatedExternalAddressField;
		LINKEDNETWORK: VclQueryAdminAllocatedExternalAddressField;
		NETWORK: VclQueryAdminAllocatedExternalAddressField;
		ORG: VclQueryAdminAllocatedExternalAddressField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAdminAllocatedExternalAddressField;
	}

	declare const VclQueryAdminAllocatedExternalAddressField: VclQueryAdminAllocatedExternalAddressField;

	interface VclQueryAdminApiDefinitionField
	{
		APIVENDOR: VclQueryAdminApiDefinitionField;
		ENTRYPOINT: VclQueryAdminApiDefinitionField;
		HREF: VclQueryAdminApiDefinitionField;
		ID: VclQueryAdminApiDefinitionField;
		NAME: VclQueryAdminApiDefinitionField;
		NAMESPACE: VclQueryAdminApiDefinitionField;
		SERVICE: VclQueryAdminApiDefinitionField;
		SERVICENAME: VclQueryAdminApiDefinitionField;
		SERVICENAMESPACE: VclQueryAdminApiDefinitionField;
		SERVICEVENDOR: VclQueryAdminApiDefinitionField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAdminApiDefinitionField;
	}

	declare const VclQueryAdminApiDefinitionField: VclQueryAdminApiDefinitionField;

	interface VclQueryAdminCatalogField
	{
		CREATIONDATE: VclQueryAdminCatalogField;
		HREF: VclQueryAdminCatalogField;
		ID: VclQueryAdminCatalogField;
		ISPUBLISHED: VclQueryAdminCatalogField;
		ISSHARED: VclQueryAdminCatalogField;
		NAME: VclQueryAdminCatalogField;
		NUMBEROFMEDIA: VclQueryAdminCatalogField;
		NUMBEROFTEMPLATES: VclQueryAdminCatalogField;
		ORG: VclQueryAdminCatalogField;
		ORGNAME: VclQueryAdminCatalogField;
		OWNER: VclQueryAdminCatalogField;
		OWNERNAME: VclQueryAdminCatalogField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAdminCatalogField;
	}

	declare const VclQueryAdminCatalogField: VclQueryAdminCatalogField;

	interface VclQueryAdminCatalogItemField
	{
		CATALOG: VclQueryAdminCatalogItemField;
		CATALOGNAME: VclQueryAdminCatalogItemField;
		CREATIONDATE: VclQueryAdminCatalogItemField;
		ENTITY: VclQueryAdminCatalogItemField;
		ENTITYNAME: VclQueryAdminCatalogItemField;
		ENTITYTYPE: VclQueryAdminCatalogItemField;
		HREF: VclQueryAdminCatalogItemField;
		ID: VclQueryAdminCatalogItemField;
		ISEXPIRED: VclQueryAdminCatalogItemField;
		ISPUBLISHED: VclQueryAdminCatalogItemField;
		ISVDCENABLED: VclQueryAdminCatalogItemField;
		NAME: VclQueryAdminCatalogItemField;
		ORG: VclQueryAdminCatalogItemField;
		OWNER: VclQueryAdminCatalogItemField;
		OWNERNAME: VclQueryAdminCatalogItemField;
		STATUS: VclQueryAdminCatalogItemField;
		readonly value: String;
		values: String[];
		VDC: VclQueryAdminCatalogItemField;
		VDCNAME: VclQueryAdminCatalogItemField;

		getObject(value?: String): VclQueryAdminCatalogItemField;
	}

	declare const VclQueryAdminCatalogItemField: VclQueryAdminCatalogItemField;

	interface VclQueryAdminDiskField
	{
		BUSSUBTYPE: VclQueryAdminDiskField;
		BUSTYPE: VclQueryAdminDiskField;
		BUSTYPEDESC: VclQueryAdminDiskField;
		DATASTORE: VclQueryAdminDiskField;
		DATASTORENAME: VclQueryAdminDiskField;
		HREF: VclQueryAdminDiskField;
		ID: VclQueryAdminDiskField;
		ISATTACHED: VclQueryAdminDiskField;
		NAME: VclQueryAdminDiskField;
		ORG: VclQueryAdminDiskField;
		OWNERNAME: VclQueryAdminDiskField;
		SIZEB: VclQueryAdminDiskField;
		STATUS: VclQueryAdminDiskField;
		STORAGEPROFILE: VclQueryAdminDiskField;
		STORAGEPROFILENAME: VclQueryAdminDiskField;
		TASK: VclQueryAdminDiskField;
		readonly value: String;
		values: String[];
		VC: VclQueryAdminDiskField;
		VDC: VclQueryAdminDiskField;
		VDCNAME: VclQueryAdminDiskField;

		getObject(value?: String): VclQueryAdminDiskField;
	}

	declare const VclQueryAdminDiskField: VclQueryAdminDiskField;

	interface VclQueryAdminEventField
	{
		ENTITY: VclQueryAdminEventField;
		ENTITYNAME: VclQueryAdminEventField;
		ENTITYTYPE: VclQueryAdminEventField;
		EVENTID: VclQueryAdminEventField;
		EVENTSTATUS: VclQueryAdminEventField;
		EVENTTYPE: VclQueryAdminEventField;
		HREF: VclQueryAdminEventField;
		ID: VclQueryAdminEventField;
		ORG: VclQueryAdminEventField;
		ORGNAME: VclQueryAdminEventField;
		PRODUCTVERSION: VclQueryAdminEventField;
		SERVICENAMESPACE: VclQueryAdminEventField;
		TIMESTAMP: VclQueryAdminEventField;
		USERNAME: VclQueryAdminEventField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAdminEventField;
	}

	declare const VclQueryAdminEventField: VclQueryAdminEventField;

	interface VclQueryAdminFileDescriptorField
	{
		APIDEFINITION: VclQueryAdminFileDescriptorField;
		APINAME: VclQueryAdminFileDescriptorField;
		APINAMESPACE: VclQueryAdminFileDescriptorField;
		APIVENDOR: VclQueryAdminFileDescriptorField;
		FILEMIMETYPE: VclQueryAdminFileDescriptorField;
		FILEURL: VclQueryAdminFileDescriptorField;
		HREF: VclQueryAdminFileDescriptorField;
		ID: VclQueryAdminFileDescriptorField;
		NAME: VclQueryAdminFileDescriptorField;
		SERVICE: VclQueryAdminFileDescriptorField;
		SERVICENAME: VclQueryAdminFileDescriptorField;
		SERVICENAMESPACE: VclQueryAdminFileDescriptorField;
		SERVICEVENDOR: VclQueryAdminFileDescriptorField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAdminFileDescriptorField;
	}

	declare const VclQueryAdminFileDescriptorField: VclQueryAdminFileDescriptorField;

	interface VclQueryAdminGroupField
	{
		HREF: VclQueryAdminGroupField;
		ID: VclQueryAdminGroupField;
		IDENTITYPROVIDERTYPE: VclQueryAdminGroupField;
		ISREADONLY: VclQueryAdminGroupField;
		NAME: VclQueryAdminGroupField;
		ORG: VclQueryAdminGroupField;
		ROLENAME: VclQueryAdminGroupField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAdminGroupField;
	}

	declare const VclQueryAdminGroupField: VclQueryAdminGroupField;

	interface VclQueryAdminMediaField
	{
		CATALOG: VclQueryAdminMediaField;
		CATALOGITEM: VclQueryAdminMediaField;
		CATALOGNAME: VclQueryAdminMediaField;
		CREATIONDATE: VclQueryAdminMediaField;
		HREF: VclQueryAdminMediaField;
		ID: VclQueryAdminMediaField;
		ISBUSY: VclQueryAdminMediaField;
		ISPUBLISHED: VclQueryAdminMediaField;
		ISVDCENABLED: VclQueryAdminMediaField;
		NAME: VclQueryAdminMediaField;
		ORG: VclQueryAdminMediaField;
		OWNER: VclQueryAdminMediaField;
		OWNERNAME: VclQueryAdminMediaField;
		STATUS: VclQueryAdminMediaField;
		STORAGEB: VclQueryAdminMediaField;
		STORAGEPROFILENAME: VclQueryAdminMediaField;
		readonly value: String;
		values: String[];
		VDC: VclQueryAdminMediaField;
		VDCNAME: VclQueryAdminMediaField;

		getObject(value?: String): VclQueryAdminMediaField;
	}

	declare const VclQueryAdminMediaField: VclQueryAdminMediaField;

	interface VclQueryAdminOrgNetworkField
	{
		DNS1: VclQueryAdminOrgNetworkField;
		DNS2: VclQueryAdminOrgNetworkField;
		GATEWAY: VclQueryAdminOrgNetworkField;
		HREF: VclQueryAdminOrgNetworkField;
		ID: VclQueryAdminOrgNetworkField;
		IPSCOPEID: VclQueryAdminOrgNetworkField;
		ISBUSY: VclQueryAdminOrgNetworkField;
		ISIPSCOPEINHERITED: VclQueryAdminOrgNetworkField;
		NAME: VclQueryAdminOrgNetworkField;
		NETMASK: VclQueryAdminOrgNetworkField;
		NETWORKPOOL: VclQueryAdminOrgNetworkField;
		NETWORKPOOLNAME: VclQueryAdminOrgNetworkField;
		ORG: VclQueryAdminOrgNetworkField;
		ORGNAME: VclQueryAdminOrgNetworkField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAdminOrgNetworkField;
	}

	declare const VclQueryAdminOrgNetworkField: VclQueryAdminOrgNetworkField;

	interface VclQueryAdminOrgVdcStorageProfileField
	{
		HREF: VclQueryAdminOrgVdcStorageProfileField;
		ID: VclQueryAdminOrgVdcStorageProfileField;
		ISDEFAULTSTORAGEPROFILE: VclQueryAdminOrgVdcStorageProfileField;
		ISENABLED: VclQueryAdminOrgVdcStorageProfileField;
		NAME: VclQueryAdminOrgVdcStorageProfileField;
		NUMBEROFCONDITIONS: VclQueryAdminOrgVdcStorageProfileField;
		ORG: VclQueryAdminOrgVdcStorageProfileField;
		STORAGELIMITMB: VclQueryAdminOrgVdcStorageProfileField;
		STORAGEPROFILEMOREF: VclQueryAdminOrgVdcStorageProfileField;
		STORAGEUSEDMB: VclQueryAdminOrgVdcStorageProfileField;
		readonly value: String;
		values: String[];
		VC: VclQueryAdminOrgVdcStorageProfileField;
		VDC: VclQueryAdminOrgVdcStorageProfileField;
		VDCNAME: VclQueryAdminOrgVdcStorageProfileField;

		getObject(value?: String): VclQueryAdminOrgVdcStorageProfileField;
	}

	declare const VclQueryAdminOrgVdcStorageProfileField: VclQueryAdminOrgVdcStorageProfileField;

	interface VclQueryAdminServiceField
	{
		ENABLED: VclQueryAdminServiceField;
		EXCHANGE: VclQueryAdminServiceField;
		HREF: VclQueryAdminServiceField;
		ID: VclQueryAdminServiceField;
		ISAUTHORIZATIONENABLED: VclQueryAdminServiceField;
		NAME: VclQueryAdminServiceField;
		NAMESPACE: VclQueryAdminServiceField;
		PRIORITY: VclQueryAdminServiceField;
		ROUTINGKEY: VclQueryAdminServiceField;
		readonly value: String;
		values: String[];
		VENDOR: VclQueryAdminServiceField;

		getObject(value?: String): VclQueryAdminServiceField;
	}

	declare const VclQueryAdminServiceField: VclQueryAdminServiceField;

	interface VclQueryAdminShadowVMField
	{
		DATASTORENAME: VclQueryAdminShadowVMField;
		HREF: VclQueryAdminShadowVMField;
		ID: VclQueryAdminShadowVMField;
		ISBUSY: VclQueryAdminShadowVMField;
		ISDELETED: VclQueryAdminShadowVMField;
		ISPUBLISHED: VclQueryAdminShadowVMField;
		NAME: VclQueryAdminShadowVMField;
		ORG: VclQueryAdminShadowVMField;
		PRIMARYVAPPNAME: VclQueryAdminShadowVMField;
		PRIMARYVAPPTEMPLATE: VclQueryAdminShadowVMField;
		PRIMARYVM: VclQueryAdminShadowVMField;
		PRIMARYVMCATALOG: VclQueryAdminShadowVMField;
		PRIMARYVMNAME: VclQueryAdminShadowVMField;
		PRIMARYVMOWNER: VclQueryAdminShadowVMField;
		SHADOWVAPP: VclQueryAdminShadowVMField;
		STATUS: VclQueryAdminShadowVMField;
		readonly value: String;
		values: String[];
		VCNAME: VclQueryAdminShadowVMField;

		getObject(value?: String): VclQueryAdminShadowVMField;
	}

	declare const VclQueryAdminShadowVMField: VclQueryAdminShadowVMField;

	interface VclQueryAdminTaskField
	{
		CELLNAME: VclQueryAdminTaskField;
		ENDDATE: VclQueryAdminTaskField;
		HASOWNER: VclQueryAdminTaskField;
		HREF: VclQueryAdminTaskField;
		ID: VclQueryAdminTaskField;
		NAME: VclQueryAdminTaskField;
		OBJECT: VclQueryAdminTaskField;
		OBJECTNAME: VclQueryAdminTaskField;
		OBJECTTYPE: VclQueryAdminTaskField;
		ORG: VclQueryAdminTaskField;
		ORGNAME: VclQueryAdminTaskField;
		OWNER: VclQueryAdminTaskField;
		OWNERNAME: VclQueryAdminTaskField;
		SERVICENAMESPACE: VclQueryAdminTaskField;
		STARTDATE: VclQueryAdminTaskField;
		STATUS: VclQueryAdminTaskField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAdminTaskField;
	}

	declare const VclQueryAdminTaskField: VclQueryAdminTaskField;

	interface VclQueryAdminUserField
	{
		DEPLOYEDVMQUOTA: VclQueryAdminUserField;
		DEPLOYEDVMQUOTARANK: VclQueryAdminUserField;
		FULLNAME: VclQueryAdminUserField;
		HREF: VclQueryAdminUserField;
		ID: VclQueryAdminUserField;
		IDENTITYPROVIDERTYPE: VclQueryAdminUserField;
		ISENABLED: VclQueryAdminUserField;
		ISLDAPUSER: VclQueryAdminUserField;
		NAME: VclQueryAdminUserField;
		NUMBEROFDEPLOYEDVMS: VclQueryAdminUserField;
		NUMBEROFSTOREDVMS: VclQueryAdminUserField;
		ORG: VclQueryAdminUserField;
		STOREDVMQUOTA: VclQueryAdminUserField;
		STOREDVMQUOTARANK: VclQueryAdminUserField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAdminUserField;
	}

	declare const VclQueryAdminUserField: VclQueryAdminUserField;

	interface VclQueryAdminVAppField
	{
		CPUALLOCATIONMHZ: VclQueryAdminVAppField;
		CREATIONDATE: VclQueryAdminVAppField;
		HREF: VclQueryAdminVAppField;
		ID: VclQueryAdminVAppField;
		ISBUSY: VclQueryAdminVAppField;
		ISDEPLOYED: VclQueryAdminVAppField;
		ISENABLED: VclQueryAdminVAppField;
		ISEXPIRED: VclQueryAdminVAppField;
		ISINMAINTENANCEMODE: VclQueryAdminVAppField;
		ISVDCENABLED: VclQueryAdminVAppField;
		MEMORYALLOCATIONMB: VclQueryAdminVAppField;
		NAME: VclQueryAdminVAppField;
		NUMBEROFVMS: VclQueryAdminVAppField;
		ORG: VclQueryAdminVAppField;
		OWNERNAME: VclQueryAdminVAppField;
		STATUS: VclQueryAdminVAppField;
		STORAGEKB: VclQueryAdminVAppField;
		readonly value: String;
		values: String[];
		VDC: VclQueryAdminVAppField;
		VDCNAME: VclQueryAdminVAppField;

		getObject(value?: String): VclQueryAdminVAppField;
	}

	declare const VclQueryAdminVAppField: VclQueryAdminVAppField;

	interface VclQueryAdminVAppNetworkField
	{
		DNS1: VclQueryAdminVAppNetworkField;
		DNS2: VclQueryAdminVAppNetworkField;
		DNSSUFFIX: VclQueryAdminVAppNetworkField;
		GATEWAY: VclQueryAdminVAppNetworkField;
		HREF: VclQueryAdminVAppNetworkField;
		ID: VclQueryAdminVAppNetworkField;
		ISBUSY: VclQueryAdminVAppNetworkField;
		ISIPSCOPEINHERITED: VclQueryAdminVAppNetworkField;
		NAME: VclQueryAdminVAppNetworkField;
		NETMASK: VclQueryAdminVAppNetworkField;
		ORG: VclQueryAdminVAppNetworkField;
		readonly value: String;
		values: String[];
		VAPP: VclQueryAdminVAppNetworkField;
		VAPPNAME: VclQueryAdminVAppNetworkField;

		getObject(value?: String): VclQueryAdminVAppNetworkField;
	}

	declare const VclQueryAdminVAppNetworkField: VclQueryAdminVAppNetworkField;

	interface VclQueryAdminVAppTemplateField
	{
		CATALOG: VclQueryAdminVAppTemplateField;
		CATALOGITEM: VclQueryAdminVAppTemplateField;
		CATALOGNAME: VclQueryAdminVAppTemplateField;
		CREATIONDATE: VclQueryAdminVAppTemplateField;
		HREF: VclQueryAdminVAppTemplateField;
		ID: VclQueryAdminVAppTemplateField;
		ISBUSY: VclQueryAdminVAppTemplateField;
		ISDEPLOYED: VclQueryAdminVAppTemplateField;
		ISENABLED: VclQueryAdminVAppTemplateField;
		ISEXPIRED: VclQueryAdminVAppTemplateField;
		ISGOLDMASTER: VclQueryAdminVAppTemplateField;
		ISPUBLISHED: VclQueryAdminVAppTemplateField;
		ISVDCENABLED: VclQueryAdminVAppTemplateField;
		NAME: VclQueryAdminVAppTemplateField;
		ORG: VclQueryAdminVAppTemplateField;
		OWNER: VclQueryAdminVAppTemplateField;
		OWNERNAME: VclQueryAdminVAppTemplateField;
		STATUS: VclQueryAdminVAppTemplateField;
		STORAGEPROFILENAME: VclQueryAdminVAppTemplateField;
		readonly value: String;
		values: String[];
		VDC: VclQueryAdminVAppTemplateField;
		VDCNAME: VclQueryAdminVAppTemplateField;

		getObject(value?: String): VclQueryAdminVAppTemplateField;
	}

	declare const VclQueryAdminVAppTemplateField: VclQueryAdminVAppTemplateField;

	interface VclQueryAdminVdcField
	{
		CPUALLOCATIONMHZ: VclQueryAdminVdcField;
		CPULIMITMHZ: VclQueryAdminVdcField;
		CPUUSEDMHZ: VclQueryAdminVdcField;
		HREF: VclQueryAdminVdcField;
		ID: VclQueryAdminVdcField;
		ISBUSY: VclQueryAdminVdcField;
		ISENABLED: VclQueryAdminVdcField;
		ISSYSTEMVDC: VclQueryAdminVdcField;
		MEMORYALLOCATIONMB: VclQueryAdminVdcField;
		MEMORYLIMITMB: VclQueryAdminVdcField;
		MEMORYUSEDMB: VclQueryAdminVdcField;
		NAME: VclQueryAdminVdcField;
		NETWORKPOOL: VclQueryAdminVdcField;
		NUMBEROFDISKS: VclQueryAdminVdcField;
		NUMBEROFMEDIA: VclQueryAdminVdcField;
		NUMBEROFSTORAGEPROFILES: VclQueryAdminVdcField;
		NUMBEROFVAPPS: VclQueryAdminVdcField;
		NUMBEROFVAPPTEMPLATES: VclQueryAdminVdcField;
		ORG: VclQueryAdminVdcField;
		ORGNAME: VclQueryAdminVdcField;
		PROVIDERVDC: VclQueryAdminVdcField;
		PROVIDERVDCNAME: VclQueryAdminVdcField;
		STATUS: VclQueryAdminVdcField;
		STORAGEALLOCATIONMB: VclQueryAdminVdcField;
		STORAGELIMITMB: VclQueryAdminVdcField;
		STORAGEUSEDMB: VclQueryAdminVdcField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAdminVdcField;
	}

	declare const VclQueryAdminVdcField: VclQueryAdminVdcField;

	interface VclQueryAdminVmDiskRelationField
	{
		DISK: VclQueryAdminVmDiskRelationField;
		HREF: VclQueryAdminVmDiskRelationField;
		ID: VclQueryAdminVmDiskRelationField;
		readonly value: String;
		values: String[];
		VDC: VclQueryAdminVmDiskRelationField;
		VM: VclQueryAdminVmDiskRelationField;

		getObject(value?: String): VclQueryAdminVmDiskRelationField;
	}

	declare const VclQueryAdminVmDiskRelationField: VclQueryAdminVmDiskRelationField;

	interface VclQueryAdminVMField
	{
		CATALOGNAME: VclQueryAdminVMField;
		CONTAINER: VclQueryAdminVMField;
		CONTAINERNAME: VclQueryAdminVMField;
		DATASTORENAME: VclQueryAdminVMField;
		GUESTOS: VclQueryAdminVMField;
		HARDWAREVERSION: VclQueryAdminVMField;
		HOSTNAME: VclQueryAdminVMField;
		HREF: VclQueryAdminVMField;
		ID: VclQueryAdminVMField;
		ISDELETED: VclQueryAdminVMField;
		ISDEPLOYED: VclQueryAdminVMField;
		ISPUBLISHED: VclQueryAdminVMField;
		ISVAPPTEMPLATE: VclQueryAdminVMField;
		ISVDCENABLED: VclQueryAdminVMField;
		MEMORYMB: VclQueryAdminVMField;
		MOREF: VclQueryAdminVMField;
		NAME: VclQueryAdminVMField;
		NETWORKNAME: VclQueryAdminVMField;
		NUMBEROFCPUS: VclQueryAdminVMField;
		ORG: VclQueryAdminVMField;
		STATUS: VclQueryAdminVMField;
		STORAGEPROFILENAME: VclQueryAdminVMField;
		readonly value: String;
		values: String[];
		VC: VclQueryAdminVMField;
		VDC: VclQueryAdminVMField;
		VMTOOLSVERSION: VclQueryAdminVMField;

		getObject(value?: String): VclQueryAdminVMField;
	}

	declare const VclQueryAdminVMField: VclQueryAdminVMField;

	interface VclQueryAllocatedExternalAddressField
	{
		HREF: VclQueryAllocatedExternalAddressField;
		ID: VclQueryAllocatedExternalAddressField;
		IPADDRESS: VclQueryAllocatedExternalAddressField;
		LINKEDNETWORK: VclQueryAllocatedExternalAddressField;
		NETWORK: VclQueryAllocatedExternalAddressField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryAllocatedExternalAddressField;
	}

	declare const VclQueryAllocatedExternalAddressField: VclQueryAllocatedExternalAddressField;

	interface VclQueryApiDefinitionField
	{
		APIVENDOR: VclQueryApiDefinitionField;
		ENTRYPOINT: VclQueryApiDefinitionField;
		HREF: VclQueryApiDefinitionField;
		ID: VclQueryApiDefinitionField;
		NAME: VclQueryApiDefinitionField;
		NAMESPACE: VclQueryApiDefinitionField;
		SERVICE: VclQueryApiDefinitionField;
		SERVICENAME: VclQueryApiDefinitionField;
		SERVICENAMESPACE: VclQueryApiDefinitionField;
		SERVICEVENDOR: VclQueryApiDefinitionField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryApiDefinitionField;
	}

	declare const VclQueryApiDefinitionField: VclQueryApiDefinitionField;

	interface VclQueryApiFilterField
	{
		HREF: VclQueryApiFilterField;
		ID: VclQueryApiFilterField;
		SERVICE: VclQueryApiFilterField;
		URLPATTERN: VclQueryApiFilterField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryApiFilterField;
	}

	declare const VclQueryApiFilterField: VclQueryApiFilterField;

	interface VclQueryBlockingTaskField
	{
		CREATIONDATE: VclQueryBlockingTaskField;
		EXPIRATIONTIME: VclQueryBlockingTaskField;
		HASOWNER: VclQueryBlockingTaskField;
		HREF: VclQueryBlockingTaskField;
		ID: VclQueryBlockingTaskField;
		JOBSTATUS: VclQueryBlockingTaskField;
		OPERATIONNAME: VclQueryBlockingTaskField;
		ORIGINATINGORG: VclQueryBlockingTaskField;
		ORIGINATINGORGNAME: VclQueryBlockingTaskField;
		OWNER: VclQueryBlockingTaskField;
		OWNERNAME: VclQueryBlockingTaskField;
		STATUS: VclQueryBlockingTaskField;
		TASK: VclQueryBlockingTaskField;
		TIMEOUTACTION: VclQueryBlockingTaskField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryBlockingTaskField;
	}

	declare const VclQueryBlockingTaskField: VclQueryBlockingTaskField;

	interface VclQueryCatalogField
	{
		CREATIONDATE: VclQueryCatalogField;
		HREF: VclQueryCatalogField;
		ID: VclQueryCatalogField;
		ISPUBLISHED: VclQueryCatalogField;
		ISSHARED: VclQueryCatalogField;
		NAME: VclQueryCatalogField;
		NUMBEROFMEDIA: VclQueryCatalogField;
		NUMBEROFVAPPTEMPLATES: VclQueryCatalogField;
		ORGNAME: VclQueryCatalogField;
		OWNER: VclQueryCatalogField;
		OWNERNAME: VclQueryCatalogField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryCatalogField;
	}

	declare const VclQueryCatalogField: VclQueryCatalogField;

	interface VclQueryCatalogItemField
	{
		CATALOG: VclQueryCatalogItemField;
		CATALOGNAME: VclQueryCatalogItemField;
		CREATIONDATE: VclQueryCatalogItemField;
		ENTITY: VclQueryCatalogItemField;
		ENTITYNAME: VclQueryCatalogItemField;
		ENTITYTYPE: VclQueryCatalogItemField;
		HREF: VclQueryCatalogItemField;
		ID: VclQueryCatalogItemField;
		ISEXPIRED: VclQueryCatalogItemField;
		ISPUBLISHED: VclQueryCatalogItemField;
		ISVDCENABLED: VclQueryCatalogItemField;
		NAME: VclQueryCatalogItemField;
		OWNER: VclQueryCatalogItemField;
		OWNERNAME: VclQueryCatalogItemField;
		STATUS: VclQueryCatalogItemField;
		readonly value: String;
		values: String[];
		VDC: VclQueryCatalogItemField;
		VDCNAME: VclQueryCatalogItemField;

		getObject(value?: String): VclQueryCatalogItemField;
	}

	declare const VclQueryCatalogItemField: VclQueryCatalogItemField;

	interface VclQueryCellField
	{
		BUILDDATE: VclQueryCellField;
		HREF: VclQueryCellField;
		ID: VclQueryCellField;
		ISACTIVE: VclQueryCellField;
		ISVMWAREVC: VclQueryCellField;
		NAME: VclQueryCellField;
		PRIMARYIP: VclQueryCellField;
		readonly value: String;
		values: String[];
		VERSION: VclQueryCellField;

		getObject(value?: String): VclQueryCellField;
	}

	declare const VclQueryCellField: VclQueryCellField;

	interface VclQueryConditionField
	{
		DETAILS: VclQueryConditionField;
		HREF: VclQueryConditionField;
		ID: VclQueryConditionField;
		OBJECT: VclQueryConditionField;
		OBJECTTYPE: VclQueryConditionField;
		OCCURENCEDATE: VclQueryConditionField;
		SEVERITY: VclQueryConditionField;
		SUMMARY: VclQueryConditionField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryConditionField;
	}

	declare const VclQueryConditionField: VclQueryConditionField;

	interface VclQueryDatastoreField
	{
		DATASTORETYPE: VclQueryDatastoreField;
		HREF: VclQueryDatastoreField;
		ID: VclQueryDatastoreField;
		ISDELETED: VclQueryDatastoreField;
		ISENABLED: VclQueryDatastoreField;
		MOREF: VclQueryDatastoreField;
		NAME: VclQueryDatastoreField;
		NUMBEROFPROVIDERVDCS: VclQueryDatastoreField;
		PROVISIONEDSTORAGEMB: VclQueryDatastoreField;
		REQUESTEDSTORAGEMB: VclQueryDatastoreField;
		STORAGEMB: VclQueryDatastoreField;
		STORAGEUSEDMB: VclQueryDatastoreField;
		readonly value: String;
		values: String[];
		VC: VclQueryDatastoreField;
		VCNAME: VclQueryDatastoreField;

		getObject(value?: String): VclQueryDatastoreField;
	}

	declare const VclQueryDatastoreField: VclQueryDatastoreField;

	interface VclQueryDatastoreProviderVdcRelationField
	{
		DATASTORE: VclQueryDatastoreProviderVdcRelationField;
		DATASTORETYPE: VclQueryDatastoreProviderVdcRelationField;
		HREF: VclQueryDatastoreProviderVdcRelationField;
		ID: VclQueryDatastoreProviderVdcRelationField;
		ISDELETED: VclQueryDatastoreProviderVdcRelationField;
		ISENABLED: VclQueryDatastoreProviderVdcRelationField;
		MOREF: VclQueryDatastoreProviderVdcRelationField;
		NAME: VclQueryDatastoreProviderVdcRelationField;
		PROVIDERVDC: VclQueryDatastoreProviderVdcRelationField;
		PROVISIONEDSTORAGEMB: VclQueryDatastoreProviderVdcRelationField;
		REQUESTEDSTORAGEMB: VclQueryDatastoreProviderVdcRelationField;
		STORAGEMB: VclQueryDatastoreProviderVdcRelationField;
		STORAGEUSEDMB: VclQueryDatastoreProviderVdcRelationField;
		readonly value: String;
		values: String[];
		VC: VclQueryDatastoreProviderVdcRelationField;
		VCNAME: VclQueryDatastoreProviderVdcRelationField;

		getObject(value?: String): VclQueryDatastoreProviderVdcRelationField;
	}

	declare const VclQueryDatastoreProviderVdcRelationField: VclQueryDatastoreProviderVdcRelationField;

	interface VclQueryDiskField
	{
		BUSSUBTYPE: VclQueryDiskField;
		BUSTYPE: VclQueryDiskField;
		BUSTYPEDESC: VclQueryDiskField;
		DATASTORE: VclQueryDiskField;
		DATASTORENAME: VclQueryDiskField;
		HREF: VclQueryDiskField;
		ID: VclQueryDiskField;
		ISATTACHED: VclQueryDiskField;
		NAME: VclQueryDiskField;
		OWNERNAME: VclQueryDiskField;
		SIZEB: VclQueryDiskField;
		STATUS: VclQueryDiskField;
		STORAGEPROFILE: VclQueryDiskField;
		STORAGEPROFILENAME: VclQueryDiskField;
		TASK: VclQueryDiskField;
		readonly value: String;
		values: String[];
		VDC: VclQueryDiskField;
		VDCNAME: VclQueryDiskField;

		getObject(value?: String): VclQueryDiskField;
	}

	declare const VclQueryDiskField: VclQueryDiskField;

	interface VclQueryDvSwitchField
	{
		HREF: VclQueryDvSwitchField;
		ID: VclQueryDvSwitchField;
		ISVCENABLED: VclQueryDvSwitchField;
		MOREF: VclQueryDvSwitchField;
		NAME: VclQueryDvSwitchField;
		readonly value: String;
		values: String[];
		VC: VclQueryDvSwitchField;
		VCNAME: VclQueryDvSwitchField;

		getObject(value?: String): VclQueryDvSwitchField;
	}

	declare const VclQueryDvSwitchField: VclQueryDvSwitchField;

	interface VclQueryEdgeGatewayField
	{
		GATEWAYSTATUS: VclQueryEdgeGatewayField;
		HASTATUS: VclQueryEdgeGatewayField;
		HREF: VclQueryEdgeGatewayField;
		ID: VclQueryEdgeGatewayField;
		ISBUSY: VclQueryEdgeGatewayField;
		NAME: VclQueryEdgeGatewayField;
		NUMBEROFEXTNETWORKS: VclQueryEdgeGatewayField;
		NUMBEROFORGNETWORKS: VclQueryEdgeGatewayField;
		readonly value: String;
		values: String[];
		VDC: VclQueryEdgeGatewayField;

		getObject(value?: String): VclQueryEdgeGatewayField;
	}

	declare const VclQueryEdgeGatewayField: VclQueryEdgeGatewayField;

	interface VclQueryEventField
	{
		ENTITY: VclQueryEventField;
		ENTITYNAME: VclQueryEventField;
		ENTITYTYPE: VclQueryEventField;
		EVENTSTATUS: VclQueryEventField;
		EVENTTYPE: VclQueryEventField;
		HREF: VclQueryEventField;
		ID: VclQueryEventField;
		ORGNAME: VclQueryEventField;
		SERVICENAMESPACE: VclQueryEventField;
		TIMESTAMP: VclQueryEventField;
		USERNAME: VclQueryEventField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryEventField;
	}

	declare const VclQueryEventField: VclQueryEventField;

	interface VclQueryExternalLocalizationField
	{
		HREF: VclQueryExternalLocalizationField;
		ID: VclQueryExternalLocalizationField;
		KEY: VclQueryExternalLocalizationField;
		LOCALE: VclQueryExternalLocalizationField;
		SERVICENAMESPACE: VclQueryExternalLocalizationField;
		value: String;
		VALUE: VclQueryExternalLocalizationField;
		values: String[];

		getObject(value?: String): VclQueryExternalLocalizationField;
	}

	declare const VclQueryExternalLocalizationField: VclQueryExternalLocalizationField;

	interface VclQueryFileDescriptorField
	{
		APIDEFINITION: VclQueryFileDescriptorField;
		APINAME: VclQueryFileDescriptorField;
		APINAMESPACE: VclQueryFileDescriptorField;
		APIVENDOR: VclQueryFileDescriptorField;
		FILEMIMETYPE: VclQueryFileDescriptorField;
		FILEURL: VclQueryFileDescriptorField;
		HREF: VclQueryFileDescriptorField;
		ID: VclQueryFileDescriptorField;
		NAME: VclQueryFileDescriptorField;
		SERVICE: VclQueryFileDescriptorField;
		SERVICENAME: VclQueryFileDescriptorField;
		SERVICENAMESPACE: VclQueryFileDescriptorField;
		SERVICEVENDOR: VclQueryFileDescriptorField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryFileDescriptorField;
	}

	declare const VclQueryFileDescriptorField: VclQueryFileDescriptorField;

	interface VclQueryGroupField
	{
		HREF: VclQueryGroupField;
		ID: VclQueryGroupField;
		IDENTITYPROVIDERTYPE: VclQueryGroupField;
		ISREADONLY: VclQueryGroupField;
		NAME: VclQueryGroupField;
		ROLENAME: VclQueryGroupField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryGroupField;
	}

	declare const VclQueryGroupField: VclQueryGroupField;

	interface VclQueryHostField
	{
		HREF: VclQueryHostField;
		ID: VclQueryHostField;
		ISBUSY: VclQueryHostField;
		ISCROSSHOSTENABLED: VclQueryHostField;
		ISDELETED: VclQueryHostField;
		ISENABLED: VclQueryHostField;
		ISHUNG: VclQueryHostField;
		ISINMAINTENANCEMODE: VclQueryHostField;
		ISPENDINGUPGRADE: VclQueryHostField;
		ISPREPARED: VclQueryHostField;
		ISSUPPORTED: VclQueryHostField;
		NAME: VclQueryHostField;
		NUMBEROFVMS: VclQueryHostField;
		OSVERSION: VclQueryHostField;
		STATE: VclQueryHostField;
		readonly value: String;
		values: String[];
		VC: VclQueryHostField;
		VCNAME: VclQueryHostField;

		getObject(value?: String): VclQueryHostField;
	}

	declare const VclQueryHostField: VclQueryHostField;

	declare class VclQueryList
	{
		href: String;
		name: String;
		otherAttributes: VclMap;
		page: Integer;
		pageSize: Integer;
		total: long;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclQueryMediaField
	{
		CATALOG: VclQueryMediaField;
		CATALOGITEM: VclQueryMediaField;
		CATALOGNAME: VclQueryMediaField;
		CREATIONDATE: VclQueryMediaField;
		HREF: VclQueryMediaField;
		ID: VclQueryMediaField;
		ISBUSY: VclQueryMediaField;
		ISPUBLISHED: VclQueryMediaField;
		NAME: VclQueryMediaField;
		ORG: VclQueryMediaField;
		OWNER: VclQueryMediaField;
		OWNERNAME: VclQueryMediaField;
		STATUS: VclQueryMediaField;
		STORAGEB: VclQueryMediaField;
		STORAGEPROFILENAME: VclQueryMediaField;
		readonly value: String;
		values: String[];
		VDC: VclQueryMediaField;
		VDCNAME: VclQueryMediaField;

		getObject(value?: String): VclQueryMediaField;
	}

	declare const VclQueryMediaField: VclQueryMediaField;

	interface VclQueryNetworkField
	{
		DNS1: VclQueryNetworkField;
		DNS2: VclQueryNetworkField;
		DNSSUFFIX: VclQueryNetworkField;
		GATEWAY: VclQueryNetworkField;
		HREF: VclQueryNetworkField;
		ID: VclQueryNetworkField;
		IPSCOPEID: VclQueryNetworkField;
		ISBUSY: VclQueryNetworkField;
		NAME: VclQueryNetworkField;
		NETMASK: VclQueryNetworkField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryNetworkField;
	}

	declare const VclQueryNetworkField: VclQueryNetworkField;

	interface VclQueryNetworkPoolField
	{
		HREF: VclQueryNetworkPoolField;
		ID: VclQueryNetworkPoolField;
		ISBUSY: VclQueryNetworkPoolField;
		NAME: VclQueryNetworkPoolField;
		NETWORKPOOLTYPE: VclQueryNetworkPoolField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryNetworkPoolField;
	}

	declare const VclQueryNetworkPoolField: VclQueryNetworkPoolField;

	interface VclQueryOrgField
	{
		CANPUBLISHCATALOGS: VclQueryOrgField;
		DEPLOYEDVMQUOTA: VclQueryOrgField;
		DISPLAYNAME: VclQueryOrgField;
		HREF: VclQueryOrgField;
		ID: VclQueryOrgField;
		ISENABLED: VclQueryOrgField;
		ISREADONLY: VclQueryOrgField;
		NAME: VclQueryOrgField;
		NUMBEROFCATALOGS: VclQueryOrgField;
		NUMBEROFDISKS: VclQueryOrgField;
		NUMBEROFGROUPS: VclQueryOrgField;
		NUMBEROFVAPPS: VclQueryOrgField;
		NUMBEROFVDCS: VclQueryOrgField;
		STOREDVMQUOTA: VclQueryOrgField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryOrgField;
	}

	declare const VclQueryOrgField: VclQueryOrgField;

	interface VclQueryOrgNetworkField
	{
		DNS1: VclQueryOrgNetworkField;
		DNS2: VclQueryOrgNetworkField;
		DNSSUFFIX: VclQueryOrgNetworkField;
		GATEWAY: VclQueryOrgNetworkField;
		HREF: VclQueryOrgNetworkField;
		ID: VclQueryOrgNetworkField;
		IPSCOPEID: VclQueryOrgNetworkField;
		ISBUSY: VclQueryOrgNetworkField;
		ISIPSCOPEINHERITED: VclQueryOrgNetworkField;
		NAME: VclQueryOrgNetworkField;
		NETMASK: VclQueryOrgNetworkField;
		NETWORKPOOL: VclQueryOrgNetworkField;
		NETWORKPOOLNAME: VclQueryOrgNetworkField;
		ORG: VclQueryOrgNetworkField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryOrgNetworkField;
	}

	declare const VclQueryOrgNetworkField: VclQueryOrgNetworkField;

	interface VclQueryOrgVdcField
	{
		CPUALLOCATIONMHZ: VclQueryOrgVdcField;
		CPULIMITMHZ: VclQueryOrgVdcField;
		CPUUSEDMHZ: VclQueryOrgVdcField;
		HREF: VclQueryOrgVdcField;
		ID: VclQueryOrgVdcField;
		ISBUSY: VclQueryOrgVdcField;
		ISENABLED: VclQueryOrgVdcField;
		ISSYSTEMVDC: VclQueryOrgVdcField;
		MEMORYALLOCATIONMB: VclQueryOrgVdcField;
		MEMORYLIMITMB: VclQueryOrgVdcField;
		MEMORYUSEDMB: VclQueryOrgVdcField;
		NAME: VclQueryOrgVdcField;
		NUMBEROFDATASTORES: VclQueryOrgVdcField;
		NUMBEROFDISKS: VclQueryOrgVdcField;
		NUMBEROFMEDIA: VclQueryOrgVdcField;
		NUMBEROFSTORAGEPROFILES: VclQueryOrgVdcField;
		NUMBEROFVAPPS: VclQueryOrgVdcField;
		NUMBEROFVAPPTEMPLATES: VclQueryOrgVdcField;
		ORGNAME: VclQueryOrgVdcField;
		PROVIDERVDC: VclQueryOrgVdcField;
		PROVIDERVDCNAME: VclQueryOrgVdcField;
		STATUS: VclQueryOrgVdcField;
		STORAGEALLOCATIONMB: VclQueryOrgVdcField;
		STORAGELIMITMB: VclQueryOrgVdcField;
		STORAGEUSEDMB: VclQueryOrgVdcField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryOrgVdcField;
	}

	declare const VclQueryOrgVdcField: VclQueryOrgVdcField;

	interface VclQueryOrgVdcGatewayField
	{
		HREF: VclQueryOrgVdcGatewayField;
		ID: VclQueryOrgVdcGatewayField;
		ISBUSY: VclQueryOrgVdcGatewayField;
		NAME: VclQueryOrgVdcGatewayField;
		NUMBEROFEXTNETWORKS: VclQueryOrgVdcGatewayField;
		NUMBEROFORGNETWORKS: VclQueryOrgVdcGatewayField;
		readonly value: String;
		values: String[];
		VDC: VclQueryOrgVdcGatewayField;

		getObject(value?: String): VclQueryOrgVdcGatewayField;
	}

	declare const VclQueryOrgVdcGatewayField: VclQueryOrgVdcGatewayField;

	interface VclQueryOrgVdcNetworkField
	{
		CONNECTEDTO: VclQueryOrgVdcNetworkField;
		DEFAULTGATEWAY: VclQueryOrgVdcNetworkField;
		DNS1: VclQueryOrgVdcNetworkField;
		DNS2: VclQueryOrgVdcNetworkField;
		DNSSUFFIX: VclQueryOrgVdcNetworkField;
		HREF: VclQueryOrgVdcNetworkField;
		ID: VclQueryOrgVdcNetworkField;
		ISBUSY: VclQueryOrgVdcNetworkField;
		ISIPSCOPEINHERITED: VclQueryOrgVdcNetworkField;
		ISSHARED: VclQueryOrgVdcNetworkField;
		LINKTYPE: VclQueryOrgVdcNetworkField;
		NAME: VclQueryOrgVdcNetworkField;
		NETMASK: VclQueryOrgVdcNetworkField;
		readonly value: String;
		values: String[];
		VDC: VclQueryOrgVdcNetworkField;
		VDCNAME: VclQueryOrgVdcNetworkField;

		getObject(value?: String): VclQueryOrgVdcNetworkField;
	}

	declare const VclQueryOrgVdcNetworkField: VclQueryOrgVdcNetworkField;

	interface VclQueryOrgVdcResourcePoolRelationField
	{
		HREF: VclQueryOrgVdcResourcePoolRelationField;
		ID: VclQueryOrgVdcResourcePoolRelationField;
		RESOURCEPOOLMOREF: VclQueryOrgVdcResourcePoolRelationField;
		readonly value: String;
		values: String[];
		VC: VclQueryOrgVdcResourcePoolRelationField;
		VDC: VclQueryOrgVdcResourcePoolRelationField;

		getObject(value?: String): VclQueryOrgVdcResourcePoolRelationField;
	}

	declare const VclQueryOrgVdcResourcePoolRelationField: VclQueryOrgVdcResourcePoolRelationField;

	interface VclQueryOrgVdcStorageProfileField
	{
		HREF: VclQueryOrgVdcStorageProfileField;
		ID: VclQueryOrgVdcStorageProfileField;
		ISDEFAULTSTORAGEPROFILE: VclQueryOrgVdcStorageProfileField;
		ISENABLED: VclQueryOrgVdcStorageProfileField;
		ISVDCBUSY: VclQueryOrgVdcStorageProfileField;
		NAME: VclQueryOrgVdcStorageProfileField;
		NUMBEROFCONDITIONS: VclQueryOrgVdcStorageProfileField;
		STORAGELIMITMB: VclQueryOrgVdcStorageProfileField;
		STORAGEUSEDMB: VclQueryOrgVdcStorageProfileField;
		readonly value: String;
		values: String[];
		VDC: VclQueryOrgVdcStorageProfileField;
		VDCNAME: VclQueryOrgVdcStorageProfileField;

		getObject(value?: String): VclQueryOrgVdcStorageProfileField;
	}

	declare const VclQueryOrgVdcStorageProfileField: VclQueryOrgVdcStorageProfileField;

	declare class VclQueryParams
	{

		constructor();
		addMetadataField(key?: String, domain?: VclMetadataDomain): void;
		addSortFields(fields?: Object[], sortType?: VclSortType): void;
		clearSortFields(): void;
		setFields(fields?: Object[]): void;
		setFilter(filter?: VclFilter): void;
		setOffset(offset?: Integer): void;
		setPage(page?: Integer): void;
		setPageSize(pageSize?: Integer): void;
	}

	interface VclQueryPortgroupField
	{
		HREF: VclQueryPortgroupField;
		ID: VclQueryPortgroupField;
		ISVCENABLED: VclQueryPortgroupField;
		MOREF: VclQueryPortgroupField;
		NAME: VclQueryPortgroupField;
		NETWORK: VclQueryPortgroupField;
		NETWORKNAME: VclQueryPortgroupField;
		PORTGROUPTYPE: VclQueryPortgroupField;
		SCOPETYPE: VclQueryPortgroupField;
		readonly value: String;
		values: String[];
		VC: VclQueryPortgroupField;
		VCNAME: VclQueryPortgroupField;

		getObject(value?: String): VclQueryPortgroupField;
	}

	declare const VclQueryPortgroupField: VclQueryPortgroupField;

	interface VclQueryProviderVdcResourcePoolRelationField
	{
		CPURESERVATIONALLOCATIONMHZ: VclQueryProviderVdcResourcePoolRelationField;
		CPURESERVATIONLIMITMHZ: VclQueryProviderVdcResourcePoolRelationField;
		HREF: VclQueryProviderVdcResourcePoolRelationField;
		ID: VclQueryProviderVdcResourcePoolRelationField;
		ISENABLED: VclQueryProviderVdcResourcePoolRelationField;
		ISPRIMARY: VclQueryProviderVdcResourcePoolRelationField;
		MEMORYRESERVATIONALLOCATIONMB: VclQueryProviderVdcResourcePoolRelationField;
		MEMORYRESERVATIONLIMITMB: VclQueryProviderVdcResourcePoolRelationField;
		NAME: VclQueryProviderVdcResourcePoolRelationField;
		NUMBEROFVMS: VclQueryProviderVdcResourcePoolRelationField;
		PROVIDERVDC: VclQueryProviderVdcResourcePoolRelationField;
		RESOURCEPOOLMOREF: VclQueryProviderVdcResourcePoolRelationField;
		readonly value: String;
		values: String[];
		VC: VclQueryProviderVdcResourcePoolRelationField;
		VCNAME: VclQueryProviderVdcResourcePoolRelationField;

		getObject(value?: String): VclQueryProviderVdcResourcePoolRelationField;
	}

	declare const VclQueryProviderVdcResourcePoolRelationField: VclQueryProviderVdcResourcePoolRelationField;

	interface VclQueryProviderVdcStorageProfileField
	{
		HREF: VclQueryProviderVdcStorageProfileField;
		ID: VclQueryProviderVdcStorageProfileField;
		ISENABLED: VclQueryProviderVdcStorageProfileField;
		NAME: VclQueryProviderVdcStorageProfileField;
		NUMBEROFCONDITIONS: VclQueryProviderVdcStorageProfileField;
		PROVIDERVDC: VclQueryProviderVdcStorageProfileField;
		STORAGEPROFILEMOREF: VclQueryProviderVdcStorageProfileField;
		STORAGEPROVISIONEDMB: VclQueryProviderVdcStorageProfileField;
		STORAGEREQUESTEDMB: VclQueryProviderVdcStorageProfileField;
		STORAGETOTALMB: VclQueryProviderVdcStorageProfileField;
		STORAGEUSEDMB: VclQueryProviderVdcStorageProfileField;
		readonly value: String;
		values: String[];
		VC: VclQueryProviderVdcStorageProfileField;

		getObject(value?: String): VclQueryProviderVdcStorageProfileField;
	}

	declare const VclQueryProviderVdcStorageProfileField: VclQueryProviderVdcStorageProfileField;

	interface VclQueryRecordType
	{
		ACLRULE: VclQueryRecordType;
		ADMINALLOCATEDEXTERNALADDRESS: VclQueryRecordType;
		ADMINAPIDEFINITION: VclQueryRecordType;
		ADMINCATALOG: VclQueryRecordType;
		ADMINCATALOGITEM: VclQueryRecordType;
		ADMINDISK: VclQueryRecordType;
		ADMINEVENT: VclQueryRecordType;
		ADMINFILEDESCRIPTOR: VclQueryRecordType;
		ADMINGROUP: VclQueryRecordType;
		ADMINMEDIA: VclQueryRecordType;
		ADMINORGNETWORK: VclQueryRecordType;
		ADMINORGVDC: VclQueryRecordType;
		ADMINORGVDCSTORAGEPROFILE: VclQueryRecordType;
		ADMINSERVICE: VclQueryRecordType;
		ADMINSHADOWVM: VclQueryRecordType;
		ADMINTASK: VclQueryRecordType;
		ADMINUSER: VclQueryRecordType;
		ADMINVAPP: VclQueryRecordType;
		ADMINVAPPNETWORK: VclQueryRecordType;
		ADMINVAPPTEMPLATE: VclQueryRecordType;
		ADMINVM: VclQueryRecordType;
		ADMINVMDISKRELATION: VclQueryRecordType;
		ALLOCATEDEXTERNALADDRESS: VclQueryRecordType;
		APIDEFINITION: VclQueryRecordType;
		APIFILTER: VclQueryRecordType;
		BLOCKINGTASK: VclQueryRecordType;
		CATALOG: VclQueryRecordType;
		CATALOGITEM: VclQueryRecordType;
		CELL: VclQueryRecordType;
		CONDITION: VclQueryRecordType;
		DATASTORE: VclQueryRecordType;
		DATASTOREPROVIDERVDCRELATION: VclQueryRecordType;
		DATSTOREPROVIDERVDCRELATION: VclQueryRecordType;
		DISK: VclQueryRecordType;
		DVSWITCH: VclQueryRecordType;
		EDGEGATEWAY: VclQueryRecordType;
		EVENT: VclQueryRecordType;
		EXTERNALLOCALIZATION: VclQueryRecordType;
		EXTERNALNETWORK: VclQueryRecordType;
		FILEDESCRIPTOR: VclQueryRecordType;
		GROUP: VclQueryRecordType;
		HOST: VclQueryRecordType;
		MEDIA: VclQueryRecordType;
		NETWORKPOOL: VclQueryRecordType;
		ORGANIZATION: VclQueryRecordType;
		ORGNETWORK: VclQueryRecordType;
		ORGVDC: VclQueryRecordType;
		ORGVDCNETWORK: VclQueryRecordType;
		ORGVDCRESOURCEPOOLRELATION: VclQueryRecordType;
		ORGVDCSTORAGEPROFILE: VclQueryRecordType;
		PORTGROUP: VclQueryRecordType;
		PROVIDERVDC: VclQueryRecordType;
		PROVIDERVDCRESOURCEPOOLRELATION: VclQueryRecordType;
		PROVIDERVDCSTORAGEPROFILE: VclQueryRecordType;
		RESOURCECLASS: VclQueryRecordType;
		RESOURCECLASSACTION: VclQueryRecordType;
		RESOURCEPOOL: VclQueryRecordType;
		RESOURCEPOOLVMLIST: VclQueryRecordType;
		RIGHT: VclQueryRecordType;
		ROLE: VclQueryRecordType;
		SERVICE: VclQueryRecordType;
		SERVICELINK: VclQueryRecordType;
		SERVICERESOURCE: VclQueryRecordType;
		STRANDEDITEM: VclQueryRecordType;
		STRANDEDUSER: VclQueryRecordType;
		TASK: VclQueryRecordType;
		USER: VclQueryRecordType;
		readonly value: String;
		values: String[];
		VAPP: VclQueryRecordType;
		VAPPNETWORK: VclQueryRecordType;
		VAPPORGNETWORKRELATION: VclQueryRecordType;
		VAPPORGVDCNETWORKRELATION: VclQueryRecordType;
		VAPPTEMPLATE: VclQueryRecordType;
		VIRTUALCENTER: VclQueryRecordType;
		VM: VclQueryRecordType;
		VMDISKRELATION: VclQueryRecordType;

		getObject(value?: String): VclQueryRecordType;
	}

	declare const VclQueryRecordType: VclQueryRecordType;

	interface VclQueryReferenceField
	{
		HREF: VclQueryReferenceField;
		ID: VclQueryReferenceField;
		NAME: VclQueryReferenceField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryReferenceField;
	}

	declare const VclQueryReferenceField: VclQueryReferenceField;

	interface VclQueryReferenceType
	{
		ACLRULE: VclQueryReferenceType;
		ADMINAPIDEFINITION: VclQueryReferenceType;
		ADMINCATALOG: VclQueryReferenceType;
		ADMINCATALOGITEM: VclQueryReferenceType;
		ADMINDISK: VclQueryReferenceType;
		ADMINEVENT: VclQueryReferenceType;
		ADMINFILEDESCRIPTOR: VclQueryReferenceType;
		ADMINGROUP: VclQueryReferenceType;
		ADMINMEDIA: VclQueryReferenceType;
		ADMINORGNETWORK: VclQueryReferenceType;
		ADMINORGVDC: VclQueryReferenceType;
		ADMINORGVDCSTORAGEPROFILE: VclQueryReferenceType;
		ADMINSERVICE: VclQueryReferenceType;
		ADMINSHADOWVM: VclQueryReferenceType;
		ADMINTASK: VclQueryReferenceType;
		ADMINUSER: VclQueryReferenceType;
		ADMINVAPP: VclQueryReferenceType;
		ADMINVAPPNETWORK: VclQueryReferenceType;
		ADMINVAPPTEMPLATE: VclQueryReferenceType;
		ADMINVM: VclQueryReferenceType;
		APIDEFINITION: VclQueryReferenceType;
		APIFILTER: VclQueryReferenceType;
		BLOCKINGTASK: VclQueryReferenceType;
		CATALOG: VclQueryReferenceType;
		CATALOGITEM: VclQueryReferenceType;
		DATASTORE: VclQueryReferenceType;
		DISK: VclQueryReferenceType;
		EDGEGATEWAY: VclQueryReferenceType;
		EXTERNALNETWORK: VclQueryReferenceType;
		GROUP: VclQueryReferenceType;
		HOST: VclQueryReferenceType;
		MEDIA: VclQueryReferenceType;
		NETWORKPOOL: VclQueryReferenceType;
		ORGANIZATION: VclQueryReferenceType;
		ORGNETWORK: VclQueryReferenceType;
		ORGVDC: VclQueryReferenceType;
		ORGVDCNETWORK: VclQueryReferenceType;
		ORGVDCSTORAGEPROFILE: VclQueryReferenceType;
		PROVIDERVDC: VclQueryReferenceType;
		PROVIDERVDCSTORAGEPROFILE: VclQueryReferenceType;
		RESOURCECLASS: VclQueryReferenceType;
		RESOURCECLASSACTION: VclQueryReferenceType;
		RESOURCEPOOLVMLIST: VclQueryReferenceType;
		RIGHT: VclQueryReferenceType;
		ROLE: VclQueryReferenceType;
		SERVICE: VclQueryReferenceType;
		SERVICELINK: VclQueryReferenceType;
		SERVICERESOURCE: VclQueryReferenceType;
		STRANDEDITEM: VclQueryReferenceType;
		STRANDEDUSER: VclQueryReferenceType;
		TASK: VclQueryReferenceType;
		USER: VclQueryReferenceType;
		readonly value: String;
		values: String[];
		VAPP: VclQueryReferenceType;
		VAPPNETWORK: VclQueryReferenceType;
		VAPPORGNETWORKRELATION: VclQueryReferenceType;
		VAPPORGVDCNETWORKRELATION: VclQueryReferenceType;
		VAPPTEMPLATE: VclQueryReferenceType;
		VIRTUALCENTER: VclQueryReferenceType;
		VM: VclQueryReferenceType;

		getObject(value?: String): VclQueryReferenceType;
	}

	declare const VclQueryReferenceType: VclQueryReferenceType;

	interface VclQueryResourceClassActionField
	{
		HREF: VclQueryResourceClassActionField;
		HTTPMETHOD: VclQueryResourceClassActionField;
		ID: VclQueryResourceClassActionField;
		NAME: VclQueryResourceClassActionField;
		RESOURCECLASS: VclQueryResourceClassActionField;
		URLPATTERN: VclQueryResourceClassActionField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryResourceClassActionField;
	}

	declare const VclQueryResourceClassActionField: VclQueryResourceClassActionField;

	interface VclQueryResourceClassField
	{
		HREF: VclQueryResourceClassField;
		ID: VclQueryResourceClassField;
		MIMETYPE: VclQueryResourceClassField;
		NAME: VclQueryResourceClassField;
		NID: VclQueryResourceClassField;
		SERVICE: VclQueryResourceClassField;
		URLTEMPLATE: VclQueryResourceClassField;
		URNPATTERN: VclQueryResourceClassField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryResourceClassField;
	}

	declare const VclQueryResourceClassField: VclQueryResourceClassField;

	interface VclQueryResourcePoolField
	{
		HREF: VclQueryResourcePoolField;
		ID: VclQueryResourcePoolField;
		ISDELETED: VclQueryResourcePoolField;
		MOREF: VclQueryResourcePoolField;
		NAME: VclQueryResourcePoolField;
		readonly value: String;
		values: String[];
		VC: VclQueryResourcePoolField;
		VCNAME: VclQueryResourcePoolField;

		getObject(value?: String): VclQueryResourcePoolField;
	}

	declare const VclQueryResourcePoolField: VclQueryResourcePoolField;

	interface VclQueryResourcePoolVMField
	{
		CONTAINERNAME: VclQueryResourcePoolVMField;
		GUESTOS: VclQueryResourcePoolVMField;
		HARDWAREVERSION: VclQueryResourcePoolVMField;
		HREF: VclQueryResourcePoolVMField;
		ID: VclQueryResourcePoolVMField;
		ISBUSY: VclQueryResourcePoolVMField;
		ISDEPLOYED: VclQueryResourcePoolVMField;
		NAME: VclQueryResourcePoolVMField;
		STATUS: VclQueryResourcePoolVMField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryResourcePoolVMField;
	}

	declare const VclQueryResourcePoolVMField: VclQueryResourcePoolVMField;

	declare class VclQueryResult
	{
		href: String;
		name: String;
		otherAttributes: VclMap;
		page: VclBigInteger;
		pageSize: VclBigInteger;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAclRuleRecord
	{
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		orgAccess: String;
		otherAttributes: VclMap;
		principal: String;
		principalAccess: String;
		principalType: String;
		resourceClassAction: String;
		serviceResource: String;
		serviceResourceAccess: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminAllocatedExternalAddressRecord
	{
		href: String;
		id: String;
		ipAddress: String;
		linkedNetwork: String;
		metadata: VclMetaDataEntries;
		network: String;
		org: String;
		otherAttributes: VclMap;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminApiDefinitionRecord
	{
		apiVendor: String;
		entryPoint: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		namespace: String;
		otherAttributes: VclMap;
		service: String;
		serviceName: String;
		serviceNamespace: String;
		serviceVendor: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminCatalogItemRecord
	{
		catalog: String;
		catalogName: String;
		creationDate: VclXMLGregorianCalendar;
		entity: String;
		entityName: String;
		entityType: String;
		href: String;
		id: String;
		isExpired: boolean;
		isPublished: boolean;
		isVdcEnabled: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		otherAttributes: VclMap;
		owner: String;
		ownerName: String;
		status: String;
		type: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminCatalogRecord
	{
		creationDate: VclXMLGregorianCalendar;
		href: String;
		id: String;
		isPublished: boolean;
		isShared: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfMedia: Integer;
		numberOfTemplates: Integer;
		org: String;
		orgName: String;
		otherAttributes: VclMap;
		owner: String;
		ownerName: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminDiskRecord
	{
		busSubType: String;
		busType: String;
		busTypeDesc: String;
		datastore: String;
		datastoreName: String;
		href: String;
		id: String;
		isAttached: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		otherAttributes: VclMap;
		ownerName: String;
		sizeB: long;
		status: String;
		storageProfile: String;
		storageProfileName: String;
		task: String;
		type: String;
		vc: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminEventRecord
	{
		entity: String;
		entityName: String;
		entityType: String;
		eventId: String;
		eventStatus: Integer;
		eventType: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		org: String;
		orgName: String;
		otherAttributes: VclMap;
		productVersion: String;
		serviceNamespace: String;
		timeStamp: VclXMLGregorianCalendar;
		type: String;
		userName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminFileDescriptorRecord
	{
		apiDefinition: String;
		apiName: String;
		apiNamespace: String;
		apiVendor: String;
		fileMimeType: String;
		fileUrl: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		service: String;
		serviceName: String;
		serviceNamespace: String;
		serviceVendor: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminGroupRecord
	{
		href: String;
		id: String;
		identityProviderType: String;
		isReadOnly: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		otherAttributes: VclMap;
		roleName: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminMediaRecord
	{
		catalog: String;
		catalogItem: String;
		catalogName: String;
		creationDate: VclXMLGregorianCalendar;
		href: String;
		id: String;
		isBusy: boolean;
		isPublished: boolean;
		isVdcEnabled: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		otherAttributes: VclMap;
		owner: String;
		ownerName: String;
		status: String;
		storageB: long;
		storageProfileName: String;
		type: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminOrgNetworkRecord
	{
		dns1: String;
		dns2: String;
		gateway: String;
		href: String;
		id: String;
		ipScopeId: String;
		isBusy: boolean;
		isIpScopeInherited: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		netmask: String;
		networkPool: String;
		networkPoolName: String;
		org: String;
		orgName: String;
		otherAttributes: VclMap;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminOrgVdcStorageProfileRecord
	{
		href: String;
		id: String;
		isDefaultStorageProfile: boolean;
		isEnabled: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfConditions: Integer;
		org: String;
		otherAttributes: VclMap;
		storageLimitMB: Integer;
		storageProfileMoref: String;
		storageUsedMB: Integer;
		type: String;
		vc: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminServiceRecord
	{
		enabled: boolean;
		exchange: String;
		href: String;
		id: String;
		isAuthorizationEnabled: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		namespace: String;
		otherAttributes: VclMap;
		priority: Integer;
		routingKey: String;
		type: String;
		vendor: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminShadowVMRecord
	{
		datastoreName: String;
		href: String;
		id: String;
		isBusy: boolean;
		isDeleted: boolean;
		isPublished: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		otherAttributes: VclMap;
		primaryVAppName: String;
		primaryVAppTemplate: String;
		primaryVM: String;
		primaryVMCatalog: String;
		primaryVmName: String;
		primaryVMOwner: String;
		shadowVApp: String;
		status: String;
		type: String;
		vcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminTaskRecord
	{
		cellName: String;
		endDate: VclXMLGregorianCalendar;
		hasOwner: boolean;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		object: String;
		objectName: String;
		objectType: String;
		org: String;
		orgName: String;
		otherAttributes: VclMap;
		owner: String;
		ownerName: String;
		serviceNamespace: String;
		startDate: VclXMLGregorianCalendar;
		status: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminUserRecord
	{
		deployedVMQuota: Integer;
		deployedVMQuotaRank: Integer;
		fullName: String;
		href: String;
		id: String;
		identityProviderType: String;
		isEnabled: boolean;
		isLdapUser: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfDeployedVMs: Integer;
		numberOfStoredVMs: Integer;
		org: String;
		otherAttributes: VclMap;
		storedVMQuota: Integer;
		storedVMQuotaRank: Integer;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminVAppNetworkRecord
	{
		dns1: String;
		dns2: String;
		dnsSuffix: String;
		gateway: String;
		href: String;
		id: String;
		isBusy: boolean;
		isIpScopeInherited: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		netmask: String;
		org: String;
		otherAttributes: VclMap;
		type: String;
		vApp: String;
		vappName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminVAppRecord
	{
		cpuAllocationMhz: Integer;
		creationDate: VclXMLGregorianCalendar;
		href: String;
		id: String;
		isBusy: boolean;
		isDeployed: boolean;
		isEnabled: boolean;
		isExpired: boolean;
		isInMaintenanceMode: boolean;
		isVdcEnabled: boolean;
		memoryAllocationMB: Integer;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfVMs: Integer;
		org: String;
		otherAttributes: VclMap;
		ownerName: String;
		status: String;
		storageKB: long;
		type: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminVAppTemplateRecord
	{
		catalog: String;
		catalogItem: String;
		catalogName: String;
		creationDate: VclXMLGregorianCalendar;
		href: String;
		id: String;
		isBusy: boolean;
		isDeployed: boolean;
		isEnabled: boolean;
		isExpired: boolean;
		isGoldMaster: boolean;
		isPublished: boolean;
		isVdcEnabled: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		otherAttributes: VclMap;
		owner: String;
		ownerName: String;
		status: String;
		storageProfileName: String;
		type: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminVdcRecord
	{
		cpuAllocationMhz: long;
		cpuLimitMhz: long;
		cpuUsedMhz: long;
		href: String;
		id: String;
		isBusy: boolean;
		isEnabled: boolean;
		isSystemVdc: boolean;
		memoryAllocationMB: long;
		memoryLimitMB: long;
		memoryUsedMB: long;
		metadata: VclMetaDataEntries;
		name: String;
		networkPool: String;
		numberOfDisks: Integer;
		numberOfMedia: Integer;
		numberOfStorageProfiles: Integer;
		numberOfVApps: Integer;
		numberOfVAppTemplates: Integer;
		org: String;
		orgName: String;
		otherAttributes: VclMap;
		providerVdc: String;
		providerVdcName: String;
		status: String;
		storageAllocationMB: long;
		storageLimitMB: long;
		storageUsedMB: long;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminVmDiskRelationRecord
	{
		disk: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		otherAttributes: VclMap;
		type: String;
		vdc: String;
		vm: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAdminVMRecord
	{
		catalogName: String;
		container: String;
		containerName: String;
		datastoreName: String;
		guestOs: String;
		hardwareVersion: Integer;
		hostName: String;
		href: String;
		id: String;
		isDeleted: boolean;
		isDeployed: boolean;
		isPublished: boolean;
		isVAppTemplate: boolean;
		isVdcEnabled: boolean;
		memoryMB: Integer;
		metadata: VclMetaDataEntries;
		moref: String;
		name: String;
		networkName: String;
		numberOfCpus: Integer;
		org: String;
		otherAttributes: VclMap;
		status: String;
		storageProfileName: String;
		type: String;
		vc: String;
		vdc: String;
		vmToolsVersion: Integer;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultAllocatedExternalAddressRecord
	{
		href: String;
		id: String;
		ipAddress: String;
		linkedNetwork: String;
		metadata: VclMetaDataEntries;
		network: String;
		otherAttributes: VclMap;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultApiDefinitionRecord
	{
		apiVendor: String;
		entryPoint: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		namespace: String;
		otherAttributes: VclMap;
		service: String;
		serviceName: String;
		serviceNamespace: String;
		serviceVendor: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultApiFilterRecord
	{
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		otherAttributes: VclMap;
		service: String;
		type: String;
		urlPattern: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultBlockingTaskRecord
	{
		creationDate: VclXMLGregorianCalendar;
		expirationTime: VclXMLGregorianCalendar;
		hasOwner: boolean;
		href: String;
		id: String;
		jobStatus: String;
		metadata: VclMetaDataEntries;
		operationName: String;
		originatingOrg: String;
		originatingOrgName: String;
		otherAttributes: VclMap;
		owner: String;
		ownerName: String;
		status: String;
		task: String;
		timeoutAction: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultCatalogItemRecord
	{
		catalog: String;
		catalogName: String;
		creationDate: VclXMLGregorianCalendar;
		entity: String;
		entityName: String;
		entityType: String;
		href: String;
		id: String;
		isExpired: boolean;
		isPublished: boolean;
		isVdcEnabled: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		owner: String;
		ownerName: String;
		status: String;
		type: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultCatalogRecord
	{
		creationDate: VclXMLGregorianCalendar;
		href: String;
		id: String;
		isPublished: boolean;
		isShared: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfMedia: Integer;
		numberOfVAppTemplates: Integer;
		orgName: String;
		otherAttributes: VclMap;
		owner: String;
		ownerName: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultCellRecord
	{
		buildDate: VclXMLGregorianCalendar;
		href: String;
		id: String;
		isActive: Integer;
		isVMwareVc: Integer;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		primaryIp: String;
		type: String;
		version: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultConditionRecord
	{
		details: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		object: String;
		objectType: String;
		occurenceDate: VclXMLGregorianCalendar;
		otherAttributes: VclMap;
		severity: String;
		summary: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultDatastoreProviderVdcRelationRecord
	{
		datastore: String;
		datastoreType: String;
		href: String;
		id: String;
		isDeleted: boolean;
		isEnabled: boolean;
		metadata: VclMetaDataEntries;
		moref: String;
		name: String;
		otherAttributes: VclMap;
		providerVdc: String;
		provisionedStorageMB: float;
		requestedStorageMB: float;
		storageMB: float;
		storageUsedMB: float;
		type: String;
		vc: String;
		vcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultDatastoreRecord
	{
		datastoreType: String;
		href: String;
		id: String;
		isDeleted: boolean;
		isEnabled: boolean;
		metadata: VclMetaDataEntries;
		moref: String;
		name: String;
		numberOfProviderVdcs: Integer;
		otherAttributes: VclMap;
		provisionedStorageMB: long;
		requestedStorageMB: long;
		storageMB: long;
		storageUsedMB: long;
		type: String;
		vc: String;
		vcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultDiskRecord
	{
		busSubType: String;
		busType: String;
		busTypeDesc: String;
		datastore: String;
		datastoreName: String;
		href: String;
		id: String;
		isAttached: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		ownerName: String;
		sizeB: long;
		status: String;
		storageProfile: String;
		storageProfileName: String;
		task: String;
		type: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultDvSwitchRecord
	{
		href: String;
		id: String;
		isVCEnabled: boolean;
		metadata: VclMetaDataEntries;
		moref: String;
		name: String;
		otherAttributes: VclMap;
		type: String;
		vc: String;
		vcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultEdgeGatewayRecord
	{
		gatewayStatus: String;
		haStatus: String;
		href: String;
		id: String;
		isBusy: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfExtNetworks: Integer;
		numberOfOrgNetworks: Integer;
		otherAttributes: VclMap;
		type: String;
		vdc: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultEventRecord
	{
		entity: String;
		entityName: String;
		entityType: String;
		eventStatus: Integer;
		eventType: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		orgName: String;
		otherAttributes: VclMap;
		serviceNamespace: String;
		timeStamp: VclXMLGregorianCalendar;
		type: String;
		userName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultExternalLocalizationRecord
	{
		href: String;
		id: String;
		key: String;
		locale: String;
		metadata: VclMetaDataEntries;
		otherAttributes: VclMap;
		serviceNamespace: String;
		type: String;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultFileDescriptorRecord
	{
		apiDefinition: String;
		apiName: String;
		apiNamespace: String;
		apiVendor: String;
		fileMimeType: String;
		fileUrl: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		service: String;
		serviceName: String;
		serviceNamespace: String;
		serviceVendor: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultGroupRecord
	{
		href: String;
		id: String;
		identityProviderType: String;
		isReadOnly: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		roleName: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultHostRecord
	{
		href: String;
		id: String;
		isBusy: boolean;
		isCrossHostEnabled: boolean;
		isDeleted: boolean;
		isEnabled: boolean;
		isHung: boolean;
		isInMaintenanceMode: boolean;
		isPendingUpgrade: boolean;
		isPrepared: boolean;
		isSupported: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfVMs: Integer;
		osVersion: String;
		otherAttributes: VclMap;
		state: Integer;
		type: String;
		vc: String;
		vcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultMediaRecord
	{
		catalog: String;
		catalogItem: String;
		catalogName: String;
		creationDate: VclXMLGregorianCalendar;
		href: String;
		id: String;
		isBusy: boolean;
		isPublished: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		otherAttributes: VclMap;
		owner: String;
		ownerName: String;
		status: String;
		storageB: long;
		storageProfileName: String;
		type: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultNetworkPoolRecord
	{
		href: String;
		id: String;
		isBusy: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		networkPoolType: Integer;
		otherAttributes: VclMap;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultNetworkRecord
	{
		dns1: String;
		dns2: String;
		dnsSuffix: String;
		gateway: String;
		href: String;
		id: String;
		ipScopeId: String;
		isBusy: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		netmask: String;
		otherAttributes: VclMap;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultOrgNetworkRecord
	{
		dns1: String;
		dns2: String;
		dnsSuffix: String;
		gateway: String;
		href: String;
		id: String;
		ipScopeId: String;
		isBusy: boolean;
		isIpScopeInherited: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		netmask: String;
		networkPool: String;
		networkPoolName: String;
		org: String;
		otherAttributes: VclMap;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultOrgRecord
	{
		canPublishCatalogs: boolean;
		deployedVMQuota: Integer;
		displayName: String;
		href: String;
		id: String;
		isEnabled: boolean;
		isReadOnly: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfCatalogs: Integer;
		numberOfDisks: Integer;
		numberOfGroups: Integer;
		numberOfVApps: Integer;
		numberOfVdcs: Integer;
		otherAttributes: VclMap;
		storedVMQuota: Integer;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultOrgVdcNetworkRecord
	{
		connectedTo: String;
		defaultGateway: String;
		dns1: String;
		dns2: String;
		dnsSuffix: String;
		href: String;
		id: String;
		isBusy: boolean;
		isIpScopeInherited: boolean;
		isShared: boolean;
		linkType: Integer;
		metadata: VclMetaDataEntries;
		name: String;
		netmask: String;
		otherAttributes: VclMap;
		type: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultOrgVdcRecord
	{
		cpuAllocationMhz: long;
		cpuLimitMhz: long;
		cpuUsedMhz: long;
		href: String;
		id: String;
		isBusy: boolean;
		isEnabled: boolean;
		isSystemVdc: boolean;
		memoryAllocationMB: long;
		memoryLimitMB: long;
		memoryUsedMB: long;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfDatastores: Integer;
		numberOfDisks: Integer;
		numberOfMedia: Integer;
		numberOfStorageProfiles: Integer;
		numberOfVApps: Integer;
		numberOfVAppTemplates: Integer;
		orgName: String;
		otherAttributes: VclMap;
		providerVdc: String;
		providerVdcName: String;
		status: String;
		storageAllocationMB: long;
		storageLimitMB: long;
		storageUsedMB: long;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultOrgVdcResourcePoolRelationRecord
	{
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		otherAttributes: VclMap;
		resourcePoolMoref: String;
		type: String;
		vc: String;
		vdc: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultOrgVdcStorageProfileRecord
	{
		href: String;
		id: String;
		isDefaultStorageProfile: boolean;
		isEnabled: boolean;
		isVdcBusy: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfConditions: Integer;
		otherAttributes: VclMap;
		storageLimitMB: Integer;
		storageUsedMB: Integer;
		type: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultPortgroupRecord
	{
		href: String;
		id: String;
		isVCEnabled: boolean;
		metadata: VclMetaDataEntries;
		moref: String;
		name: String;
		network: String;
		networkName: String;
		otherAttributes: VclMap;
		portgroupType: String;
		scopeType: Integer;
		type: String;
		vc: String;
		vcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultProviderVdcResourcePoolRelationRecord
	{
		cpuReservationAllocationMhz: long;
		cpuReservationLimitMhz: long;
		href: String;
		id: String;
		isEnabled: boolean;
		isPrimary: boolean;
		memoryReservationAllocationMB: long;
		memoryReservationLimitMB: long;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfVMs: Integer;
		otherAttributes: VclMap;
		providerVdc: String;
		resourcePoolMoref: String;
		type: String;
		vc: String;
		vcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultProviderVdcStorageProfileRecord
	{
		href: String;
		id: String;
		isEnabled: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfConditions: Integer;
		otherAttributes: VclMap;
		providerVdc: String;
		storageProfileMoref: String;
		storageProvisionedMB: long;
		storageRequestedMB: long;
		storageTotalMB: long;
		storageUsedMB: long;
		type: String;
		vc: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultRecords
	{
		href: String;
		name: String;
		otherAttributes: VclMap;
		page: Integer;
		pageSize: Integer;
		record: VclAbstractObjectSet;
		total: long;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultResourceClassActionRecord
	{
		href: String;
		httpMethod: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		resourceClass: String;
		type: String;
		urlPattern: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultResourceClassRecord
	{
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		mimeType: String;
		name: String;
		nid: String;
		otherAttributes: VclMap;
		service: String;
		type: String;
		urlTemplate: String;
		urnPattern: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultResourcePoolRecord
	{
		href: String;
		id: String;
		isDeleted: boolean;
		metadata: VclMetaDataEntries;
		moref: String;
		name: String;
		otherAttributes: VclMap;
		type: String;
		vc: String;
		vcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultResourcePoolVMRecord
	{
		containerName: String;
		guestOs: String;
		hardwareVersion: Integer;
		href: String;
		id: String;
		isBusy: boolean;
		isDeployed: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		status: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultRightRecord
	{
		category: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultRoleRecord
	{
		href: String;
		id: String;
		isReadOnly: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultServiceLinkRecord
	{
		href: String;
		id: String;
		linkHref: String;
		metadata: VclMetaDataEntries;
		mimeType: String;
		otherAttributes: VclMap;
		rel: String;
		resourceId: String;
		resourceType: String;
		service: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultServiceRecord
	{
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		namespace: String;
		otherAttributes: VclMap;
		type: String;
		vendor: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultServiceResourceRecord
	{
		externalObjectId: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		otherAttributes: VclMap;
		resourceClass: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultStrandedItemRecord
	{
		deletionDate: VclXMLGregorianCalendar;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfPurgeAttempts: Integer;
		otherAttributes: VclMap;
		parent: String;
		parentName: String;
		type: String;
		vimObjectType: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultStrandedUserRecord
	{
		fullName: String;
		href: String;
		id: String;
		isInSync: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfDeployedVMs: Integer;
		numberOfStoredVMs: Integer;
		org: String;
		otherAttributes: VclMap;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultTaskRecord
	{
		endDate: VclXMLGregorianCalendar;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		object: String;
		objectName: String;
		objectType: String;
		org: String;
		orgName: String;
		otherAttributes: VclMap;
		ownerName: String;
		serviceNamespace: String;
		startDate: VclXMLGregorianCalendar;
		status: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultUserRecord
	{
		deployedVMQuota: Integer;
		fullName: String;
		href: String;
		id: String;
		identityProviderType: String;
		isEnabled: boolean;
		isLdapUser: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfDeployedVMs: Integer;
		numberOfStoredVMs: Integer;
		otherAttributes: VclMap;
		storedVMQuota: Integer;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultVAppNetworkRecord
	{
		dns1: String;
		dns2: String;
		dnsSuffix: String;
		gateway: String;
		href: String;
		id: String;
		ipScopeId: String;
		isBusy: boolean;
		isIpScopeInherited: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		netmask: String;
		otherAttributes: VclMap;
		type: String;
		vApp: String;
		vAppName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultVAppOrgNetworkRelationRecord
	{
		configurationType: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		orgNetwork: String;
		orgNetworkName: String;
		otherAttributes: VclMap;
		ownerName: String;
		status: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultVAppOrgVdcNetworkRelationRecord
	{
		entityType: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		orgVdcNetwork: String;
		orgVdcNetworkName: String;
		otherAttributes: VclMap;
		ownerName: String;
		status: String;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultVAppRecord
	{
		creationDate: VclXMLGregorianCalendar;
		href: String;
		id: String;
		isBusy: boolean;
		isDeployed: boolean;
		isEnabled: boolean;
		isExpired: boolean;
		isInMaintenanceMode: boolean;
		isPublic: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		ownerName: String;
		status: String;
		type: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultVAppTemplateRecord
	{
		catalogName: String;
		creationDate: VclXMLGregorianCalendar;
		href: String;
		id: String;
		isBusy: boolean;
		isDeployed: boolean;
		isEnabled: boolean;
		isExpired: boolean;
		isGoldMaster: boolean;
		isPublished: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		org: String;
		otherAttributes: VclMap;
		ownerName: String;
		status: String;
		storageProfileName: String;
		type: String;
		vdc: String;
		vdcName: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultVirtualCenterRecord
	{
		href: String;
		id: String;
		isBusy: boolean;
		isEnabled: boolean;
		isSupported: boolean;
		metadata: VclMetaDataEntries;
		name: String;
		otherAttributes: VclMap;
		status: String;
		type: String;
		url: String;
		userName: String;
		uuid: String;
		vcVersion: String;
		vsmIP: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultVmDiskRelationRecord
	{
		disk: String;
		href: String;
		id: String;
		metadata: VclMetaDataEntries;
		otherAttributes: VclMap;
		type: String;
		vdc: String;
		vm: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultVMRecord
	{
		catalogName: String;
		container: String;
		containerName: String;
		guestOs: String;
		hardwareVersion: Integer;
		href: String;
		id: String;
		isBusy: boolean;
		isDeleted: boolean;
		isDeployed: boolean;
		isInMaintenanceMode: boolean;
		isPublished: boolean;
		isVAppTemplate: boolean;
		memoryMB: Integer;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfCpus: Integer;
		otherAttributes: VclMap;
		status: String;
		storageProfileName: String;
		type: String;
		vdc: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclQueryResultVMWProviderVdcRecord
	{
		cpuAllocationMhz: long;
		cpuLimitMhz: long;
		cpuUsedMhz: long;
		href: String;
		id: String;
		isBusy: boolean;
		isDeleted: boolean;
		isEnabled: boolean;
		memoryAllocationMB: long;
		memoryLimitMB: long;
		memoryUsedMB: long;
		metadata: VclMetaDataEntries;
		name: String;
		numberOfDatastores: Integer;
		numberOfStorageProfiles: Integer;
		numberOfVdcs: Integer;
		otherAttributes: VclMap;
		status: String;
		storageAllocationMB: long;
		storageLimitMB: long;
		storageUsedMB: long;
		type: String;
		vcpuRatingMhz: Integer;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclQueryRightField
	{
		CATEGORY: VclQueryRightField;
		HREF: VclQueryRightField;
		ID: VclQueryRightField;
		NAME: VclQueryRightField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryRightField;
	}

	declare const VclQueryRightField: VclQueryRightField;

	interface VclQueryRoleField
	{
		HREF: VclQueryRoleField;
		ID: VclQueryRoleField;
		ISREADONLY: VclQueryRoleField;
		NAME: VclQueryRoleField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryRoleField;
	}

	declare const VclQueryRoleField: VclQueryRoleField;

	interface VclQueryService
	{

		executeQuery(query?: String, formatType?: VclFormatType): VclObject;
	}

	declare const VclQueryService: VclQueryService;

	interface VclQueryServiceField
	{
		HREF: VclQueryServiceField;
		ID: VclQueryServiceField;
		NAME: VclQueryServiceField;
		NAMESPACE: VclQueryServiceField;
		readonly value: String;
		values: String[];
		VENDOR: VclQueryServiceField;

		getObject(value?: String): VclQueryServiceField;
	}

	declare const VclQueryServiceField: VclQueryServiceField;

	interface VclQueryServiceLinkField
	{
		HREF: VclQueryServiceLinkField;
		ID: VclQueryServiceLinkField;
		LINKHREF: VclQueryServiceLinkField;
		MIMETYPE: VclQueryServiceLinkField;
		REL: VclQueryServiceLinkField;
		RESOURCEID: VclQueryServiceLinkField;
		RESOURCETYPE: VclQueryServiceLinkField;
		SERVICE: VclQueryServiceLinkField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryServiceLinkField;
	}

	declare const VclQueryServiceLinkField: VclQueryServiceLinkField;

	interface VclQueryServiceResourceField
	{
		EXTERNALOBJECTID: VclQueryServiceResourceField;
		HREF: VclQueryServiceResourceField;
		ID: VclQueryServiceResourceField;
		NAME: VclQueryServiceResourceField;
		ORG: VclQueryServiceResourceField;
		RESOURCECLASS: VclQueryServiceResourceField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryServiceResourceField;
	}

	declare const VclQueryServiceResourceField: VclQueryServiceResourceField;

	interface VclQueryStrandedItemField
	{
		DELETIONDATE: VclQueryStrandedItemField;
		HREF: VclQueryStrandedItemField;
		ID: VclQueryStrandedItemField;
		NAME: VclQueryStrandedItemField;
		NUMBEROFPURGEATTEMPTS: VclQueryStrandedItemField;
		PARENT: VclQueryStrandedItemField;
		PARENTNAME: VclQueryStrandedItemField;
		readonly value: String;
		values: String[];
		VIMOBJECTTYPE: VclQueryStrandedItemField;

		getObject(value?: String): VclQueryStrandedItemField;
	}

	declare const VclQueryStrandedItemField: VclQueryStrandedItemField;

	interface VclQueryStrandedUserField
	{
		FULLNAME: VclQueryStrandedUserField;
		HREF: VclQueryStrandedUserField;
		ID: VclQueryStrandedUserField;
		ISINSYNC: VclQueryStrandedUserField;
		NAME: VclQueryStrandedUserField;
		NUMBEROFDEPLOYEDVMS: VclQueryStrandedUserField;
		NUMBEROFSTOREDVMS: VclQueryStrandedUserField;
		ORG: VclQueryStrandedUserField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryStrandedUserField;
	}

	declare const VclQueryStrandedUserField: VclQueryStrandedUserField;

	interface VclQueryTaskField
	{
		ENDDATE: VclQueryTaskField;
		HREF: VclQueryTaskField;
		ID: VclQueryTaskField;
		NAME: VclQueryTaskField;
		OBJECT: VclQueryTaskField;
		OBJECTNAME: VclQueryTaskField;
		OBJECTTYPE: VclQueryTaskField;
		ORG: VclQueryTaskField;
		ORGNAME: VclQueryTaskField;
		OWNERNAME: VclQueryTaskField;
		SERVICENAMESPACE: VclQueryTaskField;
		STARTDATE: VclQueryTaskField;
		STATUS: VclQueryTaskField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryTaskField;
	}

	declare const VclQueryTaskField: VclQueryTaskField;

	interface VclQueryUserField
	{
		DEPLOYEDVMQUOTA: VclQueryUserField;
		FULLNAME: VclQueryUserField;
		HREF: VclQueryUserField;
		ID: VclQueryUserField;
		IDENTITYPROVIDERTYPE: VclQueryUserField;
		ISENABLED: VclQueryUserField;
		ISLDAPUSER: VclQueryUserField;
		NAME: VclQueryUserField;
		NUMBEROFDEPLOYEDVMS: VclQueryUserField;
		NUMBEROFSTOREDVMS: VclQueryUserField;
		STOREDVMQUOTA: VclQueryUserField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryUserField;
	}

	declare const VclQueryUserField: VclQueryUserField;

	interface VclQueryVAppField
	{
		CREATIONDATE: VclQueryVAppField;
		HREF: VclQueryVAppField;
		ID: VclQueryVAppField;
		ISBUSY: VclQueryVAppField;
		ISDEPLOYED: VclQueryVAppField;
		ISENABLED: VclQueryVAppField;
		ISEXPIRED: VclQueryVAppField;
		ISINMAINTENANCEMODE: VclQueryVAppField;
		ISPUBLIC: VclQueryVAppField;
		NAME: VclQueryVAppField;
		OWNERNAME: VclQueryVAppField;
		STATUS: VclQueryVAppField;
		readonly value: String;
		values: String[];
		VDC: VclQueryVAppField;
		VDCNAME: VclQueryVAppField;

		getObject(value?: String): VclQueryVAppField;
	}

	declare const VclQueryVAppField: VclQueryVAppField;

	interface VclQueryVAppNetworkField
	{
		DNS1: VclQueryVAppNetworkField;
		DNS2: VclQueryVAppNetworkField;
		DNSSUFFIX: VclQueryVAppNetworkField;
		GATEWAY: VclQueryVAppNetworkField;
		HREF: VclQueryVAppNetworkField;
		ID: VclQueryVAppNetworkField;
		IPSCOPEID: VclQueryVAppNetworkField;
		ISBUSY: VclQueryVAppNetworkField;
		ISIPSCOPEINHERITED: VclQueryVAppNetworkField;
		NAME: VclQueryVAppNetworkField;
		NETMASK: VclQueryVAppNetworkField;
		readonly value: String;
		values: String[];
		VAPP: VclQueryVAppNetworkField;
		VAPPNAME: VclQueryVAppNetworkField;

		getObject(value?: String): VclQueryVAppNetworkField;
	}

	declare const VclQueryVAppNetworkField: VclQueryVAppNetworkField;

	interface VclQueryVAppOrgNetworkRelationField
	{
		CONFIGURATIONTYPE: VclQueryVAppOrgNetworkRelationField;
		HREF: VclQueryVAppOrgNetworkRelationField;
		ID: VclQueryVAppOrgNetworkRelationField;
		NAME: VclQueryVAppOrgNetworkRelationField;
		ORG: VclQueryVAppOrgNetworkRelationField;
		ORGNETWORK: VclQueryVAppOrgNetworkRelationField;
		ORGNETWORKNAME: VclQueryVAppOrgNetworkRelationField;
		OWNERNAME: VclQueryVAppOrgNetworkRelationField;
		STATUS: VclQueryVAppOrgNetworkRelationField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryVAppOrgNetworkRelationField;
	}

	declare const VclQueryVAppOrgNetworkRelationField: VclQueryVAppOrgNetworkRelationField;

	interface VclQueryVAppOrgVdcNetworkRelationField
	{
		ENTITYTYPE: VclQueryVAppOrgVdcNetworkRelationField;
		HREF: VclQueryVAppOrgVdcNetworkRelationField;
		ID: VclQueryVAppOrgVdcNetworkRelationField;
		NAME: VclQueryVAppOrgVdcNetworkRelationField;
		ORG: VclQueryVAppOrgVdcNetworkRelationField;
		ORGVDCNETWORK: VclQueryVAppOrgVdcNetworkRelationField;
		ORGVDCNETWORKNAME: VclQueryVAppOrgVdcNetworkRelationField;
		OWNERNAME: VclQueryVAppOrgVdcNetworkRelationField;
		STATUS: VclQueryVAppOrgVdcNetworkRelationField;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclQueryVAppOrgVdcNetworkRelationField;
	}

	declare const VclQueryVAppOrgVdcNetworkRelationField: VclQueryVAppOrgVdcNetworkRelationField;

	interface VclQueryVAppTemplateField
	{
		CATALOGNAME: VclQueryVAppTemplateField;
		CREATIONDATE: VclQueryVAppTemplateField;
		HREF: VclQueryVAppTemplateField;
		ID: VclQueryVAppTemplateField;
		ISBUSY: VclQueryVAppTemplateField;
		ISDEPLOYED: VclQueryVAppTemplateField;
		ISENABLED: VclQueryVAppTemplateField;
		ISEXPIRED: VclQueryVAppTemplateField;
		ISGOLDMASTER: VclQueryVAppTemplateField;
		ISPUBLISHED: VclQueryVAppTemplateField;
		NAME: VclQueryVAppTemplateField;
		ORG: VclQueryVAppTemplateField;
		OWNERNAME: VclQueryVAppTemplateField;
		STATUS: VclQueryVAppTemplateField;
		STORAGEPROFILENAME: VclQueryVAppTemplateField;
		readonly value: String;
		values: String[];
		VDC: VclQueryVAppTemplateField;
		VDCNAME: VclQueryVAppTemplateField;

		getObject(value?: String): VclQueryVAppTemplateField;
	}

	declare const VclQueryVAppTemplateField: VclQueryVAppTemplateField;

	interface VclQueryVirtualCenterField
	{
		HREF: VclQueryVirtualCenterField;
		ID: VclQueryVirtualCenterField;
		ISBUSY: VclQueryVirtualCenterField;
		ISENABLED: VclQueryVirtualCenterField;
		ISSUPPORTED: VclQueryVirtualCenterField;
		NAME: VclQueryVirtualCenterField;
		STATUS: VclQueryVirtualCenterField;
		URL: VclQueryVirtualCenterField;
		USERNAME: VclQueryVirtualCenterField;
		UUID: VclQueryVirtualCenterField;
		readonly value: String;
		values: String[];
		VCVERSION: VclQueryVirtualCenterField;
		VSMIP: VclQueryVirtualCenterField;

		getObject(value?: String): VclQueryVirtualCenterField;
	}

	declare const VclQueryVirtualCenterField: VclQueryVirtualCenterField;

	interface VclQueryVmDiskRelationField
	{
		DISK: VclQueryVmDiskRelationField;
		HREF: VclQueryVmDiskRelationField;
		ID: VclQueryVmDiskRelationField;
		readonly value: String;
		values: String[];
		VDC: VclQueryVmDiskRelationField;
		VM: VclQueryVmDiskRelationField;

		getObject(value?: String): VclQueryVmDiskRelationField;
	}

	declare const VclQueryVmDiskRelationField: VclQueryVmDiskRelationField;

	interface VclQueryVMField
	{
		CATALOGNAME: VclQueryVMField;
		CONTAINER: VclQueryVMField;
		CONTAINERNAME: VclQueryVMField;
		GUESTOS: VclQueryVMField;
		HARDWAREVERSION: VclQueryVMField;
		HREF: VclQueryVMField;
		ID: VclQueryVMField;
		ISBUSY: VclQueryVMField;
		ISDELETED: VclQueryVMField;
		ISDEPLOYED: VclQueryVMField;
		ISINMAINTENANCEMODE: VclQueryVMField;
		ISPUBLISHED: VclQueryVMField;
		ISVAPPTEMPLATE: VclQueryVMField;
		MEMORYMB: VclQueryVMField;
		NAME: VclQueryVMField;
		NUMBEROFCPUS: VclQueryVMField;
		STATUS: VclQueryVMField;
		STORAGEPROFILENAME: VclQueryVMField;
		readonly value: String;
		values: String[];
		VDC: VclQueryVMField;

		getObject(value?: String): VclQueryVMField;
	}

	declare const VclQueryVMField: VclQueryVMField;

	interface VclQueryVMWProviderVdcField
	{
		CPUALLOCATIONMHZ: VclQueryVMWProviderVdcField;
		CPULIMITMHZ: VclQueryVMWProviderVdcField;
		CPUUSEDMHZ: VclQueryVMWProviderVdcField;
		HREF: VclQueryVMWProviderVdcField;
		ID: VclQueryVMWProviderVdcField;
		ISBUSY: VclQueryVMWProviderVdcField;
		ISDELETED: VclQueryVMWProviderVdcField;
		ISENABLED: VclQueryVMWProviderVdcField;
		MEMORYALLOCATIONMB: VclQueryVMWProviderVdcField;
		MEMORYLIMITMB: VclQueryVMWProviderVdcField;
		MEMORYUSEDMB: VclQueryVMWProviderVdcField;
		NAME: VclQueryVMWProviderVdcField;
		NUMBEROFDATASTORES: VclQueryVMWProviderVdcField;
		NUMBEROFSTORAGEPROFILES: VclQueryVMWProviderVdcField;
		NUMBEROFVDCS: VclQueryVMWProviderVdcField;
		STATUS: VclQueryVMWProviderVdcField;
		STORAGEALLOCATIONMB: VclQueryVMWProviderVdcField;
		STORAGELIMITMB: VclQueryVMWProviderVdcField;
		STORAGEUSEDMB: VclQueryVMWProviderVdcField;
		readonly value: String;
		values: String[];
		VCPURATINGMHZ: VclQueryVMWProviderVdcField;

		getObject(value?: String): VclQueryVMWProviderVdcField;
	}

	declare const VclQueryVMWProviderVdcField: VclQueryVMWProviderVdcField;

	declare class VclRASD
	{
		address: VclCimString;
		addressOnParent: VclCimString;
		allocationUnits: VclCimString;
		automaticAllocation: VclCimBoolean;
		automaticDeallocation: VclCimBoolean;
		bound: String;
		caption: VclResourceAllocationCaption;
		changeableType: VclResourceAllocationChangeable;
		configuration: String;
		configurationName: VclCimString;
		connection: VclObjectList;
		consumerVisibility: VclConsumerVisibility;
		description: VclCimString;
		elementName: VclCimString;
		generation: VclCimUnsignedLong;
		hostResource: VclObjectList;
		instanceID: VclCimString;
		limit: VclCimUnsignedLong;
		mappingBehavior: VclMappingBehavior;
		otherAttributes: VclMap;
		otherResourceType: VclCimString;
		parent: VclCimString;
		poolID: VclCimString;
		required: boolean;
		reservation: VclCimUnsignedLong;
		resourceSubType: VclCimString;
		resourceType: VclResource;
		virtualQuantity: VclCimUnsignedLong;
		virtualQuantityUnits: VclCimString;
		weight: VclCimUnsignedInt;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRasdItemsList
	{
		href: String;
		item: VclObjectList;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRealm
	{
		domain: VclList;
		kdc: String;
		name: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRecomposeVAppParams
	{
		allEULAsAccepted: boolean;
		createItem: VclObjectList;
		deleteItem: VclObjectList;
		deploy: boolean;
		description: String;
		instantiationParams: VclInstantiationParams;
		linkedClone: boolean;
		name: String;
		otherAttributes: VclMap;
		powerOn: boolean;
		sourcedItem: VclObjectList;
		vAppParent: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclRecordResultSet
	{

		getFirstPage(): VclRecordResultSet;
		getLastPage(): VclRecordResultSet;
		getNextPage(): VclRecordResultSet;
		getPage(): Integer;
		getPageSize(): Integer;
		getPreviousPage(): VclRecordResultSet;
		getRecords(): Object[];
		getReferenceResult(): VclReferenceResultSet;
		getTotal(): long;
		hasFirstPage(): boolean;
		hasLastPage(): boolean;
		hasNextPage(): boolean;
		hasPreviousPage(): boolean;
	}

	declare const VclRecordResultSet: VclRecordResultSet;

	declare class VclReference
	{
		href: String;
		id: String;
		name: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclReferenceResultSet
	{

		getFirstPage(): VclReferenceResultSet;
		getLastPage(): VclReferenceResultSet;
		getNextPage(): VclReferenceResultSet;
		getPage(): Integer;
		getPageSize(): Integer;
		getPreviousPage(): VclReferenceResultSet;
		getReferences(): VclReference[];
		getTotal(): long;
		hasFirstPage(): boolean;
		hasLastPage(): boolean;
		hasNextPage(): boolean;
		hasPreviousPage(): boolean;
	}

	declare const VclReferenceResultSet: VclReferenceResultSet;

	declare class VclReferences
	{
		href: String;
		name: String;
		otherAttributes: VclMap;
		page: Integer;
		pageSize: Integer;
		reference: VclObjectSet;
		total: long;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRegisterVAppParams
	{
		description: String;
		externalNatIpMap: VclExternalNatIpMap;
		name: String;
		nicIpMap: VclNicIpMap;
		otherAttributes: VclMap;
		ovf: String;
		ovfToVdcNetworkMap: VclOvfToVdcNetworkMap;
		vCloudExtension: VclObjectList;
		vsToVmxMap: VclVsToVmxMap;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRelativeTime
	{
		interval: short;
		unit: VclTimeUnitType;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRelocateParams
	{
		datastore: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRequestOperationParams
	{
		href: String;
		message: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclResource
	{
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclResourceAllocationCaption
	{
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclResourceAllocationChangeable
	{
		otherAttributes: VclMap;
		value: int;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclResourceAllocationSection
	{
		info: VclMsg;
		item: VclObjectList;
		otherAttributes: VclMap;
		required: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclResourceClassActionParams
	{
		aclRules: VclAclRules;
		description: String;
		href: String;
		httpMethod: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		type: String;
		urlPattern: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclResourceClassActions
	{
		otherAttributes: VclMap;
		resourceClassAction: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclResourceClasses
	{
		otherAttributes: VclMap;
		resourceClass: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclResourceClassParams
	{
		description: String;
		href: String;
		id: String;
		mimeType: String;
		name: String;
		nid: String;
		operationKey: String;
		otherAttributes: VclMap;
		resourceClassActions: VclResourceClassActions;
		serviceResources: VclServiceResources;
		type: String;
		urlTemplate: String;
		urnPattern: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclResourceEntities
	{
		otherAttributes: VclMap;
		resourceEntity: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclResourcePool
	{
		dataStoreRefs: VclVimObjectRefs;
		description: String;
		href: String;
		id: String;
		moRef: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vimObjectType: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclResourceReference
	{
		href: String;
		id: String;
		name: String;
		otherAttributes: VclMap;
		status: Integer;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclRight
	{
		bundleKey: String;
		category: String;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclHostAdmin;
		serviceNamespace: String;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		addToRole(vCloudRoleId?: String): VclRole;
		deleteFromRole(vCloudRoleId?: String): VclRole;
		erase(): void;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
		updateInternalState(): void;
	}

	interface VclRightConstructor {
		new(value?:any): VclRight;
		readonly prototype: VclRight;
	}

	declare const VclRight: VclRightConstructor;

	declare class VclRightParams
	{
		bundleKey: String;
		category: String;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		serviceNamespace: String;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRightReferences
	{
		otherAttributes: VclMap;
		rightReference: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRightRefs
	{
		href: String;
		otherAttributes: VclMap;
		right: VclObjectList;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRights
	{
		right: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclRole
	{
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclHostAdmin;
		rightReferences: VclRightReferences;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		erase(): void;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
		update(): VclRole;
		updateInternalState(): void;
	}

	interface VclRoleConstructor {
		new(value?:any): VclRole;
		readonly prototype: VclRole;
	}

	declare const VclRole: VclRoleConstructor;

	declare class VclRoleParams
	{
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		rightReferences: VclRightReferences;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRoleReferences
	{
		otherAttributes: VclMap;
		roleReference: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRootComputeCapacity
	{
		cpu: VclProviderVdcCapacity;
		isElastic: boolean;
		isHA: boolean;
		memory: VclProviderVdcCapacity;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRouterInfo
	{
		externalIp: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclRuntimeInfoSection
	{
		info: VclMsg;
		otherAttributes: VclMap;
		required: boolean;
		vMWareTools: VclVMWareTools;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSample
	{
		timestamp: VclXMLGregorianCalendar;
		value: VclBigDecimal;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclScopeInfoParams
	{
		id: String;
		name: String;
		objectTypeName: String;

		constructor();
	}

	declare class VclScreenTicket
	{
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclSdkMessage
	{
		ACTUAL_STATUS_CODE_MSG: VclSdkMessage;
		BLOCKING_NOTIFICATION: VclSdkMessage;
		CONTROLLER_NOT_FOUND: VclSdkMessage;
		DATA_NOT_FOUND: VclSdkMessage;
		DELETE_URL_MSG: VclSdkMessage;
		DOWNLOAD_FAILED_MSG: VclSdkMessage;
		DOWNLOAD_URL_MSG: VclSdkMessage;
		DUPLICATE_NAME: VclSdkMessage;
		ENTITY_LINK_NOT_FOUND_MSG: VclSdkMessage;
		EXPECTED_STATUS_CODE_MSG: VclSdkMessage;
		FILE_NOT_FOUND_MSG: VclSdkMessage;
		FILE_UPLOAD_FAILED_MSG: VclSdkMessage;
		GET_SCHEMA_DEFINITION: VclSdkMessage;
		GET_SUPPORTED_VERSIONS_URL_MSG: VclSdkMessage;
		GET_URL_MSG: VclSdkMessage;
		GET_VCLOUD_ID_MSG: VclSdkMessage;
		HTTP_EXCEPTION__UPLOADING_MSG: VclSdkMessage;
		INDEPENDENT_DISK_NOT_FOUND: VclSdkMessage;
		INVALID_NO_FILES_MSG: VclSdkMessage;
		INVALID_OBJECT: VclSdkMessage;
		IO_EXCEPTION_UPLOADING_MSG: VclSdkMessage;
		LINK_NOT_FOUND_MSG: VclSdkMessage;
		LOGIN_ERROR_MSG: VclSdkMessage;
		LOGIN_URL_MSG: VclSdkMessage;
		LOGOUT_INFO_MSG: VclSdkMessage;
		MEDIA_RESOLVED_MSG: VclSdkMessage;
		MISSING_PROPERTY: VclSdkMessage;
		MOREF_NOT_FOUND: VclSdkMessage;
		NO_DOWNLOAD_LINK_MSG: VclSdkMessage;
		NO_ERROR_MSG: VclSdkMessage;
		NO_FILES_TO_UPLOAD_MSG: VclSdkMessage;
		NO_PROGRESS_INFO_MSG: VclSdkMessage;
		NO_RESPONSE_RECEIVED_MSG: VclSdkMessage;
		NO_VIRTUAL_CPU_MSG: VclSdkMessage;
		NO_VIRTUAL_MEMORY_MSG: VclSdkMessage;
		NON_BLOCKING_NOTIFICATION: VclSdkMessage;
		NOT_HARD_DISK_MSG: VclSdkMessage;
		NOT_SUPPORTED_API: VclSdkMessage;
		NOT_VALID_SECTION_MSG: VclSdkMessage;
		OPERATION_NOT_FOUND: VclSdkMessage;
		OPERATION_NOT_SUPPORTED: VclSdkMessage;
		OPERATION_NOT_SUPPORTED_VAPP_MSG: VclSdkMessage;
		OPERATION_NOT_SUPPORTED_VM_MSG: VclSdkMessage;
		ORGS_EMPTY_INFO_MSG: VclSdkMessage;
		OVF_DESCRIPTOR_ALREADY_UPLOADED_MSG: VclSdkMessage;
		OVF_DESCRIPTOR_NOT_UPLOADED_MSG: VclSdkMessage;
		OVF_DESCRIPTOR_NOT_UPLOADED_NO_FILES_MSG: VclSdkMessage;
		POST_CONTENT_TYPE: VclSdkMessage;
		POST_REQUEST_BODY: VclSdkMessage;
		POST_URL_MSG: VclSdkMessage;
		PUT_CONTENT_TYPE: VclSdkMessage;
		PUT_REQUEST_BODY: VclSdkMessage;
		PUT_URL_MSG: VclSdkMessage;
		QUERY_TYPE_NOT_FOUND: VclSdkMessage;
		REDIRECTED_URL_MSG: VclSdkMessage;
		REFERENCE_NOT_FOUND_MSG: VclSdkMessage;
		REQUEST_ID: VclSdkMessage;
		RESOURCE_NOT_FOUND_MSG: VclSdkMessage;
		RESPONSE_MSG: VclSdkMessage;
		SERVICE_NOT_FOUND: VclSdkMessage;
		SESSION_EXTENSION_FAILED: VclSdkMessage;
		STATUS_CODE_MSG: VclSdkMessage;
		STATUS_LINE_MSG: VclSdkMessage;
		STATUS_MSG: VclSdkMessage;
		TASK_ABORTED: VclSdkMessage;
		TASK_CANCELLED: VclSdkMessage;
		TASK_ERRORED: VclSdkMessage;
		TASK_TIMEOUT: VclSdkMessage;
		UNKNOWN_REF_TYPE_MSG: VclSdkMessage;
		UPLOAD_COMPLETE_MSG: VclSdkMessage;
		UPLOAD_FAILED_MSG: VclSdkMessage;
		UPLOAD_FILE_SIZE_MSG: VclSdkMessage;
		readonly value: String;
		values: String[];
		VAPP_IS_A_VM_MSG: VclSdkMessage;
		VAPP_NETWORK_NOT_DEPLOYED: VclSdkMessage;
		VERSION_ERROR_MSG: VclSdkMessage;
		VERSION_NOT_SUPPORTED: VclSdkMessage;
		VIM_OBJECT_REF_NOT_FOUND_MSG: VclSdkMessage;

		getObject(value?: String): VclSdkMessage;
	}

	declare const VclSdkMessage: VclSdkMessage;

	interface VclSelfSignedCsr
	{

		deleteCert(): void;
	}

	declare const VclSelfSignedCsr: VclSelfSignedCsr;

	interface VclService
	{
		description: String;
		href: String;
		id: String;
		name: String;
		namespace: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclHost;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;
		vendor: String;

		getApiDefinitions(): VclApiDefinition[];
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toAdminObject(): VclAdminService;
		toXml(): String;
	}

	declare const VclService: VclService;

	interface VclServiceCertificate
	{

		deleteServiceCert(): void;
	}

	declare const VclServiceCertificate: VclServiceCertificate;

	declare class VclServiceData
	{
		description: String;
		href: String;
		id: String;
		name: String;
		namespace: String;
		operationKey: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vendor: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclServiceParams
	{

	}

	declare const VclServiceParams: VclServiceParams;

	declare class VclServiceResourceParams
	{
		description: String;
		externalObjectId: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		org: VclReference;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclServiceResources
	{
		otherAttributes: VclMap;
		serviceResource: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclServiceTrinityParams
	{
		icmpType: String;
		obtainEquivalenceKey: String;
		port: VclList;
		protocol: String;
		sourcePort: VclList;

		constructor();
	}

	declare class VclSession
	{
		href: String;
		org: String;
		otherAttributes: VclMap;
		type: String;
		user: String;
		userId: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSharedProperties
	{

		constructor();
		getProperty(key?: String): String;
		putProperty(key?: String, value?: String, ttl?: long): void;
	}

	declare class VclShieldManagerParams
	{
		associatedVimServer: VclReference;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		password: String;
		type: String;
		url: String;
		username: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSimpleMetric
	{
		name: String;
		unit: String;
		value: VclBigDecimal;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSmtpServerSettings
	{
		host: String;
		isUseAuthentication: boolean;
		otherAttributes: VclMap;
		password: String;
		port: Integer;
		username: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSmtpSettings
	{
		href: String;
		otherAttributes: VclMap;
		password: String;
		smtpServerName: String;
		smtpServerPort: Integer;
		ssl: boolean;
		type: String;
		useAuthentication: boolean;
		userName: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSnapshot
	{
		created: VclXMLGregorianCalendar;
		otherAttributes: VclMap;
		poweredOn: boolean;
		size: long;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSnapshotSection
	{
		href: String;
		info: VclMsg;
		otherAttributes: VclMap;
		required: boolean;
		snapshot: VclSnapshot;
		type: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclSortType
	{
		SORT_ASC: VclSortType;
		SORT_DESC: VclSortType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclSortType;
	}

	declare const VclSortType: VclSortType;

	declare class VclSourcedCompositionItemParam
	{
		instantiationParams: VclInstantiationParams;
		networkAssignment: VclObjectList;
		otherAttributes: VclMap;
		source: VclReference;
		sourceDelete: boolean;
		storageProfile: VclReference;
		vAppScopedLocalId: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSourcedVmInstantiationParams
	{
		hardwareCustomization: VclInstantiateVmHardwareCustomizationParams;
		localityParams: VclLocalityParams;
		otherAttributes: VclMap;
		source: VclReference;
		storageProfile: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSspiKeytabUpdateParams
	{
		fileSize: long;
		otherAttributes: VclMap;
		sspiServiceProviderName: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSspiKeytabUploadSocket
	{
		otherAttributes: VclMap;
		task: VclTaskParams;
		uploadLocation: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclStartupSection
	{
		info: VclMsg;
		item: VclObjectList;
		otherAttributes: VclMap;
		required: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclStartupSectionItem
	{
		id: String;
		order: int;
		otherAttributes: VclMap;
		startAction: String;
		startDelay: int;
		stopAction: String;
		stopDelay: int;
		waitingForGuest: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclStaticBindingTrinity
	{
		autoConfigureDNS: boolean;
		defaultGateway: String;
		dhcpOptions: VclDhcpOptionsParams;
		dnsType: String;
		domainName: String;
		hostname: String;
		ipAddress: String;
		leaseTime: String;
		macAddress: String;
		nextServer: String;
		readonly obtainEquivalenceKey: String;
		primaryNameServer: String;
		secondaryNameServer: String;
		subnetMask: String;
		vmId: String;
		vmName: String;
		vnicId: Integer;

		deleteBinding(): void;
		updateBinding(params?: VclStaticBindingTrinityParams): VclStaticBindingTrinity;
	}

	declare const VclStaticBindingTrinity: VclStaticBindingTrinity;

	declare class VclStaticBindingTrinityParams
	{
		autoConfigureDNS: boolean;
		defaultGateway: String;
		dhcpOptions: VclDhcpOptionsParams;
		dnsType: String;
		domainName: String;
		hostname: String;
		ipAddress: String;
		leaseTime: String;
		macAddress: String;
		nextServer: String;
		obtainEquivalenceKey: String;
		primaryNameServer: String;
		secondaryNameServer: String;
		subnetMask: String;
		vmId: String;
		vmName: String;
		vnicId: Integer;

		constructor();
	}

	declare class VclStaticRoute
	{
		gatewayInterface: VclReference;
		interface: String;
		name: String;
		network: String;
		nextHopIp: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclStaticRoutingService
	{
		isEnabled: boolean;
		otherAttributes: VclMap;
		staticRoute: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclStrandedItem
	{
		deletionDate: VclXMLGregorianCalendar;
		description: String;
		entityType: String;
		errorMessage: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminExtension;
		strandedItemVimObjects: VclStrandedItemVimObjects;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		erase(): VclTask;
		forceErase(): VclTask;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
	}

	declare const VclStrandedItem: VclStrandedItem;

	declare class VclStrandedItemVimObject
	{
		errorMessage: String;
		name: String;
		vimObjectRef: VclVimObjectRef;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclStrandedItemVimObjects
	{
		strandedItemVimObject: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclStrings
	{
		fileRef: String;
		lang: String;
		msg: VclObjectList;
		otherAttributes: VclMap;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclStringsMsg
	{
		msgid: String;
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSubAllocation
	{
		edgeGateway: VclReference;
		ipRanges: VclIpRanges;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSubAllocations
	{
		href: String;
		otherAttributes: VclMap;
		subAllocation: VclObjectList;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSubnetParticipation
	{
		gateway: String;
		ipAddress: String;
		ipRanges: VclIpRanges;
		netmask: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSupportedHardwareVersions
	{
		otherAttributes: VclMap;
		supportedHardwareVersion: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSupportedOperatingSystemsInfo
	{
		href: String;
		operatingSystemFamilyInfo: VclObjectList;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSupportedVersions
	{
		otherAttributes: VclMap;
		versionInfo: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSyslogServerSettings
	{
		syslogServerIp1: String;
		syslogServerIp2: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSystemPasswordPolicySettings
	{
		accountLockoutEnabled: boolean;
		accountLockoutIntervalMinutes: int;
		adminAccountLockoutEnabled: boolean;
		href: String;
		invalidLoginsBeforeLockout: int;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclSystemSettings
	{
		amqpSettings: VclAmqpSettings;
		blockingTaskSettings: VclBlockingTaskSettings;
		brandingSettings: VclBrandingSettings;
		catalogSettings: VclCatalogSettings;
		emailSettings: VclEmailSettings;
		generalSettings: VclGeneralSettings;
		href: String;
		kerberosSettings: VclKerberosSettings;
		ldapSettings: VclLdapSettings;
		license: VclLicense;
		lookupServiceSettings: VclLookupServiceSettings;
		notificationsSettings: VclNotificationsSettings;
		otherAttributes: VclMap;
		passwordPolicySettings: VclSystemPasswordPolicySettings;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclTask
	{
		cancelRequested: boolean;
		description: String;
		details: String;
		endTime: VclXMLGregorianCalendar;
		error: VclError;
		expiryTime: VclXMLGregorianCalendar;
		href: String;
		id: String;
		name: String;
		operation: String;
		operationKey: String;
		operationName: String;
		organization: VclReference;
		readonly otherAttributes: VclMap;
		owner: VclReference;
		params: Object;
		progress: Integer;
		serviceNamespace: String;
		startTime: VclXMLGregorianCalendar;
		status: String;
		type: String;
		user: VclReference;
		readonly vCloudExtension: VclObjectList;

		cancel(): void;
		createEndOfTaskTrigger(timeout?: long): Trigger;
		getBlockingTask(): VclBlockingTask;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getIsBlockingTask(): boolean;
		getParams(type?: Object): Object;
		join(timeout?: long, period?: int): void;
		toXml(): String;
		update(params?: VclTaskParams): VclTask;
		updateInternalState(): void;
	}

	declare const VclTask: VclTask;

	declare class VclTaskOperationList
	{
		href: String;
		operation: VclList;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclTaskParams
	{
		cancelRequested: boolean;
		description: String;
		details: String;
		endTime: VclXMLGregorianCalendar;
		error: VclError;
		expiryTime: VclXMLGregorianCalendar;
		href: String;
		id: String;
		name: String;
		operation: String;
		operationKey: String;
		operationName: String;
		organization: VclReference;
		otherAttributes: VclMap;
		owner: VclReference;
		params: Object;
		progress: Integer;
		serviceNamespace: String;
		startTime: VclXMLGregorianCalendar;
		status: String;
		type: String;
		user: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclTaskRequestBase
	{
		createdTime: VclXMLGregorianCalendar;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		organization: VclReference;
		otherAttributes: VclMap;
		taskOwner: VclReference;
		timeoutAction: String;
		timeoutDate: VclXMLGregorianCalendar;
		type: String;
		user: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclTasksInProgress
	{

		getTasks(): VclTask[];
	}

	declare const VclTasksInProgress: VclTasksInProgress;

	interface VclTaskStatusType
	{
		ABORTED: VclTaskStatusType;
		CANCELED: VclTaskStatusType;
		ERROR: VclTaskStatusType;
		PRERUNNING: VclTaskStatusType;
		QUEUED: VclTaskStatusType;
		RUNNING: VclTaskStatusType;
		SUCCESS: VclTaskStatusType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclTaskStatusType;
	}

	declare const VclTaskStatusType: VclTaskStatusType;

	declare class VclTimeSeriesMetric
	{
		expectedInterval: int;
		name: String;
		sample: VclObjectList;
		unit: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclTimeUnitType
	{
		DAY: VclTimeUnitType;
		HOUR: VclTimeUnitType;
		MINUTE: VclTimeUnitType;
		SECOND: VclTimeUnitType;
		readonly value: String;
		values: String[];
		WEEK: VclTimeUnitType;

		getObject(value?: String): VclTimeUnitType;
	}

	declare const VclTimeUnitType: VclTimeUnitType;

	declare class VclTrustObjectDataParams
	{
		description: String;
		extendedAttributes: VclObjectList;
		isUniversal: boolean;
		name: String;
		nodeId: String;
		passphrase: String;
		pemEncoding: String;
		privateKey: String;
		scope: VclScopeInfoParams;
		type: VclObjectTypeParams;
		universalRevision: long;

		constructor();
	}

	declare class VclTrustStoreUpdateParams
	{
		fileSize: long;
		otherAttributes: VclMap;
		password: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclTrustStoreUploadSocket
	{
		otherAttributes: VclMap;
		task: VclTaskParams;
		uploadLocation: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclUndeployPowerActionType
	{
		DEFAULT: VclUndeployPowerActionType;
		FORCE: VclUndeployPowerActionType;
		POWEROFF: VclUndeployPowerActionType;
		SHUTDOWN: VclUndeployPowerActionType;
		SUSPEND: VclUndeployPowerActionType;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclUndeployPowerActionType;
	}

	declare const VclUndeployPowerActionType: VclUndeployPowerActionType;

	declare class VclUndeployVAppParams
	{
		otherAttributes: VclMap;
		undeployPowerAction: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclUpdateProviderVdcStorageProfilesParams
	{
		addStorageProfile: VclList;
		description: String;
		name: String;
		otherAttributes: VclMap;
		removeStorageProfile: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclUpdateResourcePoolSetParams
	{
		addItem: VclObjectList;
		deleteItem: VclObjectList;
		description: String;
		name: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclUpdateRightsParams
	{
		addRight: VclObjectList;
		removeRight: VclList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclUpdateVdcStorageProfiles
	{
		addStorageProfile: VclObjectList;
		description: String;
		name: String;
		otherAttributes: VclMap;
		removeStorageProfile: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclUploadVAppTemplateParams
	{
		description: String;
		manifestRequired: boolean;
		name: String;
		otherAttributes: VclMap;
		sourceHref: String;
		transferFormat: String;
		vCloudExtension: VclObjectList;
		vdcStorageProfile: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclUser
	{
		alertEmail: String;
		alertEmailPrefix: String;
		deployedVmQuota: Integer;
		description: String;
		emailAddress: String;
		fullName: String;
		groupReferences: VclGroupsList;
		href: String;
		id: String;
		iM: String;
		isAlertEnabled: boolean;
		isDefaultCached: boolean;
		isEnabled: boolean;
		isExternal: boolean;
		isGroupRole: boolean;
		isLocked: boolean;
		name: String;
		nameInSource: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminOrganization;
		password: String;
		providerType: String;
		role: VclReference;
		storedVmQuota: Integer;
		tasks: VclTasksInProgress;
		telephone: String;
		type: String;
		readonly vCloudExtension: VclObjectList;

		erase(): void;
		getContainedObjects(): Object[];
		getEntityRights(entities?: VclReference[]): VclEntityRights[];
		getGrantedRights(): VclRight[];
		getGroups(): VclGroup[];
		getHost(): VclHost;
		getReference(): VclReference;
		takeOwnership(): void;
		toXml(): String;
		unlock(): void;
		update(): VclUser;
		updateInternalState(): void;
	}

	interface VclUserConstructor {
		new(value?:any): VclUser;
		readonly prototype: VclUser;
	}

	declare const VclUser: VclUserConstructor;

	declare class VclUserEntityRights
	{
		entityRights: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclUserParams
	{
		alertEmail: String;
		alertEmailPrefix: String;
		deployedVmQuota: Integer;
		description: String;
		emailAddress: String;
		fullName: String;
		groupReferences: VclGroupsList;
		href: String;
		id: String;
		iM: String;
		isAlertEnabled: boolean;
		isDefaultCached: boolean;
		isEnabled: boolean;
		isExternal: boolean;
		isGroupRole: boolean;
		isLocked: boolean;
		name: String;
		nameInSource: String;
		operationKey: String;
		otherAttributes: VclMap;
		password: String;
		providerType: String;
		role: VclReference;
		storedVmQuota: Integer;
		telephone: String;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclUsersList
	{
		otherAttributes: VclMap;
		userReference: VclObjectList;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVApp
	{
		dateCreated: VclXMLGregorianCalendar;
		deployed: boolean;
		description: String;
		files: VclFilesList;
		href: String;
		id: String;
		inMaintenanceMode: boolean;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		ovfDescriptorUploaded: boolean;
		owner: VclOwner;
		parent: VclVdc;
		readonly section: VclAbstractObjectSet;
		status: Integer;
		tasks: VclTasksInProgress;
		type: String;
		vAppParent: VclReference;
		vAppSize: VclBigInteger;
		vappStatus: VclVappStatus;
		readonly vCloudExtension: VclObjectList;

		changeOwner(userRef?: VclReference): void;
		createSnapshot(name?: String, description?: String, memory?: boolean, quiesce?: boolean): VclTask;
		deploy(powerOn?: boolean, lease?: int, forceCustomization?: boolean): VclTask;
		disableDownload(): void;
		disableMaintenance(): void;
		discardSuspendedState(): void;
		download(): void;
		enableDownload(): VclTask;
		enableMaintenance(): void;
		erase(): VclTask;
		getChildrenVApps(): VclVApp[];
		getChildrenVms(): VclVM[];
		getContainedObjects(): Object[];
		getControlAccess(): VclControlAccessParams;
		getHost(): VclHost;
		getLeaseSettingsSection(): VclLeaseSettingsSection;
		getMetadata(): VclMetadata;
		getNetworkConfigSection(): VclNetworkConfigSection;
		getNetworkNames(): String[];
		getNetworkSection(): VclNetworkSection;
		getNetworkVimRef(): VclVimObjectRef;
		getProductSections(): VclProductSection[];
		getReference(): VclReference;
		getSnapshotSection(): VclSnapshotSection;
		getStartUpSection(): VclStartupSection;
		getVappNetworkConfigurations(): VclVAppNetworkConfiguration[];
		getVAppNetworks(): VclVAppNetwork[];
		powerOff(): VclTask;
		powerOn(): VclTask;
		reboot(): VclTask;
		recompose(params?: VclRecomposeVAppParams): VclTask;
		removeAllSnapshots(): VclTask;
		reset(): VclTask;
		resetVAppNetwork(networkName?: String): VclTask;
		reverToCurrentSnapshot(): VclTask;
		shutdown(): VclTask;
		suspend(): VclTask;
		syncSyslogServer(vAppNetworkName?: String): VclTask;
		toXml(): String;
		undeploy(undeployPowerActionType?: VclUndeployPowerActionType): VclTask;
		update(): VclTask;
		updateControlAccess(params?: VclControlAccessParams): VclControlAccessParams;
		updateInternalState(): void;
		updateProductSections(productSections?: VclProductSection[]): VclTask;
		updateSection(section?: Object): VclTask;
	}

	declare const VclVApp: VclVApp;

	declare class VclVAppCreationParams
	{
		deploy: boolean;
		description: String;
		instantiationParams: VclInstantiationParams;
		name: String;
		otherAttributes: VclMap;
		powerOn: boolean;
		vAppParent: VclReference;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVAppNetwork
	{
		configuration: VclNetworkConfiguration;
		deployed: boolean;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclVApp;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		reset(): VclTask;
		toXml(): String;
		updateInternalState(): void;
	}

	interface VclVAppNetworkConstructor {
		new(value?:any): VclVAppNetwork;
		readonly prototype: VclVAppNetwork;
	}

	declare const VclVAppNetwork: VclVAppNetworkConstructor;

	declare class VclVAppNetworkConfiguration
	{
		configuration: VclNetworkConfiguration;
		description: String;
		href: String;
		isDeployed: boolean;
		networkName: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVappStatus
	{
		FAILED_CREATION: VclVappStatus;
		INCONSISTENT_STATE: VclVappStatus;
		MIXED: VclVappStatus;
		POWERED_OFF: VclVappStatus;
		POWERED_ON: VclVappStatus;
		RESOLVED: VclVappStatus;
		SUSPENDED: VclVappStatus;
		UNKNOWN: VclVappStatus;
		UNRECOGNIZED: VclVappStatus;
		UNRESOLVED: VclVappStatus;
		readonly value: String;
		values: String[];
		WAITING_FOR_INPUT: VclVappStatus;

		getObject(value?: String): VclVappStatus;
	}

	declare const VclVappStatus: VclVappStatus;

	interface VclVAppTemplate
	{
		dateCreated: VclXMLGregorianCalendar;
		defaultStorageProfile: String;
		description: String;
		files: VclFilesList;
		goldMaster: boolean;
		href: String;
		id: String;
		isPartOfCatalogItem: boolean;
		isVm: boolean;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		ovfDescriptorUploaded: boolean;
		owner: VclOwner;
		parent: VclVdc;
		readonly section: VclAbstractObjectSet;
		status: Integer;
		tasks: VclTasksInProgress;
		type: String;
		vAppScopedLocalId: String;
		vAppTemplateSize: VclBigInteger;
		vappTemplateStatus: VclVappTemplateStatus;
		readonly vCloudExtension: VclObjectList;
		vmDatastoreVimRef: VclVimObjectRef;
		vmDiskChainLength: Integer;
		vmHostVimRef: VclVimObjectRef;
		vmVimRef: VclVimObjectRef;

		consolidate(): VclTask;
		disableDownload(): void;
		downloadFile(alias?: String, filename?: String): void;
		downloadLosslessOVF(filename?: String): void;
		downloadOVFFile(filename?: String): void;
		enableDownload(): VclTask;
		erase(): VclTask;
		getCatalogItem(): VclCatalogItem;
		getChildren(): VclVAppTemplate[];
		getContainedObjects(): VclVAppTemplate[];
		getCustomizationSection(): VclCustomizationSection;
		getDownloadFileNames(): String[];
		getGuestCustomizationSection(): VclGuestCustomizationSection;
		getHost(): VclHost;
		getLeaseSettingsSection(): VclLeaseSettingsSection;
		getMetadata(): VclMetadata;
		getNetworkConfigSection(): VclNetworkConfigSection;
		getNetworkConnectionSection(): VclNetworkConnectionSection;
		getNetworkSection(): VclNetworkSection;
		getOVF(): VclEnvelope;
		getOVFDownloadURL(): String;
		getOwner(): VclReference;
		getProductSections(): VclProductSection[];
		getReference(): VclReference;
		getShadowVmReferences(): VclReference[];
		getStorageProfileReference(): VclReference;
		getUploadFileNames(): String[];
		getUploadFilePaths(ovfBasePath?: String): String[];
		getVirtualCpu(): VclVirtualCpu;
		getVirtualDisks(): VclVirtualDisk[];
		getVirtualHardwareSection(): VclVirtualHardwareSection;
		getVirtualMedias(): VclVirtualMedia[];
		getVirtualMemory(): VclVirtualMemory;
		getVirtualNetworkCards(): VclVirtualNetworkCard[];
		getVMDatastoreVimRef(): VclVimObjectRef;
		getVMDiskChainLength(): int;
		getVMHostVimRef(): VclVimObjectRef;
		getVMVimRef(): VclVimObjectRef;
		relocate(datastoreRef?: VclReference): VclTask;
		toXml(): String;
		update(): VclTask;
		updateGoldMaster(value?: boolean): VclTask;
		updateInternalState(): void;
		updateSection(section?: Object): VclTask;
		uploadFile(filename?: String, alias?: String): void;
		uploadFileChunk(filename?: String, alias?: String, startByte?: long, endByte?: long): void;
		uploadOVFEnvelope(envelope?: VclEnvelope): void;
		uploadOVFFile(filename?: String): String;
	}

	declare const VclVAppTemplate: VclVAppTemplate;

	interface VclVappTemplateStatus
	{
		COPYING_CONTENTS: VclVappTemplateStatus;
		DESCRIPTOR_PENDING: VclVappTemplateStatus;
		DISK_CONTENTS_PENDING: VclVappTemplateStatus;
		FAILED_CREATION: VclVappTemplateStatus;
		MIXED: VclVappTemplateStatus;
		POWERED_OFF: VclVappTemplateStatus;
		QUARANTINE_EXPIRED: VclVappTemplateStatus;
		QUARANTINED: VclVappTemplateStatus;
		REJECTED: VclVappTemplateStatus;
		RESOLVED: VclVappTemplateStatus;
		TRANSFER_TIMEOUT: VclVappTemplateStatus;
		UNKNOWN: VclVappTemplateStatus;
		UNRECOGNIZED: VclVappTemplateStatus;
		UNRESOLVED: VclVappTemplateStatus;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclVappTemplateStatus;
	}

	declare const VclVappTemplateStatus: VclVappTemplateStatus;

	declare class VclVCloud
	{
		description: String;
		href: String;
		id: String;
		name: String;
		networks: VclNetworks;
		operationKey: String;
		organizationReferences: VclOrganizationReferences;
		otherAttributes: VclMap;
		providerVdcReferences: VclProviderVdcReferences;
		rightReferences: VclRightReferences;
		roleReferences: VclRoleReferences;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVCloudExtension
	{
		otherAttributes: VclMap;
		required: boolean;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVcTrustStoreUpdateParams
	{
		fileSize: long;
		otherAttributes: VclMap;
		password: String;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVcTrustStoreUploadSocket
	{
		otherAttributes: VclMap;
		task: VclTaskParams;
		uploadLocation: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVdc
	{
		allocationModel: String;
		availableNetworks: VclAvailableNetworks;
		capabilities: VclCapabilities;
		computeCapacity: VclComputeCapacity;
		description: String;
		href: String;
		id: String;
		isEnabled: boolean;
		name: String;
		networkQuota: Integer;
		nicQuota: Integer;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclOrganization;
		resourceEntities: VclResourceEntities;
		status: Integer;
		storageCapacity: VclCapacityWithUsage;
		tasks: VclTasksInProgress;
		type: String;
		usedNetworkCount: Integer;
		readonly vCloudExtension: VclObjectList;
		vdcStorageProfiles: VclVdcStorageProfiles;
		vmQuota: Integer;

		captureVApp(params?: VclCaptureVAppParams): VclVAppTemplate;
		cloneMedia(params?: VclCloneMediaParams): VclMedia;
		cloneVApp(params?: VclCloneVAppParams): VclVApp;
		cloneVAppTemplate(params?: VclCloneVAppTemplateParams): VclVAppTemplate;
		composeVApp(params?: VclComposeVAppParams): VclVApp;
		createDisk(params?: VclDiskCreateParams): VclDisk;
		createVAppTemplate(params?: VclUploadVAppTemplateParams): VclVAppTemplate;
		createVmAffinityRule(vmAffinityRule?: VclVmAffinityRule): VclTask;
		erase(): VclTask;
		getContainedObjects(): Object[];
		getDisks(): VclDisk[];
		getHost(): VclHost;
		getMedias(): VclMedia[];
		getMetadata(): VclMetadata;
		getOrgVdcNetworks(): VclOrgVdcNetwork[];
		getReference(): VclReference;
		getStorageProfiles(): VclVdcStorageProfile[];
		getVApps(): VclVApp[];
		getVAppTemplates(): VclVAppTemplate[];
		getVmAffinityRules(): VclVmAffinity[];
		instantiateVAppTemplate(params?: VclInstantiateVAppTemplateParams): VclVApp;
		toAdminObject(): VclAdminVdc;
		toXml(): String;
		update(): VclTask;
		updateInternalState(): void;
		uploadMedia(name?: String, description?: String, imageType?: VclImageType, storageProfileRef?: VclReference, filename?: String): VclMedia;
		uploadVapp(ovfParams?: VclInstantiateOvfParams, localOvfFileLocation?: String): VclVApp;
		uploadVappTemplate(vAppTemplateName?: String, vAppTemplateDesc?: String, localOvfFileLocation?: String, manifestRequired?: boolean, storageProfileRef?: VclReference, catalogRef?: VclReference): VclVAppTemplate;
	}

	declare const VclVdc: VclVdc;

	declare class VclVdcReferences
	{
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vdcReference: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVdcs
	{
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;
		vdc: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVdcStorageProfile
	{
		default: boolean;
		description: String;
		enabled: boolean;
		href: String;
		id: String;
		limit: long;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclVdc;
		tasks: VclTasksInProgress;
		type: String;
		units: String;
		readonly vCloudExtension: VclObjectList;

		getContainedObjects(): Object[];
		getHost(): VclHost;
		getMetadata(): VclMetadata;
		getReference(): VclReference;
		toAdminObject(): VclAdminVdcStorageProfile;
		toXml(): String;
		updateInternalState(): void;
	}

	declare const VclVdcStorageProfile: VclVdcStorageProfile;

	declare class VclVdcStorageProfileParams
	{
		default: boolean;
		enabled: boolean;
		limit: long;
		otherAttributes: VclMap;
		providerVdcStorageProfile: VclReference;
		units: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVdcStorageProfiles
	{
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;
		vdcStorageProfile: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVdcTemplateSpecificationGatewayConfiguration
	{
		gateway: VclGatewayParams;
		network: VclOrgVdcNetworkParams;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVdsContext
	{
		vdsContext: VclVimObjectRef;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVendorServices
	{
		edgeGatewayServices: VclObjectList;
		networkServices: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVendorTemplate
	{
		id: String;
		name: String;
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;
		vendorTemplateAttributes: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVendorTemplateAttributes
	{
		key: String;
		name: String;
		otherAttributes: VclMap;
		value: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVersion
	{
		V1_5: VclVersion;
		V20_0: VclVersion;
		V5_1: VclVersion;
		V5_5: VclVersion;
		V5_6: VclVersion;
		V5_7: VclVersion;
		V9_0: VclVersion;
		readonly value: String;
		values: String[];

		getObject(value?: String): VclVersion;
	}

	declare const VclVersion: VclVersion;

	declare class VclVersionInfo
	{
		loginUrl: String;
		mediaTypeMapping: VclObjectList;
		otherAttributes: VclMap;
		version: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVersions
	{
		otherAttributes: VclMap;
		vCloudExtension: VclObjectList;
		version: VclList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVimObjectRef
	{
		moRef: String;
		vimObjectType: String;
		vimServerRef: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVimObjectRefList
	{
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vimObjectRefs: VclVimObjectRefs;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVimObjectRefs
	{
		vimObjectRef: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVimObjectTypeEnum
	{
		CLUSTER_COMPUTE_RESOURCE: VclVimObjectTypeEnum;
		DATASTORE: VclVimObjectTypeEnum;
		DATASTORE_CLUSTER: VclVimObjectTypeEnum;
		DV_PORTGROUP: VclVimObjectTypeEnum;
		DV_SWITCH: VclVimObjectTypeEnum;
		FILE: VclVimObjectTypeEnum;
		FOLDER: VclVimObjectTypeEnum;
		HOST: VclVimObjectTypeEnum;
		NETWORK: VclVimObjectTypeEnum;
		RESOURCE_POOL: VclVimObjectTypeEnum;
		SHIELD_MANAGER: VclVimObjectTypeEnum;
		STORAGE_PROFILE: VclVimObjectTypeEnum;
		readonly value: String;
		values: String[];
		VIRTUAL_APP: VclVimObjectTypeEnum;
		VIRTUAL_MACHINE: VclVimObjectTypeEnum;

		getObject(value?: String): VclVimObjectTypeEnum;
	}

	declare const VclVimObjectTypeEnum: VclVimObjectTypeEnum;

	interface VclVimServer
	{
		description: String;
		href: String;
		id: String;
		isConnected: boolean;
		isEnabled: boolean;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminExtension;
		password: String;
		shieldManagerHost: String;
		shieldManagerUserName: String;
		tasks: VclTasksInProgress;
		type: String;
		url: String;
		username: String;
		useVsphereService: boolean;
		uuid: String;
		readonly vCloudExtension: VclObjectList;
		vcProxy: String;
		vcVersion: String;
		vsphereWebClientServerUrl: String;

		forceReconnect(): VclTask;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getNetworkRefs(): VclVmObjectRef[];
		getReference(): VclReference;
		getResourcePools(): VclResourcePool[];
		getShieldManager(): VclShieldManagerParams;
		getStorageProfiles(): VclVMWStorageProfile[];
		getVmrefs(): VclVmObjectRef[];
		importMedia(params?: VclImportMediaParams): VclMedia;
		importVmAsVApp(params?: VclImportVmAsVAppParams): VclVApp;
		importVmAsVAppTemplate(params?: VclImportVmAsVAppTemplateParams): VclVAppTemplate;
		importVmIntoVApp(params?: VclImportVmIntoExistingVAppParams): VclTask;
		refresh(): VclTask;
		refreshStorageProfiles(): VclTask;
		toXml(): String;
		unregister(): VclTask;
		update(): VclTask;
		updateInternalState(): void;
		updateShieldManager(params?: VclShieldManagerParams): VclTask;
	}

	declare const VclVimServer: VclVimServer;

	declare class VclVimServerParams
	{
		description: String;
		href: String;
		id: String;
		isConnected: boolean;
		isEnabled: boolean;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		password: String;
		shieldManagerHost: String;
		shieldManagerUserName: String;
		type: String;
		url: String;
		username: String;
		useVsphereService: boolean;
		uuid: String;
		vCloudExtension: VclObjectList;
		vcProxy: String;
		vcVersion: String;
		vsphereWebClientServerUrl: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVirtualCpu
	{
		readonly itemResource: VclRASD;
		noOfCpus: int;

		getCoresPerSocket(): Integer;
		getNoOfCpus(): Integer;
		setCoresPerSocket(coresPerSocket?: Integer): void;
		setNoOfCpus(value?: Integer): void;
	}

	declare const VclVirtualCpu: VclVirtualCpu;

	declare class VclVirtualDisk
	{
		hardDiskBusType: String;
		hardDiskSize: VclBigInteger;
		readonly itemResource: VclRASD;

		constructor(virtualDiskItem?: VclRASD);
		isHardDisk(): boolean;
		overrideStorageVmProfile(state?: boolean): void;
		updateHardDiskSize(size?: VclBigInteger): void;
		updateStorageProfile(referenceType?: VclReference): void;
	}

	declare class VclVirtualDiskDesc
	{
		capacity: String;
		capacityAllocationUnits: String;
		diskId: String;
		fileRef: String;
		format: String;
		otherAttributes: VclMap;
		parentRef: String;
		populatedSize: long;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVirtualHardwareSection
	{
		id: String;
		info: VclMsg;
		item: VclObjectList;
		otherAttributes: VclMap;
		required: boolean;
		system: VclVSSD;
		transport: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVirtualMachineMetrics
	{
		virtualMachine: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVirtualMedia
	{
		readonly itemResource: VclRASD;

	}

	declare const VclVirtualMedia: VclVirtualMedia;

	interface VclVirtualMemory
	{
		readonly itemResource: VclRASD;
		memorySize: VclBigInteger;

	}

	declare const VclVirtualMemory: VclVirtualMemory;

	declare class VclVirtualNetworkCard
	{
		connected: boolean;
		ipAddress: String;
		ipAddressingMode: String;
		readonly itemResource: VclRASD;
		macAddress: String;
		network: String;
		primaryNetworkConnection: boolean;

		constructor(virtualNetworkCardItem?: VclRASD);
		constructor(nicId?: Integer, isConnected?: boolean, networkName?: String, isPrimaryNetworkConnection?: boolean, ipAddressingMode?: VclIpAddressAllocationModeType, ipAddress?: String, adapterType?: NetworkAdapterType);
		resetMacAddress(): void;
		updateIpAddress(ipAddress?: String): void;
		updateNetwork(networkName?: String): void;
	}

	declare class VclVirtualSystem
	{
		id: String;
		info: VclMsg;
		name: VclMsg;
		otherAttributes: VclMap;
		section: VclAbstractObjectSet;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVirtualSystemCaption
	{
		otherAttributes: VclMap;
		value: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVirtualSystemChangeable
	{
		otherAttributes: VclMap;
		value: int;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVirtualSystemCollection
	{
		content: VclAbstractObjectSet;
		id: String;
		info: VclMsg;
		name: VclMsg;
		otherAttributes: VclMap;
		section: VclAbstractObjectSet;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVlanPoolParams
	{
		description: String;
		files: VclFilesList;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		promiscuousMode: boolean;
		status: Integer;
		type: String;
		usedNetworksCount: Integer;
		vCloudExtension: VclObjectList;
		vimSwitchRef: VclVimObjectRef;
		vlanRange: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVM
	{
		dateCreated: VclXMLGregorianCalendar;
		deployed: boolean;
		description: String;
		environment: VclEnvironment;
		files: VclFilesList;
		href: String;
		id: String;
		name: String;
		needsCustomization: boolean;
		nestedHypervisorEnabled: boolean;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclVApp;
		readonly section: VclAbstractObjectSet;
		status: Integer;
		storageProfile: VclReference;
		tasks: VclTasksInProgress;
		type: String;
		vAppParent: VclReference;
		vAppScopedLocalId: String;
		readonly vCloudExtension: VclObjectList;
		vmCapabilities: VclVmCapabilities;
		vmSize: VclBigInteger;
		vmStatus: VclVMStatus;

		acquireTicket(): VclScreenTicket;
		answerVmQuestion(choiceId?: int, questionId?: String): void;
		attachDisk(diskRef?: VclReference): VclTask;
		checkCompliance(): VclTask;
		consolidate(): VclTask;
		createSnapshot(name?: String, description?: String, memory?: boolean, quiesce?: boolean): VclTask;
		deploy(powerOn?: boolean, lease?: int, forceCustomization?: boolean): VclTask;
		detachDisk(diskRef?: VclReference): VclTask;
		disableNestedHypervisor(): VclTask;
		discardSuspendedState(): void;
		ejectMedia(params?: VclMediaInsertOrEjectParams): VclTask;
		enableNestedHypervisor(): VclTask;
		erase(): VclTask;
		forceGuestCustomization(): void;
		getAttachedDisks(): VclDisk[];
		getComplianceResult(): VclComplianceResult;
		getContainedObjects(): Object[];
		getCpu(): VclVirtualCpu;
		getCurrentUsage(): VclCurrentUsage;
		getCurrentUsageUsingSpec(currentUsageSpec?: VclCurrentUsageSpec): VclCurrentUsage;
		getDisks(): VclVirtualDisk[];
		getGuestCustomizationSection(): VclGuestCustomizationSection;
		getHistoricUsage(): VclHistoricUsage;
		getHistoricUsageUsingSpec(historicUsageSpec?: VclHistoricUsageSpec): VclHistoricUsage;
		getHost(): VclHost;
		getIsVMwareToolsInstalled(): boolean;
		getMedias(): VclVirtualMedia[];
		getMemory(): VclVirtualMemory;
		getMetadata(): VclMetadata;
		getNetworkCards(): VclVirtualNetworkCard[];
		getNetworkConnectionSection(): VclNetworkConnectionSection;
		getOperatingSystemSection(): VclOperatingSystemSection;
		getPlatformSection(): VclPlatformSection;
		getProductSections(): VclProductSection[];
		getPropertySection(): VclPropertySection;
		getReference(): VclReference;
		getRuntimeInfoSection(): VclRuntimeInfoSection;
		getScreen(filename?: String): void;
		getSnapshotSection(): VclSnapshotSection;
		getVirtualHardwareSection(): VclVirtualHardwareSection;
		getVMDatastoreVimRef(): VclVimObjectRef;
		getVMDiskChainLength(): int;
		getVMHostVimRef(): VclVimObjectRef;
		getVmQuestion(): VclVmPendingQuestion;
		getVmStatusDescription(): String;
		getVMVimRef(): VclVimObjectRef;
		insertMedia(params?: VclMediaInsertOrEjectParams): VclTask;
		installVMwareTools(): VclTask;
		powerOff(): VclTask;
		powerOn(): VclTask;
		reboot(): VclTask;
		reconfigure(params?: VclVmParams): VclTask;
		reloadFromVC(): VclTask;
		relocate(datastoreRef?: VclReference): VclTask;
		removeAllSnapshots(): VclTask;
		reset(): VclTask;
		reverToCurrentSnapshot(): VclTask;
		shutdown(): VclTask;
		suspend(): VclTask;
		toXml(): String;
		undeploy(undeployPowerActionType?: VclUndeployPowerActionType): VclTask;
		update(): VclTask;
		updateCpu(cpu?: VclVirtualCpu): VclTask;
		updateDisks(disks?: VclVirtualDisk[]): VclTask;
		updateHotAdd(memoryHotAdd?: boolean, cpuHotAdd?: boolean): VclTask;
		updateInternalState(): void;
		updateMemory(memory?: VclVirtualMemory): VclTask;
		updateNetworkCards(nics?: VclVirtualNetworkCard[]): VclTask;
		updateProductSections(productSections?: VclProductSection[]): VclTask;
		updateSection(section?: Object): VclTask;
		upgradeHardware(): VclTask;
	}

	declare const VclVM: VclVM;

	interface VclVmAffinity
	{
		href: String;
		id: String;
		isEnabled: boolean;
		isMandatory: boolean;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclVdc;
		polarity: String;
		scope: String;
		type: String;
		readonly vCloudExtension: VclObjectList;
		vmReferences: VclVms;

		erase(): VclTask;
		getVmAffinityRule(): VclVmAffinityRule;
		update(vmAffinityRule?: VclVmAffinityRule): VclTask;
	}

	declare const VclVmAffinity: VclVmAffinity;

	declare class VclVmAffinityRule
	{
		href: String;
		id: String;
		isEnabled: boolean;
		isMandatory: boolean;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		polarity: String;
		scope: String;
		type: String;
		vCloudExtension: VclObjectList;
		vmReferences: VclVms;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVmAffinityRules
	{
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vmAffinityRule: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVmCapabilities
	{
		cpuHotAddEnabled: boolean;
		href: String;
		memoryHotAddEnabled: boolean;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVmObjectRef
	{
		moRef: String;
		name: String;
		vimObjectType: String;
		vimServerRef: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVmObjectRefsList
	{
		numberOfPages: Integer;
		page: Integer;
		vmObjectRef: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVmParams
	{
		dateCreated: VclXMLGregorianCalendar;
		deployed: boolean;
		description: String;
		environment: VclEnvironment;
		files: VclFilesList;
		href: String;
		id: String;
		name: String;
		needsCustomization: boolean;
		nestedHypervisorEnabled: boolean;
		operationKey: String;
		otherAttributes: VclMap;
		section: VclAbstractObjectSet;
		status: Integer;
		storageProfile: VclReference;
		type: String;
		vAppParent: VclReference;
		vAppScopedLocalId: String;
		vCloudExtension: VclObjectList;
		vmCapabilities: VclVmCapabilities;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVmPendingQuestion
	{
		choices: VclObjectList;
		href: String;
		otherAttributes: VclMap;
		question: String;
		questionId: String;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVmQuestionAnswer
	{
		choiceId: int;
		questionId: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVmQuestionAnswerChoice
	{
		id: int;
		text: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVms
	{
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vmReference: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVmSelection
	{
		ipType: String;
		otherAttributes: VclMap;
		vAppScopedVmId: String;
		vCloudExtension: VclObjectList;
		vmNicId: int;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVMStatus
	{
		FAILED_CREATION: VclVMStatus;
		INCONSISTENT_STATE: VclVMStatus;
		POWERED_OFF: VclVMStatus;
		POWERED_ON: VclVMStatus;
		RESOLVED: VclVMStatus;
		SUSPENDED: VclVMStatus;
		UNKNOWN: VclVMStatus;
		UNRECOGNIZED: VclVMStatus;
		UNRESOLVED: VclVMStatus;
		readonly value: String;
		values: String[];
		WAITING_FOR_INPUT: VclVMStatus;

		getObject(value?: String): VclVMStatus;
	}

	declare const VclVMStatus: VclVMStatus;

	declare class VclVmVimInfo
	{
		datastoreVimObjectRef: VclVimObjectRef;
		hostVimObjectRef: VclVimObjectRef;
		virtualDisksMaxChainLength: int;
		vmVimObjectRef: VclVimObjectRef;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWareTools
	{
		version: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVMWDatastore
	{
		busy: boolean;
		datastoreFsType: String;
		description: String;
		enabled: boolean;
		href: String;
		id: String;
		members: VclVimObjectRefs;
		mountDirectory: String;
		mountHost: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminExtension;
		provisionedSpaceGb: Double;
		provisionedSpaceMb: Double;
		requestedStorageGb: Double;
		requestedStorageMb: Double;
		systemMessages: String;
		tasks: VclTasksInProgress;
		thresholdRedGb: int;
		thresholdYellowGb: int;
		totalCapacityGb: Double;
		totalCapacityMb: Double;
		type: String;
		usedCapacityGb: Double;
		usedCapacityMb: Double;
		usedCapacityPercent: Double;
		vAAIForFpEnabled: boolean;
		vcDisplayName: String;
		readonly vCloudExtension: VclObjectList;
		vimObjectRef: VclVimObjectRef;
		vimPropertyPageUrl: String;

		disable(): VclVMWDatastore;
		enable(): VclVMWDatastore;
		erase(): void;
		getContainedObjects(): Object[];
		getDatastoreVimRef(): VclVimObjectRef;
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
		update(): VclVMWDatastore;
		updateInternalState(): void;
	}

	declare const VclVMWDatastore: VclVMWDatastore;

	interface VclVMWExternalNetwork
	{
		configuration: VclNetworkConfiguration;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminExtension;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;
		vimPortGroupRef: VclVimObjectRef;

		erase(): VclTask;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		reset(): VclTask;
		toAdminObject(): VclExternalNetwork;
		toXml(): String;
		update(): VclVMWExternalNetwork;
		updateInternalState(): void;
	}

	declare const VclVMWExternalNetwork: VclVMWExternalNetwork;

	declare class VclVMWExternalNetworkParams
	{
		configuration: VclNetworkConfiguration;
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vimPortGroupRef: VclVimObjectRef;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWExternalNetworkReferences
	{
		externalNetworkReference: VclObjectList;
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVMWHost
	{
		available: boolean;
		busy: boolean;
		cpuTotal: long;
		cpuType: String;
		description: String;
		enabled: boolean;
		enableHostForHostSpanning: boolean;
		hostOsName: String;
		hostOsVersion: String;
		href: String;
		id: String;
		memTotal: Double;
		memUsed: Double;
		name: String;
		numOfCpusLogical: int;
		numOfCpusPackages: int;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminExtension;
		ready: boolean;
		systemMessages: String;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;
		vimPropertyPageUrl: String;
		vmMoRef: String;

		disable(): VclTask;
		enable(): VclTask;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		prepare(username?: String, password?: String): VclTask;
		repair(): VclTask;
		toXml(): String;
		unprepare(): VclTask;
		updateInternalState(): void;
		upgrade(): VclTask;
	}

	declare const VclVMWHost: VclVMWHost;

	declare class VclVMWHostReferences
	{
		hostReference: VclObjectList;
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVMWNetworkPool
	{
		description: String;
		files: VclFilesList;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminExtension;
		status: Integer;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;

		erase(): VclTask;
		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		getVendorServices(): VclVendorServices;
		toXml(): String;
		update(): VclVMWNetworkPool;
		updateInternalState(): void;
	}

	declare const VclVMWNetworkPool: VclVMWNetworkPool;

	declare class VclVMWNetworkPoolParams
	{
		description: String;
		files: VclFilesList;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		status: Integer;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWNetworkPoolReferences
	{
		href: String;
		networkPoolReference: VclObjectList;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVMWNetworkPoolType
	{
		NETWORK_ISOLATION_BASED: VclVMWNetworkPoolType;
		PORTGROUP_BASED: VclVMWNetworkPoolType;
		readonly value: String;
		values: String[];
		VLAN_BASED: VclVMWNetworkPoolType;

		getObject(value?: String): VclVMWNetworkPoolType;
	}

	declare const VclVMWNetworkPoolType: VclVMWNetworkPoolType;

	interface VclVMWProviderVdc
	{
		availableNetworks: VclAvailableNetworks;
		capabilities: VclCapabilities;
		computeCapacity: VclRootComputeCapacity;
		dataStoreRefs: VclVimObjectRefs;
		description: String;
		highestSupportedHardwareVersion: String;
		hostReferences: VclVMWHostReferences;
		href: String;
		id: String;
		isEnabled: boolean;
		name: String;
		networkPoolReferences: VclNetworkPoolReferences;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminExtension;
		resourcePoolRefs: VclVimObjectRefs;
		status: Integer;
		storageCapacity: VclProviderVdcCapacity;
		storageProfiles: VclProviderVdcStorageProfiles;
		tasks: VclTasksInProgress;
		type: String;
		readonly vCloudExtension: VclObjectList;
		vdcs: VclVdcs;
		readonly vimServer: VclObjectList;

		disable(): void;
		disableResourcePool(moRef?: String): void;
		enable(): void;
		enableResourcePool(moRef?: String): void;
		erase(): VclTask;
		getAdminVdcs(): VclAdminVdc[];
		getContainedObjects(): Object[];
		getDatastores(): VclVMWDatastore[];
		getHost(): VclHost;
		getProviderStorageProfiles(): VclVMWProviderVdcStorageProfile[];
		getReference(): VclReference;
		getResourcePools(): VclVMWProviderVdcResourcePool[];
		getVimServers(): VclVimServer[];
		getVms(rpMoRef?: String): VclReferenceResultSet;
		getVMWExternalNetworks(): VclVMWExternalNetwork[];
		getVMWHosts(): VclVMWHost[];
		getVMWNetworkPools(): VclVMWNetworkPool[];
		mergeProviderVdcs(refs?: VclReference[]): VclTask;
		migrateVms(sourceRpMoRef?: String, vmRefs?: VclReference[], targetRpRef?: VclVimObjectRef): VclTask;
		toAdminObject(): VclProviderVdc;
		toXml(): String;
		update(): VclVMWProviderVdc;
		updateInternalState(): void;
		updateResourcePools(rpsToAdd?: VclVimObjectRef[], rpsToRemove?: VclReference[]): VclTask;
		updateStorageProfiles(classesToAdd?: String[], classesToRemove?: VclReference[]): VclTask;
	}

	declare const VclVMWProviderVdc: VclVMWProviderVdc;

	declare class VclVMWProviderVdcParams
	{
		defaultPassword: String;
		defaultUsername: String;
		description: String;
		highestSupportedHardwareVersion: String;
		hostRefs: VclHostObjectRefs;
		isEnabled: boolean;
		name: String;
		otherAttributes: VclMap;
		resourcePoolRefs: VclVimObjectRefs;
		storageProfile: VclList;
		vCloudExtension: VclObjectList;
		vimServer: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWProviderVdcReferences
	{
		href: String;
		otherAttributes: VclMap;
		providerVdcReference: VclObjectList;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWProviderVdcResourcePool
	{
		enabled: boolean;
		href: String;
		otherAttributes: VclMap;
		primary: boolean;
		resourcePoolRef: VclReference;
		resourcePoolVimObjectRef: VclVimObjectRef;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWProviderVdcResourcePoolSet
	{
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vMWProviderVdcResourcePool: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVMWProviderVdcStorageProfile
	{
		capacityTotal: Double;
		capacityUsed: Double;
		description: String;
		enabled: boolean;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclVMWProviderVdc;
		tasks: VclTasksInProgress;
		type: String;
		units: String;
		readonly vCloudExtension: VclObjectList;
		vimStorageProfile: VclVimObjectRef;

		getContainedObjects(): Object[];
		getHost(): VclHost;
		getReference(): VclReference;
		toAdminObject(): VclProviderVdcStorageProfile;
		toXml(): String;
		update(): VclVMWProviderVdcStorageProfile;
		updateInternalState(): void;
	}

	declare const VclVMWProviderVdcStorageProfile: VclVMWProviderVdcStorageProfile;

	declare class VclVMWStorageProfile
	{
		dataStoreRefs: VclVimObjectRefs;
		freeStorageMb: Double;
		moRef: String;
		name: String;
		otherAttributes: VclMap;
		totalStorageMb: Double;
		vCloudExtension: VclObjectList;
		vimObjectType: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWStorageProfiles
	{
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vMWStorageProfile: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	interface VclVMWVdcTemplate
	{
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		readonly otherAttributes: VclMap;
		parent: VclAdminExtension;
		readonly providerVdcReference: VclObjectList;
		tasks: VclTasksInProgress;
		tenantDescription: String;
		tenantName: String;
		type: String;
		readonly vCloudExtension: VclObjectList;
		vdcTemplateSpecification: VclVMWVdcTemplateSpecification;

		erase(): VclTask;
		getContainedObjects(): Object[];
		getControlAccess(): VclControlAccessParams;
		getHost(): VclHost;
		getReference(): VclReference;
		toXml(): String;
		update(): VclVMWNetworkPool;
		updateControlAccess(params?: VclControlAccessParams): VclControlAccessParams;
		updateInternalState(): void;
	}

	declare const VclVMWVdcTemplate: VclVMWVdcTemplate;

	declare class VclVMWVdcTemplateBinding
	{
		name: String;
		value: VclReference;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWVdcTemplateList
	{
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vMWVdcTemplate: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWVdcTemplateParams
	{
		description: String;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		providerVdcReference: VclObjectList;
		tenantDescription: String;
		tenantName: String;
		type: String;
		vCloudExtension: VclObjectList;
		vdcTemplateSpecification: VclAbstractValueObject;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWVdcTemplateProviderVdcSpecification
	{
		binding: VclObjectList;
		href: String;
		id: String;
		name: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWVdcTemplates
	{
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vMWVdcTemplate: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWVdcTemplateSpecification
	{
		automaticNetworkPoolReference: VclAutomaticNetworkPoolReference;
		fastProvisioningEnabled: boolean;
		gatewayConfiguration: VclVdcTemplateSpecificationGatewayConfiguration;
		networkPoolReference: VclReference;
		nicQuota: int;
		provisionedNetworkQuota: int;
		storageProfile: VclObjectList;
		thinProvision: boolean;
		vmQuota: Integer;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVMWVimServerReferences
	{
		href: String;
		otherAttributes: VclMap;
		type: String;
		vCloudExtension: VclObjectList;
		vimServerReference: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVSphereWebClientUrl
	{
		uRL: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVSSD
	{
		automaticRecoveryAction: VclAutomaticRecoveryAction;
		automaticShutdownAction: VclAutomaticShutdownAction;
		automaticStartupAction: VclAutomaticStartupAction;
		automaticStartupActionDelay: VclCimDateTime;
		automaticStartupActionSequenceNumber: VclCimUnsignedShort;
		caption: VclVirtualSystemCaption;
		changeableType: VclVirtualSystemChangeable;
		configurationDataRoot: VclCimString;
		configurationFile: VclCimString;
		configurationID: VclCimString;
		configurationName: VclCimString;
		creationTime: VclCimDateTime;
		description: VclCimString;
		elementName: VclCimString;
		generation: VclCimUnsignedLong;
		instanceID: VclCimString;
		logDataRoot: VclCimString;
		notes: VclObjectList;
		otherAttributes: VclMap;
		recoveryFile: VclCimString;
		snapshotDataRoot: VclCimString;
		suspendDataRoot: VclCimString;
		swapFileDataRoot: VclCimString;
		virtualSystemIdentifier: VclCimString;
		virtualSystemType: VclCimString;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVsToVmxMap
	{
		entry: VclObjectList;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVsToVmxMapEntry
	{
		biosUuid: String;
		datastorePath: String;
		storageProfile: String;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclVxlanPoolParams
	{
		description: String;
		files: VclFilesList;
		href: String;
		id: String;
		name: String;
		operationKey: String;
		otherAttributes: VclMap;
		promiscuousMode: boolean;
		status: Integer;
		type: String;
		usedNetworksCount: Integer;
		vCloudExtension: VclObjectList;
		vdsContexts: VclObjectList;
		vimSwitchRef: VclVimObjectRef;

		constructor();
		loadFromXml(xml?: String): void;
		toXml(): String;
	}

	declare class VclX509CertificateParams
	{
		ca: boolean;
		dsaPublicKeyG: String;
		dsaPublicKeyP: String;
		dsaPublicKeyQ: String;
		dsaPublicKeyY: String;
		isCa: boolean;
		issuer: String;
		issuerCn: String;
		isValid: boolean;
		md5Hash: String;
		notAfter: String;
		notBefore: String;
		publicKeyAlgo: String;
		publicKeyLength: String;
		rsaPublicKeyExponent: String;
		rsaPublicKeyModulus: String;
		serialNumber: String;
		sha1Hash: String;
		signature: String;
		signatureAlgo: String;
		subject: String;
		subjectCn: String;
		valid: boolean;
		version: String;

		constructor();
	}

	declare class VclX509CrlParams
	{
		issuer: String;
		nextUpdate: String;
		version: String;
		x509CrlEntries: VclObjectList;

		constructor();
	}

	interface VclXMLGregorianCalendar
	{

		addDuration(value?: VclDuration): void;
		getDay(): int;
		getHour(): int;
		getMillisecond(): int;
		getMinute(): int;
		getMonth(): int;
		getSecond(): int;
		getTimezone(): int;
		getYear(): int;
		setDay(value?: int): void;
		setHour(value?: int): void;
		setMillisecond(value?: int): void;
		setMinute(value?: int): void;
		setMonth(value?: int): void;
		setSecond(value?: int): void;
		setTimezone(value?: int): void;
		setYear(value?: int): void;
		toGregorianCalendar(timezone?: TimeZone, aLocale?: Locale, defaults?: VclXMLGregorianCalendar): VclGregorianCalendar;
	}

	declare const VclXMLGregorianCalendar: VclXMLGregorianCalendar;

    
    // Finder objects.
declare namespace vCloud {
	interface AccessLevelType extends VclAccessLevelType
	{
		value: any;

	}

	interface AccessLevelTypeConstructor {
		new(value?:any): AccessLevelType;
		readonly prototype: AccessLevelType;
	}

	const AccessLevelType: AccessLevelTypeConstructor;

	interface AdminAclRule extends VclAdminAclRule
	{
		description: any;
		href: any;
		id: any;
		name: any;
		type: any;

	}

	interface AdminAclRuleConstructor {
		new(value?:any): AdminAclRule;
		readonly prototype: AdminAclRule;
	}

	const AdminAclRule: AdminAclRuleConstructor;

	interface AdminApiDefinition extends VclAdminApiDefinition
	{
		apiVendor: any;
		description: any;
		entryPoint: any;
		href: any;
		id: any;
		name: any;
		namespace: any;
		type: any;

	}

	interface AdminApiDefinitionConstructor {
		new(value?:any): AdminApiDefinition;
		readonly prototype: AdminApiDefinition;
	}

	const AdminApiDefinition: AdminApiDefinitionConstructor;

	interface AdminApiFilter extends VclAdminApiFilter
	{
		href: any;
		id: any;
		responseContentType: any;
		type: any;
		urlPattern: any;

	}

	interface AdminApiFilterConstructor {
		new(value?:any): AdminApiFilter;
		readonly prototype: AdminApiFilter;
	}

	const AdminApiFilter: AdminApiFilterConstructor;

	interface AdminCatalog extends VclAdminCatalog
	{
		dateCreated: any;
		description: any;
		href: any;
		id: any;
		isPublished: any;
		name: any;
		type: any;
		versionNumber: any;

	}

	interface AdminCatalogConstructor {
		new(value?:any): AdminCatalog;
		readonly prototype: AdminCatalog;
	}

	const AdminCatalog: AdminCatalogConstructor;

	interface AdminFileDescriptor extends VclAdminFileDescriptor
	{
		description: any;
		href: any;
		id: any;
		type: any;

	}

	interface AdminFileDescriptorConstructor {
		new(value?:any): AdminFileDescriptor;
		readonly prototype: AdminFileDescriptor;
	}

	const AdminFileDescriptor: AdminFileDescriptorConstructor;

	interface AdminOrganization extends VclAdminOrganization
	{
		canPublishCatalogs: any;
		canPublishExternally: any;
		canSubscribe: any;
		delayAfterPowerOnSeconds: any;
		deployedVMQuota: any;
		description: any;
		fullName: any;
		href: any;
		id: any;
		isEnabled: any;
		name: any;
		orgLdapMode: any;
		storedVmQuota: any;
		type: any;
		useServerBootSequence: any;

		AdminOrganizationAdminCatalogFolder(): AdminOrganizationAdminCatalogFolder;
		AdminOrganizationAdminVdcFolder(): AdminOrganizationAdminVdcFolder;
		AdminOrganizationGroupFolder(): AdminOrganizationGroupFolder;
		AdminOrganizationUserFolder(): AdminOrganizationUserFolder;
	}

	interface AdminOrganizationConstructor {
		new(value?:any): AdminOrganization;
		readonly prototype: AdminOrganization;
	}

	const AdminOrganization: AdminOrganizationConstructor;

	interface AdminOrganizationAdminCatalogFolder
	{
		name: any;

		AdminCatalog(): AdminCatalog;
	}

	interface AdminOrganizationAdminCatalogFolderConstructor {
		new(value?:any): AdminOrganizationAdminCatalogFolder;
		readonly prototype: AdminOrganizationAdminCatalogFolder;
	}

	const AdminOrganizationAdminCatalogFolder: AdminOrganizationAdminCatalogFolderConstructor;

	interface AdminOrganizationAdminVdcFolder
	{
		name: any;

		AdminVdc(): AdminVdc;
	}

	interface AdminOrganizationAdminVdcFolderConstructor {
		new(value?:any): AdminOrganizationAdminVdcFolder;
		readonly prototype: AdminOrganizationAdminVdcFolder;
	}

	const AdminOrganizationAdminVdcFolder: AdminOrganizationAdminVdcFolderConstructor;

	interface AdminOrganizationGroupFolder
	{
		name: any;

		Group(): Group;
	}

	interface AdminOrganizationGroupFolderConstructor {
		new(value?:any): AdminOrganizationGroupFolder;
		readonly prototype: AdminOrganizationGroupFolder;
	}

	const AdminOrganizationGroupFolder: AdminOrganizationGroupFolderConstructor;

	interface AdminOrganizationUserFolder
	{
		name: any;

		User(): User;
	}

	interface AdminOrganizationUserFolderConstructor {
		new(value?:any): AdminOrganizationUserFolder;
		readonly prototype: AdminOrganizationUserFolder;
	}

	const AdminOrganizationUserFolder: AdminOrganizationUserFolderConstructor;

	interface AdminOrgVdcNetwork extends VclAdminOrgVdcNetwork
	{
		description: any;
		fenceMode: any;
		href: any;
		id: any;
		isShared: any;
		name: any;
		status: any;
		type: any;

	}

	interface AdminOrgVdcNetworkConstructor {
		new(value?:any): AdminOrgVdcNetwork;
		readonly prototype: AdminOrgVdcNetwork;
	}

	const AdminOrgVdcNetwork: AdminOrgVdcNetworkConstructor;

	interface AdminOrgVdcNetworkFolder
	{
		name: any;

		AdminOrgVdcNetwork(): AdminOrgVdcNetwork;
	}

	interface AdminOrgVdcNetworkFolderConstructor {
		new(value?:any): AdminOrgVdcNetworkFolder;
		readonly prototype: AdminOrgVdcNetworkFolder;
	}

	const AdminOrgVdcNetworkFolder: AdminOrgVdcNetworkFolderConstructor;

	interface AdminResourceClass extends VclAdminResourceClass
	{
		description: any;
		href: any;
		id: any;
		mimeType: any;
		name: any;
		nid: any;
		type: any;
		urlTemplate: any;
		urnPattern: any;

	}

	interface AdminResourceClassConstructor {
		new(value?:any): AdminResourceClass;
		readonly prototype: AdminResourceClass;
	}

	const AdminResourceClass: AdminResourceClassConstructor;

	interface AdminResourceClassAction extends VclAdminResourceClassAction
	{
		description: any;
		href: any;
		httpMethod: any;
		id: any;
		name: any;
		type: any;
		urlPattern: any;

	}

	interface AdminResourceClassActionConstructor {
		new(value?:any): AdminResourceClassAction;
		readonly prototype: AdminResourceClassAction;
	}

	const AdminResourceClassAction: AdminResourceClassActionConstructor;

	interface AdminService extends VclAdminService
	{
		authorizationEnabled: any;
		description: any;
		enabled: any;
		exchange: any;
		href: any;
		id: any;
		name: any;
		namespace: any;
		priority: any;
		routingKey: any;
		type: any;
		vendor: any;

		AdminServiceLink(): AdminServiceLink;
	}

	interface AdminServiceConstructor {
		new(value?:any): AdminService;
		readonly prototype: AdminService;
	}

	const AdminService: AdminServiceConstructor;

	interface AdminServiceLink extends VclAdminServiceLink
	{
		href: any;
		id: any;
		linkHref: any;
		mimeType: any;
		rel: any;
		resourceId: any;
		resourceType: any;
		type: any;

	}

	interface AdminServiceLinkConstructor {
		new(value?:any): AdminServiceLink;
		readonly prototype: AdminServiceLink;
	}

	const AdminServiceLink: AdminServiceLinkConstructor;

	interface AdminServiceResource extends VclAdminServiceResource
	{
		description: any;
		externalObjectId: any;
		href: any;
		id: any;
		name: any;
		type: any;

	}

	interface AdminServiceResourceConstructor {
		new(value?:any): AdminServiceResource;
		readonly prototype: AdminServiceResource;
	}

	const AdminServiceResource: AdminServiceResourceConstructor;

	interface AdminVdc extends VclAdminVdc
	{
		allocationModel: any;
		cpuAllocated: any;
		cpuLimit: any;
		cpuOverhead: any;
		cpuUnits: any;
		cpuUsed: any;
		description: any;
		href: any;
		id: any;
		isEnabled: any;
		isThinProvision: any;
		memoryAllocated: any;
		memoryLimit: any;
		memoryOverhead: any;
		memoryUnits: any;
		memoryUsed: any;
		name: any;
		networkQuota: any;
		nicQuota: any;
		overCommitAllowed: any;
		resourceGuaranteedCpu: any;
		resourceGuaranteedMemory: any;
		status: any;
		storageAllocated: any;
		storageLimit: any;
		storageOverhead: any;
		storageUnits: any;
		storageUsed: any;
		type: any;
		usedNetworkCount: any;
		usesFastProvisioning: any;
		vCpuInMhz: any;
		vmQuota: any;

		AdminOrgVdcNetworkFolder(): AdminOrgVdcNetworkFolder;
		AdminVdcGatewayFolder(): AdminVdcGatewayFolder;
		AdminVdcStorageProfileFolder(): AdminVdcStorageProfileFolder;
	}

	interface AdminVdcConstructor {
		new(value?:any): AdminVdc;
		readonly prototype: AdminVdc;
	}

	const AdminVdc: AdminVdcConstructor;

	interface AdminVdcGatewayFolder
	{
		name: any;

		Gateway(): Gateway;
	}

	interface AdminVdcGatewayFolderConstructor {
		new(value?:any): AdminVdcGatewayFolder;
		readonly prototype: AdminVdcGatewayFolder;
	}

	const AdminVdcGatewayFolder: AdminVdcGatewayFolderConstructor;

	interface AdminVdcStorageProfile extends VclAdminVdcStorageProfile
	{
		default: any;
		description: any;
		enabled: any;
		href: any;
		id: any;
		limit: any;
		name: any;
		type: any;
		units: any;

	}

	interface AdminVdcStorageProfileConstructor {
		new(value?:any): AdminVdcStorageProfile;
		readonly prototype: AdminVdcStorageProfile;
	}

	const AdminVdcStorageProfile: AdminVdcStorageProfileConstructor;

	interface AdminVdcStorageProfileFolder
	{
		name: any;

		AdminVdcStorageProfile(): AdminVdcStorageProfile;
	}

	interface AdminVdcStorageProfileFolderConstructor {
		new(value?:any): AdminVdcStorageProfileFolder;
		readonly prototype: AdminVdcStorageProfileFolder;
	}

	const AdminVdcStorageProfileFolder: AdminVdcStorageProfileFolderConstructor;

	interface AllocatedIpAddressAllocationType extends VclAllocatedIpAddressAllocationType
	{
		value: any;

	}

	interface AllocatedIpAddressAllocationTypeConstructor {
		new(value?:any): AllocatedIpAddressAllocationType;
		readonly prototype: AllocatedIpAddressAllocationType;
	}

	const AllocatedIpAddressAllocationType: AllocatedIpAddressAllocationTypeConstructor;

	interface AllocationModelType extends VclAllocationModelType
	{
		value: any;

	}

	interface AllocationModelTypeConstructor {
		new(value?:any): AllocationModelType;
		readonly prototype: AllocationModelType;
	}

	const AllocationModelType: AllocationModelTypeConstructor;

	interface ApiDefinition extends VclApiDefinition
	{
		apiVendor: any;
		description: any;
		entryPoint: any;
		href: any;
		id: any;
		name: any;
		namespace: any;
		type: any;

	}

	interface ApiDefinitionConstructor {
		new(value?:any): ApiDefinition;
		readonly prototype: ApiDefinition;
	}

	const ApiDefinition: ApiDefinitionConstructor;

	interface AttachedDiskFolder
	{
		name: any;

		Disk(): Disk;
	}

	interface AttachedDiskFolderConstructor {
		new(value?:any): AttachedDiskFolder;
		readonly prototype: AttachedDiskFolder;
	}

	const AttachedDiskFolder: AttachedDiskFolderConstructor;

	interface BlockingTask extends VclBlockingTask
	{
		createdTime: any;
		description: any;
		href: any;
		id: any;
		name: any;
		organization: any;
		organizationUrl: any;
		status: any;
		taskOwner: any;
		taskOwnerUrl: any;
		timeoutAction: any;
		timeoutDate: any;
		type: any;
		user: any;
		userUrl: any;

	}

	interface BlockingTaskConstructor {
		new(value?:any): BlockingTask;
		readonly prototype: BlockingTask;
	}

	const BlockingTask: BlockingTaskConstructor;

	interface BlockingTaskOperationType extends VclBlockingTaskOperationType
	{
		value: any;

	}

	interface BlockingTaskOperationTypeConstructor {
		new(value?:any): BlockingTaskOperationType;
		readonly prototype: BlockingTaskOperationType;
	}

	const BlockingTaskOperationType: BlockingTaskOperationTypeConstructor;

	interface BlockingTaskTimeoutActionType extends VclBlockingTaskTimeoutActionType
	{
		value: any;

	}

	interface BlockingTaskTimeoutActionTypeConstructor {
		new(value?:any): BlockingTaskTimeoutActionType;
		readonly prototype: BlockingTaskTimeoutActionType;
	}

	const BlockingTaskTimeoutActionType: BlockingTaskTimeoutActionTypeConstructor;

	interface BusSubType extends VclBusSubType
	{
		value: any;

	}

	interface BusSubTypeConstructor {
		new(value?:any): BusSubType;
		readonly prototype: BusSubType;
	}

	const BusSubType: BusSubTypeConstructor;

	interface BusType extends VclBusType
	{
		value: any;

	}

	interface BusTypeConstructor {
		new(value?:any): BusType;
		readonly prototype: BusType;
	}

	const BusType: BusTypeConstructor;

	interface Ca extends VclCa
	{
		certificateType: any;
		description: any;
		issuerCn: any;
		isUniversal: any;
		name: any;
		nodeId: any;
		pemEncoding: any;
		subjectCn: any;
		universalRevision: any;

	}

	interface CaConstructor {
		new(value?:any): Ca;
		readonly prototype: Ca;
	}

	const Ca: CaConstructor;

	interface CaFolder
	{
		name: any;

		Ca(): Ca;
	}

	interface CaFolderConstructor {
		new(value?:any): CaFolder;
		readonly prototype: CaFolder;
	}

	const CaFolder: CaFolderConstructor;

	interface Catalog extends VclCatalog
	{
		dateCreated: any;
		description: any;
		href: any;
		id: any;
		isPublished: any;
		name: any;
		type: any;
		versionNumber: any;

		CatalogItem(): CatalogItem;
	}

	interface CatalogConstructor {
		new(value?:any): Catalog;
		readonly prototype: Catalog;
	}

	const Catalog: CatalogConstructor;

	interface CatalogItem extends VclCatalogItem
	{
		dateCreated: any;
		description: any;
		entity: any;
		href: any;
		id: any;
		name: any;
		size: any;
		type: any;
		versionNumber: any;

	}

	interface CatalogItemConstructor {
		new(value?:any): CatalogItem;
		readonly prototype: CatalogItem;
	}

	const CatalogItem: CatalogItemConstructor;

	interface Crl extends VclCrl
	{
		description: any;
		issuerCn: any;
		isUniversal: any;
		name: any;
		nodeId: any;
		pemEncoding: any;
		universalRevision: any;

	}

	interface CrlConstructor {
		new(value?:any): Crl;
		readonly prototype: Crl;
	}

	const Crl: CrlConstructor;

	interface CrlFolder
	{
		name: any;

		Crl(): Crl;
	}

	interface CrlFolderConstructor {
		new(value?:any): CrlFolder;
		readonly prototype: CrlFolder;
	}

	const CrlFolder: CrlFolderConstructor;

	interface Csr extends VclCsr
	{
		algorithm: any;
		cn: any;
		description: any;
		isUniversal: any;
		keySize: any;
		name: any;
		nodeId: any;
		pemEncoding: any;
		universalRevision: any;

	}

	interface CsrConstructor {
		new(value?:any): Csr;
		readonly prototype: Csr;
	}

	const Csr: CsrConstructor;

	interface CsrFolder
	{
		name: any;

		Csr(): Csr;
	}

	interface CsrFolderConstructor {
		new(value?:any): CsrFolder;
		readonly prototype: CsrFolder;
	}

	const CsrFolder: CsrFolderConstructor;

	interface DHCPBinding extends VclStaticBindingTrinity
	{
		autoConfigureDNS: any;
		defaultGateway: any;
		dnsType: any;
		domainName: any;
		hostname: any;
		ipAddress: any;
		leaseTime: any;
		macAddress: any;
		name: any;
		nextServer: any;
		obtainEquivalenceKey: any;
		primaryNameServer: any;
		secondaryNameServer: any;
		subnetMask: any;
		vmId: any;
		vmName: any;
		vnicId: any;

	}

	interface DHCPBindingConstructor {
		new(value?:any): DHCPBinding;
		readonly prototype: DHCPBinding;
	}

	const DHCPBinding: DHCPBindingConstructor;

	interface DHCPBindingFolder
	{
		name: any;

		DHCPBinding(): DHCPBinding;
	}

	interface DHCPBindingFolderConstructor {
		new(value?:any): DHCPBindingFolder;
		readonly prototype: DHCPBindingFolder;
	}

	const DHCPBindingFolder: DHCPBindingFolderConstructor;

	interface DHCPIpPool extends VclIPPoolTrinity
	{
		allowHugeRange: any;
		autoConfigureDNS: any;
		defaultGateway: any;
		dnsType: any;
		domainName: any;
		ipRange: any;
		leaseTime: any;
		name: any;
		nextServer: any;
		obtainEquivalenceKey: any;
		poolId: any;
		primaryNameServer: any;
		secondaryNameServer: any;
		subnetMask: any;

	}

	interface DHCPIpPoolConstructor {
		new(value?:any): DHCPIpPool;
		readonly prototype: DHCPIpPool;
	}

	const DHCPIpPool: DHCPIpPoolConstructor;

	interface DHCPIpPoolFolder
	{
		name: any;

		DHCPIpPool(): DHCPIpPool;
	}

	interface DHCPIpPoolFolderConstructor {
		new(value?:any): DHCPIpPoolFolder;
		readonly prototype: DHCPIpPoolFolder;
	}

	const DHCPIpPoolFolder: DHCPIpPoolFolderConstructor;

	interface Disk extends VclDisk
	{
		busSubType: any;
		busType: any;
		description: any;
		href: any;
		id: any;
		name: any;
		size: any;
		status: any;
		type: any;

	}

	interface DiskConstructor {
		new(value?:any): Disk;
		readonly prototype: Disk;
	}

	const Disk: DiskConstructor;

	interface DiskFolder
	{
		name: any;

		Disk(): Disk;
	}

	interface DiskFolderConstructor {
		new(value?:any): DiskFolder;
		readonly prototype: DiskFolder;
	}

	const DiskFolder: DiskFolderConstructor;

	interface EntityType extends VclEntityType
	{
		value: any;

	}

	interface EntityTypeConstructor {
		new(value?:any): EntityType;
		readonly prototype: EntityType;
	}

	const EntityType: EntityTypeConstructor;

	interface EventType extends VclEventType
	{
		value: any;

	}

	interface EventTypeConstructor {
		new(value?:any): EventType;
		readonly prototype: EventType;
	}

	const EventType: EventTypeConstructor;

	interface ExpressionType extends VclExpressionType
	{
		value: any;

	}

	interface ExpressionTypeConstructor {
		new(value?:any): ExpressionType;
		readonly prototype: ExpressionType;
	}

	const ExpressionType: ExpressionTypeConstructor;

	interface ExternalNetwork extends VclExternalNetwork
	{
		description: any;
		fenceMode: any;
		href: any;
		id: any;
		name: any;
		providerInfo: any;
		type: any;

	}

	interface ExternalNetworkConstructor {
		new(value?:any): ExternalNetwork;
		readonly prototype: ExternalNetwork;
	}

	const ExternalNetwork: ExternalNetworkConstructor;

	interface FenceModeValuesType extends VclFenceModeValuesType
	{
		value: any;

	}

	interface FenceModeValuesTypeConstructor {
		new(value?:any): FenceModeValuesType;
		readonly prototype: FenceModeValuesType;
	}

	const FenceModeValuesType: FenceModeValuesTypeConstructor;

	interface FilterType extends VclFilterType
	{
		value: any;

	}

	interface FilterTypeConstructor {
		new(value?:any): FilterType;
		readonly prototype: FilterType;
	}

	const FilterType: FilterTypeConstructor;

	interface FinderType extends VclFinderType
	{
		value: any;

	}

	interface FinderTypeConstructor {
		new(value?:any): FinderType;
		readonly prototype: FinderType;
	}

	const FinderType: FinderTypeConstructor;

	interface FirewallDirectionType extends VclFirewallDirectionType
	{
		value: any;

	}

	interface FirewallDirectionTypeConstructor {
		new(value?:any): FirewallDirectionType;
		readonly prototype: FirewallDirectionType;
	}

	const FirewallDirectionType: FirewallDirectionTypeConstructor;

	interface FirewallPolicyType extends VclFirewallPolicyType
	{
		value: any;

	}

	interface FirewallPolicyTypeConstructor {
		new(value?:any): FirewallPolicyType;
		readonly prototype: FirewallPolicyType;
	}

	const FirewallPolicyType: FirewallPolicyTypeConstructor;

	interface FirewallRule extends VclFirewallRuleTrinity
	{
		action: any;
		description: any;
		direction: any;
		enabled: any;
		invalidApplication: any;
		invalidDestination: any;
		invalidSource: any;
		loggingEnabled: any;
		matchTranslated: any;
		name: any;
		obtainEquivalenceKey: any;
		ruleId: any;
		ruleTag: any;
		ruleType: any;

	}

	interface FirewallRuleConstructor {
		new(value?:any): FirewallRule;
		readonly prototype: FirewallRule;
	}

	const FirewallRule: FirewallRuleConstructor;

	interface FirewallRuleFolder
	{
		name: any;

		FirewallRule(): FirewallRule;
	}

	interface FirewallRuleFolderConstructor {
		new(value?:any): FirewallRuleFolder;
		readonly prototype: FirewallRuleFolder;
	}

	const FirewallRuleFolder: FirewallRuleFolderConstructor;

	interface FormatType extends VclFormatType
	{
		value: any;

	}

	interface FormatTypeConstructor {
		new(value?:any): FormatType;
		readonly prototype: FormatType;
	}

	const FormatType: FormatTypeConstructor;

	interface Gateway extends VclGateway
	{
		description: any;
		href: any;
		id: any;
		name: any;
		status: any;
		type: any;

		CaFolder(): CaFolder;
		CrlFolder(): CrlFolder;
		CsrFolder(): CsrFolder;
		DHCPBindingFolder(): DHCPBindingFolder;
		DHCPIpPoolFolder(): DHCPIpPoolFolder;
		FirewallRuleFolder(): FirewallRuleFolder;
		NatRuleFolder(): NatRuleFolder;
		SelfSignedCsrFolder(): SelfSignedCsrFolder;
		ServiceCertificateFolder(): ServiceCertificateFolder;
	}

	interface GatewayConstructor {
		new(value?:any): Gateway;
		readonly prototype: Gateway;
	}

	const Gateway: GatewayConstructor;

	interface GatewayBackingConfigValuesType extends VclGatewayBackingConfigValuesType
	{
		value: any;

	}

	interface GatewayBackingConfigValuesTypeConstructor {
		new(value?:any): GatewayBackingConfigValuesType;
		readonly prototype: GatewayBackingConfigValuesType;
	}

	const GatewayBackingConfigValuesType: GatewayBackingConfigValuesTypeConstructor;

	interface GatewayEnums extends VclGatewayEnums
	{
		value: any;

	}

	interface GatewayEnumsConstructor {
		new(value?:any): GatewayEnums;
		readonly prototype: GatewayEnums;
	}

	const GatewayEnums: GatewayEnumsConstructor;

	interface GatewayFolder
	{
		name: any;

		Gateway(): Gateway;
	}

	interface GatewayFolderConstructor {
		new(value?:any): GatewayFolder;
		readonly prototype: GatewayFolder;
	}

	const GatewayFolder: GatewayFolderConstructor;

	interface Group extends VclGroup
	{
		description: any;
		href: any;
		id: any;
		name: any;
		nameInSource: any;
		providerType: any;
		type: any;

	}

	interface GroupConstructor {
		new(value?:any): Group;
		readonly prototype: Group;
	}

	const Group: GroupConstructor;

	interface GuestOSType extends VclGuestOSType
	{
		description: any;
		value: any;

	}

	interface GuestOSTypeConstructor {
		new(value?:any): GuestOSType;
		readonly prototype: GuestOSType;
	}

	const GuestOSType: GuestOSTypeConstructor;

	interface Host extends VclHost
	{
		apiVersion: any;
		cacheTimeout: any;
		connectionTimeout: any;
		enabled: any;
		maxConnections: any;
		name: any;
		organization: any;
		sessionMode: any;
		url: any;
		username: any;
		useSamlAuthentication: any;

		HostAdmin(): HostAdmin;
		OrganizationFolder(): OrganizationFolder;
		ServiceFolder(): ServiceFolder;
	}

	interface HostConstructor {
		new(value?:any): Host;
		readonly prototype: Host;
	}

	const Host: HostConstructor;

	interface HostAdmin extends VclHostAdmin
	{
		name: any;
		url: any;

		HostAdminAdminOrganizationFolder(): HostAdminAdminOrganizationFolder;
		HostAdminExtension(): HostAdminExtension;
		HostAdminProviderNetworkFolder(): HostAdminProviderNetworkFolder;
		HostAdminProviderVdcFolder(): HostAdminProviderVdcFolder;
		HostAdminRightFolder(): HostAdminRightFolder;
		HostAdminRoleFolder(): HostAdminRoleFolder;
	}

	interface HostAdminConstructor {
		new(value?:any): HostAdmin;
		readonly prototype: HostAdmin;
	}

	const HostAdmin: HostAdminConstructor;

	interface HostAdminAdminOrganizationFolder
	{
		name: any;

		AdminOrganization(): AdminOrganization;
	}

	interface HostAdminAdminOrganizationFolderConstructor {
		new(value?:any): HostAdminAdminOrganizationFolder;
		readonly prototype: HostAdminAdminOrganizationFolder;
	}

	const HostAdminAdminOrganizationFolder: HostAdminAdminOrganizationFolderConstructor;

	interface HostAdminExtension extends VclAdminExtension
	{
		href: any;
		name: any;

		HostAdminExtensionServiceFolder(): HostAdminExtensionServiceFolder;
		HostAdminExtensionVimServerFolder(): HostAdminExtensionVimServerFolder;
		HostAdminExtensionVmwDatastoreFolder(): HostAdminExtensionVmwDatastoreFolder;
		HostAdminExtensionVmwHostFolder(): HostAdminExtensionVmwHostFolder;
		HostAdminExtensionVmwNetworkPoolFolder(): HostAdminExtensionVmwNetworkPoolFolder;
		HostAdminExtensionVmwProviderNetworkFolder(): HostAdminExtensionVmwProviderNetworkFolder;
		HostAdminExtensionVmwProviderVdcFolder(): HostAdminExtensionVmwProviderVdcFolder;
		HostAdminExtensionVmwVdcTemplateFolder(): HostAdminExtensionVmwVdcTemplateFolder;
	}

	interface HostAdminExtensionConstructor {
		new(value?:any): HostAdminExtension;
		readonly prototype: HostAdminExtension;
	}

	const HostAdminExtension: HostAdminExtensionConstructor;

	interface HostAdminExtensionServiceFolder extends VclAdminExtension
	{
		name: any;

		AdminService(): AdminService;
	}

	interface HostAdminExtensionServiceFolderConstructor {
		new(value?:any): HostAdminExtensionServiceFolder;
		readonly prototype: HostAdminExtensionServiceFolder;
	}

	const HostAdminExtensionServiceFolder: HostAdminExtensionServiceFolderConstructor;

	interface HostAdminExtensionVimServerFolder extends VclAdminExtension
	{
		name: any;

		VimServer(): VimServer;
	}

	interface HostAdminExtensionVimServerFolderConstructor {
		new(value?:any): HostAdminExtensionVimServerFolder;
		readonly prototype: HostAdminExtensionVimServerFolder;
	}

	const HostAdminExtensionVimServerFolder: HostAdminExtensionVimServerFolderConstructor;

	interface HostAdminExtensionVmwDatastoreFolder extends VclAdminExtension
	{
		name: any;

		VmwDatastore(): VmwDatastore;
	}

	interface HostAdminExtensionVmwDatastoreFolderConstructor {
		new(value?:any): HostAdminExtensionVmwDatastoreFolder;
		readonly prototype: HostAdminExtensionVmwDatastoreFolder;
	}

	const HostAdminExtensionVmwDatastoreFolder: HostAdminExtensionVmwDatastoreFolderConstructor;

	interface HostAdminExtensionVmwHostFolder extends VclAdminExtension
	{
		name: any;

		VmwHost(): VmwHost;
	}

	interface HostAdminExtensionVmwHostFolderConstructor {
		new(value?:any): HostAdminExtensionVmwHostFolder;
		readonly prototype: HostAdminExtensionVmwHostFolder;
	}

	const HostAdminExtensionVmwHostFolder: HostAdminExtensionVmwHostFolderConstructor;

	interface HostAdminExtensionVmwNetworkPoolFolder extends VclAdminExtension
	{
		name: any;

		VmwNetworkPool(): VmwNetworkPool;
	}

	interface HostAdminExtensionVmwNetworkPoolFolderConstructor {
		new(value?:any): HostAdminExtensionVmwNetworkPoolFolder;
		readonly prototype: HostAdminExtensionVmwNetworkPoolFolder;
	}

	const HostAdminExtensionVmwNetworkPoolFolder: HostAdminExtensionVmwNetworkPoolFolderConstructor;

	interface HostAdminExtensionVmwProviderNetworkFolder extends VclAdminExtension
	{
		name: any;

		VmwExternalNetwork(): VmwExternalNetwork;
	}

	interface HostAdminExtensionVmwProviderNetworkFolderConstructor {
		new(value?:any): HostAdminExtensionVmwProviderNetworkFolder;
		readonly prototype: HostAdminExtensionVmwProviderNetworkFolder;
	}

	const HostAdminExtensionVmwProviderNetworkFolder: HostAdminExtensionVmwProviderNetworkFolderConstructor;

	interface HostAdminExtensionVmwProviderVdcDatastoreFolder extends VclVMWProviderVdc
	{
		name: any;

		VmwDatastore(): VmwDatastore;
	}

	interface HostAdminExtensionVmwProviderVdcDatastoreFolderConstructor {
		new(value?:any): HostAdminExtensionVmwProviderVdcDatastoreFolder;
		readonly prototype: HostAdminExtensionVmwProviderVdcDatastoreFolder;
	}

	const HostAdminExtensionVmwProviderVdcDatastoreFolder: HostAdminExtensionVmwProviderVdcDatastoreFolderConstructor;

	interface HostAdminExtensionVmwProviderVdcFolder extends VclAdminExtension
	{
		name: any;

		VmwProviderVdc(): VmwProviderVdc;
	}

	interface HostAdminExtensionVmwProviderVdcFolderConstructor {
		new(value?:any): HostAdminExtensionVmwProviderVdcFolder;
		readonly prototype: HostAdminExtensionVmwProviderVdcFolder;
	}

	const HostAdminExtensionVmwProviderVdcFolder: HostAdminExtensionVmwProviderVdcFolderConstructor;

	interface HostAdminExtensionVmwProviderVdcHostFolder extends VclVMWProviderVdc
	{
		name: any;

		VmwHost(): VmwHost;
	}

	interface HostAdminExtensionVmwProviderVdcHostFolderConstructor {
		new(value?:any): HostAdminExtensionVmwProviderVdcHostFolder;
		readonly prototype: HostAdminExtensionVmwProviderVdcHostFolder;
	}

	const HostAdminExtensionVmwProviderVdcHostFolder: HostAdminExtensionVmwProviderVdcHostFolderConstructor;

	interface HostAdminExtensionVmwProviderVdcNetworkFolder extends VclVMWProviderVdc
	{
		name: any;

		VmwExternalNetwork(): VmwExternalNetwork;
	}

	interface HostAdminExtensionVmwProviderVdcNetworkFolderConstructor {
		new(value?:any): HostAdminExtensionVmwProviderVdcNetworkFolder;
		readonly prototype: HostAdminExtensionVmwProviderVdcNetworkFolder;
	}

	const HostAdminExtensionVmwProviderVdcNetworkFolder: HostAdminExtensionVmwProviderVdcNetworkFolderConstructor;

	interface HostAdminExtensionVmwProviderVdcNetworkPoolFolder extends VclVMWProviderVdc
	{
		name: any;

		VmwNetworkPool(): VmwNetworkPool;
	}

	interface HostAdminExtensionVmwProviderVdcNetworkPoolFolderConstructor {
		new(value?:any): HostAdminExtensionVmwProviderVdcNetworkPoolFolder;
		readonly prototype: HostAdminExtensionVmwProviderVdcNetworkPoolFolder;
	}

	const HostAdminExtensionVmwProviderVdcNetworkPoolFolder: HostAdminExtensionVmwProviderVdcNetworkPoolFolderConstructor;

	interface HostAdminExtensionVmwProviderVdcStorageProfileFolder extends VclVMWProviderVdc
	{
		name: any;

		VmwProviderVdcStorageProfile(): VmwProviderVdcStorageProfile;
	}

	interface HostAdminExtensionVmwProviderVdcStorageProfileFolderConstructor {
		new(value?:any): HostAdminExtensionVmwProviderVdcStorageProfileFolder;
		readonly prototype: HostAdminExtensionVmwProviderVdcStorageProfileFolder;
	}

	const HostAdminExtensionVmwProviderVdcStorageProfileFolder: HostAdminExtensionVmwProviderVdcStorageProfileFolderConstructor;

	interface HostAdminExtensionVmwVdcTemplateFolder extends VclAdminExtension
	{
		name: any;

		VmwVdcTemplate(): VmwVdcTemplate;
	}

	interface HostAdminExtensionVmwVdcTemplateFolderConstructor {
		new(value?:any): HostAdminExtensionVmwVdcTemplateFolder;
		readonly prototype: HostAdminExtensionVmwVdcTemplateFolder;
	}

	const HostAdminExtensionVmwVdcTemplateFolder: HostAdminExtensionVmwVdcTemplateFolderConstructor;

	interface HostAdminProviderNetworkFolder
	{
		name: any;

		ExternalNetwork(): ExternalNetwork;
	}

	interface HostAdminProviderNetworkFolderConstructor {
		new(value?:any): HostAdminProviderNetworkFolder;
		readonly prototype: HostAdminProviderNetworkFolder;
	}

	const HostAdminProviderNetworkFolder: HostAdminProviderNetworkFolderConstructor;

	interface HostAdminProviderVdcFolder
	{
		name: any;

		ProviderVdc(): ProviderVdc;
	}

	interface HostAdminProviderVdcFolderConstructor {
		new(value?:any): HostAdminProviderVdcFolder;
		readonly prototype: HostAdminProviderVdcFolder;
	}

	const HostAdminProviderVdcFolder: HostAdminProviderVdcFolderConstructor;

	interface HostAdminRightFolder
	{
		name: any;

		Right(): Right;
	}

	interface HostAdminRightFolderConstructor {
		new(value?:any): HostAdminRightFolder;
		readonly prototype: HostAdminRightFolder;
	}

	const HostAdminRightFolder: HostAdminRightFolderConstructor;

	interface HostAdminRoleFolder
	{
		name: any;

		Role(): Role;
	}

	interface HostAdminRoleFolderConstructor {
		new(value?:any): HostAdminRoleFolder;
		readonly prototype: HostAdminRoleFolder;
	}

	const HostAdminRoleFolder: HostAdminRoleFolderConstructor;

	interface HostSessionMode extends VclHostSessionMode
	{
		value: any;

	}

	interface HostSessionModeConstructor {
		new(value?:any): HostSessionMode;
		readonly prototype: HostSessionMode;
	}

	const HostSessionMode: HostSessionModeConstructor;

	interface IdentityProviderSourceType extends VclIdentityProviderSourceType
	{
		value: any;

	}

	interface IdentityProviderSourceTypeConstructor {
		new(value?:any): IdentityProviderSourceType;
		readonly prototype: IdentityProviderSourceType;
	}

	const IdentityProviderSourceType: IdentityProviderSourceTypeConstructor;

	interface ImageType extends VclImageType
	{
		value: any;

	}

	interface ImageTypeConstructor {
		new(value?:any): ImageType;
		readonly prototype: ImageType;
	}

	const ImageType: ImageTypeConstructor;

	interface IpAddressAllocationModeType extends VclIpAddressAllocationModeType
	{
		value: any;

	}

	interface IpAddressAllocationModeTypeConstructor {
		new(value?:any): IpAddressAllocationModeType;
		readonly prototype: IpAddressAllocationModeType;
	}

	const IpAddressAllocationModeType: IpAddressAllocationModeTypeConstructor;

	interface IpsecVpnEncryptionProtocolType extends VclIpsecVpnEncryptionProtocolType
	{
		value: any;

	}

	interface IpsecVpnEncryptionProtocolTypeConstructor {
		new(value?:any): IpsecVpnEncryptionProtocolType;
		readonly prototype: IpsecVpnEncryptionProtocolType;
	}

	const IpsecVpnEncryptionProtocolType: IpsecVpnEncryptionProtocolTypeConstructor;

	interface Layer4ProtocolType extends VclLayer4ProtocolType
	{
		value: any;

	}

	interface Layer4ProtocolTypeConstructor {
		new(value?:any): Layer4ProtocolType;
		readonly prototype: Layer4ProtocolType;
	}

	const Layer4ProtocolType: Layer4ProtocolTypeConstructor;

	interface LdapAuthenticationMechanismType extends VclLdapAuthenticationMechanismType
	{
		value: any;

	}

	interface LdapAuthenticationMechanismTypeConstructor {
		new(value?:any): LdapAuthenticationMechanismType;
		readonly prototype: LdapAuthenticationMechanismType;
	}

	const LdapAuthenticationMechanismType: LdapAuthenticationMechanismTypeConstructor;

	interface LdapConnectorType extends VclLdapConnectorType
	{
		value: any;

	}

	interface LdapConnectorTypeConstructor {
		new(value?:any): LdapConnectorType;
		readonly prototype: LdapConnectorType;
	}

	const LdapConnectorType: LdapConnectorTypeConstructor;

	interface LdapModeType extends VclLdapModeType
	{
		value: any;

	}

	interface LdapModeTypeConstructor {
		new(value?:any): LdapModeType;
		readonly prototype: LdapModeType;
	}

	const LdapModeType: LdapModeTypeConstructor;

	interface LicensingReport extends VclLicensingReport
	{
		href: any;
		productSerialNumber: any;
		reportDate: any;
		signature: any;
		type: any;

	}

	interface LicensingReportConstructor {
		new(value?:any): LicensingReport;
		readonly prototype: LicensingReport;
	}

	const LicensingReport: LicensingReportConstructor;

	interface Media extends VclMedia
	{
		description: any;
		href: any;
		id: any;
		imageType: any;
		name: any;
		size: any;
		status: any;
		statusDescription: any;
		type: any;

	}

	interface MediaConstructor {
		new(value?:any): Media;
		readonly prototype: Media;
	}

	const Media: MediaConstructor;

	interface MetadataDomain extends VclMetadataDomain
	{
		value: any;

	}

	interface MetadataDomainConstructor {
		new(value?:any): MetadataDomain;
		readonly prototype: MetadataDomain;
	}

	const MetadataDomain: MetadataDomainConstructor;

	interface MetadataDomainVisibility extends VclMetadataDomainVisibility
	{
		value: any;

	}

	interface MetadataDomainVisibilityConstructor {
		new(value?:any): MetadataDomainVisibility;
		readonly prototype: MetadataDomainVisibility;
	}

	const MetadataDomainVisibility: MetadataDomainVisibilityConstructor;

	interface MetadataExpressionType extends VclMetadataExpressionType
	{
		value: any;

	}

	interface MetadataExpressionTypeConstructor {
		new(value?:any): MetadataExpressionType;
		readonly prototype: MetadataExpressionType;
	}

	const MetadataExpressionType: MetadataExpressionTypeConstructor;

	interface NatMappingModeType extends VclNatMappingModeType
	{
		value: any;

	}

	interface NatMappingModeTypeConstructor {
		new(value?:any): NatMappingModeType;
		readonly prototype: NatMappingModeType;
	}

	const NatMappingModeType: NatMappingModeTypeConstructor;

	interface NatPolicyType extends VclNatPolicyType
	{
		value: any;

	}

	interface NatPolicyTypeConstructor {
		new(value?:any): NatPolicyType;
		readonly prototype: NatPolicyType;
	}

	const NatPolicyType: NatPolicyTypeConstructor;

	interface NatRule extends VclNsxNatRule
	{
		action: any;
		description: any;
		enabled: any;
		icmpType: any;
		loggingEnabled: any;
		name: any;
		obtainEquivalenceKey: any;
		originalAddress: any;
		originalPort: any;
		protocol: any;
		ruleId: any;
		ruleTag: any;
		ruleType: any;
		translatedAddress: any;
		translatedPort: any;
		vnic: any;

	}

	interface NatRuleConstructor {
		new(value?:any): NatRule;
		readonly prototype: NatRule;
	}

	const NatRule: NatRuleConstructor;

	interface NatRuleFolder
	{
		name: any;

		NatRule(): NatRule;
	}

	interface NatRuleFolderConstructor {
		new(value?:any): NatRuleFolder;
		readonly prototype: NatRuleFolder;
	}

	const NatRuleFolder: NatRuleFolderConstructor;

	interface NatTypeType extends VclNatTypeType
	{
		value: any;

	}

	interface NatTypeTypeConstructor {
		new(value?:any): NatTypeType;
		readonly prototype: NatTypeType;
	}

	const NatTypeType: NatTypeTypeConstructor;

	interface NetworkAdapterType extends VclNetworkAdapterType
	{
		value: any;

	}

	interface NetworkAdapterTypeConstructor {
		new(value?:any): NetworkAdapterType;
		readonly prototype: NetworkAdapterType;
	}

	const NetworkAdapterType: NetworkAdapterTypeConstructor;

	interface OperatingSystemFamilyType extends VclOperatingSystemFamilyType
	{
		value: any;

	}

	interface OperatingSystemFamilyTypeConstructor {
		new(value?:any): OperatingSystemFamilyType;
		readonly prototype: OperatingSystemFamilyType;
	}

	const OperatingSystemFamilyType: OperatingSystemFamilyTypeConstructor;

	interface OperatingSystemType extends VclOperatingSystemType
	{
		value: any;

	}

	interface OperatingSystemTypeConstructor {
		new(value?:any): OperatingSystemType;
		readonly prototype: OperatingSystemType;
	}

	const OperatingSystemType: OperatingSystemTypeConstructor;

	interface Organization extends VclOrganization
	{
		description: any;
		fullName: any;
		href: any;
		id: any;
		isEnabled: any;
		name: any;
		type: any;

		OrganizationCatalogFolder(): OrganizationCatalogFolder;
		OrganizationVdcFolder(): OrganizationVdcFolder;
	}

	interface OrganizationConstructor {
		new(value?:any): Organization;
		readonly prototype: Organization;
	}

	const Organization: OrganizationConstructor;

	interface OrganizationCatalogFolder
	{
		name: any;

		Catalog(): Catalog;
	}

	interface OrganizationCatalogFolderConstructor {
		new(value?:any): OrganizationCatalogFolder;
		readonly prototype: OrganizationCatalogFolder;
	}

	const OrganizationCatalogFolder: OrganizationCatalogFolderConstructor;

	interface OrganizationFolder extends VclHost
	{
		name: any;

		Organization(): Organization;
	}

	interface OrganizationFolderConstructor {
		new(value?:any): OrganizationFolder;
		readonly prototype: OrganizationFolder;
	}

	const OrganizationFolder: OrganizationFolderConstructor;

	interface OrganizationVdcFolder
	{
		name: any;

		Vdc(): Vdc;
	}

	interface OrganizationVdcFolderConstructor {
		new(value?:any): OrganizationVdcFolder;
		readonly prototype: OrganizationVdcFolder;
	}

	const OrganizationVdcFolder: OrganizationVdcFolderConstructor;

	interface OrgVdcNetwork extends VclOrgVdcNetwork
	{
		description: any;
		fenceMode: any;
		href: any;
		id: any;
		isShared: any;
		name: any;
		status: any;
		type: any;

	}

	interface OrgVdcNetworkConstructor {
		new(value?:any): OrgVdcNetwork;
		readonly prototype: OrgVdcNetwork;
	}

	const OrgVdcNetwork: OrgVdcNetworkConstructor;

	interface OrgVdcNetworkFolder
	{
		name: any;

		OrgVdcNetwork(): OrgVdcNetwork;
	}

	interface OrgVdcNetworkFolderConstructor {
		new(value?:any): OrgVdcNetworkFolder;
		readonly prototype: OrgVdcNetworkFolder;
	}

	const OrgVdcNetworkFolder: OrgVdcNetworkFolderConstructor;

	interface ProviderVdc extends VclProviderVdc
	{
		cpuAllocated: any;
		cpuOverhead: any;
		cpuTotal: any;
		cpuUnits: any;
		cpuUsed: any;
		description: any;
		href: any;
		id: any;
		isEnabled: any;
		memoryAllocated: any;
		memoryOverhead: any;
		memoryTotal: any;
		memoryUnits: any;
		memoryUsed: any;
		name: any;
		status: any;
		storageAllocated: any;
		storageOverhead: any;
		storageTotal: any;
		storageUnits: any;
		storageUsed: any;
		type: any;

		ProviderVdcAdminVdcFolder(): ProviderVdcAdminVdcFolder;
		ProviderVdcExternalNetworkFolder(): ProviderVdcExternalNetworkFolder;
		ProviderVdcNetworkPoolFolder(): ProviderVdcNetworkPoolFolder;
		ProviderVdcStorageProfileFolder(): ProviderVdcStorageProfileFolder;
	}

	interface ProviderVdcConstructor {
		new(value?:any): ProviderVdc;
		readonly prototype: ProviderVdc;
	}

	const ProviderVdc: ProviderVdcConstructor;

	interface ProviderVdcAdminVdcFolder
	{
		name: any;

		AdminVdc(): AdminVdc;
	}

	interface ProviderVdcAdminVdcFolderConstructor {
		new(value?:any): ProviderVdcAdminVdcFolder;
		readonly prototype: ProviderVdcAdminVdcFolder;
	}

	const ProviderVdcAdminVdcFolder: ProviderVdcAdminVdcFolderConstructor;

	interface ProviderVdcExternalNetworkFolder
	{
		name: any;

		ExternalNetwork(): ExternalNetwork;
	}

	interface ProviderVdcExternalNetworkFolderConstructor {
		new(value?:any): ProviderVdcExternalNetworkFolder;
		readonly prototype: ProviderVdcExternalNetworkFolder;
	}

	const ProviderVdcExternalNetworkFolder: ProviderVdcExternalNetworkFolderConstructor;

	interface ProviderVdcNetworkPoolFolder
	{
		name: any;

		VmwNetworkPool(): VmwNetworkPool;
	}

	interface ProviderVdcNetworkPoolFolderConstructor {
		new(value?:any): ProviderVdcNetworkPoolFolder;
		readonly prototype: ProviderVdcNetworkPoolFolder;
	}

	const ProviderVdcNetworkPoolFolder: ProviderVdcNetworkPoolFolderConstructor;

	interface ProviderVdcStorageProfile extends VclProviderVdcStorageProfile
	{
		capacityTotal: any;
		capacityUsed: any;
		description: any;
		enabled: any;
		href: any;
		id: any;
		name: any;
		type: any;
		units: any;

	}

	interface ProviderVdcStorageProfileConstructor {
		new(value?:any): ProviderVdcStorageProfile;
		readonly prototype: ProviderVdcStorageProfile;
	}

	const ProviderVdcStorageProfile: ProviderVdcStorageProfileConstructor;

	interface ProviderVdcStorageProfileFolder
	{
		name: any;

		ProviderVdcStorageProfile(): ProviderVdcStorageProfile;
	}

	interface ProviderVdcStorageProfileFolderConstructor {
		new(value?:any): ProviderVdcStorageProfileFolder;
		readonly prototype: ProviderVdcStorageProfileFolder;
	}

	const ProviderVdcStorageProfileFolder: ProviderVdcStorageProfileFolderConstructor;

	interface QueryAclRuleField extends VclQueryAclRuleField
	{
		value: any;

	}

	interface QueryAclRuleFieldConstructor {
		new(value?:any): QueryAclRuleField;
		readonly prototype: QueryAclRuleField;
	}

	const QueryAclRuleField: QueryAclRuleFieldConstructor;

	interface QueryAdminAllocatedExternalAddressField extends VclQueryAdminAllocatedExternalAddressField
	{
		value: any;

	}

	interface QueryAdminAllocatedExternalAddressFieldConstructor {
		new(value?:any): QueryAdminAllocatedExternalAddressField;
		readonly prototype: QueryAdminAllocatedExternalAddressField;
	}

	const QueryAdminAllocatedExternalAddressField: QueryAdminAllocatedExternalAddressFieldConstructor;

	interface QueryAdminApiDefinitionField extends VclQueryAdminApiDefinitionField
	{
		value: any;

	}

	interface QueryAdminApiDefinitionFieldConstructor {
		new(value?:any): QueryAdminApiDefinitionField;
		readonly prototype: QueryAdminApiDefinitionField;
	}

	const QueryAdminApiDefinitionField: QueryAdminApiDefinitionFieldConstructor;

	interface QueryAdminCatalogField extends VclQueryAdminCatalogField
	{
		value: any;

	}

	interface QueryAdminCatalogFieldConstructor {
		new(value?:any): QueryAdminCatalogField;
		readonly prototype: QueryAdminCatalogField;
	}

	const QueryAdminCatalogField: QueryAdminCatalogFieldConstructor;

	interface QueryAdminCatalogItemField extends VclQueryAdminCatalogItemField
	{
		value: any;

	}

	interface QueryAdminCatalogItemFieldConstructor {
		new(value?:any): QueryAdminCatalogItemField;
		readonly prototype: QueryAdminCatalogItemField;
	}

	const QueryAdminCatalogItemField: QueryAdminCatalogItemFieldConstructor;

	interface QueryAdminDiskField extends VclQueryAdminDiskField
	{
		value: any;

	}

	interface QueryAdminDiskFieldConstructor {
		new(value?:any): QueryAdminDiskField;
		readonly prototype: QueryAdminDiskField;
	}

	const QueryAdminDiskField: QueryAdminDiskFieldConstructor;

	interface QueryAdminEventField extends VclQueryAdminEventField
	{
		value: any;

	}

	interface QueryAdminEventFieldConstructor {
		new(value?:any): QueryAdminEventField;
		readonly prototype: QueryAdminEventField;
	}

	const QueryAdminEventField: QueryAdminEventFieldConstructor;

	interface QueryAdminFileDescriptorField extends VclQueryAdminFileDescriptorField
	{
		value: any;

	}

	interface QueryAdminFileDescriptorFieldConstructor {
		new(value?:any): QueryAdminFileDescriptorField;
		readonly prototype: QueryAdminFileDescriptorField;
	}

	const QueryAdminFileDescriptorField: QueryAdminFileDescriptorFieldConstructor;

	interface QueryAdminGroupField extends VclQueryAdminGroupField
	{
		value: any;

	}

	interface QueryAdminGroupFieldConstructor {
		new(value?:any): QueryAdminGroupField;
		readonly prototype: QueryAdminGroupField;
	}

	const QueryAdminGroupField: QueryAdminGroupFieldConstructor;

	interface QueryAdminMediaField extends VclQueryAdminMediaField
	{
		value: any;

	}

	interface QueryAdminMediaFieldConstructor {
		new(value?:any): QueryAdminMediaField;
		readonly prototype: QueryAdminMediaField;
	}

	const QueryAdminMediaField: QueryAdminMediaFieldConstructor;

	interface QueryAdminOrgNetworkField extends VclQueryAdminOrgNetworkField
	{
		value: any;

	}

	interface QueryAdminOrgNetworkFieldConstructor {
		new(value?:any): QueryAdminOrgNetworkField;
		readonly prototype: QueryAdminOrgNetworkField;
	}

	const QueryAdminOrgNetworkField: QueryAdminOrgNetworkFieldConstructor;

	interface QueryAdminOrgVdcStorageProfileField extends VclQueryAdminOrgVdcStorageProfileField
	{
		value: any;

	}

	interface QueryAdminOrgVdcStorageProfileFieldConstructor {
		new(value?:any): QueryAdminOrgVdcStorageProfileField;
		readonly prototype: QueryAdminOrgVdcStorageProfileField;
	}

	const QueryAdminOrgVdcStorageProfileField: QueryAdminOrgVdcStorageProfileFieldConstructor;

	interface QueryAdminServiceField extends VclQueryAdminServiceField
	{
		value: any;

	}

	interface QueryAdminServiceFieldConstructor {
		new(value?:any): QueryAdminServiceField;
		readonly prototype: QueryAdminServiceField;
	}

	const QueryAdminServiceField: QueryAdminServiceFieldConstructor;

	interface QueryAdminShadowVMField extends VclQueryAdminShadowVMField
	{
		value: any;

	}

	interface QueryAdminShadowVMFieldConstructor {
		new(value?:any): QueryAdminShadowVMField;
		readonly prototype: QueryAdminShadowVMField;
	}

	const QueryAdminShadowVMField: QueryAdminShadowVMFieldConstructor;

	interface QueryAdminTaskField extends VclQueryAdminTaskField
	{
		value: any;

	}

	interface QueryAdminTaskFieldConstructor {
		new(value?:any): QueryAdminTaskField;
		readonly prototype: QueryAdminTaskField;
	}

	const QueryAdminTaskField: QueryAdminTaskFieldConstructor;

	interface QueryAdminUserField extends VclQueryAdminUserField
	{
		value: any;

	}

	interface QueryAdminUserFieldConstructor {
		new(value?:any): QueryAdminUserField;
		readonly prototype: QueryAdminUserField;
	}

	const QueryAdminUserField: QueryAdminUserFieldConstructor;

	interface QueryAdminVAppField extends VclQueryAdminVAppField
	{
		value: any;

	}

	interface QueryAdminVAppFieldConstructor {
		new(value?:any): QueryAdminVAppField;
		readonly prototype: QueryAdminVAppField;
	}

	const QueryAdminVAppField: QueryAdminVAppFieldConstructor;

	interface QueryAdminVAppNetworkField extends VclQueryAdminVAppNetworkField
	{
		value: any;

	}

	interface QueryAdminVAppNetworkFieldConstructor {
		new(value?:any): QueryAdminVAppNetworkField;
		readonly prototype: QueryAdminVAppNetworkField;
	}

	const QueryAdminVAppNetworkField: QueryAdminVAppNetworkFieldConstructor;

	interface QueryAdminVAppTemplateField extends VclQueryAdminVAppTemplateField
	{
		value: any;

	}

	interface QueryAdminVAppTemplateFieldConstructor {
		new(value?:any): QueryAdminVAppTemplateField;
		readonly prototype: QueryAdminVAppTemplateField;
	}

	const QueryAdminVAppTemplateField: QueryAdminVAppTemplateFieldConstructor;

	interface QueryAdminVdcField extends VclQueryAdminVdcField
	{
		value: any;

	}

	interface QueryAdminVdcFieldConstructor {
		new(value?:any): QueryAdminVdcField;
		readonly prototype: QueryAdminVdcField;
	}

	const QueryAdminVdcField: QueryAdminVdcFieldConstructor;

	interface QueryAdminVmDiskRelationField extends VclQueryAdminVmDiskRelationField
	{
		value: any;

	}

	interface QueryAdminVmDiskRelationFieldConstructor {
		new(value?:any): QueryAdminVmDiskRelationField;
		readonly prototype: QueryAdminVmDiskRelationField;
	}

	const QueryAdminVmDiskRelationField: QueryAdminVmDiskRelationFieldConstructor;

	interface QueryAdminVMField extends VclQueryAdminVMField
	{
		value: any;

	}

	interface QueryAdminVMFieldConstructor {
		new(value?:any): QueryAdminVMField;
		readonly prototype: QueryAdminVMField;
	}

	const QueryAdminVMField: QueryAdminVMFieldConstructor;

	interface QueryAllocatedExternalAddressField extends VclQueryAllocatedExternalAddressField
	{
		value: any;

	}

	interface QueryAllocatedExternalAddressFieldConstructor {
		new(value?:any): QueryAllocatedExternalAddressField;
		readonly prototype: QueryAllocatedExternalAddressField;
	}

	const QueryAllocatedExternalAddressField: QueryAllocatedExternalAddressFieldConstructor;

	interface QueryApiDefinitionField extends VclQueryApiDefinitionField
	{
		value: any;

	}

	interface QueryApiDefinitionFieldConstructor {
		new(value?:any): QueryApiDefinitionField;
		readonly prototype: QueryApiDefinitionField;
	}

	const QueryApiDefinitionField: QueryApiDefinitionFieldConstructor;

	interface QueryApiFilterField extends VclQueryApiFilterField
	{
		value: any;

	}

	interface QueryApiFilterFieldConstructor {
		new(value?:any): QueryApiFilterField;
		readonly prototype: QueryApiFilterField;
	}

	const QueryApiFilterField: QueryApiFilterFieldConstructor;

	interface QueryBlockingTaskField extends VclQueryBlockingTaskField
	{
		value: any;

	}

	interface QueryBlockingTaskFieldConstructor {
		new(value?:any): QueryBlockingTaskField;
		readonly prototype: QueryBlockingTaskField;
	}

	const QueryBlockingTaskField: QueryBlockingTaskFieldConstructor;

	interface QueryCatalogField extends VclQueryCatalogField
	{
		value: any;

	}

	interface QueryCatalogFieldConstructor {
		new(value?:any): QueryCatalogField;
		readonly prototype: QueryCatalogField;
	}

	const QueryCatalogField: QueryCatalogFieldConstructor;

	interface QueryCatalogItemField extends VclQueryCatalogItemField
	{
		value: any;

	}

	interface QueryCatalogItemFieldConstructor {
		new(value?:any): QueryCatalogItemField;
		readonly prototype: QueryCatalogItemField;
	}

	const QueryCatalogItemField: QueryCatalogItemFieldConstructor;

	interface QueryCellField extends VclQueryCellField
	{
		value: any;

	}

	interface QueryCellFieldConstructor {
		new(value?:any): QueryCellField;
		readonly prototype: QueryCellField;
	}

	const QueryCellField: QueryCellFieldConstructor;

	interface QueryConditionField extends VclQueryConditionField
	{
		value: any;

	}

	interface QueryConditionFieldConstructor {
		new(value?:any): QueryConditionField;
		readonly prototype: QueryConditionField;
	}

	const QueryConditionField: QueryConditionFieldConstructor;

	interface QueryDatastoreField extends VclQueryDatastoreField
	{
		value: any;

	}

	interface QueryDatastoreFieldConstructor {
		new(value?:any): QueryDatastoreField;
		readonly prototype: QueryDatastoreField;
	}

	const QueryDatastoreField: QueryDatastoreFieldConstructor;

	interface QueryDatastoreProviderVdcRelationField extends VclQueryDatastoreProviderVdcRelationField
	{
		value: any;

	}

	interface QueryDatastoreProviderVdcRelationFieldConstructor {
		new(value?:any): QueryDatastoreProviderVdcRelationField;
		readonly prototype: QueryDatastoreProviderVdcRelationField;
	}

	const QueryDatastoreProviderVdcRelationField: QueryDatastoreProviderVdcRelationFieldConstructor;

	interface QueryDiskField extends VclQueryDiskField
	{
		value: any;

	}

	interface QueryDiskFieldConstructor {
		new(value?:any): QueryDiskField;
		readonly prototype: QueryDiskField;
	}

	const QueryDiskField: QueryDiskFieldConstructor;

	interface QueryDvSwitchField extends VclQueryDvSwitchField
	{
		value: any;

	}

	interface QueryDvSwitchFieldConstructor {
		new(value?:any): QueryDvSwitchField;
		readonly prototype: QueryDvSwitchField;
	}

	const QueryDvSwitchField: QueryDvSwitchFieldConstructor;

	interface QueryEdgeGatewayField extends VclQueryEdgeGatewayField
	{
		value: any;

	}

	interface QueryEdgeGatewayFieldConstructor {
		new(value?:any): QueryEdgeGatewayField;
		readonly prototype: QueryEdgeGatewayField;
	}

	const QueryEdgeGatewayField: QueryEdgeGatewayFieldConstructor;

	interface QueryEventField extends VclQueryEventField
	{
		value: any;

	}

	interface QueryEventFieldConstructor {
		new(value?:any): QueryEventField;
		readonly prototype: QueryEventField;
	}

	const QueryEventField: QueryEventFieldConstructor;

	interface QueryExternalLocalizationField extends VclQueryExternalLocalizationField
	{
		value: any;

	}

	interface QueryExternalLocalizationFieldConstructor {
		new(value?:any): QueryExternalLocalizationField;
		readonly prototype: QueryExternalLocalizationField;
	}

	const QueryExternalLocalizationField: QueryExternalLocalizationFieldConstructor;

	interface QueryFileDescriptorField extends VclQueryFileDescriptorField
	{
		value: any;

	}

	interface QueryFileDescriptorFieldConstructor {
		new(value?:any): QueryFileDescriptorField;
		readonly prototype: QueryFileDescriptorField;
	}

	const QueryFileDescriptorField: QueryFileDescriptorFieldConstructor;

	interface QueryGroupField extends VclQueryGroupField
	{
		value: any;

	}

	interface QueryGroupFieldConstructor {
		new(value?:any): QueryGroupField;
		readonly prototype: QueryGroupField;
	}

	const QueryGroupField: QueryGroupFieldConstructor;

	interface QueryHostField extends VclQueryHostField
	{
		value: any;

	}

	interface QueryHostFieldConstructor {
		new(value?:any): QueryHostField;
		readonly prototype: QueryHostField;
	}

	const QueryHostField: QueryHostFieldConstructor;

	interface QueryMediaField extends VclQueryMediaField
	{
		value: any;

	}

	interface QueryMediaFieldConstructor {
		new(value?:any): QueryMediaField;
		readonly prototype: QueryMediaField;
	}

	const QueryMediaField: QueryMediaFieldConstructor;

	interface QueryNetworkField extends VclQueryNetworkField
	{
		value: any;

	}

	interface QueryNetworkFieldConstructor {
		new(value?:any): QueryNetworkField;
		readonly prototype: QueryNetworkField;
	}

	const QueryNetworkField: QueryNetworkFieldConstructor;

	interface QueryNetworkPoolField extends VclQueryNetworkPoolField
	{
		value: any;

	}

	interface QueryNetworkPoolFieldConstructor {
		new(value?:any): QueryNetworkPoolField;
		readonly prototype: QueryNetworkPoolField;
	}

	const QueryNetworkPoolField: QueryNetworkPoolFieldConstructor;

	interface QueryOrgField extends VclQueryOrgField
	{
		value: any;

	}

	interface QueryOrgFieldConstructor {
		new(value?:any): QueryOrgField;
		readonly prototype: QueryOrgField;
	}

	const QueryOrgField: QueryOrgFieldConstructor;

	interface QueryOrgNetworkField extends VclQueryOrgNetworkField
	{
		value: any;

	}

	interface QueryOrgNetworkFieldConstructor {
		new(value?:any): QueryOrgNetworkField;
		readonly prototype: QueryOrgNetworkField;
	}

	const QueryOrgNetworkField: QueryOrgNetworkFieldConstructor;

	interface QueryOrgVdcField extends VclQueryOrgVdcField
	{
		value: any;

	}

	interface QueryOrgVdcFieldConstructor {
		new(value?:any): QueryOrgVdcField;
		readonly prototype: QueryOrgVdcField;
	}

	const QueryOrgVdcField: QueryOrgVdcFieldConstructor;

	interface QueryOrgVdcGatewayField extends VclQueryOrgVdcGatewayField
	{
		value: any;

	}

	interface QueryOrgVdcGatewayFieldConstructor {
		new(value?:any): QueryOrgVdcGatewayField;
		readonly prototype: QueryOrgVdcGatewayField;
	}

	const QueryOrgVdcGatewayField: QueryOrgVdcGatewayFieldConstructor;

	interface QueryOrgVdcNetworkField extends VclQueryOrgVdcNetworkField
	{
		value: any;

	}

	interface QueryOrgVdcNetworkFieldConstructor {
		new(value?:any): QueryOrgVdcNetworkField;
		readonly prototype: QueryOrgVdcNetworkField;
	}

	const QueryOrgVdcNetworkField: QueryOrgVdcNetworkFieldConstructor;

	interface QueryOrgVdcResourcePoolRelationField extends VclQueryOrgVdcResourcePoolRelationField
	{
		value: any;

	}

	interface QueryOrgVdcResourcePoolRelationFieldConstructor {
		new(value?:any): QueryOrgVdcResourcePoolRelationField;
		readonly prototype: QueryOrgVdcResourcePoolRelationField;
	}

	const QueryOrgVdcResourcePoolRelationField: QueryOrgVdcResourcePoolRelationFieldConstructor;

	interface QueryOrgVdcStorageProfileField extends VclQueryOrgVdcStorageProfileField
	{
		value: any;

	}

	interface QueryOrgVdcStorageProfileFieldConstructor {
		new(value?:any): QueryOrgVdcStorageProfileField;
		readonly prototype: QueryOrgVdcStorageProfileField;
	}

	const QueryOrgVdcStorageProfileField: QueryOrgVdcStorageProfileFieldConstructor;

	interface QueryPortgroupField extends VclQueryPortgroupField
	{
		value: any;

	}

	interface QueryPortgroupFieldConstructor {
		new(value?:any): QueryPortgroupField;
		readonly prototype: QueryPortgroupField;
	}

	const QueryPortgroupField: QueryPortgroupFieldConstructor;

	interface QueryProviderVdcResourcePoolRelationField extends VclQueryProviderVdcResourcePoolRelationField
	{
		value: any;

	}

	interface QueryProviderVdcResourcePoolRelationFieldConstructor {
		new(value?:any): QueryProviderVdcResourcePoolRelationField;
		readonly prototype: QueryProviderVdcResourcePoolRelationField;
	}

	const QueryProviderVdcResourcePoolRelationField: QueryProviderVdcResourcePoolRelationFieldConstructor;

	interface QueryProviderVdcStorageProfileField extends VclQueryProviderVdcStorageProfileField
	{
		value: any;

	}

	interface QueryProviderVdcStorageProfileFieldConstructor {
		new(value?:any): QueryProviderVdcStorageProfileField;
		readonly prototype: QueryProviderVdcStorageProfileField;
	}

	const QueryProviderVdcStorageProfileField: QueryProviderVdcStorageProfileFieldConstructor;

	interface QueryRecordType extends VclQueryRecordType
	{
		value: any;

	}

	interface QueryRecordTypeConstructor {
		new(value?:any): QueryRecordType;
		readonly prototype: QueryRecordType;
	}

	const QueryRecordType: QueryRecordTypeConstructor;

	interface QueryReferenceField extends VclQueryReferenceField
	{
		value: any;

	}

	interface QueryReferenceFieldConstructor {
		new(value?:any): QueryReferenceField;
		readonly prototype: QueryReferenceField;
	}

	const QueryReferenceField: QueryReferenceFieldConstructor;

	interface QueryReferenceType extends VclQueryReferenceType
	{
		value: any;

	}

	interface QueryReferenceTypeConstructor {
		new(value?:any): QueryReferenceType;
		readonly prototype: QueryReferenceType;
	}

	const QueryReferenceType: QueryReferenceTypeConstructor;

	interface QueryResourceClassActionField extends VclQueryResourceClassActionField
	{
		value: any;

	}

	interface QueryResourceClassActionFieldConstructor {
		new(value?:any): QueryResourceClassActionField;
		readonly prototype: QueryResourceClassActionField;
	}

	const QueryResourceClassActionField: QueryResourceClassActionFieldConstructor;

	interface QueryResourceClassField extends VclQueryResourceClassField
	{
		value: any;

	}

	interface QueryResourceClassFieldConstructor {
		new(value?:any): QueryResourceClassField;
		readonly prototype: QueryResourceClassField;
	}

	const QueryResourceClassField: QueryResourceClassFieldConstructor;

	interface QueryResourcePoolField extends VclQueryResourcePoolField
	{
		value: any;

	}

	interface QueryResourcePoolFieldConstructor {
		new(value?:any): QueryResourcePoolField;
		readonly prototype: QueryResourcePoolField;
	}

	const QueryResourcePoolField: QueryResourcePoolFieldConstructor;

	interface QueryResourcePoolVMField extends VclQueryResourcePoolVMField
	{
		value: any;

	}

	interface QueryResourcePoolVMFieldConstructor {
		new(value?:any): QueryResourcePoolVMField;
		readonly prototype: QueryResourcePoolVMField;
	}

	const QueryResourcePoolVMField: QueryResourcePoolVMFieldConstructor;

	interface QueryRightField extends VclQueryRightField
	{
		value: any;

	}

	interface QueryRightFieldConstructor {
		new(value?:any): QueryRightField;
		readonly prototype: QueryRightField;
	}

	const QueryRightField: QueryRightFieldConstructor;

	interface QueryRoleField extends VclQueryRoleField
	{
		value: any;

	}

	interface QueryRoleFieldConstructor {
		new(value?:any): QueryRoleField;
		readonly prototype: QueryRoleField;
	}

	const QueryRoleField: QueryRoleFieldConstructor;

	interface QueryServiceField extends VclQueryServiceField
	{
		value: any;

	}

	interface QueryServiceFieldConstructor {
		new(value?:any): QueryServiceField;
		readonly prototype: QueryServiceField;
	}

	const QueryServiceField: QueryServiceFieldConstructor;

	interface QueryServiceLinkField extends VclQueryServiceLinkField
	{
		value: any;

	}

	interface QueryServiceLinkFieldConstructor {
		new(value?:any): QueryServiceLinkField;
		readonly prototype: QueryServiceLinkField;
	}

	const QueryServiceLinkField: QueryServiceLinkFieldConstructor;

	interface QueryServiceResourceField extends VclQueryServiceResourceField
	{
		value: any;

	}

	interface QueryServiceResourceFieldConstructor {
		new(value?:any): QueryServiceResourceField;
		readonly prototype: QueryServiceResourceField;
	}

	const QueryServiceResourceField: QueryServiceResourceFieldConstructor;

	interface QueryStrandedItemField extends VclQueryStrandedItemField
	{
		value: any;

	}

	interface QueryStrandedItemFieldConstructor {
		new(value?:any): QueryStrandedItemField;
		readonly prototype: QueryStrandedItemField;
	}

	const QueryStrandedItemField: QueryStrandedItemFieldConstructor;

	interface QueryStrandedUserField extends VclQueryStrandedUserField
	{
		value: any;

	}

	interface QueryStrandedUserFieldConstructor {
		new(value?:any): QueryStrandedUserField;
		readonly prototype: QueryStrandedUserField;
	}

	const QueryStrandedUserField: QueryStrandedUserFieldConstructor;

	interface QueryTaskField extends VclQueryTaskField
	{
		value: any;

	}

	interface QueryTaskFieldConstructor {
		new(value?:any): QueryTaskField;
		readonly prototype: QueryTaskField;
	}

	const QueryTaskField: QueryTaskFieldConstructor;

	interface QueryUserField extends VclQueryUserField
	{
		value: any;

	}

	interface QueryUserFieldConstructor {
		new(value?:any): QueryUserField;
		readonly prototype: QueryUserField;
	}

	const QueryUserField: QueryUserFieldConstructor;

	interface QueryVAppField extends VclQueryVAppField
	{
		value: any;

	}

	interface QueryVAppFieldConstructor {
		new(value?:any): QueryVAppField;
		readonly prototype: QueryVAppField;
	}

	const QueryVAppField: QueryVAppFieldConstructor;

	interface QueryVAppNetworkField extends VclQueryVAppNetworkField
	{
		value: any;

	}

	interface QueryVAppNetworkFieldConstructor {
		new(value?:any): QueryVAppNetworkField;
		readonly prototype: QueryVAppNetworkField;
	}

	const QueryVAppNetworkField: QueryVAppNetworkFieldConstructor;

	interface QueryVAppOrgNetworkRelationField extends VclQueryVAppOrgNetworkRelationField
	{
		value: any;

	}

	interface QueryVAppOrgNetworkRelationFieldConstructor {
		new(value?:any): QueryVAppOrgNetworkRelationField;
		readonly prototype: QueryVAppOrgNetworkRelationField;
	}

	const QueryVAppOrgNetworkRelationField: QueryVAppOrgNetworkRelationFieldConstructor;

	interface QueryVAppOrgVdcNetworkRelationField extends VclQueryVAppOrgVdcNetworkRelationField
	{
		value: any;

	}

	interface QueryVAppOrgVdcNetworkRelationFieldConstructor {
		new(value?:any): QueryVAppOrgVdcNetworkRelationField;
		readonly prototype: QueryVAppOrgVdcNetworkRelationField;
	}

	const QueryVAppOrgVdcNetworkRelationField: QueryVAppOrgVdcNetworkRelationFieldConstructor;

	interface QueryVAppTemplateField extends VclQueryVAppTemplateField
	{
		value: any;

	}

	interface QueryVAppTemplateFieldConstructor {
		new(value?:any): QueryVAppTemplateField;
		readonly prototype: QueryVAppTemplateField;
	}

	const QueryVAppTemplateField: QueryVAppTemplateFieldConstructor;

	interface QueryVirtualCenterField extends VclQueryVirtualCenterField
	{
		value: any;

	}

	interface QueryVirtualCenterFieldConstructor {
		new(value?:any): QueryVirtualCenterField;
		readonly prototype: QueryVirtualCenterField;
	}

	const QueryVirtualCenterField: QueryVirtualCenterFieldConstructor;

	interface QueryVmDiskRelationField extends VclQueryVmDiskRelationField
	{
		value: any;

	}

	interface QueryVmDiskRelationFieldConstructor {
		new(value?:any): QueryVmDiskRelationField;
		readonly prototype: QueryVmDiskRelationField;
	}

	const QueryVmDiskRelationField: QueryVmDiskRelationFieldConstructor;

	interface QueryVMField extends VclQueryVMField
	{
		value: any;

	}

	interface QueryVMFieldConstructor {
		new(value?:any): QueryVMField;
		readonly prototype: QueryVMField;
	}

	const QueryVMField: QueryVMFieldConstructor;

	interface QueryVMWProviderVdcField extends VclQueryVMWProviderVdcField
	{
		value: any;

	}

	interface QueryVMWProviderVdcFieldConstructor {
		new(value?:any): QueryVMWProviderVdcField;
		readonly prototype: QueryVMWProviderVdcField;
	}

	const QueryVMWProviderVdcField: QueryVMWProviderVdcFieldConstructor;

	interface Right extends VclRight
	{
		bundleKey: any;
		category: any;
		description: any;
		href: any;
		id: any;
		name: any;
		serviceNamespace: any;
		type: any;

	}

	interface RightConstructor {
		new(value?:any): Right;
		readonly prototype: Right;
	}

	const Right: RightConstructor;

	interface Role extends VclRole
	{
		description: any;
		href: any;
		id: any;
		name: any;
		type: any;

	}

	interface RoleConstructor {
		new(value?:any): Role;
		readonly prototype: Role;
	}

	const Role: RoleConstructor;

	interface SdkMessage extends VclSdkMessage
	{
		value: any;

	}

	interface SdkMessageConstructor {
		new(value?:any): SdkMessage;
		readonly prototype: SdkMessage;
	}

	const SdkMessage: SdkMessageConstructor;

	interface SelfSignedCsr extends VclSelfSignedCsr
	{
		certificateType: any;
		description: any;
		issuerCn: any;
		isUniversal: any;
		name: any;
		nodeId: any;
		pemEncoding: any;
		subjectCn: any;
		universalRevision: any;

	}

	interface SelfSignedCsrConstructor {
		new(value?:any): SelfSignedCsr;
		readonly prototype: SelfSignedCsr;
	}

	const SelfSignedCsr: SelfSignedCsrConstructor;

	interface SelfSignedCsrFolder
	{
		name: any;

		SelfSignedCsr(): SelfSignedCsr;
	}

	interface SelfSignedCsrFolderConstructor {
		new(value?:any): SelfSignedCsrFolder;
		readonly prototype: SelfSignedCsrFolder;
	}

	const SelfSignedCsrFolder: SelfSignedCsrFolderConstructor;

	interface Service extends VclService
	{
		description: any;
		href: any;
		id: any;
		name: any;
		namespace: any;
		type: any;
		vendor: any;

	}

	interface ServiceConstructor {
		new(value?:any): Service;
		readonly prototype: Service;
	}

	const Service: ServiceConstructor;

	interface ServiceCertificate extends VclServiceCertificate
	{
		certificateType: any;
		description: any;
		issuerCn: any;
		isUniversal: any;
		name: any;
		nodeId: any;
		pemEncoding: any;
		subjectCn: any;
		universalRevision: any;

	}

	interface ServiceCertificateConstructor {
		new(value?:any): ServiceCertificate;
		readonly prototype: ServiceCertificate;
	}

	const ServiceCertificate: ServiceCertificateConstructor;

	interface ServiceCertificateFolder
	{
		name: any;

		ServiceCertificate(): ServiceCertificate;
	}

	interface ServiceCertificateFolderConstructor {
		new(value?:any): ServiceCertificateFolder;
		readonly prototype: ServiceCertificateFolder;
	}

	const ServiceCertificateFolder: ServiceCertificateFolderConstructor;

	interface ServiceFolder extends VclHost
	{
		name: any;

		Service(): Service;
	}

	interface ServiceFolderConstructor {
		new(value?:any): ServiceFolder;
		readonly prototype: ServiceFolder;
	}

	const ServiceFolder: ServiceFolderConstructor;

	interface SortType extends VclSortType
	{
		value: any;

	}

	interface SortTypeConstructor {
		new(value?:any): SortType;
		readonly prototype: SortType;
	}

	const SortType: SortTypeConstructor;

	interface StrandedItem extends VclStrandedItem
	{
		deletionDate: any;
		description: any;
		entityType: any;
		errorMessage: any;
		href: any;
		id: any;
		name: any;
		type: any;

	}

	interface StrandedItemConstructor {
		new(value?:any): StrandedItem;
		readonly prototype: StrandedItem;
	}

	const StrandedItem: StrandedItemConstructor;

	interface Task extends VclTask
	{
		cancelRequested: any;
		description: any;
		details: any;
		endTime: any;
		expiryTime: any;
		href: any;
		id: any;
		name: any;
		operation: any;
		operationName: any;
		owner: any;
		ownerHref: any;
		params: any;
		progress: any;
		serviceNamespace: any;
		startTime: any;
		status: any;
		type: any;

	}

	interface TaskConstructor {
		new(value?:any): Task;
		readonly prototype: Task;
	}

	const Task: TaskConstructor;

	interface TaskStatusType extends VclTaskStatusType
	{
		value: any;

	}

	interface TaskStatusTypeConstructor {
		new(value?:any): TaskStatusType;
		readonly prototype: TaskStatusType;
	}

	const TaskStatusType: TaskStatusTypeConstructor;

	interface TimeUnitType extends VclTimeUnitType
	{
		value: any;

	}

	interface TimeUnitTypeConstructor {
		new(value?:any): TimeUnitType;
		readonly prototype: TimeUnitType;
	}

	const TimeUnitType: TimeUnitTypeConstructor;

	interface UndeployPowerActionType extends VclUndeployPowerActionType
	{
		value: any;

	}

	interface UndeployPowerActionTypeConstructor {
		new(value?:any): UndeployPowerActionType;
		readonly prototype: UndeployPowerActionType;
	}

	const UndeployPowerActionType: UndeployPowerActionTypeConstructor;

	interface User extends VclUser
	{
		alertEmail: any;
		alertEmailPrefix: any;
		deployedVmQuota: any;
		description: any;
		emailAddress: any;
		fullName: any;
		href: any;
		id: any;
		iM: any;
		isAlertEnabled: any;
		isDefaultCached: any;
		isEnabled: any;
		isExternal: any;
		isGroupRole: any;
		isLocked: any;
		name: any;
		nameInSource: any;
		password: any;
		providerType: any;
		storedVmQuota: any;
		telephone: any;
		type: any;

	}

	interface UserConstructor {
		new(value?:any): User;
		readonly prototype: User;
	}

	const User: UserConstructor;

	interface VApp extends VclVApp
	{
		dateCreated: any;
		deployed: any;
		description: any;
		href: any;
		id: any;
		inMaintenanceMode: any;
		name: any;
		ovfDescriptorUploaded: any;
		status: any;
		type: any;
		vappStatusDescription: any;

		VApp(): VApp;
		VAppNetworkFolder(): VAppNetworkFolder;
		VM(): VM;
	}

	interface VAppConstructor {
		new(value?:any): VApp;
		readonly prototype: VApp;
	}

	const VApp: VAppConstructor;

	interface VAppNetwork extends VclVAppNetwork
	{
		deployed: any;
		description: any;
		fenceMode: any;
		href: any;
		id: any;
		name: any;
		type: any;

	}

	interface VAppNetworkConstructor {
		new(value?:any): VAppNetwork;
		readonly prototype: VAppNetwork;
	}

	const VAppNetwork: VAppNetworkConstructor;

	interface VAppNetworkFolder
	{
		name: any;

		VAppNetwork(): VAppNetwork;
	}

	interface VAppNetworkFolderConstructor {
		new(value?:any): VAppNetworkFolder;
		readonly prototype: VAppNetworkFolder;
	}

	const VAppNetworkFolder: VAppNetworkFolderConstructor;

	interface VappStatus extends VclVappStatus
	{
		value: any;

	}

	interface VappStatusConstructor {
		new(value?:any): VappStatus;
		readonly prototype: VappStatus;
	}

	const VappStatus: VappStatusConstructor;

	interface VAppTemplate extends VclVAppTemplate
	{
		dateCreated: any;
		defaultStorageProfile: any;
		description: any;
		goldMaster: any;
		href: any;
		id: any;
		isVm: any;
		name: any;
		ovfDescriptorUploaded: any;
		status: any;
		type: any;
		vAppScopedLocalId: any;
		vappTemplateStatusDescription: any;

		VAppTemplate(): VAppTemplate;
	}

	interface VAppTemplateConstructor {
		new(value?:any): VAppTemplate;
		readonly prototype: VAppTemplate;
	}

	const VAppTemplate: VAppTemplateConstructor;

	interface VappTemplateStatus extends VclVappTemplateStatus
	{
		value: any;

	}

	interface VappTemplateStatusConstructor {
		new(value?:any): VappTemplateStatus;
		readonly prototype: VappTemplateStatus;
	}

	const VappTemplateStatus: VappTemplateStatusConstructor;

	interface Vdc extends VclVdc
	{
		allocationModel: any;
		cpuAllocated: any;
		cpuLimit: any;
		cpuOverhead: any;
		cpuUnits: any;
		cpuUsed: any;
		description: any;
		href: any;
		id: any;
		isEnabled: any;
		memoryAllocated: any;
		memoryLimit: any;
		memoryOverhead: any;
		memoryUnits: any;
		memoryUsed: any;
		name: any;
		networkQuota: any;
		nicQuota: any;
		status: any;
		storageAllocated: any;
		storageLimit: any;
		storageOverhead: any;
		storageUnits: any;
		storageUsed: any;
		type: any;
		usedNetworkCount: any;
		vmQuota: any;

		DiskFolder(): DiskFolder;
		GatewayFolder(): GatewayFolder;
		OrgVdcNetworkFolder(): OrgVdcNetworkFolder;
		VdcMediaFolder(): VdcMediaFolder;
		VdcStorageProfileFolder(): VdcStorageProfileFolder;
		VdcVAppFolder(): VdcVAppFolder;
		VdcVAppTemplateFolder(): VdcVAppTemplateFolder;
		VmAffinityRuleFolder(): VmAffinityRuleFolder;
	}

	interface VdcConstructor {
		new(value?:any): Vdc;
		readonly prototype: Vdc;
	}

	const Vdc: VdcConstructor;

	interface VdcMediaFolder
	{
		name: any;

		Media(): Media;
	}

	interface VdcMediaFolderConstructor {
		new(value?:any): VdcMediaFolder;
		readonly prototype: VdcMediaFolder;
	}

	const VdcMediaFolder: VdcMediaFolderConstructor;

	interface VdcStorageProfile extends VclVdcStorageProfile
	{
		default: any;
		description: any;
		enabled: any;
		href: any;
		id: any;
		limit: any;
		name: any;
		type: any;
		units: any;

	}

	interface VdcStorageProfileConstructor {
		new(value?:any): VdcStorageProfile;
		readonly prototype: VdcStorageProfile;
	}

	const VdcStorageProfile: VdcStorageProfileConstructor;

	interface VdcStorageProfileFolder
	{
		name: any;

		VdcStorageProfile(): VdcStorageProfile;
	}

	interface VdcStorageProfileFolderConstructor {
		new(value?:any): VdcStorageProfileFolder;
		readonly prototype: VdcStorageProfileFolder;
	}

	const VdcStorageProfileFolder: VdcStorageProfileFolderConstructor;

	interface VdcVAppFolder
	{
		name: any;

		VApp(): VApp;
	}

	interface VdcVAppFolderConstructor {
		new(value?:any): VdcVAppFolder;
		readonly prototype: VdcVAppFolder;
	}

	const VdcVAppFolder: VdcVAppFolderConstructor;

	interface VdcVAppTemplateFolder
	{
		name: any;

		VAppTemplate(): VAppTemplate;
	}

	interface VdcVAppTemplateFolderConstructor {
		new(value?:any): VdcVAppTemplateFolder;
		readonly prototype: VdcVAppTemplateFolder;
	}

	const VdcVAppTemplateFolder: VdcVAppTemplateFolderConstructor;

	interface Version extends VclVersion
	{
		value: any;

	}

	interface VersionConstructor {
		new(value?:any): Version;
		readonly prototype: Version;
	}

	const Version: VersionConstructor;

	interface VimObjectTypeEnum extends VclVimObjectTypeEnum
	{
		value: any;

	}

	interface VimObjectTypeEnumConstructor {
		new(value?:any): VimObjectTypeEnum;
		readonly prototype: VimObjectTypeEnum;
	}

	const VimObjectTypeEnum: VimObjectTypeEnumConstructor;

	interface VimServer extends VclVimServer
	{
		description: any;
		href: any;
		id: any;
		isConnected: any;
		isEnabled: any;
		name: any;
		password: any;
		shieldManagerHost: any;
		shieldManagerUserName: any;
		type: any;
		url: any;
		username: any;
		useVsphereService: any;
		uuid: any;
		vcProxy: any;
		vcVersion: any;
		vsphereWebClientServerUrl: any;

	}

	interface VimServerConstructor {
		new(value?:any): VimServer;
		readonly prototype: VimServer;
	}

	const VimServer: VimServerConstructor;

	interface VM extends VclVM
	{
		dateCreated: any;
		deployed: any;
		description: any;
		href: any;
		id: any;
		name: any;
		needsCustomization: any;
		nestedHypervisorEnabled: any;
		status: any;
		type: any;
		vAppScopedLocalId: any;
		vmStatusDescription: any;

		AttachedDiskFolder(): AttachedDiskFolder;
	}

	interface VMConstructor {
		new(value?:any): VM;
		readonly prototype: VM;
	}

	const VM: VMConstructor;

	interface VmAffinity extends VclVmAffinity
	{
		href: any;
		id: any;
		isEnabled: any;
		isMandatory: any;
		name: any;
		polarity: any;
		scope: any;
		type: any;

	}

	interface VmAffinityConstructor {
		new(value?:any): VmAffinity;
		readonly prototype: VmAffinity;
	}

	const VmAffinity: VmAffinityConstructor;

	interface VmAffinityRuleFolder
	{
		name: any;

		VmAffinity(): VmAffinity;
	}

	interface VmAffinityRuleFolderConstructor {
		new(value?:any): VmAffinityRuleFolder;
		readonly prototype: VmAffinityRuleFolder;
	}

	const VmAffinityRuleFolder: VmAffinityRuleFolderConstructor;

	interface VMStatus extends VclVMStatus
	{
		value: any;

	}

	interface VMStatusConstructor {
		new(value?:any): VMStatus;
		readonly prototype: VMStatus;
	}

	const VMStatus: VMStatusConstructor;

	interface VmwDatastore extends VclVMWDatastore
	{
		busy: any;
		datastoreFsType: any;
		description: any;
		enabled: any;
		href: any;
		id: any;
		mountDirectory: any;
		mountHost: any;
		name: any;
		provisionedSpaceGb: any;
		provisionedSpaceMb: any;
		requestedStorageGb: any;
		requestedStorageMb: any;
		systemMessages: any;
		thresholdRedGb: any;
		thresholdYellowGb: any;
		totalCapacityGb: any;
		totalCapacityMb: any;
		type: any;
		usedCapacityGb: any;
		usedCapacityMb: any;
		usedCapacityPercent: any;
		vAAIForFpEnabled: any;
		vcDisplayName: any;
		vimPropertyPageUrl: any;

	}

	interface VmwDatastoreConstructor {
		new(value?:any): VmwDatastore;
		readonly prototype: VmwDatastore;
	}

	const VmwDatastore: VmwDatastoreConstructor;

	interface VmwExternalNetwork extends VclVMWExternalNetwork
	{
		description: any;
		fenceMode: any;
		href: any;
		id: any;
		moRef: any;
		name: any;
		type: any;

	}

	interface VmwExternalNetworkConstructor {
		new(value?:any): VmwExternalNetwork;
		readonly prototype: VmwExternalNetwork;
	}

	const VmwExternalNetwork: VmwExternalNetworkConstructor;

	interface VmwHost extends VclVMWHost
	{
		available: any;
		busy: any;
		cpuTotal: any;
		cpuType: any;
		description: any;
		enabled: any;
		enableHostForHostSpanning: any;
		hostOsName: any;
		hostOsVersion: any;
		href: any;
		id: any;
		memTotal: any;
		memUsed: any;
		name: any;
		numOfCpusLogical: any;
		numOfCpusPackages: any;
		ready: any;
		systemMessages: any;
		type: any;
		vimPropertyPageUrl: any;
		vmMoRef: any;

	}

	interface VmwHostConstructor {
		new(value?:any): VmwHost;
		readonly prototype: VmwHost;
	}

	const VmwHost: VmwHostConstructor;

	interface VmwNetworkPool extends VclVMWNetworkPool
	{
		description: any;
		href: any;
		id: any;
		name: any;
		status: any;
		type: any;

	}

	interface VmwNetworkPoolConstructor {
		new(value?:any): VmwNetworkPool;
		readonly prototype: VmwNetworkPool;
	}

	const VmwNetworkPool: VmwNetworkPoolConstructor;

	interface VMWNetworkPoolType extends VclVMWNetworkPoolType
	{
		value: any;

	}

	interface VMWNetworkPoolTypeConstructor {
		new(value?:any): VMWNetworkPoolType;
		readonly prototype: VMWNetworkPoolType;
	}

	const VMWNetworkPoolType: VMWNetworkPoolTypeConstructor;

	interface VmwProviderVdc extends VclVMWProviderVdc
	{
		cpuAllocated: any;
		cpuOverhead: any;
		cpuTotal: any;
		cpuUnits: any;
		cpuUsed: any;
		description: any;
		highestSupportedHardwareVersion: any;
		href: any;
		id: any;
		isEnabled: any;
		memoryAllocated: any;
		memoryOverhead: any;
		memoryTotal: any;
		memoryUnits: any;
		memoryUsed: any;
		name: any;
		status: any;
		storageAllocated: any;
		storageOverhead: any;
		storageTotal: any;
		storageUnits: any;
		storageUsed: any;
		type: any;

		HostAdminExtensionVmwProviderVdcDatastoreFolder(): HostAdminExtensionVmwProviderVdcDatastoreFolder;
		HostAdminExtensionVmwProviderVdcHostFolder(): HostAdminExtensionVmwProviderVdcHostFolder;
		HostAdminExtensionVmwProviderVdcNetworkFolder(): HostAdminExtensionVmwProviderVdcNetworkFolder;
		HostAdminExtensionVmwProviderVdcNetworkPoolFolder(): HostAdminExtensionVmwProviderVdcNetworkPoolFolder;
		HostAdminExtensionVmwProviderVdcStorageProfileFolder(): HostAdminExtensionVmwProviderVdcStorageProfileFolder;
	}

	interface VmwProviderVdcConstructor {
		new(value?:any): VmwProviderVdc;
		readonly prototype: VmwProviderVdc;
	}

	const VmwProviderVdc: VmwProviderVdcConstructor;

	interface VmwProviderVdcStorageProfile extends VclVMWProviderVdcStorageProfile
	{
		capacityTotal: any;
		capacityUsed: any;
		description: any;
		enabled: any;
		href: any;
		id: any;
		name: any;
		type: any;
		units: any;

	}

	interface VmwProviderVdcStorageProfileConstructor {
		new(value?:any): VmwProviderVdcStorageProfile;
		readonly prototype: VmwProviderVdcStorageProfile;
	}

	const VmwProviderVdcStorageProfile: VmwProviderVdcStorageProfileConstructor;

	interface VmwVdcTemplate extends VclVMWVdcTemplate
	{
		description: any;
		href: any;
		id: any;
		name: any;
		tenantDescription: any;
		tenantName: any;
		type: any;

	}

	interface VmwVdcTemplateConstructor {
		new(value?:any): VmwVdcTemplate;
		readonly prototype: VmwVdcTemplate;
	}

	const VmwVdcTemplate: VmwVdcTemplateConstructor;

    }    
