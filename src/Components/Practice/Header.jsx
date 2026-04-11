import React from 'react'

const Header = () => {
    return (
        <div id='header'>
            <div className='logo'>
                <h2>Logo</h2>
            </div>
            <div className='search'>
                <input type="text" placeholder='Serch Something....!'/>
                <button>Search</button>
            </div>
            <div className='icon'>
                <h3>😎</h3>
                <h3>😂</h3>
                <h3>😁</h3>
            </div>
        </div>
    )
}

export default Header
