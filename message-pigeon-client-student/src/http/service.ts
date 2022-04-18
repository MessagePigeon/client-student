import { createAxiosService } from './lib/create-axios-service';

export let service = createAxiosService(
  `${localStorage.getItem('httpProtocol')!}://${localStorage.getItem(
    'baseUrl',
  )!}/student`,
);

export const refreshAxiosService = () => {
  service = createAxiosService(
    `${localStorage.getItem('httpProtocol')!}://${localStorage.getItem(
      'baseUrl',
    )!}/student`,
  );
};
