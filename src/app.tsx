import React, { ReactElement } from 'react'
import { AppHeader } from 'components'
import { AppMain, ModalProvider } from './ui'
import { ConstructorPage } from './pages/constructor-page';
import './app.css'

export const App = (): ReactElement => {
  return (
    <ModalProvider>
      <AppHeader />
      <AppMain>
        <ConstructorPage />
      </AppMain>
    </ModalProvider>
  )
}
