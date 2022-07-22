import {React} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './header'
import Draggable from './draggable'
import RouterApp from './router/routerApp'


const App = () => {

  return (
     <>
      <Router>
         <Header/>
         <RouterApp/>
         <Draggable/>
      </Router>
     </>
    
  )
}

export default App