import { screen, render } from '@testing-library/react';
import { Skills } from './Skills';

describe.only('Skills component', () => {
    const skills = ['HTML', 'CSS', 'Javascript', 'React'];
    test('render skills correctly or not', () => {
        render(<Skills />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test('render all skills correctly or not', () => {
        render(<Skills skills={skills} />);
        const listElements = screen.getAllByRole("listitem");
        expect(listElements).toHaveLength(skills.length);
    });

    test('render login button', async () => {
        render(<Skills skills={skills} />);
        const loginButton = await screen.findByRole('button', {
            name: 'log in',
        }, {
            timeout: 2000,
        });
        expect(loginButton).toBeInTheDocument();
    });

    
});