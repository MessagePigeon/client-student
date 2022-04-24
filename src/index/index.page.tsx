import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMount } from 'ahooks';

const IndexPage: React.FC = () => {
  const navigate = useNavigate();

  useMount(() => {
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
