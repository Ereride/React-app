
import auto from './auto.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Minnan testi, onnistuuko?
        </p>
        <img src={auto} className="App-auto" alt="auto" />
        <p>
          Ja kyllä tämä onnistuu! Ja auton kuvakin lisättiin!
        </p>
      </header>
    </div>
  );
}

export default App;
