Feature: Secure Word Test

  Scenario Outline: As a user, I can log into the app and see the secure word
    Given I'm logged in
    When I open the Animation test
    Then Animation is finished and element is visible
