import React, { ReactElement } from 'react';
import { IngredientType } from 'types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientTab } from '../types';

type BurgerIngredientTabsProps = {
  tabs: IngredientTab[],
  active: IngredientType;
  onChange: (value: IngredientType) => void;
}

export const IngredientTabs = (
  {tabs, active, onChange}: BurgerIngredientTabsProps
): ReactElement => {
  const setValue = (value: string): void => {
    const typedValue = value as IngredientType;
    onChange(typedValue);
  };

  return (
    <div className='flex'>
      {
        tabs.map(tab => (
            <Tab
              key={tab.value}
              value={tab.value}
              active={active === tab.value}
              onClick={setValue}>
              {tab.label}
            </Tab>
        ))
      }
    </div>
  );
};
