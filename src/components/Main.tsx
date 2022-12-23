import React from 'react';
import { Link } from 'react-router-dom';

export const Main: React.FC = () => {
    return (
        <div className='main-block'>
            <h1>Тестовий веб додаток</h1>
            <Link to='/users'>Список юзерів</Link>
        </div>
    );
};