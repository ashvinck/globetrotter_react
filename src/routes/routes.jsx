import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/404NotFound';
import SinglePlayer from '../pages/SinglePlayer';

const GameRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/play' element={<SinglePlayer />} />
      <Route path='/404' element={<NotFound />} />
      <Route path='*' element={<Navigate replace to='/404' />} />
    </Routes>
  );
};

export default GameRoutes;
