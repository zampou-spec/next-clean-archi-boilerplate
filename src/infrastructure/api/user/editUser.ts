import { toast } from 'react-hot-toast';
import { User } from '~/domain/entities';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const editUserFetcher = async (data: FormData): Promise<User> =>
  await apiClient.post(`api/edit-user/${data.get('id')}`, { body: data }).json();

const useEditUser = (onSuccess?: (user: User) => void) =>
  useMutation({
    mutationFn: (data: FormData) => editUserFetcher(data),
    onSuccess: async (result: User) => {
      if (onSuccess) onSuccess(result);
      toast.success('Compte mis a jour avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-all-user'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useEditUser, editUserFetcher };
