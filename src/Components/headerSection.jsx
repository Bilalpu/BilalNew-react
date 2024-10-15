import React from 'react'
import Logo from '../Assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

const headerSection = ({ toggleVisibility, onAccountClick }) => {
    return (
        <nav>
            <div className="main">
                <div className="teo">
                    <div className="bar">
                        <div className="twot">
                            <FaBars className='bar' onClick={toggleVisibility} />

                            <img src={Logo} alt="" />
                        </div>
                    </div>

                </div>
                <div className="mainInput">
                    <div className="maininput">
                        <div className="searchBar">

                            <input type="text" placeholder='Search' className='inputfield
                ' />
                            <tooltip title="Search">
                                <div className="se">
                                    <button>  <CiSearch className='srsr' /></button>


                                </div>
                            </tooltip>

                        </div>
                    </div>
                </div>
            </div>
            <tooltip title="Search with your Voice">
                <div className="mic">
                    <button className='btn'
                    ><FaMicrophone className='sdsdsd' /></button>
                </div>
            </tooltip>
            <div className="lastSection">

                <div className="create">
                    <tooltip title="Create">
                        <BiVideoPlus className='both' />
                    </tooltip>
                </div>
                <div className="noti">
                    <tooltip title="Notification">
                        <IoIosNotificationsOutline className='both' />
                    </tooltip>
                    <div className="mainline">
                        <div className="line">
                            Notification
                        </div>



                    </div>
                </div>
                <div className="account">


                    <VscAccount className='both' onClick={onAccountClick} />

                </div>
            </div>
        </nav>
    )
}

export default headerSection
