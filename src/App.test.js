import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App'
import {EarTrainingContextProvider} from './EarTrainingContext';
//import { act } from 'react-dom/test-utils';

const MockApp = () =>{
    
    return(<EarTrainingContextProvider>
        <App/>
    </EarTrainingContextProvider>)
}

beforeEach(()=>{
  render(<MockApp/>);

});

describe('help btn & modal', () => {
    /* these tests would be better with toBeVissible but need to rearrange css first */
    test('by default modal should be hidden', () => {
      
      const helpModal = screen.getByTestId('help-modal');
      expect(helpModal).not.toHaveClass('show');
    });
    
    test('clicking btn should reveal modal', () => {
      
      const helpBtn = screen.getByRole('button', {name : 'help'});
      const helpModal = screen.getByTestId('help-modal');
      fireEvent.click(helpBtn);
      expect(helpModal).toHaveClass('show');
    });

    test('clicking btn again should hide modal', () => {
      
      const helpBtn = screen.getByRole('button', {name : 'help'});
      const helpModal = screen.getByTestId('help-modal');
      fireEvent.click(helpBtn);
      fireEvent.click(helpBtn);
      expect(helpModal).not.toHaveClass('show');
    });
    test('clicking off modal should close modal', () => {
      
      const helpBtn = screen.getByRole('button', {name : 'help'});
      const helpModal = screen.getByTestId('help-modal');
      fireEvent.click(helpBtn);
      fireEvent.click(document);
      expect(helpModal).not.toHaveClass('show');
    });

});    

describe('start modal integration', () => {

  it('should exist when app loads', () => {
    expect(screen.getByTestId('start-modal')).toBeInTheDocument();
  });

  it('should not close if no key selected', () => {
    const startBtn = screen.getByRole('button', {  name: /start/i});
    fireEvent.click(startBtn);
    expect(screen.getByTestId('start-modal')).toBeInTheDocument();
  });

  it('should close if key IS selected', () => {
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', {name: 'C'}),
    );
    const startBtn = screen.getByRole('button', {  name: /start/i});
    
    act(() => {fireEvent.click(startBtn)});
    
    expect(screen.queryByTestId('start-modal')).not.toBeInTheDocument();
  });
  
  
});
