import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../page-objects/login.page";

When(
    /^I login with user (\w+) and password (.*)$/,
    async (username, password) => {
        await LoginPage.login(username, password);
    }
);
