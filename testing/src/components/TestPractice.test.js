import { render, screen } from "@testing-library/react";
import { TestPractice } from "./TestPractice";

describe('Test Practice Component', () => {
    //getByRole:-
    test('renders input correctly', () => {
        render(<TestPractice />);
        const nameElement = screen.getByRole('textbox', {
            name: "Name",
        });
        expect(nameElement).toBeInTheDocument();
    });

    test('render combobox correctly', () => {
        render(<TestPractice />);
        const locationElement = screen.getByRole('combobox');
        expect(locationElement).toBeInTheDocument();
    });

    test('render checkbox correctly', () => {
        render(<TestPractice />);
        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();
    });

    test('render submit button correctly', () => {
        render(<TestPractice />);
        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();
    });

    test('render mainheading correctly', () => {
        render(<TestPractice />);
        const compHeadingElement = screen.getByRole('heading', {
            level: 1,
        });
        expect(compHeadingElement).toBeInTheDocument();
    });


    test('render heading correctly', () => {
        render(<TestPractice />);
        const compHeadingElement = screen.getByRole('heading', {
            level: 3,
            name: 'React session',
        });
        expect(compHeadingElement).toBeInTheDocument();
    });




});