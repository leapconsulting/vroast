/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface RPTestJenkins
	{
		readonly displayName: String;
		readonly id: String;
		readonly instanceName: String;
		readonly password: String;
		readonly pollInterval: int;
		readonly retryCount: int;
		readonly retryWaitSeconds: int;
		readonly url: String;
		readonly username: String;

	}

	interface RPTestJenkinsConstructor {
		new(value?:any): RPTestJenkins;
		readonly prototype: RPTestJenkins;
	}

	declare const RPTestJenkins: RPTestJenkinsConstructor;

	interface RPTestJenkinsManager
	{

		removeRPTestJenkins(uuId?: String): boolean;
	}

	declare const RPTestJenkinsManager: RPTestJenkinsManager;

    
    // Finder objects.
declare namespace RPTestJenkins {
	interface RPTestJenkinsFinder
	{

		roots(): RPTestJenkins;
	}

	interface RPTestJenkinsFinderConstructor {
		new(value?:any): RPTestJenkinsFinder;
		readonly prototype: RPTestJenkinsFinder;
	}

	const RPTestJenkinsFinder: RPTestJenkinsFinderConstructor;

    }    
