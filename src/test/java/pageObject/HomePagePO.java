package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePagePO {

    //element locators
    @FindBy(linkText = "Create an Account")
    public static WebElement CreateAccountLink;

    @FindBy(linkText = "Sign In")
    public static WebElement SignInLink;

    //initialise web elements to use webdriver
    public HomePagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }



    //page specific methods
    public void clickCreateAccount(){
        CreateAccountLink.click();

    }

    public void clickSignInLink(){
        SignInLink.click();
    }

}
