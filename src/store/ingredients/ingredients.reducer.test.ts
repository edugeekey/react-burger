import { ingredientsReducer, initialState } from './ingredients.reducer';
import { fetchIngredients } from './ingredients.actions';
import { GetIngredientsResponse } from 'api';
import { Ingredient } from 'types';

describe('ingredients.reducer', () => {

    it('should return the initial state', () => {
        expect(ingredientsReducer(undefined, {type: ''})).toEqual(initialState);
    });

    it('should return the state with isLoading = true', () => {
        expect(ingredientsReducer(initialState, fetchIngredients.pending))
            .toEqual({...initialState, isLoading: true});
    });

    it('should return the rejected state', () => {
        expect(ingredientsReducer(initialState, fetchIngredients.rejected))
            .toEqual({...initialState, isLoading: false, data: [], hasError: true});
    });

    it('should return the state with filled data', () => {
        const ingredient: Ingredient = {
            _id: 'test',
            name: 'test',
            type: 'sauce',
            proteins: 1,
            fat: 1,
            carbohydrates: 1,
            calories: 1,
            price: 1,
            image: 'test',
            image_mobile: 'test',
            image_large: 'test',
            __v: 1
        };
        const response: GetIngredientsResponse = {
            success: true,
            data: [ingredient]
        };
        expect(ingredientsReducer(initialState, fetchIngredients.fulfilled(response, 'test')))
            .toEqual({...initialState, isLoading: false, data: [ingredient], hasError: false});
    });
});
