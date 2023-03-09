import { Routes, Route, Link } from 'react-router-dom'
import Home from "./component/Home";
import React from "react";
import Door from "./component/Door";
import Win from "./component/Win";
import Welcome from "./component/Welcome";
import './index.css';
import Count from "./component/Count";
import Loose from "./component/Loose";
import CoinFlip from "./component/CoinFlip";




function App() {

    return (
        <>
            <main>
                <Routes>
                    <Route path='/' element={<Welcome/>}/>
                    <Route path="/home" element={<Home />} />
                    <Route path="/count" element={<Count />} />
                    <Route path="/door" element={<Door />} />
                    <Route path="/coinFlip" element={<CoinFlip />} />
                    <Route path='/win' element={<Win/>} />
                    <Route path='/loose' element={<Loose/>} />

                </Routes>
            </main>
        </>
    )
}

export default App