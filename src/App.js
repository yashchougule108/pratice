import pic from "./assets/pic.svg"
import Login from  "./components/LoginForm.jsx"
import "./app.css"

function App() {
  return (
    <div className="app">
      <div className="imagecontainer">
        <img src={pic} alt="pic"></img>
      </div>
      <div className="loginform">
        <Login/>
      </div>

    </div>
  );
}

export default App;
