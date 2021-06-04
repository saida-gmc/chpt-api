import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserCard = ({ user }) => {
  return (
    <div>
      <Card className="card-User">
        <Card.Body>
          <img src="/userlogo.png" width="35%" />

          <Card.Title className="cardtitle" tag="h5">
            {user.name}
          </Card.Title>

          <Card.Text tag="h6" className="mb-2text-muted">
            User name : {user.username}
          </Card.Text>
        </Card.Body>
        <Card.Text> Email: {user.email}</Card.Text>
        <Card.Text>Adress: {user.address.city}</Card.Text>

        <Link to={`/details/${user.id}`}>
          <Button className="detailsbutton"> More details</Button>
        </Link>
      </Card>
    </div>
  );
};
export default UserCard;
