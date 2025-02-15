
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from './App';

describe('load', () => {
    // mock the setCounterHistory function
    beforeEach(() => {
        cleanup();
    })

    it('should load app', () => {
        render(<App />);
        const countdisplay = screen.getByText('count is 0');
        const countMod3Display = screen.getByText('count mod3 is 0');
        const input1 = screen.getByLabelText('input1');
        const input2 = screen.getByLabelText('input2');
        const operand = screen.getByRole('combobox');
        const calculateButton = screen.getByText('count is 0');


        expect(input1).toBeDefined();
        expect(input2).toBeDefined();
        expect(operand).toBeDefined();
        expect(calculateButton).toBeDefined();
        expect(countdisplay).toBeDefined();
        expect(countMod3Display).toBeDefined();



    });

    it("should work to delete history", () => {
        render(<App />);
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

        fireEvent.click(calculateButton);
        

        fireEvent.change(operand, {target: {value: '/'}});
        fireEvent.click(calculateButton);

        fireEvent.change(operand, {target: {value: '*'}});
        fireEvent.click(calculateButton);

        fireEvent.change(operand, {target: {value: '+sdf'}});

        mod3Button.click();
        const deleteButton = screen.getAllByRole('button', {name: 'delete'});

        deleteButton.forEach(element => {
            fireEvent.click(element);
        });;
        console.log(deleteButton);
        
        const restoreButton = screen.getAllByRole('button', {name: 'restore'});

        restoreButton.forEach(element => {
            fireEvent.click(element);
        });;

        // deleteButton.click();
    });
})