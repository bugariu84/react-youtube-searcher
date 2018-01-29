import React from "react";

const VideoDetail = ({video}) => {
    if (! video) {
        return <div>Loading ...</div>
    }

    const videoId = video.id.videoId;
    const url = "https://www.youtube.com/embed/" + videoId;

    return (
        <div className="video-detail col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title="" allowFullScreen></iframe>
            </div>
            <div className="title">
                {video.snippet.title}
            </div>
            <div className="description">
                {video.snippet.description}
            </div>
        </div>
    );
}

export default VideoDetail;