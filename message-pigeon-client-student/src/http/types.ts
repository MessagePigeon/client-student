export type LoginRequest = { key: string };
export type LoginResponse = { token: string };

export type InitResponse = { defaultRemark: string };

export type TeacherUrlResponse = { url: string };

export type ConnectCodeResponse = { connectCode: string };

export type TeachersResponse = Array<{ id: string; name: string }>;

export type AnswerConnectRequestRequest = { requestId: string };
export type AcceptConnectRequestResponse = {
  teacherId: string;
  teacherName: string;
};
