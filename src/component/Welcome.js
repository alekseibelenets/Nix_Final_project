import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useState} from 'react';
import './Welcome.css'


const Welcome = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [money, setMoney] = useState('')
    const [name, setName]=useState('')
    const [isValid, setIsValid] = useState(false);
    const addName = () => {
        dispatch({type: 'ADD_MONEY', payload: {money:+money,name:name}})
    }
    const handleIncrement = () => {
        addName()
        navigate('/home')
    }
    function validateForm() {
        setIsValid(name.length > 0 && money.length > 0);
    }
    return (
        <form className='form'>
            <div className="form-group">
                <label htmlFor="name">Ім'я:</label>
                <input type="text" placeholder='імя'
                       onChange={(event) => setName(event.target.value)}
                       onBlur={validateForm}/>
                <label htmlFor="count">Початковий депозит:</label>
                <input type="number" value={money} placeholder='деп'
                       onChange={(event) => setMoney(event.target.value)}
                       onBlur={validateForm}/>
                <button className="form-sub" disabled={!isValid} onClick={handleIncrement}>ПОЧАТИ</button>
            </div>
        </form>

    )
}
export default Welcome;