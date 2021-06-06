import React from "react";
import { Card } from "react-bootstrap";
import "./UserCard.css";
const UserCard = ({ user }) => {
  return (
    <div>
      <Card className="card" style={{ width: "18rem" }}>
        <span className="logo">{user.name[0]}</span>
        <Card.Body>
          <Card.Title className="name">{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted name">
            {user.username}
          </Card.Subtitle>
          <i className="fas fa-map-marker-alt">
            <p className="text">
              {user.address.city}
              <br />
              {user.address.street}
            </p>
          </i>
          <br />
          <i className="fas fa-phone">
            <p className="text">{user.phone}</p>
          </i>
          <br />
          <i className="fas fa-at">
            <p className="text">{user.email}</p>
          </i>
          <i className="fas fa-building">
            <p className="text">
              {user.company.name}
              <br />
              {user.company.catchPhrase}
            </p>
          </i>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
