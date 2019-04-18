/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition.Daniel-Toolbox {
export function addTime2Now(seconds?: number, minutes?: number, hours?: number, days?: number, weeks?: number): Date {var endDate = new Date();

if (seconds != null) {
	endDate.setSeconds(endDate.getSeconds() + seconds);
}	
if (minutes != null) {
	endDate.setMinutes(endDate.getMinutes() + minutes);
}
if (hours != null) {
	endDate.setHours(endDate.getHours() + hours);
}
if (days != null) {
	endDate.setHours(endDate.getHours() + (days*24));
}
if (weeks != null) {
	endDate.setHours(endDate.getHours() + (weeks*7*24));
}
return endDate;
}
}
