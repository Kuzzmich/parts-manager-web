import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/auth.store';
import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/lib/api/auth';
import { routes } from '@/lib/routes';

export function useLogin() {
  const router = useRouter();
  const { setToken } = useAuthStore();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      setToken(data.access_token);
      localStorage.setItem('access_token', data.access_token);
      router.push(routes.dashboard.clients());
    },
  });
}

export function useRegister() {
  const router = useRouter();
  const { setToken } = useAuthStore();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      setToken(data.access_token);
      localStorage.setItem('access_token', data.access_token);
      router.push(routes.dashboard.clients());
    },
  });
}
