import React, { Component } from 'react';

//Component
import ComicCell from './ComicCell'

class Comics extends Component {
    render() {
        const { comics, refetch, selectComic } = this.props

        window.onscroll = (ev) => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 650) {
                if(!this.state.isRefetching){
                    this.setState({isRefetching: true})
					refetch().then(() => this.setState({isRefetching: false}))
				}
			}
		};
        
        return (
            <div className='Comics'>
                <div className="d-flex main-comics-container">
                    {
                        comics ?
                            comics.length === 0 ?
                                <p className="c-white s-20">Nenhum quadrinho encontrado</p>
                            :
                                comics.map(comic => <ComicCell key={comic.id} selectComic={selectComic} comic={comic}/>)
                        :
                            <div className="mini-spinner"/>
                    }
                </div>
            </div>
        );
    }

    state = {
        isRefetching: false
    }
}

export default Comics;