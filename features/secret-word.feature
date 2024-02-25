Feature: Secure Word Test

  Scenario Outline: As a user, I can log into the app and see the secure word
    Given I'm logged in
    When I open the Secret Word test
    Then Secret word element is displayed and is not empty
