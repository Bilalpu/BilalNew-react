import React, { useRef, useState } from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const data = [
    {
        videoUrl: "https://www.youtube.com/embed/bL-UQNBnFQY?si=MbYFhXsLpp98vgt4",

    },
    {
        videoUrl: "https://www.youtube.com/embed/mZ9rVkamuT8",

    },
    {
        videoUrl: "https://www.youtube.com/embed/mZ9rVkamuT8",

    },
    {
        videoUrl: "https://www.youtube.com/embed/mZ9rVkamuT8",

    },
    // You can add more video objects here...
];

const ShortPage = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Track the current video
    const videoRefs = useRef([]); // Create an array to store video references

    // Scroll to a specific video
    const scrollToVideo = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].scrollIntoView({ behavior: 'smooth' });
            setCurrentVideoIndex(index); // Update the current video index
        }
    };

    const handleUpClick = () => {
        if (currentVideoIndex > 0) {
            scrollToVideo(currentVideoIndex - 1);
        }
    };

    const handleDownClick = () => {
        if (currentVideoIndex < data.length - 1) {
            scrollToVideo(currentVideoIndex + 1);
        }
    };
    return (
        <div>

            <div className="short">
                {/* Uncomment the arrow buttons if you want to use them */}
                <div className="btnn">
                    <FaArrowUp className='sdf' style={{ cursor: 'pointer' }} onClick={handleUpClick} />
                    <FaArrowDown className='fre' style={{ cursor: 'pointer' }} onClick={handleDownClick} />
                </div>

                {data.map((video, index) => (
                    <div key={index}>
                        <div className="videoo" ref={(el) => (videoRefs.current[index] = el)}>
                            <iframe
                                width="560"
                                height="315"
                                src={video.videoUrl}
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Display video details */}
                        <h2>{video.name}</h2>
                        <p>{video.channelName}</p>
                        <p>{video.views}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShortPage;
