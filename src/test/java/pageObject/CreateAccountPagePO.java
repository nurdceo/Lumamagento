package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPagePO {

    //element locators
    @FindBy(name = "firstname")
    public static WebElement firstNameField;


    @FindBy(id = "lastname")
    public static WebElement lastNameField;


    @FindBy(id = "is_subscribed")
    public static WebElement newsLetterField;

    @FindBy(id = "email_address")
    public static WebElement emailField;

    @FindBy(id = "password")
    public static WebElement passwordField;

    @FindBy(name = "password_confirmation")
    public static WebElement confirmPasswordField;

    @FindBy(css = "#form-validate > div > div.primary > button > span")
    public static WebElement createAccountButton;




    //initialise web elements to use webdriver
    public CreateAccountPagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }



    //page specific methods

    public void enterFirstName(String FirstName){
        firstNameField.sendKeys(FirstName);

    }

    public void enterLastName(String LastName){
        lastNameField.sendKeys(LastName);
    }

    public void enterEmail(String Email){
        emailField.sendKeys(Email);
    }

    public void enterPassword(String Password){
        passwordField.sendKeys(Password);
    }

    public void enterConfirmPassword(String ConfirmPassword){
        confirmPasswordField.sendKeys(ConfirmPassword);
    }

    public void userClickOnSignUpNewsletter(){
        newsLetterField.click();


    }

    public void userClickOnCreateAccountButton(){
        createAccountButton.click();


    }












}
