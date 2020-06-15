Feature: todo test

  Gherkin test based on the angular todo example

  Scenario Outline: multiple tests in one outline
    When Alice records item "<item>"
    Then on the to list should be the item "<item>"
    Examples:
      | item  |
      | test1 |
      | test2 |
      | test3 |