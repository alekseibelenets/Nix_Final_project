import { useNavigate} from "react-router-dom";
import React from "react";
import './Home.css'
import Nav from "./Navbar";


const Home = () => {
    const navigate = useNavigate();
    const navCount =()=>{
        navigate('/count')
    }
    const navDoor =()=>{
        navigate('/door')
    }
    const navCoinFlip =()=>{
        navigate('/coinFlip')
    }
    return (
        <>
            <Nav/>
            <div className='home-text'>
                Доступні ігри
            </div>
            <div className='home'>
                <div className='block'>
                    <p>ВГАДАЙ ЧИСЛО</p>
                    <button className='home-btn-one' onClick={navCount}></button>
                </div>
                <div className='block'>
                    <p>ВГАДАЙ ДВЕРІ</p>
                    <button className='home-btn-two' onClick={navDoor}></button>
                </div>
                <div className='block'>
                    <p>ОРЕЛ ЧИ РЕШКА</p>
                    <button className='home-btn-three' onClick={navCoinFlip}></button>
                </div>

            </div>
        </>
    )
}
export default Home;