import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Nav from "./Navbar";
import './Count.css'

const GuessNumber = () => {
    const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [gameHistory,setGameHistory]=useState([])
    const dispatch = useDispatch()

    const money = useSelector(state => state.money)
    const total = useSelector(state => state.total)
    const updateMoney = money*0.15
    const navigate = useNavigate();
    if(total>(2*money)){
        navigate('/win')
    }
    if(total<=0){
        navigate('/loose')
    }
    const addCount = () => {
        dispatch({type: 'UPDATE_TOTAL',payload: updateMoney});
    }
    const dellCount =()=>{
        dispatch({type: 'DELL_TOTAL',payload:updateMoney})
    }
    const handleGuess = (e) => {
        e.preventDefault();

        if (parseInt(guess) === number) {
            setMessage(`Вітаю, число ${number} вгадано!`);
            setNumber(Math.floor(Math.random() * 10) + 1);
            addCount()
            const history=gameHistory
            history.push(`+${updateMoney}$`)
            setGameHistory(history)
        } else if (parseInt(guess) < number) {
            setMessage('Загадане число більше!');
            dellCount()
            const history = gameHistory
            history.push(`-${updateMoney}$`)
            setGameHistory(history)
        } else if (parseInt(guess) > number) {
            setMessage('Загадане число менше!');
            dellCount()
            const history = gameHistory
            history.push(`-${updateMoney}$`)
            setGameHistory(history)
        }

        setGuess('');
    };

    return (
        <>
            <Nav/>
        <div className='count'>
            <h1>ВГАДАЙ ЧИСЛО від 1 до 10</h1>
            <form className='count-form' onSubmit={handleGuess}>
                <input
                    type="number"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}

                />
                <button type="submit">Перевірити</button>
            </form>
            <p>{message}</p>
            <div className='Result'>
                <ul> Результати гри:
                    {gameHistory.map((game)=>{
                        return <li>{game}</li>
                    })}
                </ul>
            </div>
        </div>
            </>
    );
};

export default GuessNumber;