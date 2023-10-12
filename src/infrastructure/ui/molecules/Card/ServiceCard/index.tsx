'use client';
import { Iconify } from '~/shared/ui/components/Iconify';
import { Card, CardContent, CardActionArea, Typography } from '@mui/material';

import styles from './ServiceCard.module.scss';

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <Card elevation={0} className={styles.serviceCard}>
    <CardActionArea className={styles.container}>
      <CardContent className={styles.cardContent}>
        <Iconify icon={icon} fontSize={70} />
        <Typography variant="h3" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={styles.description}>
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ServiceCard;
