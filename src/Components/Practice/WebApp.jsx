import React from 'react'
import './webapp.css'
import Header from './Header'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Mainsection from './Mainsection'
import Footer from './Footer'

const WebApp = () => {
    return (
        <>
            <div className="webapp">
                <div className="container">
                    <header><Header/></header>
                    <nav><Navbar/></nav>
                    <aside><Sidebar/></aside>
                    <main><Mainsection/></main>
                    <footer><Footer /></footer>
                </div>
            </div>
        </>
    )
}

export default WebApp
