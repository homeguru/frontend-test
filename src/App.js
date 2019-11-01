import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Partials
import { getQueryString } from './partials/base'

//Client
import { getCharData } from "./client"

//Components
import Comics from './sections/Comics'
import Sidebar from './sections/Sidebar'
import Details from './sections/Details'

class App extends Component {
	render() {
		const { comics, selected } = this.state
		return (
			<Router>
				<div>
					<Route path="/" render={(props) => <Comics selectComic={this.selectComic} refetch={this.refetch} comics={comics} props={props}/>}/>
					<Route path="/" render={(props) => <Sidebar setCharacter={this.setCharacter} props={props}/>}/>
					<Route path="/" render={(props) => <Details setCharacter={this.setCharacter} selectComic={this.selectComic} selected={selected} props={props}/>}/>
				</div>
			</Router>
		);
	}

	state = {
		character: {},
		comics: [],
		selected: {},
		count: 0,
		offset: 0,
		cptMarvelId: 1010338,
	}

	refetch = () => {
		const { id } = getQueryString()
		const { cptMarvelId, count, offset, comics } = this.state


		return getCharData(id ? id : cptMarvelId, "comics", offset + count + 1)
			.then(res => {
				this.setState({
					...this.state, 
					character: id ? id : cptMarvelId, 
					comics: comics ? [...comics, ...res.results] : [...res.results], 
					offset: res.offset, 
					count: res.count
				})
			})
	}

	componentDidMount = () => this.refetch()

	setCharacter = async (character) => {
		this.setState({...this.state, comics: null})

		getCharData(character, "comics")
			.then(res => this.setState({...this.state, character, comics: res.results, count: 0, offset: 0}))
	}

	selectComic = async (comic) => this.setState({...this.state, selected: comic})
}

export default App;