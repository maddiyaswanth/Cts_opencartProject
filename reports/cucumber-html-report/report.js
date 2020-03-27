$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/Testcase.feature");
formatter.feature({
  "line": 1,
  "name": "OpenCart application",
  "description": "",
  "id": "opencart-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "Registration into the page",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tc01_Register"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the Opencart application opens in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on register",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user fills all the details",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user clicks on submit",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterandLoginSD.the_Opencart_application_opens_in_chrome_browser()"
});
formatter.result({
  "duration": 11353912300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.the_user_clicks_on_register()"
});
formatter.result({
  "duration": 3727057800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.the_user_fills_all_the_details()"
});
formatter.result({
  "duration": 4703339900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.the_user_clicks_on_submit()"
});
formatter.result({
  "duration": 1777185000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "",
  "description": "Login into the applicatiion with vallid details",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@tc02_Validlogin"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "the application opens in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the user gives valid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterandLoginSD.the_application_opens_in_browser()"
});
formatter.result({
  "duration": 9755172900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.the_user_clicks_on_Login()"
});
formatter.result({
  "duration": 4951333900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.the_user_gives_valid_credentials()"
});
formatter.result({
  "duration": 5837873400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.clicks_on_Login_button()"
});
formatter.result({
  "duration": 1250166500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "Login into the applicatiion with vallid details",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@tc03_InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "the application will open in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user clicks on login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user tries to login with invalid details",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterandLoginSD.the_application_will_open_in_chrome_browser()"
});
formatter.result({
  "duration": 9546611700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.the_user_clicks_on_login()"
});
formatter.result({
  "duration": 4412375200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.the_user_tries_to_login_with_invalid_details()"
});
formatter.result({
  "duration": 2538344200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.click_on_login_button()"
});
formatter.result({
  "duration": 1776234400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "",
  "description": "checking the application",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@tc04_MandatoryFields"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "the application opens in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "the user clicks on register button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the user fills the details by leaving one mandatory field",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterandLoginSD.the_application_opens_in_chrome_browser()"
});
formatter.result({
  "duration": 9580331700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.the_user_clicks_on_register_button()"
});
formatter.result({
  "duration": 3221185200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.the_user_fills_the_details_by_leaving_one_mandatory_field()"
});
formatter.result({
  "duration": 2863999300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterandLoginSD.clicks_on_submit_button()"
});
formatter.result({
  "duration": 1722031600,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "Choose the product and add to cart",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@tc05_AddtoCart"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "the url opens in Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the user clicks on phones",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the user selects the product",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "clicks on add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "CartSD.the_url_opens_in_Chrome_application()"
});
formatter.result({
  "duration": 9766595500,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.the_user_clicks_on_phones()"
});
formatter.result({
  "duration": 4685791300,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.the_user_selects_the_product()"
});
formatter.result({
  "duration": 8919042200,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.clicks_on_add_to_cart()"
});
formatter.result({
  "duration": 2209734700,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "",
  "description": "check the cart",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@tc06_Checkcart"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "url opens in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "the user clicks on Cart option",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the user checks the product",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "confirms the product we added is present or not",
  "keyword": "And "
});
formatter.match({
  "location": "CartSD.url_opens_in_chrome_browser()"
});
formatter.result({
  "duration": 7639209800,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.the_user_clicks_on_Cart_option()"
});
formatter.result({
  "duration": 3489976400,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.the_user_checks_the_product()"
});
formatter.result({
  "duration": 12038630500,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.confirms_the_product_we_added_is_present_or_not()"
});
formatter.result({
  "duration": 5235408900,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "",
  "description": "when increasing the quantity whether the price is updating or not",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 57,
      "name": "@tc07_priceupdate"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "the url open in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "user click on cart option",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "increase the quantity of the product",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "click on refresh button",
  "keyword": "And "
});
formatter.match({
  "location": "CartSD.the_url_open_in_chrome_browser()"
});
formatter.result({
  "duration": 9583862200,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.user_click_on_cart_option()"
});
formatter.result({
  "duration": 2359671900,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.increase_the_quantity_of_the_product()"
});
formatter.result({
  "duration": 12195652100,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.click_on_refresh_button()"
});
formatter.result({
  "duration": 4448112600,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "",
  "description": "Remove the product from cart",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 66,
      "name": "@tc08_RemovefromCart"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "the url opens in the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "the user click on cart option",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "user selects the product",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "clicks on remove",
  "keyword": "And "
});
formatter.match({
  "location": "CartSD.the_url_opens_in_the_chrome_browser()"
});
formatter.result({
  "duration": 9545166000,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.the_user_click_on_cart_option()"
});
formatter.result({
  "duration": 1987777000,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.user_selects_the_product()"
});
formatter.result({
  "duration": 12061813600,
  "status": "passed"
});
formatter.match({
  "location": "CartSD.clicks_on_remove()"
});
formatter.result({
  "duration": 306362100,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "",
  "description": "select an item in desktop",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@tc09_selectingitem"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "the user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "the user opens the OPenCart homepage",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the user select desktop",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "the user select on the item",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopSD.the_user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 9434706900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_user_opens_the_OPenCart_homepage()"
});
formatter.result({
  "duration": 2646258600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_user_select_desktop()"
});
formatter.result({
  "duration": 3446842600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_user_select_on_the_item()"
});
formatter.result({
  "duration": 3344878800,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "",
  "description": "select the number of items to be shown",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@tc10_shownumber"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "the user launched the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "the user opens the OPenCart",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "the user select desktop icon",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "the user selects the number",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopSD.the_user_launched_the_chrome()"
});
formatter.result({
  "duration": 9439909900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_user_opens_the_OPenCart()"
});
formatter.result({
  "duration": 1904755100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_user_select_desktop_icon()"
});
formatter.result({
  "duration": 2267114000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_user_selects_the_number()"
});
formatter.result({
  "duration": 7118088700,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "",
  "description": "sorting the number of elements",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 93,
      "name": "@tc11_sorting"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "the user launched the chrome window",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "the user opens the OPenCart page",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "the user select desktop iccon",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "the user selects the type of sorting",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopSD.the_user_launched_the_chrome_window()"
});
formatter.result({
  "duration": 9430009900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_user_opens_the_OPenCart_page()"
});
formatter.result({
  "duration": 1886326000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_user_select_desktop_iccon()"
});
formatter.result({
  "duration": 2157173500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_user_selects_the_type_of_sorting()"
});
formatter.result({
  "duration": 7186118000,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "",
  "description": "adding to wishlist",
  "id": "opencart-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 102,
      "name": "@tc12_storetowishlist"
    }
  ]
});
formatter.step({
  "line": 106,
  "name": "the user launched the chrome session",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "the user opens the OPenCart windowpage",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "the user select desktop buttonclick",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "the item to wishlist",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopSD.the_user_launched_the_chrome_session()"
});
formatter.result({
  "duration": 9518679600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_user_opens_the_OPenCart_windowpage()"
});
formatter.result({
  "duration": 2022777300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_user_select_desktop_buttonclick()"
});
formatter.result({
  "duration": 3656631300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSD.the_item_to_wishlist()"
});
formatter.result({
  "duration": 3327720900,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Search Functionality",
  "description": "",
  "id": "opencart-application;search-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 111,
      "name": "@tc_13_searchproduct"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "the user launches the chrome browser and opens application",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "the user searches for the product",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "Clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the user should see search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSD.the_user_launches_the_chrome_browser_and_opens_application()"
});
formatter.result({
  "duration": 11926975800,
  "status": "passed"
});
formatter.match({
  "location": "SearchSD.the_user_searches_for_the_product()"
});
formatter.result({
  "duration": 166155600,
  "status": "passed"
});
formatter.match({
  "location": "SearchSD.clicks_on_Search_button()"
});
formatter.result({
  "duration": 1799290700,
  "status": "passed"
});
formatter.match({
  "location": "SearchSD.the_user_should_see_search_results()"
});
formatter.result({
  "duration": 4261324900,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "Filter",
  "description": "",
  "id": "opencart-application;filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 118,
      "name": "@tc_14_searchandfilter"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "the user launches the chrome browser \u0026 opens application",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "the user searches the his product",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "Clicks on Search button, Selects the the sort by filter",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user should see modified results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSD.the_user_launches_the_chrome_browser_opens_application()"
});
formatter.result({
  "duration": 11830275300,
  "status": "passed"
});
formatter.match({
  "location": "SearchSD.the_user_searches_the_his_product()"
});
formatter.result({
  "duration": 151524700,
  "status": "passed"
});
formatter.match({
  "location": "SearchSD.clicks_on_Search_button_Selects_the_the_sort_by_filter()"
});
formatter.result({
  "duration": 3653513700,
  "status": "passed"
});
formatter.match({
  "location": "SearchSD.the_user_should_see_modified_results()"
});
formatter.result({
  "duration": 281092500,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "List View",
  "description": "",
  "id": "opencart-application;list-view",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 125,
      "name": "@tc_15_searchandview"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "the user launches the opens chrome \u0026 application",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "the user searches for products on application",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "Clicks on search button and click on List View",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Results should be viewed in List View",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSD.the_user_launches_the_opens_chrome_application()"
});
formatter.result({
  "duration": 18278661400,
  "status": "passed"
});
formatter.match({
  "location": "SearchSD.the_user_searches_for_products_on_application()"
});
formatter.result({
  "duration": 140077500,
  "status": "passed"
});
formatter.match({
  "location": "SearchSD.clicks_on_search_button_and_click_on_List_View()"
});
formatter.result({
  "duration": 7021342200,
  "status": "passed"
});
formatter.match({
  "location": "SearchSD.results_should_be_viewed_in_List_View()"
});
formatter.result({
  "duration": 6474398100,
  "status": "passed"
});
});