'use client';

import { useClients, useDeleteClient } from '@/lib/hooks/use-clients';
import CreateClientForm from '@/components/clients/create-client-form';

export default function ClientsPage() {
  const { data, isLoading } = useClients(1, 20);
  const { mutate: deleteClient } = useDeleteClient();

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>Клиенты</h1>
      <CreateClientForm />
      <ul>
        {data?.data.map((client) => (
          <li key={client.id}>
            {client.name} {client.inn}
            <button onClick={() => deleteClient(client.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
