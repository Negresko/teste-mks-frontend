import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test('Footer Component', () => {
    render(<Footer />)

    expect(screen.getByText('MKS Sistemas')).toBeTruthy();
    expect(screen.findByText('Todos os direitos reservados'));
});