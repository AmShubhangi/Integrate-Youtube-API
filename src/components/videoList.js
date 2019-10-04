import React from 'react';
import VideoItem from './videoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
        return <div>
            <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
        </div>
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
}
export default VideoList;