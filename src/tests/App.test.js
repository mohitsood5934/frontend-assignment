import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Pagination from '../components/Pagination';
import ProjectTable from '../components/ProjectTable';
import mockProjects from '../../frontend-assignment.json';

describe("renders title correctly", () => {
    it('should render the Kickstarter project title', () => {
        render(<App />);
        expect(screen.getByText(/Kickstarter Projects!/i)).toBeInTheDocument();
    });
})

describe("renders table correctly", () => {

    it("renders table header correctly", () => {
        render(<App />)
        expect(screen.getByText("S.No.")).toBeInTheDocument();
        expect(screen.getByText("Percentage funded")).toBeInTheDocument();
        expect(screen.getByText("Amount pledged")).toBeInTheDocument();
    })

    it("renders data inside the table correctly", async () => {
        render(<ProjectTable projects={mockProjects.slice(0, 4)} currentPage={1} totalPages={5} />);

        // First Project
        expect(screen.getByText("186")).toBeInTheDocument();
        expect(screen.getByText("15823")).toBeInTheDocument();
        expect(screen.getByText("0")).toBeInTheDocument();

        // Second Project
        expect(await screen.findByText("8")).toBeInTheDocument(); // Second project's percentage.funded
        expect(await screen.findByText("6859")).toBeInTheDocument(); // Second project's amt.pledged
        expect(await screen.findByText("1")).toBeInTheDocument(); // Second project's s.no

        // Verify sixth project data, it should not be present
        expect(screen.queryByText("30")).not.toBeInTheDocument();
    });
})


describe("test pagination in table", () => {

    let onPageChangeMock;

    beforeEach(() => {
        onPageChangeMock = jest.fn();
    });

    it("disables the 'Previous' button when we are on the first page", () => {
        render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChangeMock} />);

        const prevButton = screen.getByText("Previous");
        expect(prevButton).toBeDisabled();
    });

    it("disables the 'Next' button when we are on the last page", () => {
        render(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChangeMock} />);

        const nextButton = screen.getByText("Next");
        expect(nextButton).toBeDisabled();
    });

    it("calls onPageChange with incremented page number when clicking 'Next'", () => {
        render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChangeMock} />);

        const nextButton = screen.getByText("Next");
        fireEvent.click(nextButton);

        expect(onPageChangeMock).toHaveBeenCalledWith(3);
    });

    it("calls onPageChange with decremented page number when clicking 'Previous'", () => {
        render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChangeMock} />);

        const prevButton = screen.getByText("Previous");
        fireEvent.click(prevButton);

        expect(onPageChangeMock).toHaveBeenCalledWith(1);
    });


    it("displays the correct page number in the pagination text", () => {
        render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChangeMock} />);

        const pageText = screen.getByText("Page 3 of 5");
        expect(pageText).toBeInTheDocument();
    });
})