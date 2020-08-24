package com.magento.stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CreateAccount {
    WebDriver driver;

    @Given("^User on Register page$")
    public void userOnRegisterPage() {

        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();

        driver.get("http://demo-magento2.vuestorefront.io/");
    }

    @When("^User click Create account$")
    public void userClickCreateAccount() {

        driver.findElement(By.xpath("/html/body/div[2]/header/div[1]/div/ul/li[3]/a")).click();
    }

    @And("^User enter Tester as first name$")
    public void userEnterTesterAsFirstName() {

        driver.findElement(By.name("firstname")).sendKeys("Tester");
    }

    @And("^User enter Test as last name$")
    public void userEnterTestAsLastName() {

        driver.findElement(By.id("lastname")).sendKeys("Test");
    }

    @And("^User click on sign up newsletter$")
    public void userClickOnSignUpNewsletter() {

        driver.findElement(By.id("is_subscribed")).click();

    }

    @And("^User enter tester@test\\.com as email$")
    public void userEnterTesterTestComAsEmail() {

        driver.findElement(By.name("email")).sendKeys("tester@test.com");
    }

    @And("^User enter Psunday@ as password$")
    public void userEnterSundayAsPassword() {

        driver.findElement(By.id("password")).sendKeys("Psunday@");
    }

    @And("^User enter Psunday@ as comfirm password$")
    public void userEnterPsundayAsComfirmPassword() {

        driver.findElement(By.name("password_confirmation")).sendKeys("Psunday@");
    }

    @And("^User click on create an account button$")
    public void userClickOnCreateAnAccountButton() {

        driver.findElement(By.cssSelector("#form-validate > div > div.primary > button > span")).click();
    }

    @Then("^account open successfully$")
    public void accountOpenSuccessfully() {

        System.out.println("Sign Up Successfully");

    }


}
