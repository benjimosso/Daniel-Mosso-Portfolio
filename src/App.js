import  footer  from "./components/footer";
import  NavBar  from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
      </div>
    <Footer />
    </Router>
  );
}

export default App;
