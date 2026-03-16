import { useState } from 'react'
import './App.css'
import Explanation from './components/explanation'
import SaveWin from './components/savewin'
import Title from './components/title'
import WinField from './components/winfield'


const App = () => {

const [wins, setWins] = useState([])

const addWin = (currentWin) => {
  setWins([...wins, currentWin])
}

const deleteWin = (index) => {
  setWins(wins.filter((win, i) => i !== index))
}

  return <div>
  <Title />
  <Explanation /> 
  <SaveWin addWin={addWin}/>
  <WinField wins={wins} deleteWin={deleteWin}/>
  </div>
}

export default App
