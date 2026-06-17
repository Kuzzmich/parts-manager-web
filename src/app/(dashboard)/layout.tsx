'use client';

import { useAuthStore } from '@/lib/store/auth.store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { routes } from '@/lib/routes';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token, isHydrated, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !token) {
      router.push('/login');
    }
  }, [token, router, isHydrated]);

  if (!isHydrated || !token) return null;

  return (
    <div className="flex gap-5 h-dvh overflow-hidden">
      <div className={'flex flex-col h-full'}>
        <div className={'flex flex-col gap-2.5'}>
          <Link className={'text-blue-500'} href={routes.dashboard.clients()}>
            Клиенты
          </Link>
          <Link className={'text-blue-500'} href={routes.dashboard.searchLog}>
            Поиск запчастей
          </Link>
          <Link className={'text-blue-500'} href={routes.dashboard.analytics}>
            Аналитика
          </Link>
        </div>
        <button
          className={
            'mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          }
          onClick={logout}
        >
          Выйти
        </button>
      </div>
      <div style={{ flexGrow: 1, overflowY: 'auto' }}>{children}</div>
    </div>
  );
}
