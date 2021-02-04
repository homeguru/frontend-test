import React from 'react';

const ComicThumbnail = ({ url, title, thumbnail }) => (
    <React.Fragment>
        <a className="thumbnail wrapper" href={url} target="_blank">
            <img className="thumbnail-img" src={thumbnail} alt={thumbnail} />
            <div className="thumbnail-overlay"><span className="thumbnail-text">{title}</span>
            </div>
        </a>
    </React.Fragment>
);

export default ComicThumbnail;