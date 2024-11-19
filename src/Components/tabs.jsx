import React, { useRef } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { TbGps } from "react-icons/tb";

const Tabs = ({ setFilter, marginLeft, onTabButtonClick }) => {
    const tabsRef = useRef(null);

    const scrollLeft = () => {
        tabsRef.current.scrollBy({
            left: -150,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        tabsRef.current.scrollBy({
            left: 150,
            behavior: 'smooth',
        });
    };

    return (
        <div className="bttn">

            <div className="arrow" style={{ marginLeft }} onClick={scrollLeft}>
                <IoIosArrowBack />
            </div>

            <div className='tabss' ref={tabsRef} >
                <button className='bik' onClick={onTabButtonClick}  ><TbGps /></button>
                <button className='jeeta' onClick={() => setFilter('All')} style={{ backgroundColor: 'black', color: 'white' }}>All</button>
                <button onClick={() => setFilter('Music')}>Music</button>
                <button onClick={() => setFilter('Playlist')}>Playlist</button>
                <button onClick={() => setFilter('Drama')}>Drama</button>
                <button onClick={() => setFilter('Film')}>Film</button>
                <button onClick={() => setFilter('Mixes')}>Mixes</button>
                <button onClick={() => setFilter('vlogs')}>vlogs</button>
                <button onClick={() => setFilter('Comedy')}>Comedy</button>
                <button onClick={() => setFilter('Teck Video')}>Teck</button>
                <button onClick={() => setFilter('All')}>ForYou</button>
                <button onClick={() => setFilter('Mixes')}>Mixes</button>
                <button onClick={() => setFilter('News')}>News</button>
                <button onClick={() => setFilter('Surrah')}>Surrah</button>
                <button onClick={() => setFilter('Naat')}>Naat</button>
                <button onClick={() => setFilter('Cartoon')}>Cartoon</button>
                <button onClick={() => setFilter('Mixes')}>Mixes</button>

            </div>

            <div className="arrow" onClick={scrollRight}>
                <MdArrowForwardIos />
            </div>

        </div>
    );
};

export default Tabs;