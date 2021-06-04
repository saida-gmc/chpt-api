import "./App.css";
import UserList from "./Components/UserList";
import { Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import DetailsUser from "./Components/DetailsUser";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.log("err");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
    
      <Route
        exact
        path="/"
        render={() => <UserList users={users} />}
      />
      <Route
        path="/details/:userId"
        render={(props) => (
          <DetailsUser {...props} users={users} />
        )}
      />
      
    </div>
  );
}
