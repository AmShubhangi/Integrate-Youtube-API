import React from 'react';
import './videoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={()=> onVideoSelect(video)} className="video-item item">
            <img className="ui image" alt='demo' src={video.snippet.thumbnails.high.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
};

export default VideoItem;