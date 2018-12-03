package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

//import edu.emory.mathcs.backport.java.util.concurrent.TimeUnit;


public class CustomMade {


    public static WebDriver driver;

    public CustomMade() {
        /*This inheritance class calls itself in order to use the browser and page set up across the whole test and deleting cookies first*/
        System.setProperty("webdriver.chrome.driver", "//Custom-made--TestingFramework/tree/master/chromedriver_win32");
        this.driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.get("https://eu.suitsupply.com/en/home");
    }

    @Given("^user is in homePage$")
    public void user_is_in_Home_Page() throws Throwable {
        /*Print in console log the current page*/
        /*pageObjects = new PageObjects(driver);
        pageObjects.getPage();*/
        System.out.println("Title of the page: " +driver.getTitle());
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
    }

    @When("^navigate to Custom Made Suit$")
    public void customMadeButton() throws Throwable {
        driver.findElement(By.cssSelector("a[data-sel-menukey='designyourown']")).getText();
        driver.navigate().to("https://eu.suitsupply.com/on/demandware.store/Sites-INT-Site/en/Configurator-Show?type=suit");
        driver.manage().timeouts().implicitlyWait(5000, TimeUnit.SECONDS);
    }

    @And("^CustomMade menu is displayed$")
    public void customMadeMenu() throws Throwable {
        driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]")).getText();
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
    }

    @And("^Fabric menu is also visible$")
    public void fabricMenu() throws Throwable {
         driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[1]/span[2]")).getText();
        driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);

    }
    @Then("^click color button$")
    public void colorButton() throws Throwable {
        driver.findElement(By.cssSelector("div[class='configurators--categories__filter']")).getText();
        driver.findElement(By.xpath("//span[contains(text(),'Color')]")).click();
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
    }
    @And("^select color type \"(.*)\"$")
    public void colorType(String colorType) throws Throwable {
        // this is the colors list: driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[1]/span[2]")).getText();
        //System.out.println(driver.findElement(By.cssSelector("body.legacy-overide-class-bottom.body.js-body:nth-child(2) div.site-wrap.js-site-wrap:nth-child(2) div.content.site-wrap._p-t-0d.tab_p-t-0b.js-site-wrap:nth-child(2) div.configurators--wrap._po-r.tab_po-r.tab-portrait_po-s.mob_po-s.mob-small-landscape_po-s:nth-child(1) div.slide-panel--a.tab-portrait_w-01.mob_w-01.mob-small-landscape_po-f.mob-small-landscape_w-01._bl-bg-0f.js-categories-layer.el-active._bl-ds-0e:nth-child(3) div.slide-panel--a__content div.js-filters-container div.configurators--categories__filter ul.list._te-cl-0m._te-tr-0a._te-ff-0a._te-a-0a._te-s-0b.js-dropdown-cm.js-configurator-filter-dropdown > li._dis-ib.js-dropdown-block.configurator-color-filter.js-filter-color-container:nth-child(3)")).getText());
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        switch (colorType) {
            case "Blue":
                driver.findElement(By.cssSelector("label[data-color-code='Blue']")).click();
                break;
            case "Grey":
                driver.findElement(By.cssSelector("label[data-color-code='Grey']")).click();
                break;
            case "Black":
                driver.findElement(By.cssSelector("label[data-color-code='Black']")).click();
                break;
            case "Brown":
                driver.findElement(By.cssSelector("label[data-color-code='Brown']")).click();
                break;
            case "Green":
                driver.findElement(By.cssSelector("label[data-color-code='Green']")).click();
                break;
            case "Red":
                driver.findElement(By.cssSelector("label[data-color-code='Red']")).click();
                break;
            default:
                throw new IllegalArgumentException("Not possible to select colors ");
        }
        driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
    }
    @Then("^click design button$")
        public void designButton() throws Throwable {
            driver.findElement(By.cssSelector("div[class='configurators--categories__filter']")).getText();
            driver.findElement(By.xpath("//span[contains(text(),'Design')]")).click();
            driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
    }

    @And("^select design type \"(.*)\"$")
    public void designType(String designType) throws Throwable {
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        switch (designType) {
            case "Plain":
                driver.findElement(By.cssSelector("label[data-dessin-code='Plain']")).click();
                break;
            case "Birdseye":
                driver.findElement(By.cssSelector("label[data-dessin-code='Birdseye']")).click();
                break;
            case "Faux-uni":
                driver.findElement(By.cssSelector("label[data-dessin-code='Faux_uni']")).click();
                break;
            case "Herringbone":
                driver.findElement(By.cssSelector("label[data-dessin-code='Herringbone']")).click();
                break;
            case "Check":
                driver.findElement(By.cssSelector("label[data-dessin-code='Check']")).click();
                break;
            case "Stripe":
                driver.findElement(By.cssSelector("label[data-dessin-code='Stripe']")).click();
                break;
            case "Pin stripe":
                driver.findElement(By.cssSelector("label[data-dessin-code='Pin_stripe']")).click();
                break;
            default:
                throw new IllegalArgumentException("Not possible to select design ");
        }
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
    }

    @And("^select fabric type \"(.*)\"$")
    public void fabricType(String fabricType) throws Throwable {
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
        switch (fabricType) {
            case "Black Plain Flannel":
                driver.findElement(By.cssSelector("div[data-item-name='Black Plain Flannel']")).click();
                break;
            case "Black Plain Wool":
                driver.findElement(By.cssSelector("div[data-item-name='Black Plain Wool']")).click();
                break;
            case "Gray Stripe Flannel":
                driver.findElement(By.cssSelector("div[data-item-name='Gray Stripe Flannel']")).click();
                break;
            default:
                throw new IllegalArgumentException("Not possible to select fabric Type ");
        }
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
    }

    @Then("^select jacket fit type \"(.*)\"$")
    public void jacketType(String jacketType) throws Throwable {
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        switch (jacketType) {
            case "Napoli - Single Breasted":
                driver.findElement(By.cssSelector("div[data-item-code='napoli']")).click();
                break;
            case "Lazio - Single Breasted":
                driver.findElement(By.cssSelector("div[data-item-code='lazio']")).click();
                break;
            case "Washington- Single Breasted":
                driver.findElement(By.cssSelector("div[data-item-code='washington']")).click();
                break;
            case "Havana - Single Breasted":
                driver.findElement(By.cssSelector("div[data-item-code='havana']")).click();
                break;
            case "Havana - Double Breasted":
                driver.findElement(By.cssSelector("div[data-item-code='soho']")).click();
                break;
            default:
                throw new IllegalArgumentException("Not possible to select jacket Type ");
        }
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
    }

    @Then("^select trousers fit type \"(.*)\"$")
    public void trousersType(String trousersType) throws Throwable {
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        switch (trousersType) {
            case "brescia":
                driver.findElement(By.cssSelector("div[data-item-code='brescia']")).click();
                break;
            case "washington":
                driver.findElement(By.cssSelector("div[data-item-code='washington']")).click();
                break;
            default:
                throw new IllegalArgumentException("Not possible to select trousers Type ");
        }
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
    }

    @Then("^select waistband type \"(.*)\"$")
    public void waistbandType(String waistbandType) throws Throwable {
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        switch (waistbandType) {
            case "Belt Loops":
                driver.findElement(By.cssSelector("div[data-item-name='Belt Loops']")).click();
                break;
            case "Side Adjusters":
                driver.findElement(By.cssSelector("div[data-item-code='side-adjusters']")).click();
                break;
            default:
                throw new IllegalArgumentException("Not possible to select waistband Type ");
        }
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
    }

    @Then("^select turn up type \"(.*)\"$")
    public void turnUpType(String turnUpType) throws Throwable {
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        switch (turnUpType) {
            case "With Turn Up":
                driver.findElement(By.cssSelector("div[data-item-code='with-turnup']")).click();
                break;
            case "Without Turn Up":
                driver.findElement(By.cssSelector("div[data-item-code='without-turnup']")).click();
                break;
            default:
                throw new IllegalArgumentException("Not possible to select Turn Up Type ");
        }
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
    }

    @Then("^select waistcoat type \"(.*)\"$")
    public void waistCoatType(String waistCoatType) throws Throwable {
        switch (waistCoatType) {
            case "None":
                driver.findElement(By.cssSelector("div[data-item-type='waistcoat-additionalProduct']")).click();
                break;
            case "Capetown":
                driver.findElement(By.cssSelector("div[data-item-name='Capetown']")).click();
                break;
            case "Pierre":
                driver.findElement(By.cssSelector("div[data-item-name='Pierre']")).click();
                break;
            case "Ferrara":
                driver.findElement(By.cssSelector("div[data-item-name='Ferrara']")).click();
                break;
            default:
                throw new IllegalArgumentException("Not possible to select waistcoat Type ");
        }
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
    }
    @And("^select trousers additional \"(.*)\"$")
    public void addTrousers(String addTrousers) throws Throwable {
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        switch (addTrousers) {
            case "None":
                driver.findElement(By.cssSelector("div[data-item-type='trouser-additionalProduct']")).click();
                break;
            case "Yes":
                driver.findElement(By.cssSelector("div[data-item-name='Selected']")).click();
                break;
            default:
                throw new IllegalArgumentException("Not possible to select waistcoat Type ");
        }
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
    }

    @Then("^select jacket size \"(.*)\"$")
    public void jacketSize(String jacketSize) throws Throwable {
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        switch (jacketSize) {
            case "Regular min 42":
                driver.findElement(By.cssSelector("div[data-item-type='42']")).click();
                break;
            default:
                throw new IllegalArgumentException("Not possible to select waistcoat Type ");
        }
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
    }

    @Then("^select trousers size \"(.*)\"$")
    public void trousersSize(String trousersSize) throws Throwable {
        switch (trousersSize) {
            case "118":
                driver.findElement(By.cssSelector("div[data-item-type='118']")).click();
                break;
            default:
                throw new IllegalArgumentException("Not possible to select waistcoat Type ");
        }
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        driver.quit();
    }

}
