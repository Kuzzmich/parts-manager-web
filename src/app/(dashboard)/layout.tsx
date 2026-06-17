'use client';

import { useAuthStore } from '@/lib/store/auth.store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token, isHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !token) {
      router.push('/login');
    }
  }, [token, router, isHydrated]);

  if (!isHydrated || !token) return null;

  return <>{children}</>;
}
