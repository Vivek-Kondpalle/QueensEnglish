import {render, screen} from '@testing-library/react'
import Input from '../Input'

const mockChangeFunction = jest.fn()

it('should render placeholder text', () => {
    render(
        <Input 
            inputAnswer={''}
            onChangeInput={mockChangeFunction}  
        />
    );
    const inputElement = screen.getByPlaceholderText(/Answer/i)
    expect(inputElement).toBeInTheDocument()
})
