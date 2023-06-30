import React, { ReactElement, useMemo, useRef, useState } from 'react';
import { Ingredient, IngredientType } from 'types';
import { IngredientTabs } from './ingredient-tabs';
import { IngredientsGroup } from './ingredients-group';
import { TABS } from './const';
import { IngredientList } from './ingredient-list';
import { Text } from 'ui';
import { useAppSelector } from 'store';
import { ingredientsSelector } from 'store/ingredients';
import styles from './burger-ingredients.module.css';

type IngredientsDict = Record<IngredientType, Ingredient[]>;

export const BurgerIngredients = (): ReactElement => {
  const [active, setActive] = useState<IngredientType>('bun');

  const tabsContentRef = useRef<Record<IngredientType, HTMLDivElement | null>>(
    {'bun': null, 'sauce': null, 'main': null}
  );

  const scrollContainerY = useRef<number | null>(null);

  const ingredients = useAppSelector(ingredientsSelector);

  const groupedIngredients = useMemo(() => {
    return ingredients.reduce((acc, item) => {
      const groupedItems = (acc[item.type] ?? []);
      groupedItems.push(item);
      acc[item.type] = groupedItems;
      return acc;
    }, {} as IngredientsDict);
  }, [ingredients]);

  const handleScroll = (): void => {
    if (tabsContentRef.current) {
      const tabsContent = tabsContentRef.current;
      let tab: IngredientType = 'bun';
      let minDiff = Number.MAX_SAFE_INTEGER;
      Object.keys(tabsContent).forEach((key: IngredientType) => {
        const element = tabsContent[key];
        if (element) {
          const elementY = element.getBoundingClientRect().y;
          const diff = Math.abs(elementY - scrollContainerY.current);
          if (diff <= minDiff) {
            [tab, minDiff] = [key, diff];
          }
        }
      });
      setActive(tab);
    }
  };

  const handleTabChange = (value: IngredientType): void => {
    setActive(value);
    tabsContentRef.current?.[value]?.scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <section className='scroll-parent mt-10 pb-10 mr-10'>
      <Text tag='h1' className='mb-5' size='l'>Соберите бургер</Text>
      <IngredientTabs tabs={TABS} active={active} onChange={handleTabChange} />
      <div
        className={`${styles.container} custom-scroll`}
        ref={(el): void => {
          if (el) {
            scrollContainerY.current = el?.getBoundingClientRect()?.y;
          }
        }}
        onScroll={handleScroll}>
        {
          TABS.map(({value, label}) => (
            <IngredientsGroup
              key={value}
              title={label}
              ref={(el): void => {
                if (tabsContentRef.current) {
                  tabsContentRef.current[value] = el;
                }
              }}>
              {groupedIngredients[value] && <IngredientList ingredients={groupedIngredients[value]} />}
            </IngredientsGroup>
          ))
        }
      </div>
    </section>
  );
};
