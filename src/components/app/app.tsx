import React, { ReactElement } from 'react'
import { AppHeader } from 'components'
import { AppMain, ModalProvider } from 'ui'
import { ConstructorPage } from 'pages/constructor-page';
import { store } from 'store';
import { Provider } from 'react-redux';

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <AppHeader />
        <AppMain>
          <ConstructorPage />
        </AppMain>
      </ModalProvider>
    </Provider>

  )
}
