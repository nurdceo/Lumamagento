$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginAccount.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "########################################################################"
    },
    {
      "line": 2,
      "value": "# Author : Tilewa"
    },
    {
      "line": 3,
      "value": "# Feature : Account Management"
    },
    {
      "line": 4,
      "value": "# Date : 20/09/2020"
    },
    {
      "line": 5,
      "value": "########################################################################"
    }
  ],
  "line": 9,
  "name": "Login Management",
  "description": "\nLoginAccount",
  "id": "login-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Login Account",
  "description": "",
  "id": "login-management;login-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enter \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Account login Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-management;login-account;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 23,
      "id": "login-management;login-account;;1"
    },
    {
      "cells": [
        "tester1@test.com",
        "Psunday@"
      ],
      "line": 24,
      "id": "login-management;login-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Login Account",
  "description": "",
  "id": "login-management;login-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enter \"tester1@test.com\" and \"Psunday@\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Account login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAccountSteps.userOnLoginPage()"
});
formatter.result({
  "duration": 4988461755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tester1@test.com",
      "offset": 12
    },
    {
      "val": "Psunday@",
      "offset": 35
    }
  ],
  "location": "LoginAccountSteps.userEnterAnd(String,String)"
});
formatter.result({
  "duration": 384402505,
  "status": "passed"
});
formatter.match({
  "location": "LoginAccountSteps.userClickOnSignInButton()"
});
formatter.result({
  "duration": 1021404276,
  "status": "passed"
});
formatter.match({
  "location": "LoginAccountSteps.accountLoginSuccessfully()"
});
formatter.result({
  "duration": 36370,
  "status": "passed"
});
});