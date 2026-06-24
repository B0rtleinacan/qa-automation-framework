import  { type Locator, type Page } from '@playwright/test';

// TODO: Change initial 'goto' to be 'https://sauce-demo.myshopify.com/cart' instead of current and refactor code to reflect the checkout page
 // page.getByRole('link', { name: '' }) instead of current setup
 
export class CheckoutPage {
    readonly page: Page;
    readonly cartButton: Locator;
    readonly checkoutButton: Locator;
    readonly removeButton: Locator;
    readonly greyJacket: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartButton = page.getByRole('link', { name: 'My Cart '});
        this.checkoutButton = page.locator('.checkout');
        this.removeButton = page.getByRole('link', { name: 'Remove'});
        this.greyJacket = page.locator('#product-1');
    }

    async gotoMain() {
        await this.page.goto('https://sauce-demo.myshopify.com/');
    }

    async gotoCart() {
        await this.page.goto('https://sauce-demo.myshopify.com/cart');
    }

    async addGreyJacketToCard() {
        await this.greyJacket.click();
        await this.page.locator('#add').click();
    }

    // TODO: Add checkout process method
    // TODO: Add removal of item method
}