import "./App.scss";
import SideNav from "./SideNav";
import NavBar from "./NavBar";
import Settings from "./Settings";
import { useQuery } from "@apollo/client";
import { GET_USERS } from ".";

function App() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <div className="App-container">
      <NavBar></NavBar>
      <div className="inner-container">
        <SideNav></SideNav>
        <span></span>
        <Settings></Settings>
      </div>
    </div>
  );
}

export default App;
