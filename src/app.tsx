import React, { ReactElement } from 'react'
import { AppHeader } from 'components'
import { AppMain } from './ui'
import { ConstructorPage } from './pages/constructor-page'
import './app.css'

export const App = (): ReactElement => {
  return (
    <>
      <AppHeader />
      <AppMain>
        <ConstructorPage />
      </AppMain>
    </>
  )
}
