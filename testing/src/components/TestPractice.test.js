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



    //getByLabelText:-
    test('render input correctly', () => {
        render(<TestPractice />);
        const nameElement = screen.getByLabelText('Name', {
            selector: "input",
        });
        expect(nameElement).toBeInTheDocument();
    });

    test('render select dropdown correctly', () => {
        render(<TestPractice />);
        const comboboxElement = screen.getByLabelText('Location');
        expect(comboboxElement).toBeInTheDocument();
    });


    //getByPlaceholder:-
    test('render inputBox correctly', () => {
        render(<TestPractice />);
        const nameElement = screen.getByPlaceholderText('enter name here');
        expect(nameElement).toBeInTheDocument();
    });


    //getByText:- p, span, div
    test('render para correctly', () => {
        render(<TestPractice />);
        const paraElement = screen.getByText('Learn html, css, js and react');
        expect(paraElement).toBeInTheDocument();
    });


    //getByDisplayValue:-
    test('render inputText correctly', () => {
        render(<TestPractice />);
        const inputElement = screen.getByDisplayValue('vasanth');
        expect(inputElement).toBeInTheDocument();
    });


    //getByAltText:-
    test('render img correctly', () => {
        render(<TestPractice />);
        const imgElement = screen.getByAltText('img');
        expect(imgElement).toBeInTheDocument();
    });


    //getByTitle:-
    test('render heading with title correctly', () => {
        render(<TestPractice />);
        const compHeadingElement = screen.getByTitle('vasanth');
        expect(compHeadingElement).toBeInTheDocument();
    });


    //getByCustom:-
    test('render div correctly', () => {
        render(<TestPractice />);
        const customElement = screen.getByTestId('custom');
        expect(customElement).toBeInTheDocument();
    });
});