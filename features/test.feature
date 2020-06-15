Feature: todo test

  Gherkin test based on the angular todo example

  # if the name of this scenario is really long or if more Examples are added then the report generation fails
  Scenario Outline: multiple tests in one outline
    When Alice records item "<item>"
    Then on the to list should be the item "<item>"
    Examples:
      | item  |
      | test1 |
      | test2 |
      | test3 |