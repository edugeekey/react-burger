import { DATA_TEST } from '../../src/utils/dataTest';
import { apiUrl, dataSelector } from './utils';

function addBun(): void {
  cy
      .get(dataSelector(DATA_TEST.Ingredients))
      .contains('Булка')
      .trigger('dragstart');

  cy
      .get(dataSelector(DATA_TEST.DragPlaceholder))
      .trigger('drop');
}

function addIngredient(): void {
  cy
      .get(dataSelector(DATA_TEST.Ingredients))
      .contains('Котлета')
      .trigger('dragstart');

  cy
      .get(dataSelector(DATA_TEST.DragPlaceholder))
      .trigger('drop');
}

function closeModal(): void {
  cy
      .get(dataSelector(DATA_TEST.Modal.Overlay))
      .trigger('click', {force: true});

  cy
      .get(dataSelector(DATA_TEST.Modal.Popup))
      .should('not.exist');
}

describe('Burger constructor', () => {
  beforeEach(() => {
    cy.intercept('GET', apiUrl('/ingredients'), { fixture: 'ingredients.json' });
  });

  it('should drag bun', () => {
    cy.visit('/');

    addBun();

    cy
        .get(dataSelector(DATA_TEST.Constructor.Bun + 'top'))
        .contains('Булка (верх)');

    cy
        .get(dataSelector(DATA_TEST.Constructor.Bun + 'bottom'))
        .contains('Булка (низ)');

  });

  it('should drag ingredient', () => {
    cy.visit('/');

    addIngredient();

    cy
        .get(dataSelector(DATA_TEST.Constructor.Ingredients))
        .contains('Котлета');

  });

  it('should ingredient modal was opened and closed correctly', () => {
    cy.visit('/');

    cy
        .get(dataSelector(DATA_TEST.Ingredients))
        .contains('Булка')
        .trigger('click');


    cy
        .get(dataSelector(DATA_TEST.Modal.Popup))
        .contains('Булка');

    closeModal();
  });

  it('should make order', () => {
    window.localStorage.setItem('refreshToken', 'refreshToken');
    cy.setCookie('accessToken', 'Bearer accessToken');
    cy.intercept('GET', apiUrl('/auth/user'), { fixture: 'user.json' });
    cy.intercept('POST', apiUrl('/orders'), { fixture: 'order.json' }).as('postOrder');

    cy.visit('/');

    addBun();

    addIngredient();

    cy
        .get(dataSelector(DATA_TEST.Constructor.Footer))
        .contains('Оформить заказ')
        .trigger('click');

    cy
        .get(dataSelector(DATA_TEST.Modal.Popup))
        .contains('123');

    closeModal();

    cy
        .get(dataSelector(DATA_TEST.Constructor.Bun + 'top'))
        .contains('Здесь должна быть ваша булочка');

    cy
        .get(dataSelector(DATA_TEST.Constructor.Bun + 'bottom'))
        .contains('Здесь должна быть ваша булочка');

    cy
        .get(dataSelector(DATA_TEST.DragPlaceholder))
        .contains('Перетащите сюда ингредиент');
  });
});
