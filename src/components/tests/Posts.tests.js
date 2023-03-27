import { render, screen } from '@testing-library/react';
import Posts from '../Posts';

test('Post has title', () => {
   render(<Posts />);
   const titleElement = screen.getByText(/posts/i);
   expect(titleElement).toBeInTheDocument(); 
});
