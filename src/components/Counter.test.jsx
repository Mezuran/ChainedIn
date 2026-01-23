import { render, screen, fireEvent } from "@solidjs/testing-library";
import { describe, it, expect } from "vitest";
import Counter from "./Counter"; // Sesuaikan path komponen kamu

describe("Counter Component", () => {
    it("harus merender nilai awal 0", () => {
        render(() => <Counter />);
        // Mencari elemen text/button
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Clicks: 0"); // Asumsi teks awalnya ini
    });

    it("harus bertambah saat diklik", () => {
        render(() => <Counter />);
        const button = screen.getByRole("button");

        // Simulasi klik
        fireEvent.click(button);

        expect(button).toHaveTextContent("Clicks: 1");
    });
});