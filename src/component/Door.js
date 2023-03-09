import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import Nav from "./Navbar";
import './Door.css'

function Door() {
    const [selectedDoor, setSelectedDoor] = useState(null);
    const [winningDoor, setWinningDoor] = useState(Math.floor(Math.random() * 3) + 1);
    const [gameOver, setGameOver] = useState(false);
    const [gameHistory, setGameHistory] = useState([])

    const total = useSelector(state => state.total)
    const money = useSelector(state => state.money)
    const updateMoney = money*0.15
    const navigate = useNavigate();
    if (total >(2*money)) {
        navigate('/win')
    }
    if(total<=0){
        navigate('/loose')
    }

    const dispatch = useDispatch()

    const addCount = () => {
        dispatch({type: 'UPDATE_TOTAL', payload: updateMoney});

    }
    const dellCount =()=>{
        dispatch({type: 'DELL_TOTAL',payload:updateMoney})
    }
    const selectDoor = (door) => {
        if (!gameOver) {
            setSelectedDoor(door);
            setGameOver(true);
            if (door === winningDoor) {
                addCount()
                const history = gameHistory
                history.push(`+${updateMoney}$`)
                setGameHistory(history)
            }
        }
    };


    const resetGame = () => {
        if (selectedDoor !== winningDoor) {
            dellCount()
            const history = gameHistory
            history.push(`-${updateMoney}$`)
            setGameHistory(history)
        }
        setSelectedDoor(null);
        setWinningDoor(Math.floor(Math.random() * 3) + 1);
        setGameOver(false);


    };

    return (
        <>
            <Nav/>
            <div className="door-container">
                <h1 className="title">ВГАДАЙ ДВЕРІ!</h1>
                <div className='a'>

                    {gameOver ? (
                        <div className="game-over-container">
                            {selectedDoor === winningDoor ? (
                                <p className="result-text">ВІТАЮ,ТИ ПЕРЕМІГ!</p>
                            ) : (
                                <p className="result-text">ТИ ПРОГРАВ. СПРОБУЙ ЩЕ.</p>
                            )}
                            <button className="reset-button" onClick={resetGame}>Почати заново</button>
                        </div>
                        ) : (
                        <div className="doors-container">
                        <p className="instruction-text">ОБЕРИ ДВЕРІ:</p>
                        <div className="doors">
                        <button className="door-button" onClick={() => selectDoor(1)}></button>
                        <button className="door-button" onClick={() => selectDoor(2)}></button>
                        <button className="door-button" onClick={() => selectDoor(3)}></button>
                        </div>
                        </div>
                        )}
                    <div className='result-container'>
                        Результати гри
                        <ul className='result-list'>
                            {gameHistory.map((game) => {
                                return <li className='result-item'>
                                    {game}</li>
                            })}
                        </ul>
                    </div>
                </div>
                </div>
            </>
            );
            }

            export default Door;

