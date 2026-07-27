import './Lap.css'

function Lap(props) {
    return (
        <div className="lap">
            <p>Lap {props.num}</p>
            <p>{String(Math.floor(props.val / 60 / 100)).padStart(2, '0')}:{String(Math.floor(props.val / 100)).padStart(2, '0')}.{String(props.val % 100).padStart(2, '0')}</p>
        </div>
    );
}

export default Lap