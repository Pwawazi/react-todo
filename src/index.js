import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Routes } from "react-router-dom"

//component file
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
    <React.StrictMode>
        <Routes>
            <TodoContainer />
        </Routes>
    </React.StrictMode>,
    document.getElementById("root")
)