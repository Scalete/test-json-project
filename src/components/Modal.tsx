import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../redux/albums/asyncAction';
import { useAlbums } from '../redux/albums/selectors';
import { useAppDispatch } from '../redux/store';
import { IModal } from '../types/Models';

export const Modal: React.FC<IModal> = ({aciveModal, setActiveModal, userId}) => {

    const {albumsData, userName} = useSelector(useAlbums);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(fetchAlbums({userId}));
    }, [userId, dispatch]);

    const renderAlbums = () => {
        return albumsData.map(album => <li key={album.id}><Link to='#'>{album.title}</Link></li>);
    }

    return (
        <>
            <div className={`overlay ${aciveModal?'active':''}`}></div>
            <div className={`modal ${aciveModal?'active':''}`}>
                <div className="actions">
                    <h2>Альбоми юзера {userName}</h2>
                    <button onClick={() => setActiveModal(false)}>Закрити</button>
                </div>
                <ul className="albums">
                    {renderAlbums()}
                </ul>
            </div>
        </>
        
    );
};