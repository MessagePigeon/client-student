import { Typography } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout: React.FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer className="fixed inset-x-0 bottom-0 py-2 bg-white">
        <Typography.Text type="secondary" className="block text-center">
          作者: 荆棘Justin Github:{' '}
          <Typography.Link
            href="https://github.com/MessagePigeon/client-student"
            target="_blank"
          >
            MessagePigeon/client-student
          </Typography.Link>
        </Typography.Text>
      </footer>
    </>
  );
};

export default BaseLayout;
