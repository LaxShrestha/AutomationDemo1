
Feature:UCMS- Home Page Validation


    Scenario: Validate UCMS Home Page

        Given I navigate to home page
        And I validate '+NEw Case' link
        And I validate 'Reports' link
        And I validate 'e-Filing' link
        And I validate 'Calendar' link
        And I validate 'Maintenance' link
        And I validate 'Home View Setting' link
        And I validate 'Restore Last Session' link
        And I validate 'UCMS Maintenance' link
        And I validate 'Admin Console' link
        And I validate 'Welcome to the UCMS' text

    @focus
    Scenario: validate home page test
        Given I navigate site
        Then I see Shift Home page


