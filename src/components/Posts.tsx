import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchPosts } from '../redux/posts/asyncAction';
import { usePosts } from '../redux/posts/selectors';
import { useAppDispatch } from '../redux/store';

export const Posts: React.FC = () => {
    const id = Number(useParams().id);
    const dispatch = useAppDispatch();

    const { postsData, userName } = useSelector(usePosts);

    const renderUserPosts = () => {
        return postsData.map(post => <li key={post.id}><img src="/public-img.jpg" alt="Post" /><h2>{post.title}</h2><p>{post.body}</p></li>);
    }

    React.useEffect(() => {
        dispatch(fetchPosts({id}));
    }, [id, dispatch]);

    return (
        <div className="posts-wrapper">
            <div className="posts-header">
                <h1>Пости юзера {userName}</h1>
                <Link to='/users'>До списку</Link>
            </div>
            <ul>
                {renderUserPosts()}
            </ul>
        </div>
    );
};