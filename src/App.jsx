import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
// import MyProfile from "./components/MyProfile";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      {/* <MyProfile /> */}
      <Home />
      <MyFooter />
    </div>
  );
}

export default App;
