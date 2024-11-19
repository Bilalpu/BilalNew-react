import React from 'react';
import car from '../Assets/car.jpg'
import home from '../Assets/home.jpg'
import house from '../Assets/house.jpg'
import miror from '../Assets/miror.jpg'
import river from '../Assets/river.jpg'




const data = [
    {
        videoUrl: "https://www.youtube.com/embed/bL-UQNBnFQY?si=MbYFhXsLpp98vgt4",
        type: 'Music',
        name: 'Imam Hassan Ko Zehar Diya Unki Biwi ne || Emotional Bayan ',
        channelName: 'Deen on Screen',
        views: "765K views : 2 Month Ago",
        img: car
    },
    {
        videoUrl: "https://www.youtube.com/embed/gUf8_2tt9_U?si=NvR-ABSBGWa_jm5x",
        type: 'Cartoon',
        name: 'Doraemon Episode 16 || 16-10-2023 || Available in hindi',
        channelName: 'Doraemon',
        views: "2.8M views : 1 Year Ago",
        img: home
    },
    {
        videoUrl: "https:www.youtube.com/embed/3yYUwk3z7f4?si=2Sh2GoFnGKU3YWjm",
        type: 'Naat',
        name: 'Raste Saf batate hai ka ap ate hai || By Owais Raza Qadri',
        channelName: 'Owaisia Studio',
        views: "834K views : 2 Year Ago",
        img: house
    },
    {
        videoUrl: "https:www.youtube.com/embed/bdESPKqHWgA?si=MOk1Q0Oc4VnoWrsJ",
        type: 'Music',
        name: 'Umer ka Jalal || By Peer Ajmal Raza Qadri || Emotional',
        channelName: 'youtube Channel',
        views: "649K views :  8 Months Ago",
        img: miror
    },
    {


        videoUrl: "https://www.youtube.com/embed/gO7-SYF5HPk?si=zS0CA6puDKlPD3JE",
        type: 'Playlist',
        name: 'Mehar Zain - Ya Nabi Salam Alaika || Audio by  ',
        channelName: 'Mawlaya',
        views: "842K views : 3 Month Ago",
        img: river
    },
    {


        videoUrl: "https://www.youtube.com/embed/6adnW--HY6A?si=XpCAx0hgHWVhdn4k",
        type: 'Naat',
        name: 'Taj Dare Haram || Naat || Atif Aslam  || Coke Studio ',
        channelName: 'Be influenced',

        views: "17M views :  6 Years Ago",
        img: car
    },
    {

        videoUrl: "https://www.youtube.com/embed/980SJ8KQFY4?si=49MfFT9uy9Ffnk0B",
        type: 'Teck Video',
        name: 'The airoplane lost it Roof on 24000 ft|| What Happen on Next',
        channelName: 'Durav Rathee',
        views: "6.9M views : 1 Days Ago",
        img: car
    },
    {


        videoUrl: "https://www.youtube.com/embed/cC9ZXQQP7wY?si=urkWV9Y0iqxjI36u",
        type: 'Surrah',
        name: 'Surrah Yaseen || The Heart of Quran || by Asad Madni ',
        channelName: 'Star Surrah',
        views: "840 views :  5 Days Ago",
        img: car
    },
    {


        videoUrl: "https://www.youtube.com/embed/uSpslBwOCk8?si=rdw7r4KTKAVECn8i",
        type: 'News',
        name: 'Capton is in Danger || Qaidi 804 Changed The Mentality || Imran Riaz',
        channelName: 'Imran Riaz',
        views: "692K views : 19 hours Ago",
        img: car
    },
    {

        videoUrl: "https://www.youtube.com/embed/2vXeERteebs?si=VqlXPwWn9YgRO-g9",
        type: 'Music',
        name: 'Rabia Basri ka Waqia || By Ajmal Raza Qari || Khub Waqia',
        channelName: 'Sunnah Star',
        views: "768K views : 1 Month Ago",
        img: car
    },
    {
        videoUrl: "https://www.youtube.com/embed/Lo3cR2NnKpc?si=qXvjW3H4OluAIipm",

        type: 'Drama',
        name: 'Kabhi Mein Kabhi Tum || Episode 26 || Fahad Mustafa & Hania Amir',
        channelName: 'ARY CHANNEL',
        views: "17M views : 1 Week Ago",
        img: car
    },
    {

        videoUrl: "https://www.youtube.com/embed/rUKxY6_eujE?si=z9FiCpKuPy1Pjbvo",
        type: 'Drama',
        name: 'Kabhi Mein Kabhi Tum || Episode 27 || Fahad Mustafa & Hania Amir',
        channelName: 'ARY CHANNEL',

        views: "15M views : 1 Week Ago",
        img: car
    },
    {
        videoUrl: "https://www.youtube.com/embed/Zu__r4RIbc8?si=sRQwJJLKNKuRDfQW",

        type: 'vlogs',
        name: '7 Million Subsriber ka GiveAway || Anouncement',
        channelName: 'Ducky Bhai',
        views: "1.1M views : 2 Days Ago",
        img: car
    },
    {

        videoUrl: "https://www.youtube.com/embed/QPyVcJjq2Co?si=a0JgyQGFczMcQ_dw",
        type: 'vlogs',
        name: 'My Response to Fake Give Away || Baba Op & Ducky',
        channelName: 'Ducky Bhai',
        views: "2.4M views  2 Days Ago",
        img: car
    },
    {

        videoUrl: 'https://www.youtube.com/embed/6-4tZIULEEw?si=lIMEAR2iFbJSwUJj"',
        type: 'vlogs',
        name: 'Treat By Dogar || Rajab Butt || Haider Shah || Rajab Family',
        channelName: 'Rajab Family',
        views: "3.1M views  2 Month Ago",
        img: car
    },
    {
        videoUrl: "https://www.youtube.com/embed/8kW7H3Wy9pY?si=MXsd5An00CObGSZf",
        type: 'vlogs',
        name: 'Meetup with Dr Zakir Naik|| One of My Favourite Person on Earth',
        channelName: 'Ducky Bhai',
        views: "2.6M views  6 Days Ago",
        img: car
    },
    {

        videoUrl: "https://www.youtube.com/embed/HL4zEzqsoYI?si=SOrPj3MW3kswSJjt",
        type: 'Comedy',
        name: 'Bulbulay Season 2 || Episode 265  || Ayesha Omer|| Nabeel ',
        channelName: 'ARY CHANNEL',
        views: "2.4M views  3 Week Ago",
        img: car
    },
    {
        videoUrl: "https://www.youtube.com/embed/fGkXjQkXzW8??rel=0&controls=0&mute=1_",
        type: 'Teck Video',

        name: 'Fear Factor in Engineering|| Hitesh Chaudary   Chai or Tec',
        channelName: 'Chai aur Code',
        views: "965K views : 2 Month Ago",
        img: car
    },


]


const Content = ({ boxWidth, paddingLeft, selectedFilter }) => {
    const filteredData = selectedFilter === 'All'
        ? data
        : data.filter(item => item.type === selectedFilter);

    return (
        <div className="maoooo" >
            <div className='mainContent' style={{ paddingLeft }}>
                {filteredData.map((item, index,) => (
                    <div className="content" key={index} style={{ width: boxWidth }}>

                        <div className="video">
                            <iframe
                                width="560"
                                height="315"
                                src={item.videoUrl}

                                frameBorder="0"
                                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={item.title}
                            ></iframe>

                        </div  >
                        <div className="bgh">
                            <div className="care"><img src={item.img} alt="div" /></div>
                            <div className="contenrrrr">

                                <h4>{item.name}</h4>
                                <p>{item.channelName}</p>
                                <h5>{item.views}</h5>
                            </div>
                        </div>
                    </div>



                ))}
            </div>
        </div>

    );
}

export default Content;

