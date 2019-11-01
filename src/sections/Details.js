import React, { Component } from 'react';

class Details extends Component {
    render() {
        const { selectedImage } = this.state
        const { selected, selectComic } = this.props
        const {
            thumbnail,
            title,
            creators,
            characters,
            digitalId,
            id, 
            issueNumber, 
            pageCount, 
            description, 
            prices,
            images,
            urls
        } = selected
        const drawImage = selectedImage ? selectedImage : thumbnail
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
          
        return (
            <div className={`overlay-dps pos-fixed ch-100 cw-100 ${Object.keys(selected).length > 0 ? "active" : "inactive"}`}>
                <div onClick={() => selectComic({}).then(() => this.setState({selectedImage: false}))} className="details-layer pos-fixed ch-100 cw-100"/>
                <div className="main-details overflow-y-scroll ch-max-view">
                    {
                        Object.keys(selected).length > 0 ?
                            <div className="mar-20">
                                <p className="c-white w-bold s-18 mar-0">{title}</p>
                                <img alt="" className="details-image d-flex" src={drawImage.path + "/portrait_uncanny." + drawImage.extension}></img>
                                <p className="c-white s-16 mar-0">{description}</p>
                                <div className="image-select d-flex overflow-x-scroll pad-t-12">
                                    {
                                        images.map((image, index) => (
                                            <img key={index} onClick={() => this.setImage(image)} alt="" className="clickable d-flex mar-h-4" src={image.path + "/standard_medium." + image.extension}></img>)
                                        )
                                    }
                                </div>  
                                <div className="id-section mar-t-14">
                                    <p className="c-white w-bold s-18 mar-0 mar-b-10">Detalhes</p>
                                    <p className="c-white s-14 mar-0">ID: {id}</p>
                                    <p className="c-white s-14 mar-0 mar-t-4">ID Digítal: {digitalId}</p>
                                    <p className="c-white s-14 mar-0 mar-t-4">Número da Edição: {issueNumber}</p>
                                    <p className="c-white s-14 mar-0 mar-t-4">Número de Páginas: {pageCount}</p>
                                    <p className="c-white s-14 mar-0 mar-t-4">Preço: {formatter.format(prices[0].price)}</p>
                                </div>
                                <div className="char-section mar-t-14">
                                    <p className="c-white w-bold s-18 mar-0 mar-b-10">Personagens</p>
                                    {
                                        characters.items.map(({ name, resourceURI }, index) => {
                                            let split = resourceURI.split("/")
                                            let id = split[split.length - 1]

                                            return (
                                                <p onClick={() => this.drawSelect(id)} key={index} className={`clickable td-underline c-white s-14 mar-0 ${index === 0 ? "" : "mar-t-4"}`}>{name}</p>
                                            )
                                        })
                                    }
                                </div>
                                <div className="creator-section mar-t-14">
                                    <p className="c-white w-bold s-18 mar-0 mar-b-10">Criadores</p>
                                    {
                                        creators.items.map(({ name, role }, index) => (
                                            <p key={index} className={`c-white s-14 mar-0 ${index === 0 ? "" : "mar-t-4"}`}>{name} ({role})</p>
                                        ))
                                    }
                                </div>
                                <div className="link-section mar-t-14">
                                    {
                                        urls.map(({ url, type }, index) => (
                                            <div key={index} className={`${index === 0 ? "" : "mar-t-6"}`}>
                                                <a href={url} className={`c-white s-16 mar-0`}>{type === "reader" ? "Leitor Online" : "Ver detalhes no site"}</a>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        :
                            null
                    }
                </div>
            </div>
        );
    }

    state = {
        selectedImage: false
    }

    setImage = (image) => this.setState({...this.state, selectedImage: image})

    drawSelect = (id) => {
        const { selectComic, setCharacter, props: { history } } = this.props

        return selectComic({}).then(res => setCharacter(id)).then(() => history.push("?id=" + id))
    }
}

export default Details;