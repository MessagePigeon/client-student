import { createAxiosService } from './lib/create-axios-service';
import { service } from './service';
import {
  AcceptConnectRequestResponse,
  AnswerConnectRequestRequest,
  ConnectCodeResponse,
  InitResponse,
  LoginRequest,
  LoginResponse,
  TeachersResponse,
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
  static async getTeachers() {
    return await service.get<TeachersResponse>('/teachers');
  }
  static async acceptConnectRequest(body: AnswerConnectRequestRequest) {
    return await service.post<AcceptConnectRequestResponse>(
      '/connect-request-acceptance',
      body,
    );
  }
  static async rejectConnectRequest(body: AnswerConnectRequestRequest) {
    return await service.post('/connect-request-rejection', body);
  }
}
