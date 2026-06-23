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
    readonly catalogLink: Locator;
    readonly blogLink: Locator;
    readonly aboutUsLink: Locator;
    readonly referFriendLink: Locator;
    readonly searchField: Locator;
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
        this.catalogLink = page.getByRole('link', { name: 'Catalog' });
        this.aboutUsLink = page.locator('#main-menu').getByRole('link', { name: 'About Us'});
        this.referFriendLink = page.locator('#main-menu').getByRole('link', { name: 'Refer a friend' });
        this.searchField = page.locator('#search-field');
    }

    async goto() {
        await this.page.goto('https://sauce-demo.myshopify.com/');
    }

    async search(input: string) {
        await this.searchField.fill(input);
    }

    // TODO: Add navigation methods for each link while not signed in
    // TODO: Add navigation methods for each link while signed in
}