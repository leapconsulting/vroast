/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ad {
export function getLastComputer(machinePrefix?: string, host?: string): void {// Perform a search to retrieve all users in the server, but only retrieving 2 at a time.
//"OU=Servers,OU=UMCG,DC=zkh,DC=umcg,DC=intra",
var ldapClient = host.getLdapClient();
var numSearches = 0;
var totalEntriesReturned = 0;
var mPrefix = machinePrefix + "*";

System.log("Machine prefix is: - GetLastComputer " + machinePrefix);


var canonicalNames = new Array();
var searchRequest = LdapSearchRequest.createRequest(
										"DC=zkh,DC=umcg,DC=intra",
										//"OU=Servers,OU=UMCG,DC=zkh,DC=umcg,DC=intra",
										"(&(cn=" + mPrefix + ")(objectClass=Computer))",
										LdapSearchScope.SUB,
										null, //attributes
										LdapDereferencePolicy.ALWAYS);
var resumeCookie = null;
while (true)
{
	//System.log('--------------------------------------------');
//	System.log("More results found. Continuing with page " + numSearches)

	// Create SimplePagedResultsControl configured to return at most 2 entries
	// on initiali request resumeCookie must be null
	pagedSearchControl=  new LdapSimplePagedResultsControl(1000, resumeCookie,true)
	// Make sure there is no another control registered with same OID
	searchRequest.removeControlByOid(pagedSearchControl.getOID());
	// add SimplePagedResultsControl to current search control
	searchRequest.addControl(pagedSearchControl);

	// execute search request
	var searchResult = ldapClient.searchBySearchRequest(searchRequest);
	numSearches++;
	totalEntriesReturned += searchResult.getEntryCount();

	// Traverse trough result set
	entries = searchResult.getSearchEntries()
	for (var e in  entries)
	{
		//System.log(entries[e].getParsedDN().toNormalizedString());
		//System.log(entries[e].getAttributeValue("cn"));
		canonicalNames.push(entries[e].getAttributeValue("cn"));
	}
	// Check if htere are more results
	responseControl = LdapSimplePagedResultsControl.get(searchResult);
	if (responseControl.moreResultsToReturn()) {
		// The resume cookie can be included in the simple paged results
		// control included in the next search to get the next page of results.
		resumeCookie = responseControl.getCookieBytes();
	} else {
		break;
	}
}
/*
var Computer = canonicalNames.sort(function(a, b) {
	return 2 * (a.name > b.name);
});

var lastComputer = Computer.pop(-1);
System.log("Last: " + lastComputer);
*/
var Computer = canonicalNames.sort();
//System.log (Computer);
var lastComputer = Computer.pop();
System.log("Last: " + lastComputer);
return lastComputer;
}
}
