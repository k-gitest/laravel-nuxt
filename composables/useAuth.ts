import { larafetch } from '@/utils/$larafetch';
import type { User, LoginCredentials, RegisterCredentials } from '@/types/index';

export const useAuth = () => {
  const user = useUser()

  const register = async (credentials: RegisterCredentials) => {
    const response = await larafetch('/register', {
      method: 'POST',
      body: credentials,
    });
    return response;
  }

  const login = async(credentials: LoginCredentials) => {
    const response = await larafetch('/login', {
      method: 'POST',
      body: credentials,
    });
    user.value = await fetchCurrentUser();
    return response;
  }

  const logout = async() => {
    await larafetch("/logout", { method: "post" });
    user.value = null;
  }
  
  return {
    register,
    login,
    logout,
  }
}

export const useUser = () => {
  return useState<User | null | undefined>("user", () => undefined);
}

export const fetchCurrentUser = async() => {
  try {
    return await larafetch('/api/user')
  } catch (error: any) {
    if ([401, 419].includes(error?.response?.status)) return null;
    throw error;
  }
};