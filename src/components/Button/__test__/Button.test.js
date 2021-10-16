import {render, screen} from '@testing-library/react'
import Button from '../Button'

const mockedSubmitBtn = jest.fn()

it('should be disabled', () => {
    render(
        <Button 
            disabled={true} 
            submitBtn={mockedSubmitBtn} 
        />
    );
    const buttonElement = screen.getByText(/Submit/i)
    expect(buttonElement).toBeDisabled()
})