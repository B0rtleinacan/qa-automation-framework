import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly loginLink: Locator;

    // TODO: Fix 'this.emailInput' and 'this.passwordInput' to properly locate the input fields in the login page
    // page.getByRole('link', { name: '' }) instead of current setup

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByLabel('Email');
        this.passwordInput = page.getByLabel('Password');
        this.signInButton = page.getByRole('button', { name: 'SIGN IN' });
        this.loginLink = page.getByRole('link', { name: 'Log In' });
    }
    async goto() {
        await this.page.goto('https://sauce-demo.myshopify.com/');
    }

    async login(email: string, password: string) {
        await this.loginLink.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    //TODO: Add a method to test invalid login credentials
    //TODO: Add a method to test login with empty fields
}