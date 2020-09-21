package pageObject;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import sun.security.util.Password;

public class LoginAccountPagePO {

    @FindBy(name = "login[username]")
    public static WebElement emailField;


    @FindBy(name = "login[password]")
    public static WebElement passwordField;
    private String password;

    @FindBy(name = "send")
    public static WebElement signInButton;



    //initialise web elements to use webdriver
    public LoginAccountPagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }



    public void enterEmail(String Email){
        emailField.sendKeys(Email);
    }


    public void enterPassword(String Password) {
        passwordField.sendKeys(Password);
    }



    public void userClickOnSignInButton() {
        signInButton.click();

    }







}







