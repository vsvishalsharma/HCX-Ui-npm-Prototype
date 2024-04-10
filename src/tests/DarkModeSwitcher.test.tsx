import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DarkModeSwitcher from '../components/DarkModeSwitcher';
import useColorMode from '../hooks/useColorMode';

jest.mock('../hooks/useColorMode'); // Mock the useColorMode hook

describe('DarkModeSwitcher', () => {
  const mockSetColorMode = jest.fn();

  beforeEach(() => {
    // Reset the mock function before each test
    mockSetColorMode.mockReset();
  });

  test('renders correctly in light mode', () => {
    (useColorMode as jest.Mock).mockReturnValue(['light', mockSetColorMode]);
    render(<DarkModeSwitcher />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('renders correct class for dark mode', () => {
    (useColorMode as jest.Mock).mockReturnValue(['dark', jest.fn()]);
    render(<DarkModeSwitcher />);
    const checkboxParent = screen.getByRole('checkbox').parentElement;
    expect(checkboxParent).toHaveClass('bg-primary'); // Assuming 'bg-primary' is the class for dark mode
  });
  

  test('toggles mode on switch', () => {
    (useColorMode as jest.Mock).mockReturnValue(['light', mockSetColorMode]);
    render(<DarkModeSwitcher />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockSetColorMode).toHaveBeenCalledWith('dark'); // Expect the mode to change to dark
  });
});
