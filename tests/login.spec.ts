import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Sign in test cases
test('Login with valid credentials', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('cloverlyn123@gmail.com', '3xtr@!');

    expect(loginPage.page.getByText('Account Details and Order History'));
})


test('Sign in with empty fields', async ({ page }: {page: Page })=> {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.emptyFieldLogin();

    expect(loginPage.page.getByText('Incorrect email or password'));
})

test('Signing in with only email', async ({ page }: {page: Page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('email@email.com', '');

    expect(loginPage.page.getByText('Incorrect email or password'));
})

test('Attempt to sign in with only password', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('', 'something');

    expect(loginPage.page.getByText('Incorrect email or password'));
})



// Forgot Password tests

test('Go to Forgot Password page after entering login link', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.goToForgotPasswordField();

    expect(loginPage.page.getByText('Reset Password'));
})

test('Email is typed in and submit button is selected', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.goToForgotPasswordField();
    await loginPage.inputEmailForgotPassword('cloverlyn123@gmail.com');
    await loginPage.forgotPasswordSubmitButton.click();

    expect(loginPage.page.getByText('Customer Login'))
})