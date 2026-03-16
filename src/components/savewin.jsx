import { useState } from 'react'


const SaveWin = ({addWin}) => {

    const [currentWin, setCurrentWin] = useState("")

    return <div>

        <input type="text" onChange={(e) => setCurrentWin(e.target.value)}
        placeholder="Your win goes here" />

        <button onClick={(e) => addWin(currentWin)}>Submit Win</button>
    </div>
    
}

export default SaveWin