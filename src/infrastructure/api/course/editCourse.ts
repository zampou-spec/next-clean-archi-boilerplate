import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const editCourseFetcher = async (data: FormData) =>
  await apiClient.post(`api/edit-course/${data.get('id')}`, { body: data }).json();

const useEditCourse = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: FormData) => editCourseFetcher(data),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Cours mis a jour avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-all-courses'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useEditCourse, editCourseFetcher };
