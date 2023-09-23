import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Pr5 = () => {
    const [second, setSecond] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isStartActive, setIsStartActive] = useState(false);

    useEffect(() => {
        let interval;

        if (isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else {
            clearInterval(interval);
            setIsActive(false)
        }

        return () => clearInterval(interval);
    }, [isActive, timer]);

    const startTimer = () => {
        setIsActive(true);
        setIsStartActive(true)
        setTimer(second)
    };

    const cancelTimer = () => {
        setIsActive(false)
        setIsStartActive(false)
    }

    return (
        <div className='container py-5'>
            <div className="col-4">
                <input className='form-control' type="number" placeholder='seconds' value={second} onChange={(e) => setSecond(e.target.value)} />
                <button className='btn btn-success mt-3' onClick={startTimer} disabled={isStartActive}>start</button>
                {
                    isActive ?
                        <button className='btn btn-warning mt-3' onClick={() => setIsActive(false)} disabled={isActive ? false : true}>pause</button>
                        :
                        <button className='btn btn-warning mt-3' onClick={() => setIsActive(true)}>play</button>
                }
                <button className='btn btn-danger mt-3' onClick={cancelTimer} disabled={isActive ? false : true}>cancel</button>

                <div>
                    <h1 className='' id='count'>{timer}</h1>
                </div>
            </div>
        </div>
    )
}

export default Pr5