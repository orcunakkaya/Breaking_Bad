import React from 'react'
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { quotesSelector } from '../../redux/quotesSlice'
import './style.css'
function QuoteDetail() {
    const { quote_id } = useParams();
    const items = useSelector(quotesSelector);
    const quote = items.find((item) => item.quote_id === Number(quote_id));

    if(!quote) {
        return <Navigate to="/quotes" />
    }
    
    return (
        <div className="quote_detail">
            <h1>Quote Detail</h1>      
            <div>
                <div><b>Quote:</b> {quote.quote}</div>
                <div><b>Author:</b> {quote.author}</div>
                <div><b>Series:</b> {quote.series}</div>
            </div>
        </div>
    )
}

export default QuoteDetail;
