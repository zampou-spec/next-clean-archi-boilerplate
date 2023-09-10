'use client';
import apiClient from '~/shared/settings/api-client';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const ImageUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const uploadImage = async (formData: FormData) => {
    try {
      const response = await apiClient.post('api/upload-image', { body: formData });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Erreur lors de l'envoi de l'image");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'image : ", error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      console.error('Aucune image sélectionnée');
      return;
    }

    if (selectedFile instanceof File) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      await uploadImage(formData);
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ImageUpload;
