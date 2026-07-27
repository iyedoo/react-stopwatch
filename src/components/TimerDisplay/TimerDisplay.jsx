import './TimerDisplay.css'

function TimerDisplay(props) {
    return (
        <div className='main'>
            <p>{String(Math.floor(props.val / 60 / 100)).padStart(2, '0')}:{String(Math.floor(props.val / 100)).padStart(2, '0')}</p>
            <p className='milli'>.{String(props.val % 100).padStart(2, '0')}</p>
        </div>
    );
}

export default TimerDisplay