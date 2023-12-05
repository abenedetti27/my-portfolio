import './App.css';
import { NavBar } from './components/NavBar';
import Header from './components/Header';
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
