import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const deleteCourseFetcher = async (id: number) => await apiClient.post(`api/delete-course/${id}`).json();

const useDeleteCourse = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (id: number) => deleteCourseFetcher(id),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Cours supprimer avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-all-courses'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useDeleteCourse, deleteCourseFetcher };
