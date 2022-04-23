import { useInViewport, useRequest, useUpdateEffect } from 'ahooks';
import { Button, Card, Spin, Typography } from 'antd';
import dayjs from 'dayjs';
import React, { useRef } from 'react';
import { popupMessage } from '../common/helpers/popup-message.helper';
import { API } from '../http/apis';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import {
  messagesActions,
  messagesCountSelector,
  messagesSelector,
  messagesTotalSelector,
} from '../state/slices/messages.slice';
import { openingMessageIdsSelector } from '../state/slices/opening-messages.slice';

const HistoryPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(messagesSelector);
  const count = useAppSelector(messagesCountSelector);
  const total = useAppSelector(messagesTotalSelector);

  const openingMessageIds = useAppSelector(openingMessageIdsSelector);

  const { run } = useRequest(() => API.getMessages({ skip: count, take: 10 }), {
    onSuccess(response) {
      dispatch(messagesActions.setTotal(response.data.total));
      dispatch(messagesActions.appendMany(response.data.data));
    },
  });

  const loadingEleRef = useRef(null);
  const [needLoading] = useInViewport(loadingEleRef);
  useUpdateEffect(() => {
    if (needLoading) {
      run();
    }
  }, [needLoading]);

  return (
    <>
      {messages.map(({ createdAt, ...message }) => (
        <Card
          key={message.id}
          title={message.teacherName}
          className="mb-4"
          extra={
            <Button
              type="link"
              size="small"
              onClick={async () => {
                await popupMessage({
                  ...message,
                  closeDelay: 0,
                });
              }}
              disabled={openingMessageIds.includes(message.id)}
            >
              重新显示
            </Button>
          }
        >
          <div className="whitespace-pre-wrap">{message.message}</div>
          <Typography.Text type="secondary" className="text-xs">
            {dayjs(createdAt).format('YYYY.MM.DD HH:mm:ss')}
          </Typography.Text>
        </Card>
      ))}
      {count < total && (
        <div className="text-center" ref={loadingEleRef}>
          <Spin />
        </div>
      )}
    </>
  );
};

export default HistoryPage;
