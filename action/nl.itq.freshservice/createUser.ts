/// <reference path="./../../includes.d.ts"/>

namespace nl.itq.freshservice {
export function createUser(userName?: string, emailAddress?: string, departmentId?: string): any {var freshService = nl.itq.freshservice.rest;

var path = "/itil/requesters.json";
var queryParameters = new Properties();
var headers = new Properties();

var data = {
  "user":{ 
    "name":userName,
    "email":emailAddress,
    "department_users_attributes":{
        "department_id": departmentId
    }
  }
}

var response = freshService.doPostRequest(path,queryParameters,data,headers);

return response;
}
}
