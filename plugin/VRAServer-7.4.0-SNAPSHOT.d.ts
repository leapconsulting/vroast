/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface VRAServer
	{
		readonly displayName: String;
		readonly id: String;
		readonly instanceName: String;
		readonly maxWaitForIPConfig: int;
		readonly password: String;
		readonly pollInterval: int;
		readonly sessionMode: String;
		readonly tenant: String;
		readonly url: String;
		readonly username: String;

	}

	interface VRAServerConstructor {
		new(value?:any): VRAServer;
		readonly prototype: VRAServer;
	}

	declare const VRAServer: VRAServerConstructor;

	interface VRAServerVRAManager
	{

		removeVRAServer(uuId?: String): boolean;
	}

	declare const VRAServerVRAManager: VRAServerVRAManager;

    
    // Finder objects.
declare namespace VRAServer {
	interface VRAServerFinder
	{

		roots(): VRAServer;
	}

	interface VRAServerFinderConstructor {
		new(value?:any): VRAServerFinder;
		readonly prototype: VRAServerFinder;
	}

	const VRAServerFinder: VRAServerFinderConstructor;

    }    
