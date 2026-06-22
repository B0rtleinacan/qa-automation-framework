import { type Locator, type Page } from '@playwright/test';

 // page.getByRole('link', { name: '' }) instead of current setup

export class MainPage {
    readonly page: Page;
    readonly signUpLink: Locator;
    readonly loginLink: Locator;
    readonly searchLink: Locator;
    readonly logoutLink: Locator;
    readonly myCartLink: Locator;
    readonly checkoutLink: Locator;
    // TODO: Add My Account link locator
    // TODO: Add Catalog link locator
    readonly blogLink: Locator;
    // TODO: Add About Us link locator
    // TODO: Add Refer a Friend link locator
    // TODO: Add Footer link locators

    constructor(page: Page) {
        this.page = page;
        this.signUpLink = page.getByText('Sign up');
        this.loginLink = page.getByText('Log In');
        this.searchLink = page.getByText('Search');
        this.logoutLink = page.getByText('Log Out');
        this.myCartLink = page.getByText('My Cart');
        this.checkoutLink = page.getByText('Check Out');
        this.blogLink = page.getByRole('link', { name: 'Blog' });
    }

    async goto() {
        await this.page.goto('https://sauce-demo.myshopify.com/');
    }

    // TODO: Add navigation methods for each link while not signed in
    // TODO: Add navigation methods for each link while signed in
}