import { DragEvent } from 'react';
import * as NextImage from 'next/image';
import Image from '~/infrastructure/ui/atoms/Image';
import { Card, CardContent, CardActionArea } from '@mui/material';

import styles from './PartnerCard.module.scss';

type PartnerCardProps = {
  image: string | NextImage.StaticImageData;
};

const PartnerCard = ({ image }: PartnerCardProps) => {
  const handleDragStart = (e: DragEvent) => e.preventDefault();

  return (
    <Card elevation={0} className={styles.partnerCard}>
      <CardActionArea className={styles.container} onDragStart={handleDragStart} disableRipple={true}>
        <CardContent className={styles.cardContent}>
          <Image alt="" src={image} className={styles.img} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PartnerCard;
