import React from 'react';
import { render, screen } from '@testing-library/react';
import Exercise2 from './Exercise2';
test('renders Exercise2 component correctly', () => {
    render(<Exercise2 />);
    screen.debug()
    const div = document.querySelectorAll("div")
    const form = document.querySelector("form")
    // const usernameLabel = screen.getByLabelText('Username');
    // const passwordLabel = screen.getByLabelText('Password');
    const usernameLabel = document.querySelector('label[htmlFor="username"]');
    const passwordLabel = document.querySelector('label[htmlFor="password"]');



    expect(div[1].className).toBeInTheDocument
    expect(form.className).toBeInTheDocument
    expect(usernameLabel).toBeInTheDocument
    expect(passwordLabel).toBeInTheDocument
    // expect(usernameLabel.getAttribute('htmlFor')).toEqual('username');
    // expect(passwordLabel.getAttribute('for')).toBe('password');
});