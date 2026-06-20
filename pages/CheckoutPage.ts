import  { type Locator, type Page } from '@playwright/test';

// TODO: Change initial 'goto' to be 'https://sauce-demo.myshopify.com/cart' instead of current and refactor code to reflect the checkout page
 // page.getByRole('link', { name: '' }) instead of current setup
 
export class CheckoutPage {
    readonly page: Page;
    readonly cartButton: Locator;
    readonly checkoutButton: Locator;
    readonly removeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartButton = page.getByText('My Cart');
        this.checkoutButton = page.getByText('Check Out');
        this.removeButton = page.getByText('Remove');
    }

    async goto() {
        await this.page.goto('https://sauce-demo.myshopify.com/');
    }

    async addGreyJacketToCard() {
        await this.page.getByText('Grey Jacket').click();
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
    }

    // TODO: Add checkout process method
    // TODO: Add removal of item method
}