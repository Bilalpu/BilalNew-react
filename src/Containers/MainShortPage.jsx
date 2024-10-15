import React, { useState } from 'react'
import HeaderSection from '../Components/headerSection'
import Sidebar from '../Components/sideNavbar'
import ShortSection from '../Components/shortPage'
import AccountSection from '../Components/AccountSection'
import ToggleMneu from '../Components/toggleMenu'

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
            <HeaderSection toggleVisibility={toggleVisibility} onAccountClick={onAccountClick} />
            {!isVisible && < Sidebar style={{ display: 'block' }} />}
            <ShortSection />

            {isVisible && <ToggleMneu />}
            {showComponent && <AccountSection />}
        </div>
    )
}

export default MainShortPage
