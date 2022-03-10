
Feature:Practice functions of the App

As a user i am enable to use all the functions in Practice page
    Scenario: As a user , i should be able to see the title of the page
        Given I successfully browse to the application
        When I click on Practice button
        Then I should see the title of the page is 'Automation Practice'

 Scenario: As a user , i should be able to select from static dropdown
       
        When I click on static dropdown option
        Then I should be able to select Selenium option
