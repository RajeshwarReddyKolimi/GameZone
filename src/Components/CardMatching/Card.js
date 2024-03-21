import React, { useState, useEffect } from "react";
import "./style.css";
import {
    IoIosAmericanFootballSharp,
    IoIosAmericanFootball,
    IoIosFootball,
} from "react-icons/io";
import {
    BiSolidBall,
    BiSolidTennisBall,
    BiFootball,
    BiSolidBowlingBall,
    BiSolidCricketBall,
} from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import {
    GiVolleyballBall,
    GiShuttlecock,
    GiBasketballBall,
    GiTennisBall,
} from "react-icons/gi";
import { CgShapeRhombus } from "react-icons/cg";
export default function (props) {
    const [showId, setShowId] = useState(false);
    const { id, value, handleClick, status, disabled, matchedStatus } = props;
    const arr = [];
    return (
        <div
            className={`card ${matchedStatus && "matched"} ${
                status && "card-rotate"
            }`}
            onClick={() => {
                if (!disabled && !status) handleClick(id, value);
            }}
        >
            <div className="card-front">
                {/* <CgShapeRhombus className="card-design" /> */}
            </div>
            <div className="card-back">
                <div className="shine"></div>
                {value === 1 ? (
                    <IoIosFootball
                        className="icon-1"
                        style={{ color: "black" }}
                    />
                ) : value === 2 ? (
                    <GiTennisBall
                        className="icon-1"
                        style={{ color: "#DDEB14" }}
                    />
                ) : value === 3 ? (
                    <GiVolleyballBall
                        className="icon-1"
                        style={{ color: "white" }}
                    />
                ) : value === 4 ? (
                    <BiSolidCricketBall
                        className="icon-1"
                        style={{ color: "#830F10" }}
                    />
                ) : value === 5 ? (
                    <IoIosAmericanFootball
                        className="icon-1"
                        style={{ color: "#B54F45" }}
                    />
                ) : value === 6 ? (
                    <GiBasketballBall
                        className="icon-1"
                        style={{ color: "#FC7400" }}
                    />
                ) : value === 7 ? (
                    <GiShuttlecock
                        className="icon-1"
                        style={{ color: "white" }}
                    />
                ) : (
                    <BiSolidBowlingBall
                        className="icon-1"
                        style={{ color: "black" }}
                    />
                )}
            </div>
        </div>
    );
}
