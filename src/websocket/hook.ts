import { useEffect } from 'react';
import { websocketEvents } from './events';

export function useAppWebsocket({
  ready,
  onInit,
  onError,
}: {
  ready: boolean;
  onInit: () => void;
  onError: () => void;
}) {
  useEffect(() => {
    if (!ready) return;
    const ws = new WebSocket(
      `${localStorage.getItem('wsProtocol')}://${localStorage.getItem(
        'baseUrl',
      )}`,
    );

    ws.onerror = onError;

    ws.onopen = () => {
      const initPayload = {
        event: 'online',
        data: { token: localStorage.getItem('token'), role: 'student' },
      };
      ws.send(JSON.stringify(initPayload));

      onInit();
    };

    ws.onmessage = ({ data: originData }) => {
      const { event, data } = JSON.parse(originData) as {
        event: keyof typeof websocketEvents;
        data: any;
      };
      websocketEvents[event](data);
    };
    return () => ws.close();
  }, [ready]);
}
