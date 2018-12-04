$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/featureFiles/SS_CM00 CustomMade.feature");
formatter.feature({
  "name": "CustomMade",
  "description": "  As client I want to custom made so that i can create a personalized suit.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "create a customized suit",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SS_CM00"
    },
    {
      "name": "CustomMade"
    }
  ]
});
formatter.step({
  "name": "user is in homePage",
  "keyword": "Given "
});
formatter.step({
  "name": "navigate to Custom Made Suit",
  "keyword": "When "
});
formatter.step({
  "name": "CustomMade menu is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "click color button",
  "keyword": "Then "
});
formatter.step({
  "name": "select color type \"\u003ccolorType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click design button",
  "keyword": "Then "
});
formatter.step({
  "name": "select design type \"\u003cdesignType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "select fabric type \"\u003cfabricType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "select jacket fit type \"\u003cjacketType\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "select trousers fit type \"\u003ctrousersType\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "select waistband type \"\u003cwaistbandType\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "select turn up type \"\u003cturnUpType\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "select waistcoat type \"\u003cwaistCoatType\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "select trousers additional \"\u003caddTrousers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "select jacket size \"\u003cjacketSize\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "select trousers size \"\u003ctrousersSize\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "colorType",
        "designType",
        "fabricType",
        "jacketType",
        "trousersType",
        "waistbandType",
        "turnUpType",
        "waistCoatType",
        "addTrousers",
        "jacketSize",
        "trousersSize"
      ]
    },
    {
      "cells": [
        "Black",
        "Plain",
        "Black Plain Flannel",
        "Napoli - Single Breasted",
        "brescia",
        "Belt Loops",
        "With Turn Up",
        "Capetown",
        "None",
        "Regular min 42",
        "Long max 118"
      ]
    }
  ]
});
formatter.scenario({
  "name": "create a customized suit",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SS_CM00"
    },
    {
      "name": "CustomMade"
    }
  ]
});
formatter.step({
  "name": "user is in homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomMade.user_is_in_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Custom Made Suit",
  "keyword": "When "
});
formatter.match({
  "location": "CustomMade.customMadeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CustomMade menu is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "CustomMade.customMadeMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click color button",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomMade.colorButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Returned node (null) was not a DOM element\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LEDANNY\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: HtmlUnitDriver\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.findElementByCssSelector(HtmlUnitDriver.java:1267)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver$4.call(HtmlUnitDriver.java:1988)\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver$4.call(HtmlUnitDriver.java:1984)\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.implicitlyWaitFor(HtmlUnitDriver.java:1624)\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.findElement(HtmlUnitDriver.java:1984)\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.findElement(HtmlUnitDriver.java:761)\r\n\tat stepDefinitions.CustomMade.colorButton(CustomMade.java:62)\r\n\tat ✽.click color button(src/test/java/featureFiles/SS_CM00 CustomMade.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "select color type \"Black\"",
  "keyword": "And "
});
formatter.match({
  "location": "CustomMade.colorType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click design button",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomMade.designButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select design type \"Plain\"",
  "keyword": "And "
});
formatter.match({
  "location": "CustomMade.designType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select fabric type \"Black Plain Flannel\"",
  "keyword": "And "
});
formatter.match({
  "location": "CustomMade.fabricType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select jacket fit type \"Napoli - Single Breasted\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomMade.jacketType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select trousers fit type \"brescia\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomMade.trousersType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select waistband type \"Belt Loops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomMade.waistbandType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select turn up type \"With Turn Up\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomMade.turnUpType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select waistcoat type \"Capetown\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomMade.waistCoatType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select trousers additional \"None\"",
  "keyword": "And "
});
formatter.match({
  "location": "CustomMade.addTrousers(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select jacket size \"Regular min 42\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomMade.jacketSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select trousers size \"Long max 118\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomMade.trousersSize(String)"
});
formatter.result({
  "status": "skipped"
});
});