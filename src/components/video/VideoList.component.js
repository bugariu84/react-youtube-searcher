import React from "react";
import VideoItem from './VideoItem.component';

const VideoList = (props) => {

    const videosList = props.videos.map((video) => {
        return (
            <VideoItem 
                onVideoSelect={props.onVideoSelect}
                video={video} 
                key={video.etag}
            />
        );
    })

    return (
        <ul className="col-md-6 list-group">
            {videosList}
        </ul>
    );
}

export default VideoList;