import React from "react";
import { Link } from "react-router-dom";
const DetailsUser = ({ users, match }) => {
  const userLink = users.find((user) => user.id == match.params.userId);
  return (
    <div>
      <div className="card">
        <h5 className="card-title">{userLink.address}</h5>
        <p className="card-text">{userLink.website}</p>
        <p className="card-text">{userLink.company.name}</p>
        <Link to={"/"}>
          <button className="btn btn-primary">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsUser;
