import { render, screen, fireEvent } from '@testing-library/react';
import Score from '../Score'
import {EarTrainingContextProvider} from '../../../../EarTrainingContext';

const MockScore = () =>{
  return(<EarTrainingContextProvider>
    <Score/>
  </EarTrainingContextProvider>)
}

test('test score renders to page', () => {
  render(<MockScore/>);
  const score = screen.queryByText(/score: \d+\/\d+/i);
  expect(score).toBeInTheDocument();
  fireEvent.click(score);
  expect(score).not.toHaveTextContent(/score: \d+\/\d+/i);
  expect(score).toHaveTextContent(/score: \d\%/i);
});

test('test score toggles between percentage & tally', () => {
  render(<MockScore/>);
  const score = screen.queryByText(/score: \d+\/\d+/i);
  fireEvent.click(score);
  expect(score).toHaveTextContent(/score: \d\%/i);
  fireEvent.click(score);
  expect(score).toHaveTextContent(/score: \d+\/\d+/i);
});