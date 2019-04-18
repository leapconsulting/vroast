/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface RPProvisionVCAC
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

	interface RPProvisionVCACConstructor {
		new(value?:any): RPProvisionVCAC;
		readonly prototype: RPProvisionVCAC;
	}

	declare const RPProvisionVCAC: RPProvisionVCACConstructor;

	interface RPProvisionVCACManager
	{

		removeRPProvisionVCAC(uuId?: String): boolean;
	}

	declare const RPProvisionVCACManager: RPProvisionVCACManager;

    
    // Finder objects.
declare namespace RPProvisionVCAC {
	interface RPProvisionVCACFinder
	{

		roots(): RPProvisionVCAC;
	}

	interface RPProvisionVCACFinderConstructor {
		new(value?:any): RPProvisionVCACFinder;
		readonly prototype: RPProvisionVCACFinder;
	}

	const RPProvisionVCACFinder: RPProvisionVCACFinderConstructor;

    }    
