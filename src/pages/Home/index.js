import React, {useEffect} from 'react'
import Masonry from 'react-masonry-css'
import './style.css'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../../redux/characterSlice';
import { Link } from 'react-router-dom';
function Home() {
    const characters = useSelector((state) => state.characters.items);
    const status = useSelector((state) => state.characters.status);
    const nextPage = useSelector((state) => state.characters.page);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);
    const error = useSelector((state) => state.characters.error);
    const dispatch = useDispatch()

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchCharacters())
        }
    }, [dispatch, status])

    if(status === 'failed'){
        return <Error message={error} />
    }

    return (
        <div>
            <Masonry 
                 breakpointCols={{default: 4, 800: 2}}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    {characters.map((character) => (
                            <div key={character.char_id}>
                                <Link to={`/char/${character.char_id}`}>
                                    <img alt={character.name} src={character.img} className="character"/>
                                    <div translate="no" className="char_name">{character.name}</div>
                                </Link>
                            </div>
                    ))}
            </Masonry>
            <div style={{ padding: '20px 0 40px 0', textAlign: 'center'}}>
                {status === 'loading' && <Loading />}
                {hasNextPage && status !== 'loading' && (
                    <button className="load_button" onClick={() => dispatch(fetchCharacters(nextPage))}>Load More / Page {nextPage}</button>
                )}
                {!hasNextPage && <div>There is nothing to bi shown</div>}
            </div>
        </div>
    )
}

export default Home;
