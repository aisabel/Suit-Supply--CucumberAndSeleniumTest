Feature: CustomMade
  As client I want to custom made so that i can create a personalized suit.

# Cucumber statements: only reserved words can be used like "Given, And, Then, When, But" the rest of the phrase is defined as you wish
# but with the condition that it has to match with the step definitions statement.


  @SS_CM00 CustomMade
  Scenario Outline: create a customized suit
    Given user is in homePage
    When navigate to Custom Made Suit
    And CustomMade menu is displayed
    And Fabric menu is also visible
    Then click color button
    And select color type "<colorType>"
    Then click design button
    And select design type "<designType>"
    And select fabric type "<fabricType>"
    Then select jacket fit type "<jacketType>"
    Then select trousers fit type "<trousersType>"
    Then select waistband type "<waistbandType>"
    Then select turn up type "<turnUpType>"
    Then select waistcoat type "<waistCoatType>"
    And select trousers additional "<addTrousers>"
    Then select jacket size "<jacketSize>"
    Then select trousers size "<trousersSize>"

#Below you can find the different combinations that will be executed in a loop one by one with the scenario outline defined
#For this proof of concept only one combination is available


    Examples:
  | colorType   |  designType   | fabricType                | jacketType                    | trousersType   |  waistbandType     | turnUpType      | waistCoatType | addTrousers   | jacketSize        | trousersSize    |
  | Black       |  Plain        | Black Plain Flannel       | Napoli - Single Breasted      | brescia        |  Belt Loops        | With Turn Up    | Capetown      | None          | Regular min 42    | Long max 118    |
 # | Grey        |  Stripe       | Grey Stripe Flannel       | Lazio - Single Breasted       | washington     |  Side Adjusters    | Without Turn Up | Pierre        | Yes           | Long min 90       | Short max 32    |
 # | Blue        |  Check        | Blue Check Wool           | Washington - Single Breasted  | brescia        |  Belt Loops        | With Turn Up    | Ferrara       | None          | Short min 23      | Regular max 64  |
 # | Brown       |  Plain        | Light Brown Plain Wool    | Havana - Single Breasted      | washington     |  Side Adjusters    | Without Turn Up | Capetown      | Yes           | Regular max 64    | Long min 90     |
 # | Grey        |  Birdseye     | Dark Grey Birdseye Wool   | Havana - Double Breasted      | brescia        |  Belt Loops        | With Turn Up    | None          | None          | Long max 118      | Short min 23    |
 # | Green       |  Plain        | Green Plain Flannel       | Napoli - Single Breasted      | washington     |  Side Adjusters    | Without Turn Up | Ferrara       | Yes           | Short max 32      | Regular min 42  |
 # | Red         |  Herringbone  | Herringbone Wool Cashmere | Lazio - Single Breasted       | brescia        |  Belt Loops        | With Turn Up    | Capetown      | None          | Regular med 50    | Long med 106    |
 # | Blue        |  Faux-uni     | Blue Faux Uni Wool        | Washington - Single Breasted  | washington     |  Side Adjusters    | Without Turn Up | Pierre        | Yes           | Long med 102      | Short med 26    |
 # | Grey        |  PinStripe    | Dark Grey Pin Stripe Wool | Havana - Single Breasted      | brescia        |  Belt Loops        | With Turn Up    | None          | None          | Short med 27      | Regular med 52  |




