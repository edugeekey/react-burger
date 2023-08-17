import {
    burgerConstructorReducer,
    initialState,
    addBun,
    addConstructorIngredient,
    clear, removeConstructorIngredient, moveConstructorIngredient
} from './burger-constructor.reducer';
import { Ingredient, IngredientStored } from 'types';

describe('burger-constructor.reducer', () => {

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

    const storedIngredient: IngredientStored = {...ingredient, id: '1'};

    it('should return the initial state', () => {
        expect(burgerConstructorReducer(undefined, {type: ''})).toEqual(initialState);
    });

    it('should return the initial state on clear', () => {
        expect(burgerConstructorReducer({...initialState, bun: ingredient}, clear)).toEqual(initialState);
    });

    it('should add the bun to the store', () => {
        expect(burgerConstructorReducer(initialState, addBun(ingredient)))
            .toEqual({...initialState, bun: ingredient});
    });

    it('should add the ingredient to the store ingredients', () => {
        const action = {
            type: addConstructorIngredient.type,
            payload: storedIngredient
        };
        expect(burgerConstructorReducer(initialState, action))
            .toEqual({...initialState, ingredients: [storedIngredient]});
    });

    it('should remove the ingredient from the store ingredients', () => {
        const state = {...initialState, ingredients: [storedIngredient]};
        expect(burgerConstructorReducer(state, removeConstructorIngredient(storedIngredient.id)))
            .toEqual({...initialState, ingredients: []});
    });

    it('should move the ingredient in the store ingredients', () => {
        const storedIngredient2: IngredientStored = {...storedIngredient, id: '2'};
        const state = {
            ...initialState,
            ingredients: [storedIngredient, storedIngredient2]
        };
        expect(burgerConstructorReducer(state, moveConstructorIngredient({from: 0, to: 1})))
            .toEqual({...initialState, ingredients: [storedIngredient2, storedIngredient]});
    });
});
