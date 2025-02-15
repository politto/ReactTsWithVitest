import TrashBinManager from './trash-bin';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('load', () => {
    // mock the handleRemoveHistory function
    const handleTrashBin = vi.fn();

    it('should render the trashbin', () => {
        render(<TrashBinManager trashBin={[]} handleTrashBin={handleTrashBin} />);
        const deleteButton = screen.queryAllByRole('button');

        expect(deleteButton).toBeDefined();
        

    });

    it('should delete trash bin if there is any', () => {
        render(<TrashBinManager trashBin={[1, 2, 3]} handleTrashBin={handleTrashBin} />);
        
        const deleteButton = screen.getAllByRole('button');
        expect(deleteButton).toHaveLength(3);

        deleteButton.forEach((button, index) => {
            button.click();
            expect(handleTrashBin).toHaveBeenCalledWith(index);
        })
    });
})

