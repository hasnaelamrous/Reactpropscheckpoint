import React from 'react';
import Player from './Player';
import players from '../Players';
import { Container, Row, Col } from 'react-bootstrap';

const PlayersList = () => {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} md={6} lg={4} className="d-flex justify-content-center mb-4">
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;

