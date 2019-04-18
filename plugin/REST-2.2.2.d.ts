/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface AuthorizationValue
	{

		getKeyName(): String;
		getType(): String;
		getValue(): String;
		keyName(keyName?: String): AuthorizationValue;
		setKeyName(keyName?: String): void;
		setType(type?: String): void;
		setValue(value?: String): void;
		type(type?: String): AuthorizationValue;
		value(value?: String): AuthorizationValue;
	}

	declare const AuthorizationValue: AuthorizationValue;

	interface HTTPBasicAuthentication
	{
		rawAuthProperties: String[];
		type: String;

		getRawAuthProperty(index?: Number): String;
	}

	interface HTTPBasicAuthenticationConstructor {
		new(value?:any): HTTPBasicAuthentication;
		readonly prototype: HTTPBasicAuthentication;
		getBasicAuthHeaderValue(username?: String, password?: String): String;
	}

	declare const HTTPBasicAuthentication: HTTPBasicAuthenticationConstructor;

declare module java.util
{
	export interface Map
	{

	}


}
	interface RESTAuthentication
	{
		rawAuthProperties: String[];
		type: String;

		getRawAuthProperty(index?: Number): String;
	}

	interface RESTAuthenticationConstructor {
		new(value?:any): RESTAuthentication;
		readonly prototype: RESTAuthentication;
	}

	declare const RESTAuthentication: RESTAuthenticationConstructor;

	interface RESTAuthenticationManager
	{

		createAuthentication(type?: String, params?: String[]): RESTAuthentication;
		getRESTAuthentications(): String[];
		getSessionModes(): String[];
	}

	declare const RESTAuthenticationManager: RESTAuthenticationManager;

	interface RESTHost
	{
		authentication: RESTAuthentication;
		connectionTimeout: Number;
		hostVerification: boolean;
		id: String;
		name: String;
		operationTimeout: Number;
		privateKeyId: String;
		proxyAuthentication: RESTAuthentication;
		proxyHost: String;
		proxyPort: Number;
		url: String;

		addOperation(operation?: RESTOperation): RESTOperation;
		addSchemaFromUrl(url?: String): String[];
		addSchemaFromXmlString(xml?: String): String[];
		clone(): RESTHost;
		createRequest(method?: String, url?: String, content?: Object): RESTRequest;
		executeRequestWithCredentials(method?: String, url?: String, content?: Object, user?: String, pass?: String): RESTResponse;
		getAutoUrlRedirectEnabled(): boolean;
		getOperation(id?: String): RESTOperation;
		getOperations(): String[];
		getSchemaElements(namespace?: String): Object[];
		getSchemaNamespaces(): String[];
		newHostFromThis(): RESTHost;
		removeAllSchemas(): void;
		removeOperation(id?: String): RESTOperation;
		setAutoUrlRedirect(autoRedirectEnabled?: boolean): void;
		updateOperation(operation?: RESTOperation): RESTOperation;
	}

	interface RESTHostConstructor {
		new(value?:any): RESTHost;
		readonly prototype: RESTHost;
	}

	declare const RESTHost: RESTHostConstructor;

	interface RESTHostManager
	{

		addHost(host?: RESTHost): RESTHost;
		createHost(name?: String): RESTHost;
		createRESTHostFromSwaggerSpecString(hostName?: String, swaggerSpec?: String, host?: String, basePath?: String, preferredCommunicationProtocol?: String, params?: java.util.Map): RESTHost;
		createRESTHostFromSwaggerSpecUrl(hostName?: String, swaggerSpecUrl?: String, auths?: AuthorizationValue[], preferredCommunicationProtocol?: String, params?: java.util.Map): RESTHost;
		createTransientHostFrom(restHostPrototype?: RESTHost): RESTHost;
		createTransientOperationFrom(restOperationPrototype?: RESTOperation): RESTOperation;
		createWorkflow(operation?: RESTOperation, workflowName?: String, category?: WorkflowCategory, defaultContentType?: String): Workflow;
		createWorkflowWithXsdInput(operation?: RESTOperation, workflowName?: String, category?: WorkflowCategory, namespace?: String, elementName?: String, defaultContentType?: String): Workflow;
		getHost(id?: String): RESTHost;
		getHosts(): String[];
		getSwaggerServiceUrl(swaggerSpec?: String, host?: String, basePath?: String, preferredCommunicationProtocol?: String): String;
		reloadConfiguration(): void;
		removeHost(id?: String): RESTHost;
		updateHost(host?: RESTHost): RESTHost;
	}

	declare const RESTHostManager: RESTHostManager;

	interface RESTOperation
	{
		defaultContentType: String;
		host: String;
		id: String;
		inParametersCount: String;
		method: String;
		name: String;
		urlTemplate: String;

		addMandatoryHeaderParameter(mandatoryHeaderParamName?: String): void;
		addMandatoryPathParameter(mandatoryPathParamName?: String): void;
		addMandatoryQueryParameter(mandatoryQueryParamName?: String): void;
		addPreferredAcceptHeaderMediaType(mediaType?: String): void;
		addSupportedAcceptHeaderMediaType(mediaType?: String): void;
		addSupportedContentType(supportedContentType?: String): void;
		clone(): RESTOperation;
		createRequest(params?: String[], content?: Object): RESTRequest;
		getDefaultContentType(): String;
		getHeaderParameters(): String[];
		getInParameters(): String[];
		getPathParamsCount(): Number;
		getSupportedAcceptHeaderMediaTypes(): String[];
		getSupportedContentTypes(): Set;
		isHeaderParamMandatory(headerParamName?: String): boolean;
		isPathParamMandatory(pathParamName?: String): boolean;
		isQueryParamMandatory(queryParamName?: String): boolean;
		newOperationFromThis(): RESTOperation;
	}

	interface RESTOperationConstructor {
		new(value?:any): RESTOperation;
		readonly prototype: RESTOperation;
	}

	declare const RESTOperation: RESTOperationConstructor;

	interface RESTRequest
	{
		contentType: String;
		fullUrl: String;

		execute(): RESTResponse;
		executeWithCredentials(user?: String, pass?: String): RESTResponse;
		getMethod(): String;
		setHeader(header?: String, value?: String): RESTResponse;
	}

	declare const RESTRequest: RESTRequest;

	interface RESTResponse
	{
		contentAsString: String;
		contentLength: String;
		statusCode: String;

		getAllHeaders(): Properties;
		getHeaderValues(headerName?: String): String[];
	}

	declare const RESTResponse: RESTResponse;

	interface RESTUtils
	{

		xml2json(xmlString?: String): String;
		xmlDate(date?: Date): String;
		xmlInt(number?: Number): String;
	}

	declare const RESTUtils: RESTUtils;

	interface Set
	{

	}

	declare const Set: Set;

    
            
