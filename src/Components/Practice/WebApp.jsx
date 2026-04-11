import React from 'react'
import './webapp.css'
import Header from './Header'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const WebApp = () => {
    return (
        <>
            <div className="webapp">
                <div className="container">
                    <header><Header/></header>
                    <nav>,<Navbar/></nav>
                    <aside><Sidebar/></aside>
                    <main>main</main>
                    <footer>footer</footer>
                </div>
            </div>
        </>
    )
}

export default WebApp
