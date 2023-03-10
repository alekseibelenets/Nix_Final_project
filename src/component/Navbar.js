import React from "react";
import {useDispatch, useSelector} from "react-redux";
import './Navbar.css'
import {useNavigate} from "react-router-dom";

const Nav =()=>{
    const money = useSelector(state => state.money)
    const total = useSelector(state => state.total)
    const name = useSelector(state => state.name)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const dellCount = () => {
        dispatch({type: 'DELL'});
    }
    const handlereset=()=>{
        dellCount()
        navigate('/')
    }
    return(
        <div className='header'>
            <p>{name}</p>
            <p>Ваша ставка {money.toFixed(2)}$</p>
            <p>Ваш Балланс {total.toFixed(2)}$</p>
            <button className='btn' onClick={handlereset}>Заново</button>
        </div>
    )
}
export default Nav