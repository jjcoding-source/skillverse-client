
export interface User {
  userID: number;
  fullName: string;
  email: string;
  phone: string;
  roleName: string;
  profileImage?: string;
}

export interface LoginResponse {
  userID: number;
  fullName: string;
  email: string;
  roleName: string;
  token: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}