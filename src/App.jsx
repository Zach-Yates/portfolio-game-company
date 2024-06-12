import React from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './Pages/GameHome.jsx'
import Game_About from './Pages/About.jsx'
import Game_Contact from './Pages/Contact.jsx'
import Game_Drpop from './Pages/Drpop.jsx'
import Game_Dr from './Pages/Dr.jsx'
import Game_Pj from './Pages/Pj.jsx'
import Game_Combattle from './Pages/Combattle.jsx'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/portfolio-game-company/' exact Component={Home}></Route>
        <Route path='/Game_About' exact Component={Game_About}></Route>
        <Route path='/Game_Contact' exact Component={Game_Contact}></Route>
        <Route path='/Game_Drpop' exact Component={Game_Drpop}></Route>
        <Route path='/Game_Dr' exact Component={Game_Dr}></Route>
        <Route path='/Game_Pj' exact Component={Game_Pj}></Route>
        <Route path='/Game_Combattle' exact Component={Game_Combattle}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
