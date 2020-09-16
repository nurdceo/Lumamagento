$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccount.feature");
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
      "value": "# Date : 07/05/2020"
    },
    {
      "line": 5,
      "value": "########################################################################"
    }
  ],
  "line": 9,
  "name": "Account  Management",
  "description": "\nCreateAccount",
  "id": "account--management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 8,
      "name": "@Sanity"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Create An Account",
  "description": "",
  "id": "account--management;create-an-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User on Create an Account page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user click on Sign up newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enter \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enter \"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click on Create Account Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Account Open Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "account--management;create-an-account;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "Password",
        "ConfirmPassword"
      ],
      "line": 25,
      "id": "account--management;create-an-account;;1"
    },
    {
      "cells": [
        "Tester",
        "Test",
        "tester1@test.com",
        "Psunday@",
        "Psunday@"
      ],
      "line": 26,
      "id": "account--management;create-an-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Create An Account",
  "description": "",
  "id": "account--management;create-an-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User on Create an Account page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"Tester\" and \"Test\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user click on Sign up newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enter \"tester1@test.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enter \"Psunday@\" and \"Psunday@\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click on Create Account Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Account Open Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountSteps.userOnCreateAnAccountPage()"
});
formatter.result({
  "duration": 8915689450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 13
    },
    {
      "val": "Test",
      "offset": 26
    }
  ],
  "location": "CreateAccountSteps.userEntersAnd(String,String)"
});
formatter.result({
  "duration": 939747047,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.userClickOnSignUpNewsletter()"
});
formatter.result({
  "duration": 193949355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tester1@test.com",
      "offset": 12
    }
  ],
  "location": "CreateAccountSteps.userEnter(String)"
});
formatter.result({
  "duration": 333368228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Psunday@",
      "offset": 12
    },
    {
      "val": "Psunday@",
      "offset": 27
    }
  ],
  "location": "CreateAccountSteps.userEnterAnd(String,String)"
});
formatter.result({
  "duration": 570662723,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.userClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 2371980924,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.accountOpenSuccessfully()"
});
formatter.result({
  "duration": 29722,
  "status": "passed"
});
});