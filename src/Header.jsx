import React from 'react';

const Header = ({ activeButton, setActiveButton, gif, index }) => {
    return (
        <header>
            <div className='button-panel'>
                <button className={`emoji-button ${activeButton === 0 ? 'active' : ''}`} onClick={() => setActiveButton(0)}>
                    😺
                </button>
                <button className={`emoji-button ${activeButton === 1 ? 'active' : ''}`} onClick={() => setActiveButton(1)}>
                    🐱
                </button>
                <button className={`emoji-button ${activeButton === 2 ? 'active' : ''}`} onClick={() => setActiveButton(2)}>
                    💖
                </button>
            </div>
            {activeButton === 2 || activeButton === 1 || index > 8 ? (<></>) : (<img src={gif} />)}
        </header>
    );
};

export default Header;