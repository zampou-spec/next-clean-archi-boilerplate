import { Iconify } from '~/shared/ui/components/Iconify';
import Image from '~/infrastructure/ui/atoms/Image';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';

import styles from './TeamCard.module.scss';
import { StaticImageData } from 'next/image';

type TeamCardProps = {
  job: string;
  name: string;
  description: string;
  image: string | StaticImageData;
};

const TeamCard = ({ job, name, description, image }: TeamCardProps) => (
  <Card className={styles.teamCard}>
    <CardContent className={styles.cardContent}>
      <Box className={styles.imgContainer}>
        <Image alt="" src={image} className={styles.img} />
      </Box>
      <Box className={styles.description}>
        <Typography variant="h4" sx={{ color: '#b80042' }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {job}
        </Typography>
        <Typography variant="body2" sx={{ mt: '5px' }}>
          {description}
        </Typography>
      </Box>
      <Box className={styles.socials}>
        <IconButton size="small" className={styles.iconButton}>
          <Iconify icon="mdi:facebook" fontSize={24} />
        </IconButton>

        <IconButton size="small" className={styles.iconButton}>
          <Iconify icon="mdi:instagram" fontSize={24} />
        </IconButton>

        <IconButton size="small" className={styles.iconButton}>
          <Iconify icon="mdi:twitter" fontSize={24} />
        </IconButton>
      </Box>
    </CardContent>
  </Card>
);

export default TeamCard;
