import { Button, Card, Typography } from 'antd';
import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import { useAppSelector } from '../state/hooks';
import {
  connectCodeSelector,
  teacherUrlSelector,
} from '../state/slices/connect-code.slice';

const ConnectCodePage: React.FC = () => {
  const connectCode = useAppSelector(connectCodeSelector);
  const teacherUrl = useAppSelector(teacherUrlSelector);

  const connectUrl = `${teacherUrl}add-device/${connectCode}`;

  return (
    <>
      <Card
        title="连接代码"
        className="mb-3"
        extra={
          <Button type="link" size="small" onClick={() => location.reload()}>
            刷新
          </Button>
        }
      >
        <Typography.Text className="text-3xl">{connectCode}</Typography.Text>
      </Card>
      <Card title="二维码">
        <QRCodeSVG value={connectUrl} size={256} />
      </Card>
    </>
  );
};

export default ConnectCodePage;
