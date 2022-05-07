import { useMount } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { initSettingsStorage } from './helpers/init-settings-storage.helper';

const IndexPage: React.FC = () => {
  const navigate = useNavigate();

  useMount(() => {
    initSettingsStorage();
    const token = localStorage.getItem('token');
    navigate(token ? '/history' : '/login');
  });

  return (
    <div className="flex h-screen">
      <div className="m-auto text-4xl">加载中...</div>
    </div>
  );
};

export default IndexPage;
