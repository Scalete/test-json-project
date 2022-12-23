import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useUsers } from '../redux/users/selectors';
import { IUserProps } from '../types/Models';

export const Users: React.FC<IUserProps> = ({onOpenUserAlbum}) => {

    const {usersData} = useSelector(useUsers);

    const renderUsers = () => {
        return usersData.map(user => <li key={user.id}>{user.username} <div className="actions"><Link to={`/posts/${user.id}`} className="posts">Пости</Link><button onClick={() => onOpenUserAlbum(user.id)} className="albums">Альбоми</button></div></li>);
    }

    return (
        <div className="users">
            <h1>Список юзерів</h1>
            <ul>
                {renderUsers()}
            </ul>
        </div>
    );
};