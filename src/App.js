import './App.css';
import MainData from './components/MainData';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="main-div">
        <MainData />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
