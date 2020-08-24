########################################################################
# Author : Tilewa
# Feature : Account Management
# Date : 07/05/2020
########################################################################


@Sanity
Feature: Account  Management

  CreateAccount
  Scenario: Register An Account

    Given User on Register page
    When User click Create account
    And User enter Tester as first name
    And User enter Test as last name
    And User click on sign up newsletter
    And User enter tester@test.com as email
    And User enter Psunday@ as password
    And User enter Psunday@ as comfirm password
    And User click on create an account button
    Then account open successfully