import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ConnectCodePage from './connect-code/connect-code.page';
import IndexPage from './index/index.page';
import BaseLayout from './layout/base.layout';
import UserLayout from './layout/user.layout';
import LoginPage from './login/login.page';
import HistoryPage from './history/history.page';
import TeacherPage from './teacher/teacher.page';

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="" element={<IndexPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<UserLayout />}>
          <Route path="history" element={<HistoryPage />} />
          <Route path="connect-code" element={<ConnectCodePage />} />
          <Route path="teacher" element={<TeacherPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routers;
