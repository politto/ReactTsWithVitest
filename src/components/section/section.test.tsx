import Section from './Section';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('load', () => {
    // mock the handleRemoveHistory function
    const handleRemoveHistory = vi.fn();

    it('should render the section', () => {
        render(<Section counterHistory={[]} handleRemoveHistory={handleRemoveHistory} />);
        

    });

    it('should delete each history if there is any', () => {
        render(<Section counterHistory={[1, 2, 3]} handleRemoveHistory={handleRemoveHistory} />);
        
        const deleteButton = screen.getAllByRole('button');
        expect(deleteButton).toHaveLength(3);

        deleteButton.forEach((button, index) => {
            button.click();
            expect(handleRemoveHistory).toHaveBeenCalledWith(index);
        })
    });
})

