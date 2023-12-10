import React from "react";
import "./games.css";
import Boardgame from "./Boardgame";
import { Button } from "react-bootstrap";

const Game = () => {
  return (
    <div className="container">
      <h1>TIC TAC TOE</h1>
      <Boardgame />
      <Button className="btn" variant="success">
        Reset
      </Button>
    </div>
  );
};

export default Game;
