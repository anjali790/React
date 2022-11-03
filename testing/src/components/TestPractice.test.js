import {render, screen} from "@testing-library/react";
import { TestPractice } from "./TestPractice";

describe('Test Practice Componenet', () =>{
    test('render correctly', () =>{
        render(<TestPractice/>);
    })
})