import React, { useRef, useState } from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

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
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRefs = useRef([]);
    const scrollToVideo = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].scrollIntoView({ behavior: 'smooth' });
            setCurrentVideoIndex(index);
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
            <Link to="/">
                <div className="back">

                    <IoMdArrowBack className='bhjg' />

                </div>
            </Link>
            <div className="short">
                <div className="btnn">
                    <div className="efr">
                        <FaArrowUp className='sdf' style={{ cursor: 'pointer' }} onClick={handleUpClick} />
                        <FaArrowDown className='fre' style={{ cursor: 'pointer' }} onClick={handleDownClick} />

                    </div>
                </div>
                <div className="likes">

                    <div className="inside">
                        <AiFillLike className='redf' />   </div>
                    {/* <p>{count}</p> */}
                    <div className="inside">  <AiFillDislike className='redf' />  </div>
                    <div className="inside">    <BiSolidCommentDetail className='redf' />  </div>
                    <div className="inside"> <IoMdShareAlt className='redf' />   </div>
                    <div className="inside"> <BsThreeDotsVertical className='redf' />
                    </div>
                </div>

                {data.map((video, index) => (
                    <div className='eeddedd' key={index}>
                        <div className="videoo" ref={(el) => (videoRefs.current[index] = el)}>
                            <iframe
                                width="560"
                                height="315"
                                src={video.videoUrl}
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className='eddfd'
                                title='Iframe'
                            ></iframe>
                        </div>


                    </div>
                ))}
            </div>
        </div >
    );
};

export default ShortPage
