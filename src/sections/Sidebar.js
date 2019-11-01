import React, { Component } from 'react';

//Partials
import { getCharacters } from '../client'

class Sidebar extends Component {
    render() {
        const { sideActive, list } = this.state

        return (
            <div className={`main-sidebar ch-100 d-flex pos-fixed ${sideActive ? "active" : "inactive"}`}>
                <div className='sidebar d-flex fdir-column overflow-y-scroll'>
                    {
                        list ?
                            list.map(data => {
                                let { id, name, thumbnail: { extension, path } } = data

                                return (
                                    <div onClick={() => this.toggleCharacter(id)} className="d-flex fdir-column a-vertical clickable" key={id}>
                                        <img alt="" className="char-image" src={path + "/portrait_medium." + extension}></img>
                                        <span className="txa-center c-white s-14 mar-t-6 mar-b-8">{name}</span>
                                    </div>
                                )
                            })
                        :
                            null
                    }
                </div>
                <div onClick={this.toggleSidebar} className='d-flex a-center hide-btn clickable ch-100'>
                    <span className={`mdi mdi-chevron-${sideActive ? "left" : "right"} c-white`}/>
                </div>
            </div>
        );
    }

    state = {
        sideActive: false,
        isRefetching: false,
        list: [],
        count: 0,
        offset: 0
    }

    toggleCharacter = (id) => {
        const { props: { history }, setCharacter } = this.props
        
        setCharacter(id).then(() => history.push("?id=" + id)).then(() => this.toggleSidebar())
    }

    componentDidMount = () => {
        const sideDoc = document.querySelector(".sidebar")
        this.drawCharacters()
        
        sideDoc.onscroll = ({target}) => {
            if((target.offsetHeight + target.scrollTop) >= target.scrollHeight - 650) {
                this.drawCharacters()
			}
		};
    }

    drawCharacters = async () => {
        const { list, count, offset } = this.state
        if(!this.state.isRefetching){
            this.setState({...this.state, isRefetching: true})

            getCharacters(offset + count).then(res => {
                this.setState({...this.state, list: [...list, ...res.results], count: res.count, offset: res.offset, isRefetching: false})
            })
        }
    }

    toggleSidebar = () => this.setState({...this.state, sideActive: !this.state.sideActive})
}

export default Sidebar;