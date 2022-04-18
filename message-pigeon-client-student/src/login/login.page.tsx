import { useMount, useRequest } from 'ahooks';
import { Button, Card, Form, Input, Switch } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../http/apis';
import { refreshAxiosService } from '../http/service';

type LoginForm = {
  baseUrl: string;
  key: string;
  https: boolean;
  wss: boolean;
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  useMount(() => {
    if (localStorage.getItem('token')) {
      navigate('/history');
    }
  });

  const [formData, setFormData] = useState<LoginForm>({
    baseUrl: '',
    key: '',
    https: true,
    wss: true,
  });

  const { run } = useRequest(API.login, {
    manual: true,
    onSuccess(response) {
      localStorage.setItem('baseUrl', formData.baseUrl);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('httpProtocol', formData.https ? 'https' : 'http');
      localStorage.setItem('wsProtocol', formData.wss ? 'wss' : 'ws');
      refreshAxiosService();
      navigate('/history');
    },
  });

  const [form] = Form.useForm();
  const onFinish = (data: LoginForm) => {
    setFormData(data);
    run(`${data.https ? 'https' : 'http'}://${data.baseUrl}`, {
      key: data.key,
    });
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto" style={{ width: 512 }}>
        <Card title="登录" className="mx-3">
          <Form
            name="login"
            onFinish={onFinish}
            autoComplete="off"
            form={form}
            initialValues={{
              baseUrl: localStorage.getItem('baseUrl'),
              https: localStorage.getItem('httpProtocol') === 'https',
              wss: localStorage.getItem('wsProtocol') === 'wss',
            }}
          >
            <Form.Item
              label="服务器地址"
              name="baseUrl"
              rules={[
                { required: true, message: '请填写服务器地址' },
                {
                  pattern:
                    /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)?$/,
                  message: '地址格式不正确 (请勿填写协议, 可添加端口)',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Key"
              name="key"
              rules={[{ required: true, message: '请填写Key' }]}
            >
              <Input.Password />
            </Form.Item>
            <div className="flex">
              <Form.Item
                name="https"
                valuePropName="checked"
                className="inline-flex"
              >
                <Switch checkedChildren="https" unCheckedChildren="http" />
              </Form.Item>
              <Form.Item
                name="wss"
                valuePropName="checked"
                className="inline-flex grow ml-2"
              >
                <Switch checkedChildren="wss" unCheckedChildren="ws" />
              </Form.Item>
              <Form.Item className="inline-flex">
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
