import React from 'react';
import LazyLoad from 'react-lazy-load'

const ComicCell = ({comic, selectComic}) => {
    const { thumbnail: { path, extension }, title, dates } = comic
    const { date } = dates.filter(({type}) => type === "onsaleDate")[0]
    const dateString = new Date(date).toLocaleDateString()

    return (
        <div onClick={() => selectComic(comic)} className='ComicCell d-flex a-center pos-relative clickable d-flex fdir-column'>
            <LazyLoad
                width={200}
                height={300}
                debounce={false}
                offsetVertical={500}
            >
                <img alt="" className="comic-image" src={path + "/portrait_fantastic." + extension}></img>
            </LazyLoad>
            <div className="comic-about d-flex pad-6 fdir-column">
                <p className="c-white s-14 mar-0">{title}</p>
                <span className="c-white s-14 mar-0 mar-t-4">{dateString}</span>
            </div>
        </div>
    )
}

export default ComicCell;