import { createAxiosService } from './lib/create-axios-service';
import { service } from './service';
import { InitResponse, LoginRequest, LoginResponse } from './types';

export class API {
  static async login(url: string, body: LoginRequest) {
    return await createAxiosService(`${url}/student`).post<LoginResponse>(
      '/login',
      body,
    );
  }
  static async init() {
    return await service.get<InitResponse>('/init');
  }
}
