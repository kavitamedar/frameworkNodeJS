Feature: Make a API call for UserId validation

    Scenario: Validating he userid and statuscode

        Given the "<method>" API is called for an endpoint
        When I hit the endpoint
        Then the statuscode should be "<code>"

        Examples:
            | method | code |
            | GET    | 200  |
            | POST   | 201  |