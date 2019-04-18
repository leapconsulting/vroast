/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface TeamFoundationServer
	{
		readonly displayName: String;
		readonly domainName: String;
		readonly id: String;
		readonly instanceName: String;
		readonly password: String;
		readonly pollInterval: int;
		readonly tfsVersion: String;
		readonly url: String;
		readonly username: String;

	}

	interface TeamFoundationServerConstructor {
		new(value?:any): TeamFoundationServer;
		readonly prototype: TeamFoundationServer;
	}

	declare const TeamFoundationServer: TeamFoundationServerConstructor;

	interface TeamFoundationServerTFSManager
	{

		createTeamFoundationServer(tfsServer?: TeamFoundationServer, offlineCreation?: boolean): TeamFoundationServer;
		removeTeamFoundationServer(uuId?: String): boolean;
		updateTeamFoundationServer(tfsServer?: TeamFoundationServer): TeamFoundationServer;
	}

	declare const TeamFoundationServerTFSManager: TeamFoundationServerTFSManager;

    
    // Finder objects.
declare namespace TeamFoundationServer {
	interface TeamFoundationServerFinder
	{

		roots(): TeamFoundationServer;
	}

	interface TeamFoundationServerFinderConstructor {
		new(value?:any): TeamFoundationServerFinder;
		readonly prototype: TeamFoundationServerFinder;
	}

	const TeamFoundationServerFinder: TeamFoundationServerFinderConstructor;

    }    
