'use client';

import { useClients, useDeleteClient } from '@/lib/hooks/use-clients';
import CreateClientForm from '@/components/clients/create-client-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { routes } from '@/lib/routes';

export default function ClientsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { mutate: deleteClient } = useDeleteClient();
  const { data, isLoading } = useClients(page, 3);

  const setPage = (newPage: number) => {
    router.push(routes.dashboard.clients(newPage));
  };

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>Клиенты</h1>
      <CreateClientForm />
      <ul>
        {data?.data.map((client) => (
          <li key={client.id}>
            {client.name} {client.inn}
            <button
              className={
                'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              }
              onClick={() => deleteClient(client.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Назад
        </button>

        <span>
          {page} / {Math.ceil((data?.total ?? 0) / 3)}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page * 3 >= (data?.total ?? 0)}
        >
          Вперёд
        </button>
      </div>
    </div>
  );
}
