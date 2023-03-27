import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App.js';

describe( 'TEST APP', () => {
      test('Links work', async () => {
            render(
                  <MemoryRouter> 
                        <App /> 
                  </MemoryRouter>
            );
            const link = await screen.findAllByTestId('link');
            expect(link.length > 1);
      });
})
