import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './about/about.page';
import ConnectCodePage from './connect-code/connect-code.page';
import IndexPage from './index/index.page';
import UserLayout from './layout/user.layout';
import LoginPage from './login/login.page';
import MessagePage from './message/message.page';
import TeacherPage from './teacher/teacher.page';

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<IndexPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route element={<UserLayout />}>
        <Route path="message" element={<MessagePage />} />
        <Route path="connect-code" element={<ConnectCodePage />} />
        <Route path="teacher" element={<TeacherPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
