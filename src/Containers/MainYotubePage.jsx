import React, { useState } from 'react'
import HeaderSection from '../Components/headerSection'
import Sidebar from '../Components/sideNavbar'
import ToggleMneu from '../Components/toggleMenu'
import Tabs from '../Components/tabs'
import Content from '../Components/Content'
import AccountSection from '../Components/AccountSection'
import FooterSection from '../Components/footerSection'
// import Embed from '../Components/embedded'
const MainYotubePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('All');
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
            <Tabs
                marginLeft={isVisible ? '15%' : '2%'}
                setFilter={setSelectedFilter} />

            {/* <Embed /> */}
            {isVisible && <ToggleMneu />}
            < Content boxWidth={isVisible ? '33%' : '25%'}
                paddingLeft={isVisible ? '21%' : '5%'}
                selectedFilter={selectedFilter} />

            {showComponent && <AccountSection />}
            <FooterSection />
        </div>
    )
}

export default MainYotubePage
