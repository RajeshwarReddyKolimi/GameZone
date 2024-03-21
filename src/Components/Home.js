import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="dashboard">
            <h2>Lets Play</h2>
            <div className="games-container">
                <Link to="/tic-tac-toe" className="game-link">
                    <img
                        src="/tic-tac-toe.png"
                        alt="ttt"
                        className="game-image"
                    />
                    <div className="game-name">Tic Tac Toe</div>
                </Link>
                <Link to="/card-matching" className="game-link">
                    <img
                        src="/card-matching.png"
                        alt="cm"
                        className="game-image"
                    />
                    <div className="game-name">Card Matching</div>
                </Link>
            </div>
        </div>
    );
}
