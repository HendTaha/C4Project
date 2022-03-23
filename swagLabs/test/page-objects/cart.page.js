import Page from "./page";

class CartPage extends Page {
    get labelCartQuantity() {
        return $(".cart_quantity");
    }
    //check Item Present
    verifyItemPresent = async (item, exists) => {
        const linkItem = $(
            `//div[@class='cart_item_label']/a/div[text()[contains(., '${item}')]]`
        );
        if (exists == true) {
            await expect(linkItem).toBePresent();
        } else if (exists == false) await expect(linkItem).not.toBePresent();
    };

    // remove Item from cart by item text
    removeItemFromCart = async (item) => {
        const btnRemoveItem = $(
            `//div[@class='cart_item_label']/a/div[text()[contains(., '${item}')]]/../../div[@class='item_pricebar']/button`
        );
        await btnRemoveItem.click();
    };
}
export default new CartPage();
