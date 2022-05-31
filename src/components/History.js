import React from 'react'

function History({ history, jump }) {
    console.log(history)
    return (
        <div className="history">
            <h4>History</h4>
            <ul>
                {history.map((item, index) => {
                    const result = index ? "Go to move # " + index : "Go to game start";
                    return (
                        <li key={index}>
                            <button onClick={() => jump(index)}> {result} </button>
                        </li>
                    )
                })
                }
            </ul>

        </div>
    )
}

export default History