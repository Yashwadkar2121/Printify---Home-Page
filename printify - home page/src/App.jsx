import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RouterConfig from "./router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {" "}
        <RouterConfig />
        <Navbar />
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
