Feature:  Login Feature

    I want to login in

    Scenario: success Login
        Given A user opens the login page
        When A user enter the username "standard_user"
        And A user enter the password "secret_sauce"
        And A user clicks on the login Button
        Then A user will be logged in 