import React from 'react';

const VideoItem = (props) => {
    
    const video = props.video

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={video.snippet.thumbnails.default.url} alt="Generic placeholder" />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoItem;