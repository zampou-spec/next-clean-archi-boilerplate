import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import apiClient from '~/shared/settings/api-client';
import { queryClient } from '~/shared/settings/react-query';

const createCourseFetcher = async (data: FormData) => await apiClient.post('api/create-course', { body: data }).json();

const useCreateCourse = (onSuccess?: () => void) =>
  useMutation({
    mutationFn: (data: FormData) => createCourseFetcher(data),
    onSuccess: async () => {
      if (onSuccess) onSuccess();
      toast.success('Cours crée avec succès');

      await queryClient.invalidateQueries({ queryKey: ['get-all-courses'] });
    },
    onError: () => toast.error('Une erreur ses produits veilleurs réessayait plus tard')
  });

export { useCreateCourse, createCourseFetcher };
