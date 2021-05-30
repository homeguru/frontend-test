import React, { useState, useEffect } from 'react';

import { FaTimes } from 'react-icons/fa';

import { useParams, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import { propsCriadores } from '../MainPage';


const ModalDetails: React.FC = () => {
    const ts = '1610554394';
    const apiKey = '9bccdce533f0524bbf795a7bbbe9a124';
    const hashMd5 = '992012ac3bbf475f00135fa00d1f6541';
    const params = useParams() as any;
    const history = useHistory();
    const [infoDetails, setInfoDetails] = useState<any>();

    useEffect(() => {
        if (!params.id) { return }
        const options = {
            params: {
                ts,
                apikey: apiKey,
                hash: hashMd5
            },
            headers: {
                'Content-Type': 'application/json',
            },
        }
        api.get(`v1/public/comics/${params.id}`, options)
            .then(result => {
                if (result) {
                    setInfoDetails(result.data.data.results[0])
                }
            })
    }, [params])

    return (
        <div className="containerDetails">
            {infoDetails && (

                <div className="body">
                    <div className="rowBetween">
                        <div className="contentTittle">
                            <p>Tittle:</p>
                            <h1>{infoDetails?.title}</h1>
                        </div>
                        <button onClick={() => history.goBack()}>
                            <FaTimes className="icon" />
                        </button>
                    </div>
                    <hr />
                    <div className="scroll">
                        <div className="contentDescription">
                            <img className="imgDescription" src={`${infoDetails?.thumbnail?.path}.${infoDetails?.thumbnail?.extension}`} alt={infoDetails.description} />
                            <div className="flex1">
                                <h2><b>Description:</b></h2>
                                <p className="description">
                                    {infoDetails.description}
                                </p>
                                <hr />
                                <h2><b>Series:</b></h2>
                                <p className="desciption">
                                    {infoDetails.series?.name}
                                </p>
                                <hr />
                                <h2><b>Link:</b></h2>
                                <div className="row">
                                    <a href={infoDetails?.urls[0]?.url}>Ver no site da Marvel</a>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <h2><b>Creators:</b></h2>
                        <div className="row">
                            {infoDetails.creators.items.map((item: propsCriadores) => (
                                <p className="box-text" key={item.name}>{item.name}</p>
                            ))}
                        </div>
                        <hr />
                        <h2><b>Characters of this edition:</b></h2>
                        <div className="row">
                            {infoDetails.characters.items.map((item: propsCriadores) => (
                                <p className="box-text" key={item.name}>{item.name}</p>
                            ))}
                        </div>
                        <hr />
                        <h2><b>Stories:</b></h2>
                        <div className="row">
                            {infoDetails.stories.items.map((item: propsCriadores) => (
                                <p className="box-text" key={item.name}>{item.name}</p>
                            ))}
                        </div>
                        <hr />
                    </div>
                </div>

            )}
        </div >
    )
}

export default ModalDetails;