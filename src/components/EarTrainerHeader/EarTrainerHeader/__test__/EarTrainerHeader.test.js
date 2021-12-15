import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EarTrainerHeader from '../EarTrainerHeader'
import {EarTrainingContextProvider} from '../../../../EarTrainingContext';


const MockHeader = () =>{
    
    return(<EarTrainingContextProvider>
        <EarTrainerHeader/>
    </EarTrainingContextProvider>)
}


describe('select key dropdown', ()=> {

    function checkKeySelected(keysArr){
        keysArr.forEach((key_)=>{
            userEvent.selectOptions(
                screen.getByRole('combobox'),
                screen.getByRole('option', {name: key_}),
            );
        expect(screen.getByRole('option', {name: key_}).selected).toBe(true);
        });
    }

    test('should set default to "Select"', () => {
    render(<MockHeader/>);
    expect(screen.getByRole('option', {name: /select/i}).selected).toBe(true);
    });


    test('should allow user to select keys', () => {
        render(<MockHeader/>)
        checkKeySelected(['C', 'G', 'D', 'F', 'Bb']);
    })
});




test('clicking help should reveal modal and hide modal', () => {
  render(<MockHeader/>);
  //expect(screen.getByRole('option', {name: /select/i}).selected).toBe(true);
});

