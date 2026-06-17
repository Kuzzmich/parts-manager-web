import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateClient } from '@/lib/hooks/use-clients';

const createClientSchema = z.object({
  name: z.string().min(1, 'Имя обязательно'),
  inn: z.string().optional(),
  notes: z.string().optional(),
});

type CreateClientForm = z.infer<typeof createClientSchema>;

export default function CreateClientForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateClientForm>({
    resolver: zodResolver(createClientSchema),
  });

  const { mutate, isPending, error } = useCreateClient();
  const onSubmit = (data: CreateClientForm) => {
    mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
    >
      <input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}

      <input {...register('inn')} />

      <input {...register('notes')} />

      <button type="submit" disabled={isPending}>
        {isPending ? 'Загрузка...' : 'Создать'}
      </button>

      {error && <span>{(error as any).response?.data?.message}</span>}
    </form>
  );
}
