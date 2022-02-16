import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
	test('renders Hello World as a text', () => {
		// Arrange
		render(<Greeting />);

		//Act
		//...nothing

		//Assert
		const helloWorldElement = screen.getByText('Hello World!');
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders "good to see you" as a text if the "Change Text" button was NOT clicked', () => {
		// Arrange
		render(<Greeting />);

		//Act
		//...nothing

		//Assert
		const textElement = screen.getByText('good to see you', { exact: false });
		expect(textElement).toBeInTheDocument();
	});

	test('renders "Changed!" if the "Change Text" button was clicked', () => {
		// Arrange
		render(<Greeting />);

		//Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		//Assert
		const textElement = screen.getByText('Changed!');
		expect(textElement).toBeInTheDocument();
	});

	test('does NOT render "good to see you" if the "Change Text" button was clicked', () => {
		// Arrange
		render(<Greeting />);

		//Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		//Assert
		const textElement = screen.queryByText('good to see you', { exact: false });
		expect(textElement).toBeNull();
		// expect(() => screen.getByText('good to see you', { exact: false })).toThrow();
	});
});
