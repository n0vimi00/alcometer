import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <label>Weight</label>
        <input type='number' step='1'></input>
      </div>
      <div>
        <label>Bottles</label>
        <input type='number' step='1'></input>
      </div>
      <div>
        <label>Time</label>
      </div>
      <div>
        <label>Gender</label>
      </div>

      <button>Calculate</button>

    </div>
  );
}

export default App;
