import { useState } from 'react'


const SaveWin = ({addWin}) => {

    const [currentWin, setCurrentWin] = useState("")


    return <div id="save-win-con">

        <input autoFocus value={currentWin} required type="text" 
        onChange={(e) => setCurrentWin(e.target.value)}
        onKeyDown={(e) => {
        if (e.key === "Enter" && currentWin !== "") {
            addWin(currentWin)
            setCurrentWin("")
        }
        }}
        placeholder="Your win goes here. Then hit Enter!" />

        <button onClick={(e) => 
            {if (currentWin !== "")
            {addWin(currentWin)
             setCurrentWin("")   
            }
            }}>Submit Win</button>

        
    </div>
}

export default SaveWin