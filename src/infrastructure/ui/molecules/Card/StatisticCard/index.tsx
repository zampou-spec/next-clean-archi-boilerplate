'use client';
import { stringToColor } from '~/shared/utils';
import { Iconify } from '~/shared/ui/components/Iconify';
import { truncateString } from '~/shared/utils/truncateString';
import { Card, CardContent, Box, Typography, Avatar } from '@mui/material';

import styles from './StatisticCard.module.scss';

type StatisticCardProps = {
  icon: string;
  description: string;
  title: string | number | undefined;
};

const StatisticCard = ({ title, description, icon }: StatisticCardProps) => (
  <Card elevation={2} className={styles.statisticCard}>
    <CardContent className={styles.container}>
      <Box className={styles.content}>
        <Typography variant="h1" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={styles.description}>
          {truncateString(description, 30)}
        </Typography>
      </Box>
      <Avatar className={styles.iconContainer} sx={{ bgcolor: stringToColor(description) }}>
        <Iconify icon={icon} fontSize={45} />
      </Avatar>
    </CardContent>
  </Card>
);

export default StatisticCard;
