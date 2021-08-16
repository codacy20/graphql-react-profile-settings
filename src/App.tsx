import "./App.scss";
import SideNav from "./SideNav";
import NavBar from "./NavBar";
import Settings from "./Settings";

function App() {
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
