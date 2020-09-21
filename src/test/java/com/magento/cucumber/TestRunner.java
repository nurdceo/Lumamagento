package com.magento.cucumber;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/Resources/Features",
        glue = {"com.magento.stepDefinitions", "com.magento.cucumber"},
        format = {"pretty", "html:target/site/cucumber-pretty", "json:target/cucumber.json"},
        monochrome = true,
        tags = {"@Login"})

public class TestRunner {






}
