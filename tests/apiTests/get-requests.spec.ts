import { test, expect, APIRequestContext } from '@playwright/test';

test('Get request for webstie, returns 200', async ({ request }: { request: APIRequestContext }) => {
    const response = await request.get('https://sauce-demo.myshopify.com/');
    expect(response.status()).toBe(200);
});

test('Get cart, return 200', async ({ request }: { request: APIRequestContext }) => {
    const response = await request.get('https://sauce-demo.myshopify.com/cart');
    expect(response.status()).toBe(200);
})