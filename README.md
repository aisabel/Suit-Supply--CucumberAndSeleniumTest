# Custom-made--TestingFramework
[![Build Status](https://travis-ci.org/aisabel/Testing-CCI.svg?branch=master)](https://travis-ci.org/aisabel/Testing-CCI)

<h2>Business Requirement:</h2>
<p align="justified">Design automated/manual testcases for any product type (Suit), as well as prepare atuomation test withing any suggestion to add/change on any custom made product type.</br>								
</p>

<h2>TestFramework Description:</h2>
<p align="justified">This test suite was designed to meet business requirements by implementing a combination of automated test cases that can be executed also manually for a product type from custom made page.</br>
Regardling automation: Cucumber framework has been selected by their capability to display human readable instructions in the tests (gherking language); combined with Selenium to easy locate elements in a powerful faster headless browser, using JUnit for assertion results; getting as a result an automated report.  This test suite is configured to be continuosly integrated in <a href="https://travis-ci.org/aisabel/suitSupply">Travis</a> for a fast pace development environment.</p>

<h2>Specifications, Frameworks and IDE tools:</h2>
<ul><li>IDE:<a href="https://www.jetbrains.com/idea/download/#section=windows"> *IntelijIDEA 15.0.1</a></li></ul>
<ul><li><a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"> *Java with package (JDK 1.8)</a>Baseline Programming Language</li></ul>
<ul><li>Chrome webdriver.exe</li></ul>
<ul>Main Frameworks:
  <li><a href="https://mvnrepository.com/artifact/info.cukes/cucumber-java>*Cucumber framework 1.2.5</a></li>
  <li><a href="http://selenium-release.storage.googleapis.com/3.7/selenium-java-3.7.1.zip">*Selenium for java 3.7.1</a></li>
  <li><a href="https://mvnrepository.com/artifact/junit/junit">*JUnit 4.11 </a></li>
  <li><a href="https://mvnrepository.com/artifact/org.apache.maven.plugins/maven-compiler-plugin">*Maven compiler 3.7.0</a></li>
</ul>
<p>Other dependencies used:
    <ul><li>Cucumber-java8 1.2.5, Cucumber-jvm 1.2.5, Cucumber-jUnit 1.2.5, Cucumber picontainer 1.2.5, Selenium-server 3.7.1, selenium-htmlunit-driver, log4j 1.2.17</li></ul>
    
<p>Note: Maven project will download automatically those framework external libraries based upon the dependencies in pom.xml file. But if in any case you need to go back directly to the source and install manually, each one of the links above leads you to the repositories.</p>

<h2>TestingFramework Structure:</h2>
In order to provide a clear functional framework, the structure has been settup as below:

Backbase-TestingFramework/
<ul>|--lib</ul>
<ul>|--output</ul>
  <ul>
    <li>-index.html = Autmoated generated report</a></li>
  </ul>
</ul>
<ul>|--src
  <ul>
    <li>|--main</li>
    <ul>
      <li>|--java</li>
      <li>|--resources</li>
    </ul>
  </ul>
    <ul>|--test
      <ul>
        <li>|--java</li>
            <ul>
              <li><a href="https://github.com/aisabel/SuitSupply/tree/master/SuitSupply/src/test/java/featureFiles">|--featureFiles</a> = Cucumber feature files</li></ul>
              <ul><li><a href="https://github.com/aisabel/SuitSupply/blob/master/SuitSupply/src/test/java/stepDefinitions/RunTest.java">RunTest.class</a> = Specified Runner class to use as pluggin</a></li></ul>
              <li><a href="https://github.com/aisabel/SuitSupply/tree/master/SuitSupply/src/test/java/stepDefinitions">|--stepDefinitions</a> = Defined class methods</li></ul>
            </ul>
      </ul>
    </ul>
  </ul>
<ul>|--target
  <li>|--classes</li>
  <li>|--cucumber</li>
  <li>|--generated-test-resources</li>
  <li>|--test-clases</li>
</ul>
<ul><li>|--cucumber-report.json</li></ul>
<ul><li>SuitSupply.iml</li></ul>
<ul><li>pom.xml Maven dependency file to load required libraries</li></ul>
<ul><li>Manual tests</li></ul>
<ul><li>.travis.yml = Configuration file to run in CI</li></ul>


<h2>Install: How to run tests locally </h2>
<ul>
  <li>Install Intelij </li>
  <p>Open Intellij, Go to Settings -> Plugins,  Choose to install Cucumber for JAVA plugin, and Gherking plugin. You might need to restart the IDE.</p>
  <li>Import project folder as a Maven project</li>
  <li>Go to path src > test > stepDefinitions and select file RunTest. </li>
  <li>Right click to display context menu and click > Run'Run Test option. This action will display a new window with the progress for testing running.</li>
 </ul>
 
 <ul><li>Test can be also runned by console using maven with the following command: - mvn test -B</ili</ul>


<h3>External references (more info)</h3>
<ul>
  <li><a href="http://docs.seleniumhq.org/projects/webdriver/">Selenium reference page</a></li>
  <li><a href="https://cucumber.io">Cucumber reference page</a></li>
</ul>

