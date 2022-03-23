import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../page-objects/login.page";

Given(/^I am on the (.*) page$/, async (path) => {
    await LoginPage.open(path);
});
