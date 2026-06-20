import { test, expect, Page } from '@playwright/test';

// TODO: Refactor the login tests to utilize the LoginPage POM for maintainability

test('Sign up with valid credentials', async ({ page }: {page: Page}) => {
    // Enter Sauce Demo landing page
    await page.goto('https://sauce-demo.myshopify.com/');

    // Select 'Sign Up' link in navigation bar
    await page.getByRole('link', { name: 'Sign up' }).click();

    // Fill out fields in order
    await page.getByLabel('First Name').fill('Clover');
    await page.getByLabel('Last Name').fill('Lyn');
    await page.getByLabel('Email Address').fill('cloverlyn123@gmail.com');
    await page.getByLabel('Password').fill('3xtr@!');

    // Select 'CREATE' button to create a new account
    await page.getByRole('button', { name: 'CREATE'}).click();

    // Ensure that the user is directed to their account and that the page they are are has 'My Account' in the nav bar
    expect(page.getByLabel('My Account')).toBeVisible();
})

// Precondtion for testing login functionality is the User has to have an existing account

test('Login with valid credentials', async ({ page }: { page: Page }) => {
    await page.goto('https://sauce-demo.myshopify.com/');

    // Select 'Log In' link at the navigation bar
    await page.getByRole('link', { name: 'Log In' }).click();

    // Fill in email and password fields with valid credentials
    await page.getByLabel('Email Address').fill('cloverlyn123@gmail.com');
    await page.getByLabel('Password').fill('3xtr@!');

    // Click 'SIGN IN' button to enter login page
    await page.getByRole('button', { name: 'SIGN IN' }).click();

    expect(page.getByLabel('My Account')).toBeVisible();
})
