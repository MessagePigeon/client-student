import { useBoolean, useRequest } from 'ahooks';
import { Button, message, Tabs, Typography } from 'antd';
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { API } from '../http/apis';
import { useAppWebsocket } from '../websocket/hook';
import { useInitUserData } from './helpers/init-user-data.helper';

const UserLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [initSuccess, { setTrue: setInitSuccess }] = useBoolean();
  const { data } = useRequest(API.init, {
    onError() {
      localStorage.removeItem('token');
      navigate('/login');
    },
    onSuccess() {
      setInitSuccess();
    },
  });

  const [wsInitSuccess, { setTrue: setWsInitSuccess }] = useBoolean();
  useAppWebsocket({
    ready: initSuccess,
    onInit() {
      setWsInitSuccess();
    },
    onError() {
      message.error('Websocket无法连接, 请检查协议是否正确');
      localStorage.removeItem('token');
      navigate('/login');
    },
  });

  useInitUserData({ ready: wsInitSuccess });

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
