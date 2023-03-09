import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import './Win.css'
const Win =()=>{
    const dispatch = useDispatch()
    const total = useSelector(state => state.total)
    const navigate = useNavigate();

    const dellCount = () => {
        dispatch({type: 'DELL'});
    }
    const handlereset=()=>{
            dellCount()
        navigate('/')
    }

    return(
        <div className='win'>
            <p>ВІТАЮ ТИ ПЕРЕМОЖЕЦЬ</p>
            <p>Ваши виграш {total}$</p>
            <button className='btn-win' onClick={handlereset}>Заново</button>
        </div>
    )
}
export default Win