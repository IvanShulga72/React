import './App.css';
import StopWatch from './Components/StopWatch/StopWatch.jsx';
import Timer from './Components/Timer/Timer.jsx';
import ControlButtons from './Components/ControlButtons/ControlButtons.jsx';

function App() {
  return (
      <div className="App">
          <div>StopWatch</div>
        <StopWatch />
      </div>
  );
}

export default App;