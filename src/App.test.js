import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App'
import {EarTrainingContextProvider} from './EarTrainingContext';

const MockApp = () =>{
    
    return(<EarTrainingContextProvider>
        <App/>
    </EarTrainingContextProvider>)
}

describe('help btn & modal', () => {
    /* these tests would be better with toBeVissible but need to rearrange css first */
    test('by default modal should be hidden', () => {
      render(<MockApp/>);
      const helpBtn = screen.getByRole('button', {name : 'help'});
      const helpHeading = screen.getByRole('heading', {name: /getting started/i});
      const helpModal = screen.getByTestId('help-modal');
      expect(helpModal).not.toHaveClass('show');
    });
    
    test('clicking btn should reveal modal', () => {
      render(<MockApp/>);
      const helpBtn = screen.getByRole('button', {name : 'help'});
      const helpModal = screen.getByTestId('help-modal');
      fireEvent.click(helpBtn);
      expect(helpModal).toHaveClass('show');
    });

    test('clicking btn again should hide modal', () => {
      render(<MockApp/>);
      const helpBtn = screen.getByRole('button', {name : 'help'});
      const helpModal = screen.getByTestId('help-modal');
      fireEvent.click(helpBtn);
      fireEvent.click(helpBtn);
      expect(helpModal).not.toHaveClass('show');
    });

});    
