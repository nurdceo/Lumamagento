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
formatter.scenario({
  "line": 12,
  "name": "Register An Account",
  "description": "",
  "id": "account--management;register-an-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User on Register page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User click Create account",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enter Tester as first name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter Test as last name",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on sign up newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter tester@test.com as email",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enter Psunday@ as password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enter Psunday@ as comfirm password",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "account open successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.userOnRegisterPage()"
});
formatter.result({
  "duration": 8162300639,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.userClickCreateAccount()"
});
formatter.result({
  "duration": 1791804336,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.userEnterTesterAsFirstName()"
});
formatter.result({
  "duration": 855013137,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.userEnterTestAsLastName()"
});
formatter.result({
  "duration": 147900505,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.userClickOnSignUpNewsletter()"
});
formatter.result({
  "duration": 141075752,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.userEnterTesterTestComAsEmail()"
});
formatter.result({
  "duration": 317844107,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.userEnterSundayAsPassword()"
});
formatter.result({
  "duration": 294114019,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.userEnterPsundayAsComfirmPassword()"
});
formatter.result({
  "duration": 168251894,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.userClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 1293334003,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.accountOpenSuccessfully()"
});
formatter.result({
  "duration": 101694,
  "status": "passed"
});
});