import { createAxiosService } from './lib/create-axios-service';
import { service } from './service';
import {
  ConnectCodeResponse,
  InitResponse,
  LoginRequest,
  LoginResponse,
  TeacherUrlResponse,
} from './types';

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
  static async getTeacherUrl() {
    return await service.get<TeacherUrlResponse>('/teacher-url');
  }
  static async getConnectCode() {
    return await service.get<ConnectCodeResponse>('/connect-code');
  }
}
