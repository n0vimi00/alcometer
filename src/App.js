import './App.css';
import {useState} from 'react';

function App() {
const [weight, setWeight] = useState(50);
const [bottles, setBottles] = useState(1);
const [time, setTime] = useState(1);
const [gender, setGender] = useState('male');
const [alevel, setAlevel] = useState(0);

function handleSubmit(e) {
  let result = 0;
  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10
  let gramsleft = grams - (burning * time);
  e.preventDefault();
  if (gender === 'male') {
    result = (gramsleft / (weight * 0.7));
  } else {
    result = (gramsleft / (weight * 0.6));
  }
  setAlevel(result);
}

  return (
    <div className="container-fluid p-4">
      <h3 className="col-lg-4 text-secondary">Calculating alcohol blood level</h3>
      <form onSubmit={handleSubmit}>

      <div className="form-group col-md-3 p-2">
        <label>Weight</label>
        <input className="form-control" type='number' step='1' value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>

      <div className="form-group col-md-3 p-2">
        <label>Bottles</label>
        <input className="form-control" type='number' step='1' value={bottles} onChange={e => setBottles(e.target.value)}></input>
      </div>

      <div className="form-group col-md-3 p-2">
        <label>Time</label>
        <input className="form-control" type='number' step='1' value={time} onChange={e => setTime(e.target.value)}></input>
      </div>

      <div className="form-group p-2">
        <label>Gender:</label>
        <div><label><input type='radio' name='gender' value='male' defaultChecked onChange={e => setGender(e.target.value)}></input>Male</label></div>
        <div><label><input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)}></input>Female</label></div>
      </div>

      <div className="mb-4">
        <output>Your alcohol blood level is: {alevel.toFixed(2)}</output>
      </div>
      <button className="btn btn-secondary">Calculate</button>
      </form>
    </div>
  );
}

export default App;
