import React from 'react'
import { UserProvider } from './UserProvider'
import TopNav from './TopNav'
import Page from './Page'


const Main = () => {
  return (
    <div>
            <UserProvider>
                <TopNav/>
                <Page/>
            </UserProvider>
    </div>
  )
}

export default Main
