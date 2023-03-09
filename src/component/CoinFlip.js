import React, {useState} from 'react';
import './CoinFlip.css';
import Nav from "./Navbar";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const CoinFlip = () => {
    const [result, setResult] = useState(null);
    const [spinning, setSpinning] = useState(false);
    const [gameHistory, setGameHistory] = useState([])

    const dispatch = useDispatch()
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

    const addCount = () => {
        dispatch({type: 'UPDATE_TOTAL', payload: updateMoney});

    }
    const dellCount =()=>{
        dispatch({type: 'DELL_TOTAL',payload:updateMoney})
    }
    const flipCoin = (choice) => {
        setSpinning(true);
        const randomNumber = Math.random();
        const newResult = randomNumber < 0.5 ? 'heads' : 'tails';
        if (newResult === choice) {
            addCount()
            const history = gameHistory
            history.push(`+${updateMoney}$`)
            setGameHistory(history)
            setResult('Ви перемогли!');
        } else {
            dellCount()
            const history = gameHistory
            history.push(`-${updateMoney}$`)
            setGameHistory(history)
            setResult('Ви програли.');
        }
        setTimeout(() => {
            setSpinning(false);
        }, 1000);
    }

    return (
        <>
            <Nav/>
            <div className="coin-flip">
                <h1>Орел чи решка?</h1>
                <button onClick={() => flipCoin('heads')}>Орел</button>
                <button onClick={() => flipCoin('tails')}>Решка</button>
                {result !== null && (
                    <div className='coin-result'>
                       <div className={`coin ${result} ${spinning ? 'spinning' : ''}`}>
                            <span className="coin-text">{result}</span>
                        </div>
                    </div>
                )}

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

export default CoinFlip;