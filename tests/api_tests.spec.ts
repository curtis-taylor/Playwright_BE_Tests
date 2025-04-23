import {test, expect } from "@playwright/test";



test('API GET Request', async({request}) => {
    const response = await request.get('http://127.0.0.1:8787/profiles');

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('John Doe');
})

