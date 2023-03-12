import logo from './logo.svg';
import './App.css';
import {TimeInput} from "./time-input";
import {RangeInput} from "./range-input";

function App() {
  const onFocusHandler = (event) => {
    console.log("hello there you entered :  my name is ", event.target.name);
  }

  const onBlurHandler = (event) => {
    console.log("you left ");
  }

  const onTimeChangeHandler = (val) => {
    alert(val)
  }



  return (
    <div className="App">
      <header className="App-header">
        <RangeInput
            inputClassName="form-control"
          onChange={(e) => console.log(e)}
        />
      </header>



    </div>
  );
}

export default App;
