import React from 'react';
import { Users } from './components/Users';
import { useAppDispatch } from './redux/store';
import { fetchUsers } from './redux/users/asyncAction';
import { Routes, Route } from "react-router-dom";

import './scss/index.scss';
import { Main } from './components/Main';
import { Posts } from './components/Posts';
import { Modal } from './components/Modal';

const App: React.FC = () => {

  const dispatch = useAppDispatch();
  const [aciveModal, setActiveModal] = React.useState(false);
  const [albumUserId, setAlbumUserId] = React.useState(-1);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onOpenUserAlbum = (id: number) => {
    setAlbumUserId(id);
    setActiveModal(true);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/users" element={<Users onOpenUserAlbum={onOpenUserAlbum}/>} />
        <Route path="/posts/:id" element={<Posts/>} />
      </Routes>
      <Modal aciveModal={aciveModal} setActiveModal={setActiveModal} userId={albumUserId}/>
    </div>
  );
}

export default App;
