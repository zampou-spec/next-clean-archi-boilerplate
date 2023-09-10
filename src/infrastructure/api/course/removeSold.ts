import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';
import { SubscribesData } from '~/infrastructure/ui/molecules/Table/UsersTable';

type removeSoldMutationType = {
  user_id: number;
  subscribe: SubscribesData;
};

const removeSoldFetcher = async (subscribe: SubscribesData, user_id: number) =>
  await apiClient.post(`api/remove-sold/${user_id}`, { json: subscribe }).json();

const useRemoveSold = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: removeSoldMutationType) => removeSoldFetcher(data?.subscribe, data?.user_id),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Solde retiré sur la cour succès');

      await queryClient.invalidateQueries({ queryKey: ['get-all-user'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export type { removeSoldMutationType };
export { useRemoveSold, removeSoldFetcher };
