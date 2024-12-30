import React from 'react';
import gif1 from './assets/5.gif';
import gif2 from './assets/6.gif';
import png1 from './assets/1.png';
import png2 from './assets/2.png';


const Archive = () => {
    return (
        <div className="content-archive">
            <h1>Архив Нежностей!</h1>
            <h2>Здеся можна увидеть много нежностей, которые между нами были😳</h2>
            <div className="obertka">
                <h2>Нежность #1 "Поцелуйчики в кружочке"</h2>
                    <img src={gif1} alt="" />
                    <img src={gif2} alt="" />
            </div>
            <div className="obertka obe">
                <h2>Нежность #2 "Няшная няшность!"</h2>
                <img className='png' src={png1} alt="" />
            </div>
            <div className="obertka obe">
                <h2>Нежность #3 "Милотищаааа!"</h2>
                <img className='png' src={png2} alt="" />
            </div>
        </div>
    );
};

export default Archive;
    