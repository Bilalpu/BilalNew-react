import React from 'react'
import Logo from '../Assets/logo.png'
import { SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { CiTrophy } from "react-icons/ci";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { PiFireBold } from "react-icons/pi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const secondToggle = () => {
    return (
        <div>
            <div className="mainsar">
                <div className="secondf">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="saree">
                    <div className="explo">
                        <div className="Ones">
                            <PiFireBold className='Icone' /> <li><a href="/">Trending</a></li>
                        </div><div className="Ones">
                            <IoMusicalNoteOutline className='Icone' /> <li><a href="/">Music</a></li>
                        </div><div className="Ones">
                            <SiYoutubegaming className='Icone' /> <li><a href="/">Gaming</a></li>
                        </div><div className="Ones">
                            <ImNewspaper className='Icone' /> <li><a href="/">New</a></li>
                        </div><div className="Ones">
                            <CiTrophy className='Icone' /> <li><a href="/">Trophy</a></li>
                        </div>
                    </div>
                    <div className="blanks">
                    </div>
                    <div className="mores">
                        <ul>
                            <div className="Ones">
                                <SiYoutubestudio className='Icone' style={{ color: 'red', fontSize: '24px' }} />  <li><a href="/">Youtube Studio</a></li>
                            </div>
                            <div className="Ones">
                                <SiYoutubemusic className='Icone' style={{ color: 'red', fontSize: '24px' }} />  <li><a href="/">Youtube Music</a></li>
                            </div>
                            <div className="Ones">
                                <SiYoutubekids className='Icone' style={{ color: 'red', fontSize: '24px' }} />  <li><a href="/">Yotube Kids</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default secondToggle
