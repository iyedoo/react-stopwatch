import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faArrowRotateLeft, faFlag } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';

import './App.css';

import Button from './components/Button/Button';
import TimerDisplay from './components/TimerDisplay/TimerDisplay';
import Lap from './components/Lap/Lap'

function App() {
  
  const [sec, setSec] = useState(0);
  const [run, toggleRun] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
      
    if (run) {
      interval = setInterval(() => {
        setSec((sec) => sec + 1);
      }, 10);
    }

    return () => clearInterval(interval);

  }, [run]);

  return (
    <>
      <TimerDisplay val={sec}></TimerDisplay>
      <div className="buttons">
        <Button onClick={() => toggleRun((run) => !run)}><FontAwesomeIcon icon={run ? faPause : faPlay} /></Button>
        <Button onClick={() => setLaps((laps) => [...laps, sec])} disabled={!run}><FontAwesomeIcon icon={faFlag} /></Button>
        <Button
          onClick={
            () => {
              setSec(0);
              toggleRun(false);
              setLaps([]);
            }
          }
          disabled={sec == 0}
        >
          <FontAwesomeIcon icon={faArrowRotateLeft} />
        </Button>
      </div>
      <div className="laps">
        {
          laps.map((lap, idx) => (
            <>
              <Lap num={idx + 1} val={lap} />
              <div className="sep"></div>
            </>
          ))
        }
      </div>
    </>
  )

}

export default App
