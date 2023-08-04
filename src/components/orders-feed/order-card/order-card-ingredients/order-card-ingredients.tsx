import React, { ReactElement } from 'react';
import { Ingredient } from 'types';
import { RoundedImage, Text } from 'ui';
import styles from './order-card-ingredients.module.css';

type OrderCardIngredientsProps = {
    ingredients: Ingredient[];
    limit?: number;
}

export const OrderCardIngredients = ({ingredients, limit = 5}: OrderCardIngredientsProps): ReactElement => {
    const limitedIngredients = ingredients.slice(0, limit);

    const moreCount = ingredients.length - limit;

    return (
        <div className='flex'>
            {
                limitedIngredients.map((ingredient, i) => (
                    <RoundedImage
                        key={i}
                        image={ingredient.image_mobile}
                        className={styles.ingredient}
                        zIndex={ingredients.length - i}/>
                ))
            }
            {moreCount > 0 && (
                    <RoundedImage
                        image={ingredients[limit].image_mobile}
                        className={styles.ingredient}>
                        <div className={styles.moreContainer}>
                            <Text digits>{`+${moreCount}`}</Text>
                        </div>
                    </RoundedImage>
            )}
        </div>
    );
};
