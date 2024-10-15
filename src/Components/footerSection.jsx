import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdSmartDisplay } from "react-icons/md";
import { Link } from 'react-router-dom';
const footerSection = () => {
    return (
        <div>
            <footer>

                <div className="itemss">
                    <Link to="/">
                        <div className="icons">
                            <MdHomeFilled className='Iconss' />

                            <li>Home</li>
                        </div>
                    </Link>


                </div>
                <Link to="/shorts">
                    <div className="itemss">
                        <div className="icons">
                            <SiYoutubeshorts className='Iconss' />
                        </div>
                        <li> Short</li>
                    </div>
                </Link>
                <div className="itemss">
                    <div className="icons">
                        <MdSubscriptions className='Iconss' />
                    </div>
                    <p>Subscription</p>
                </div>
                <div className="itemss">
                    <div className="icons">
                        <MdSmartDisplay className='Iconss' />
                    </div>
                    <p>You</p>
                </div>
            </footer>
        </div>
    )
}

export default footerSection
