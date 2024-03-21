import React from "react";

import "./App.css";
import Home from "./Components/Home";
import Board from "./Components/TicTacToe/Board";
import CardContainer from "./Components/CardMatching/CardContainer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/tic-tac-toe" element={<Board />} />
                <Route path="/card-matching" element={<CardContainer />} />
            </Routes>
        </Router>
    );
}

export default App;
