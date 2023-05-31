import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { Ingredient, IngredientType } from 'types';
import { IngredientTabs } from './ingredient-tabs';
import { IngredientsGroup } from './ingredients-group';
import { TABS } from './const';
import { IngredientList } from './ingredient-list';
import { Text } from 'ui';
import { useIngredientsData } from 'store';
import styles from './burger-ingredients.module.css';

type IngredientsDict = Record<IngredientType, Ingredient[]>;

export const BurgerIngredients = (): ReactElement => {
  const [active, setActive] = useState<IngredientType>('bun');

  const { ingredients } = useIngredientsData();

  const groupedIngredients = useMemo(() => {
    return ingredients.reduce((acc, item) => {
      const groupedItems = (acc[item.type] ?? []);
      groupedItems.push(item);
      acc[item.type] = groupedItems;
      return acc;
    }, {} as IngredientsDict);
  }, [ingredients]);

  useEffect(() => {
    const element = document.getElementById(active);
    element?.scrollIntoView({ behavior: 'smooth'});
  }, [active]);

  return (
    <section className='scroll-parent mt-10 pb-10 mr-10'>
      <Text tag='h1' className='mb-5' size='l'>Соберите бургер</Text>
      <IngredientTabs tabs={TABS} active={active} onChange={setActive} />
      <div className={styles.container}>
        {
          TABS.map(({value, label}) => (
            <IngredientsGroup id={value} key={value} title={label}>
              <IngredientList ingredients={groupedIngredients[value]} />
            </IngredientsGroup>
          ))
        }
      </div>
    </section>
  );
};
