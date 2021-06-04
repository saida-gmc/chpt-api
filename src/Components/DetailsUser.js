import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const DetailsUser = (props) => {
  const userFound = props.users.find(
    (user) => user.id == props.match.params.userId
  );
  return (
    <div className="App">
      {console.log(userFound)}

      <Card className="card-details">
        <Card.Text> {userFound && userFound.username}</Card.Text>

        <Card.Text>Phone Number : {userFound && userFound.phone}</Card.Text>
        <Card.Text>website: {userFound && userFound.website}</Card.Text>
        <Card.Text>Company: {userFound && userFound.company.name}</Card.Text>
        <Card.Text>
          {" "}
          {userFound && userFound.company.catchPhrase} ,
          {userFound && userFound.company.bs}
        </Card.Text>

        <Link to={`/`}>
          <Button className="detailsbutton"> Back to users list</Button>
        </Link>
      </Card>
    </div>
  );
};
export default DetailsUser;
