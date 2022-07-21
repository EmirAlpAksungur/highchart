import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './header'
import RouterApp from './router/routerApp'

const app = () => {
  return (
     <>
      <Router>
         <Header/>
         <RouterApp/>
      </Router>
     </>
    
  )
}

export default app