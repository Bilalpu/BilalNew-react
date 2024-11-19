import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdSmartDisplay } from "react-icons/md";
import { Link } from 'react-router-dom';
const sideNavbar = () => {
    return (

        <aside>
            <div className="items">
                <Link to="/">
                    <div className="icon">
                        <MdHomeFilled className='Icons' />

                        <li>Home</li>
                    </div>
                </Link>
            </div>
            <Link to="/shorts">
                <div className="items">
                    <div className="icon">
                        <SiYoutubeshorts className='Icons' />
                    </div>
                    <li> Short</li>
                </div>
            </Link>
            <div className="items">
                <div className="icon">
                    <MdSubscriptions className='Icons' />
                </div>
                <p>Subscription</p>
            </div>
            <div className="items">
                <div className="icon">
                    <MdSmartDisplay className='Icons' />
                </div>
                <p>You</p>
            </div>
        </aside>
    )
}

export default sideNavbar
