import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { useNavigate as mockedUsedNavigate} from 'react-router-dom';
import { act } from 'react-dom/test-utils'

jest.mock("react-router-dom", ()=>({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: ()=> jest.fn(),
}));

describe("BookingForm",()=>{
  it("render without crashing", ()=>{
    act(() => {
      render(<BookingForm />);
      screen.debug();
    })
  });
  expect(screen.getByText('Enter Your Name')).toBeInTheDocument();
});


// test("renders available times", ()=>{
//   render(<BookingForm />);
//   expect().toReturn()
// })