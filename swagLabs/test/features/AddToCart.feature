Feature: Add To Cart

    As a user
    I want to be able to add items to my cart and remove them if needed

    Background:
        Given I am on the https://www.saucedemo.com/ page

    Scenario Outline: TC001 - Add Item to Cart and Remove
        When I login with user <userName> and password <password>
        Then I expect Menu button does exist
        When I change filter to <filter>
        And I click on item <item>
        Then I expect same item <item> to be present
        When I add item <item> to cart
        Then I expect cart quantity does exist
        When I click on cart button
        And I expect <item> Item exists in my cart
        And I expect cart quantity equals <quantity>
        When I click on Remove Item <item>
        Then I expect <item> Item does not exists in my cart

        Examples:
            | userName      | password     | filter              | item              | quantity |
            | standard_user | secret_sauce | Price (low to high) | Sauce Labs Onesie | 1        |
            | problem_user  | secret_sauce | Price (low to high) | Sauce Labs Onesie | 1        |


