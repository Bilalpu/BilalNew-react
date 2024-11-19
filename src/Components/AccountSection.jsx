import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { GrGoogle } from "react-icons/gr";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { PiSignOutDuotone } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";
import { CiDollar } from "react-icons/ci";
import { BiSolidUserAccount } from "react-icons/bi";
import { WiMoonWaxingCrescent2 } from "react-icons/wi";
import { IoLanguageOutline } from "react-icons/io5";
import { MdOutlineAddModerator } from "react-icons/md";
import { FaRegKeyboard } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";

const AccountSection = () => {

    return (

        <div >
            <section>
                <div className="accountO">
                    <VscAccount /><li><a href="/">Account Name</a></li>


                </div>
                <div className="channell">
                    <li><a href="/">View Your Channel</a></li>
                </div>

                <div className='khali'>
                </div>
                <div className="there">
                    <ul>
                        <div className="fav">
                            <GrGoogle className="react" /><li><a href="/">Google Account</a></li>
                        </div>
                        <div className="fav">
                            <MdOutlineSwitchAccount className="react" /><li><a href="/">Switch Account</a></li>
                        </div>
                        <div className="fav">
                            <PiSignOutDuotone className="react" /><li><a href="/">Sign Out</a></li>
                        </div>

                    </ul>

                </div>
                <div className='khali'>
                </div>
                <div className="ten">
                    <ul>
                        <div className="fav">
                            <SiYoutubestudio className="react" /><li><a href="/">Youtube Studio</a></li>
                        </div>
                        <div className="fav">
                            <CiDollar className="react" /><li><a href="/">Purchase MemberShip</a></li>
                        </div>


                    </ul>

                </div>
                <div className='khali'>
                </div>

                <div className="eleven">
                    <ul>
                        <div className="fav">
                            <BiSolidUserAccount className="icon" /><li><a href="/">Your Data in Youtube</a></li>
                        </div>
                        <div className="fav">
                            <WiMoonWaxingCrescent2 className="icon" /><li><a href="/">Apperance : Device & Themes    </a></li>
                        </div>
                        <div className="fav">
                            <IoLanguageOutline className="react" /><li><a href="/">Language : British English</a></li>
                        </div>
                        <div className="fav">
                            <MdOutlineAddModerator className="react" /><li><a href="/">Location : Pakistan</a></li>
                        </div>
                        <div className="fav">
                            <FaRegKeyboard className="react" /><li><a href="/">Keyboard ShortCut</a></li>
                        </div>

                    </ul>
                </div>
                <div className='khali'>
                </div>
                <div className="Twelve">
                    <ul>
                        <div className="fav">
                            <IoSettingsOutline className="react" /><li><a href="/">Setting</a></li>
                        </div>
                        <div className="fav">
                            <IoIosHelpCircleOutline className="react" /><li><a href="/">Help</a></li>
                        </div>
                        <div className="fav">
                            <RiFeedbackLine className="react" /><li><a href="/">Send FeedBack</a></li>
                        </div>

                    </ul>
                </div>
            </section>
        </div >
    )
}

export default AccountSection
