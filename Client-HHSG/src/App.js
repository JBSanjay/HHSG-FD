import Login from "./components/Login/Login";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Main/Home";
import DetailPage from "./components/Detail Page/DetailPage";
function App() {
  return (
    // <div className="App">
    // <Login/>

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<DetailPage />} />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
