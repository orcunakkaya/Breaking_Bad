import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import './style.css'
function Detail() {
    const { char_id } = useParams() // sayfanın linkini yakalar
    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`${process.env.REACT_APP_BASE_ENDPOINT}/characters/${char_id}`)
            .then(res => res.data)
            .then(data => setChar(data[0]))
            .finally(() => setLoading(false))
    }, [char_id])
    return (
        <div className="detail">
            {loading && <Loading />}
            {
                char && <div>
                    <h1 translate="no">{char.name}</h1>
                    <img className="detail_image" src={char.img} alt={char.name}/>
                </div>
            }
            { char && (
                <div className="char_details">
                    <div translate="no"><b>Name:</b> {char.name}</div>
                    <div><b>Birthday:</b> {char.birthday}</div>
                    <div><b>Occupation:</b> {char.occupation}</div>
                    <div><b>Status:</b> {char.status}</div>
                    <div><b>Nickname:</b> {char.nickname}</div>
                    <div><b>Portrayed:</b> {char.portrayed}</div>
                </div>
                
            )}
        </div>
    )
}

export default Detail;