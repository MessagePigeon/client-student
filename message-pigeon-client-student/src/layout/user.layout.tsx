import { useRequest } from 'ahooks';
import { Button, Tabs, Typography } from 'antd';
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { API } from '../http/apis';

const UserLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data } = useRequest(API.init, {
    onError() {
      localStorage.removeItem('token');
      navigate('/login');
    },
  });

  return (
    <div className="container mx-auto pt-2">
      <Tabs
        defaultActiveKey={location.pathname}
        onTabClick={(key) => navigate(key)}
        centered
        tabBarExtraContent={{
          left: (
            <Typography.Text className="text-xl">
              {data?.data.defaultRemark}
            </Typography.Text>
          ),
          right: (
            <Button
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/login');
              }}
            >
              退出登录
            </Button>
          ),
        }}
      >
        <Tabs.TabPane tab="历史记录" key="/history">
          {location.pathname === '/history' && <Outlet />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="连接码" key="/connect-code">
          {location.pathname === '/connect-code' && <Outlet />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="已绑定教师" key="/teacher">
          {location.pathname === '/teacher' && <Outlet />}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default UserLayout;
