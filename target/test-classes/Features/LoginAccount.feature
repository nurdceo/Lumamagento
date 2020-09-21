########################################################################
# Author : Tilewa
# Feature : Account Management
# Date : 20/09/2020
########################################################################


@Login
Feature: Login Management

  LoginAccount

  Scenario Outline: Login Account

    Given User on login page
    When User enter "<Email>" and "<Password>"
    And User click on Sign in Button
    Then Account login Successfully



    Examples:
      | Email           | Password |
      | tester1@test.com | Psunday@|