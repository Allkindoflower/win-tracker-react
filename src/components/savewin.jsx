import { useState } from 'react'


const SaveWin = ({addWin}) => {

    const [currentWin, setCurrentWin] = useState("")


    return <div>

        <input id="main-text-field"value={currentWin} required type="text" 
        onChange={(e) => setCurrentWin(e.target.value)}
        onKeyDown={(e) => {
        if (e.key === "Enter" && currentWin !== "") {
            addWin(currentWin)
            setCurrentWin("")
        }
        }}
        placeholder="Your win goes here. Then hit Enter!" />

        <button id="submit-button" onClick={(e) => 
            {if (currentWin !== "")
            {addWin(currentWin)
             setCurrentWin("")   
            }
            }}>Submit Win</button>

        
    </div>
}

export default SaveWin