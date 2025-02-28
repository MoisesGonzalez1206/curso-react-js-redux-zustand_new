export interface AuthResponse {
    message: string;
    status: number;
  }
  
  export interface AuthState {
    user: string | null;
    isAuthenticated: boolean;
    expirationTime: number | null;
    checkAuth: () => Promise<{ isAuthenticated: boolean; user: string | null }>;
    login: (username: string, password: string) => Promise<AuthResponse>;
    logout: () => Promise<string>;
    refreshToken: () => Promise<AuthResponse>;
  }
  
  export interface AuthState2{
    isAuthenticated: boolean;
    checkAuth: () => Promise<{ isAuthenticated: boolean; }>;
    registro: (username: string, password: string) => Promise<AuthResponse>;
    registrout: () => Promise<string>;
    refreshToken: () => Promise<AuthResponse>;
  }
  