import React, { useState } from 'react'
import HeaderSection from '../Components/headerSection'
import Sidebar from '../Components/sideNavbar'
import ShortSection from '../Components/shortPage'
import AccountSection from '../Components/AccountSection'
import ToggleMneu from '../Components/toggleMenu'
import FooterSection from '../Components/footerSection'

const MainShortPage = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    }
    const onAccountClick = () => {
        setShowComponent(prevState => !prevState);
    }
    return (
        <div>
            <div className="container-one">
                <HeaderSection toggleVisibility={toggleVisibility} onAccountClick={onAccountClick} className="header-section"
                /></div>
            {!isVisible && < Sidebar style={{ display: 'block' }} />}
            <ShortSection />

            {isVisible && <ToggleMneu />}
            {showComponent && <AccountSection />}
            <div className="Footer-Section">
                <FooterSection />
            </div>
        </div>
    )
}

export default MainShortPage
