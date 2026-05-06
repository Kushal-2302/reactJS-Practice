import React from 'react'
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import Homepage from './Homepage'
import Aboutpage from './Aboutpage'
import Contactpage from './Contactpage'
import Navbar from './Navbar'

const MainApp = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route element={<Homepage/>} path='/'/>
                    <Route element={<Aboutpage/>} path='/about'/>
                    <Route element={<Contactpage/>} path='/contact'/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainApp
