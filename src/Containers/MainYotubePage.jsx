import React, { useState, useEffect, useRef } from 'react'
import HeaderSection from '../Components/headerSection'
import Sidebar from '../Components/sideNavbar'
import ToggleMneu from '../Components/toggleMenu'
import Tabs from '../Components/tabs'
import Content from '../Components/Content'
import AccountSection from '../Components/AccountSection'
import FooterSection from '../Components/footerSection'
import SecondSection from '../Components/secondToggle'
const MainYotubePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSecondSection, setShowSecondSection] = useState(false)
    const [showComponent, setShowComponent] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('All');
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    }
    const onAccountClick = () => {
        setShowComponent(prevState => !prevState);
    }
    const onTabbuttonClicked = () => {
        setShowSecondSection(prevState => !prevState)
    }
    const secondSectionRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (secondSectionRef.current && !secondSectionRef.current.contains(event.target)) {
                setShowSecondSection(false);
            }
        };


        document.addEventListener('mousedown', handleClickOutside);

        return () => {

            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [secondSectionRef]);
    return (
        <div>
            <HeaderSection toggleVisibility={toggleVisibility} onAccountClick={onAccountClick} />
            {showSecondSection && <div className="overlay" />}
            {showSecondSection && (
                <div ref={secondSectionRef} >
                    <SecondSection />
                </div>
            )}

            {!isVisible && < Sidebar style={{ display: 'block' }} />}
            <Tabs
                marginLeft={isVisible ? '15%' : '2%'}
                setFilter={setSelectedFilter}
                onTabButtonClick={onTabbuttonClicked} />

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
