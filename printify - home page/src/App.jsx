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
        <div className="fixed top-0 left-0  w-full z-50">
          <Navbar />
        </div>
        <RouterConfig />
        <Footer />
      </Router>
    </>
  );
}

export default App;
