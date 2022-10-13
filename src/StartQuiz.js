import React from "react"

export default function Startquiz(props) {
    return (
        <div className="quiz-screen">
            <h1>quizzical</h1>

            <button onClick={props.handleChange}>Start quiz</button>
        </div>
    )
}