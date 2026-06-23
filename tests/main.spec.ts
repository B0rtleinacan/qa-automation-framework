import { test, expect, Page } from '@playwright/test';
import { MainPage}  from '../pages/MainPage';

test('Blog page is entered when Blog is selected on side nav', async ({ page }: { page: Page }) => {
    const mainPage = new MainPage(page);

    await mainPage.goto();
    await mainPage.blogLink.click();

    expect(mainPage.page.getByText('First Post'));
})

test('Catalog page opens when link is clicked', async ({ page }: { page: Page }) => {
    const mainPage = new MainPage(page);

    await mainPage.goto();
    await mainPage.catalogLink.click();

    expect(mainPage.page.getByText('Products'));
})

test('About us link goes to about us page', async ({ page }: { page: Page }) => {
    const mainPage = new MainPage(page);

    await mainPage.goto();
    await mainPage.aboutUsLink.click();

    expect(mainPage.page.getByText('About Us'));
})

test('Refer a friend takes User to Refer a Friend field', async ({ page }: { page: Page }) => {
    const mainPage = new MainPage(page);

    await mainPage.goto();
    await mainPage.referFriendLink.click();

    await expect(mainPage.page).toHaveURL('https://sauce-demo.myshopify.com/#sauce-show-refer-friend');
})

test('Search box is functional', async ({ page }: { page: Page }) => {
    const mainPage = new MainPage(page);

    await mainPage.goto();
    await mainPage.search('Grey Jacket');

    expect(mainPage.page.getByText(' Showing results for '));
})