import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@mui/material';
import Image from '~/infrastructure/ui/atoms/Image';

import styles from './DropImage.module.scss';

type onChanheType = {
  image: File;
  preview: string;
};

type DropImageProps = {
  image?: string;
  defaultImage?: string;
  onChange?: ({ image, preview }: onChanheType) => void;
};

const DropImage = ({ image, defaultImage, onChange }: DropImageProps) => {
  const [localImage, setLocalImage] = useState<string | undefined>(defaultImage);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg']
    },
    onDrop: (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        setLocalImage(URL.createObjectURL(file) as string);
      }

      if (onChange && file && typeof image === 'string') {
        onChange({
          image: file,
          preview: image
        });
      }
    }
  });

  return (
    <Box className={styles.dropImage}>
      <Box {...getRootProps({ className: styles.dropzone })}>
        <input {...getInputProps()} />
        <Typography variant="body2">
          Faites glisser-déposez l&apos;image ici, ou cliquez pour sélectionner l&apos;image.
        </Typography>
      </Box>
      {(image !== undefined || localImage !== undefined) && (image !== '' || localImage !== '') && (
        <Image alt="" src={(image as string) || (localImage as string)} imageSize={{ width: '100%', height: '100%' }} />
      )}
    </Box>
  );
};

export default DropImage;
