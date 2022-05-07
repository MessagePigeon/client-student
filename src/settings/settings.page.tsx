import { useLocalStorageState } from 'ahooks';
import { Button, Form, InputNumber, Switch } from 'antd';
import React from 'react';
import { testMessageFontSize } from './helper/test-message-font-size.helper';

const SettingsPage: React.FC = () => {
  const [fontSize, setFontSize] = useLocalStorageState<number>('fontSize');
  const [playMessageSound, setPlayMessageSound] =
    useLocalStorageState<boolean>('playMessageSound');

  return (
    <Form>
      <Form.Item label="消息提示音">
        <Switch checked={playMessageSound} onChange={setPlayMessageSound} />
      </Form.Item>
      <Form.Item label="字体大小">
        <InputNumber min={10} value={fontSize} onChange={setFontSize} />
        <Button
          className="ml-2"
          type="primary"
          onClick={() => testMessageFontSize(fontSize!)}
        >
          测试消息
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SettingsPage;
