import React from 'react';
import { render, screen, fireEvent, getAllByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EarTrainerFooter from '../EarTrainerFooter'
import {EarTrainingContextProvider} from '../../../EarTrainingContext';


const MockFooter = () =>{
    
    return(<EarTrainingContextProvider>
        <EarTrainerFooter/>
    </EarTrainingContextProvider>)
}

function howManyChecked(arr){
    return arr.reduce((acc, curr) => {
        return curr.checked ? acc += 1 : acc;
    },0);
};

describe('Settings Menu', ()=> {

    describe('open/close', () => {
        
        test('open close btn should exist', () => {
            render(<MockFooter/>);
            const btn = screen.getByRole('button', {name: /settings/i});
            expect(btn).toBeInTheDocument();
        });
    
        test('settings menu should be hidden by default', () => {
            render(<MockFooter/>);
            const settingsModal = screen.getByTestId('settings-modal');
            expect(settingsModal).not.toHaveClass('show');
            
        });
        test('click btn should add show class to modal', () => {
            render(<MockFooter/>);
            const btn = screen.getByRole('button', {name: /settings/i});
            fireEvent.click(btn);
            const settingsModal = screen.getByTestId('settings-modal');
            expect(settingsModal).toHaveClass('show');
        });
        test('dbl click btn should remove show class to modal', () => {
            render(<MockFooter/>);
            const btn = screen.getByRole('button', {name: /settings/i});
            fireEvent.click(btn);
            fireEvent.click(btn);
            const settingsModal = screen.getByTestId('settings-modal');
            expect(settingsModal).not.toHaveClass('show');
        });

        test('clicking off modal should close modal', () => {
            render(<MockFooter/>);
            const btn = screen.getByRole('button', {name: /settings/i});
            fireEvent.click(btn);
            fireEvent.click(document);
            const settingsModal = screen.getByTestId('settings-modal');
            expect(settingsModal).not.toHaveClass('show');
        });

    });

    describe('settings btns', () => {

        test('should have 12 checkboxes all checked by default', () => {
            render(<MockFooter/>);
            //screen.getByRole();
            const checkboxes = screen.getAllByRole('checkbox', {name: 'note-select'});
            expect(checkboxes.length).toBe(12);
            
            checkboxes.forEach(box => {
                expect(box).toBeChecked();
            });
            
        });

        test('should uncheck/check', () => {
            render(<MockFooter/>);
            const checkboxes = screen.getAllByRole('checkbox', {name: 'note-select'});
            checkboxes.forEach(box => {
                if(box.name === 'an'){
                    fireEvent.click(box);
                    expect(box).not.toBeChecked();
                    fireEvent.click(box);
                    expect(box).toBeChecked();
                }    
            });
        });

        test('clear should uncheck 11/12 checkboxes, all should add check all', () => {
            render(<MockFooter/>);
            const checkboxes = screen.getAllByRole('checkbox', {name: 'note-select'});
            const clear = screen.getByRole('button', {name: /clear/i});
            fireEvent.click(clear);
            expect(howManyChecked(checkboxes)).toBe(1);
            const all = screen.getByRole('button', {name: /all/i});
            fireEvent.click(all);
            expect(howManyChecked(checkboxes)).toBe(12);
        });
    });
});

