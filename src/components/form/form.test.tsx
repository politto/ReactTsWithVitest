import Form from './Form';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('load', () => {
    // mock the setCounterHistory function
    const setCounterHistory = vi.fn();

    it('should render the form', () => {
        render(<Form counterHistory={[]} setCounterHistory={setCounterHistory} />);
        
        const countdisplay = screen.getByText('count is 0');
        const countMod3Display = screen.getByText('count mod3 is 0');

        const input1 = screen.getAllByRole('textbox');
        
        expect(countdisplay).toBeDefined();
        expect(input1).toBeDefined();
        expect(countMod3Display).toBeDefined();
    });
})
