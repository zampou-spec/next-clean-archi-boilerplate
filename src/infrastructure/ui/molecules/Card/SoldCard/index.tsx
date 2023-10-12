'use client';
import { Avatar, Card, CardActionArea, CardContent, Typography } from '@mui/material';

import styles from './SoldCard.module.scss';

type SoldCardProps = {
  name: string;
  sold: number;
};

const SoldCard = ({ name, sold }: SoldCardProps) => (
  <Card elevation={2} className={styles.soldCard}>
    <CardActionArea>
      <CardContent className={styles.container}>
        <Avatar className={styles.sold} sx={{ bgcolor: (theme) => theme.palette.primary.main }}>
          <Typography variant="h4">{sold}</Typography>
        </Avatar>
        <Typography className={styles.title} variant="h6" sx={{ textTransform: 'uppercase' }}>
          {name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default SoldCard;
