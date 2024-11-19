
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { PiChartBarHorizontalDuotone } from "react-icons/pi";
import { PiFireBold } from "react-icons/pi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { CiTrophy } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { GoReport } from "react-icons/go";
import { CiFlag1 } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';
const ToggleMenu = () => {
    // const [setisVisible] = useState(false);
    // const toggleVisibility = () => {
    //     setisVisible(prevState => !prevState)
    // };

    return (

        <div className="toogle11">
            <ul>
                <Link to="/">
                    <div className="One">
                        <MdHomeFilled className='Icon' />  <li><a href="/">Home</a></li>
                    </div></Link>
                <Link to="/shorts">
                    <div className="One">
                        <SiYoutubeshorts className='Icon' />    <li><a href="/">Short </a></li>
                    </div></Link>
                <div className="One">
                    <MdSubscriptions className='Icon' /> <li><a href="/">Subscription</a></li>
                </div>
                <div className="blank">

                </div>
                <div className="toggle22">
                    <div className="One">
                        <li><h3>YOU</h3></li><IoIosArrowForward />
                    </div>
                    <div className="One">
                        <MdOutlineSwitchAccount className='Icon' />    <li><a href="/">Your Channel </a></li>
                    </div>
                    <div className="One">
                        <GoHistory className='Icon' /> <li><a href="/">History</a></li>
                    </div>
                    <div className="One">
                        <CgPlayList className='Icon' /> <li><a href="/">PlayList</a></li>
                    </div>
                    <div className="One">
                        <RiVideoLine className='Icon' /> <li><a href="/">Your Video</a></li>
                    </div>
                    <div className="One">
                        <MdOutlineWatchLater className='Icon' /> <li><a href="/">Watch Later</a></li>
                    </div>
                    <div className="One">
                        <AiOutlineLike className='Icon' /> <li><a href="/">Liked Video</a></li>
                    </div>
                </div>
                <div className="blank">

                </div>
                <div className="three">
                    <h3>Subscriptions</h3>
                    <div className="One">
                        <PiChartBarHorizontalDuotone className='Icon' /> <li><a href="/">Your Subscription</a></li>
                    </div>
                    <div className="blank">

                    </div>
                    <div className="expl">
                        <h3>Explore</h3>
                        <div className="One">
                            <PiFireBold className='Icon' /> <li><a href="/">Trending</a></li>
                        </div><div className="One">
                            <IoMusicalNoteOutline className='Icon' /> <li><a href="/">Music</a></li>
                        </div><div className="One">
                            <SiYoutubegaming className='Icon' /> <li><a href="/">Gaming</a></li>
                        </div><div className="One">
                            <ImNewspaper className='Icon' /> <li><a href="/">New</a></li>
                        </div><div className="One">
                            <CiTrophy className='Icon' /> <li><a href="/">Trophy</a></li>
                        </div>
                    </div>
                    <div className="blank">

                    </div>
                    <div className="more">
                        <h3>More for youtube</h3>
                        <ul>
                            <div className="One">
                                <FaYoutube className='Icon' style={{ color: 'red', fontSize: '24px' }} />  <li><a href="/">Youtube Premium</a></li>
                            </div>
                            <div className="One">
                                <SiYoutubestudio className='Icon' style={{ color: 'red', fontSize: '24px' }} />  <li><a href="/">Youtube Studio</a></li>
                            </div>
                            <div className="One">
                                <SiYoutubemusic className='Icon' style={{ color: 'red', fontSize: '24px' }} />  <li><a href="/">Youtube Music</a></li>
                            </div>
                            <div className="One">
                                <SiYoutubekids className='Icon' style={{ color: 'red', fontSize: '24px' }} />  <li><a href="/">Yotube Kids</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className="blank">

                    </div>
                    <div className="setting">
                        <ul>
                            <div className="One">
                                <IoSettingsOutline className='Icon' /> <li><a href="/">Setting</a></li>
                            </div>
                            <div className="One">
                                <CiFlag1 className='Icon' /> <li><a href="/">Report History</a></li>
                            </div>
                            <div className="One">
                                <IoHelpCircleOutline className='Icon' /> <li><a href="/">Help</a></li>
                            </div>
                            <div className="One">
                                <GoReport className='Icon' /> <li><a href="/">Send Feedback</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className="blank">

                    </div>
                    <div className="last">
                        <div className="One">
                            <li style={{ position: 'relative', right: '25px' }}><a href="/">About Press Copyright <br />Contactus Creator Advertise <br />Developers</a></li>
                        </div>
                    </div>
                    <div className="last">
                        <div className="One">
                            <li style={{ position: 'relative', right: '25px' }}><a href="/">Terms Privacy Policy <br /> & Safety How YouTube <br />worksTest new features</a></li>
                        </div>
                    </div>

                    <div className="last">
                        <div className="One">
                            <li style={{ position: 'relative', right: '25px' }}><a href="/">© 2024 Google LLC</a></li>
                        </div>
                    </div>
                </div>
            </ul>
        </div>

    )

}

export default ToggleMenu

