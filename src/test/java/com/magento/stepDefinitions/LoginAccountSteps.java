package com.magento.stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObject.HomePagePO;
import pageObject.LoginAccountPagePO;
import sun.security.util.Password;

public class LoginAccountSteps {

    WebDriver driver;

    @Given("^User on login page$")
    public void userOnLoginPage() {
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();

            driver.get("http://demo-magento2.vuestorefront.io/");
            HomePagePO homePagePO = new HomePagePO(driver);
            homePagePO.clickSignInLink();

    }

    @When("^User enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEnterAnd(String Email, String Password) throws Throwable {
        LoginAccountPagePO loginAccountPagePO = new LoginAccountPagePO(driver);
        loginAccountPagePO.enterEmail(Email);
        loginAccountPagePO.enterPassword(Password);

    }

    @And("^User click on Sign in Button$")
    public void userClickOnSignInButton() {
        LoginAccountPagePO loginAccountPagePO = new LoginAccountPagePO(driver);
        loginAccountPagePO.userClickOnSignInButton();


    }

    @Then("^Account login Successfully$")
    public void accountLoginSuccessfully() {
    }


}
