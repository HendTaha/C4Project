import { Given, When, Then } from "@cucumber/cucumber";
import InventoryPage from "../page-objects/inventory.page";

When(/^I change filter to (.*)$/, async (filterBy) => {
    await InventoryPage.filterItems(filterBy);
});

When(/^I click on item (.*)$/, async (item) => {
    await InventoryPage.clickItem(item);
});

Then(/^I expect same item (.*) to be present$/, async (item) => {
    await InventoryPage.verifyItemPresent(item, true);
});

When(/^I click on cart button$/, async () => {
     await InventoryPage.linkShoppingCart.click();
});

When(/^I add item (.*) to cart$/, async (item) => {
    await InventoryPage.addItemToCart(item);
});

Then(/^I expect cart quantity does exist$/, async () => {
    await InventoryPage.verifybadgeCartQuantityPresent(true);
});

Then(/^I expect Menu button does exist$/, async () => {
    await InventoryPage.verifyMenuButtonPresent(true);
});
