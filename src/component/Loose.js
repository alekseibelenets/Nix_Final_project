import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import './Win.css'
const Loose =()=>{
    const dispatch = useDispatch()


    const dellCount = () => {
        dispatch({type: 'DELL'});
    }
    const handlereset=()=>{
        dellCount()
        navigate('/')
    }
    const navigate = useNavigate();
    return(
        <div className='win'>
            <p>НАЖАЛЬ ВИ ПРОГРАЛИ</p>
            <button className='btn-win' onClick={handlereset}>Заново</button>
        </div>
    )
}
export default Loose