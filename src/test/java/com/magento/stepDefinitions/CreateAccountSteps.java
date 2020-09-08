package com.magento.stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObject.CreateAccountPagePO;
import pageObject.HomePagePO;

import java.util.concurrent.Callable;

public class CreateAccountSteps {
    WebDriver driver;
    @Given("^User on Create an Account page$")
    public void userOnCreateAnAccountPage() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();

        driver.get("http://demo-magento2.vuestorefront.io/");
        HomePagePO homePagePO = new HomePagePO(driver);
        homePagePO.clickCreateAccount();
    }

    @When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEntersAnd(String FirstName, String LastName) throws Throwable {
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterFirstName(FirstName);
        createAccountPagePO.enterLastName(LastName);
    }

    @And("^user enter \"([^\"]*)\"$")
    public void userEnter(String Email) throws Throwable {
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterEmail(Email);

    }

    @And("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEnterAnd(String Password, String ConfirmPassword) throws Throwable {
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterPassword(Password);
        createAccountPagePO.enterConfirmPassword(ConfirmPassword);

    }

    @And("^user click on Create Account Button$")
    public void userClickOnCreateAccountButton() {
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.userClickOnCreateAccountButton();

    }

    @Then("^Account Open Successfully$")
    public void accountOpenSuccessfully() {
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.accountOpenSuccessfully();

    }
}
