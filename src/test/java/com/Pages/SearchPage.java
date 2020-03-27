package com.Pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class SearchPage {
	WebDriver driver;
	By searchbar = By.name("search");
	By searchbutton = By.xpath("//*[@id='search']/span/button");
	By SearchHeader = By.xpath("//*[@id='content']/h1");
	By filterbutton1 = By.id("input-sort");
	String filter = "Rating (Highest)";
	By product1 = By.xpath("//div[@id='content']//div[1]//div[1]//div[2]//div[2]//button[3]//i[1]");
	By product2 = By.xpath("//div[@id='product-search']//div[2]//div[1]//div[2]//div[2]//button[3]//i[1]");
	By totalComparision = By.id("compare-total");
	By listview = By.id("list-view");

	// launching the browser
	public void launchApplication(String URL) {
		System.setProperty("webdriver.chrome.driver", "F:\\cts\\Selenium\\selenium_exmpls\\OPENCARTPROJECT\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(URL);
	}

	// searching the product we want
	public void searchItem(String searchitem) {
		driver.findElement(searchbar).sendKeys(searchitem);
	}

	// clicking on the search button
	public void clickOnSearch() {
		driver.findElement(searchbutton).click();
	}

	// checking the search product is displayed or not
	public boolean IsSearchDisplayed() {

		return driver.findElement(SearchHeader).isDisplayed();

	}

	// closing the browser
	public void quit() {
		driver.close();
	}

	// filtering the search to display products according to our wish
	public void clickOnSearchAndFilter() {
		driver.findElement(searchbutton).click();
		WebElement filterbutton = driver.findElement(By.id("input-sort"));
		driver.findElement(filterbutton1).click();
		Select select = new Select(filterbutton);
		select.selectByVisibleText("Rating (Highest)");
	}

	// validating the filter
	public boolean validateFilter() {
		boolean Option = false;
		WebElement filterbutton = driver.findElement(By.id("input-sort"));
		Select select = new Select(filterbutton);
		String selectdfilter = select.getFirstSelectedOption().getText();
		if (filter.equalsIgnoreCase(selectdfilter)) {
			Option = true;
		}
		return Option;
	}

	public void scroll() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,300)");
	}

	// selecting list view option
	public void clickOnListView() {
		driver.findElement(listview).click();
		driver.close();
	}

}
