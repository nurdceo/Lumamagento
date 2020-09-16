########################################################################
# Author : Tilewa
# Feature : Account Management
# Date : 07/05/2020
########################################################################


@Sanity
Feature: Account  Management

  CreateAccount

  Scenario Outline: Create An Account

    Given User on Create an Account page
    When user enters "<FirstName>" and "<LastName>"
    And user click on Sign up newsletter
    And user enter "<Email>"
    And user enter "<Password>" and "<ConfirmPassword>"
    And user click on Create Account Button
    Then Account Open Successfully


    Examples:
      | FirstName | LastName | Email           | Password | ConfirmPassword |
      | Tester    | Test     | tester1@test.com | Psunday@ | Psunday@        |