import { test, expect, type Page } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test('Sign up can be clicked and takes the user to the sign up page', async ({ page }: { page: Page }) => {
    const mainPage = new MainPage(page);

    await mainPage.goto();
    await mainPage.signUpLink.click();

    expect(mainPage.page.getByText('Create your account'));    
});