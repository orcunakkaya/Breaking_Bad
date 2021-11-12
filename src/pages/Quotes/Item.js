import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function Item({ item }) {
    return (
        <div className="quote_item">
            <Link to={`/quotes/${item.quote_id}`}>
                <q>{item.quote}</q>
            </Link>
             <strong translate="no">{item.author}</strong>
        </div>
    )
}

export default Item
