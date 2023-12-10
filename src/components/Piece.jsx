import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const Piece = ({ piece, onPieceClick }) => {
  return (
    <div>
      <Row>
        <Col>
          <Card className="piece" onClick={() => onPieceClick[0]}>
            {piece[0]}
          </Card>
        </Col>
        <Col>
          <Card className="piece">{piece[1]}</Card>
        </Col>
        <Col>
          <Card className="piece">{piece[2]}</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="piece">{piece[3]}</Card>
        </Col>
        <Col>
          <Card className="piece">{piece[4]}</Card>
        </Col>
        <Col>
          <Card className="piece">{piece[5]}</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="piece">{piece[6]}</Card>
        </Col>
        <Col>
          <Card className="piece">{piece[7]}</Card>
        </Col>
        <Col>
          <Card className="piece">{piece[8]}</Card>
        </Col>
      </Row>
    </div>
  );
};

export default Piece;
