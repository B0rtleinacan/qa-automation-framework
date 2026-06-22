import { test, expect, Page } from '@playwright/test';
import { MainPage}  from '../pages/MainPage';

test('Blog page is entered when Blog is selected on side nav', async ({ page }: { page: Page }) => {
    const mainPage = new MainPage(page);

    await mainPage.goto();
    await mainPage.blogLink.click();

    expect(mainPage.page.getByText('First Post'));
})