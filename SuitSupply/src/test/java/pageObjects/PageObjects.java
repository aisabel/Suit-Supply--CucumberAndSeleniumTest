/*package pageObjects;

import cucumber.api.java.Before;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

import java.util.concurrent.TimeUnit;

/* The PageObject pattern allows to have a skeleton of the page and locate elements with selenium in order to be reused by step definitions.
Parameters traverse must be set up in each step definition
Selenium Locators used were selected according to their uniqueness or availability attributes in page*/
/*public class PageObjects {

    /*HtmlUnitDriver is a selenium headless driver providing non-GUI implementation of Selenium WebDriver. It is based on HtmlUnit, fastest and light-weight
* Other browsers can be used, but compatibility with selenium version must be observed*/
 /*   public HtmlUnitDriver driver;

    //constructor
    public PageObjects (HtmlUnitDriver driver) {
        this.driver = driver;
    }

/*    @Before() /*This function opens page and can be re-used by all scenarios
    public void getPage () {
        driver.manage().deleteAllCookies();/* Command delete all coockies when browser is opened
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("https://eu.suitsupply.com/en/home");
    }
}*/
