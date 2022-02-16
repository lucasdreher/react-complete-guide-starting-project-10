import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
	test('renders posts if request succeeds', async () => {
		// Arrange
		window.fetch = jest.fn();
		window.fetch.mockResolveValueOnce({
			json: async () => [ { id: 'p1', title: 'First post' } ]
		});
		render(<Async />);

		//Act
		//...nothing

		//Assert
		const listItemsElements = await screen.findAllByRole('listitem');
		expect(listItemsElements).not.toHaveLength(0);
	});
});
