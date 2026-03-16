const WinField = ({ wins, deleteWin }) => {
    return <ul>
       {wins.map((win, index) => 
        (
            <li key={index}>
            {win} <button onClick={() => deleteWin(index)}> Delete </button></li>
        ))}
        </ul>
}

export default WinField