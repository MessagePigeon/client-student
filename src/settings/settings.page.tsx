import { useLocalStorageState } from 'ahooks';
import { Form, InputNumber, Switch } from 'antd';
import React from 'react';

const SettingsPage: React.FC = () => {
  const [fontSize, setFontSize] = useLocalStorageState<number>('fontSize');
  const [playMessageSound, setPlayMessageSound] =
    useLocalStorageState<boolean>('playMessageSound');

  return (
    <Form>
      {/* <Form.Item label="开机自启动">
        <Switch />
      </Form.Item> */}
      <Form.Item label="消息提示音">
        <Switch checked={playMessageSound} onChange={setPlayMessageSound} />
      </Form.Item>
      <Form.Item label="字体大小">
        <InputNumber value={fontSize} onChange={setFontSize} />
      </Form.Item>
    </Form>
  );
};

export default SettingsPage;
