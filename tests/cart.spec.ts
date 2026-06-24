import { test, Page, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Cart is visible after click', async ({ page }: { page: Page }) => {
    const mainPage = new CheckoutPage(page);

    await mainPage.gotoMain();
    await mainPage.cartButton.click();

    expect(mainPage.page.locator('style="display: block'));
})

test('Cart is not visible when first entering site', async ({ page }: { page: Page }) => {
    const mainPage = new CheckoutPage(page);

    await mainPage.gotoMain();

    expect(mainPage.page.locator('style="display: none'));
})

test('My Cart page is empty with messaging if "Check out" is selected with nothing in cart', async ({ page }: { page: Page }) => {
    const mainPage = new CheckoutPage(page);

    await mainPage.gotoMain();
    await mainPage.checkoutButton.click();

    expect(mainPage.page.getByText('It appears that your cart is currently empty!'));
})

test('Add to cart workflow functions properly', async ({ page }: { page: Page }) => {
    const mainPage = new CheckoutPage(page);

    await mainPage.gotoMain();
    await mainPage.addGreyJacketToCard();
    await mainPage.cartButton.click();

    expect(mainPage.page.locator('value="1"'));
})


// TODO: Fix test to be able to test the specific functionality

/*
test('Cart is cleared when remove link is clicked', async ({ page }: { page: Page }) => {
    const mainPage = new CheckoutPage(page);

    await mainPage.gotoMain();
    await mainPage.addGreyJacketToCard();
    await mainPage.cartButton.click();
    await mainPage.removeButton.click();

    expect(mainPage.page.locator('.empty'));
    expect(mainPage.page.getByText('Your cart is empty.'));
})
*/


test('Checkout button with item in cart leads to checkout page', async ({ page }: { page: Page }) => {
    const mainPage = new CheckoutPage(page);

    await mainPage.gotoMain();
    await mainPage.addGreyJacketToCard();
    await mainPage.checkoutButton.click();
    await mainPage.checkoutButton.click();

    expect(mainPage.page.getByText('Sauce Demo'));
})