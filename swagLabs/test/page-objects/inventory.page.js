import Page from "./page";

class InventoryPage extends Page {
    get buttonFilter() {
        return $(".product_sort_container");
    }
    get Listfilter() {
        return $(".product_sort_container");
    }
    get linkShoppingCart() {
        return $("span.shopping_cart_badge");
    }
    get buttonMenu() {
        return $("#react-burger-menu-btn");
    }
    get badgeCartQuantity() {
        return $(".shopping_cart_badge");
    }
    //choose filter to items by text
    filterItems = async (filterBy) => {
        await this.buttonFilter.click();
        await this.Listfilter.selectByVisibleText(filterBy);
    };
    //click Item by text
    clickItem = async (item) => {
        const linkItem = $(
            `//div[@class='inventory_item_label']/a/div[text()[contains(., '${item}')]]`
        );
        await linkItem.click();
    };
    //check Item Present
    verifyItemPresent = async (item, present) => {
        const linkItem = $(
            `//div[@class='inventory_details_desc_container']/div[text()[contains(., '${item}')]]`
        );
        if (present == true) {
            await expect(linkItem).toBePresent();
        } else if (present == false) await expect(linkItem).not.toBePresent();
    };
    //add Item to cart by Item text
    addItemToCart = async (item) => {
        const btnAddToCart = $(
            `//div[@class='inventory_details_desc_container']/div[text()[contains(., '${item}')]]/../button`
        );
        await btnAddToCart.click();
    };
    verifybadgeCartQuantityPresent = async (present) => {
        if (present == true) {
            await expect(this.badgeCartQuantity).toBePresent();
        } else if (present == false)
            await expect(this.badgeCartQuantity).not.toBePresent();
    };
    verifyMenuButtonPresent = async (present) => {
        if (present == true) {
            await expect(this.buttonMenu).toBePresent();
        } else if (present == false)
            await expect(this.buttonMenu).not.toBePresent();
    };
}
export default new InventoryPage();
