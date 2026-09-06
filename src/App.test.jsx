import { describe } from "vitest";
import App from "./App.jsx";
import { render, screen } from "@testing-library/react";

describe('App', () => {
    it('renders', () =>{
        render(<App title = "React" />);
        screen.debug();
    });
});