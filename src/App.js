import Login from "./components/Login/Login";
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Main/Home";
function App() {
  return (
    // <div className="App">
        // <Login/>

      <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
     </Router>
    // </div>
  );
}

export default App;
