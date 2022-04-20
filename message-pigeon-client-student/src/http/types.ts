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

export type PaginationRequest = { skip: number; take: number };
type PaginationResponse<T> = {
  data: T[];
  total: number;
};
export type MessagesResponse = PaginationResponse<{
  id: number;
  createdAt: string;
  message: string;
  teacherName: string;
}>;
