import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomButton from '../components/CustomButton';

describe('CustomButton Component', () => {
  test('renders with the correct text', () => {
    render(<CustomButton text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick} text="Click me" />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when the disabled prop is true', () => {
    render(<CustomButton disabled={true} text="Disabled Button" />);
    expect(screen.getByText('Disabled Button')).toBeDisabled();
  });
});
