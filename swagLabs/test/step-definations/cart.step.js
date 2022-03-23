import { Given, When, Then } from "@cucumber/cucumber";
import CartPage from "../page-objects/cart.page";

When(/^I click on Remove Item (.*)$/, async (item) => {
    await CartPage.removeItemFromCart(item);
});

Then(/^I expect (.*) Item exists in my cart$/, async (item) => {
    await CartPage.verifyItemPresent(item, true);
});

Then(/^I expect (.*) Item does not exists in my cart$/, async (item) => {
    await CartPage.verifyItemPresent(item, false);
});

Then(/^I expect cart quantity equals (.*)$/, async (quantity) => {
    await expect(CartPage.labelCartQuantity).toHaveText(quantity);
});
