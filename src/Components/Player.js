import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: '200px', objectFit: 'cover' }}/>
      <Card.Body>
        <Card.Title style={{ color: 'brown' }}>{name}</Card.Title>
        <Card.Text >
          <strong style={{ color: 'brown' }}>Team:</strong> {team}<br />
          <strong style={{ color: 'brown' }}>Nationality:</strong> {nationality}<br />
          <strong style={{ color: 'brown' }}>Jersey Number:</strong> {jerseyNumber}<br />
          <strong style={{ color: 'brown' }}>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/150"
};

export default Player;
