import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly loginLink: Locator;
    readonly myAccountLink: Locator;
    readonly forgotPasswordLink: Locator;
    readonly forgotPasswordSubmitButton: Locator;
    readonly forgotPasswordEmailInput: Locator;
    readonly forgotPasswordCancelLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByLabel('Email Address');
        this.passwordInput = page.getByLabel('Password');
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.loginLink = page.getByRole('link', { name: 'Log In' });
        this.myAccountLink = page.getByRole('link', { name: 'My Account' });
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot your password?' });
        this.forgotPasswordSubmitButton = page.locator('#recover-email');
        this.forgotPasswordEmailInput = page.locator('input[type="email"]');
        this.forgotPasswordCancelLink = page.getByRole('link', { name: 'Cancel' });
    }

    // Goes directly to the main site
    async goto() {
        await this.page.goto('https://sauce-demo.myshopify.com/');
    }

    // Login method
    async login(email: string, password: string) {
        await this.loginLink.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    // Method to test empty fields login attempt
    async emptyFieldLogin() {
        await this.loginLink.click();
        await this.signInButton.click();
    }

    async goToForgotPasswordField() {
        await this.loginLink.click();
        await this.forgotPasswordLink.click();
    }

    /*
    async emailSubmitForgotPassword(email: string) {
        await this.forgotPasswordEmailInput.fill(email);
        await this.forgotPasswordSubmitButton.click();
    }
    */
}