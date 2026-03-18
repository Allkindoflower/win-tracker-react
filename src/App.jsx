import { useState } from 'react'
import './App.css'
import Explanation from './components/explanation'
import SaveWin from './components/savewin'
import Title from './components/title'
import WinField from './components/winfield'


const App = () => {

const [wins, setWins] = useState([])

const addWin = (currentWin) => {
  setWins([currentWin, ...wins])
}

const deleteWin = (index) => {
  setWins(wins.filter((win, i) => i !== index))
}

const editWin = (index, newText) => {
  setWins(wins.map((win, i) => i === index ? newText : win))
}

  return <div>
  <Title />
  <Explanation /> 
  <SaveWin addWin={addWin}/>
  <WinField wins={wins} deleteWin={deleteWin} editWin={editWin}/>
  </div>
}

export default App
