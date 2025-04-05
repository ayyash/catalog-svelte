// create a login component in svelte

import { writable } from 'svelte/store';

export const username = writable('');
export const password = writable('');

export function login(a: string, b: string) {

    // add your authentication logic here
    // for example, you can use a mock API to check the credentials
    // replace the mock API URL with your actual authentication endpoint
    const mockAPI = 'https://example.com/api/login';
    fetch(mockAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // if login is successful, store the username and password in the store
            username.set(a);
            password.set(b);
        } else {
            // display an error message if login fails
            alert('Invalid username or password');
        }
    });
    // clear the input fields after login
    username.set('');
    password.set('');
}
