import Form from './Form';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('load', () => {
    beforeEach(() => {
        cleanup();
    })
    // mock the setCounterHistory function
    const setCounterHistory = vi.fn();

    it('should render the form', () => {
                          // vv mock non-fn attrubute
        render(<Form counterHistory={[]} setCounterHistory={setCounterHistory} />);
        
        const countdisplay = screen.getByText('count is 0');
        const countMod3Display = screen.getByText('count mod3 is 0');
        const input1 = screen.getByLabelText('input1');
        const input2 = screen.getByLabelText('input2');
        const operand = screen.getAllByRole('combobox');
        const calculateButton = screen.getByText('count is 0');


        expect(input1).toBeDefined();
        expect(input2).toBeDefined();
        expect(operand).toBeDefined();
        expect(calculateButton).toBeDefined();
        expect(countdisplay).toBeDefined();
        expect(countMod3Display).toBeDefined();

    });

    it('should calculate the result based on the operand', () => {
        render(<Form counterHistory={[1, 2, 3]} setCounterHistory={setCounterHistory} />);
        
        const input1 = screen.getByLabelText('input1');
        const input2 = screen.getByLabelText('input2');
        const operand = screen.getByRole('combobox', {name: 'operand'});
        const calculateButton = screen.getByText("count is 0");
        const mod3Button = screen.getByText('count mod3 is 0');


        fireEvent.change(input1, {target: {value: '3'}});
        fireEvent.change(input2, {target: {value: '3'}});
        fireEvent.change(operand, {target: {value: '-'}});

        calculateButton.click();

        expect((input1 as HTMLInputElement).value).toBe('3');
        expect((input2 as HTMLInputElement).value).toBe('3');
        expect((operand as HTMLSelectElement).value).toBe('-');

        
        fireEvent.change(operand, {target: {value: '+'}});

        calculateButton.click();

        fireEvent.change(operand, {target: {value: '/'}});
        calculateButton.click();

        fireEvent.change(operand, {target: {value: '*'}});
        calculateButton.click();

        fireEvent.change(operand, {target: {value: '+sdf'}});

        mod3Button.click();

        


    });
})
