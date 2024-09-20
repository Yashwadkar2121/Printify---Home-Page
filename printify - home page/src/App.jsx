import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RouterConfig from "./Router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {" "}
        <Navbar />
        <RouterConfig />
        <Footer />
      </Router>
    </>
  );
}

export default App;
