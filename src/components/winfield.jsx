import { use, useState } from 'react'



const WinField = ({ wins, deleteWin, editWin }) => {
  const [editingIndex, setEditingIndex] = useState(null)
  const [editText, setEditText] = useState("")
  return <ul>
    {wins.map((win, index) => (
      <li key={index}>
        {editingIndex === index 
          ? <>
              <input 
                type="text" 
                required
                value={editText} 
                onChange={(e) => setEditText(e.target.value)} 
              />
              <button id="save-button" onClick={() => {
                editWin(index, editText)
                setEditingIndex(null)
              }}>Save</button>
            </>
          : <>
              <span>{win}</span>
              <button id="edit-button"onClick={() => {
                setEditingIndex(index)
                setEditText(win)
              }}>Edit</button>
              <button id="delete-button"onClick={() => deleteWin(index)}>Delete</button>
            </>
        }
      </li>
    ))}
  </ul>
}

export default WinField