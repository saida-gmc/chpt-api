import "./App.css";
import DetailsUser from "./Components/DetailsUser";
import NavHeader from "./Components/NavHeader";
import UserList from "./Components/UserList";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <UserList />
      <DetailsUser />
    </div>
  );
}

export default App;
