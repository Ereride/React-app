import logo from './logo.svg';
import auto from './auto.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={auto} className="App-logo" alt="logo" />
        <p>
          Testi onnistuuko?
        </p>
        <p>
          Ja kyllä tämä onnistuu! Ja auton kuvakin lisättiin 
        </p>
  
      </header>
    </div>
  );
}

export default App;
