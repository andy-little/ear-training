import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from '../Dropdown'
import {EarTrainingContextProvider, useEarTrainingContext} from '../../../EarTrainingContext';

const WrapperDropdown = () =>{
    
    return(<EarTrainingContextProvider>
        <MockDropdown/>
    </EarTrainingContextProvider>)
}
const MockDropdown = () => {
    const {keyOptions, key_, gameDispatch} = useEarTrainingContext();
    return <Dropdown label="Key" options={keyOptions} key_={key_} dispatch={gameDispatch} dispatchAction={'KEY_'}/>
}

test('test dropdown sets default to Select', () => {
  render(<WrapperDropdown/>);
  expect(screen.getByRole('option', {name: /select/i}).selected).toBe(true);
});



test('should allow user to select keys', () => {
    render(<WrapperDropdown/>)
        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByRole('option', {name: 'C'}),
        );
    expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true);

        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByRole('option', {name: 'Bb'}),
        );
    expect(screen.getByRole('option', {name: 'Bb'}).selected).toBe(true);
})