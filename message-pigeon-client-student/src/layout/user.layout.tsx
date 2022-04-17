import React from 'react';
import { Outlet } from 'react-router-dom';

const UserLayout: React.FC = () => {
  return (
    <>
      <div>UserLayout</div>
      <Outlet />
    </>
  );
};

export default UserLayout;
