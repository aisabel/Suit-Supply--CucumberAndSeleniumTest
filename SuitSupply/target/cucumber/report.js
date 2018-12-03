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
  "name": "Fabric menu is also visible",
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
  "name": "Fabric menu is also visible",
  "keyword": "And "
});
formatter.match({
  "location": "CustomMade.fabricMenu()"
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
  "status": "passed"
});
formatter.step({
  "name": "select color type \"Black\"",
  "keyword": "And "
});
formatter.match({
  "location": "CustomMade.colorType(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LEDANNY\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544315 (730aa6a5fdba15..., userDataDir: C:\\Users\\Daniel\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: c6179271e69676d1895a8414a2e35409\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepDefinitions.CustomMade.colorType(CustomMade.java:77)\r\n\tat ✽.select color type \"Black\"(src/test/java/featureFiles/SS_CM00 CustomMade.feature:15)\r\n",
  "status": "failed"
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