import pic from "./assets/pic.svg"
import Login from  "./components/Login.jsx"
import "./app.css"

function App() {
  return (
    <div className="App">
      <img className="img1"src={pic} alt="img"></img>
      <Login/>
      
    </div>
  );
}

export default App;
