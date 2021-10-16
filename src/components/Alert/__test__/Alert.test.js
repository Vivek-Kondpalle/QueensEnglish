import {render, screen} from '@testing-library/react'
import Alert from '../Alert'

it('should render correct label', () => {
    render(<Alert type='success' label='Correct Answer' />);
    const paragraphElement = screen.getByText(/Correct Answer/i)
    expect(paragraphElement).toBeInTheDocument()
})

it('should render wrong label', () => {
    render(<Alert type='error' label='Wrong Answer' />);
    const paragraphElement = screen.getByText(/Wrong Answer/i)
    expect(paragraphElement).toBeInTheDocument()
})
