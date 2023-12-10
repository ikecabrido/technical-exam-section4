import React from "react";
import Piece from "./Piece";
import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import "./Boardgame.css";

const player1 = "X";
const player2 = "O";
const Boardgame = () => {
  const [piece, setPiece] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player1);

  const handlePieceClick = (index) => {
    console.log(index);
  };
  return (
    <Container className="boardContainer">
      <div className="scoreboard">
        <Card className="score">X = 0</Card>
        <Card className="score">O = 0</Card>
      </div>
      <Container className="board">
        <Piece piece={piece} onPieceClick={handlePieceClick} />
      </Container>
    </Container>
  );
};

export default Boardgame;
