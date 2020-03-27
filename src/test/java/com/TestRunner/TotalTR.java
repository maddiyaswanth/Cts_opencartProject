package com.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature/Testcase.feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@tc01_Register,@tc02_Validlogin,@tc03_InvalidLogin,@tc04_MandatoryFields,@tc05_AddtoCart,@tc06_Checkcart,@tc07_priceupdate,@tc08_RemovefromCart,@tc09_selectingitem,@tc10_shownumber,@tc11_sorting,@tc12_storetowishlist, @tc_13_searchproduct,@tc_14_searchandfilter,@tc_15_searchandview"},
		glue = {"com.StepDefinition"},
		monochrome = true
		)

public class TotalTR {
	

}
